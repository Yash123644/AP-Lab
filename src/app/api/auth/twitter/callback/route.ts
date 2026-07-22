import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getAdminAuth } from "@/lib/firebaseAdmin";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const adminAuth = getAdminAuth();
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const state = requestUrl.searchParams.get("state");

  const cookieStore = cookies();
  const savedState = cookieStore.get("twitter_oauth_state")?.value;
  const codeVerifier = cookieStore.get("twitter_oauth_code_verifier")?.value;

  const origin = requestUrl.origin;
  const redirectUri = `${origin}/api/auth/twitter/callback`;

  // Helper to return HTML that posts messages to the parent window and closes itself
  const createMessageHtml = (type: "twitter-auth-success" | "twitter-auth-error", data: any) => {
    const isSuccess = type === "twitter-auth-success";
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${isSuccess ? "Authenticating..." : "Authentication Failed"}</title>
        <style>
          body {
            background-color: #0A0A0A;
            color: ${isSuccess ? "#ffffff" : "#ff4a4a"};
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            text-align: center;
            padding: 20px;
          }
          .spinner {
            border: 3px solid rgba(255,255,255,0.1);
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border-left-color: #00ffb3;
            animation: spin 1s linear infinite;
          }
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          .error-icon { font-size: 40px; margin-bottom: 20px; }
          .message { font-size: 16px; font-weight: 500; margin-top: 15px; }
        </style>
      </head>
      <body>
        ${isSuccess ? '<div class="spinner"></div>' : '<div class="error-icon">⚠️</div>'}
        <div class="message">${isSuccess ? "Signing you in..." : "Sign-in failed. Please close this window and try again."}</div>
        <script>
          const payload = ${JSON.stringify(data)};
          const targetOrigin = window.location.origin;
          if (window.opener) {
            window.opener.postMessage({ type: "${type}", ...payload }, targetOrigin);
          }
          ${isSuccess ? "window.close();" : "setTimeout(() => window.close(), 3000);"}
        </script>
      </body>
      </html>
    `;
  };

  try {
    // Clear cookies first so we don't leak them
    cookieStore.delete("twitter_oauth_state");
    cookieStore.delete("twitter_oauth_code_verifier");

    const clientId = process.env.TWITTER_CLIENT_ID || "Y1NnSWtLdlhYN1g2ZTdHM2FUUmY6MTpjaQ";
    const clientSecret = process.env.TWITTER_CLIENT_SECRET || "0wP6_BuApD6cYZedRbiGBEkdjsQD4pq_8pYiL95avRMPkM8X0j";

    if (!code || !state) {
      throw new Error("Missing code or state query parameters from X redirect.");
    }

    if (!savedState || !codeVerifier) {
      throw new Error("OAuth session has expired. Please try signing in again.");
    }

    if (state !== savedState) {
      throw new Error("CSRF state mismatch. Authentication failed.");
    }

    // 1. Exchange authorization code for X Access Token
    const tokenParams = new URLSearchParams();
    tokenParams.append("code", code);
    tokenParams.append("grant_type", "authorization_code");
    tokenParams.append("redirect_uri", redirectUri);
    tokenParams.append("code_verifier", codeVerifier);
    tokenParams.append("client_id", clientId);

    const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

    const tokenResponse = await fetch("https://api.twitter.com/2/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Basic ${basicAuth}`,
      },
      body: tokenParams.toString(),
    });

    const tokenData = await tokenResponse.json();
    if (!tokenResponse.ok) {
      console.error("X token exchange error:", tokenData);
      throw new Error(`Token exchange failed: ${tokenData.error_description || tokenData.error || tokenResponse.statusText}`);
    }

    const accessToken = tokenData.access_token;

    // 2. Fetch User Info from X API v2
    const userResponse = await fetch("https://api.twitter.com/2/users/me?user.fields=profile_image_url", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userData = await userResponse.json();
    if (!userResponse.ok) {
      console.error("X user profile fetch error:", userData);
      throw new Error(`Failed to retrieve profile: ${userData.error || userResponse.statusText}`);
    }

    const { id, name, username, profile_image_url } = userData.data;

    // 3. Create or update Firebase Custom User
    const firebaseUid = `twitter:${id}`;
    
    // We clean up X profile image URL suffix to get standard size image instead of standard thumbnail "_normal"
    const photoUrl = profile_image_url ? profile_image_url.replace("_normal", "") : undefined;

    let userRecord;
    try {
      // Check if user exists
      userRecord = await adminAuth.getUser(firebaseUid);
      // Update display name and photoURL if needed
      userRecord = await adminAuth.updateUser(firebaseUid, {
        displayName: name,
        photoURL: photoUrl,
      });
      console.log(`Updated existing user record for X user ${username} (UID: ${firebaseUid})`);
    } catch (firebaseError: any) {
      if (firebaseError.code === "auth/user-not-found") {
        // Create user if not found
        userRecord = await adminAuth.createUser({
          uid: firebaseUid,
          displayName: name,
          photoURL: photoUrl,
        });
        console.log(`Created new Firebase user record for X user ${username} (UID: ${firebaseUid})`);
      } else {
        console.error("Firebase admin database operation failed:", firebaseError);
        throw firebaseError;
      }
    }

    // 4. Generate custom auth token for user
    let customToken;
    try {
      customToken = await adminAuth.createCustomToken(firebaseUid);
    } catch (tokenError: any) {
      console.error("Error creating Firebase Custom Token:", tokenError);
      throw new Error("Unable to sign in. Server failed to issue authentication token. Please verify Firebase Admin credentials are set up.");
    }

    // 5. Render success html page
    return new Response(createMessageHtml("twitter-auth-success", { token: customToken }), {
      headers: { "Content-Type": "text/html" },
    });

  } catch (error: any) {
    console.error("Error during Twitter OAuth callback:", error);
    return new Response(createMessageHtml("twitter-auth-error", { error: error.message }), {
      headers: { "Content-Type": "text/html" },
      status: 400,
    });
  }
}

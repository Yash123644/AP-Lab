import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { generateState, generateCodeVerifier, generateCodeChallenge } from "@/lib/pkce";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const clientId = process.env.TWITTER_CLIENT_ID || "Y1NnSWtLdlhYN1g2ZTdHM2FUUmY6MTpjaQ";

    const state = generateState();
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = generateCodeChallenge(codeVerifier);

    const requestUrl = new URL(request.url);
    const redirectUri = `${requestUrl.origin}/api/auth/twitter/callback`;

    // Store state and codeVerifier in secure HTTP-only cookies
    const cookieStore = cookies();
    const isProd = process.env.NODE_ENV === "production";
    
    // Set cookies with 5-minute expiration
    cookieStore.set("twitter_oauth_state", state, {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      maxAge: 300,
      path: "/",
    });

    cookieStore.set("twitter_oauth_code_verifier", codeVerifier, {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      maxAge: 300,
      path: "/",
    });

    // Construct X OAuth 2.0 Auth URL
    const twitterAuthUrl = new URL("https://twitter.com/i/oauth2/authorize");
    twitterAuthUrl.searchParams.append("response_type", "code");
    twitterAuthUrl.searchParams.append("client_id", clientId);
    twitterAuthUrl.searchParams.append("redirect_uri", redirectUri);
    twitterAuthUrl.searchParams.append("scope", "users.read");
    twitterAuthUrl.searchParams.append("state", state);
    twitterAuthUrl.searchParams.append("code_challenge", codeChallenge);
    twitterAuthUrl.searchParams.append("code_challenge_method", "S256");

    return NextResponse.redirect(twitterAuthUrl.toString());
  } catch (error: any) {
    console.error("Error starting Twitter OAuth:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}

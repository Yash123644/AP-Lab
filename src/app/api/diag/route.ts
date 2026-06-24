import { NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebaseAdmin";

export const dynamic = "force-dynamic";

export async function GET() {
  let adminDbStatus = "not called";
  try {
    const db = getAdminDb();
    adminDbStatus = "success";
  } catch (dbError: any) {
    adminDbStatus = `error: ${dbError.message}`;
  }

  const diagInfo: any = {
    timestamp: new Date().toISOString(),
    adminDbStatus,
    env: {
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || "not set",
      NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "not set",
      FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL || "not set",
      hasPrivateKey: !!process.env.FIREBASE_PRIVATE_KEY,
      privateKeyLength: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.length : 0,
    },
  };

  const key = process.env.FIREBASE_PRIVATE_KEY;
  if (key) {
    diagInfo.privateKeyFormat = {
      startsWithBegin: key.startsWith("-----BEGIN PRIVATE KEY-----"),
      endsWithEnd: key.endsWith("-----END PRIVATE KEY-----") || key.trim().endsWith("-----END PRIVATE KEY-----"),
      containsLiteralNewlineEscapes: key.includes("\\n"),
      containsActualNewlines: key.includes("\n"),
      startsWithQuote: key.startsWith('"') || key.startsWith("'"),
      endsWithQuote: key.endsWith('"') || key.endsWith("'"),
      first20Chars: key.substring(0, 20),
      last20Chars: key.substring(key.length - 20),
    };
  }

  // Try importing firebase-admin dynamically to check for runtime import errors
  try {
    const adminApp = await import("firebase-admin/app");
    diagInfo.firebaseAdminAppImport = "success";
    
    // Try building a cert if credentials exist
    if (key && process.env.FIREBASE_CLIENT_EMAIL) {
      try {
        let cleanedKey = key.trim();
        if (cleanedKey.startsWith('"') && cleanedKey.endsWith('"')) {
          cleanedKey = cleanedKey.substring(1, cleanedKey.length - 1);
        } else if (cleanedKey.startsWith("'") && cleanedKey.endsWith("'")) {
          cleanedKey = cleanedKey.substring(1, cleanedKey.length - 1);
        }
        cleanedKey = cleanedKey.replace(/\\n/g, "\n").replace(/\\\\n/g, "\n").replace(/\r/g, "").trim();

        const certResult = adminApp.cert({
          projectId: process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "ap-lab-be321",
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: cleanedKey,
        });
        diagInfo.certCreation = "success";
      } catch (certError: any) {
        diagInfo.certCreation = `error: ${certError.message}`;
      }
    }
  } catch (importError: any) {
    diagInfo.firebaseAdminAppImport = `error: ${importError.message}`;
  }

  return NextResponse.json(diagInfo);
}

import { NextRequest, NextResponse } from "next/server";
import { getAdminDb, getAdminAuth } from "@/lib/firebaseAdmin";

export async function POST(req: NextRequest) {
  try {
    const { uid, code } = await req.json();

    if (!uid || !code) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const db = getAdminDb();
    const docRef = db.collection("verificationCodes").doc(uid);
    const docSnap = await docRef.get();

    if (!docSnap.exists) {
      return NextResponse.json({ error: "Code has expired or does not exist. Please request a new one." }, { status: 400 });
    }

    const data = docSnap.data();

    // Check code match
    if (data.code !== code.trim()) {
      return NextResponse.json({ error: "Incorrect verification code. Please try again." }, { status: 400 });
    }

    // Check expiration (15 minutes)
    const createdAt = data.createdAt.toDate();
    const now = new Date();
    const expirationTimeMs = 15 * 60 * 1000;
    if (now.getTime() - createdAt.getTime() > expirationTimeMs) {
      // Clean up expired doc
      await docRef.delete();
      return NextResponse.json({ error: "Verification code has expired. Please request a new one." }, { status: 400 });
    }

    // Update user auth profile to emailVerified = true
    const auth = getAdminAuth();
    await auth.updateUser(uid, {
      emailVerified: true,
    });

    // Clean up code from DB
    await docRef.delete();

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error in verify-otp API:", error);
    return NextResponse.json({ error: error?.message || "Internal server error" }, { status: 500 });
  }
}

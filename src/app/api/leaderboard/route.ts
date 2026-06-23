import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const snapshot = await adminDb
      .collection("userProgress")
      .orderBy("xp", "desc")
      .limit(10)
      .get();

    const leaderList = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        uid: doc.id,
        displayName: data.displayName || "AP Scholar",
        photoURL: data.photoURL || "",
        xp: data.xp || 0,
        level: data.level || 1,
      };
    });

    return NextResponse.json(leaderList);
  } catch (error: any) {
    console.error("Leaderboard API error:", error);
    return NextResponse.json({ error: error.message || "Failed to fetch leaderboard" }, { status: 500 });
  }
}

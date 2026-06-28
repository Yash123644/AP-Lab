import { NextRequest, NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebaseAdmin";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const adminDb = getAdminDb();
    const { searchParams } = new URL(req.url);
    const currentUid = searchParams.get("uid");

    // 1. Define the 8 bots with requested levels: 29, 26, 25, 25, 15, 11, 10, 8
    const bots = [
      {
        uid: "bot-1",
        displayName: "Sarah Jenkins",
        photoURL: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
        xp: 10420,
        level: 29,
      },
      {
        uid: "bot-2",
        displayName: "Chloe Zhang",
        photoURL: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
        xp: 8550,
        level: 26,
      },
      {
        uid: "bot-3",
        displayName: "Ethan Hunt",
        photoURL: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        xp: 7980,
        level: 25,
      },
      {
        uid: "bot-4",
        displayName: "Devon Lane",
        photoURL: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
        xp: 7935,
        level: 25,
      },
      {
        uid: "bot-5",
        displayName: "Lucas Vance",
        photoURL: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80",
        xp: 3270,
        level: 15,
      },
      {
        uid: "bot-6",
        displayName: "Nisha Patel",
        photoURL: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        xp: 1950,
        level: 11,
      },
      {
        uid: "bot-7",
        displayName: "Emma Watson",
        photoURL: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80",
        xp: 1650,
        level: 10,
      },
      {
        uid: "bot-8",
        displayName: "Marcus Aurelius",
        photoURL: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80",
        xp: 1140,
        level: 8,
      },
    ];

    const leaderList = [...bots];

    // Create a 4-second timeout promise
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Database connection timeout")), 4000)
    );

    // 2. Fetch the active logged-in user from Firestore (if uid is provided)
    if (currentUid && currentUid.trim() !== "") {
      try {
        const fetchDocPromise = adminDb.collection("userProgress").doc(currentUid).get();
        const userDoc = (await Promise.race([fetchDocPromise, timeoutPromise])) as any;
        
        if (userDoc.exists) {
          const data = userDoc.data();
          // Prevent duplicate entry
          if (!leaderList.some((b) => b.uid === currentUid)) {
            leaderList.push({
              uid: currentUid,
              displayName: data.displayName || "AP Scholar",
              photoURL: data.photoURL || "",
              xp: data.xp || 0,
              level: data.level || 1,
            });
          }
        }
      } catch (dbError) {
        console.error("Firestore user fetch error, falling back to bots only:", dbError);
      }
    }

    // 3. Sort by XP desc
    leaderList.sort((a, b) => (b.xp || 0) - (a.xp || 0));

    return new NextResponse(JSON.stringify(leaderList), {
      status: 200,
      headers: {
        "Cache-Control": "no-store, max-age=0, must-revalidate",
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    console.error("Leaderboard API error:", error);
    return NextResponse.json({ 
      error: error.message || "Failed to fetch leaderboard",
    }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebaseAdmin";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const adminDb = getAdminDb();
    let snapshot = await adminDb
      .collection("userProgress")
      .orderBy("xp", "desc")
      .limit(10)
      .get();

    // If the database is empty, seed it with initial mock student profiles
    if (snapshot.empty) {
      console.log("userProgress collection is empty. Seeding mock student profiles...");
      const mockUsers = [
        {
          uid: "mock-user-1",
          displayName: "Alex Mercer",
          photoURL: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
          xp: 1250,
          level: 13,
          email: "alex@aplab.org",
        },
        {
          uid: "mock-user-2",
          displayName: "Sofia Rodriguez",
          photoURL: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
          xp: 940,
          level: 10,
          email: "sofia@aplab.org",
        },
        {
          uid: "mock-user-3",
          displayName: "Kenji Sato",
          photoURL: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
          xp: 680,
          level: 7,
          email: "kenji@aplab.org",
        },
        {
          uid: "mock-user-4",
          displayName: "Liam Gallagher",
          photoURL: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
          xp: 450,
          level: 5,
          email: "liam@aplab.org",
        },
        {
          uid: "mock-user-5",
          displayName: "Maya Lin",
          photoURL: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
          xp: 180,
          level: 2,
          email: "maya@aplab.org",
        }
      ];

      const batch = adminDb.batch();
      mockUsers.forEach((user) => {
        const docRef = adminDb.collection("userProgress").doc(user.uid);
        batch.set(docRef, {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
          xp: user.xp,
          level: user.level,
          email: user.email,
          completedTopics: [],
          masteryScores: {},
          lastAccessed: new Date()
        });
      });
      await batch.commit();
      console.log("Mock student data committed successfully!");

      // Re-fetch the newly seeded documents
      snapshot = await adminDb
        .collection("userProgress")
        .orderBy("xp", "desc")
        .limit(10)
        .get();
    }

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

import { NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebaseAdmin";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const adminDb = getAdminDb();

    // Create a database fetch promise
    const fetchPromise = adminDb
      .collection("userProgress")
      .orderBy("xp", "desc")
      .limit(10)
      .get();

    // Create a 4-second timeout promise to prevent Lambda function hangs on Vercel
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Database connection timeout")), 4000)
    );

    // Race the fetch call against the timeout
    let snapshot = (await Promise.race([fetchPromise, timeoutPromise])) as any;

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
      
      // Also race batch commit with a 4-second timeout
      const commitPromise = batch.commit();
      await Promise.race([commitPromise, timeoutPromise]);
      console.log("Mock student data committed successfully!");

      // Re-fetch the newly seeded documents with timeout race
      const refetchPromise = adminDb
        .collection("userProgress")
        .orderBy("xp", "desc")
        .limit(10)
        .get();
      snapshot = await Promise.race([refetchPromise, timeoutPromise]);
    }

    const leaderList = snapshot.docs.map((doc: any) => {
      const data = doc.data();
      return {
        uid: doc.id,
        displayName: data.displayName || "AP Scholar",
        photoURL: data.photoURL || "",
        xp: data.xp || 0,
        level: data.level || 1,
      };
    });

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
      stack: error.stack,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID || "not set",
      hasPrivateKey: !!process.env.FIREBASE_PRIVATE_KEY,
      privateKeyLength: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.length : 0,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL || "not set"
    }, { status: 500 });
  }
}

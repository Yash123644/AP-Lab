import { NextRequest, NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebaseAdmin";
import { getLevelForXp } from "@/lib/xpProgression";

export const dynamic = "force-dynamic";

// Generator for 1000 realistic student accounts between 1650 and 10 XP
function generatePlaceholderAccounts() {
  const firstNames = [
    "Ethan", "Olivia", "Lucas", "Emma", "Noah", "Ava", "Liam", "Sophia", "Mason", "Isabella",
    "Oliver", "Mia", "Elijah", "Charlotte", "James", "Amelia", "Benjamin", "Harper", "William", "Evelyn",
    "Alexander", "Abigail", "Henry", "Emily", "Jacob", "Camila", "Michael", "Ella", "Daniel", "Elizabeth",
    "Logan", "Sofia", "Jackson", "Avery", "Sebastian", "Scarlett", "Jack", "Grace", "Aiden", "Chloe",
    "Owen", "Victoria", "Samuel", "Riley", "Matthew", "Aria", "Joseph", "Lily", "Levi", "Aubrey",
    "David", "Zoey", "John", "Penelope", "Wyatt", "Hannah", "Carter", "Layla", "Julian", "Addison",
    "Luke", "Eleanor", "Grayson", "Natalie", "Isaac", "Luna", "Jayden", "Savannah", "Theodore", "Brooklyn",
    "Gabriel", "Leah", "Anthony", "Zoe", "Dylan", "Stella", "Leo", "Hazel", "Lincoln", "Ellie",
    "Jaxon", "Paisley", "Asher", "Audrey", "Christopher", "Skylar", "Josiah", "Violet", "Andrew", "Claire"
  ];

  const lastNames = [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
    "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
    "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
    "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
    "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts",
    "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes",
    "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper",
    "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson"
  ];

  const list: any[] = [];
  const total = 1000;

  for (let i = 0; i < total; i++) {
    const fn = firstNames[i % firstNames.length];
    const ln = lastNames[(i * 7) % lastNames.length];
    const name = `${fn} ${ln}`;
    // Generate smooth descending XP between 1620 and 15
    const xp = Math.max(15, Math.floor(1620 - (i * 1.61) + ((i % 5) * 3)));
    const level = getLevelForXp(xp);

    list.push({
      uid: `placeholder-${i + 1}`,
      displayName: name,
      photoURL: "",
      xp,
      level,
    });
  }

  return list;
}

const PLACEHOLDER_ACCOUNTS = generatePlaceholderAccounts();

export async function GET(req: NextRequest) {
  try {
    const adminDb = getAdminDb();
    const { searchParams } = new URL(req.url);
    const currentUid = searchParams.get("uid");

    // Top 10 global scholars
    const topBots = [
      {
        uid: "bot-1",
        displayName: "Tyler Davis",
        photoURL: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80",
        xp: 12450,
        level: 32,
      },
      {
        uid: "bot-2",
        displayName: "Sofia Rodriguez",
        photoURL: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
        xp: 10420,
        level: 29,
      },
      {
        uid: "bot-3",
        displayName: "Alex Mercer",
        photoURL: "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=100&auto=format&fit=crop&q=80",
        xp: 8980,
        level: 27,
      },
      {
        uid: "bot-4",
        displayName: "Maya Lin",
        photoURL: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
        xp: 8550,
        level: 26,
      },
      {
        uid: "bot-5",
        displayName: "Marcus Vance",
        photoURL: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        xp: 7980,
        level: 25,
      },
      {
        uid: "bot-6",
        displayName: "Elena Rostova",
        photoURL: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        xp: 7935,
        level: 25,
      },
      {
        uid: "bot-7",
        displayName: "Kenji Sato",
        photoURL: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=100&auto=format&fit=crop&q=80",
        xp: 4890,
        level: 18,
      },
      {
        uid: "bot-8",
        displayName: "Nisha Patel",
        photoURL: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80",
        xp: 3270,
        level: 15,
      },
      {
        uid: "bot-9",
        displayName: "Liam Gallagher",
        photoURL: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=100&auto=format&fit=crop&q=80",
        xp: 1950,
        level: 11,
      },
      {
        uid: "bot-10",
        displayName: "Chloe Zhang",
        photoURL: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=100&auto=format&fit=crop&q=80",
        xp: 1650,
        level: 10,
      },
    ];

    const leaderList = [...topBots, ...PLACEHOLDER_ACCOUNTS];

    // Create a 4-second timeout promise
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Database connection timeout")), 4000)
    );

    // Fetch the active logged-in user from Firestore (if uid is provided)
    if (currentUid && currentUid.trim() !== "") {
      try {
        const fetchDocPromise = adminDb.collection("userProgress").doc(currentUid).get();
        const userDoc = (await Promise.race([fetchDocPromise, timeoutPromise])) as any;
        
        if (userDoc.exists) {
          const data = userDoc.data();
          // Remove duplicate if placeholder exists
          const existingIdx = leaderList.findIndex((b) => b.uid === currentUid);
          if (existingIdx !== -1) {
            leaderList.splice(existingIdx, 1);
          }
          leaderList.push({
            uid: currentUid,
            displayName: data.displayName || "AP Scholar",
            photoURL: data.photoURL || "",
            xp: data.xp || 0,
            level: data.level || 1,
          });
        }
      } catch (dbError) {
        console.error("Firestore user fetch error, falling back to bots only:", dbError);
      }
    }

    // Sort by XP desc
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

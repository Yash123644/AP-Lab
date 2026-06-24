import { NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebaseAdmin";

export const dynamic = "force-dynamic";

export async function GET() {
  const info: any = {
    step: "start",
  };

  try {
    const adminDb = getAdminDb();
    info.step = "querying";
    const snap = await adminDb.collection("userProgress").limit(1).get();
    info.success = true;
    info.snapshotEmpty = snap.empty;
    info.snapshotSize = snap.size;
  } catch (error: any) {
    info.success = false;
    info.errorMessage = error.message;
    info.errorStack = error.stack;
  }

  return NextResponse.json(info);
}

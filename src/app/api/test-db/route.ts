import { NextResponse } from "next/server";
import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

export const dynamic = "force-dynamic";

export async function GET() {
  const info: any = {
    envExists: {
      projectId: !!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: !!process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: !!process.env.FIREBASE_PRIVATE_KEY,
    },
    projectIdValue: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "ap-lab-be321",
    clientEmailValue: process.env.FIREBASE_CLIENT_EMAIL || "fallback-email",
    appsCount: getApps().length,
  };

  try {
    const projectId = (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "ap-lab-be321").trim();
    const clientEmail = (process.env.FIREBASE_CLIENT_EMAIL || "firebase-adminsdk-fbsvc@ap-lab-be321.iam.gserviceaccount.com").trim();
    const privateKey = process.env.FIREBASE_PRIVATE_KEY || "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCnN+CDS4GpSIVU\nTKK1cclxLXTsxuO3ktrEsnrwrsfUZtsET6dBCVQWA8+aCCFcJaiOl5DZun+sYf+G\n1pRysJSJpAJMAPUiD7FQr3gCIGGEw+oIbvTc40Oain2/KOVFWFpnKhQB4eopD5Mr\nrMQUUQalQochjs30M+MNy53zOWAlYcvAcHPjv4P+j/hGapyE0eZ9V0vxm8I5LG8O\nKRsyULJUpvoeIGxusAOAjqOmqw8CwL5cfHjR2tgI4lYX7tdaLa9M07kvIHrQCFh/\nbVWdo/HKTu+pCbxKteTUUXvP70VNbyYbEV99wOMdP/xi8aGEOOzY/qslkoph+EIm\nI0vzwBuPAgMBAAECggEAMa6E2o2DAxhEYNT6HL2nc6RlUnoPKzoLHJjItRzAy2cZ\n2HCQCV8rp/TO5/1VaAraRy9Z/o6OI1nkcRvs9BxprXFYq1s3eby+2nGfzsXvI2KP\n9Jx+zOgK7G4MSVDtuYo0JeWXFy4Xg8aYW8gTY9PlDRG0k3BZ2Z3W7oDaN2sLGV+3\nlgJFr6flvLJoVZREdVMuiZdUOKbWGsns2Yjz413d1dM6Syx3eOrdsmzxsSyS7rQQ\nVmHJdIPCnsPccFlgbVP77cSTjiQGe8RsYmGtHKbfrVA2xeeH2MxULu1kUxpcppaC\nL2A8AXT/XXEqIHsj2ExuoqSp319+M7myfsf5k92vpQKBgQDQyAHr0rzcEAW+dZuM\nmXEq7NJ2NvmNUEOrKCm7eTCCMKteon2v6dVGsJh6J7FiIyegE42e3f3/hP/aG8Xf\n2JogmU83xos5Boe+XEAkpJ8oL+Ta6u0oVGWxT7oGYjckE5Zb2Ml4upDcHFsvRv2L\nTCSgjqShZ5JN3lpAA8vkBjts7QKBgQDNCXWkRnJsce7w9Zts2cxEaZWldWKpbVsg\nUZlAmVhWiPsB8S1BdevNKEcLIWbPhRJUlZ7K1D8zKORDWzYz4F0oFsEXVRCLl8ew\nLn7js3Zj2lNO/Z9xsGf41m7vXvjTLU1Wn052qj80CMAZajdvzm+lrBRCBpv8fxiI\nZwfQNxnW6wKBgHDoWTGhbAVOnOydSZvFt4/RNxg7LsYfbBj5xWffaD5f961cDsC9\noltyUWNuZ918yYcmS+Zog15WHM9lSaN+zgtnHZI6SzxxraNi3EV0yaXAEPHbLpoq\n2jwDs8SUBOH7vcq5+GrT6lc+9okgySk16nDx81JeYp696uzHoNIWFLkZAoGBALUp\nsIpPvHZZTNgXCxdocXXZHOIvD9fHygaKUrCjTUxYiAA1StlWCd0hw3PwNVkSqRmX\ngdCRLK5VaSqigwffLDBpun6VKKNOnp/q1S73uJmNpKJcse7QAW36edaCwbRFiNoK\ntFdhIasmOCW8lfLyIe/uVY/pKxY0bkbHUj4FEY21AoGBAKpEDEIDTAKMR0WPs/Zc\nkOkP9R94y7FZPAoBwUFUKgluRrZU102uzZoDzypunknBnI6s01z+ka4bcIKo6a0W\ntDKbrOzB6lbbVa0k8aVKySIrvz40G56WWxyhBhTolrqTtO7Yi9eerr8EZ6LcmNwj\nb0f+UNkBqOj4m0zUffNPmAgw\n-----END PRIVATE KEY-----\n";

    let cleanedPrivateKey = privateKey;
    if (cleanedPrivateKey) {
      cleanedPrivateKey = cleanedPrivateKey.trim();
      if (cleanedPrivateKey.startsWith('"') && cleanedPrivateKey.endsWith('"')) {
        cleanedPrivateKey = cleanedPrivateKey.substring(1, cleanedPrivateKey.length - 1);
      }
      if (cleanedPrivateKey.startsWith("'") && cleanedPrivateKey.endsWith("'")) {
        cleanedPrivateKey = cleanedPrivateKey.substring(1, cleanedPrivateKey.length - 1);
      }
      cleanedPrivateKey = cleanedPrivateKey.trim().replace(/\\n/g, "\n");
    }

    info.cleanedPrivateKeyLength = cleanedPrivateKey ? cleanedPrivateKey.length : 0;
    info.cleanedPrivateKeyStartsWithBegin = cleanedPrivateKey ? cleanedPrivateKey.startsWith("-----BEGIN PRIVATE KEY-----") : false;
    info.cleanedPrivateKeyEndsWithEnd = cleanedPrivateKey ? cleanedPrivateKey.endsWith("-----END PRIVATE KEY-----") : false;

    let testApp: App;
    const existing = getApps();
    if (existing.length > 0) {
      testApp = existing[0];
      info.initMode = "reused-existing";
    } else {
      testApp = initializeApp({
        credential: cert({
          projectId,
          clientEmail,
          privateKey: cleanedPrivateKey,
        }),
      });
      info.initMode = "initialized-new";
    }

    const testDb = getFirestore(testApp);
    const snap = await testDb.collection("userProgress").limit(1).get();
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

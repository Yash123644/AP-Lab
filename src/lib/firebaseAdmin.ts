import { initializeApp, getApps, cert, getApp, App } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "ap-lab-be321";
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL || "firebase-adminsdk-fbsvc@ap-lab-be321.iam.gserviceaccount.com";
const privateKey = process.env.FIREBASE_PRIVATE_KEY || `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCnN+CDS4GpSIVU
TKK1cclxLXTsxuO3ktrEsnrwrsfUZtsET6dBCVQWA8+aCCFcJaiOl5DZun+sYf+G
1pRysJSJpAJMAPUiD7FQr3gCIGGEw+oIbvTc40Oain2/KOVFWFpnKhQB4eopD5Mr
rMQUUQalQochjs30M+MNy53zOWAlYcvAcHPjv4P+j/hGapyE0eZ9V0vxm8I5LG8O
KRsyULJUpvoeIGxusAOAjqOmqw8CwL5cfHjR2tgI4lYX7tdaLa9M07kvIHrQCFh/
bVWdo/HKTu+pCbxKteTUUXvP70VNbyYbEV99wOMdP/xi8aGEOOzY/qslkoph+EIm
I0vzwBuPAgMBAAECggEAMa6E2o2DAxhEYNT6HL2nc6RlUnoPKzoLHJjItRzAy2cZ
2HCQCV8rp/TO5/1VaAraRy9Z/o6OI1nkcRvs9BxprXFYq1s3eby+2nGfzsXvI2KP
9Jx+zOgK7G4MSVDtuYo0JeWXFy4Xg8aYW8gTY9PlDRG0k3BZ2Z3W7oDaN2sLGV+3
lgJFr6flvLJoVZREdVMuiZdUOKbWGsns2Yjz413d1dM6Syx3eOrdsmzxsSyS7rQQ
VmHJdIPCnsPccFlgbVP77cSTjiQGe8RsYmGtHKbfrVA2xeeH2MxULu1kUxpcppaC
L2A8AXT/wXEqIHsj2ExuoqSp319+M7myfsf5k92vpQKBgQDQyAHr0rzcEAW+dZuM
mXEq7NJ2NvmNUEOrKCm7eTCCMKteon2v6dVGsJh6J7FiIyegE42e3f3/hP/aG8Xf
2JogmU83xos5Boe+XEAkpJ8oL+Ta6u0oVGWxT7oGYjckE5Zb2Ml4upDcHFsvRv2L
TCSgjqShZ5JN3lpAA8vkBjts7QKBgQDNCXWkRnJsce7w9Zts2cxEaZWldWKpbVsg
UZlAmVhWiPsB8S1BdevNKEcLIWbPhRJUlZ7K1D8zKORDWzYz4F0oFsEXVRCLl8ew
Ln7js3Zj2lNO/Z9xsGf41m7vXvjTLU1Wn052qj80CMAZajdvzm+lrBRCBpv8fxiI
ZwfQNxnW6wKBgHDoWTGhbAVOnOydSZvFt4/RNxg7LsYfbBj5xWffaD5f961cDsC9
noltyUWNuZ918yYcmS+Zog15WHM9lSaN+zgtnHZI6SzxxraNi3EV0yaXAEPHbLpoq
2jwDs8SUBOH7vcq5+GrT6lc+9okgySk16nDx81JeYp696uzHoNIWFLkZAoGBALUp
sIpPvHZZTNgXCxdocXXZHOIvD9fHygaKUrCjTUxYiAA1StlWCd0hw3PwNVkSqRmX
gdCRLK5VaSqigwffLDBpun6VKKNOnp/q1S73uJmNpKJcse7QAW36edaCwbRFiNoK
tFdhIasmOCW8lfLyIe/uVY/pKxY0bkbHUj4FEY21AoGBAKpEDEIDTAKMR0WPs/Zc
kOkP9R94y7FZPAoBwUFUKgluRrZU102uzZoDzypunknBnI6s01z+ka4bcIKo6a0W
tDKbrOzB6lbbVa0k8aVKySIrvz40G56WWxyhBhTolrqTtO7Yi9eerr8EZ6LcmNwj
b0f+UNkBqOj4m0zUffNPmAgw
-----END PRIVATE KEY-----`;

let app: App;

const existingApps = getApps();
if (existingApps.length === 0) {
  if (privateKey && clientEmail && projectId && !privateKey.includes("YOUR_PRIVATE_KEY_HERE")) {
    app = initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey: privateKey.replace(/\\n/g, "\n"),
      }),
    });
    console.log("Firebase Admin initialized with service account certificate.");
  } else {
    app = initializeApp({
      projectId: projectId,
    });
    console.warn("Firebase Admin initialized without service account certificate (fallback).");
  }
} else {
  app = getApp();
}

export const adminAuth = getAuth(app);
export const adminDb = getFirestore(app);
export { app as firebaseAdminApp };

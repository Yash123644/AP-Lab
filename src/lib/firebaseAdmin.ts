import { initializeApp, getApps, cert, getApp, App } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY;

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

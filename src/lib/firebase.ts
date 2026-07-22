import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, TwitterAuthProvider, OAuthProvider } from "firebase/auth";
import { getFirestore, Timestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "ap-lab-be321.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "ap-lab-be321",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "ap-lab-be321.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
};

// Initialize Firebase safely
let app: any;
try {
  app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
} catch (e) {
  console.warn("Firebase initializeApp error:", e);
}

let auth: any;
try {
  if (firebaseConfig.apiKey) {
    auth = getAuth(app);
  } else {
    console.warn("Firebase Auth not initialized: NEXT_PUBLIC_FIREBASE_API_KEY is missing in .env.local");
    auth = { app } as any;
  }
} catch (e) {
  console.warn("Firebase Auth initialization error:", e);
  auth = { app } as any;
}

let db: any;
try {
  db = getFirestore(app);
} catch (e) {
  console.warn("Firebase Firestore initialization error:", e);
  db = {} as any;
}

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const microsoftProvider = new OAuthProvider("microsoft.com");

export { app, auth, db, Timestamp, googleProvider, githubProvider, facebookProvider, twitterProvider, microsoftProvider };

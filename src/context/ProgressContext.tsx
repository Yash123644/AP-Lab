"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { doc, onSnapshot, setDoc, arrayUnion, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "./AuthContext";
import { motion, AnimatePresence } from "framer-motion";

interface UserProgress {
  completedTopics: string[];
  masteryScores: Record<string, number>;
  lastAccessed: any;
  totalQuestionsAnswered?: number;
  totalQuestionsCorrect?: number;
  dailyTutorMessagesCount?: number;
  dailyTutorMessagesDate?: string;
  xp?: number;
  level?: number;
  displayName?: string;
  photoURL?: string;
  email?: string;
  uid?: string;
}

interface ProgressContextType {
  progress: UserProgress;
  loading: boolean;
  completeTopic: (topicId: string, score: number) => Promise<void>;
  recordQuestionAttempt: (isCorrect: boolean, masteryKey?: string) => Promise<void>;
  recordTutorMessage: () => Promise<void>;
}

const defaultProgress: UserProgress = {
  completedTopics: [],
  masteryScores: {},
  lastAccessed: null,
  totalQuestionsAnswered: 0,
  totalQuestionsCorrect: 0,
  dailyTutorMessagesCount: 0,
  dailyTutorMessagesDate: "",
  xp: 0,
  level: 1,
  displayName: "",
  photoURL: "",
  email: "",
  uid: "",
};

const ProgressContext = createContext<ProgressContextType>({
  progress: defaultProgress,
  loading: true,
  completeTopic: async () => {},
  recordQuestionAttempt: async (isCorrect: boolean, masteryKey?: string) => {},
  recordTutorMessage: async () => {},
});

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
  const { currentUser } = useAuth();
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);
  const [loading, setLoading] = useState(true);
  const [xpAnimations, setXpAnimations] = useState<{ id: number; amount: number }[]>([]);
  const [xpToasts, setXpToasts] = useState<{ id: number; amount: number; message: string; type: "question" | "section" }[]>([]);

  const triggerXpToast = (amount: number, message: string, type: "question" | "section") => {
    console.log("AP Lab XP Toast triggered:", { amount, message, type });
    const id = Date.now() + Math.random();
    setXpToasts((prev) => [...prev, { id, amount, message, type }]);
    setTimeout(() => {
      setXpToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const triggerXpGain = (amount: number) => {
    console.log("AP Lab XP Animation triggered:", { amount });
    const id = Date.now() + Math.random();
    setXpAnimations((prev) => [...prev, { id, amount }]);
  };

  // Sync profile details to Firestore in background whenever user loads in
  useEffect(() => {
    if (currentUser) {
      const docRef = doc(db, "userProgress", currentUser.uid);
      setDoc(
        docRef,
        {
          uid: currentUser.uid,
          displayName: currentUser.displayName || "AP Scholar",
          photoURL: currentUser.photoURL || "",
          email: currentUser.email || "",
        },
        { merge: true }
      ).catch((err) => {
        console.error("Error syncing profile info: ", err);
      });
    }
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser) {
      setProgress(defaultProgress);
      setLoading(false);
      return;
    }

    const localKey = `ap-lab-progress-${currentUser.uid}`;
    
    // 1. Initial load from localStorage for instant offline/session recovery
    let hasLocal = false;
    try {
      const saved = localStorage.getItem(localKey);
      if (saved) {
        setProgress(JSON.parse(saved));
        setLoading(false);
        hasLocal = true;
      }
    } catch (e) {
      console.error("Error reading progress from localStorage:", e);
    }

    // Safeguard: Force loading to false after 1.5 seconds regardless of Firestore connection speed
    const forceTimer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // 2. Set up Firestore real-time listener
    const docRef = doc(db, "userProgress", currentUser.uid);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      clearTimeout(forceTimer);
      if (docSnap.exists()) {
        const firestoreData = docSnap.data() as UserProgress;
        
        if (firestoreData.xp === undefined || firestoreData.level === undefined) {
          setDoc(docRef, {
            xp: firestoreData.xp ?? 0,
            level: firestoreData.level ?? 1,
          }, { merge: true }).catch((err) => {
            console.error("Error initializing missing XP/level in Firestore:", err);
          });
        }
        
        // Merge strategy: take the union of completed topics and the max of scores/stats
        setProgress((prev) => {
          const completedTopics = Array.from(new Set([
            ...(prev.completedTopics || []),
            ...(firestoreData.completedTopics || [])
          ]));

          const masteryScores = { ...(prev.masteryScores || {}) };
          if (firestoreData.masteryScores) {
            Object.entries(firestoreData.masteryScores).forEach(([k, v]) => {
              masteryScores[k] = Math.max(masteryScores[k] || 0, v as number);
            });
          }

          // Merge daily tutor message counts based on local date
          const todayStr = new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD
          let mergedMessagesCount = prev.dailyTutorMessagesCount || 0;
          let mergedMessagesDate = prev.dailyTutorMessagesDate || todayStr;

          if (firestoreData.dailyTutorMessagesDate === todayStr) {
            if (prev.dailyTutorMessagesDate === todayStr) {
              mergedMessagesCount = Math.max(prev.dailyTutorMessagesCount || 0, firestoreData.dailyTutorMessagesCount || 0);
            } else {
              mergedMessagesCount = firestoreData.dailyTutorMessagesCount || 0;
              mergedMessagesDate = todayStr;
            }
          } else if (prev.dailyTutorMessagesDate !== todayStr) {
            mergedMessagesCount = 0;
            mergedMessagesDate = todayStr;
          }

          const merged: UserProgress = {
            completedTopics,
            masteryScores,
            totalQuestionsAnswered: Math.max(prev.totalQuestionsAnswered || 0, firestoreData.totalQuestionsAnswered || 0),
            totalQuestionsCorrect: Math.max(prev.totalQuestionsCorrect || 0, firestoreData.totalQuestionsCorrect || 0),
            dailyTutorMessagesCount: mergedMessagesCount,
            dailyTutorMessagesDate: mergedMessagesDate,
            lastAccessed: firestoreData.lastAccessed || prev.lastAccessed,
            xp: Math.max(prev.xp || 0, firestoreData.xp || 0),
            level: Math.max(prev.level || 1, firestoreData.level || 1),
            displayName: firestoreData.displayName || prev.displayName || currentUser.displayName || "AP Scholar",
            photoURL: firestoreData.photoURL || prev.photoURL || currentUser.photoURL || "",
            email: firestoreData.email || prev.email || currentUser.email || "",
            uid: firestoreData.uid || prev.uid || currentUser.uid || "",
          };

          // Save merged back to localStorage
          try {
            localStorage.setItem(localKey, JSON.stringify(merged));
          } catch (e) {
            console.error("Error writing progress to localStorage:", e);
          }

          return merged;
        });
      } else {
        // Document does not exist in Firestore! Initialize it with default values
        const initialDoc: UserProgress = {
          completedTopics: [],
          masteryScores: {},
          lastAccessed: new Date(),
          totalQuestionsAnswered: 0,
          totalQuestionsCorrect: 0,
          dailyTutorMessagesCount: 0,
          dailyTutorMessagesDate: new Date().toLocaleDateString('en-CA'),
          xp: 0,
          level: 1,
          displayName: currentUser.displayName || "AP Scholar",
          photoURL: currentUser.photoURL || "",
          email: currentUser.email || "",
          uid: currentUser.uid,
        };

        setProgress(initialDoc);

        try {
          localStorage.setItem(localKey, JSON.stringify(initialDoc));
        } catch (e) {
          console.error("Error writing initial progress to localStorage:", e);
        }

        setDoc(docRef, initialDoc).catch((err) => {
          console.error("Error initializing userProgress document in Firestore: ", err);
        });
      }
      setLoading(false);
    }, (error) => {
      console.error("Error fetching progress from Firestore:", error);
      clearTimeout(forceTimer);
      setLoading(false);
    });

    return () => {
      unsubscribe();
      clearTimeout(forceTimer);
    };
  }, [currentUser]);

  const completeTopic = async (topicId: string, score: number) => {
    if (!currentUser) return;

    const localKey = `ap-lab-progress-${currentUser.uid}`;
    const docRef = doc(db, "userProgress", currentUser.uid);
    
    try {
      const currentScore = progress.masteryScores[topicId] || 0;
      const newScore = Math.max(currentScore, score);
      const isFirstTime = !progress.completedTopics.includes(topicId);

      const xpEarned = isFirstTime ? 100 : 0;
      const currentXp = progress.xp || 0;
      const newXp = currentXp + xpEarned;
      const newLevel = Math.min(100, Math.floor(newXp / 100) + 1);

      const updatedProgress: UserProgress = {
        ...progress,
        completedTopics: isFirstTime
          ? [...progress.completedTopics, topicId]
          : progress.completedTopics,
        masteryScores: {
          ...progress.masteryScores,
          [topicId]: newScore
        },
        xp: newXp,
        level: newLevel,
        lastAccessed: new Date()
      };

      if (xpEarned > 0) {
        triggerXpGain(xpEarned);
        triggerXpToast(xpEarned, "Section Completed!", "section");
      }

      // 1. Immediately update local React state and LocalStorage for zero-latency UI
      setProgress(updatedProgress);
      try {
        localStorage.setItem(localKey, JSON.stringify(updatedProgress));
      } catch (e) {
        console.error("Error writing progress to localStorage:", e);
      }

      // 2. Sync to Firestore in the background
      await setDoc(docRef, {
        completedTopics: arrayUnion(topicId),
        masteryScores: {
          ...progress.masteryScores,
          [topicId]: newScore
        },
        xp: newXp,
        level: newLevel,
        lastAccessed: serverTimestamp()
      }, { merge: true });

    } catch (error) {
      console.error("Error updating progress in Firestore:", error);
    }
  };

  const recordQuestionAttempt = async (isCorrect: boolean, masteryKey?: string) => {
    if (!currentUser) return;

    const localKey = `ap-lab-progress-${currentUser.uid}`;
    const docRef = doc(db, "userProgress", currentUser.uid);

    try {
      const isCompleted = masteryKey ? progress.completedTopics.includes(masteryKey) : false;
      const xpEarned = isCorrect ? (isCompleted ? 5 : 10) : 0;
      
      const updatedAnswered = (progress.totalQuestionsAnswered || 0) + 1;
      const updatedCorrect = (progress.totalQuestionsCorrect || 0) + (isCorrect ? 1 : 0);
      const currentXp = progress.xp || 0;
      const newXp = currentXp + xpEarned;
      const newLevel = Math.min(100, Math.floor(newXp / 100) + 1);

      const updatedProgress: UserProgress = {
        ...progress,
        totalQuestionsAnswered: updatedAnswered,
        totalQuestionsCorrect: updatedCorrect,
        xp: newXp,
        level: newLevel,
        lastAccessed: new Date()
      };

      if (xpEarned > 0) {
        triggerXpGain(xpEarned);
        triggerXpToast(xpEarned, isCompleted ? "Practice Repeated (Halved XP)" : "Question Correct!", "question");
      }

      setProgress(updatedProgress);

      // 1. Immediately update LocalStorage
      try {
        localStorage.setItem(localKey, JSON.stringify(updatedProgress));
      } catch (e) {
        console.error("Error writing progress to localStorage:", e);
      }

      // 2. Sync to Firestore in the background
      setDoc(docRef, {
        totalQuestionsAnswered: updatedAnswered,
        totalQuestionsCorrect: updatedCorrect,
        xp: newXp,
        level: newLevel,
        lastAccessed: serverTimestamp()
      }, { merge: true }).catch((err) => {
        console.error("Error syncing question attempt to Firestore:", err);
      });

    } catch (error) {
      console.error("Error setting up question attempt update:", error);
    }
  };

  const recordTutorMessage = async () => {
    if (!currentUser) return;

    const localKey = `ap-lab-progress-${currentUser.uid}`;
    const docRef = doc(db, "userProgress", currentUser.uid);
    const todayStr = new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD

    try {
      setProgress((prev) => {
        const isSameDay = prev.dailyTutorMessagesDate === todayStr;
        const newCount = isSameDay ? (prev.dailyTutorMessagesCount || 0) + 1 : 1;

        const updatedProgress: UserProgress = {
          ...prev,
          dailyTutorMessagesCount: newCount,
          dailyTutorMessagesDate: todayStr,
          lastAccessed: new Date()
        };

        // 1. Immediately update LocalStorage
        try {
          localStorage.setItem(localKey, JSON.stringify(updatedProgress));
        } catch (e) {
          console.error("Error writing progress to localStorage:", e);
        }

        // 2. Sync to Firestore in the background
        setDoc(docRef, {
          dailyTutorMessagesCount: newCount,
          dailyTutorMessagesDate: todayStr,
          lastAccessed: serverTimestamp()
        }, { merge: true }).catch((err) => {
          console.error("Error syncing message count to Firestore:", err);
        });

        return updatedProgress;
      });

    } catch (error) {
      console.error("Error setting up message count update:", error);
    }
  };

  return (
    <ProgressContext.Provider value={{ progress, loading, completeTopic, recordQuestionAttempt, recordTutorMessage }}>
      {children}
      
      {/* Floating XP Gain Animations */}
      <div className="fixed bottom-16 left-0 right-0 pointer-events-none z-[9999] flex flex-col items-center justify-end space-y-2">
        <AnimatePresence>
          {xpAnimations.map((anim) => (
            <motion.div
              key={anim.id}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1.2 }}
              exit={{ opacity: 0, y: -60, scale: 0.9 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              onAnimationComplete={() => {
                setXpAnimations((prev) => prev.filter((a) => a.id !== anim.id));
              }}
              className="flex items-center space-x-1.5 bg-gradient-to-r from-green-400/90 to-emerald-500/90 border border-green-300/30 text-white font-mono tracking-widest px-4 py-2 rounded-2xl shadow-[0_8px_32px_rgba(34,197,94,0.4)] backdrop-blur-md"
            >
              <span className="text-lg font-black">+{anim.amount} XP</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Top-Center XP Earned Toasts */}
      <div className="fixed top-24 left-0 right-0 pointer-events-none z-[99999] flex flex-col items-center justify-start space-y-3">
        <AnimatePresence>
          {xpToasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9, transition: { duration: 0.2 } }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="flex items-center space-x-3 pointer-events-auto bg-black/85 backdrop-blur-md border border-white/10 text-white px-4 py-3 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-l-4 border-l-green-400"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-500/20 text-green-400 shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">{toast.message}</span>
                <span className="text-sm font-black text-white font-mono tracking-wide">+{toast.amount} XP</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ProgressContext.Provider>
  );
};


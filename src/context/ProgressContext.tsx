"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { doc, onSnapshot, setDoc, arrayUnion, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "./AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { getLevelForXp } from "@/lib/xpProgression";
import { playLevelUpSound } from "@/lib/sounds";
import { LevelBadge } from "@/components/LevelBadge";
import confetti from "canvas-confetti";

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
  const [xpToasts, setXpToasts] = useState<{ id: number; amount: number; message: string; type: "question" | "section" }[]>([]);
  const [levelUpData, setLevelUpData] = useState<{ oldLevel: number; newLevel: number } | null>(null);

  const triggerXpToast = (amount: number, message: string, type: "question" | "section") => {
    console.log("AP Lab XP Toast triggered:", { amount, message, type });
    const id = Date.now() + Math.random();
    setXpToasts((prev) => [...prev, { id, amount, message, type }]);
    setTimeout(() => {
      setXpToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
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
    // Load guest progress to see if we need to migrate it
    let guestProgress: UserProgress | null = null;
    try {
      const guestSaved = localStorage.getItem("ap-lab-progress-guest");
      if (guestSaved) {
        guestProgress = JSON.parse(guestSaved);
      }
    } catch (e) {
      console.error("Error reading guest progress for migration:", e);
    }

    if (!currentUser) {
      const guestKey = "ap-lab-progress-guest";
      try {
        const saved = localStorage.getItem(guestKey);
        if (saved) {
          setProgress(JSON.parse(saved));
        } else {
          setProgress(defaultProgress);
        }
      } catch (e) {
        setProgress(defaultProgress);
      }
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
        
        let localProgress: UserProgress | null = null;
        try {
          const saved = localStorage.getItem(localKey);
          if (saved) {
            localProgress = JSON.parse(saved);
          }
        } catch (e) {}

        const completedTopics = Array.from(new Set([
          ...(firestoreData.completedTopics || []),
          ...(localProgress?.completedTopics || []),
          ...(guestProgress?.completedTopics || [])
        ]));

        const masteryScores = { ...(firestoreData.masteryScores || {}) };
        if (localProgress?.masteryScores) {
          Object.entries(localProgress.masteryScores).forEach(([k, v]) => {
            masteryScores[k] = Math.max(masteryScores[k] || 0, v as number);
          });
        }
        if (guestProgress?.masteryScores) {
          Object.entries(guestProgress.masteryScores).forEach(([k, v]) => {
            masteryScores[k] = Math.max(masteryScores[k] || 0, v as number);
          });
        }

        // Merge daily tutor message counts based on local date
        const todayStr = new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD
        let mergedMessagesCount = localProgress?.dailyTutorMessagesCount || 0;
        let mergedMessagesDate = localProgress?.dailyTutorMessagesDate || todayStr;

        if (firestoreData.dailyTutorMessagesDate === todayStr) {
          if (mergedMessagesDate === todayStr) {
            mergedMessagesCount = Math.max(mergedMessagesCount, firestoreData.dailyTutorMessagesCount || 0);
          } else {
            mergedMessagesCount = firestoreData.dailyTutorMessagesCount || 0;
            mergedMessagesDate = todayStr;
          }
        } else if (mergedMessagesDate !== todayStr) {
          mergedMessagesCount = 0;
          mergedMessagesDate = todayStr;
        }

        if (guestProgress?.dailyTutorMessagesDate === todayStr) {
          mergedMessagesCount = Math.max(mergedMessagesCount, guestProgress.dailyTutorMessagesCount || 0);
        }

        const mergedXp = Math.max(firestoreData.xp || 0, localProgress?.xp || 0, guestProgress?.xp || 0);
        const mergedLevel = Math.max(getLevelForXp(mergedXp), firestoreData.level || 1, localProgress?.level || 1, guestProgress?.level || 1);

        const merged: UserProgress = {
          completedTopics,
          masteryScores,
          totalQuestionsAnswered: Math.max(
            firestoreData.totalQuestionsAnswered || 0, 
            localProgress?.totalQuestionsAnswered || 0,
            guestProgress?.totalQuestionsAnswered || 0
          ),
          totalQuestionsCorrect: Math.max(
            firestoreData.totalQuestionsCorrect || 0, 
            localProgress?.totalQuestionsCorrect || 0,
            guestProgress?.totalQuestionsCorrect || 0
          ),
          dailyTutorMessagesCount: mergedMessagesCount,
          dailyTutorMessagesDate: mergedMessagesDate,
          lastAccessed: firestoreData.lastAccessed || localProgress?.lastAccessed || null,
          xp: mergedXp,
          level: mergedLevel,
          displayName: firestoreData.displayName || localProgress?.displayName || currentUser.displayName || "AP Scholar",
          photoURL: firestoreData.photoURL || localProgress?.photoURL || currentUser.photoURL || "",
          email: firestoreData.email || localProgress?.email || currentUser.email || "",
          uid: firestoreData.uid || localProgress?.uid || currentUser.uid || "",
        };

        // Sync back to Firestore if Firestore is out of sync or guest migration is needed
        const needsFirestoreWrite = 
          firestoreData.xp !== merged.xp || 
          firestoreData.level !== merged.level || 
          (firestoreData.completedTopics || []).length !== merged.completedTopics.length;

        if (needsFirestoreWrite || (guestProgress && (guestProgress.xp || 0) > 0)) {
          console.log("Firestore is out of sync or guest migration needed. Syncing merged progress to Firestore...");
          setDoc(docRef, {
            completedTopics: merged.completedTopics,
            masteryScores: merged.masteryScores,
            totalQuestionsAnswered: merged.totalQuestionsAnswered,
            totalQuestionsCorrect: merged.totalQuestionsCorrect,
            xp: merged.xp,
            level: merged.level,
            lastAccessed: serverTimestamp()
          }, { merge: true }).then(() => {
            if (guestProgress) {
              try {
                localStorage.removeItem("ap-lab-progress-guest");
              } catch (e) {
                console.error("Error clearing guest progress:", e);
              }
            }
          }).catch((err) => {
            console.error("Error syncing merged progress to Firestore:", err);
          });
        }

        setProgress(merged);

        // Save merged back to localStorage
        try {
          localStorage.setItem(localKey, JSON.stringify(merged));
        } catch (e) {
          console.error("Error writing progress to localStorage:", e);
        }
      } else {
        // Document does not exist in Firestore! Initialize it with guest progress if available, otherwise default values
        const initialDoc: UserProgress = {
          completedTopics: guestProgress?.completedTopics || [],
          masteryScores: guestProgress?.masteryScores || {},
          lastAccessed: new Date(),
          totalQuestionsAnswered: guestProgress?.totalQuestionsAnswered || 0,
          totalQuestionsCorrect: guestProgress?.totalQuestionsCorrect || 0,
          dailyTutorMessagesCount: guestProgress?.dailyTutorMessagesCount || 0,
          dailyTutorMessagesDate: guestProgress?.dailyTutorMessagesDate || new Date().toLocaleDateString('en-CA'),
          xp: guestProgress?.xp || 0,
          level: guestProgress?.level || 1,
          displayName: currentUser.displayName || "AP Scholar",
          photoURL: currentUser.photoURL || "",
          email: currentUser.email || "",
          uid: currentUser.uid,
        };

        setProgress(initialDoc);

        try {
          localStorage.setItem(localKey, JSON.stringify(initialDoc));
          if (guestProgress) {
            localStorage.removeItem("ap-lab-progress-guest");
          }
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
    const localKey = currentUser ? `ap-lab-progress-${currentUser.uid}` : "ap-lab-progress-guest";
    const docRef = currentUser ? doc(db, "userProgress", currentUser.uid) : null;
    
    try {
      const currentScore = progress.masteryScores[topicId] || 0;
      const newScore = Math.max(currentScore, score);
      const isFirstTime = !progress.completedTopics.includes(topicId);

      const xpEarned = isFirstTime ? 100 : 0;
      const currentXp = progress.xp || 0;
      const newXp = currentXp + xpEarned;
      const oldLevel = progress.level || 1;
      const newLevel = getLevelForXp(newXp);
      const isLevelUp = newLevel > oldLevel;

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
        triggerXpToast(xpEarned, "Section Completed!", "section");
      }

      if (isLevelUp) {
        setTimeout(() => {
          playLevelUpSound();
          confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 }
          });
          setLevelUpData({ oldLevel, newLevel });
        }, 500);
      }

      // 1. Immediately update local React state and LocalStorage for zero-latency UI
      setProgress(updatedProgress);
      try {
        localStorage.setItem(localKey, JSON.stringify(updatedProgress));
      } catch (e) {
        console.error("Error writing progress to localStorage:", e);
      }

      // 2. Sync to Firestore in the background
      if (docRef) {
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
      }

    } catch (error) {
      console.error("Error updating progress in Firestore:", error);
    }
  };

  const recordQuestionAttempt = async (isCorrect: boolean, masteryKey?: string) => {
    const localKey = currentUser ? `ap-lab-progress-${currentUser.uid}` : "ap-lab-progress-guest";
    const docRef = currentUser ? doc(db, "userProgress", currentUser.uid) : null;

    try {
      const isCompleted = masteryKey ? progress.completedTopics.includes(masteryKey) : false;
      const xpEarned = isCorrect ? (isCompleted ? 5 : 10) : 0;
      
      const updatedAnswered = (progress.totalQuestionsAnswered || 0) + 1;
      const updatedCorrect = (progress.totalQuestionsCorrect || 0) + (isCorrect ? 1 : 0);
      const currentXp = progress.xp || 0;
      const newXp = currentXp + xpEarned;
      const oldLevel = progress.level || 1;
      const newLevel = getLevelForXp(newXp);
      const isLevelUp = newLevel > oldLevel;

      const updatedProgress: UserProgress = {
        ...progress,
        totalQuestionsAnswered: updatedAnswered,
        totalQuestionsCorrect: updatedCorrect,
        xp: newXp,
        level: newLevel,
        lastAccessed: new Date()
      };

      if (xpEarned > 0) {
        triggerXpToast(xpEarned, isCompleted ? "Practice Repeated (Halved XP)" : "Question Correct!", "question");
      }

      if (isLevelUp) {
        setTimeout(() => {
          playLevelUpSound();
          confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 }
          });
          setLevelUpData({ oldLevel, newLevel });
        }, 500);
      }

      setProgress(updatedProgress);

      // 1. Immediately update LocalStorage
      try {
        localStorage.setItem(localKey, JSON.stringify(updatedProgress));
      } catch (e) {
        console.error("Error writing progress to localStorage:", e);
      }

      // 2. Sync to Firestore in the background
      if (docRef) {
        setDoc(docRef, {
          totalQuestionsAnswered: updatedAnswered,
          totalQuestionsCorrect: updatedCorrect,
          xp: newXp,
          level: newLevel,
          lastAccessed: serverTimestamp()
        }, { merge: true }).catch((err) => {
          console.error("Error syncing question attempt to Firestore:", err);
        });
      }

    } catch (error) {
      console.error("Error setting up question attempt update:", error);
    }
  };

  const recordTutorMessage = async () => {
    const localKey = currentUser ? `ap-lab-progress-${currentUser.uid}` : "ap-lab-progress-guest";
    const docRef = currentUser ? doc(db, "userProgress", currentUser.uid) : null;
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
        if (docRef) {
          setDoc(docRef, {
            dailyTutorMessagesCount: newCount,
            dailyTutorMessagesDate: todayStr,
            lastAccessed: serverTimestamp()
          }, { merge: true }).catch((err) => {
            console.error("Error syncing message count to Firestore:", err);
          });
        }

        return updatedProgress;
      });

    } catch (error) {
      console.error("Error setting up message count update:", error);
    }
  };

  return (
    <ProgressContext.Provider value={{ progress, loading, completeTopic, recordQuestionAttempt, recordTutorMessage }}>
      {children}
      
      {/* Level Up Modal */}
      <AnimatePresence>
        {levelUpData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-xl px-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-full max-w-md bg-[#07080e]/95 border border-yellow-500/30 rounded-[32px] p-8 text-center relative overflow-hidden shadow-[0_0_80px_rgba(234,179,8,0.2)] backdrop-blur-3xl"
            >
              {/* Decorative radial gold glow */}
              <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-[80px] opacity-20 bg-yellow-500 pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-20 bg-yellow-500 pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-manrope font-black text-yellow-500 uppercase tracking-[0.25em]">
                    Congratulations
                  </span>
                  <h2 className="font-instrument text-4xl text-white tracking-tight leading-none">
                    Level Up!
                  </h2>
                </div>

                {/* Badge Morphing Animation Container */}
                <div className="flex items-center justify-center space-x-6 py-6">
                  {/* Old Badge */}
                  <motion.div
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ 
                      scale: [1, 0.8, 0.8, 0],
                      opacity: [0.8, 0.8, 0, 0]
                    }}
                    transition={{ 
                      duration: 2.2, 
                      times: [0, 0.3, 0.45, 1],
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  >
                    <LevelBadge level={levelUpData.oldLevel} size="lg" />
                  </motion.div>

                  {/* Morphing Indicator/Arrow */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{ 
                      duration: 2.2, 
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                    className="text-yellow-500/60 text-2xl font-bold"
                  >
                    →
                  </motion.div>

                  {/* New Badge */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 0, 1.2, 1],
                      opacity: [0, 0, 1, 1],
                      rotate: [0, 0, 360, 360]
                    }}
                    transition={{ 
                      duration: 2.2, 
                      times: [0, 0.4, 0.65, 1],
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  >
                    <LevelBadge level={levelUpData.newLevel} size="lg" />
                  </motion.div>
                </div>

                <div className="space-y-2">
                  <p className="text-white/60 text-sm">
                    You've reached level <span className="text-yellow-400 font-bold font-mono">{levelUpData.newLevel}</span>! Keep up the incredible work.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setLevelUpData(null)}
                  className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-manrope font-black uppercase tracking-widest text-xs py-4 rounded-2xl hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_4px_20px_rgba(234,179,8,0.25)]"
                >
                  Continue Journey
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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


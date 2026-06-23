"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { doc, onSnapshot, setDoc, updateDoc, arrayUnion, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "./AuthContext";

interface UserProgress {
  completedTopics: string[];
  masteryScores: Record<string, number>;
  lastAccessed: any;
  totalQuestionsAnswered?: number;
  totalQuestionsCorrect?: number;
}

interface ProgressContextType {
  progress: UserProgress;
  loading: boolean;
  completeTopic: (topicId: string, score: number) => Promise<void>;
  recordQuestionAttempt: (isCorrect: boolean) => Promise<void>;
}

const defaultProgress: UserProgress = {
  completedTopics: [],
  masteryScores: {},
  lastAccessed: null,
  totalQuestionsAnswered: 0,
  totalQuestionsCorrect: 0,
};

const ProgressContext = createContext<ProgressContextType>({
  progress: defaultProgress,
  loading: true,
  completeTopic: async () => {},
  recordQuestionAttempt: async () => {},
});

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
  const { currentUser } = useAuth();
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);
  const [loading, setLoading] = useState(true);

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

          const merged: UserProgress = {
            completedTopics,
            masteryScores,
            totalQuestionsAnswered: Math.max(prev.totalQuestionsAnswered || 0, firestoreData.totalQuestionsAnswered || 0),
            totalQuestionsCorrect: Math.max(prev.totalQuestionsCorrect || 0, firestoreData.totalQuestionsCorrect || 0),
            lastAccessed: firestoreData.lastAccessed || prev.lastAccessed
          };

          // Save merged back to localStorage
          try {
            localStorage.setItem(localKey, JSON.stringify(merged));
          } catch (e) {
            console.error("Error writing progress to localStorage:", e);
          }

          return merged;
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

      const updatedProgress: UserProgress = {
        completedTopics: progress.completedTopics.includes(topicId)
          ? progress.completedTopics
          : [...progress.completedTopics, topicId],
        masteryScores: {
          ...progress.masteryScores,
          [topicId]: newScore
        },
        totalQuestionsAnswered: progress.totalQuestionsAnswered || 0,
        totalQuestionsCorrect: progress.totalQuestionsCorrect || 0,
        lastAccessed: new Date()
      };

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
        lastAccessed: serverTimestamp()
      }, { merge: true });

    } catch (error) {
      console.error("Error updating progress in Firestore:", error);
    }
  };

  const recordQuestionAttempt = async (isCorrect: boolean) => {
    if (!currentUser) return;

    const localKey = `ap-lab-progress-${currentUser.uid}`;
    const docRef = doc(db, "userProgress", currentUser.uid);

    try {
      setProgress((prev) => {
        const updatedAnswered = (prev.totalQuestionsAnswered || 0) + 1;
        const updatedCorrect = (prev.totalQuestionsCorrect || 0) + (isCorrect ? 1 : 0);

        const updatedProgress: UserProgress = {
          ...prev,
          totalQuestionsAnswered: updatedAnswered,
          totalQuestionsCorrect: updatedCorrect,
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
          totalQuestionsAnswered: updatedAnswered,
          totalQuestionsCorrect: updatedCorrect,
          lastAccessed: serverTimestamp()
        }, { merge: true }).catch((err) => {
          console.error("Error syncing question attempt to Firestore:", err);
        });

        return updatedProgress;
      });

    } catch (error) {
      console.error("Error setting up question attempt update:", error);
    }
  };

  return (
    <ProgressContext.Provider value={{ progress, loading, completeTopic, recordQuestionAttempt }}>
      {children}
    </ProgressContext.Provider>
  );
};

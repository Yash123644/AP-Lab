"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { doc, onSnapshot, setDoc, updateDoc, arrayUnion, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "./AuthContext";

interface UserProgress {
  completedTopics: string[];
  masteryScores: Record<string, number>;
  lastAccessed: any;
}

interface ProgressContextType {
  progress: UserProgress;
  loading: boolean;
  completeTopic: (topicId: string, score: number) => Promise<void>;
}

const defaultProgress: UserProgress = {
  completedTopics: [],
  masteryScores: {},
  lastAccessed: null,
};

const ProgressContext = createContext<ProgressContextType>({
  progress: defaultProgress,
  loading: true,
  completeTopic: async () => {},
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

    const docRef = doc(db, "userProgress", currentUser.uid);
    
    // Set up real-time listener
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setProgress(docSnap.data() as UserProgress);
      } else {
        // Initialize if doesn't exist
        setProgress(defaultProgress);
      }
      setLoading(false);
    }, (error) => {
      console.error("Error fetching progress:", error);
      setProgress(defaultProgress);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [currentUser]);

  const completeTopic = async (topicId: string, score: number) => {
    if (!currentUser) return;

    const docRef = doc(db, "userProgress", currentUser.uid);
    
    try {
      // Check if doc exists first to either set or update
      // But updateDoc with arrayUnion is cleaner if it exists.
      // We'll use setDoc with merge: true to handle both cases easily.
      
      const currentScore = progress.masteryScores[topicId] || 0;
      const newScore = Math.max(currentScore, score);

      await setDoc(docRef, {
        completedTopics: arrayUnion(topicId),
        masteryScores: {
          ...progress.masteryScores,
          [topicId]: newScore
        },
        lastAccessed: serverTimestamp()
      }, { merge: true });

    } catch (error) {
      console.error("Error updating progress:", error);
    }
  };

  return (
    <ProgressContext.Provider value={{ progress, loading, completeTopic }}>
      {children}
    </ProgressContext.Provider>
  );
};

"use client";

import React, { useEffect, useState } from "react";
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { LevelBadge } from "@/components/LevelBadge";
import { Trophy, Crown, Award, User, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LeaderboardUser {
  uid: string;
  displayName?: string;
  photoURL?: string;
  xp?: number;
  level?: number;
}

export function LevelLeaderboard() {
  const [users, setUsers] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reference the userProgress collection
    const q = query(
      collection(db, "userProgress"),
      orderBy("xp", "desc"),
      limit(10)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const leaderList: LeaderboardUser[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          // Only add users who have some progress info (at least uid and level/xp)
          leaderList.push({
            uid: doc.id,
            displayName: data.displayName || "AP Scholar",
            photoURL: data.photoURL || "",
            xp: data.xp || 0,
            level: data.level || 1,
          });
        });
        
        // In case there are duplicates or empty entries, clean them up, then sort
        const sortedList = leaderList.sort((a, b) => (b.xp || 0) - (a.xp || 0));
        setUsers(sortedList);
        setLoading(false);
      },
      (error) => {
        console.error("Error listening to leaderboard progress: ", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const getRankStyle = (index: number) => {
    switch (index) {
      case 0:
        return {
          rowClass: "bg-gradient-to-r from-yellow-500/10 via-amber-500/5 to-transparent border-amber-500/30",
          medalColor: "text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]",
          glowClass: "shadow-[0_0_20px_rgba(245,158,11,0.15)]",
          icon: <Crown className="w-5 h-5 text-amber-400 fill-amber-400 animate-bounce" />,
        };
      case 1:
        return {
          rowClass: "bg-gradient-to-r from-slate-300/10 via-slate-400/5 to-transparent border-slate-300/30",
          medalColor: "text-slate-300 drop-shadow-[0_0_8px_rgba(203,213,225,0.4)]",
          glowClass: "shadow-[0_0_15px_rgba(203,213,225,0.1)]",
          icon: <Trophy className="w-5 h-5 text-slate-300 fill-slate-300" />,
        };
      case 2:
        return {
          rowClass: "bg-gradient-to-r from-amber-750/10 via-amber-800/5 to-transparent border-amber-800/30",
          medalColor: "text-amber-700 drop-shadow-[0_0_8px_rgba(180,83,9,0.4)]",
          glowClass: "shadow-[0_0_15px_rgba(180,83,9,0.1)]",
          icon: <Award className="w-5 h-5 text-amber-700 fill-amber-700" />,
        };
      default:
        return {
          rowClass: "bg-white/[0.01] border-white/5 hover:bg-white/[0.02]",
          medalColor: "text-white/40",
          glowClass: "",
          icon: null,
        };
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto liquid-glass rounded-[32px] p-6 md:p-10 border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden">
      {/* Visual background glows */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-purple/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="text-center mb-10">
        <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20 mb-3 inline-block">
          LIVE GLOBAL RANKINGS
        </span>
        <h2 className="font-instrument text-4xl md:text-5xl text-white font-medium tracking-tight mt-2">
          Global Level Leaderboard
        </h2>
        <p className="font-inter text-white/50 text-xs md:text-sm max-w-md mx-auto mt-2 leading-relaxed">
          The top 10 most active scholars on the AP Lab network. Gain XP by completing sections and checking your understanding.
        </p>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="w-8 h-8 text-cyan-400 animate-spin mb-3" />
          <span className="text-white/40 font-mono text-xs uppercase tracking-widest">Loading Live Board...</span>
        </div>
      ) : users.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-white/10 rounded-2xl">
          <User className="w-10 h-10 text-white/20 mx-auto mb-3" />
          <p className="text-white/40 font-inter text-sm">No leaderboard entries found yet. Be the first!</p>
        </div>
      ) : (
        <div className="space-y-3.5">
          <AnimatePresence>
            {users.map((user, index) => {
              const rankInfo = getRankStyle(index);
              const initials = user.displayName
                ? user.displayName.split(" ").map(n => n[0]).join("").toUpperCase().substring(0, 2)
                : "AP";

              return (
                <motion.div
                  key={user.uid}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex items-center justify-between p-4 md:px-6 rounded-2xl border transition-all duration-300 ${rankInfo.rowClass} ${rankInfo.glowClass}`}
                >
                  <div className="flex items-center space-x-4">
                    {/* Rank Indicator */}
                    <div className="w-8 flex items-center justify-center shrink-0">
                      {rankInfo.icon ? (
                        rankInfo.icon
                      ) : (
                        <span className="font-mono text-sm font-bold text-white/40">
                          #{index + 1}
                        </span>
                      )}
                    </div>

                    {/* Avatar */}
                    <div className="relative shrink-0">
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt={user.displayName}
                          className="w-10 h-10 rounded-xl object-cover border border-white/15"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 font-semibold text-xs font-mono">
                          {initials}
                        </div>
                      )}
                      {index === 0 && (
                        <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                        </span>
                      )}
                    </div>

                    {/* User Name & Level Badge */}
                    <div className="flex flex-col md:flex-row md:items-center space-y-1.5 md:space-y-0 md:space-x-3">
                      <span className="font-manrope font-bold text-white text-sm md:text-base leading-tight">
                        {user.displayName || "AP Scholar"}
                      </span>
                      <LevelBadge level={user.level || 1} />
                    </div>
                  </div>

                  {/* XP display */}
                  <div className="text-right">
                    <span className="font-instrument italic font-bold text-base md:text-xl text-white block">
                      {user.xp?.toLocaleString()}
                    </span>
                    <span className="text-[9px] font-mono font-bold text-white/30 uppercase tracking-widest block">
                      TOTAL XP
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { LevelBadge } from "@/components/LevelBadge";
import { Trophy, Crown, Award, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "@/context/ProgressContext";
import { cn } from "@/lib/utils";

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
  const { progress } = useProgress();

  const fetchLeaderboard = async (showLoading = false) => {
    if (showLoading) setLoading(true);
    try {
      const res = await fetch(`/api/leaderboard?uid=${progress?.uid || ""}&t=${Date.now()}`, { cache: "no-store" });
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `Server responded with status ${res.status}`);
      }
      const data = await res.json();
      if (Array.isArray(data)) {
        setUsers(data);
      }
    } catch (e) {
      console.error("Error fetching leaderboard:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard(users.length === 0);
    // Poll every 10 seconds to keep it fresh
    const interval = setInterval(() => fetchLeaderboard(false), 10000);
    return () => clearInterval(interval);
  }, [progress?.xp]);

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
        <h2 className="font-instrument text-4xl md:text-5xl text-white font-medium tracking-tight mt-2">
          Global Level Leaderboard
        </h2>
        <p className="font-inter text-white/50 text-xs md:text-sm max-w-md mx-auto mt-2 leading-relaxed">
          The top 10 most active scholars on the AP Lab network. Gain XP by completing sections and checking your understanding.
        </p>
      </div>

      {loading ? (
        <div className="space-y-3.5 py-2 animate-pulse">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 md:px-6 rounded-2xl border border-white/5 bg-white/[0.01]">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-5 bg-white/5 rounded" />
                <div className="w-10 h-10 bg-white/5 rounded-xl" />
                <div className="flex flex-col space-y-2">
                  <div className="w-28 h-4 bg-white/5 rounded" />
                  <div className="w-16 h-3 bg-white/5 rounded" />
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <div className="w-12 h-5 bg-white/5 rounded" />
                <div className="w-8 h-2 bg-white/5 rounded" />
              </div>
            </div>
          ))}
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
              const isCurrentUser = user.uid === progress?.uid;

              return (
                <motion.div
                  key={user.uid}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={cn(
                    "flex items-center justify-between p-4 md:px-6 rounded-2xl border transition-all duration-300",
                    isCurrentUser 
                      ? "border-cyan-500/40 bg-cyan-950/25 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                      : rankInfo.rowClass,
                    !isCurrentUser && rankInfo.glowClass
                  )}
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
                    </div>

                    {/* User Name & Level Badge */}
                    <div className="flex flex-col md:flex-row md:items-center space-y-1.5 md:space-y-0 md:space-x-3">
                      <span className="font-manrope font-bold text-white text-sm md:text-base leading-tight flex items-center gap-1.5">
                        {user.displayName || "AP Scholar"}
                        {isCurrentUser && (
                          <span className="text-[9px] bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-1.5 py-0.5 rounded-full uppercase tracking-widest font-mono font-bold">
                            You
                          </span>
                        )}
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

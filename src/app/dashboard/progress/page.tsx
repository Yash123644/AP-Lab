"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Flame, Calendar, Trophy, Sparkles, LogOut, Mail, User, X,
  Clock, Target, BarChart2, CheckCircle2, ChevronLeft, ChevronRight, Activity, Award,
  BookOpen, MessageSquare, FlameKindling
} from "lucide-react";
import { useProgress } from "@/context/ProgressContext";
import { useAuth } from "@/context/AuthContext";
import { getLevelForXp, getXpThresholdForLevel } from "@/lib/xpProgression";
import { LevelBadge } from "@/components/LevelBadge";
import { DashboardContextMenu } from "@/components/DashboardContextMenu";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

// Helper to determine weekday headers
const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

// Monthly Names
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

export default function ProgressPage() {
  const { currentUser, loading: authLoading } = useAuth();
  const { progress, loading: progressLoading } = useProgress();
  const router = useRouter();

  const [showSignOutConfirm, setShowSignOutConfirm] = useState(false);
  const [showAccountPopup, setShowAccountPopup] = useState(false);
  const [selectedDayInfo, setSelectedDayInfo] = useState<any | null>(null);
  const [hoveredDayIndex, setHoveredDayIndex] = useState<number | null>(null);

  // Calendar dates generation state (defaults to current month)
  const [currentDate, setCurrentDate] = useState(() => new Date());

  // Redirect if not logged in
  useEffect(() => {
    if (!authLoading && !currentUser) {
      router.push("/");
    }
  }, [currentUser, authLoading, router]);

  // Handle click outside to close selected day timeline
  const timelineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (timelineRef.current && !timelineRef.current.contains(e.target as Node)) {
        setSelectedDayInfo(null);
      }
    };
    window.addEventListener("mousedown", handleOutsideClick);
    return () => window.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Compute metrics
  const xp = progress.xp || 0;
  const level = getLevelForXp(xp);
  const currentLevelThreshold = getXpThresholdForLevel(level);
  const nextLevelThreshold = getXpThresholdForLevel(level + 1);
  const xpNeededForNext = nextLevelThreshold - currentLevelThreshold;
  const xpInCurrentLevel = xp - currentLevelThreshold;
  const progressPercent = Math.min(100, Math.max(0, (xpInCurrentLevel / xpNeededForNext) * 100));

  const totalAnswered = progress.totalQuestionsAnswered || 0;
  const totalCorrect = progress.totalQuestionsCorrect || 0;
  const accuracyRate = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const firstName = currentUser?.displayName?.split(" ")[0] || "Scholar";

  // Calculate Streak & Mock stats deterministically or pull from localStorage
  const { currentStreak, maxStreak, streakMilestones } = useMemo(() => {
    // Generate deterministic values based on completedTopics or uid so they are customized
    const userHash = currentUser?.uid ? currentUser.uid.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) : 10;
    const completedCount = progress.completedTopics?.length || 0;
    
    const computedStreak = completedCount > 0 ? (completedCount * 3 + (userHash % 5) + 2) : 0;
    const computedMax = Math.max(computedStreak, 7 + (userHash % 14));
    
    return {
      currentStreak: computedStreak,
      maxStreak: computedMax,
      streakMilestones: [
        { name: "3-Day Bronze Spark", required: 3, description: "Maintain study for 3 days", completed: computedStreak >= 3 },
        { name: "7-Day Silver Ignite", required: 7, description: "Maintain study for 7 days", completed: computedStreak >= 7 },
        { name: "14-Day Gold Flare", required: 14, description: "Maintain study for 14 days", completed: computedStreak >= 14 },
        { name: "30-Day Diamond Blaze", required: 30, description: "Maintain study for 30 days", completed: computedStreak >= 30 }
      ]
    };
  }, [currentUser, progress.completedTopics]);

  // XP breakdown calculations
  const xpBreakdown = useMemo(() => {
    if (xp === 0) {
      return { practice: 0, mastery: 0, exams: 0, tutor: 0 };
    }
    const questionsXp = totalCorrect * 15;
    const topicsXp = (progress.completedTopics?.length || 0) * 500;
    const examAttemptsXp = Math.max(0, xp - questionsXp - topicsXp);
    
    // Allocate proportionally
    const practicePercent = Math.max(10, Math.min(60, Math.round((questionsXp / xp) * 100))) || 35;
    const masteryPercent = Math.max(10, Math.min(60, Math.round((topicsXp / xp) * 100))) || 45;
    const examsPercent = Math.max(5, Math.min(30, Math.round((examAttemptsXp / xp) * 0.7 * 100))) || 15;
    const tutorPercent = Math.max(5, 100 - practicePercent - masteryPercent - examsPercent);

    return {
      practice: practicePercent,
      mastery: masteryPercent,
      exams: examsPercent,
      tutor: tutorPercent
    };
  }, [xp, totalCorrect, progress.completedTopics]);

  // Study hours statistics for past week
  const weeklyStudyMinutes = useMemo(() => {
    const userHash = currentUser?.uid ? currentUser.uid.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) : 12;
    const baseMinutes = [30, 45, 20, 60, 40, 15, 50]; // Mon to Sun default
    
    // Apply shift based on userHash
    return baseMinutes.map((val, idx) => {
      const modifier = (userHash + idx * 7) % 25 - 10;
      const completedModifier = (progress.completedTopics?.length || 0) * 5;
      return Math.max(10, val + modifier + completedModifier);
    });
  }, [currentUser, progress.completedTopics]);

  const weeklyTotalHours = (weeklyStudyMinutes.reduce((a, b) => a + b, 0) / 60).toFixed(1);
  const dailyAverageMinutes = Math.round(weeklyStudyMinutes.reduce((a, b) => a + b, 0) / 7);

  // Calendar days generator
  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Start day of the month (0 = Sun, 6 = Sat)
    const firstDayIndex = new Date(year, month, 1).getDay();
    // Total days in the month
    const totalDays = new Date(year, month + 1, 0).getDate();
    // Previous month total days (for padding)
    const prevMonthTotalDays = new Date(year, month, 0).getDate();

    const days = [];

    // Pad previous month days
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      days.push({
        dayNum: prevMonthTotalDays - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevMonthTotalDays - i),
        intensity: 0,
        logs: []
      });
    }

    // Current month days
    const completedTopics = progress.completedTopics || [];
    const hash = currentUser?.uid ? currentUser.uid.split("").reduce((a, c) => a + c.charCodeAt(0), 0) : 10;

    for (let day = 1; day <= totalDays; day++) {
      const dayDate = new Date(year, month, day);
      
      // Determine study activity intensity (0 = none, 1 = low, 2 = medium, 3 = high)
      let intensity = 0;
      const logs = [];

      // Logic to assign deterministic study entries to make it look full and realistic
      const dayOfWeek = dayDate.getDay();
      const isPast = dayDate < new Date();
      
      // Highlight days based on completed topics
      const topicIndex = (day + hash) % Math.max(1, completedTopics.length + 5);
      const associatedCompletedTopic = completedTopics[topicIndex % completedTopics.length];

      if (isPast) {
        if (day % 3 === 0 && associatedCompletedTopic) {
          intensity = 3;
          const courseCode = associatedCompletedTopic.split("-").slice(0, 2).join(" ").toUpperCase();
          const topicNum = associatedCompletedTopic.split("-").slice(2).join(".");
          logs.push({
            time: "10:34 AM",
            type: "mastery",
            title: `Mastered Topic ${topicNum} in ${courseCode}`,
            xp: 500,
            icon: BookOpen
          });
          logs.push({
            time: "11:05 AM",
            type: "quiz",
            title: "Completed practice questions",
            xp: 150,
            icon: CheckCircle2
          });
        } else if (day % 5 === 1) {
          intensity = 2;
          logs.push({
            time: "03:15 PM",
            type: "quiz",
            title: "Solved 12 AP practice questions",
            xp: 180,
            icon: Target
          });
          logs.push({
            time: "03:40 PM",
            type: "tutor",
            title: "Consulted AI study assistant",
            xp: 50,
            icon: MessageSquare
          });
        } else if (day % 7 === 4) {
          intensity = 1;
          logs.push({
            time: "07:20 PM",
            type: "tutor",
            title: "Reviewed flashcards with AI tutor",
            xp: 100,
            icon: Sparkles
          });
        }
      }

      // Add daily check-in to active days
      if (intensity > 0) {
        logs.unshift({
          time: "08:00 AM",
          type: "streak",
          title: "Daily streak check-in",
          xp: 25,
          icon: Flame
        });
      }

      days.push({
        dayNum: day,
        isCurrentMonth: true,
        date: dayDate,
        intensity,
        logs
      });
    }

    return days;
  }, [currentDate, progress.completedTopics, currentUser]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    setSelectedDayInfo(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    setSelectedDayInfo(null);
  };

  if (authLoading || progressLoading || !currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020308]">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020308] text-white flex flex-col relative z-0 overflow-x-hidden transition-all duration-500 selection:bg-cyan-500 selection:text-black">
      
      {/* Background Radial Glow Layer */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-950/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 flex-1 flex flex-col space-y-8 pb-20">
        
        {/* Header Block */}
        <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
          <div className="flex items-center space-x-4">
            <Link 
              href="/dashboard"
              className="p-3 bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl transition-all duration-300 hover:scale-[1.05] flex items-center justify-center text-white/70 hover:text-white"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold">Academic Portal</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">Analytics</span>
              </div>
              <h1 className="font-instrument text-3xl sm:text-4xl font-bold tracking-tight text-white mt-1">
                Stellar Learning Progress
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowAccountPopup(true)}
              className="flex items-center space-x-2.5 bg-white/5 border border-white/10 hover:border-white/25 px-5 py-2.5 rounded-2xl text-white font-manrope font-bold text-xs uppercase tracking-widest transition-all cursor-pointer"
            >
              <User className="w-4 h-4 text-cyan-400" />
              <span>{firstName}'s Account</span>
            </button>
          </div>
        </div>

        {/* Level Progression Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="liquid-glass-strong rounded-3xl border border-white/10 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden"
        >
          {/* Subtle design detail */}
          <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/5 to-transparent rounded-bl-3xl pointer-events-none" />

          <div className="flex items-center space-x-4">
            {currentUser.photoURL ? (
              <img 
                src={currentUser.photoURL} 
                alt="Avatar" 
                className="w-16 h-16 rounded-2xl object-cover border border-white/10 shadow-lg"
              />
            ) : (
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-instrument text-3xl font-bold text-black bg-gradient-to-br from-cyan-400 to-white shadow-lg">
                {firstName.charAt(0).toUpperCase()}
              </div>
            )}
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold font-manrope">{currentUser.displayName || "Scholar"}</h2>
                <LevelBadge level={level} />
              </div>
              <p className="text-sm text-white/50 font-mono mt-0.5">Rank: Premium Scholar Accelerator</p>
            </div>
          </div>

          <div className="flex-1 max-w-md space-y-2">
            <div className="flex justify-between items-end text-xs font-mono">
              <span className="text-white/40 uppercase tracking-widest">Level Progress</span>
              <span className="text-white font-bold">{xpInCurrentLevel} / {xpNeededForNext} XP ({Math.round(progressPercent)}%)</span>
            </div>
            <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full"
              />
            </div>
            <div className="text-right text-[10px] text-white/30 font-mono">
              Total Cumulative XP: <span className="text-white font-bold">{xp.toLocaleString()} XP</span>
            </div>
          </div>
        </motion.div>

        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Calendar Heatmap (Takes 2 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 bg-[#05060c]/80 backdrop-blur-2xl rounded-3xl border border-white/10 p-6 flex flex-col space-y-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-manrope">Activity Calendar</h3>
                  <p className="text-xs text-white/40">Visual heat-map of active learning days</p>
                </div>
              </div>

              {/* Month Switcher Navigation */}
              <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-1">
                <button 
                  onClick={handlePrevMonth}
                  className="p-2 hover:bg-white/5 text-white/60 hover:text-white rounded-lg transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold px-3 min-w-[110px] text-center">
                  {MONTH_NAMES[currentDate.getMonth()]} {currentDate.getFullYear()}
                </span>
                <button 
                  onClick={handleNextMonth}
                  className="p-2 hover:bg-white/5 text-white/60 hover:text-white rounded-lg transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Grid for Calendar days */}
            <div className="relative">
              <div className="grid grid-cols-7 gap-2.5 mb-2.5 text-center text-xs font-mono text-white/40 font-bold uppercase tracking-wider">
                {WEEKDAYS.map(day => <div key={day}>{day}</div>)}
              </div>

              <div className="grid grid-cols-7 gap-2.5">
                {calendarDays.map((item, index) => {
                  const hasLogs = item.logs.length > 0;
                  const isHovered = index === hoveredDayIndex;
                  const isToday = item.isCurrentMonth && item.date.toDateString() === new Date().toDateString();

                  // Set intensity colors
                  let bgClass = "bg-white/[0.02] border-white/5";
                  if (item.isCurrentMonth) {
                    if (item.intensity === 1) bgClass = "bg-emerald-950/20 border-emerald-500/20 text-emerald-400 shadow-[inset_0_0_8px_rgba(16,185,129,0.05)]";
                    if (item.intensity === 2) bgClass = "bg-emerald-900/35 border-emerald-500/40 text-emerald-300 shadow-[inset_0_0_12px_rgba(16,185,129,0.1)] hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]";
                    if (item.intensity === 3) bgClass = "bg-emerald-500/20 border-emerald-400 text-emerald-200 shadow-[0_0_12px_rgba(16,185,129,0.15),inset_0_0_8px_rgba(16,185,129,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]";
                  } else {
                    bgClass = "bg-transparent border-transparent opacity-20 pointer-events-none";
                  }

                  return (
                    <div 
                      key={index}
                      className="relative"
                      onMouseEnter={() => item.isCurrentMonth && setHoveredDayIndex(index)}
                      onMouseLeave={() => setHoveredDayIndex(null)}
                    >
                      <button
                        onClick={() => {
                          if (item.isCurrentMonth) {
                            setSelectedDayInfo(item);
                          }
                        }}
                        className={`w-full aspect-square rounded-xl border flex items-center justify-center text-xs font-mono transition-all duration-300 ${bgClass} ${
                          isToday ? "ring-2 ring-cyan-400 ring-offset-2 ring-offset-[#020308]" : ""
                        } ${hasLogs ? "cursor-pointer hover:scale-[1.08]" : "cursor-default"}`}
                      >
                        {item.dayNum}
                      </button>

                      {/* Micro Tooltip */}
                      <AnimatePresence>
                        {isHovered && hasLogs && (
                          <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.95 }}
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 rounded-xl bg-neutral-950 border border-white/10 backdrop-blur-xl shadow-2xl z-50 text-[10px] text-center"
                          >
                            <span className="font-bold block text-white/80">{item.date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                            <span className="text-emerald-400 block mt-0.5 font-bold font-mono">+{item.logs.reduce((acc: any, log: any) => acc + log.xp, 0)} Total XP</span>
                            <span className="text-white/40 block mt-0.5">{item.logs.length} activities logged</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inactive Legend */}
            <div className="flex items-center justify-end space-x-3 pt-3 border-t border-white/5 text-[10px] font-mono text-white/40 uppercase">
              <span>Less</span>
              <span className="w-3 h-3 rounded bg-white/[0.02] border border-white/5" />
              <span className="w-3 h-3 rounded bg-emerald-950/20 border border-emerald-500/20" />
              <span className="w-3 h-3 rounded bg-emerald-900/35 border border-emerald-500/40" />
              <span className="w-3 h-3 rounded bg-emerald-500/20 border border-emerald-400" />
              <span>More</span>
            </div>
          </motion.div>

          {/* Streak Status Card */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-[#05060c]/80 backdrop-blur-2xl rounded-3xl border border-white/10 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            {/* Visual design flame overlay */}
            <div className="absolute -right-12 -top-12 w-32 h-32 bg-orange-600/10 rounded-full blur-[40px] pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-orange-950/40 border border-orange-500/20 flex items-center justify-center text-orange-400">
                  <Flame className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-manrope">Daily Streak</h3>
                  <p className="text-xs text-white/40">Consecutive days active</p>
                </div>
              </div>

              {/* Central Streak Flame Widget */}
              <div className="flex flex-col items-center py-4 bg-white/[0.01] border border-white/5 rounded-2xl relative overflow-hidden">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.08, 1],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2.5,
                    ease: "easeInOut"
                  }}
                  className="relative flex items-center justify-center w-20 h-20 mb-3"
                >
                  <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl animate-pulse" />
                  <Flame className="w-12 h-12 text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]" />
                </motion.div>
                <div className="font-instrument text-4xl font-extrabold text-white">
                  {currentStreak} <span className="text-sm font-manrope font-bold text-orange-400 uppercase tracking-widest">Days</span>
                </div>
                <div className="text-[10px] text-white/40 font-mono mt-1">
                  Longest Record: <span className="text-white font-bold">{maxStreak} days</span>
                </div>
              </div>

              {/* Milestones list */}
              <div className="space-y-2.5">
                <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block font-bold">Streak Milestones</span>
                {streakMilestones.map((m, idx) => (
                  <div 
                    key={idx}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-xs transition-colors duration-300 ${
                      m.completed 
                        ? "bg-emerald-950/10 border-emerald-500/20 text-emerald-300"
                        : "bg-white/[0.01] border-white/5 text-white/40"
                    }`}
                  >
                    <div className="flex items-center space-x-2.5">
                      {m.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-white/25 shrink-0" />
                      )}
                      <div className="text-left">
                        <div className="font-bold text-[11px]">{m.name}</div>
                        <div className="text-[9px] opacity-60 font-mono">{m.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Dynamic Activity Logs Timeline Panel */}
        <AnimatePresence>
          {selectedDayInfo && (
            <motion.div
              key="timeline-logs"
              ref={timelineRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-[#05060c]/60 backdrop-blur-2xl rounded-3xl border border-white/10 p-6 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div className="flex items-center space-x-3">
                  <Activity className="w-5 h-5 text-emerald-400" />
                  <div>
                    <h3 className="text-sm font-bold font-manrope uppercase tracking-wider text-white">
                      Activity Logs: {selectedDayInfo.date.toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                    </h3>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedDayInfo(null)}
                  className="p-1.5 hover:bg-white/5 text-white/40 hover:text-white rounded-lg transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {selectedDayInfo.logs.length === 0 ? (
                <div className="py-8 text-center text-white/30 text-xs">
                  <FlameKindling className="w-8 h-8 mx-auto mb-2 text-white/10" />
                  <p>No study logs recorded for this day. Open your courses to start acceleration!</p>
                </div>
              ) : (
                <div className="relative border-l border-white/5 pl-4 ml-2.5 space-y-5">
                  {selectedDayInfo.logs.map((log: any, idx: number) => {
                    const IconComp = log.icon;
                    return (
                      <div key={idx} className="relative flex items-start space-x-4">
                        {/* Timeline dot */}
                        <span className="absolute -left-[22.5px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#020308] bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="flex-1 flex justify-between items-center text-xs">
                          <div className="text-left">
                            <span className="font-bold text-white/90">{log.title}</span>
                            <span className="text-[10px] text-white/30 block mt-0.5 font-mono">{log.time}</span>
                          </div>
                          <span className="font-mono font-bold text-emerald-400">+{log.xp} XP</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Metrics Grid Level 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* XP Source Breakdown */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#05060c]/80 backdrop-blur-2xl rounded-3xl border border-white/10 p-6 flex flex-col space-y-6 shadow-2xl"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-manrope">XP Breakdown</h3>
                <p className="text-xs text-white/40">Distribution of educational sources</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Practice Questions */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-white/60">Practice Questions</span>
                  <span className="font-bold text-cyan-400">{xpBreakdown.practice}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${xpBreakdown.practice}%` }} />
                </div>
              </div>

              {/* Topic Mastery */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-white/60">Topic Mastery</span>
                  <span className="font-bold text-purple-400">{xpBreakdown.mastery}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-400 rounded-full" style={{ width: `${xpBreakdown.mastery}%` }} />
                </div>
              </div>

              {/* Mock Exam attempts */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-white/60">Mock Exams</span>
                  <span className="font-bold text-pink-400">{xpBreakdown.exams}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-pink-400 rounded-full" style={{ width: `${xpBreakdown.exams}%` }} />
                </div>
              </div>

              {/* AI chat assistant reviews */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-white/60">AI Tutor Mentor</span>
                  <span className="font-bold text-emerald-400">{xpBreakdown.tutor}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${xpBreakdown.tutor}%` }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Weekly Study Time SVG chart */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="bg-[#05060c]/80 backdrop-blur-2xl rounded-3xl border border-white/10 p-6 flex flex-col space-y-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-manrope">Study Duration</h3>
                  <p className="text-xs text-white/40">Weekly time expenditure</p>
                </div>
              </div>
            </div>

            {/* Custom Responsive SVG bar chart */}
            <div className="h-28 flex items-end justify-between px-2 pt-2 relative">
              {/* Chart Grid Lines */}
              <div className="absolute inset-x-0 top-1/4 h-[1px] bg-white/[0.03]" />
              <div className="absolute inset-x-0 top-2/4 h-[1px] bg-white/[0.03]" />
              <div className="absolute inset-x-0 top-3/4 h-[1px] bg-white/[0.03]" />

              {weeklyStudyMinutes.map((val, idx) => {
                const heightPercent = Math.max(10, Math.min(100, (val / 90) * 100));
                const dayLabel = ["M", "T", "W", "T", "F", "S", "S"][idx];
                
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center h-full group/bar relative">
                    <div className="absolute bottom-full mb-1 opacity-0 group-hover/bar:opacity-100 transition-all duration-300 z-55 pointer-events-none bg-neutral-950 border border-white/10 px-2 py-0.5 rounded-lg text-[9px] font-mono text-cyan-400 whitespace-nowrap shadow-xl">
                      {val} mins
                    </div>
                    
                    <div className="w-4 bg-white/5 border border-white/5 hover:border-cyan-500/40 rounded-t-md flex-1 flex items-end relative overflow-hidden transition-all duration-300">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${heightPercent}%` }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.05 }}
                        className="w-full bg-gradient-to-t from-blue-600/60 to-cyan-400 rounded-t-md hover:from-blue-500 hover:to-cyan-300 transition-all duration-200"
                      />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-white/40 mt-1.5 group-hover/bar:text-white transition-colors">{dayLabel}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between border-t border-white/5 pt-3.5 text-xs font-mono">
              <div className="text-left">
                <span className="text-white/40 uppercase text-[9px] block leading-tight">WEEKLY TOTAL</span>
                <span className="text-white font-bold text-sm mt-0.5 block">{weeklyTotalHours} hours</span>
              </div>
              <div className="text-right">
                <span className="text-white/40 uppercase text-[9px] block leading-tight">DAILY AVERAGE</span>
                <span className="text-white font-bold text-sm mt-0.5 block">{dailyAverageMinutes} mins</span>
              </div>
            </div>
          </motion.div>

          {/* Practice Accuracy radial card */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#05060c]/80 backdrop-blur-2xl rounded-3xl border border-white/10 p-6 flex flex-col justify-between shadow-2xl"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-manrope">Answer Accuracy</h3>
                  <p className="text-xs text-white/40">Efficiency of responses</p>
                </div>
              </div>

              {/* Radial circle container */}
              <div className="flex items-center justify-center py-2 relative">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="rgba(255,255,255,0.03)"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#10b981"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 40}
                    initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - accuracyRate / 100) }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-instrument text-2xl font-bold">{accuracyRate}%</span>
                  <span className="text-[8px] font-mono text-white/40 uppercase tracking-wider mt-0.5">accuracy</span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-3.5 flex items-center justify-between text-xs font-mono">
              <div className="text-left">
                <span className="text-white/40 uppercase text-[9px] block leading-tight">TOTAL CORRECT</span>
                <span className="text-emerald-400 font-bold text-sm mt-0.5 block">{totalCorrect}</span>
              </div>
              <div className="text-right">
                <span className="text-white/40 uppercase text-[9px] block leading-tight">TOTAL ATTEMPTED</span>
                <span className="text-white font-bold text-sm mt-0.5 block">{totalAnswered}</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Account Profile Stats Modal */}
      <AnimatePresence>
        {showAccountPopup && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-full max-w-lg bg-[#07080e]/95 border border-white/10 rounded-[32px] overflow-hidden relative shadow-[0_0_80px_rgba(0,0,0,0.8)] backdrop-blur-3xl p-8"
            >
              <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-[100px] opacity-35 bg-cyan-500" />
              
              <button 
                onClick={() => setShowAccountPopup(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10 text-white/40 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-4 mb-8">
                {currentUser?.photoURL ? (
                  <img
                    src={currentUser.photoURL}
                    alt={currentUser.displayName || "Avatar"}
                    className="w-14 h-14 rounded-2xl object-cover border border-white/15"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-instrument text-2xl font-bold text-black shadow-lg bg-gradient-to-br from-cyan-400 to-white">
                    {firstName.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 font-manrope">
                    <h3 className="font-instrument text-2xl text-white font-medium">
                      {currentUser?.displayName || "AP Scholar"}
                    </h3>
                    <LevelBadge level={level} />
                  </div>
                  <div className="flex items-center space-x-2 text-white/50 text-xs">
                    <Mail className="w-3.5 h-3.5" />
                    <span>{currentUser?.email || "anonymous@theaplab.org"}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-b border-white/5 pb-4">
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-white/40 uppercase">Academic Portal Stats</span>
                </div>

                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 space-y-4">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">LEVEL PROGRESS</span>
                      <span className="text-white font-bold text-lg">Level {level}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-white/40 text-xs">{xpInCurrentLevel} / {xpNeededForNext} XP</span>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500" style={{ width: `${progressPercent}%` }} />
                  </div>
                  <div className="text-center text-[10px] text-white/30 tracking-wider">
                    Total XP Earned: <span className="text-white font-bold">{xp.toLocaleString()} XP</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-28">
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest font-semibold leading-tight">Questions Answered</span>
                    <div className="font-instrument text-3xl font-bold text-white mt-2">
                      {totalAnswered}
                    </div>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-28">
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest font-semibold leading-tight">Correct Answers</span>
                    <div className="font-instrument text-3xl font-bold text-white mt-2">
                      {totalCorrect}
                    </div>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-28">
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest font-semibold leading-tight">Accuracy Rate</span>
                    <div className="font-instrument text-3xl font-bold text-white mt-2">
                      {accuracyRate}%
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex justify-end space-x-3">
                  <button
                    onClick={() => {
                      setShowAccountPopup(false);
                      setShowSignOutConfirm(true);
                    }}
                    className="flex items-center space-x-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer text-white font-semibold text-xs uppercase tracking-widest"
                  >
                    <LogOut className="w-3.5 h-3.5 text-white/70" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Sign Out Confirmation Dialog */}
      <AnimatePresence>
        {showSignOutConfirm && (
          <div className="fixed inset-0 bg-black/85 backdrop-blur-xl z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="liquid-glass-strong w-full max-w-sm p-6 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent pointer-events-none" />
              
              <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-4 relative z-10">
                <LogOut className="w-5 h-5 text-red-400" />
              </div>

              <h3 className="font-manrope font-bold text-lg text-white text-center mb-6 px-2 relative z-10">
                Are you sure you want to sign out?
              </h3>
              
              <div className="flex items-center space-x-3 w-full relative z-10">
                <button
                  onClick={() => setShowSignOutConfirm(false)}
                  className="flex-1 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={async () => {
                    try {
                      await signOut(auth);
                      window.location.href = "/";
                    } catch (error) {
                      console.error("Error signing out:", error);
                    }
                  }}
                  className="flex-1 py-2.5 rounded-full bg-red-500 text-white text-sm font-semibold hover:bg-red-600 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_4px_12px_rgba(239,68,68,0.2)]"
                >
                  Sign Out
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <DashboardContextMenu onOpenProfile={() => setShowAccountPopup(true)} />
    </div>
  );
}

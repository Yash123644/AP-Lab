"use client";

import { LevelBadge } from "@/components/LevelBadge";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Flame } from "lucide-react";

const showcaseImages = [
  "/images/dashboard-live.webp",
  "https://media.discordapp.net/attachments/1125466904966991872/1501074138180096060/Screenshot_2026-05-05_at_12.12.26_AM.png?ex=69fabfbb&is=69f96e3b&hm=44db7232dc77f74dd9a03d40feb08db2c32d75ab068d133a0f0db1ab47e7a10a&=&format=webp&quality=lossless&width=3172&height=1566",
  "https://media.discordapp.net/attachments/1125466904966991872/1501074138809499678/Screenshot_2026-05-05_at_12.11.55_AM.png?ex=69fabfbb&is=69f96e3b&hm=a2bc24dcb606560d4af2b46ff50b90e6000dc24cdca460310792fc90f6dfff02&=&format=webp&quality=lossless&width=3096&height=1566"
];

const getColorForPercentage = (pct: number, opacity: number = 1) => {
  const cleanPct = Math.max(0, Math.min(100, pct));
  // Scale hue from 0 (red) to 156 (emerald-400 green)
  const hue = (cleanPct / 100) * 156;
  return `hsla(${hue}, 72%, 52%, ${opacity})`;
};

export function AppShowcase() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  return (
    <section className="relative w-full py-[160px] px-6 md:px-[120px] bg-transparent overflow-hidden">
      {/* Seamless blend: fade in from above (deep-navy) and out to below (deep-navy) */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-[#0c0d12] to-deep-navy pointer-events-none" />
      {/* Background Decorative Elements - Monochrome dual grid and spotlights */}
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute inset-0 grid-pattern-bold opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.015] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-inter font-extrabold text-white text-3xl md:text-5xl tracking-tight mb-4"
          >
            Included Workspace
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-white/50 text-sm md:text-base max-w-lg mx-auto leading-relaxed"
          >
            Experience the most advanced academic interface ever designed. Precision, speed, and aesthetics blended into one seamless portal.
          </motion.p>
        </div>

        {/* Apple-Style 2x2 Bento Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto mt-16">
          
          {/* Box 1 (Top Left) - GAMIFICATION */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#000000] border border-white/10 rounded-[28px] h-[440px] flex flex-col justify-between p-8 md:p-10 relative overflow-hidden group shadow-2xl"
          >
            {/* Typography & Call to Action */}
            <div className="text-center relative z-10 flex flex-col items-center">
              <span className="text-[10px] font-mono tracking-widest text-white/40 font-bold uppercase mb-1">GAMIFICATION</span>
              <h3 className="text-2xl md:text-3xl font-inter font-bold text-white tracking-tight">Academic Progression & Badges.</h3>
              <p className="text-white/50 font-inter text-xs max-w-sm mt-2 leading-relaxed">
                Earn XP across all courses to level up and climb the live global leaderboard.
              </p>
            </div>

            {/* Center Graphic: Mini Simplistic White Leaderboard */}
            <div className="relative w-full flex-1 flex items-center justify-center z-10 mt-2">
              <div className="flex flex-col space-y-2 bg-[#ffffff] border border-neutral-200 rounded-2xl p-4 w-full max-w-[300px] text-left shadow-lg">
                {[
                  { rank: 1, name: "Tyler Davis", lvl: 29, xp: "10.4k XP" },
                  { rank: 2, name: "Sofia Rodriguez", lvl: 26, xp: "8.6k XP" },
                  { rank: 3, name: "Alex Mercer", lvl: 25, xp: "8.0k XP" }
                ].map((user) => (
                  <div key={user.rank} className="flex items-center justify-between bg-neutral-50 border border-neutral-100 rounded-xl px-3 py-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono font-bold text-neutral-400 w-3">#{user.rank}</span>
                      <LevelBadge level={user.lvl} showLabel={false} size="sm" className="scale-75 origin-center shrink-0 -mx-1" />
                      <div className="flex flex-col">
                        <span className="text-[11px] font-manrope font-bold text-neutral-800 leading-tight">{user.name}</span>
                        <span className="text-[8px] font-mono text-neutral-400 mt-0.5">Level {user.lvl}</span>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-neutral-600 bg-neutral-200/50 px-2 py-0.5 rounded">{user.xp}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Box 2 (Top Right) - INTERACTIVE LESSONS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#ffffff] border border-neutral-200 rounded-[28px] h-[440px] flex flex-col justify-between p-8 md:p-10 relative overflow-hidden group shadow-2xl"
          >
            <div className="text-center relative z-10 flex flex-col items-center">
              <span className="text-[10px] font-mono tracking-widest text-black/40 font-bold uppercase mb-1">INTERACTIVE LESSONS</span>
              <h3 className="text-2xl md:text-3xl font-inter font-bold text-black tracking-tight mb-1">Interactive Course Guides.</h3>
              <p className="text-black/50 font-inter text-xs max-w-sm mt-1 leading-relaxed">
                Seamless curriculum mapping of video modules, reading articles, and interactive visual aids.
              </p>
            </div>

            {/* Mini Dashboard Visualization */}
            <div className="relative w-full flex-1 flex items-center justify-center z-10 mt-6 px-2">
              <div className="bg-[#05060b] border border-white/10 rounded-2xl w-full max-w-[360px] h-[210px] shadow-2xl flex overflow-hidden text-left font-sans relative group/dash hover:border-white/15 transition-all duration-300">
                {/* Simulated Glass Highlight Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.05] pointer-events-none" />
                
                {/* Mini Sidebar */}
                <div className="w-[24%] bg-[#090b11] border-r border-white/5 p-2 flex flex-col justify-between select-none shrink-0">
                  <div className="space-y-3">
                    {/* Logo area */}
                    <div className="flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-[6.5px] font-mono font-bold text-white tracking-widest uppercase">AP LAB</span>
                    </div>
                    {/* Sidebar menu items */}
                    <div className="space-y-1.5">
                      <div className="bg-white/10 rounded px-1.5 py-0.5 flex items-center space-x-1">
                        <div className="w-1 h-1 rounded bg-emerald-400/80" />
                        <span className="text-[5.5px] font-bold text-white">Lessons</span>
                      </div>
                      <div className="rounded px-1.5 py-0.5 flex items-center space-x-1 opacity-40">
                        <div className="w-1 h-1 rounded bg-white" />
                        <span className="text-[5.5px] text-white">Quizzes</span>
                      </div>
                      <div className="rounded px-1.5 py-0.5 flex items-center space-x-1 opacity-40">
                        <div className="w-1 h-1 rounded bg-white" />
                        <span className="text-[5.5px] text-white">Exams</span>
                      </div>
                      <div className="rounded px-1.5 py-0.5 flex items-center space-x-1 opacity-40">
                        <div className="w-1 h-1 rounded bg-white" />
                        <span className="text-[5.5px] text-white">Analytics</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* User Profile Capsule */}
                  <div className="bg-white/[0.04] border border-white/5 rounded px-1 py-0.5 flex items-center space-x-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex items-center justify-center text-[5px] font-bold text-white">U</div>
                    <span className="text-[4.5px] font-mono text-white/50 truncate">user@aplab.org</span>
                  </div>
                </div>

                {/* Mini Main Panel */}
                <div className="flex-1 bg-[#040407] p-2.5 flex flex-col justify-between select-none overflow-hidden">
                  {/* Panel Header */}
                  <div className="flex items-center justify-between text-[5px] font-mono text-white/35 uppercase border-b border-white/5 pb-1">
                    <span>Course: AP Biology</span>
                    <span>Unit 1: Chemistry of Life</span>
                  </div>

                  {/* Panel Body */}
                  <div className="flex-1 py-1.5 flex gap-2 overflow-hidden">
                    {/* Left: Article reading view */}
                    <div className="flex-1 flex flex-col justify-between overflow-hidden">
                      <div>
                        <h4 className="text-[7.5px] font-extrabold text-white leading-tight mb-1 truncate">
                          1.1 Structure of Water
                        </h4>
                        <p className="text-[5px] text-white/50 leading-relaxed max-w-[130px] line-clamp-3">
                          Water is a polar molecule due to oxygen's high electronegativity. This polarity allows hydrogen bonding to form between molecules...
                        </p>
                      </div>
                      {/* Highlighted text callout in article */}
                      <div className="bg-emerald-400/5 border-l border-emerald-400/40 p-1 rounded-r mt-1">
                        <p className="text-[4.5px] text-emerald-400 font-medium italic leading-tight">
                          Key: Cohesion creates high surface tension.
                        </p>
                      </div>
                    </div>

                    {/* Right: Media / Interactive component */}
                    <div className="w-[38%] flex flex-col space-y-1 shrink-0">
                      {/* Interactive molecule visual */}
                      <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-lg flex flex-col items-center justify-center p-1 relative overflow-hidden">
                        {/* Tiny coordinate grid grid-lines */}
                        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-[0.03]">
                          {Array.from({ length: 16 }).map((_, i) => (
                            <div key={i} className="border-[0.25px] border-white" />
                          ))}
                        </div>
                        {/* Molecule representation */}
                        <svg className="w-8 h-8 text-emerald-400 relative z-10" viewBox="0 0 40 40" fill="none">
                          <circle cx="20" cy="18" r="4" fill="#10b981" />
                          <circle cx="11" cy="11" r="2.5" fill="#ffffff" />
                          <circle cx="29" cy="11" r="2.5" fill="#ffffff" />
                          <line x1="20" y1="18" x2="11" y2="11" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
                          <line x1="20" y1="18" x2="29" y2="11" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
                          <text x="18" y="20" fill="black" fontSize="5" fontWeight="bold">O</text>
                          <text x="9.5" y="13" fill="black" fontSize="4.5" fontWeight="bold">H</text>
                          <text x="27.5" y="13" fill="black" fontSize="4.5" fontWeight="bold">H</text>
                        </svg>
                        <span className="text-[4.5px] font-mono text-white/30 z-10 uppercase mt-0.5">H₂O Molecule</span>
                      </div>
                      
                      {/* Video clip representation */}
                      <div className="h-[36px] bg-black border border-white/5 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,transparent_60%)]" />
                        {/* Play Icon */}
                        <svg className="w-3 h-3 text-white opacity-80" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        {/* Video timeline */}
                        <div className="absolute bottom-1 inset-x-1 h-[1px] bg-white/20 rounded-full overflow-hidden">
                          <div className="w-[45%] h-full bg-emerald-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Panel Footer / Interactive AI Tutor Button */}
                  <div className="flex justify-between items-center border-t border-white/5 pt-1 mt-0.5">
                    <span className="text-[4.5px] text-white/30 font-mono">Page 1 of 6</span>
                    {/* Ask AI Toggle */}
                    <div className="bg-emerald-400 text-black px-1.5 py-0.5 rounded-[3px] text-[4.5px] font-manrope font-extrabold flex items-center space-x-0.5 shadow-sm">
                      <span className="w-1 h-1 rounded-full bg-black animate-pulse" />
                      <span>Ask AI Tutor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Box 3 (Bottom Left) - 24/7 AI TUTOR */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#ffffff] border border-neutral-200 rounded-[28px] h-[440px] flex flex-col justify-between p-8 md:p-10 relative overflow-hidden group shadow-2xl"
          >
            <div className="text-center relative z-10 flex flex-col items-center">
              <span className="text-[10px] font-mono tracking-widest text-black/40 font-bold uppercase mb-1">24/7 AI TUTOR</span>
              <h3 className="text-2xl md:text-3xl font-inter font-bold text-black tracking-tight mb-2">Your 24/7 Context-Aware Academic Partner.</h3>
            </div>

            {/* Chat conversation box detailing cellular respiration */}
            <div className="w-[90%] mx-auto relative z-10 transition-all duration-300 group-hover:scale-[1.02] -translate-y-2">
              <div className="bg-neutral-50/90 border border-neutral-200/80 rounded-2xl p-4 shadow-lg text-[11px] font-sans space-y-3">
                {/* User message */}
                <div className="flex flex-col items-end">
                  <div className="bg-neutral-200 text-neutral-800 rounded-2xl rounded-tr-sm px-3.5 py-1.5 max-w-[85%] font-medium">
                    Explain cellular respiration simply.
                  </div>
                </div>
                {/* AI message */}
                <div className="flex flex-col items-start">
                  <div className="bg-neutral-900 text-white rounded-2xl rounded-tl-sm px-3.5 py-2 max-w-[90%] leading-relaxed">
                    It converts glucose into energy (ATP) in 3 stages:
                    <div className="mt-1.5 font-mono text-[9px] text-neutral-400 space-y-0.5">
                      <div>1. Glycolysis (Cytoplasm)</div>
                      <div>2. Krebs Cycle (Mitochondria)</div>
                      <div>3. Electron Transport (Membrane)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Box 4 (Bottom Right) - EXAM SIMULATOR */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#000000] border border-white/10 rounded-[28px] h-[440px] flex flex-col justify-between p-8 md:p-10 relative overflow-hidden group shadow-2xl"
          >
            <div className="text-center relative z-10 flex flex-col items-center">
              <span className="text-[10px] font-mono tracking-widest text-white/40 font-bold uppercase mb-1">EXAM SIMULATOR</span>
              <h3 className="text-2xl md:text-3xl font-inter font-bold text-white tracking-tight mb-1">Comprehensive Mock Diagnostics.</h3>
              <p className="text-white/50 font-inter text-xs max-w-sm mt-2 leading-relaxed">
                Full-length, timed diagnostic mock exams built to match the exact scoring weight of the actual test.
              </p>
            </div>

            {/* Sleek typography layout showing multiple-choice chemistry or biology problem */}
            <div className="w-[90%] mx-auto relative z-10 transition-all duration-300 group-hover:scale-[1.02] -translate-y-2">
              <div className="bg-[#0c0d12]/90 border border-white/10 rounded-2xl p-4 shadow-2xl text-[11px] font-sans space-y-3 text-left">
                <div className="flex items-center justify-between text-[9px] font-mono text-white/40 uppercase">
                  <span>AP Chemistry Diagnostic</span>
                  <span>Time: 1.5m</span>
                </div>
                <p className="text-white font-medium leading-relaxed">
                  Which of the following describes why water has a higher boiling point than hydrogen sulfide (H₂S)?
                </p>
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2.5 bg-white/5 p-2 rounded-lg border border-white/5 text-white/75">
                    <span className="w-4 h-4 flex items-center justify-center rounded-full bg-white/10 text-white text-[9px] font-semibold">A</span>
                    <span>H₂O has covalent bonds, H₂S does not.</span>
                  </div>
                  <div className="flex items-center space-x-2.5 bg-white/15 p-2 rounded-lg border border-white/25 text-white font-semibold">
                    <span className="w-4 h-4 flex items-center justify-center rounded-full bg-white text-black text-[9px] font-bold">B</span>
                    <span>H₂O forms strong intermolecular hydrogen bonds.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Box 5 (Bottom Span) - PROGRESS TRACKING (Col-span 2) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#000000] border border-white/10 rounded-[28px] flex flex-col justify-between p-8 md:p-10 relative overflow-hidden group shadow-2xl col-span-1 md:col-span-2"
          >
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 z-10">
              <div className="text-left">
                <span className="text-[10px] font-mono tracking-widest text-white/40 font-bold uppercase mb-1">PROGRESS TRACKING</span>
                <h3 className="text-2xl md:text-3xl font-inter font-bold text-white tracking-tight">Real-Time Performance Metrics.</h3>
                <p className="text-white/50 font-inter text-xs max-w-md mt-1.5 leading-relaxed">
                  Track your mastery indices, syllabus progress, and current study streaks per course.
                </p>
              </div>
              
              {/* Daily Streak Indicator */}
              <div className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-2.5 backdrop-blur-md self-start md:self-auto">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 0.95, 1.05, 1]
                  }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                  className="text-amber-500 shrink-0"
                >
                  <Flame className="w-6 h-6 fill-amber-500 text-amber-400" />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-white font-manrope font-extrabold text-[15px] leading-none">14 Days</span>
                  <span className="text-[9px] font-mono text-white/30 tracking-wider uppercase mt-1">Study Streak</span>
                </div>
              </div>
            </div>

            {/* Metrics Dashboard Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-8 z-10">
              {/* Metric 1: Question Accuracy Circle */}
              <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex flex-col justify-between hover:border-white/10 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Accuracy</span>
                    <h4 className="text-[13px] font-bold text-white mt-0.5">Question Correct Rate</h4>
                  </div>
                </div>
                
                {/* Circular Progress Gauge */}
                <div className="flex items-center space-x-4 my-3">
                  <div className="relative w-14 h-14 flex items-center justify-center flex-shrink-0">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-white/10"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-emerald-400"
                        strokeDasharray="92, 100"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute text-[11px] font-mono font-bold text-white">92%</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/90 text-xs font-semibold">Excellent Mastery</span>
                    <span className="text-[9px] text-white/40 mt-0.5">Top 5% of AP Students</span>
                  </div>
                </div>

                <div className="text-[9px] font-mono text-white/30 pt-1 border-t border-white/5">
                  <span>Based on 250+ recent items</span>
                </div>
              </div>

              {/* Metric 2: Study Duration Graph */}
              <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex flex-col justify-between hover:border-white/10 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <span 
                      className="text-[10px] font-mono font-bold uppercase transition-colors duration-300"
                      style={{ color: getColorForPercentage(53) }}
                    >
                      Activity
                    </span>
                    <h4 className="text-[13px] font-bold text-white mt-0.5">Study Duration</h4>
                  </div>
                </div>

                {/* Sleek mini bar chart representation */}
                <div className="flex items-end justify-between h-14 my-3 px-1">
                  {[
                    { label: "M", value: "15%", hrs: "0.5h" },
                    { label: "T", value: "60%", hrs: "2.2h" },
                    { label: "W", value: "25%", hrs: "1.0h" },
                    { label: "T", value: "85%", hrs: "3.5h" },
                    { label: "F", value: "65%", hrs: "2.5h" },
                    { label: "S", value: "100%", hrs: "4.0h" },
                    { label: "S", value: "20%", hrs: "0.8h" }
                  ].map((bar, idx) => {
                    const pct = parseInt(bar.value);
                    const color = getColorForPercentage(pct);
                    return (
                      <div key={idx} className="flex flex-col items-center flex-1">
                        <div className="relative w-2 bg-white/10 rounded-full h-10 flex items-end">
                          <div 
                            className="w-full rounded-full transition-all duration-300" 
                            style={{ 
                              height: bar.value,
                              backgroundColor: color
                            }}
                          />
                        </div>
                        <span className="text-[8px] font-mono text-white/40 mt-1.5">{bar.label}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="text-[9px] font-mono text-white/30 pt-1 border-t border-white/5 flex justify-between">
                  <span>Weekly Average: 2.1h/day</span>
                </div>
              </div>

              {/* Metric 3: Syllabus Mastery Progress */}
              <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex flex-col justify-between hover:border-white/10 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <span 
                      className="text-[10px] font-mono font-bold uppercase transition-colors duration-300"
                      style={{ color: getColorForPercentage(84) }}
                    >
                      Mastery
                    </span>
                    <h4 className="text-[13px] font-bold text-white mt-0.5">Syllabus Completion</h4>
                  </div>
                  <span 
                    className="text-[11px] font-mono font-bold px-2 py-0.5 rounded transition-all duration-300"
                    style={{
                      color: getColorForPercentage(84),
                      backgroundColor: getColorForPercentage(84, 0.1)
                    }}
                  >
                    84%
                  </span>
                </div>
                
                {/* Progress bar */}
                <div className="mt-5 mb-2">
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-500" 
                      style={{ 
                        width: "84%",
                        backgroundColor: getColorForPercentage(84)
                      }} 
                    />
                  </div>
                </div>

                <div className="text-[9px] font-mono text-white/30 pt-1 border-t border-white/5 flex justify-between">
                  <span>Mastered: 18/22 units</span>
                  <span>AP Biology</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

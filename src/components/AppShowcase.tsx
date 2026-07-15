"use client";

import { LevelBadge } from "@/components/LevelBadge";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Flame, Play, Calendar } from "lucide-react";

const showcaseImages = [
  "/images/dashboard-live.webp",
  "https://media.discordapp.net/attachments/1125466904966991872/1501074138180096060/Screenshot_2026-05-05_at_12.12.26_AM.png?ex=69fabfbb&is=69f96e3b&hm=44db7232dc77f74dd9a03d40feb08db2c32d75ab068d133a0f0db1ab47e7a10a&=&format=webp&quality=lossless&width=3172&height=1566",
  "https://media.discordapp.net/attachments/1125466904966991872/1501074138809499678/Screenshot_2026-05-05_at_12.11.55_AM.png?ex=69fabfbb&is=69f96e3b&hm=a2bc24dcb606560d4af2b46ff50b90e6000dc24cdca460310792fc90f6dfff02&=&format=webp&quality=lossless&width=3096&height=1566"
];

const getColorForPercentage = (pct: number, opacity: number = 1) => {
  const cleanPct = Math.max(0, Math.min(100, pct));
  // Non-linear power scale to make orange colors more red
  const hue = Math.pow(cleanPct / 100, 1.8) * 156;
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
              <div className="flex flex-col space-y-2 bg-[#ffffff] border border-neutral-200 rounded-2xl p-4 w-full max-w-[300px] text-left shadow-lg group-hover:scale-[1.04] transition-transform duration-500 ease-out">
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
              <div className="bg-[#05060b] border border-white/10 rounded-2xl w-full max-w-[390px] h-[225px] shadow-2xl flex flex-col overflow-hidden text-left font-sans relative group/dash hover:border-white/15 transition-all duration-300 p-4">
                {/* Simulated Glass Highlight Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.04] pointer-events-none" />
                
                {/* Article Header */}
                <div className="flex justify-between items-center mb-2 pb-2 border-b border-white/10 shrink-0 relative z-10">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[6px] font-mono tracking-widest text-[#34d399] font-bold uppercase">NATURE COMMUN.</span>
                    <span className="text-[5px] text-white/40">• 5 min read</span>
                  </div>
                  <span className="text-[5px] font-mono text-white/30">ARTICLE REF: VOL. 182</span>
                </div>
                
                {/* Main Article Content */}
                <div className="flex-1 flex gap-3 overflow-hidden relative z-10">
                  {/* Text Column */}
                  <div className="flex-1 flex flex-col justify-between overflow-hidden">
                    <div className="space-y-1.5">
                      <h4 className="text-[10px] font-manrope font-bold text-white leading-tight">
                        Thermal Dynamics & Surface Tension
                      </h4>
                      <p className="text-[7px] text-white/50 leading-relaxed font-serif">
                        Hydrogen bonds in liquid water constantly form and break. At lower temperatures, the thermal energy is insufficient to break these bonds, resulting in a highly structured molecular network with elevated surface tension. 
                      </p>
                      <p className="text-[7px] text-white/50 leading-relaxed font-serif hidden sm:block">
                        As thermal energy increases, kinetic motion disrupts these networks, causing a steady decrease in cohesion, as illustrated in the adjacent dataset.
                      </p>
                    </div>
                    {/* Caption */}
                    <div className="text-[5.5px] text-white/35 italic mt-1 leading-tight border-l-2 border-[#34d399]/40 pl-1.5 shrink-0">
                      Fig 4. Surface tension (mN/m) plotted against thermodynamic temperature.
                    </div>
                  </div>

                  {/* Graph Column */}
                  <div className="w-[45%] border border-white/5 bg-[#030305]/60 rounded-xl p-2 flex flex-col justify-between select-none shrink-0 relative overflow-hidden group-hover:scale-[1.04] transition-transform duration-500 ease-out">
                    {/* Tiny grid background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:10px_10px]" />
                    
                    {/* Y-axis values */}
                    <div className="relative z-10 flex-1 flex flex-row items-stretch">
                      {/* Y-axis Labels */}
                      <div className="flex flex-col justify-between text-[5px] font-mono text-white/40 pr-1 select-none w-4 shrink-0 text-right">
                        <span>76</span>
                        <span>72</span>
                        <span>68</span>
                        <span>64</span>
                      </div>
                      {/* SVG Line Graph */}
                      <div className="flex-1 relative min-h-[90px]">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 80">
                          {/* Y-Axis Line */}
                          <line x1="0" y1="0" x2="0" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                          {/* X-Axis Line */}
                          <line x1="0" y1="80" x2="100" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                          
                          {/* Grid lines */}
                          <line x1="0" y1="26.6" x2="100" y2="26.6" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" strokeDasharray="1,1" />
                          <line x1="0" y1="53.3" x2="100" y2="53.3" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" strokeDasharray="1,1" />
                          
                          {/* Gradient Fill under the Curve */}
                          <defs>
                            <linearGradient id="graphGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#34d399" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#34d399" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          <path 
                            d="M 0 10 Q 30 18, 60 42 T 100 70 L 100 80 L 0 80 Z" 
                            fill="url(#graphGrad)" 
                          />
                          
                          {/* Curve Line */}
                          <path 
                            d="M 0 10 Q 30 18, 60 42 T 100 70" 
                            fill="none" 
                            stroke="#34d399" 
                            strokeWidth="1.5" 
                          />

                          {/* Data points */}
                          <circle cx="0" cy="10" r="1.5" fill="#34d399" />
                          <circle cx="35" cy="20.5" r="1.5" fill="#34d399" />
                          <circle cx="65" cy="47.5" r="1.5" fill="#34d399" />
                          <circle cx="100" cy="70" r="1.5" fill="#34d399" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* X-axis labels */}
                    <div className="flex justify-between text-[5px] font-mono text-white/40 pl-5 pt-1 border-t border-white/5 relative z-10 shrink-0">
                      <span>0°C</span>
                      <span>50°C</span>
                      <span>100°C</span>
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

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#000000] border border-white/10 rounded-[28px] h-[440px] flex flex-col justify-between p-8 relative overflow-hidden group shadow-2xl col-span-1"
          >
            {/* Header info */}
            <div className="text-left z-10 shrink-0">
              <span className="text-[10px] font-mono tracking-widest text-white/40 font-bold uppercase mb-1">PROGRESS TRACKING</span>
              <h3 className="text-2xl font-inter font-bold text-white tracking-tight">Real-Time Performance Metrics.</h3>
              <p className="text-white/50 font-inter text-[11px] max-w-sm mt-1 leading-relaxed">
                Track your syllabus progress and daily learning habits in one unified place.
              </p>
            </div>

            {/* Activity Calendar Display */}
            <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col justify-between hover:border-white/10 transition-colors w-full mt-4 z-10 flex-1 min-h-[220px] shrink-0">
              <div className="flex items-center space-x-2 mb-3 text-emerald-400 shrink-0">
                <Calendar className="w-4.5 h-4.5" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Activity Calendar</span>
              </div>
              
              <div className="flex-1 flex flex-col justify-center">
                {/* Weekdays */}
                <div className="grid grid-cols-7 gap-1 text-center w-full max-w-[240px] mx-auto text-[7px] font-mono text-white/30 font-bold uppercase mb-1.5 shrink-0">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, idx) => (
                    <div key={idx}>{day}</div>
                  ))}
                </div>
                
                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-1 w-full max-w-[240px] mx-auto">
                  {Array.from({ length: 35 }).map((_, idx) => {
                    const dayNum = idx - 2; // July 1st starts on Wednesday (offset by 2)
                    const isValid = dayNum > 0 && dayNum <= 31;
                    
                    let bgClass = "bg-white/[0.02] border-white/5 text-white/20 opacity-30 cursor-default select-none";
                    let displayDay = "";
                    let xpGained = 0;
                    
                    if (isValid) {
                      const activeDays = {
                        1: { bg: "bg-emerald-950/20 border-emerald-500/20 text-emerald-400", xp: 50 },
                        2: { bg: "bg-emerald-900/30 border-emerald-500/30 text-emerald-300", xp: 150 },
                        4: { bg: "bg-emerald-500/15 border-emerald-500/50 text-emerald-100", xp: 450 },
                        5: { bg: "bg-emerald-500/15 border-emerald-500/50 text-emerald-100", xp: 350 },
                        8: { bg: "bg-emerald-950/20 border-emerald-500/20 text-emerald-400", xp: 75 },
                        9: { bg: "bg-emerald-900/30 border-emerald-500/30 text-emerald-300", xp: 200 },
                        14: { bg: "bg-emerald-500/15 border-emerald-500/50 text-emerald-100", xp: 400 },
                        15: { bg: "bg-emerald-500/15 border-emerald-500/50 text-emerald-100", xp: 300 },
                        16: { bg: "bg-emerald-900/30 border-emerald-500/30 text-emerald-300", xp: 180 },
                        20: { bg: "bg-emerald-950/20 border-emerald-500/20 text-emerald-400", xp: 60 },
                        21: { bg: "bg-emerald-900/30 border-emerald-500/30 text-emerald-300", xp: 120 },
                        22: { bg: "bg-emerald-500/15 border-emerald-500/50 text-emerald-100", xp: 420 },
                        23: { bg: "bg-emerald-500/15 border-emerald-500/50 text-emerald-100", xp: 380 },
                        27: { bg: "bg-emerald-900/30 border-emerald-500/30 text-emerald-300", xp: 250 },
                        28: { bg: "bg-emerald-500/15 border-emerald-500/50 text-emerald-100", xp: 480 },
                        29: { bg: "bg-emerald-500/15 border-emerald-500/50 text-emerald-100", xp: 320 }
                      } as Record<number, { bg: string, xp: number }>;
                      
                      const dayInfo = activeDays[dayNum];
                      bgClass = dayInfo ? `${dayInfo.bg} cursor-pointer hover:scale-[1.05] transition-transform` : "bg-white/[0.02] border-white/5 text-white/50 cursor-pointer hover:bg-white/[0.04]";
                      displayDay = String(dayNum);
                      xpGained = dayInfo ? dayInfo.xp : 0;
                    } else {
                      // Padding days (show grey boxes with mock day numbers for visual completion)
                      if (dayNum <= 0) {
                        displayDay = String(28 + idx); // June padding days (28, 29, 30)
                      } else {
                        displayDay = String(dayNum - 31); // August padding days (1, 2, etc.)
                      }
                    }

                    return (
                      <div 
                        key={idx}
                        className={`group/cell relative aspect-square rounded border flex items-center justify-center text-[7.5px] font-mono ${bgClass}`}
                      >
                        {displayDay}
                        
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/cell:flex flex-col items-center z-30 pointer-events-none">
                          <div className="bg-neutral-900/95 border border-white/15 backdrop-blur-md px-2 py-1 rounded-md text-[8.5px] font-mono text-white whitespace-nowrap shadow-2xl leading-none">
                            {isValid ? `${xpGained} XP Gained` : "No Activity"}
                          </div>
                          <div className="w-1.5 h-1.5 bg-neutral-900 border-r border-b border-white/15 rotate-45 -mt-1" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Box 6 (Bottom Right) - TOPIC-SPECIFIC VIDEOS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#ffffff] border border-neutral-200 rounded-[28px] h-[440px] flex flex-col justify-between p-8 relative overflow-hidden group shadow-2xl col-span-1 text-black cursor-pointer hover:border-neutral-300 transition-colors duration-300"
          >
            {/* Header info */}
            <div className="text-left relative z-10 flex flex-col shrink-0">
              <span className="text-[10px] font-mono tracking-widest text-black/40 font-bold uppercase mb-1">VIDEO COMPANIONS</span>
              <h3 className="text-2xl font-inter font-bold text-black tracking-tight">Topic-Specific Video Lessons.</h3>
              <p className="text-black/50 font-inter text-[11px] max-w-sm mt-1 leading-relaxed">
                Every syllabus topic is paired with a handpicked specialized video to clarify complex concepts (curated, not created by us, for optimal quality).
              </p>
            </div>

            {/* Video Thumbnail mockup */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-neutral-200/80 shadow-lg mt-4 bg-black flex flex-col justify-between p-4 transition-all duration-300 shrink-0">
              {/* Cover Image with zoom hover effect inside */}
              <Image 
                src="/images/biology-thumbnail.jpg"
                alt="Introduction to Cells with the Amoeba Sisters"
                fill
                sizes="(max-w-md) 100vw, 350px"
                style={{ objectFit: "cover" }}
                className="opacity-90 scale-[1.05] group-hover:scale-110 transition-transform duration-500 ease-out"
              />

              {/* Glowing Background Pattern & Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

              {/* Top Bar (Metadata) */}
              <div className="flex justify-end items-center relative z-10">
                <span className="text-[8px] font-mono text-white/90 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded">12:45</span>
              </div>

              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-out group-hover:bg-red-600 group-hover:text-white">
                  <Play className="w-5 h-5 text-black fill-current transition-colors duration-300 group-hover:text-white" />
                </div>
              </div>

              {/* Bottom Info & Custom Youtube Progress Bar */}
              <div className="w-full relative z-10 space-y-2">
                <div className="flex flex-col">
                  <span className="text-white font-manrope font-extrabold text-[12px] leading-tight drop-shadow-md">Introduction to Cells</span>
                  <span className="text-[9px] text-white/70 mt-0.5 drop-shadow-sm">with the Amoeba Sisters</span>
                </div>
                
                {/* YouTube Playback Progress Bar */}
                <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden relative">
                  <div className="bg-red-600 h-full w-[65%] rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

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
                  <div className="w-[45%] border border-white/5 bg-[#030305]/60 rounded-xl p-2 flex flex-col justify-between select-none shrink-0 relative overflow-hidden">
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
                <div className="text-amber-500 shrink-0">
                  <Flame className="w-6 h-6 fill-amber-500 text-amber-400" />
                </div>
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

"use client";

import { LevelBadge } from "@/components/LevelBadge";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const showcaseImages = [
  "/images/dashboard-live.webp",
  "https://media.discordapp.net/attachments/1125466904966991872/1501074138180096060/Screenshot_2026-05-05_at_12.12.26_AM.png?ex=69fabfbb&is=69f96e3b&hm=44db7232dc77f74dd9a03d40feb08db2c32d75ab068d133a0f0db1ab47e7a10a&=&format=webp&quality=lossless&width=3172&height=1566",
  "https://media.discordapp.net/attachments/1125466904966991872/1501074138809499678/Screenshot_2026-05-05_at_12.11.55_AM.png?ex=69fabfbb&is=69f96e3b&hm=a2bc24dcb606560d4af2b46ff50b90e6000dc24cdca460310792fc90f6dfff02&=&format=webp&quality=lossless&width=3096&height=1566"
];

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

            {/* Center Graphic: Grid of 6 interactive badges */}
            <div className="relative w-full flex-1 flex items-center justify-center z-10 mt-2">
              <div className="grid grid-cols-3 gap-x-6 gap-y-4 bg-white/[0.02] border border-white/5 rounded-3xl p-5 shadow-inner w-full max-w-[340px]">
                {[1, 15, 35, 55, 75, 100].map((lvl) => (
                  <div key={lvl} className="flex flex-col items-center justify-center space-y-1 transition-all duration-300 hover:scale-110">
                    <LevelBadge level={lvl} size="sm" showLabel={false} />
                    <span className="text-[8px] font-mono font-black text-white/40 tracking-wider">LVL {lvl}</span>
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
              <h3 className="text-2xl md:text-3xl font-inter font-bold text-black tracking-tight mb-1">AP Biology Deep-Dives.</h3>
              <p className="text-black/50 font-inter text-xs max-w-sm mt-1 leading-relaxed">
                Curated curriculum mapping video modules and reading articles seamlessly.
              </p>
            </div>

            {/* 3 Spread Flashcards Stack */}
            <div className="relative w-full h-[240px] flex items-center justify-center z-10 mt-4 overflow-visible">
              <div className="relative w-full max-w-[280px] h-[180px] flex items-center justify-center overflow-visible">
                
                {/* Card 1: Biology (Enzyme Kinetics) */}
                <motion.div
                  onMouseEnter={() => setHoveredCard(0)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="absolute w-[150px] h-[190px] rounded-2xl border bg-[#0a0b0f] border-white/10 p-3 shadow-2xl flex flex-col justify-between cursor-pointer text-left"
                  style={{
                    left: "15px",
                    top: "0px",
                    zIndex: hoveredCard === 0 ? 30 : 10,
                  }}
                  animate={{
                    rotate: hoveredCard === 0 ? 0 : -6,
                    scale: hoveredCard === 0 ? 1.05 : 0.95,
                    y: hoveredCard === 0 ? -12 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div>
                    <span className="text-[7px] font-mono text-emerald-400 font-bold uppercase tracking-wider">Biology</span>
                    <h4 className="text-[10px] font-bold text-white mt-0.5 leading-tight">Enzyme Catalysis</h4>
                  </div>
                  {/* Simplistic activation energy graph */}
                  <div className="h-20 w-full bg-white/[0.02] border border-white/5 rounded-lg flex items-center justify-center p-1.5">
                    <svg className="w-full h-full text-white/50" viewBox="0 0 100 60" fill="none">
                      <path d="M 5,50 L 95,50" stroke="white" strokeWidth="0.8" opacity="0.3" />
                      <path d="M 10,50 L 10,10" stroke="white" strokeWidth="0.8" opacity="0.3" />
                      {/* Uncatalyzed curve */}
                      <path d="M 10,40 Q 35,5 50,20 T 90,45" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="1.5,1.5" fill="none" opacity="0.6" />
                      {/* Catalyzed curve */}
                      <path d="M 10,40 Q 35,20 50,30 T 90,45" stroke="#22c55e" strokeWidth="1.5" fill="none" />
                      
                      <text x="35" y="15" fill="#ef4444" fontSize="4" opacity="0.8">Ea</text>
                      <text x="75" y="40" fill="white" fontSize="4.5" opacity="0.5">Reaction</text>
                    </svg>
                  </div>
                  <div className="text-[8px] text-white/40 font-mono text-center">Reactants → Products</div>
                </motion.div>

                {/* Card 2: Chemistry (Titration Curve) */}
                <motion.div
                  onMouseEnter={() => setHoveredCard(1)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="absolute w-[150px] h-[190px] rounded-2xl border bg-[#0a0b0f] border-white/10 p-3 shadow-2xl flex flex-col justify-between cursor-pointer text-left"
                  style={{
                    zIndex: hoveredCard === 1 ? 30 : 20,
                    top: "-10px",
                  }}
                  animate={{
                    rotate: hoveredCard === 1 ? 0 : 0,
                    scale: hoveredCard === 1 ? 1.05 : 1,
                    y: hoveredCard === 1 ? -12 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div>
                    <span className="text-[7px] font-mono text-cyan-400 font-bold uppercase tracking-wider">Chemistry</span>
                    <h4 className="text-[10px] font-bold text-white mt-0.5 leading-tight">pH Titration</h4>
                  </div>
                  {/* Simplistic titration S-curve */}
                  <div className="h-20 w-full bg-white/[0.02] border border-white/5 rounded-lg flex items-center justify-center p-1.5">
                    <svg className="w-full h-full text-white/50" viewBox="0 0 100 60" fill="none">
                      <path d="M 5,50 L 95,50" stroke="white" strokeWidth="0.8" opacity="0.3" />
                      <path d="M 10,50 L 10,10" stroke="white" strokeWidth="0.8" opacity="0.3" />
                      {/* S curve */}
                      <path d="M 15,45 C 40,45 40,15 65,15 T 90,12" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
                      {/* Equivalence point indicator */}
                      <circle cx="52.5" cy="30" r="1.5" fill="#ef4444" />
                      
                      <text x="60" y="32" fill="white" fontSize="4" opacity="0.7">Equiv. Pt.</text>
                      <text x="80" y="55" fill="white" fontSize="4.5" opacity="0.5">Volume</text>
                    </svg>
                  </div>
                  <div className="text-[8px] text-white/40 font-mono text-center">pH vs Vol. Titrant</div>
                </motion.div>

                {/* Card 3: Physics/Chemistry (Boyle's Law) */}
                <motion.div
                  onMouseEnter={() => setHoveredCard(2)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="absolute w-[150px] h-[190px] rounded-2xl border bg-[#0a0b0f] border-white/10 p-3 shadow-2xl flex flex-col justify-between cursor-pointer text-left"
                  style={{
                    right: "15px",
                    top: "0px",
                    zIndex: hoveredCard === 2 ? 30 : 10,
                  }}
                  animate={{
                    rotate: hoveredCard === 2 ? 0 : 6,
                    scale: hoveredCard === 2 ? 1.05 : 0.95,
                    y: hoveredCard === 2 ? -12 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div>
                    <span className="text-[7px] font-mono text-yellow-400 font-bold uppercase tracking-wider">Physics</span>
                    <h4 className="text-[10px] font-bold text-white mt-0.5 leading-tight">Gas Laws (Isotherm)</h4>
                  </div>
                  {/* Simplistic P-V hyperbola curve */}
                  <div className="h-20 w-full bg-white/[0.02] border border-white/5 rounded-lg flex items-center justify-center p-1.5">
                    <svg className="w-full h-full text-white/50" viewBox="0 0 100 60" fill="none">
                      <path d="M 5,50 L 95,50" stroke="white" strokeWidth="0.8" opacity="0.3" />
                      <path d="M 10,50 L 10,10" stroke="white" strokeWidth="0.8" opacity="0.3" />
                      {/* Hyperbola curve */}
                      <path d="M 15,15 Q 25,40 85,45" stroke="#fbbf24" strokeWidth="1.5" fill="none" />
                      
                      <text x="50" y="25" fill="white" fontSize="4.5" opacity="0.7">PV = nRT</text>
                      <text x="80" y="55" fill="white" fontSize="4.5" opacity="0.5">Volume</text>
                    </svg>
                  </div>
                  <div className="text-[8px] text-white/40 font-mono text-center">Pressure vs Vol.</div>
                </motion.div>

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

        </div>
      </div>
    </section>
  );
}

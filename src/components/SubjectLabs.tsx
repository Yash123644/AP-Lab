"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BiologyDNA3D } from "./BiologyDNA3D";
import { ChemistryMolecule3D } from "./ChemistryMolecule3D";
import { PhysicsOrbit3D } from "./PhysicsOrbit3D";

export function SubjectLabs() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="relative w-full py-[160px] px-6 md:px-[120px] bg-deep-navy overflow-hidden z-10">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-inter font-extrabold text-white text-3xl md:text-5xl tracking-tight mb-4"
          >
            Included Classes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-white/50 text-sm md:text-base max-w-lg mx-auto leading-relaxed"
          >
            Immerse yourself in specialized high-yield learning environments powered by interactive visuals and precision guides.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: AP Biology (Large, Hero Card) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            onMouseEnter={() => setHoveredCard("biology")}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ y: -6 }}
            className="lg:col-span-2 md:col-span-2 h-[440px] relative bg-[#121212] border border-white/[0.03] rounded-[28px] p-8 md:p-10 flex flex-col md:flex-row justify-between items-stretch overflow-hidden group cursor-pointer transition-all duration-500 hover:bg-[#1a1a1a] hover:border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            {/* Card Content (Left) */}
            <div className="flex flex-col justify-between relative z-10 w-full md:w-1/2 h-full">
              <div>
                {/* Resource Density Badge */}
                <div className="bg-white/[0.07] text-white/70 text-[11px] font-mono tracking-wider uppercase px-3.5 py-1.5 rounded-full w-fit mb-6 select-none">
                  32 Articles &bull; 16 Videos
                </div>
                <h3 className="font-manrope font-bold text-3xl md:text-4xl text-white mb-4 tracking-tight">
                  AP Biology
                </h3>
                <p className="font-inter text-white/50 text-sm md:text-base leading-relaxed max-w-sm">
                  Decode the cellular matrix, evolutionary models, and gene replication mechanics with deep-dive visual modules.
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-6 md:mt-0">
                <span className="font-manrope font-bold text-[13px] tracking-wide uppercase text-[#1db954] hover:text-[#1ed760] flex items-center gap-1.5 group/btn transition-colors duration-300">
                  Learn more
                  <ArrowRight className="w-4 h-4 text-[#1db954] group-hover:text-[#1ed760] group-hover/btn:translate-x-1 transition-all duration-300" />
                </span>
              </div>
            </div>

            {/* 3D Visual Section (Right) */}
            <div 
              className="relative w-full md:w-1/2 flex items-center justify-center min-h-[220px] md:min-h-0 select-none"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)"
              }}
            >
              <div className="absolute inset-0 bg-radial-gradient from-emerald-500/5 to-transparent pointer-events-none" />
              <BiologyDNA3D isHovered={hoveredCard === "biology"} />
            </div>
          </motion.div>

          {/* Card 2: AP Calculus (Small Card) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            onMouseEnter={() => setHoveredCard("calculus")}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ y: -6 }}
            className="lg:col-span-1 md:col-span-1 h-[440px] relative bg-[#121212] border border-white/[0.03] rounded-[28px] p-8 md:p-10 flex flex-col justify-between overflow-hidden group cursor-pointer transition-all duration-500 hover:bg-[#1a1a1a] hover:border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            {/* Background SVG Curve Animation */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none mt-28">
              <svg width="280" height="180" viewBox="0 0 280 180" className="w-full h-full max-w-[280px]">
                <defs>
                  <linearGradient id="calcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#818cf8" />
                    <stop offset="100%" stopColor="#c084fc" />
                  </linearGradient>
                </defs>
                {/* Grid Lines */}
                <line x1="10" y1="90" x2="270" y2="90" stroke={hoveredCard === "calculus" ? "rgba(255,255,255,0.08)" : "#050505"} strokeWidth="1.5" style={{ transition: "stroke 0.4s ease" }} />
                <line x1="140" y1="10" x2="140" y2="170" stroke={hoveredCard === "calculus" ? "rgba(255,255,255,0.08)" : "#050505"} strokeWidth="1.5" style={{ transition: "stroke 0.4s ease" }} />
                {/* Curve */}
                <motion.path
                  d="M 10 130 Q 75 10, 140 90 T 270 50"
                  fill="none"
                  stroke={hoveredCard === "calculus" ? "url(#calcGrad)" : "#050505"}
                  strokeWidth="3"
                  initial={{ pathLength: 0.9 }}
                  animate={hoveredCard === "calculus" ? {
                    strokeWidth: 4,
                  } : {
                    strokeWidth: 3,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{ transition: "stroke 0.4s ease" }}
                />
                {/* Scanning point */}
                <motion.circle
                  r="5"
                  fill={hoveredCard === "calculus" ? "#ffffff" : "#050505"}
                  className="shadow-lg"
                  animate={{
                    cx: [20, 260, 20],
                    cy: [122, 53, 122],
                  }}
                  transition={{
                    duration: hoveredCard === "calculus" ? 2.5 : 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ transition: "fill 0.4s ease" }}
                />
              </svg>
            </div>

            <div className="relative z-10">
              {/* Resource Density Badge */}
              <div className="bg-white/[0.07] text-white/70 text-[11px] font-mono tracking-wider uppercase px-3.5 py-1.5 rounded-full w-fit mb-6 select-none">
                28 Articles &bull; 14 Videos
              </div>
              <h3 className="font-manrope font-bold text-3xl text-white mb-4 tracking-tight">
                AP Calculus
              </h3>
              <p className="font-inter text-white/50 text-sm leading-relaxed max-w-[260px]">
                Conquer limit proofs, derivatives, and integral calculus structures through interactive coordinate models.
              </p>
            </div>

            {/* Action Button */}
            <div className="relative z-10 mt-6">
              <span className="font-manrope font-bold text-[13px] tracking-wide uppercase text-[#1db954] hover:text-[#1ed760] flex items-center gap-1.5 group/btn transition-colors duration-300">
                Learn more
                <ArrowRight className="w-4 h-4 text-[#1db954] group-hover:text-[#1ed760] group-hover/btn:translate-x-1 transition-all duration-300" />
              </span>
            </div>
          </motion.div>

          {/* Card 3: AP Physics (Small Card) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            onMouseEnter={() => setHoveredCard("physics")}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ y: -6 }}
            className="lg:col-span-1 md:col-span-1 h-[440px] relative bg-[#121212] border border-white/[0.03] rounded-[28px] p-8 md:p-10 flex flex-col justify-between overflow-hidden group cursor-pointer transition-all duration-500 hover:bg-[#1a1a1a] hover:border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            {/* 3D Visual Section */}
            <div className="absolute inset-x-0 bottom-12 flex items-center justify-center h-[200px] pointer-events-none z-0">
              <div className="absolute inset-0 bg-radial-gradient from-purple-500/5 to-transparent pointer-events-none" />
              <PhysicsOrbit3D isHovered={hoveredCard === "physics"} />
            </div>

            <div className="relative z-10">
              {/* Resource Density Badge */}
              <div className="bg-white/[0.07] text-white/70 text-[11px] font-mono tracking-wider uppercase px-3.5 py-1.5 rounded-full w-fit mb-6 select-none">
                24 Articles &bull; 12 Videos
              </div>
              <h3 className="font-manrope font-bold text-3xl text-white mb-4 tracking-tight">
                AP Physics
              </h3>
              <p className="font-inter text-white/50 text-sm leading-relaxed max-w-[260px]">
                Master particle dynamics, electromagnetism, and energy conservation models with precision vector setups.
              </p>
            </div>

            {/* Action Button */}
            <div className="relative z-10 mt-6">
              <span className="font-manrope font-bold text-[13px] tracking-wide uppercase text-[#1db954] hover:text-[#1ed760] flex items-center gap-1.5 group/btn transition-colors duration-300">
                Learn more
                <ArrowRight className="w-4 h-4 text-[#1db954] group-hover:text-[#1ed760] group-hover/btn:translate-x-1 transition-all duration-300" />
              </span>
            </div>
          </motion.div>

          {/* Card 4: AP Chemistry (Large, Hero Card) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            onMouseEnter={() => setHoveredCard("chemistry")}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ y: -6 }}
            className="lg:col-span-2 md:col-span-2 h-[440px] relative bg-[#121212] border border-white/[0.03] rounded-[28px] p-8 md:p-10 flex flex-col md:flex-row-reverse justify-between items-stretch overflow-hidden group cursor-pointer transition-all duration-500 hover:bg-[#1a1a1a] hover:border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            {/* Card Content (Right/Left depending on orientation, here it is md:flex-row-reverse) */}
            <div className="flex flex-col justify-between relative z-10 w-full md:w-1/2 h-full">
              <div>
                {/* Resource Density Badge */}
                <div className="bg-white/[0.07] text-white/70 text-[11px] font-mono tracking-wider uppercase px-3.5 py-1.5 rounded-full w-fit mb-6 select-none">
                  30 Articles &bull; 15 Videos
                </div>
                <h3 className="font-manrope font-bold text-3xl md:text-4xl text-white mb-4 tracking-tight">
                  AP Chemistry
                </h3>
                <p className="font-inter text-white/50 text-sm md:text-base leading-relaxed max-w-sm">
                  Deconstruct thermodynamic systems, equilibrium math, and molecular orbital structures.
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-6 md:mt-0">
                <span className="font-manrope font-bold text-[13px] tracking-wide uppercase text-[#1db954] hover:text-[#1ed760] flex items-center gap-1.5 group/btn transition-colors duration-300">
                  Learn more
                  <ArrowRight className="w-4 h-4 text-[#1db954] group-hover:text-[#1ed760] group-hover/btn:translate-x-1 transition-all duration-300" />
                </span>
              </div>
            </div>

            {/* 3D Visual Section (Left/Right) */}
            <div className="relative w-full md:w-1/2 flex items-center justify-center min-h-[220px] md:min-h-0 select-none">
              <div className="absolute inset-0 bg-radial-gradient from-indigo-500/5 to-transparent pointer-events-none" />
              <ChemistryMolecule3D isHovered={hoveredCard === "chemistry"} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


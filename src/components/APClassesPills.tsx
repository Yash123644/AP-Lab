"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FlaskConical, 
  Dna, 
  Zap, 
  Divide, 
  BarChart, 
  Code, 
  Globe, 
  Flag, 
  Brain, 
  PenTool, 
  TrendingUp, 
  Leaf
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useUI } from "@/context/UIContext";
import { useRouter } from "next/navigation";

const apClasses = [
  { name: "AP Chemistry", icon: FlaskConical, hex: "#00f2ff", slug: "ap-chemistry" },
  { name: "AP Biology", icon: Dna, hex: "#10b981", slug: "ap-biology" },
  { name: "AP Physics 1", icon: Zap, hex: "#7b39fc", slug: "ap-physics-1", upcoming: true },
  { name: "AP Calculus BC", icon: Divide, hex: "#f59e0b", slug: "ap-calc-bc" },
  { name: "AP Statistics", icon: BarChart, hex: "#ec4899", slug: "ap-stats" },
  { name: "AP Computer Science", icon: Code, hex: "#3b82f6", slug: "ap-csa" },
  { name: "AP World History", icon: Globe, hex: "#f59e0b", slug: "ap-world-history", upcoming: true },
  { name: "AP US History", icon: Flag, hex: "#ef4444", slug: "ap-ush" },
  { name: "AP Psychology", icon: Brain, hex: "#a855f7", slug: "ap-psych" },
  { name: "AP Lang", icon: PenTool, hex: "#ec4899", slug: "ap-eng-lang" },
  { name: "AP Macroeconomics", icon: TrendingUp, hex: "#10b981", slug: "ap-macroeconomics", upcoming: true },
  { name: "AP Environmental", icon: Leaf, hex: "#10b981", slug: "ap-environmental", upcoming: true },
];

export function APClassesPills() {
  const { currentUser } = useAuth();
  const { openAuthModal } = useUI();
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handlePillClick = (slug: string) => {
    if (currentUser) {
      router.push(`/dashboard/${slug}`);
    } else {
      openAuthModal("signin");
    }
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-[120px] relative z-10 overflow-visible bg-transparent">
      {/* Subtle background glow for the entire section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[200px] bg-white/5 blur-[100px] rounded-full pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
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
            Dive into our premium, specialized pre-med preparation tracks and accelerated AP courses.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 relative z-10">
          {apClasses.map((ap, index) => {
            const slug = ap.slug;
            const isHovered = hoveredIndex === index;
            return (
              <motion.button
                key={ap.name}
                onClick={() => handlePillClick(slug)}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.04,
                  ease: [0.23, 1, 0.32, 1]
                }}
                whileHover={{ 
                  scale: 1.04,
                  y: -3,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative flex items-center gap-3 px-6 py-3 rounded-full cursor-pointer bg-[#181818]/90 border shadow-[0_4px_12px_rgba(0,0,0,0.35)] transition-all duration-300 overflow-hidden"
                style={{
                  borderColor: isHovered ? `${ap.hex}40` : "rgba(255, 255, 255, 0.04)",
                  boxShadow: isHovered 
                    ? `0 0 20px ${ap.hex}20, 0 4px 12px rgba(0, 0, 0, 0.35)` 
                    : "0 4px 12px rgba(0, 0, 0, 0.35)",
                  backgroundColor: isHovered ? "#222222" : "rgba(24, 24, 24, 0.9)"
                }}
              >
                {/* Caution Tape Badge */}
                {ap.upcoming && (
                  <div 
                    className="absolute top-[8px] -right-5 w-[75px] rotate-[32deg] py-0.5 border-y shadow-sm z-20 flex items-center justify-center select-none pointer-events-none"
                    style={{
                      background: "repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15) 5px, rgba(15, 15, 15, 0.9) 5px, rgba(15, 15, 15, 0.9) 10px)",
                      borderColor: "rgba(255, 255, 255, 0.25)"
                    }}
                  >
                    <span className="text-[7.5px] font-mono font-black tracking-widest text-white uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
                      Upcoming
                    </span>
                  </div>
                )}
                {/* Icon Container */}
                <div 
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.04] transition-colors duration-300 z-10 relative"
                  style={{
                    backgroundColor: isHovered ? `${ap.hex}15` : "rgba(255, 255, 255, 0.04)"
                  }}
                >
                  <ap.icon 
                    className="w-4 h-4 transition-colors duration-300" 
                    style={{
                      color: isHovered ? ap.hex : "rgba(255, 255, 255, 0.6)"
                    }}
                    strokeWidth={2.5} 
                  />
                </div>

                {/* Text */}
                <span className="font-inter font-bold text-[14px] tracking-tight whitespace-nowrap text-white/80 group-hover:text-white transition-colors duration-300 z-10 relative">
                  {ap.name}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

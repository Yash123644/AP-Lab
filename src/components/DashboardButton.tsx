"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

interface Particle {
  id: number;
  x: number;
  y: number;
}

export function DashboardButton() {
  const [particles, setParticles] = useState<Particle[]>([]);

  const spawnParticles = () => {
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 160,
      y: (Math.random() - 0.5) * 80,
    }));
    setParticles((prev) => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.includes(p)));
    }, 1000);
  };

  return (
    <Link href="/dashboard" className="relative group">
      <motion.button
        onHoverStart={spawnParticles}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="relative liquid-glass-strong rounded-[10px] px-12 py-4 text-white font-cabin font-bold text-[18px] overflow-hidden shadow-[0_0_25px_rgba(123,57,252,0.4)] group-hover:shadow-[0_0_50px_rgba(164,132,215,0.6)] transition-all duration-300 min-w-[240px]"
      >
        <span className="relative z-10">Go to Dashboard</span>
        
        {/* Cinematic Sweep Shine */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ x: ["-150%", "150%"] }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              repeatDelay: 0.5
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
          />
        </div>

        {/* Dynamic Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-purple/30 via-medical-teal/20 to-primary-purple/30 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.button>

      {/* High-Fidelity Gradient Sparkles */}
      <AnimatePresence>
        {particles.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
            animate={{ 
              opacity: 0, 
              scale: Math.random() * 2, 
              x: p.x, 
              y: p.y,
              rotate: Math.random() * 720
            }}
            exit={{ opacity: 0 }}
            className={cn(
              "absolute left-1/2 top-1/2 w-1.5 h-1.5 rounded-full pointer-events-none blur-[0.5px]",
              i % 2 === 0 ? "bg-primary-purple" : "bg-medical-teal"
            )}
            style={{ 
              boxShadow: i % 2 === 0 ? "0 0 15px #a484d7" : "0 0 15px #4fd1c5",
              zIndex: -1 
            }}
          />
        ))}
      </AnimatePresence>
    </Link>
  );
}

"use client";

import React from "react";
import { Shield, Award, Flame, Sparkles, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

interface LevelBadgeProps {
  level: number;
  className?: string;
}

export function LevelBadge({ level, className }: LevelBadgeProps) {
  // Clamp level between 1 and 100
  const displayLevel = Math.max(1, Math.min(100, level));

  // Determine tier styles and icons
  let tierName = "Apprentice";
  let badgeStyles = "";
  let textStyles = "";
  let Icon = Shield;
  let glowColor = "";

  if (displayLevel === 100) {
    tierName = "Grandmaster";
    badgeStyles = "bg-black/90 relative p-[2px] shadow-[0_0_30px_rgba(168,85,247,0.7)] border-transparent overflow-hidden rounded-full animate-pulse";
    textStyles = "bg-gradient-to-r from-red-400 via-yellow-400 to-violet-400 bg-clip-text text-transparent font-black tracking-widest text-[11px]";
    Icon = Crown;
  } else if (displayLevel >= 90) {
    tierName = "Ascendant";
    badgeStyles = "border border-rose-500/80 bg-rose-950/40 shadow-[0_0_20px_rgba(244,63,94,0.5)] rounded-full px-3 py-1";
    textStyles = "bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent font-black text-[10px]";
    Icon = Flame;
    glowColor = "shadow-rose-500/40";
  } else if (displayLevel >= 70) {
    tierName = "Elite";
    badgeStyles = "border border-fuchsia-500/70 bg-fuchsia-950/30 shadow-[0_0_15px_rgba(217,70,239,0.4)] rounded-full px-3 py-1 animate-pulse";
    textStyles = "text-fuchsia-300 font-extrabold text-[10px]";
    Icon = Sparkles;
  } else if (displayLevel >= 50) {
    tierName = "Master";
    badgeStyles = "border border-cyan-400/60 bg-cyan-950/30 shadow-[0_0_15px_rgba(34,211,238,0.3)] rounded-full px-2.5 py-0.5";
    textStyles = "text-cyan-300 font-extrabold text-[10px]";
    Icon = Award;
  } else if (displayLevel >= 30) {
    tierName = "Expert";
    badgeStyles = "border border-amber-500/50 bg-amber-500/10 shadow-[0_0_10px_rgba(245,158,11,0.2)] rounded-full px-2.5 py-0.5";
    textStyles = "text-amber-400 font-bold text-[10px]";
    Icon = Award;
  } else if (displayLevel >= 10) {
    tierName = "Scholar";
    badgeStyles = "border border-zinc-400/40 bg-zinc-400/10 rounded-full px-2 py-0.5 shadow-sm";
    textStyles = "text-zinc-200 font-bold text-[10px]";
    Icon = Shield;
  } else {
    tierName = "Apprentice";
    badgeStyles = "border border-slate-600/30 bg-slate-600/10 rounded-full px-2 py-0.5";
    textStyles = "text-slate-400 font-semibold text-[10px]";
    Icon = Shield;
  }

  // Special layout for level 100 Grandmaster to support an animated spinning border
  if (displayLevel === 100) {
    return (
      <div className={cn("relative inline-flex items-center justify-center overflow-hidden rounded-full group", className)}>
        {/* Animated rainbow gradient background */}
        <span className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444,#f59e0b,#10b981,#3b82f6,#8b5cf6,#ec4899,#ef4444)] bg-[length:200%_auto] animate-[gradient_3s_linear_infinite] pointer-events-none rounded-full" />
        
        {/* Inner static badge body */}
        <div className="relative flex items-center space-x-1 bg-[#090b16] rounded-full px-3 py-1 m-[1px] z-10">
          <Icon className="w-3.5 h-3.5 text-yellow-400 animate-bounce" />
          <span className="font-mono text-[9px] uppercase tracking-wider font-extrabold text-white/50">
            {tierName}
          </span>
          <span className={textStyles}>
            LVL {displayLevel}
          </span>
        </div>
        
        {/* CSS animation inline styled to avoid needing global edits for gradient shift */}
        <style jsx global>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center space-x-1 font-mono tracking-wide select-none cursor-default transition-all duration-300",
        badgeStyles,
        className
      )}
    >
      <Icon className="w-3 h-3 text-current shrink-0" />
      <span className="text-[9px] uppercase tracking-wider font-extrabold opacity-60">
        {tierName}
      </span>
      <span className={cn("font-black", textStyles)}>
        LVL {displayLevel}
      </span>
    </div>
  );
}

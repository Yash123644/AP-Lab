"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface FreeSealProps {
  variant: "hero" | "minimized";
}

export function FreeSeal({ variant }: FreeSealProps) {
  const isHero = variant === "hero";

  return (
    <motion.div
      animate={{ y: [-3, 3, -3] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative group z-50 flex items-center justify-center cursor-default"
    >
      <div className={cn(
        "relative liquid-glass border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300",
        isHero 
          ? "px-5 py-2.5 rounded-full flex-row space-x-2 shadow-[0_0_20px_rgba(32,201,151,0.15)] hover:shadow-[0_0_30px_rgba(32,201,151,0.25)] hover:bg-white/10" 
          : "px-3 py-1.5 rounded-full flex-row space-x-2 shadow-[0_0_15px_rgba(32,201,151,0.1)] hover:shadow-[0_0_20px_rgba(32,201,151,0.2)] hover:bg-white/10"
      )}>
        {/* Glow inner layer */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(32,201,151,0.15)_0%,transparent_80%)] pointer-events-none" />
        
        <ShieldCheck className={cn("text-medical-teal drop-shadow-[0_0_5px_rgba(32,201,151,0.8)] relative z-10", isHero ? "w-5 h-5" : "w-4 h-4")} />
        <span className={cn("font-manrope font-bold text-white tracking-tight relative z-10", isHero ? "text-sm" : "text-xs")}>
          100% FREE
        </span>
      </div>

      {/* Interactive Trust Tooltip */}
      <div className={cn(
        "absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[60] w-64 bg-[#0c0c14]/90 backdrop-blur-2xl border border-medical-teal/30 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] translate-y-2 group-hover:translate-y-0",
        isHero ? "top-full mt-4 left-1/2 -translate-x-1/2" : "top-full mt-4 right-0"
      )}>
        <p className="font-inter text-xs text-white/90 leading-relaxed text-center">
          AP Lab is committed to academic equity. No subscriptions. No hidden fees. Just mastery.
        </p>
      </div>
    </motion.div>
  );
}

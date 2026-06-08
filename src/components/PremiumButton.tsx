"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MousePointer2 } from "lucide-react";

interface PremiumButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md";
}

export function PremiumButton({ 
  children, 
  onClick, 
  className, 
  size = "md" 
}: PremiumButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [shakeIntensity, setShakeIntensity] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered) {
      interval = setInterval(() => {
        // Reduced intensity and slower ramp-up
        setShakeIntensity(prev => Math.min(prev + 0.3, 3));
      }, 150);
    } else {
      setShakeIntensity(0);
    }
    return () => {
      clearInterval(interval);
      setShakeIntensity(0);
    };
  }, [isHovered]);

  return (
    <div className="relative inline-block">
      {/* Autonomous Animated Cursor to draw attention */}
      {!isHovered && (
        <div className="absolute -right-8 -bottom-8 z-50 pointer-events-none w-8 h-8">
          <motion.div
            animate={{ 
              x: [48, -16, -16, -16, -16, 48, 48],
              y: [60, -12, -12, -12, -12, 60, 60],
              scale: [1.0, 1.0, 0.93, 1.0, 1.0, 1.0, 1.0],
              rotate: [6, 0, -3, 0, 0, 6, 6],
              opacity: [0, 1, 1, 1, 1, 0, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              repeatDelay: 6,
              times: [0, 0.35, 0.40, 0.48, 0.58, 0.85, 1.0],
              ease: [[0.16, 1, 0.3, 1], "easeInOut", "easeOut", "linear", [0.7, 0, 0.84, 0], "linear"]
            }}
            className="relative"
          >
            {/* Fluid Ripple Effect at the Cursor Tip */}
            <motion.div
              animate={{
                scale: [0, 0, 0.5, 1.8, 1.8, 0, 0],
                opacity: [0, 0, 0.35, 0, 0, 0, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 6,
                times: [0, 0.39, 0.40, 0.50, 0.51, 0.85, 1.0],
                ease: ["linear", "easeOut", "easeOut", "linear", "linear", "linear"]
              }}
              className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-sky-400/30 bg-sky-400/5 shadow-[0_0_8px_rgba(125,211,252,0.2)]"
            />

            <MousePointer2 className="w-8 h-8 text-white fill-white opacity-95 drop-shadow-[0_2px_5px_rgba(0,0,0,0.15)]" />
          </motion.div>
        </div>
      )}

      {/* Shaking Wrapper */}
        <motion.div
          animate={isHovered ? {
            x: [0, -shakeIntensity, shakeIntensity, 0],
            y: [0, shakeIntensity, -shakeIntensity, 0],
            rotate: [0, -shakeIntensity/4, shakeIntensity/4, 0]
          } : { x: 0, y: 0, rotate: 0 }}
          transition={isHovered ? {
            duration: 0.1,
            repeat: Infinity,
            ease: "linear"
          } : {
            type: "spring",
            stiffness: 1000,
            damping: 30
          }}
          className="relative group"
        >
        <motion.button
          onClick={onClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileTap={{ scale: 0.92 }}
          animate={!isHovered ? {
            scale: [1, 1, 0.98, 1, 1, 1, 1]
          } : { scale: 1 }}
          transition={!isHovered ? {
            duration: 4,
            repeat: Infinity,
            repeatDelay: 6,
            times: [0, 0.35, 0.40, 0.48, 0.58, 0.85, 1.0],
            ease: "easeInOut"
          } : {
            type: "spring",
            stiffness: 400,
            damping: 30
          }}
          className={cn(
            "relative group overflow-hidden rounded-full font-manrope font-semibold flex items-center justify-center gap-3 transition-all duration-500 shadow-[0_30px_60px_rgba(125,211,252,0.5)] backdrop-blur-2xl border border-white/50",
            size === "sm" ? "px-10 py-4 text-[15px]" : "px-14 py-7 text-[20px]",
            className
          )}
        >
          {/* Liquid Glass Background Layers */}
          <motion.div 
            animate={{ 
              background: [
                "linear-gradient(135deg, #d0eefb 0%, #f0f9ff 50%, #7dd3fc 100%)",
                "linear-gradient(135deg, #7dd3fc 0%, #d0eefb 50%, #f0f9ff 100%)",
                "linear-gradient(135deg, #f0f9ff 0%, #7dd3fc 50%, #d0eefb 100%)",
                "linear-gradient(135deg, #d0eefb 0%, #f0f9ff 50%, #7dd3fc 100%)"
              ]
            }}
            transition={{ 
              duration: isHovered ? 0.6 : 4, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute inset-0 z-0 opacity-95"
          />
          
          {/* Enhanced Glossy Highlights */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/70 z-[1] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[45%] bg-white/30 blur-md rounded-full mx-6 mt-1 z-[1] pointer-events-none" />
          
          {/* Active Shine Effect */}
          <motion.div 
            animate={isHovered ? { x: ["-100%", "200%"] } : { x: "-150%" }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent z-[2] pointer-events-none"
          />

          <span className="relative z-10 text-[#0f172a] flex items-center gap-4 drop-shadow-sm tracking-tight">
            {children}
            <div className="relative">
               <MousePointer2 className={cn(
                 "w-6 h-6 fill-[#0f172a] stroke-[#0f172a] transition-transform duration-300",
                 isHovered ? "scale-110 rotate-12" : "scale-100"
               )} />
            </div>
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Preloader() {
  const [isOpening, setIsOpening] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // 0.4s: Trigger top and bottom panel split reveal
    const openTimer = setTimeout(() => {
      setIsOpening(true);
    }, 420);

    // 1.0s: Remove preloader from DOM
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
    }, 1000);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  if (isFinished) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none select-none overflow-hidden">
      
      {/* Top Cutout Panel (Slides UP) */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: isOpening ? "-100%" : "0%" }}
        transition={{ duration: 0.58, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 right-0 h-[50vh] bg-[#03040a] border-b border-white/10 z-10"
      />

      {/* Bottom Cutout Panel (Slides DOWN) */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: isOpening ? "100%" : "0%" }}
        transition={{ duration: 0.58, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[50vh] bg-[#03040a] border-t border-white/10 z-10"
      />

      {/* HUGE AP LAB Logo Outline Spanning Across the Screen */}
      <motion.div
        initial={{ scale: 0.95, opacity: 1 }}
        animate={{ 
          scale: isOpening ? 1.08 : 1,
          opacity: isOpening ? 0 : 1
        }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        className="absolute inset-0 z-20 flex items-center justify-center px-4"
      >
        <div className="w-full max-w-5xl flex items-center justify-center">
          <svg 
            viewBox="0 0 900 160" 
            className="w-full h-auto text-white stroke-current fill-none"
          >
            {/* EKG Pulse Line Outline Icon */}
            <path 
              d="M30 80 H140 L165 20 L195 140 L225 40 L255 110 L280 80 H360" 
              strokeWidth="5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
            />
            {/* Huge Bold AP LAB Text Outline */}
            <text 
              x="390" 
              y="112" 
              fill="none" 
              stroke="white" 
              strokeWidth="4" 
              fontSize="108" 
              fontWeight="900" 
              fontFamily="Manrope, system-ui, sans-serif" 
              letterSpacing="-2"
              className="drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
            >
              AP LAB
            </text>
          </svg>
        </div>
      </motion.div>

    </div>
  );
}

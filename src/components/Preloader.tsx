"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Preloader() {
  const [shouldShow, setShouldShow] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Check if the tab has opened before
    const hasSeenInTab = sessionStorage.getItem("aplab_tab_opened");
    if (!hasSeenInTab) {
      sessionStorage.setItem("aplab_tab_opened", "true");
      setShouldShow(true);

      // 0.4s: Start cutout separation
      const openTimer = setTimeout(() => {
        setIsOpening(true);
      }, 420);

      // 1.0s: Remove preloader from DOM
      const finishTimer = setTimeout(() => {
        setIsFinished(true);
      }, 1020);

      return () => {
        clearTimeout(openTimer);
        clearTimeout(finishTimer);
      };
    } else {
      setIsFinished(true);
    }
  }, []);

  if (!shouldShow || isFinished) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none select-none overflow-hidden bg-transparent">
      
      {/* Top Cutout Panel with exact AP LAB Activity Logo Seam (Slides UP) */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: isOpening ? "-100%" : "0%" }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 right-0 h-full bg-[#03040a] z-10"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 56% 50%, 52% 18%, 46% 82%, 43% 50%, 0% 50%)"
        }}
      >
        <div className="absolute inset-0 border-b border-white/30 pointer-events-none" />
      </motion.div>

      {/* Bottom Cutout Panel with exact AP LAB Activity Logo Seam (Slides DOWN) */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: isOpening ? "100%" : "0%" }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 right-0 h-full bg-[#03040a] z-10"
        style={{
          clipPath: "polygon(0% 100%, 100% 100%, 100% 50%, 56% 50%, 52% 18%, 46% 82%, 43% 50%, 0% 50%)"
        }}
      >
        <div className="absolute inset-0 border-t border-white/30 pointer-events-none" />
      </motion.div>

      {/* Large White Outline of the AP LAB Activity Logo Spanning Across the Screen */}
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ 
          opacity: isOpening ? 0 : 1,
          scale: isOpening ? 1.05 : 1
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none px-4"
      >
        <svg viewBox="0 0 1000 200" className="w-full max-w-6xl h-auto text-white stroke-current fill-none">
          <path
            d="M0 100 H430 L460 164 L520 36 L560 100 H1000"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
          />
        </svg>
      </motion.div>

    </div>
  );
}

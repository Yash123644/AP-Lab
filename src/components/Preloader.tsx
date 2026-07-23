"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity } from "lucide-react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ultra-fast < 0.95s vital pulse logo preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="aplab-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#03040a] flex flex-col items-center justify-center select-none overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute w-64 h-64 rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />

          {/* AP Lab Logo Symbol Container (No Text) */}
          <div className="relative w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shadow-[0_0_25px_rgba(255,255,255,0.15)] overflow-hidden">
            
            {/* Smooth Vital Pulse Sheen Sweep moving Left to Right */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 0.75, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg] pointer-events-none z-20"
            />

            {/* Vital Pulse Icon Animation */}
            <motion.div
              animate={{ scale: [0.9, 1.15, 0.95, 1.08, 1] }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
            >
              <Activity className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] relative z-10" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

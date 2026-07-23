"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity } from "lucide-react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fast 1.1 second total preloading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="aplab-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#03040a] flex flex-col items-center justify-center select-none"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col items-center justify-center">
            
            {/* Phase 1: White Pulse Line Beat */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.85, 1.2, 0.95, 1.15, 1],
                opacity: [0.4, 1, 0.7, 1, 1]
              }}
              transition={{ 
                duration: 0.65,
                times: [0, 0.25, 0.5, 0.75, 1],
                ease: "easeOut"
              }}
              className="flex items-center justify-center"
            >
              {/* EKG Heartbeat Pulse Line SVG */}
              <svg 
                viewBox="0 0 120 40" 
                className="w-32 h-12 text-white stroke-current fill-none stroke-[2.5] stroke-linecap-round stroke-linejoin-round drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
              >
                <path d="M0 20 H35 L43 6 L53 34 L62 14 L70 24 L77 20 H120" />
              </svg>
            </motion.div>

            {/* Phase 2: Morph & Transform into AP Lab Text Logo */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.45, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center space-x-3 mt-2"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <Activity className="w-4 h-4 text-white" />
              </div>
              <span className="font-manrope font-extrabold text-2xl tracking-tight text-white drop-shadow-md">
                AP Lab
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

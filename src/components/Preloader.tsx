"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity } from "lucide-react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Snappy 0.9s luxury preloading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 950);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="aplab-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#03040a] flex flex-col items-center justify-center select-none overflow-hidden"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-80 h-80 rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />

          {/* Centered AP Lab Logo Container */}
          <div className="relative flex items-center space-x-3.5 px-6 py-3 rounded-full overflow-hidden">
            
            {/* Left to Right Animated Pulse Shine Sheen Sweep */}
            <motion.div
              initial={{ x: "-120%" }}
              animate={{ x: "220%" }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] pointer-events-none z-20"
            />

            {/* Activity Icon */}
            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.15)] relative z-10">
              <Activity className="w-5 h-5 text-white" />
            </div>

            {/* AP Lab Text Logo */}
            <span className="font-manrope font-extrabold text-3xl tracking-tight text-white drop-shadow-md relative z-10">
              AP Lab
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className={cn("fixed top-0 left-0 right-0 z-[99999] pointer-events-none bg-transparent", className)}>
      {/* Slim, ultra-smooth top white progress bar (stays over the current page without black screen) */}
      <div className="h-[3px] w-full bg-white/10 overflow-hidden relative shadow-[0_1px_10px_rgba(255,255,255,0.5)]">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="h-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]"
        />
      </div>
    </div>
  );
}

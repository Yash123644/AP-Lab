"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className={cn("fixed top-0 left-0 right-0 z-[9999] pointer-events-none", className)}>
      {/* Simple, clean, slim top white loading bar filling left-to-right with zero glow */}
      <div className="h-[2px] w-full bg-white/10 overflow-hidden relative">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 0.75,
            ease: "easeInOut"
          }}
          className="h-full bg-white"
        />
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className={cn("fixed top-0 left-0 right-0 z-[9999] pointer-events-none", className)}>
      {/* Slim Top White Loading Bar */}
      <div className="h-0.5 w-full bg-white/20 overflow-hidden relative shadow-[0_0_12px_rgba(255,255,255,0.8)]">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 1.1,
            ease: "easeInOut"
          }}
          className="h-full w-1/3 bg-white shadow-[0_0_10px_#ffffff]"
        />
      </div>
    </div>
  );
}

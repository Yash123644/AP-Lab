"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
 
export function LiveStudentCount() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());
  const [currentStudents, setCurrentStudents] = useState(2458);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);
 
  useEffect(() => {
    if (!isInView) return;

    // Initial animation from 0 to currentStudents
    const controls = animate(count, currentStudents, { duration: 2, ease: "easeOut" });
 
    // After initial animation, fluctuate the number
    const interval = setInterval(() => {
      setCurrentStudents((prev) => {
        const change = Math.floor(Math.random() * 7) - 3; // -3 to +3
        const next = Math.max(100, prev + change);
        animate(count, next, { duration: 1, ease: "easeInOut" });
        return next;
      });
    }, 4000);
 
    return () => {
      controls.stop();
      clearInterval(interval);
    };
  }, [isInView]);
 
  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex items-center space-x-3 bg-gradient-to-r from-emerald-900/40 to-emerald-800/20 backdrop-blur-md border border-emerald-500/30 rounded-full h-[40px] px-4 py-1 mb-8 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
    >
      <div className="relative flex items-center justify-center">
        {isInView && (
          <motion.div
            animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            className="absolute w-2 h-2 bg-emerald-400 rounded-full"
          />
        )}
        <div className="w-2 h-2 bg-emerald-400 rounded-full z-10 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
      </div>
      <div className="font-mono font-medium text-[15px] text-emerald-300 tracking-wide flex items-center gap-1.5">
        <motion.span>{rounded}</motion.span>
        <span className="text-emerald-100/80 font-sans text-[14px] tracking-normal">students learning live</span>
      </div>
    </motion.div>
  );
}

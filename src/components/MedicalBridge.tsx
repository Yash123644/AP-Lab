"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function MedicalBridge() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Shift background from Deep Navy to Dark Medical Teal
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.2, 0.8],
    ["#030712", "#002b2b"] // #030712 is deep-navy, #002b2b is a very dark teal
  );

  // Parallax effect for the massive background text
  const yText = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <motion.section
      ref={containerRef}
      style={{ backgroundColor }}
      className="relative min-h-[150vh] flex flex-col items-center justify-center py-32 px-6 overflow-hidden transition-colors duration-100"
    >
      {/* Parallax Background Text */}
      <motion.div
        style={{ y: yText }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-5 select-none overflow-hidden"
      >
        <span className="text-[20vw] font-black leading-none whitespace-nowrap text-white">THE BRIDGE</span>
        <span className="text-[20vw] font-black leading-none whitespace-nowrap text-medical-teal">CLINICAL</span>
      </motion.div>

      <div className="z-10 max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="glass p-12 md:p-16 rounded-[3rem] border border-medical-teal/30 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-medical-teal/30 blur-[60px]" />
          
          <h2 className="text-sm font-mono text-medical-teal tracking-[0.3em] uppercase mb-8">
            Lab Report
          </h2>
          
          <h3 className="text-3xl md:text-5xl font-bold text-white leading-snug mb-8">
            Why does AP Lab exist?
          </h3>
          
          <div className="space-y-6 text-lg md:text-xl text-white/70">
            <p>
              Pre-med students often memorize thousands of flashcards without understanding the clinical reality.
            </p>
            <p>
              AP Lab was built to bridge the gap. We take standard AP curriculum concepts—like cell respiration or acid-base buffers—and immediately apply them to clinical scenarios like diabetic ketoacidosis.
            </p>
            <p className="font-semibold text-white">
              Stop learning for the test. Start learning for the patient.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

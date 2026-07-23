"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, HelpCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Which organelle is responsible for photosynthesis?",
    options: ["Mitochondria", "Chloroplasts", "Nucleus", "Ribosomes"],
    correctIndex: 1,
    explanation: "Chloroplasts absorb sunlight and use it in conjunction with water and carbon dioxide gas to produce food for the plant (glucose) via photosynthesis."
  },
  {
    id: 2,
    question: "In a cell, where are proteins synthesized?",
    options: ["Lysosomes", "Golgi apparatus", "Ribosomes", "Mitochondria"],
    correctIndex: 2,
    explanation: "Ribosomes are the cellular structures responsible for protein synthesis by translating mRNA codons into polypeptide chains."
  },
  {
    id: 3,
    question: "Which of the following processes produces the most ATP during cellular respiration?",
    options: ["Glycolysis", "Krebs Cycle", "Electron Transport Chain", "Fermentation"],
    correctIndex: 2,
    explanation: "The Electron Transport Chain (ETC) and oxidative phosphorylation generate approximately 32 to 34 ATP molecules per glucose molecule, yielding the vast majority of cellular energy."
  },
  {
    id: 4,
    question: "What is the primary function of the cell membrane?",
    options: ["To store genetic information", "To synthesize lipids", "To regulate the entry and exit of substances", "To provide mechanical support to plant walls"],
    correctIndex: 2,
    explanation: "The plasma membrane is selectively permeable, regulating the transport of materials entering and exiting the cell to maintain homeostasis."
  },
  {
    id: 5,
    question: "Which molecule carries genetic information from DNA to the ribosome?",
    options: ["tRNA", "mRNA", "rRNA", "RNA Polymerase"],
    correctIndex: 1,
    explanation: "Messenger RNA (mRNA) carries genetic codes transcribed from DNA to the ribosomes, serving as the blueprint for translation."
  }
];

export function PracticeQuizSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  
  const currentQuestion = quizQuestions[currentIdx];
  const selectedOption = selectedAnswers[currentIdx];
  const isAnswered = selectedOption !== undefined;

  const handleOptionSelect = (optionIdx: number) => {
    if (isAnswered) return; // Prevent changing answer once selected
    setSelectedAnswers(prev => ({
      ...prev,
      [currentIdx]: optionIdx
    }));
  };

  const handleNext = () => {
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
    }
  };

  return (
    <section className="relative w-full py-[120px] md:py-[140px] px-6 md:px-12 bg-[#07080f] border-y border-white/[0.06] overflow-hidden flex flex-col items-center z-20">
      
      {/* Subtle Grid Matrix Pattern */}
      <div 
        className="absolute inset-0 opacity-60 pointer-events-none z-0" 
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.035) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />
      
      {/* Ultra-Soft Muted Vignette */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#030712] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none z-10" />
      
      {/* Subtle Low-Key Ambient Glow (No Bright Colors) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/[0.015] blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Feature Highlights aligned to AP Lab Curriculum */}
        <div className="space-y-8 max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="font-inter font-extrabold text-white text-3xl md:text-5xl tracking-tight leading-tight">
              Practice for any exam.
            </h2>
            <p className="font-inter text-white/50 text-sm md:text-base leading-relaxed">
              Master your AP exams with expert-curated, structured curriculum tracks. Explore comprehensive diagnostic modules designed to target your weaknesses and build perfect-score confidence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5"
          >
            {[
              "Official College Board Alignment: 100% mapped to units and learning objectives.",
              "Expert-Curated Study Tracks: Premade high-yield curriculum for Biology, Chemistry, and Physics.",
              "Active Diagnostic Quizzing: Identify knowledge gaps with unit-by-unit checkpoints.",
              "Detailed Step-by-Step Breakdowns: Learn the core concepts behind every correct and incorrect choice."
            ].map((item, idx) => {
              const [title, desc] = item.split(": ");
              return (
                <div key={idx} className="flex items-start space-x-3.5 group">
                  <div className="mt-1 w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-white/15">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <span className="font-manrope font-bold text-sm text-white block group-hover:text-emerald-400 transition-colors duration-300">{title}</span>
                    <span className="font-inter text-xs text-white/50 block mt-0.5">{desc}</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Right Column: Interactive Quiz Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative w-full max-w-md mx-auto"
          style={{ perspective: "1000px" }}
        >
          {/* Muted ambient glow behind card */}
          <div className="absolute -inset-4 bg-white/[0.03] blur-[40px] rounded-[36px] pointer-events-none -z-10" />

          {/* Outermost Card with 3D Tilt */}
          <motion.div 
            className="w-full bg-[#0b0c16]/95 border border-white/10 rounded-[28px] p-6 sm:p-7 shadow-[0_25px_70px_rgba(0,0,0,0.7)] backdrop-blur-3xl flex flex-col justify-between min-h-[440px]"
            style={{
              transform: "rotateY(-6deg) rotateX(3deg) rotateZ(-0.5deg)",
              transformStyle: "preserve-3d"
            }}
            whileHover={{
              transform: "rotateY(-2deg) rotateX(1.5deg) rotateZ(-0.2deg) translateY(-4px)",
              transition: { duration: 0.4, ease: "easeOut" }
            }}
          >
            
            {/* Header: Question label */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-white/30 tracking-wider">
                <span>Question {currentIdx + 1} of 5</span>
              </div>

              {/* Question Text */}
              <h3 className="font-manrope font-bold text-white text-base tracking-tight leading-snug">
                {currentQuestion.question}
              </h3>
            </div>

            {/* Options list: Spotify track rows */}
            <div className="space-y-1.5 mt-6 border-t border-white/5 pt-4">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrectOption = idx === currentQuestion.correctIndex;
                
                let optionStyle = "bg-transparent text-white/70 hover:bg-white/[0.04]";
                let indexNum = `0${idx + 1}`;
                let rightIcon = null;
                
                if (isAnswered) {
                  if (isCorrectOption) {
                    optionStyle = "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400";
                    indexNum = "✓";
                    rightIcon = <Check className="w-4 h-4 text-emerald-400" />;
                  } else if (isSelected) {
                    optionStyle = "bg-red-500/10 border border-red-500/20 text-red-400";
                    indexNum = "✕";
                    rightIcon = <X className="w-4 h-4 text-red-400" />;
                  } else {
                    optionStyle = "bg-transparent opacity-40 text-white/40";
                  }
                } else if (isSelected) {
                  optionStyle = "bg-white/10 text-white border border-white/10";
                }

                return (
                  <motion.div
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    whileTap={!isAnswered ? { scale: 0.99 } : {}}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer select-none group",
                      optionStyle
                    )}
                  >
                    <div className="flex items-center space-x-4">
                      {/* Track number / index */}
                      <span className={cn(
                        "w-5 font-mono text-xs text-white/30 text-center transition-colors group-hover:text-white/60",
                        isAnswered && (isCorrectOption || isSelected) && "font-bold text-sm"
                      )}>
                        {indexNum}
                      </span>
                      <span className="font-manrope font-semibold text-sm leading-relaxed">{option}</span>
                    </div>
                    {rightIcon}
                  </motion.div>
                );
              })}
            </div>

            {/* Explanation box */}
            <div className="relative mt-4">
              <AnimatePresence>
                {isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/50 font-inter leading-relaxed space-y-1">
                      <div className="flex items-center space-x-1.5 text-white/80 font-bold text-xs">
                        <HelpCircle className="w-3.5 h-3.5 text-white" />
                        <span>Explanation:</span>
                      </div>
                      <p>{currentQuestion.explanation}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer Navigation: clean player style controls */}
            <div className="flex items-center justify-between border-t border-white/5 pt-5 mt-6">
              <button
                onClick={handlePrev}
                disabled={currentIdx === 0}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5 transition-all text-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="font-mono text-xs text-white/30 uppercase tracking-widest">Question {currentIdx + 1} / 5</span>

              <button
                onClick={handleNext}
                disabled={currentIdx === quizQuestions.length - 1}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5 transition-all text-white"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

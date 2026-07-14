"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ArrowRight, Dna, Brain, Beaker, Sparkles } from "lucide-react";

const features = [
  {
    id: "diagnostics",
    icon: Dna,
    title: "01 / Active Diagnostics & Recommendations",
    desc: "A continuous diagnostic protocol. Rather than static practice tracks, AP Lab analyzes concept recall latency and mistake distribution in real-time, adapting recommendations to target your curriculum vulnerabilities before they impact your grades.",
    figureTitle: "Figure 1.0 — Real-Time Diagnostic Mastery Matrix",
    imgLabel: "Diagnostic Matrix Dashboard"
  },
  {
    id: "tutor",
    icon: Sparkles,
    title: "02 / Contextual Reasoning Engine",
    desc: "On-demand tutoring aligned to the text. Highlight any passage, diagram, or formula across the curriculum to activate the AI Tutor. Receive step-by-step mathematical proofs, clinical context, or conceptual translations instantly.",
    figureTitle: "Figure 2.0 — Contextual Reasoning Panel Interface",
    imgLabel: "AI Tutor Sidebar Panel"
  },
  {
    id: "spaced-repetition",
    icon: Brain,
    title: "03 / Neural Recall Architecture",
    desc: "Spaced-repetition active recall, calibrated to memory decay. Cards are dynamically weighted and scheduled based on retention curves, mapped directly to the official College Board Course and Exam Description (CED) frameworks.",
    figureTitle: "Figure 3.0 — Neural Recall Spaced-Repetition Deck",
    imgLabel: "Flashcards Active Recall Grid"
  },
  {
    id: "mock-exams",
    icon: Beaker,
    title: "04 / High-Fidelity Exam Simulations",
    desc: "Simulated testing environments under official time constraints. Mock exams are calibrated to duplicate College Board question weightings, scoring algorithms, and complexity thresholds, generating diagnostic score breakdowns (1-5).",
    figureTitle: "Figure 4.0 — Exam Simulator Timer & Master Report",
    imgLabel: "Mock Exam Diagnostic Scorecard"
  }
];

export default function WhyAPLab() {
  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-neutral-800 selection:text-white">
      {/* Sleek top border accent */}
      <div className="h-1 w-full bg-neutral-900" />

      {/* Navigation */}
      <header className="max-w-6xl mx-auto px-6 pt-10 pb-8 flex items-center justify-between border-b border-neutral-950">
        <Link 
          href="/" 
          className="flex items-center space-x-1.5 text-neutral-500 hover:text-neutral-200 transition-colors font-medium text-xs tracking-tight"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Home</span>
        </Link>
        <span className="text-[10px] text-neutral-600 font-mono tracking-widest uppercase">
          AP LAB // RESEARCH & ACCELERATORS
        </span>
      </header>

      {/* Hero Header */}
      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-3xl space-y-6 mb-28">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight font-instrument"
          >
            System Accelerators.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-400 text-base sm:text-lg leading-relaxed font-medium"
          >
            A high-fidelity academic platform. AP Lab integrates active diagnostic tracking, contextual reasoning models, and custom memory schedulers built for elite student performance.
          </motion.p>
        </div>

        {/* Minimalist Feature Rows */}
        <div className="space-y-32">
          {features.map((feat, index) => {
            const FeatIcon = feat.icon;

            return (
              <div 
                key={feat.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-t border-neutral-900 pt-12"
              >
                {/* Feature Description Card (Left) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center space-x-3 text-neutral-400">
                    <FeatIcon className="w-4 h-4 stroke-[1.8]" />
                    <h3 className="text-sm font-bold text-white tracking-tight uppercase">
                      {feat.title}
                    </h3>
                  </div>
                  
                  <p className="text-neutral-400 leading-relaxed text-xs sm:text-sm font-medium">
                    {feat.desc}
                  </p>
                </div>

                {/* Picture Placeholder Slot (Right) */}
                <div className="lg:col-span-7 space-y-2">
                  <div className="w-full h-64 sm:h-72 rounded-lg bg-[#07070a] border border-neutral-900 flex flex-col items-center justify-center relative overflow-hidden select-none">
                    {/* Architectural Grid Pattern Lines inside the box */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#121216_1px,transparent_1px),linear-gradient(to_bottom,#121216_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-40 pointer-events-none" />

                    {/* Minimalist Visual Mockup box */}
                    <div className="relative z-10 text-center space-y-1.5 p-6">
                      <div className="w-8 h-8 rounded border border-neutral-800 bg-[#0d0d12] flex items-center justify-center mx-auto mb-2 opacity-50">
                        <FeatIcon className="w-4 h-4 text-neutral-400" />
                      </div>
                      <span className="block text-neutral-300 font-bold text-xs tracking-wider uppercase">
                        {feat.imgLabel}
                      </span>
                      <span className="block text-neutral-600 text-[9px] tracking-widest uppercase font-semibold">
                        [ Drag & Drop Screen Mockup Here ]
                      </span>
                    </div>
                  </div>
                  <span className="block text-[10px] text-neutral-600 font-mono tracking-tight text-right">
                    {feat.figureTitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimalist CTA Footer */}
        <div className="mt-40 border-t border-neutral-900 pt-20 text-center max-w-xl mx-auto space-y-8">
          <h2 className="text-white text-xl sm:text-2xl font-extrabold tracking-tight font-instrument">
            Begin Exam Diagnostics.
          </h2>
          <p className="text-neutral-500 leading-relaxed text-xs sm:text-sm font-medium">
            Deploy diagnostics instantly across official units. AP Lab is completely free.
          </p>

          <div className="flex justify-center pt-2">
            <Link href="/dashboard">
              <button className="px-6 py-3 rounded bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center space-x-2">
                <span>Access Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

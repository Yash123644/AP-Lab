"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ArrowRight, Dna, Brain, Beaker, Sparkles } from "lucide-react";

const features = [
  {
    id: "diagnostics",
    icon: Dna,
    title: "Active Diagnostics & Real-Time Recall",
    desc: "Stop studying blindly. AP Lab constantly monitors your recall speed and accuracy across cell biology, physics derivations, and DBQs, spotlighting exact curriculum weakpoints before they damage your score.",
    imgLabel: "Diagnostic Dashboard Preview",
    color: "from-teal-400 to-emerald-500",
    glowColor: "rgba(16, 185, 129, 0.15)"
  },
  {
    id: "tutor",
    icon: Sparkles,
    title: "Gemini-Powered Contextual AI Tutor",
    desc: "Stuck on a clinical study or complex equation? Simply highlight any paragraph on the screen to trigger your hyper-intelligent personal tutor. Receive instant contextual translations, step-by-step guides, or diagnostic test items.",
    imgLabel: "AI Tutor Sidebar Preview",
    color: "from-violet-400 to-indigo-500",
    glowColor: "rgba(99, 102, 241, 0.15)"
  },
  {
    id: "spaced-repetition",
    icon: Brain,
    title: "Neural Recall Spaced Repetition",
    desc: "Lock in complex vocabulary and formulas effortlessly. Our spaced repetition engine customizes card frequency to match your personal memory retention cycle, built directly around official College Board Learning Objectives.",
    imgLabel: "Flashcards App Interface",
    color: "from-cyan-400 to-blue-500",
    glowColor: "rgba(59, 130, 246, 0.15)"
  },
  {
    id: "mock-exams",
    icon: Beaker,
    title: "Full-Length College Board Mock Exams",
    desc: "Simulate test day with strict timing bounds and rigorous, standard-level AP questions. Receive immediate diagnostic reports detailing your estimated AP score (1 to 5) and sub-topic mastery level.",
    imgLabel: "Exam Simulator Interface",
    color: "from-pink-400 to-rose-500",
    glowColor: "rgba(244, 63, 94, 0.15)"
  }
];

export default function WhyAPLab() {
  return (
    <div className="min-h-screen bg-[#06070c] text-white font-sans relative overflow-x-hidden">
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f111a_1px,transparent_1px),linear-gradient(to_bottom,#0f111a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[45%] h-[45%] rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none" />

      {/* Header Area */}
      <header className="max-w-7xl mx-auto px-6 py-8 flex items-center relative z-20">
        <Link 
          href="/" 
          className="flex items-center space-x-2 text-white/50 hover:text-white transition-colors group font-semibold text-sm"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 pt-12 pb-24 relative z-10">
        <div className="text-center space-y-6 max-w-3xl mx-auto mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4.5 py-1.5 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-300">Why AP Lab?</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] font-instrument"
          >
            Engineered for <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400">
              Absolute Subject Mastery
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 text-lg leading-relaxed font-medium"
          >
            Say goodbye to generic practice sets and passive lecture videos. AP Lab integrates active diagnostic tracking, AI-powered reasoning helpers, and paced memory algorithms.
          </motion.p>
        </div>

        {/* Alternating Features Section */}
        <div className="space-y-36">
          {features.map((feat, index) => {
            const FeatIcon = feat.icon;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={feat.id}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Feature Description Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="flex-1 space-y-6"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feat.color} flex items-center justify-center shadow-lg shadow-black/20`}>
                    <FeatIcon className="w-6 h-6 text-black" />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-instrument">
                    {feat.title}
                  </h3>
                  
                  <p className="text-neutral-400 leading-relaxed text-base font-medium">
                    {feat.desc}
                  </p>
                </motion.div>

                {/* Picture Placeholder Slot */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="flex-1 w-full"
                >
                  <div className="w-full h-72 sm:h-80 md:h-[340px] rounded-3xl bg-neutral-900/35 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-md shadow-inner group p-8">
                    {/* Glow background orb */}
                    <div 
                      className="absolute w-60 h-60 rounded-full blur-[80px] pointer-events-none transition-all duration-500 group-hover:scale-110" 
                      style={{ 
                        backgroundColor: feat.glowColor,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                      }}
                    />

                    {/* Placeholder content styling */}
                    <div className="relative z-10 text-center space-y-2 flex flex-col items-center justify-center select-none">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                        <FeatIcon className="w-6 h-6 text-white/40" />
                      </div>
                      <span className="text-white/60 font-bold text-sm tracking-wider uppercase">
                        {feat.imgLabel}
                      </span>
                      <span className="text-white/20 text-[10px] tracking-widest uppercase font-semibold">
                        [ Drag & Drop Screen Mockup Here ]
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* CTA Get Started Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-40 text-center relative"
        >
          {/* Subtle glow orb behind button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-violet-500/10 blur-[100px] pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-instrument">
              Ready to Master Your AP Exams?
            </h2>
            <p className="text-neutral-400 leading-relaxed font-medium">
              Join thousands of scholars boosting their recall efficiency and conceptual scoring today. AP Lab is completely free.
            </p>

            <Link href="/dashboard" className="inline-block">
              <button className="px-8 py-4.5 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-white font-bold text-base hover:opacity-90 hover:scale-105 transition-all shadow-[0_0_30px_rgba(124,58,237,0.3)] flex items-center space-x-2.5">
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

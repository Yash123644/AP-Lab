"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CursorLinesBackground } from "./CursorLinesBackground";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useUI } from "@/context/UIContext";

const DNAIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16 md:w-20 md:h-20">
    <path d="M30 15 Q50 50 70 85" strokeWidth="2.5"/>
    <path d="M70 15 Q50 50 30 85" strokeWidth="2.5"/>
    <line x1="36" y1="25" x2="64" y2="25" />
    <line x1="42" y1="35" x2="58" y2="35" />
    <line x1="48" y1="45" x2="52" y2="45" />
    <line x1="48" y1="55" x2="52" y2="55" />
    <line x1="42" y1="65" x2="58" y2="65" />
    <line x1="36" y1="75" x2="64" y2="75" />
    <circle cx="30" cy="15" r="3" fill="currentColor"/>
    <circle cx="70" cy="15" r="3" fill="currentColor"/>
    <circle cx="30" cy="85" r="3" fill="currentColor"/>
    <circle cx="70" cy="85" r="3" fill="currentColor"/>
  </svg>
);

const MoleculeIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16 md:w-20 md:h-20">
    <circle cx="50" cy="50" r="8" fill="currentColor" />
    <circle cx="20" cy="30" r="6" fill="currentColor" />
    <circle cx="80" cy="30" r="6" fill="currentColor" />
    <circle cx="50" cy="85" r="6" fill="currentColor" />
    <circle cx="80" cy="70" r="5" fill="currentColor" />
    <line x1="50" y1="50" x2="20" y2="30" strokeWidth="2" />
    <line x1="50" y1="50" x2="80" y2="30" strokeWidth="2" />
    <line x1="50" y1="50" x2="50" y2="85" strokeWidth="2" />
    <line x1="80" y1="30" x2="80" y2="70" strokeWidth="2" />
  </svg>
);

const MathGraphIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16 md:w-20 md:h-20">
    <line x1="15" y1="10" x2="15" y2="85" strokeWidth="2.5" />
    <line x1="15" y1="85" x2="90" y2="85" strokeWidth="2.5" />
    <line x1="15" y1="35" x2="90" y2="35" strokeDasharray="2 4" />
    <line x1="15" y1="60" x2="90" y2="60" strokeDasharray="2 4" />
    <line x1="40" y1="10" x2="40" y2="85" strokeDasharray="2 4" />
    <line x1="65" y1="10" x2="65" y2="85" strokeDasharray="2 4" />
    <path d="M15 70 Q 35 20, 55 60 T 90 20" strokeWidth="2.5" />
    <circle cx="55" cy="60" r="3.5" fill="currentColor" />
    <circle cx="35" cy="20" r="3.5" fill="currentColor" />
  </svg>
);

const BooksIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16 md:w-20 md:h-20">
    <rect x="20" y="60" width="60" height="15" rx="2" strokeWidth="2" />
    <line x1="28" y1="60" x2="28" y2="75" strokeWidth="2" />
    <rect x="25" y="42" width="50" height="15" rx="2" strokeWidth="2" />
    <line x1="32" y1="42" x2="32" y2="57" strokeWidth="2" />
    <rect x="30" y="24" width="40" height="15" rx="2" strokeWidth="2" />
    <line x1="36" y1="24" x2="36" y2="39" strokeWidth="2" />
  </svg>
);

const MicroscopeIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16 md:w-20 md:h-20">
    <path d="M30 85h40M50 85V75M35 75h30" />
    <path d="M65 75 C 65 50, 55 38, 50 22" />
    <rect x="42" y="15" width="16" height="30" rx="3" transform="rotate(-25 50 30)" />
    <circle cx="50" cy="55" r="4" fill="currentColor" />
  </svg>
);

const AtomIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16 md:w-20 md:h-20">
    <circle cx="50" cy="50" r="7" fill="currentColor" />
    <ellipse cx="50" cy="50" rx="40" ry="14" transform="rotate(30 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="14" transform="rotate(90 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="14" transform="rotate(150 50 50)" />
  </svg>
);

const CapIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16 md:w-20 md:h-20">
    <polygon points="50,20 85,35 50,50 15,35" />
    <path d="M30 42v18c0 10 9 15 20 15s20-5 20-15V42" />
    <path d="M85 35v25" strokeWidth="1.5" />
    <circle cx="85" cy="60" r="3" fill="currentColor" />
  </svg>
);

const BrainIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16 md:w-20 md:h-20">
    <path d="M48 20 C35 20, 25 30, 25 45 C25 55, 30 65, 40 70 C42 72, 45 76, 45 80" />
    <path d="M52 20 C65 20, 75 30, 75 45 C75 55, 70 65, 60 70 C58 72, 55 76, 55 80" />
    <circle cx="38" cy="35" r="3" fill="currentColor" />
    <circle cx="62" cy="35" r="3" fill="currentColor" />
    <circle cx="34" cy="50" r="3" fill="currentColor" />
    <circle cx="66" cy="50" r="3" fill="currentColor" />
    <circle cx="45" cy="60" r="3" fill="currentColor" />
    <circle cx="55" cy="60" r="3" fill="currentColor" />
    <line x1="38" y1="35" x2="34" y2="50" />
    <line x1="62" y1="35" x2="66" y2="50" />
    <line x1="34" y1="50" x2="45" y2="60" />
    <line x1="66" y1="50" x2="55" y2="60" />
    <line x1="45" y1="60" x2="55" y2="60" />
  </svg>
);

const FlaskIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-14 h-14 md:w-16 md:h-16">
    <path d="M38 20v28L20 72a6 6 0 0 0 5 10h50a6 6 0 0 0 5-10L62 48V20" strokeWidth="2.5" />
    <line x1="34" y1="20" x2="66" y2="20" strokeWidth="2.5" />
    <circle cx="38" cy="72" r="4" fill="currentColor" />
    <circle cx="55" cy="78" r="3" fill="currentColor" />
    <circle cx="48" cy="66" r="2.5" fill="currentColor" />
  </svg>
);

const SigmaIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-14 h-14 md:w-16 md:h-16">
    <path d="M72 18H28l24 32-24 32h44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RulerIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-14 h-14 md:w-16 md:h-16">
    <rect x="15" y="35" width="70" height="30" rx="3" strokeWidth="2" />
    <line x1="25" y1="35" x2="25" y2="50" strokeWidth="2" />
    <line x1="35" y1="35" x2="35" y2="45" strokeWidth="1.5" />
    <line x1="45" y1="35" x2="45" y2="50" strokeWidth="2" />
    <line x1="55" y1="35" x2="55" y2="45" strokeWidth="1.5" />
    <line x1="65" y1="35" x2="65" y2="50" strokeWidth="2" />
    <line x1="75" y1="35" x2="75" y2="45" strokeWidth="1.5" />
  </svg>
);

const PeriodicIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-14 h-14 md:w-16 md:h-16">
    <rect x="10" y="10" width="22" height="22" rx="3" />
    <rect x="37" y="10" width="22" height="22" rx="3" />
    <rect x="64" y="10" width="22" height="22" rx="3" />
    <rect x="10" y="37" width="22" height="22" rx="3" />
    <rect x="37" y="37" width="22" height="22" rx="3" />
    <rect x="64" y="37" width="22" height="22" rx="3" />
    <rect x="10" y="64" width="22" height="22" rx="3" />
    <rect x="37" y="64" width="22" height="22" rx="3" />
    <rect x="64" y="64" width="22" height="22" rx="3" />
    <text x="16" y="26" fontSize="10" fill="currentColor" stroke="none" fontFamily="monospace">H</text>
    <text x="43" y="26" fontSize="10" fill="currentColor" stroke="none" fontFamily="monospace">C</text>
    <text x="70" y="26" fontSize="10" fill="currentColor" stroke="none" fontFamily="monospace">O</text>
  </svg>
);

export function HeroSection() {
  const { currentUser } = useAuth();
  const { openAuthModal } = useUI();
  const { scrollY } = useScroll();
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const isPaused = false;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-32 px-6 md:px-12 overflow-hidden text-center z-10">
      {/* Animated Cursor Reactive Lines Background */}
      <CursorLinesBackground isPaused={isPaused} />

      {/* Background Floating Study Assets
           Each icon has mix-blend-mode:difference applied DIRECTLY (not on a wrapper)
           so it blends against the coloured lines canvas below it correctly.
           A radial CSS mask makes icons invisible near center and visible at edges. */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] select-none"
        style={{
          mixBlendMode: "difference",
          opacity: 0.65,
          WebkitMaskImage: "radial-gradient(ellipse 55% 55% at 50% 50%, transparent 0%, transparent 30%, rgba(0,0,0,0.3) 55%, black 80%)",
          maskImage: "radial-gradient(ellipse 55% 55% at 50% 50%, transparent 0%, transparent 30%, rgba(0,0,0,0.3) 55%, black 80%)",
        }}
      >
        {/* DNA: top-left */}
        <motion.div 
          className="absolute top-[14%] left-[10%] text-white"
          style={{ mixBlendMode: "difference" }}
          animate={{ y: [0, -12, 0], rotate: [0, 8, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <DNAIcon />
        </motion.div>

        {/* Molecule: top-right */}
        <motion.div 
          className="absolute top-[14%] right-[10%] text-white"
          style={{ mixBlendMode: "difference" }}
          animate={{ y: [0, -15, 0], rotate: [0, -12, 12, 0] }}
          transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <MoleculeIcon />
        </motion.div>

        {/* Math Graph: bottom-left */}
        <motion.div 
          className="absolute bottom-[20%] left-[8%] text-white"
          style={{ mixBlendMode: "difference" }}
          animate={{ y: [0, -10, 0], rotate: [0, 6, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <MathGraphIcon />
        </motion.div>

        {/* Stacked Books: mid-left */}
        <motion.div 
          className="absolute top-[32%] left-[6%] text-white"
          style={{ mixBlendMode: "difference" }}
          animate={{ y: [0, -11, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <BooksIcon />
        </motion.div>

        {/* Graduation Cap: mid-right */}
        <motion.div 
          className="absolute top-[32%] right-[6%] text-white"
          style={{ mixBlendMode: "difference" }}
          animate={{ y: [0, -13, 0], rotate: [0, 7, -7, 0] }}
          transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          <CapIcon />
        </motion.div>

        {/* Microscope: bottom-right */}
        <motion.div 
          className="absolute bottom-[20%] right-[8%] text-white"
          style={{ mixBlendMode: "difference" }}
          animate={{ y: [0, -14, 0], rotate: [0, -8, 8, 0] }}
          transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        >
          <MicroscopeIcon />
        </motion.div>

        {/* Atom: lower-mid-right */}
        <motion.div 
          className="absolute top-[55%] right-[5%] text-white"
          style={{ mixBlendMode: "difference" }}
          animate={{ y: [0, -9, 0], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
        >
          <AtomIcon />
        </motion.div>

        {/* Brain: lower-mid-left */}
        <motion.div 
          className="absolute top-[55%] left-[5%] text-white"
          style={{ mixBlendMode: "difference" }}
          animate={{ y: [0, -12, 0], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 8.0, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <BrainIcon />
        </motion.div>

        {/* Flask: top-center-left */}
        <motion.div 
          className="absolute top-[10%] left-[22%] text-white"
          style={{ mixBlendMode: "difference" }}
          animate={{ y: [0, -10, 0], rotate: [0, -6, 6, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <FlaskIcon />
        </motion.div>

        {/* Sigma: top-center-right */}
        <motion.div 
          className="absolute top-[10%] right-[22%] text-white"
          style={{ mixBlendMode: "difference" }}
          animate={{ y: [0, -8, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          <SigmaIcon />
        </motion.div>

        {/* Ruler: bottom-center-left */}
        <motion.div 
          className="absolute bottom-[12%] left-[20%] text-white"
          style={{ mixBlendMode: "difference" }}
          animate={{ y: [0, -11, 0], rotate: [0, 4, -4, 0] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        >
          <RulerIcon />
        </motion.div>

        {/* Periodic Table: bottom-center-right */}
        <motion.div 
          className="absolute bottom-[12%] right-[20%] text-white"
          style={{ mixBlendMode: "difference" }}
          animate={{ y: [0, -9, 0], rotate: [0, -7, 7, 0] }}
          transition={{ duration: 9.2, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        >
          <PeriodicIcon />
        </motion.div>
      </div>

      {/* Seamless Fade Transition at bottom to transition to deep-navy sections */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-deep-navy via-deep-navy/60 to-transparent z-10 pointer-events-none" />

      {/* Hero Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center justify-center z-10 w-full max-w-6xl -mt-12 relative"
      >
        {/* Apple-style Logo Header */}
        <div className="flex items-center gap-2 mb-8 text-white select-none">
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.8 18.2L14 10V5h1a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2h1v5l-4.8 8.2A2 2 0 0 0 7 21h10a2 2 0 0 0 1.8-2.8zM8.5 18l3.5-6 3.5 6z" />
          </svg>
          <span className="font-inter font-semibold text-[26px] tracking-tight">AP Lab</span>
        </div>

        {/* Massive Headline */}
        <h1 className="font-inter font-bold text-white text-6xl md:text-[96px] leading-[1.05] mb-8 tracking-tight max-w-5xl text-center select-none mix-blend-difference">
          For the love <br />of learning.
        </h1>

        {/* Subtitle formatted like Apple Music's subtext */}
        <p className="font-inter font-medium text-[16px] md:text-[20px] text-white/80 max-w-[820px] mb-12 text-center leading-relaxed text-balance px-4 select-none">
          Over 30 subjects, always free. The highest prep quality with immersive interactive labs¹ and comprehensive exams.² Access to exclusive content, including tutor interviews and live diagnostics. This is everything learning was meant to be. <strong className="font-extrabold text-white">100% Free.</strong>
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-6 mt-2 relative z-10">
          {currentUser ? (
            <Link href="/dashboard">
              <button className="uiverse-glossy-button">
                <div className="uiverse-glossy-button-wrap">
                  <p>
                    <span>Go to Dashboard</span>
                    <span>Go to Dashboard</span>
                  </p>
                </div>
              </button>
            </Link>
          ) : (
            <>
              <button 
                onClick={() => openAuthModal("signup")}
                className="uiverse-glossy-button"
              >
                <div className="uiverse-glossy-button-wrap">
                  <p>
                    <span>Go to Dashboard</span>
                    <span>Go to Dashboard</span>
                  </p>
                </div>
              </button>
              <button 
                onClick={() => openAuthModal("signin")}
                className="bg-transparent border border-white/20 text-white font-inter font-medium text-[16px] px-10 py-4 rounded-full hover:border-white/40 hover:bg-white/5 active:scale-[0.98] transition-all duration-300"
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </motion.div>

      {/* Animated Scroll Indicator (Positioned at the absolute bottom but fully visible) */}
      <motion.div 
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-30 pointer-events-none"
      >
        <span className="font-cabin text-[10px] text-white/40 uppercase tracking-[0.3em] ml-1">Scroll to Explore</span>
        <div className="w-[26px] h-[42px] rounded-full border-2 border-white/20 flex justify-center p-1 backdrop-blur-sm">
          <motion.div 
            animate={{ 
              y: [0, 16, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}


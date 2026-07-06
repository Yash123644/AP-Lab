"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Sparkles, ArrowUp, MousePointer2, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const IBeam = () => (
  <div className="w-[2px] h-5 bg-white drop-shadow-md relative -translate-y-1">
    <div className="absolute top-0 -left-[3px] w-2 h-[2px] bg-white" />
    <div className="absolute bottom-0 -left-[3px] w-2 h-[2px] bg-white" />
  </div>
);

const phrases = [
  "explain complex topics.",
  "tutor you 24/7.",
  "solve any problem.",
  "grade your essays."
];

function GoogleDocCursor() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <span className="relative inline-flex items-center whitespace-pre-wrap">
      <span className="relative bg-neutral-800 border border-neutral-700 text-white px-4 py-1.5 md:py-2.5 rounded-xl font-instrument italic leading-none inline-flex items-center min-h-[1.2em] shadow-lg">
        {text || "\u00A0"}
        {/* Nametag placed exactly at the end of the text background */}
        <div className="absolute -top-7 -right-2 bg-neutral-800 border border-neutral-700 text-white text-[11px] font-manrope font-bold px-3 py-1 rounded shadow-xl whitespace-nowrap z-10 flex flex-col items-center">
          AP Lab
        </div>
      </span>
      <span className="relative flex items-center">
        {/* Blinking Bar */}
        <motion.div 
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          className="w-[3px] h-[1.2em] bg-neutral-400 rounded-full ml-[2px]"
        />
      </span>
    </span>
  );
}

function AnimatedArticleHighlight() {
  const [isHovered, setIsHovered] = useState(false);

  const highlightVariants: Variants = {
    initial: { width: "0%" },
    hover: {
      width: "100%",
      transition: { duration: 0.5, delay: 0.1, ease: "easeOut" }
    }
  };

  const popoverVariants: Variants = {
    initial: { opacity: 0, y: 10, scale: 0.95 },
    hover: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 350, damping: 25, delay: 0.5 }
    }
  };

  const cursorVariants: Variants = {
    initial: { opacity: 0, x: -30, y: 70, scale: 1 },
    hover: {
      opacity: [0, 1, 1, 1, 0],
      x: [0, 110, 150, 150, 150],
      y: [70, 50, -10, -10, -10],
      scale: [1, 1, 1, 0.85, 0.85],
      transition: {
        duration: 1.4,
        times: [0, 0.35, 0.65, 0.8, 1],
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      layout 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full h-[540px] max-w-md mx-auto liquid-glass-strong rounded-[32px] p-6 border border-white/10 shadow-2xl flex flex-col relative overflow-hidden group select-none cursor-default transition-all duration-300 hover:border-white/20 hover:shadow-[0_12px_40px_rgba(255,255,255,0.03)]"
      transition={{ type: "tween", duration: 0.45, ease: "easeInOut" }}
    >
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-16 border-b border-white/5 bg-white/[0.02] flex items-center px-6 backdrop-blur-md z-20">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <span className="text-[10px] font-manrope font-bold text-white/50 uppercase tracking-widest ml-4">
          AP Biology Curriculum
        </span>
      </div>

      <div className="flex-1 overflow-hidden mt-12 relative w-full h-full pt-4">
        <div className="space-y-4 px-2">
          <div className="h-4 w-3/4 bg-white/10 rounded-full" />
          <div className="h-4 w-full bg-white/10 rounded-full" />
          <div className="h-4 w-5/6 bg-white/10 rounded-full" />
          <div className="h-4 w-full bg-white/10 rounded-full" />
          
          <div className="relative mt-8 space-y-4">
            <div className="text-white/60 font-inter text-[15px] leading-relaxed">
              Mitochondria are membrane-bound cell organelles that generate most of the chemical energy needed to power the cell's biochemical reactions. 
              <br/><br/>
              <span className="relative inline-block py-0.5 px-1 text-white">
                {/* Highlight Span */}
                <motion.span 
                  variants={highlightVariants}
                  initial="initial"
                  animate={isHovered ? "hover" : "initial"}
                  className="absolute inset-0 bg-white/20 rounded origin-left"
                />
                <span className="relative z-10">
                  Chemical energy produced by the mitochondria is stored in a small molecule called adenosine triphosphate (ATP).
                </span>
                
                {/* Popover */}
                <motion.div
                  variants={popoverVariants}
                  initial="initial"
                  animate={isHovered ? "hover" : "initial"}
                  className="absolute -top-10 right-0 translate-x-1/2 z-50 pb-2 pointer-events-none"
                >
                  <div className="liquid-glass-strong px-3 py-1.5 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10 text-white font-medium flex items-center justify-center whitespace-nowrap">
                    <span className="text-[11px] font-sans font-medium text-white tracking-wide">Ask AI</span>
                  </div>
                </motion.div>

                {/* Animated Cursor */}
                <motion.div
                  variants={cursorVariants}
                  initial="initial"
                  animate={isHovered ? "hover" : "initial"}
                  className="absolute z-[60] pointer-events-none"
                  style={{ x: "-50%", y: "-50%" }}
                >
                  <MousePointer2 className="w-5 h-5 text-white fill-white drop-shadow-lg" />
                </motion.div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const chatSequence = [
  { id: 1, role: "user", text: "Can you explain Le Chatelier's Principle?" },
  { id: 2, role: "assistant", text: "Sure! Le Chatelier's Principle states that if a dynamic equilibrium is disturbed by changing the conditions, the position of equilibrium shifts to counteract the change." }
];

function AnimatedChat() {
  const [isHovered, setIsHovered] = useState(false);

  const userMsgVariants: Variants = {
    initial: { opacity: 0, y: 15, scale: 0.95 },
    hover: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 350, damping: 26, delay: 0.2 }
    }
  };

  const typingVariants: Variants = {
    initial: { opacity: 0, y: 10 },
    hover: {
      opacity: [0, 1, 1, 0],
      y: [10, 0, 0, -10],
      transition: {
        duration: 1.1,
        times: [0, 0.15, 0.85, 1],
        delay: 0.7
      }
    }
  };

  const aiMsgVariants: Variants = {
    initial: { opacity: 0, y: 15, scale: 0.95 },
    hover: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 25, delay: 1.7 }
    }
  };

  return (
    <motion.div 
      layout 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full max-w-md mx-auto liquid-glass-strong rounded-[32px] p-6 border border-white/10 shadow-2xl flex flex-col h-[540px] relative overflow-hidden group select-none cursor-default transition-all duration-300 hover:border-white/20 hover:shadow-[0_12px_40px_rgba(255,255,255,0.03)]"
      transition={{ type: "tween", duration: 0.45, ease: "easeInOut" }}
    >
      {/* Top Bar inside Chat */}
      <div className="absolute top-0 left-0 right-0 h-16 border-b border-white/5 bg-white/[0.02] flex items-center justify-center backdrop-blur-md z-10">
        <div className="flex flex-col items-center mt-1">
          <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center mb-0.5">
            <Activity className="w-3 h-3 text-white/60 animate-pulse" />
          </div>
          <span className="text-[9px] font-manrope font-bold text-white/50 uppercase tracking-widest">AP Lab AI</span>
        </div>
      </div>

      <div className="flex-1 mt-16 pb-20 space-y-4 pr-1">
        {/* User Message */}
        <motion.div
          variants={userMsgVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
          className="flex w-full justify-end"
        >
          <div className="max-w-[85%] rounded-[24px] px-5 py-3.5 text-[14px] font-inter leading-relaxed shadow-lg relative bg-emerald-600 text-white rounded-br-sm shadow-md">
            {chatSequence[0].text}
          </div>
        </motion.div>

        {/* Typing Indicator */}
        <motion.div
          variants={typingVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
          className="flex justify-start w-full pointer-events-none"
        >
          <div className="bg-white/5 border border-white/5 rounded-[20px] rounded-bl-sm px-4 py-3.5 flex space-x-1.5 items-center w-fit backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" />
            <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0.15s" }} />
            <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0.3s" }} />
          </div>
        </motion.div>

        {/* AI Message */}
        <motion.div
          variants={aiMsgVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
          className="flex w-full justify-start"
        >
          <div className="max-w-[85%] rounded-[24px] px-5 py-3.5 text-[14px] font-inter leading-relaxed shadow-lg relative bg-white/10 border border-white/10 text-white/90 rounded-bl-sm backdrop-blur-md">
            {chatSequence[1].text}
          </div>
        </motion.div>
      </div>

      {/* Input bar mockup */}
      <motion.div layout className="absolute bottom-4 left-4 right-4 h-12 rounded-full bg-black/40 border border-white/10 flex items-center px-4 justify-between backdrop-blur-xl">
        <span className="text-white/30 text-[13px] font-inter">Message AP Lab AI...</span>
        <div className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center shadow-lg cursor-pointer transition-colors">
          <ArrowUp className="w-4 h-4 text-white" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function AIFeatureShowcase() {
  return (
    <section className="relative w-full py-[160px] md:py-[180px] px-6 md:px-12 bg-[#02050D] overflow-hidden flex flex-col items-center min-h-[80vh]">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-deep-navy to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-navy to-transparent pointer-events-none z-10" />
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/[0.01] blur-[120px] rounded-full" />
        
        {/* Subtle Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] opacity-20 mask-image:linear-gradient(to_bottom,transparent,black,transparent)" />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto w-full flex flex-col items-center space-y-20">
        
        {/* Top: Centered Copy */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-inter font-extrabold text-white text-3xl md:text-5xl tracking-tight mb-4"
          >
            Included AI Guidance
          </motion.h2>
          <div className="font-inter font-extrabold text-white text-xl md:text-2xl tracking-tight mb-8 mt-6 flex flex-row flex-wrap items-center justify-center gap-x-3">
            <span>The Lab AI Assistant can</span>
            <GoogleDocCursor />
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-white/50 text-sm md:text-base max-w-lg mx-auto leading-relaxed"
          >
            Highlight any confusing paragraph, equation, or diagram. AP Lab AI acts as your personal, hyper-intelligent tutor—instantly contextualizing the curriculum to eliminate roadblocks.
          </motion.p>
        </div>

        {/* Bottom: Two Showcase Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <AnimatedArticleHighlight />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <AnimatedChat />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

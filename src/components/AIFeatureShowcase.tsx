"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUp, MousePointer2 } from "lucide-react";
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
      <span className="relative bg-[#48228A] text-white px-4 py-1.5 md:py-2.5 rounded-xl font-instrument italic leading-none inline-flex items-center min-h-[1.2em] shadow-lg">
        {text || "\u00A0"}
        {/* Nametag placed exactly at the end of the text background */}
        <div className="absolute -top-7 -right-2 bg-[#48228A] text-white text-[11px] font-manrope font-bold px-3 py-1 rounded shadow-xl whitespace-nowrap z-10 flex flex-col items-center">
          AP Lab
        </div>
      </span>
      <span className="relative flex items-center">
        {/* Blinking Bar */}
        <motion.div 
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          className="w-[3px] h-[1.2em] bg-[#48228A] rounded-full ml-[2px]"
        />
      </span>
    </span>
  );
}

function AnimatedArticleHighlight() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (step === 0) {
      timeout = setTimeout(() => setStep(1), 1000); // Start highlight
    } else if (step === 1) {
      timeout = setTimeout(() => setStep(2), 1500); // Show popover and move cursor to it
    } else if (step === 2) {
      timeout = setTimeout(() => setStep(3), 1000); // Click Ask AI
    } else if (step === 3) {
      timeout = setTimeout(() => setStep(4), 800);  // Transition to Chat
    } else if (step === 4) {
      timeout = setTimeout(() => setStep(5), 2000); // AI Typing
    } else if (step === 5) {
      timeout = setTimeout(() => setStep(0), 4000); // Reset
    }
    return () => clearTimeout(timeout);
  }, [step]);

  return (
    <motion.div layout className="w-full h-[500px] max-w-md mx-auto liquid-glass-strong rounded-[32px] p-6 border border-white/10 shadow-2xl flex flex-col relative overflow-hidden group">
      
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-16 border-b border-white/5 bg-white/[0.02] flex items-center px-6 backdrop-blur-md z-20">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <span className="text-[10px] font-manrope font-bold text-white/50 uppercase tracking-widest ml-4">
          {step < 4 ? "AP Biology Curriculum" : "AP Lab AI"}
        </span>
      </div>

      <div className="flex-1 overflow-hidden mt-12 relative w-full h-full pt-4">
        <AnimatePresence mode="wait">
          {step < 4 ? (
            <motion.div 
              key="article"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4 px-2"
            >
              <div className="h-4 w-3/4 bg-white/10 rounded-full" />
              <div className="h-4 w-full bg-white/10 rounded-full" />
              <div className="h-4 w-5/6 bg-white/10 rounded-full" />
              <div className="h-4 w-full bg-white/10 rounded-full" />
              
              <div className="relative mt-8 space-y-4">
                <div className="text-white/60 font-inter text-[15px] leading-relaxed">
                  Mitochondria are membrane-bound cell organelles that generate most of the chemical energy needed to power the cell's biochemical reactions. 
                  <br/><br/>
                  <span className="relative inline-block py-0.5 px-1 text-white">
                    {/* The animated highlight background */}
                    <motion.span 
                      initial={{ width: "0%" }}
                      animate={{ width: step >= 1 ? "100%" : "0%" }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                      className="absolute inset-0 bg-medical-teal/40 rounded shadow-[0_0_15px_rgba(45,212,191,0.2)] origin-left"
                    />
                    <span className="relative z-10">
                      Chemical energy produced by the mitochondria is stored in a small molecule called adenosine triphosphate (ATP).
                    </span>
                    
                    {/* Contextual Popover */}
                    <AnimatePresence>
                      {step >= 2 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                          className="absolute -top-14 left-1/2 -translate-x-1/2 flex items-center space-x-2 bg-deep-navy border border-medical-teal/40 px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap z-50"
                        >
                          <Sparkles className="w-3 h-3 text-medical-teal" />
                          <span className="text-[10px] font-manrope font-bold text-white uppercase tracking-widest">
                            Ask AI
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Animated Cursor */}
                    <AnimatePresence>
                      {step >= 1 && step <= 3 && (
                        <motion.div
                          initial={{ opacity: 0, left: 0, top: 0 }}
                          animate={{ 
                            opacity: step === 3 ? [1, 0] : 1,
                            left: step === 1 ? "100%" : "50%",
                            top: step === 1 ? "100%" : -40,
                            scale: step === 3 ? [1, 0.8, 1] : 1
                          }}
                          transition={{ 
                            duration: step === 1 ? 1.2 : step === 3 ? 0.5 : 0.8, 
                            ease: "easeInOut" 
                          }}
                          className="absolute z-[60] pointer-events-none"
                          style={{ x: "-50%", y: "-50%" }}
                        >
                          {step === 1 ? (
                            <IBeam />
                          ) : (
                            <MousePointer2 className="w-5 h-5 text-white fill-white drop-shadow-lg" />
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="chat"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex flex-col space-y-4 px-2 h-full justify-start pt-4"
            >
              {/* User message containing highlighted text */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95, originX: 1 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="flex w-full justify-end"
              >
                <div className="max-w-[85%] rounded-[24px] px-5 py-3.5 text-[14px] font-inter leading-relaxed shadow-lg relative bg-gradient-to-br from-medical-teal to-emerald-600 text-white rounded-br-sm">
                  Regarding this text: "Chemical energy produced by the mitochondria is stored in a small molecule called adenosine triphosphate (ATP)."
                </div>
              </motion.div>

              {/* AI Response or Typing */}
              <AnimatePresence mode="wait">
                {step === 4 ? (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex justify-start w-full"
                  >
                    <div className="bg-white/5 border border-white/5 rounded-[20px] rounded-bl-sm px-4 py-3.5 flex space-x-1.5 items-center w-fit backdrop-blur-md">
                      <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0.15s" }} />
                      <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0.3s" }} />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="response"
                    initial={{ opacity: 0, y: 10, scale: 0.95, originX: 0 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="flex w-full justify-start"
                  >
                    <div className="max-w-[85%] rounded-[24px] px-5 py-3.5 text-[14px] font-inter leading-relaxed shadow-lg relative bg-white/10 border border-white/10 text-white/90 rounded-bl-sm backdrop-blur-md">
                      ATP is like the "energy currency" of the cell! When the cell needs to do work (like moving molecules or contracting muscles), it breaks down ATP to release the stored energy.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {step >= 4 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 right-4 h-12 rounded-full bg-black/40 border border-white/10 flex items-center px-4 justify-between backdrop-blur-xl z-20"
        >
          <span className="text-white/30 text-[13px] font-inter">Message AP Lab AI...</span>
          <div className="w-7 h-7 rounded-full bg-medical-teal flex items-center justify-center shadow-lg cursor-pointer transition-colors">
            <ArrowUp className="w-4 h-4 text-white" />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

const chatSequence = [
  { id: 1, role: "user", text: "Can you explain Le Chatelier's Principle?" },
  { id: 2, role: "assistant", text: "Sure! Le Chatelier's Principle states that if a dynamic equilibrium is disturbed by changing the conditions, the position of equilibrium shifts to counteract the change." },
  { id: 3, role: "user", text: "So if I increase pressure?" },
  { id: 4, role: "assistant", text: "The equilibrium will shift towards the side with fewer moles of gas to reduce the pressure! 🎈" }
];

function AnimatedChat() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);

  useEffect(() => {
    // Sequence timing logic
    let timeout: NodeJS.Timeout;
    
    if (visibleMessages === 0) {
      timeout = setTimeout(() => setVisibleMessages(1), 1000); // User asks
    } else if (visibleMessages === 1) {
      timeout = setTimeout(() => setVisibleMessages(2), 2500); // AI typing... answers
    } else if (visibleMessages === 2) {
      timeout = setTimeout(() => setVisibleMessages(3), 2000); // User asks again
    } else if (visibleMessages === 3) {
      timeout = setTimeout(() => setVisibleMessages(4), 2500); // AI typing... answers
    } else if (visibleMessages === 4) {
      timeout = setTimeout(() => setVisibleMessages(0), 5000); // Reset after reading
    }

    return () => clearTimeout(timeout);
  }, [visibleMessages]);

  return (
    <motion.div 
      layout 
      className="w-full max-w-md mx-auto liquid-glass-strong rounded-[32px] p-6 border border-white/10 shadow-2xl flex flex-col min-h-[450px] relative overflow-hidden group"
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      {/* Top Bar inside Chat */}
      <div className="absolute top-0 left-0 right-0 h-16 border-b border-white/5 bg-white/[0.02] flex items-center justify-center backdrop-blur-md z-10">
        <div className="flex flex-col items-center mt-1">
          <div className="w-6 h-6 rounded-full bg-primary-purple/20 flex items-center justify-center mb-0.5">
            <Sparkles className="w-3 h-3 text-primary-purple" />
          </div>
          <span className="text-[9px] font-manrope font-bold text-white/50 uppercase tracking-widest">AP Lab AI</span>
        </div>
      </div>

      <div className="flex-1 mt-16 pb-16 space-y-4 pr-1">
        <AnimatePresence>
          {chatSequence.slice(0, visibleMessages).map((msg) => (
            <motion.div
              layout
              key={msg.id}
              initial={{ opacity: 0, y: 15, scale: 0.95, originX: msg.role === "user" ? 1 : 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.8 }}
              className={cn(
                "flex w-full",
                msg.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div className={cn(
                "max-w-[85%] rounded-[24px] px-5 py-3.5 text-[14px] font-inter leading-relaxed shadow-lg relative",
                msg.role === "user" 
                  ? "bg-gradient-to-br from-primary-purple to-indigo-500 text-white rounded-br-sm" 
                  : "bg-white/10 border border-white/10 text-white/90 rounded-bl-sm backdrop-blur-md"
              )}>
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Indicator */}
        <AnimatePresence>
          {visibleMessages % 2 !== 0 && visibleMessages < chatSequence.length && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="flex justify-start w-full"
            >
              <div className="bg-white/5 border border-white/5 rounded-[20px] rounded-bl-sm px-4 py-3.5 flex space-x-1.5 items-center w-fit backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0.15s" }} />
                <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0.3s" }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input bar mockup */}
      <motion.div layout className="absolute bottom-4 left-4 right-4 h-12 rounded-full bg-black/40 border border-white/10 flex items-center px-4 justify-between backdrop-blur-xl">
        <span className="text-white/30 text-[13px] font-inter">Message AP Lab AI...</span>
        <div className="w-7 h-7 rounded-full bg-primary-purple flex items-center justify-center shadow-lg cursor-pointer hover:bg-primary-purple/80 transition-colors">
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-purple/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-medical-teal/5 blur-[120px] rounded-full" />
        
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

"use client";
 
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { BrainCircuit, Activity, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
 
const tabs = [
  { id: "recall", label: "Neural Recall", icon: BrainCircuit, color: "text-primary-purple", borderColor: "border-primary-purple/50", glow: "shadow-[0_0_50px_rgba(164,132,215,0.2)]" },
  { id: "diagnostics", label: "Live Diagnostics", icon: Activity, color: "text-medical-teal", borderColor: "border-medical-teal/50", glow: "shadow-[0_0_50px_rgba(32,201,151,0.2)]" },
  { id: "ai", label: "Socratic AI", icon: Sparkles, color: "text-rose-400", borderColor: "border-rose-400/50", glow: "shadow-[0_0_50px_rgba(251,113,133,0.2)]" }
];
 
export function InteractiveLab() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % tabs.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);
 
  const activeTab = tabs[activeIdx];
 
  return (
    <section ref={sectionRef} className="relative w-full py-32 px-6 md:px-[120px] bg-[#020202] overflow-hidden z-10 flex flex-col items-center min-h-[900px]">
      {/* Panning Grid Background */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        animate={isInView ? {
          backgroundPosition: ["0px 0px", "60px 60px"]
        } : {}}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#020202_70%)] pointer-events-none z-0" />

      {/* Header */}
      <div className="text-center relative z-20 mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-inter font-extrabold text-white text-3xl md:text-5xl tracking-tight mb-4"
        >
          Included Interactive Labs
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-white/50 text-sm md:text-base max-w-lg mx-auto leading-relaxed"
        >
          Experience our high-fidelity, cognitive tools directly from the command center.
        </motion.p>
      </div>

      {/* Main Glass Container */}
      <div className={cn(
        "relative w-full max-w-5xl h-[500px] rounded-[40px] bg-black/40 backdrop-blur-3xl border transition-all duration-700 flex flex-col overflow-hidden z-20",
        activeTab.borderColor,
        activeTab.glow
      )}>
        {/* Tabs Row */}
        <div className="flex items-center justify-center space-x-2 md:space-x-8 p-6 border-b border-white/5 bg-white/[0.02]">
          {tabs.map((tab, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveIdx(idx)}
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300",
                  isActive ? "bg-white/10 shadow-inner" : "hover:bg-white/5"
                )}
              >
                <tab.icon className={cn("w-5 h-5 transition-colors duration-300", isActive ? tab.color : "text-white/40")} />
                <span className={cn(
                  "font-mono text-xs md:text-sm tracking-widest uppercase transition-colors duration-300",
                  isActive ? "text-white" : "text-white/40"
                )}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1 relative w-full h-full flex items-center justify-center p-8 overflow-hidden">
          <AnimatePresence mode="wait">
            
            {/* NEURAL RECALL */}
            {activeIdx === 0 && (
              <motion.div
                key="recall"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-sm aspect-[4/3] relative [perspective:1000px] flex items-center justify-center"
              >
                {/* Background Cards */}
                <motion.div 
                  className="absolute inset-0 bg-primary-purple/10 border border-primary-purple/20 rounded-3xl backdrop-blur-md"
                  animate={{ rotateZ: -10, rotateX: 20, z: -100, x: -30 }}
                  transition={{ duration: 1, type: "spring" }}
                />
                <motion.div 
                  className="absolute inset-0 bg-primary-purple/20 border border-primary-purple/30 rounded-3xl backdrop-blur-md"
                  animate={{ rotateZ: -5, rotateX: 10, z: -50, x: -15 }}
                  transition={{ duration: 1, delay: 0.1, type: "spring" }}
                />
                {/* Foreground Card */}
                <motion.div 
                  className="absolute inset-0 bg-[#0A0A0F] border border-primary-purple/50 rounded-3xl p-8 shadow-2xl flex flex-col justify-between z-10"
                  animate={{ rotateZ: 0, rotateX: 0, z: 0, x: 0, y: [0, -10, 0] }}
                  transition={{ 
                    rotateZ: { duration: 1, delay: 0.2, type: "spring" },
                    y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div className="px-3 py-1 bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-full text-[10px] font-mono uppercase tracking-widest animate-pulse">
                      Due for Review
                    </div>
                    <BrainCircuit className="w-6 h-6 text-primary-purple" />
                  </div>
                  <div className="text-center my-6">
                    <h3 className="font-instrument text-3xl text-white mb-2">Gibbs Free Energy</h3>
                    <p className="font-inter text-md text-white/50">ΔG = ΔH - TΔS</p>
                  </div>
                  <div className="flex justify-center space-x-3">
                    <div className="h-1.5 w-12 bg-red-500/50 rounded-full hover:bg-red-500 cursor-pointer transition-colors" />
                    <div className="h-1.5 w-12 bg-yellow-500/50 rounded-full hover:bg-yellow-500 cursor-pointer transition-colors" />
                    <div className="h-1.5 w-12 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)] hover:bg-green-400 cursor-pointer transition-colors" />
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* LIVE DIAGNOSTICS */}
            {activeIdx === 1 && (
              <motion.div
                key="diagnostics"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-xl flex flex-col items-center justify-center space-y-12"
              >
                {/* EKG Path */}
                <div className="w-full h-32 relative">
                  <svg viewBox="0 0 500 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(32,201,151,0.5)] overflow-visible">
                    <motion.path
                      d="M0,50 L150,50 L170,20 L190,80 L210,50 L350,50 L370,10 L390,90 L410,50 L500,50"
                      fill="none"
                      stroke="#20c997"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </svg>
                </div>

                {/* Progress Bar */}
                <div className="w-full">
                  <div className="flex justify-between mb-3 font-mono text-xs uppercase tracking-widest text-white/50">
                    <span>Unit 4 Mastery</span>
                    <span className="text-medical-teal font-bold drop-shadow-[0_0_5px_rgba(32,201,151,1)]">84%</span>
                  </div>
                  <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 relative shadow-inner">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-medical-teal/50 to-medical-teal rounded-full shadow-[0_0_20px_rgba(32,201,151,0.6)]"
                      initial={{ width: "0%" }}
                      animate={{ width: "84%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* SOCRATIC AI */}
            {activeIdx === 2 && (
              <motion.div
                key="ai"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-2xl h-full flex flex-col justify-center space-y-6"
              >
                {/* User Message */}
                <div className="self-end bg-white/10 border border-white/20 rounded-2xl rounded-tr-sm p-5 max-w-[80%] backdrop-blur-md shadow-lg">
                  <p className="font-inter text-[15px] text-white/90">
                    Why does atomic radius decrease across a period?
                  </p>
                </div>

                {/* AI Response */}
                <div className="self-start bg-rose-500/10 border border-rose-500/30 rounded-2xl rounded-tl-sm p-6 max-w-[90%] backdrop-blur-md relative overflow-hidden group shadow-[0_0_20px_rgba(251,113,133,0.1)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-400/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                  
                  <div className="flex space-x-3 mb-3 items-center">
                    <Sparkles className="w-5 h-5 text-rose-400 animate-pulse" />
                    <span className="font-mono text-xs text-rose-400 uppercase tracking-widest">Socratic Engine</span>
                  </div>
                  
                  <motion.p 
                    className="font-inter text-[15px] text-white/80 leading-relaxed relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    As you move across a period, the number of protons increases, resulting in a stronger 
                    <span className="text-white font-semibold mx-1">effective nuclear charge (Zeff)</span>. 
                    This stronger pull draws the electron cloud closer to the nucleus, decreasing the overall radius!
                  </motion.p>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

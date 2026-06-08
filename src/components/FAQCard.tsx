import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQCardProps {
  question: string;
  answer: string;
}

export function FAQCard({ question, answer }: FAQCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto mb-5">
      <div 
        className={cn(
          "relative rounded-[24px] border transition-all duration-500 overflow-hidden",
          isOpen 
            ? "bg-[#161616] border-cyan-500/20 shadow-[0_20px_40px_rgba(0,0,0,0.3)]" 
            : "bg-[#121212] border-white/[0.03] hover:border-white/[0.08] hover:bg-[#181818] shadow-md"
        )}
      >
        {/* Subtle accent hover glow */}
        <div className={cn(
          "absolute -inset-px bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none",
          isOpen ? "opacity-100" : "group-hover:opacity-100"
        )} />
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-7 text-left cursor-pointer group relative z-10"
        >
          <h3 className={cn(
            "text-xl md:text-[22px] font-manrope font-semibold pr-8 transition-colors duration-300 tracking-tight",
            isOpen ? "text-white" : "text-white/80 group-hover:text-white"
          )}>
            {question}
          </h3>
          <div className={cn(
            "w-11 h-11 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500 shadow-md",
            isOpen 
              ? "bg-cyan-500/10 border-cyan-500/30 rotate-180" 
              : "bg-white/5 border-white/10 group-hover:bg-white/10 group-hover:border-white/20"
          )}>
            {isOpen ? (
              <Minus className="w-5 h-5 text-cyan-400" />
            ) : (
              <Plus className="w-5 h-5 text-white/60 group-hover:text-white" />
            )}
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="px-7 pb-7 text-white/60 font-inter text-[16px] leading-relaxed relative z-10">
                <div className="w-full h-px bg-white/5 mb-6" />
                <p className="max-w-[760px] text-balance">
                  {answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

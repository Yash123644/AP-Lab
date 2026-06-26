"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface DiagramProps {
  src?: string;
  alt: string;
  caption: string;
  title: string;
  className?: string;
  accentColor?: string;
  insightLabel?: string;
}

export function DiagramContainer({ 
  src, 
  alt, 
  caption, 
  title, 
  className,
  accentColor = "#22c55e",
  insightLabel = "Insight"
}: DiagramProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn(
          "my-12 p-1 rounded-[2rem]",
          className
        )}
        style={{
          background: `linear-gradient(135deg, ${accentColor}33, transparent, ${accentColor}1a)`
        }}
      >
        <div className="bg-[#050508]/80 backdrop-blur-2xl rounded-[1.9rem] overflow-hidden border border-white/10">
          <div className="p-6 border-b border-white/5 bg-white/2">
            <h4 className="font-instrument text-xl text-white tracking-tight">{title}</h4>
          </div>
          
          <div className="aspect-video relative bg-black/40 flex items-center justify-center p-8">
            {src ? (
              <img 
                src={src} 
                alt={alt} 
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl cursor-zoom-in hover:scale-[1.02] transition-transform duration-300" 
                onClick={() => setIsExpanded(true)}
              />
            ) : (
              <div className="w-full h-full border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center space-y-4 text-white/20">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center">
                  <span className="text-4xl">🧪</span>
                </div>
                <p className="text-sm font-medium uppercase tracking-[0.2em]">{alt}</p>
                <p className="text-xs text-white/10 italic">High-Fidelity Illustration Placeholder</p>
              </div>
            )}
          </div>

          <div className="p-6 bg-white/[0.02]">
            <p className="text-sm text-white/50 leading-relaxed italic">
              <span className="font-bold mr-2 uppercase text-[10px] tracking-widest" style={{ color: accentColor }}>
                {insightLabel}:
              </span>
              {caption}
            </p>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && src && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setIsExpanded(false)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
              onClick={() => setIsExpanded(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={src} 
              alt={alt} 
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

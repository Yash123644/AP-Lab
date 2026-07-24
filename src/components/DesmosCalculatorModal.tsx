"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, X, Minus, Maximize2, GripHorizontal } from "lucide-react";

interface DesmosCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DesmosCalculatorModal({ isOpen, onClose }: DesmosCalculatorModalProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        drag
        dragConstraints={false}
        dragElastic={0.05}
        dragMomentum={false}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="fixed top-24 right-12 z-[999999] bg-[#0c0d16] border border-white/20 rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden select-none flex flex-col resize min-w-[360px] max-w-[90vw] min-h-[380px] max-h-[85vh] w-[540px] h-[500px]"
        style={{ resize: isMinimized ? "none" : "both" }}
      >
        {/* Draggable Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#131524] border-b border-white/10 cursor-grab active:cursor-grabbing shrink-0 select-none">
          <div className="flex items-center space-x-2.5">
            <GripHorizontal className="w-4 h-4 text-white/40" />
            <div className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
              <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <span className="font-manrope font-bold text-xs text-white tracking-wide">
              Desmos® Graphing Calculator
            </span>
          </div>

          <div className="flex items-center space-x-1.5">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1.5 text-white/50 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              title={isMinimized ? "Expand" : "Minimize"}
            >
              {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minus className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-white/50 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              title="Close Calculator"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Resizable Embedded Desmos Calculator Iframe */}
        {!isMinimized && (
          <div className="w-full flex-1 bg-[#1a1a1a] relative overflow-hidden">
            <iframe
              src="https://www.desmos.com/calculator"
              className="w-full h-full border-0"
              title="Desmos Graphing Calculator"
              allow="autocomplete"
            />
          </div>
        )}
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

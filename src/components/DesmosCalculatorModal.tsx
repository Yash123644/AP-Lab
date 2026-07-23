"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, X, Minus, Maximize2, GripHorizontal } from "lucide-react";

interface DesmosCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DesmosCalculatorModal({ isOpen, onClose }: DesmosCalculatorModalProps) {
  const [isMinimized, setIsMinimized] = useState(false);

  if (!isOpen) return null;

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      className="fixed bottom-8 right-8 z-[99990] w-[92vw] max-w-[540px] bg-[#0c0d16] border border-white/20 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden select-none"
    >
      {/* Draggable Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#131524] border-b border-white/10 cursor-grab active:cursor-grabbing">
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

      {/* Embedded Desmos Calculator Iframe */}
      {!isMinimized && (
        <div className="w-full h-[440px] bg-[#1a1a1a]">
          <iframe
            src="https://www.desmos.com/calculator"
            className="w-full h-full border-0"
            title="Desmos Graphing Calculator"
            allow="autocomplete"
          />
        </div>
      )}
    </motion.div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";


export function SelectionAIPopover({ onAsk }: { onAsk: (text: string) => void }) {
  const [selection, setSelection] = useState<{ text: string; x: number; y: number } | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseUp = () => {
      // Small timeout to let the selection register
      setTimeout(() => {
        const windowSelection = window.getSelection();
        const text = windowSelection?.toString().trim();

        if (text && text.length > 0 && windowSelection && windowSelection.rangeCount > 0) {
          const range = windowSelection.getRangeAt(0);
          const rect = range.getBoundingClientRect();
          
          // Position above the center of the selection
          setSelection({
            text,
            x: rect.left + rect.width / 2,
            y: rect.top - 10,
          });
        } else {
          setSelection(null);
        }
      }, 50);
    };

    const handleMouseDown = (e: MouseEvent) => {
      // If clicking inside the popover itself, don't dismiss
      if (popoverRef.current && popoverRef.current.contains(e.target as Node)) {
        return;
      }
      setSelection(null);
    };

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <AnimatePresence>
      {selection && (
        <motion.div
          ref={popoverRef}
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed z-[100] -translate-x-1/2 -translate-y-full pb-4"
          style={{ left: selection.x, top: selection.y }}
        >
          <div className="relative group cursor-pointer">
            {/* The main pill button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onAsk(selection.text);
                setSelection(null);
                window.getSelection()?.removeAllRanges();
              }}
              className="flex items-center bg-[#2c2c2e]/95 backdrop-blur-xl px-5 py-2.5 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.6)] border border-white/10 hover:bg-[#3a3a3c]/95 active:scale-95 hover:border-white/15 transition-all cursor-pointer text-white font-medium"
            >
              <span className="text-[13px] font-sans font-medium tracking-normal text-white">Ask AI</span>
            </button>

            {/* iMessage Double Bubble Tail */}
            {/* Medium bubble */}
            <div className="absolute bottom-[-5px] left-[50%] -translate-x-1/2 w-3.5 h-3.5 bg-[#2c2c2e] border-r border-b border-white/10 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.3)] pointer-events-none group-hover:bg-[#3a3a3c] transition-colors" />
            {/* Small bubble */}
            <div className="absolute bottom-[-10px] left-[42%] w-2 h-2 bg-[#2c2c2e] border-r border-b border-white/10 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.3)] pointer-events-none group-hover:bg-[#3a3a3c] transition-colors" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


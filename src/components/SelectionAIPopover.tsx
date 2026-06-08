"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

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
          className="fixed z-[100] -translate-x-1/2 -translate-y-full pb-2"
          style={{ left: selection.x, top: selection.y }}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onAsk(selection.text);
              setSelection(null);
              window.getSelection()?.removeAllRanges();
            }}
            className="flex items-center space-x-2 bg-primary-purple px-4 py-2 rounded-full shadow-[0_10px_30px_rgba(139,92,246,0.4)] border border-primary-purple/50 hover:bg-primary-purple/90 transition-all cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            <span className="text-xs font-manrope font-bold text-white tracking-widest uppercase">Ask AI</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

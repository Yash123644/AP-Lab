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

        const anchorNode = windowSelection?.anchorNode;
        const parentElement = anchorNode?.parentElement;
        const isInsideArticle = parentElement ? !!parentElement.closest(".article-content-container") : false;

        if (isInsideArticle && text && text.length > 0 && windowSelection && windowSelection.rangeCount > 0) {
          const range = windowSelection.getRangeAt(0);
          const rect = range.getBoundingClientRect();
          
          // Position above the top-right of the selection
          setSelection({
            text,
            x: rect.right,
            y: rect.top - 6,
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
          initial={{ opacity: 0, y: 5, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed z-[100] -translate-x-full -translate-y-full pb-1.5"
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
            className="liquid-glass-strong px-3 py-1.5 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10 hover:bg-white/10 hover:border-white/15 active:scale-95 transition-all cursor-pointer text-white font-medium flex items-center justify-center"
          >
            <span className="text-xs font-sans font-medium text-white tracking-wide">Ask AI</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


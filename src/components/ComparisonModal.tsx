"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, DollarSign } from "lucide-react";

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const COMPARISON_DATA = [
  {
    feature: "Infinite AI-Powered Practice",
    apLab: "check",
    khan: "cross",
    fiveable: "cross",
    knowt: "cross",
    brilliant: "cross",
    aops: "cross"
  },
  {
    feature: "High Quality Practice Questions",
    apLab: "check",
    khan: "check",
    fiveable: "paid",
    knowt: "check",
    brilliant: "check",
    aops: "check"
  },
  {
    feature: "High Quality Study Guides",
    apLab: "check",
    khan: "check",
    fiveable: "paid",
    knowt: "check",
    brilliant: "check",
    aops: "check"
  },
  {
    feature: "Unlimited AP FRQ Practice",
    apLab: "check",
    khan: "cross",
    fiveable: "paid",
    knowt: "paid",
    brilliant: "cross",
    aops: "cross"
  },
  {
    feature: "Full-Length AP Practice Exams",
    apLab: "check",
    khan: "cross",
    fiveable: "cross",
    knowt: "paid",
    brilliant: "cross",
    aops: "cross"
  },
  {
    feature: "Gamification and Streak",
    apLab: "check",
    khan: "check",
    fiveable: "cross",
    knowt: "check",
    brilliant: "check",
    aops: "check"
  },
  {
    feature: "Visual-Based AI Assistant",
    apLab: "check",
    khan: "cross",
    fiveable: "cross",
    knowt: "cross",
    brilliant: "cross",
    aops: "cross"
  },
  {
    feature: "Practice from Custom Notes and Flashcards",
    apLab: "check",
    khan: "cross",
    fiveable: "cross",
    knowt: "paid",
    brilliant: "cross",
    aops: "cross"
  },
  {
    feature: "Interactive Lessons and Practice",
    apLab: "check",
    khan: "cross",
    fiveable: "cross",
    knowt: "cross",
    brilliant: "check",
    aops: "cross"
  },
  {
    feature: "Leaderboard",
    apLab: "check",
    khan: "cross",
    fiveable: "cross",
    knowt: "cross",
    brilliant: "cross",
    aops: "check"
  },
  {
    feature: "Authentic Competitive Math Questions",
    apLab: "check",
    khan: "cross",
    fiveable: "cross",
    knowt: "cross",
    brilliant: "cross",
    aops: "check"
  },
  {
    feature: "Intuitive Competitive Math Explanations",
    apLab: "check",
    khan: "cross",
    fiveable: "cross",
    knowt: "cross",
    brilliant: "cross",
    aops: "check"
  },
  {
    feature: "Competitive Math Visual Tracker",
    apLab: "check",
    khan: "cross",
    fiveable: "cross",
    knowt: "cross",
    brilliant: "cross",
    aops: "cross"
  },
  {
    feature: "Price (per month)",
    apLab: "Free $0.00",
    khan: "$4.00 (Khanmigo)",
    fiveable: "$27.00",
    knowt: "$24.99",
    brilliant: "$27.99",
    aops: "~$40.00 (per Book)"
  }
];

export function ComparisonModal({ isOpen, onClose }: ComparisonModalProps) {
  const renderCellContent = (value: string, isApLab = false) => {
    if (value === "check") {
      return (
        <div className={`w-7 h-7 rounded-full flex items-center justify-center mx-auto ${isApLab ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-emerald-500/10 text-emerald-400/80"}`}>
          <Check className="w-4 h-4 stroke-[2.5]" />
        </div>
      );
    }
    if (value === "cross") {
      return (
        <div className="w-7 h-7 rounded-full flex items-center justify-center mx-auto bg-white/[0.04] text-white/20">
          <X className="w-4 h-4" />
        </div>
      );
    }
    if (value === "paid") {
      return (
        <div className="w-7 h-7 rounded-full flex items-center justify-center mx-auto bg-amber-500/10 text-amber-400 border border-amber-500/20">
          <DollarSign className="w-4 h-4" />
        </div>
      );
    }
    return (
      <span className={`text-xs font-mono font-bold ${isApLab ? "text-emerald-400 font-extrabold text-sm" : "text-white/60"}`}>
        {value}
      </span>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="relative w-full max-w-6xl bg-[#060813]/95 border border-white/15 rounded-3xl overflow-hidden shadow-[0_32px_100px_rgba(0,0,0,0.95)] z-10 flex flex-col max-h-[90vh]"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 bg-white/[0.02]">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Platform Feature Matrix</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-manrope text-white tracking-tight">
                  Why AP Lab is Superior
                </h2>
              </div>

              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Matrix Table */}
            <div 
              data-lenis-prevent="true"
              className="flex-1 overflow-x-auto overflow-y-auto p-4 sm:p-6 custom-scrollbar"
            >
              <table className="w-full text-left border-collapse min-w-[760px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-4 text-xs font-mono uppercase tracking-wider text-white/40 font-bold w-[30%]">
                      Feature Comparison
                    </th>

                    {/* AP Lab Column (Highlighted) */}
                    <th className="py-4 px-4 text-center bg-blue-500/10 border-x border-t border-blue-500/30 rounded-t-2xl">
                      <div className="flex flex-col items-center justify-center">
                        <span className="text-sm font-extrabold text-blue-400 tracking-wide font-manrope flex items-center gap-1.5">
                          🚀 AP Lab
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase mt-0.5">
                          100% Free Forever
                        </span>
                      </div>
                    </th>

                    <th className="py-4 px-4 text-center text-xs font-bold text-white/80 font-manrope">
                      Khan Academy
                    </th>
                    <th className="py-4 px-4 text-center text-xs font-bold text-white/80 font-manrope">
                      Fiveable
                    </th>
                    <th className="py-4 px-4 text-center text-xs font-bold text-white/80 font-manrope">
                      Knowt
                    </th>
                    <th className="py-4 px-4 text-center text-xs font-bold text-white/80 font-manrope">
                      Brilliant
                    </th>
                    <th className="py-4 px-4 text-center text-xs font-bold text-white/80 font-manrope">
                      AoPS Online
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-white/5">
                  {COMPARISON_DATA.map((row, idx) => {
                    const isLastRow = idx === COMPARISON_DATA.length - 1;
                    return (
                      <tr 
                        key={row.feature} 
                        className={`hover:bg-white/[0.02] transition-colors ${isLastRow ? "bg-white/[0.04] font-bold" : ""}`}
                      >
                        <td className="py-3.5 px-4 text-xs sm:text-sm font-manrope font-semibold text-white/90">
                          {row.feature}
                        </td>

                        {/* AP Lab Highlight Cell */}
                        <td className={`py-3.5 px-4 text-center bg-blue-500/10 border-x border-blue-500/30 ${isLastRow ? "border-b rounded-b-2xl" : ""}`}>
                          {renderCellContent(row.apLab, true)}
                        </td>

                        <td className="py-3.5 px-4 text-center">
                          {renderCellContent(row.khan)}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          {renderCellContent(row.fiveable)}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          {renderCellContent(row.knowt)}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          {renderCellContent(row.brilliant)}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          {renderCellContent(row.aops)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-white/[0.02] text-xs font-mono text-white/40">
              <div className="flex items-center space-x-3">
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> Included</span>
                <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-amber-400" /> Paid add-on</span>
                <span className="flex items-center gap-1"><X className="w-3.5 h-3.5 text-white/30" /> Not Available</span>
              </div>
              <span>AP LAB Comparison Matrix</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

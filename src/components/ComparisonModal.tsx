"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, DollarSign, Activity } from "lucide-react";

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const COMPARISON_DATA = [
  {
    feature: "AI Assistant",
    apLab: "check",
    khan: "cross",
    fiveable: "cross",
    knowt: "cross",
    quizlet: "cross",
    brilliant: "cross"
  },
  {
    feature: "Comprehensive AP Practice Questions",
    apLab: "check",
    khan: "check",
    fiveable: "paid",
    knowt: "check",
    quizlet: "check",
    brilliant: "check"
  },
  {
    feature: "Full-Length AP Mock Exams & Timer",
    apLab: "check",
    khan: "cross",
    fiveable: "cross",
    knowt: "paid",
    quizlet: "cross",
    brilliant: "cross"
  },
  {
    feature: "Live Unit Diagnostic Analytics",
    apLab: "check",
    khan: "check",
    fiveable: "cross",
    knowt: "cross",
    quizlet: "cross",
    brilliant: "check"
  },
  {
    feature: "Interactive Unit Lessons & Formulas",
    apLab: "check",
    khan: "check",
    fiveable: "check",
    knowt: "check",
    quizlet: "cross",
    brilliant: "check"
  },
  {
    feature: "Formula & Concept Study Guides",
    apLab: "check",
    khan: "check",
    fiveable: "check",
    knowt: "check",
    quizlet: "cross",
    brilliant: "check"
  },
  {
    feature: "Gamified XP Leaderboard & Streaks",
    apLab: "check",
    khan: "check",
    fiveable: "cross",
    knowt: "check",
    quizlet: "cross",
    brilliant: "check"
  },
  {
    feature: "Price (per month)",
    apLab: "Free $0.00",
    khan: "$4.00 (Khanmigo)",
    fiveable: "$27.00",
    knowt: "$24.99",
    quizlet: "$35.99/yr",
    brilliant: "$27.99"
  }
];

export function ComparisonModal({ isOpen, onClose }: ComparisonModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const renderCellContent = (value: string, isApLab = false) => {
    if (value === "check") {
      return (
        <div className={`w-6.5 h-6.5 rounded-full flex items-center justify-center mx-auto ${isApLab ? "bg-white/20 text-white border border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.3)]" : "bg-emerald-500/10 text-emerald-400/80"}`}>
          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
        </div>
      );
    }
    if (value === "cross") {
      return (
        <div className="w-6.5 h-6.5 rounded-full flex items-center justify-center mx-auto bg-white/[0.04] text-white/20">
          <X className="w-3.5 h-3.5" />
        </div>
      );
    }
    if (value === "paid") {
      return (
        <div className="w-6.5 h-6.5 rounded-full flex items-center justify-center mx-auto bg-amber-500/10 text-amber-400 border border-amber-500/20">
          <DollarSign className="w-3.5 h-3.5" />
        </div>
      );
    }
    return (
      <span className={`text-xs font-mono font-bold ${isApLab ? "text-white font-extrabold text-sm" : "text-white/60"}`}>
        {value}
      </span>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999999] bg-[#030409] overflow-y-auto select-none flex items-center justify-center p-3 sm:p-5"
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {/* Global Style overrides to lock body scroll and hide top Navbar */}
          <style>{`
            body {
              overflow: hidden !important;
            }
            header, nav {
              opacity: 0 !important;
              pointer-events: none !important;
              transition: opacity 0.2s ease !important;
            }
          `}</style>

          {/* Modal Content Box with Smooth Slide-Up / Drag Down Animation */}
          <motion.div
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ type: "spring", damping: 32, stiffness: 280 }}
            className="relative w-full max-w-6xl bg-[#080914] border border-white/15 rounded-3xl overflow-hidden shadow-[0_32px_120px_rgba(0,0,0,1)] z-10 flex flex-col max-h-[95vh] my-auto"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-white/10 bg-white/[0.02]">
              <div>
                <h2 className="text-lg sm:text-2xl font-extrabold font-manrope text-white tracking-tight">
                  Why AP Lab is Superior
                </h2>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Matrix Table - Single page view on desktop, scrollable on small screens */}
            <div 
              data-lenis-prevent="true"
              className="flex-1 overflow-x-auto overflow-y-auto p-3 sm:p-5 custom-scrollbar"
            >
              <table className="w-full text-left border-collapse min-w-[840px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 px-4 text-xs font-mono uppercase tracking-wider text-white/40 font-bold w-[26%]">
                      Feature Comparison
                    </th>

                    {/* AP Lab Column (Highlighted in White) */}
                    <th className="py-3 px-4 text-center bg-white/[0.06] border-x border-t border-white/20 rounded-t-2xl">
                      <div className="flex flex-col items-center justify-center space-y-1">
                        <div className="flex items-center space-x-2">
                          <Activity className="w-5 h-5 text-white" />
                          <span className="text-sm font-extrabold text-white tracking-tight font-manrope">
                            AP Lab
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-white font-bold uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded-full border border-white/20">
                          100% Free
                        </span>
                      </div>
                    </th>

                    {/* Khan Academy Header Logo */}
                    <th className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center h-8">
                        <img src="/images/logos/khan.png" alt="Khan Academy" className="h-6 object-contain max-w-[120px] filter brightness-110" />
                      </div>
                    </th>

                    {/* Fiveable Header Logo */}
                    <th className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center h-8">
                        <img src="/images/logos/fiveable.png" alt="Fiveable" className="h-6 object-contain max-w-[110px] filter brightness-110" />
                      </div>
                    </th>

                    {/* Knowt Header Logo */}
                    <th className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center h-8">
                        <img src="/images/logos/knowt.png" alt="Knowt" className="h-6 object-contain max-w-[100px] filter brightness-110" />
                      </div>
                    </th>

                    {/* Quizlet Header Logo */}
                    <th className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center h-8">
                        <img src="/images/logos/quizlet.png" alt="Quizlet" className="h-6 object-contain max-w-[110px] filter brightness-110" />
                      </div>
                    </th>

                    {/* Brilliant Header Logo */}
                    <th className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center h-8">
                        <img src="/images/logos/brilliant.png" alt="Brilliant" className="h-6 object-contain max-w-[120px] filter invert brightness-200" />
                      </div>
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
                        <td className="py-3 px-4 text-xs sm:text-sm font-manrope font-semibold text-white/90">
                          {row.feature}
                        </td>

                        {/* AP Lab Highlight Cell */}
                        <td className={`py-3 px-4 text-center bg-white/[0.04] border-x border-white/15 ${isLastRow ? "border-b rounded-b-2xl" : ""}`}>
                          {renderCellContent(row.apLab, true)}
                        </td>

                        <td className="py-3 px-4 text-center">
                          {renderCellContent(row.khan)}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {renderCellContent(row.fiveable)}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {renderCellContent(row.knowt)}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {renderCellContent(row.quizlet)}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {renderCellContent(row.brilliant)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

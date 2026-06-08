"use client";

import React from "react";
import { motion } from "framer-motion";

const MOCK_SUBJECTS = [
  { name: "AP Biology", percentage: 32, color: "bg-emerald-400" },
  { name: "AP Chemistry", percentage: 24, color: "bg-blue-400" },
  { name: "AP US History", percentage: 18, color: "bg-purple-400" },
  { name: "AP Calculus AB", percentage: 14, color: "bg-amber-400" },
  { name: "AP Psychology", percentage: 8, color: "bg-pink-400" },
  { name: "Other", percentage: 4, color: "bg-gray-400" },
];

export function SubjectBreakdown() {
  return (
    <div className="w-full h-full bg-[rgba(20,20,25,0.4)] backdrop-blur-xl rounded-[24px] border border-white/10 p-6 flex flex-col">
      <h3 className="text-white/90 font-manrope font-semibold text-xl mb-6">Trending Subjects</h3>
      
      <div className="flex-1 flex flex-col justify-between space-y-4">
        {MOCK_SUBJECTS.map((subject, index) => (
          <div key={subject.name} className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white/80 font-inter text-sm font-medium">{subject.name}</span>
              <span className="text-white/60 font-mono text-sm">{subject.percentage}%</span>
            </div>
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${subject.percentage}%` }}
                transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                className={`h-full rounded-full ${subject.color}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

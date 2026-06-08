"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";

const scores = [
  {
    subject: "AP Chemistry",
    image: "/images/media__1779045527637.png",
    student: "Alex R.",
    date: "May 2025"
  },
  {
    subject: "AP Biology",
    image: "/images/media__1779045527619.png",
    student: "Sarah M.",
    date: "May 2025"
  },
  {
    subject: "AP Calculus AB",
    image: "/images/media__1779046231399.png",
    student: "David K.",
    date: "May 2025"
  }
];

export function ScoreGallery() {
  return (
    <div className="w-full mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {scores.map((score, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="group relative"
          >
            {/* Card Container */}
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden border border-white/5 bg-white/[0.02] transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.04]">
              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-purple/10 to-medical-teal/10 opacity-40 group-hover:opacity-60 transition-opacity z-10 pointer-events-none" />
              
              {/* Image Container with Liquid-like feel */}
              <div className="absolute inset-4 rounded-[20px] overflow-hidden shadow-2xl z-20 bg-black flex items-center justify-center">
                <div className="w-full h-full relative transform transition-transform duration-700 opacity-90 group-hover:opacity-100 group-hover:scale-[1.02]">
                  <Image 
                    src={score.image}
                    alt={`${score.subject} Score Report`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>

              {/* Verified Badge */}
              <div className="absolute top-8 right-8 z-30 pointer-events-none">
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="drop-shadow-[0_4px_12px_rgba(29,155,240,0.5)] relative"
                >
                  <BadgeCheck className="w-10 h-10 text-[#1D9BF0]" fill="currentColor" stroke="white" strokeWidth={1.5} />
                </motion.div>
              </div>
            </div>

            {/* Label */}
            <div className="mt-6 space-y-1 text-center md:text-left">
              <h4 className="font-instrument text-2xl text-white drop-shadow-sm">{score.subject}</h4>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{score.student}</span>
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{score.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

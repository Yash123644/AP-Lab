"use client";

import { motion } from "framer-motion";

export function PixelCourseBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#03040a]">
      {/* Subtle White Dot Matrix Grid Overlay */}
      <div 
        className="absolute -top-10 -bottom-20 left-0 right-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.28) 1.4px, transparent 1.4px)",
          backgroundSize: "32px 32px"
        }}
      />

      {/* 8-Bit Pixel Art Academic Symbols Floating & Rotating */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* 1. Pixel Pi Symbol (π) - Top Left */}
        <motion.div 
          animate={{ y: [0, -12, 0], rotate: [-6, 6, -6] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-[5%] opacity-40 text-white/90"
        >
          <svg viewBox="0 0 16 16" className="w-12 h-12" shapeRendering="crispEdges" fill="currentColor">
            <rect x="2" y="3" width="12" height="2" />
            <rect x="1" y="4" width="2" height="2" />
            <rect x="13" y="4" width="2" height="2" />
            <rect x="4" y="5" width="2" height="8" />
            <rect x="3" y="12" width="2" height="2" />
            <rect x="10" y="5" width="2" height="7" />
            <rect x="11" y="11" width="2" height="2" />
            <rect x="12" y="10" width="2" height="2" />
          </svg>
        </motion.div>

        {/* 2. Pixel Atom Orbit - Top Right */}
        <motion.div 
          animate={{ y: [0, -14, 0], rotate: [6, -6, 6] }}
          transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute top-10 right-[5%] opacity-40 text-white/90"
        >
          <svg viewBox="0 0 16 16" className="w-12 h-12" shapeRendering="crispEdges" fill="currentColor">
            <rect x="7" y="7" width="2" height="2" />
            <rect x="4" y="4" width="8" height="1" />
            <rect x="4" y="11" width="8" height="1" />
            <rect x="4" y="4" width="1" height="8" />
            <rect x="11" y="4" width="1" height="8" />
            <rect x="2" y="2" width="2" height="2" />
            <rect x="12" y="2" width="2" height="2" />
            <rect x="2" y="12" width="2" height="2" />
            <rect x="12" y="12" width="2" height="2" />
          </svg>
        </motion.div>

        {/* 3. Pixel Chemistry Flask - Mid-Hero Left */}
        <motion.div 
          animate={{ y: [0, -10, 0], rotate: [-8, 8, -8] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute top-[34%] left-[10%] opacity-45 text-white/95"
        >
          <svg viewBox="0 0 16 16" className="w-14 h-14" shapeRendering="crispEdges" fill="currentColor">
            <rect x="6" y="2" width="4" height="1" />
            <rect x="7" y="3" width="2" height="4" />
            <rect x="6" y="7" width="4" height="2" />
            <rect x="5" y="9" width="6" height="2" />
            <rect x="4" y="11" width="8" height="2" />
            <rect x="3" y="13" width="10" height="2" />
            <rect x="7" y="10" width="1" height="1" fill="#03040a" />
            <rect x="9" y="12" width="1" height="1" fill="#03040a" />
          </svg>
        </motion.div>

        {/* 4. Pixel DNA Helix Ladder - Mid-Hero Right */}
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [8, -8, 8] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="absolute top-[34%] right-[10%] opacity-45 text-white/95"
        >
          <svg viewBox="0 0 16 16" className="w-14 h-14" shapeRendering="crispEdges" fill="currentColor">
            <rect x="3" y="2" width="2" height="2" />
            <rect x="5" y="4" width="2" height="2" />
            <rect x="7" y="6" width="2" height="4" />
            <rect x="5" y="10" width="2" height="2" />
            <rect x="3" y="12" width="2" height="2" />
            <rect x="11" y="2" width="2" height="2" />
            <rect x="9" y="4" width="2" height="2" />
            <rect x="7" y="6" width="2" height="4" />
            <rect x="9" y="10" width="2" height="2" />
            <rect x="11" y="12" width="2" height="2" />
            <rect x="5" y="3" width="6" height="1" />
            <rect x="7" y="5" width="2" height="1" />
            <rect x="7" y="10" width="2" height="1" />
            <rect x="5" y="12" width="6" height="1" />
          </svg>
        </motion.div>

        {/* 5. Pixel Infinity Loop - Middle Outer Left */}
        <motion.div 
          animate={{ y: [0, -11, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 7.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="absolute top-[52%] left-[4%] opacity-35 text-white/80"
        >
          <svg viewBox="0 0 16 16" className="w-12 h-12" shapeRendering="crispEdges" fill="currentColor">
            <rect x="2" y="6" width="4" height="4" />
            <rect x="10" y="6" width="4" height="4" />
            <rect x="3" y="7" width="2" height="2" fill="#03040a" />
            <rect x="11" y="7" width="2" height="2" fill="#03040a" />
            <rect x="6" y="7" width="4" height="2" />
          </svg>
        </motion.div>

        {/* 6. Pixel Diamond Gem - Middle Outer Right */}
        <motion.div 
          animate={{ y: [0, -13, 0], rotate: [5, -5, 5] }}
          transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-[52%] right-[4%] opacity-35 text-white/80"
        >
          <svg viewBox="0 0 16 16" className="w-12 h-12" shapeRendering="crispEdges" fill="currentColor">
            <rect x="5" y="3" width="6" height="2" />
            <rect x="3" y="5" width="10" height="2" />
            <rect x="4" y="7" width="8" height="2" />
            <rect x="5" y="9" width="6" height="2" />
            <rect x="6" y="11" width="4" height="2" />
            <rect x="7" y="13" width="2" height="1" />
          </svg>
        </motion.div>

        {/* 7. Pixel Key - Lower Left */}
        <motion.div 
          animate={{ y: [0, -10, 0], rotate: [-7, 7, -7] }}
          transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut", delay: 2.0 }}
          className="absolute top-[68%] left-[8%] opacity-30 text-white/70"
        >
          <svg viewBox="0 0 16 16" className="w-11 h-11" shapeRendering="crispEdges" fill="currentColor">
            <rect x="6" y="2" width="4" height="4" />
            <rect x="7" y="3" width="2" height="2" fill="#03040a" />
            <rect x="7" y="6" width="2" height="8" />
            <rect x="9" y="8" width="2" height="1" />
            <rect x="9" y="11" width="2" height="1" />
          </svg>
        </motion.div>

        {/* 8. Pixel Globe - Lower Right */}
        <motion.div 
          animate={{ y: [0, -12, 0], rotate: [7, -7, 7] }}
          transition={{ duration: 8.0, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
          className="absolute top-[68%] right-[8%] opacity-30 text-white/70"
        >
          <svg viewBox="0 0 16 16" className="w-11 h-11" shapeRendering="crispEdges" fill="currentColor">
            <rect x="5" y="2" width="6" height="12" />
            <rect x="3" y="4" width="10" height="8" />
            <rect x="2" y="5" width="12" height="6" />
            <rect x="2" y="8" width="12" height="1" fill="#03040a" />
            <rect x="8" y="2" width="1" height="12" fill="#03040a" />
          </svg>
        </motion.div>

      </div>
    </div>
  );
}

"use client";

import React from "react";

export function PixelCourseBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#03040a]">
      {/* Subtle White Dot Matrix Grid Overlay */}
      <div 
        className="absolute -top-10 -bottom-20 left-0 right-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.25) 1.2px, transparent 1.2px)",
          backgroundSize: "32px 32px"
        }}
      />

      {/* Static 8-Bit Pixel Art Academic Symbols Scattered Evenly Across Layout Grid */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* 1. Pixel Pi Symbol (π) - Top Far Left */}
        <div className="absolute top-8 left-[4%] opacity-35 text-white/90">
          <svg viewBox="0 0 16 16" className="w-11 h-11" shapeRendering="crispEdges" fill="currentColor">
            <rect x="2" y="3" width="12" height="2" />
            <rect x="1" y="4" width="2" height="2" />
            <rect x="13" y="4" width="2" height="2" />
            <rect x="4" y="5" width="2" height="8" />
            <rect x="3" y="12" width="2" height="2" />
            <rect x="10" y="5" width="2" height="7" />
            <rect x="11" y="11" width="2" height="2" />
            <rect x="12" y="10" width="2" height="2" />
          </svg>
        </div>

        {/* 2. Pixel Atom Orbit - Top Mid-Left */}
        <div className="absolute top-10 left-[26%] opacity-30 text-white/80">
          <svg viewBox="0 0 16 16" className="w-10 h-10" shapeRendering="crispEdges" fill="currentColor">
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
        </div>

        {/* 3. Pixel Chemistry Flask - Top Mid-Right */}
        <div className="absolute top-10 right-[26%] opacity-35 text-white/85">
          <svg viewBox="0 0 16 16" className="w-11 h-11" shapeRendering="crispEdges" fill="currentColor">
            <rect x="6" y="2" width="4" height="1" />
            <rect x="7" y="3" width="2" height="4" />
            <rect x="6" y="7" width="4" height="2" />
            <rect x="5" y="9" width="6" height="2" />
            <rect x="4" y="11" width="8" height="2" />
            <rect x="3" y="13" width="10" height="2" />
            <rect x="7" y="10" width="1" height="1" fill="#03040a" />
            <rect x="9" y="12" width="1" height="1" fill="#03040a" />
          </svg>
        </div>

        {/* 4. Pixel DNA Helix Ladder - Top Far Right */}
        <div className="absolute top-8 right-[4%] opacity-35 text-white/90">
          <svg viewBox="0 0 16 16" className="w-12 h-12" shapeRendering="crispEdges" fill="currentColor">
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
        </div>

        {/* 5. Pixel Infinity Loop - Upper Mid Left */}
        <div className="absolute top-[28%] left-[6%] opacity-35 text-white/80">
          <svg viewBox="0 0 16 16" className="w-10 h-10" shapeRendering="crispEdges" fill="currentColor">
            <rect x="2" y="6" width="4" height="4" />
            <rect x="10" y="6" width="4" height="4" />
            <rect x="3" y="7" width="2" height="2" fill="#03040a" />
            <rect x="11" y="7" width="2" height="2" fill="#03040a" />
            <rect x="6" y="7" width="4" height="2" />
          </svg>
        </div>

        {/* 6. Pixel Gem Diamond - Upper Mid Center Left */}
        <div className="absolute top-[26%] left-[45%] opacity-25 text-white/70">
          <svg viewBox="0 0 16 16" className="w-10 h-10" shapeRendering="crispEdges" fill="currentColor">
            <rect x="5" y="3" width="6" height="2" />
            <rect x="3" y="5" width="10" height="2" />
            <rect x="4" y="7" width="8" height="2" />
            <rect x="5" y="9" width="6" height="2" />
            <rect x="6" y="11" width="4" height="2" />
            <rect x="7" y="13" width="2" height="1" />
          </svg>
        </div>

        {/* 7. Pixel Key - Upper Mid Right */}
        <div className="absolute top-[28%] right-[6%] opacity-35 text-white/80">
          <svg viewBox="0 0 16 16" className="w-10 h-10" shapeRendering="crispEdges" fill="currentColor">
            <rect x="6" y="2" width="4" height="4" />
            <rect x="7" y="3" width="2" height="2" fill="#03040a" />
            <rect x="7" y="6" width="2" height="8" />
            <rect x="9" y="8" width="2" height="1" />
            <rect x="9" y="11" width="2" height="1" />
          </svg>
        </div>

        {/* 8. Pixel Globe - Center Left */}
        <div className="absolute top-[48%] left-[3%] opacity-30 text-white/75">
          <svg viewBox="0 0 16 16" className="w-10 h-10" shapeRendering="crispEdges" fill="currentColor">
            <rect x="5" y="2" width="6" height="12" />
            <rect x="3" y="4" width="10" height="8" />
            <rect x="2" y="5" width="12" height="6" />
            <rect x="2" y="8" width="12" height="1" fill="#03040a" />
            <rect x="8" y="2" width="1" height="12" fill="#03040a" />
          </svg>
        </div>

        {/* 9. Pixel Sigma (Σ) - Center Mid Left */}
        <div className="absolute top-[46%] left-[22%] opacity-30 text-white/80">
          <svg viewBox="0 0 16 16" className="w-10 h-10" shapeRendering="crispEdges" fill="currentColor">
            <rect x="3" y="2" width="10" height="2" />
            <rect x="3" y="4" width="2" height="2" />
            <rect x="5" y="6" width="2" height="2" />
            <rect x="7" y="8" width="2" height="2" />
            <rect x="5" y="10" width="2" height="2" />
            <rect x="3" y="12" width="10" height="2" />
          </svg>
        </div>

        {/* 10. Pixel Integral (∫) - Center Mid Right */}
        <div className="absolute top-[46%] right-[22%] opacity-30 text-white/80">
          <svg viewBox="0 0 16 16" className="w-10 h-10" shapeRendering="crispEdges" fill="currentColor">
            <rect x="9" y="2" width="4" height="2" />
            <rect x="7" y="4" width="2" height="8" />
            <rect x="3" y="12" width="4" height="2" />
          </svg>
        </div>

        {/* 11. Pixel Telescope - Center Right */}
        <div className="absolute top-[48%] right-[3%] opacity-30 text-white/75">
          <svg viewBox="0 0 16 16" className="w-10 h-10" shapeRendering="crispEdges" fill="currentColor">
            <rect x="3" y="4" width="8" height="4" />
            <rect x="11" y="5" width="3" height="2" />
            <rect x="6" y="8" width="2" height="6" />
          </svg>
        </div>

        {/* 12. Pixel Mortarboard Cap - Lower Mid Left */}
        <div className="absolute top-[68%] left-[7%] opacity-30 text-white/75">
          <svg viewBox="0 0 16 16" className="w-10 h-10" shapeRendering="crispEdges" fill="currentColor">
            <rect x="2" y="5" width="12" height="2" />
            <rect x="5" y="3" width="6" height="2" />
            <rect x="5" y="7" width="6" height="4" />
          </svg>
        </div>

        {/* 13. Pixel Microscope - Lower Center Left */}
        <div className="absolute top-[66%] left-[30%] opacity-25 text-white/70">
          <svg viewBox="0 0 16 16" className="w-10 h-10" shapeRendering="crispEdges" fill="currentColor">
            <rect x="6" y="2" width="4" height="5" />
            <rect x="5" y="7" width="6" height="2" />
            <rect x="7" y="9" width="2" height="4" />
            <rect x="4" y="13" width="8" height="2" />
          </svg>
        </div>

        {/* 14. Pixel Lightbulb - Lower Center Right */}
        <div className="absolute top-[66%] right-[30%] opacity-25 text-white/70">
          <svg viewBox="0 0 16 16" className="w-10 h-10" shapeRendering="crispEdges" fill="currentColor">
            <rect x="5" y="3" width="6" height="6" />
            <rect x="6" y="9" width="4" height="2" />
            <rect x="7" y="11" width="2" height="2" />
          </svg>
        </div>

        {/* 15. Pixel Planet Saturn - Lower Mid Right */}
        <div className="absolute top-[68%] right-[7%] opacity-30 text-white/75">
          <svg viewBox="0 0 16 16" className="w-10 h-10" shapeRendering="crispEdges" fill="currentColor">
            <rect x="6" y="5" width="4" height="6" />
            <rect x="2" y="7" width="12" height="2" />
          </svg>
        </div>

      </div>
    </div>
  );
}

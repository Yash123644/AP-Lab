"use client";

import React from "react";

export function PixelCourseBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#03040a]">
      {/* Subtle White Dot Matrix Grid Overlay */}
      <div 
        className="absolute -top-10 -bottom-20 left-0 right-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.2px, transparent 1.2px)",
          backgroundSize: "32px 32px"
        }}
      />

      {/* 30+ Static 8-Bit Pixel Art Academic Symbols Scattered Evenly Across Layout Grid */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Row 1 */}
        <div className="absolute top-6 left-[3%] opacity-20 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="2" y="3" width="12" height="2" /><rect x="1" y="4" width="2" height="2" /><rect x="13" y="4" width="2" height="2" /><rect x="4" y="5" width="2" height="8" /><rect x="3" y="12" width="2" height="2" /><rect x="10" y="5" width="2" height="7" /><rect x="11" y="11" width="2" height="2" /><rect x="12" y="10" width="2" height="2" />
          </svg>
        </div>
        <div className="absolute top-8 left-[18%] opacity-15 text-white">
          <svg viewBox="0 0 16 16" className="w-8 h-8" shapeRendering="crispEdges" fill="currentColor">
            <rect x="7" y="7" width="2" height="2" /><rect x="4" y="4" width="8" height="1" /><rect x="4" y="11" width="8" height="1" /><rect x="4" y="4" width="1" height="8" /><rect x="11" y="4" width="1" height="8" /><rect x="2" y="2" width="2" height="2" /><rect x="12" y="2" width="2" height="2" /><rect x="2" y="12" width="2" height="2" /><rect x="12" y="12" width="2" height="2" />
          </svg>
        </div>
        <div className="absolute top-6 left-[34%] opacity-20 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="6" y="2" width="4" height="1" /><rect x="7" y="3" width="2" height="4" /><rect x="6" y="7" width="4" height="2" /><rect x="5" y="9" width="6" height="2" /><rect x="4" y="11" width="8" height="2" /><rect x="3" y="13" width="10" height="2" />
          </svg>
        </div>
        <div className="absolute top-8 left-[52%] opacity-15 text-white">
          <svg viewBox="0 0 16 16" className="w-8 h-8" shapeRendering="crispEdges" fill="currentColor">
            <rect x="3" y="2" width="2" height="2" /><rect x="5" y="4" width="2" height="2" /><rect x="7" y="6" width="2" height="4" /><rect x="5" y="10" width="2" height="2" /><rect x="3" y="12" width="2" height="2" /><rect x="11" y="2" width="2" height="2" /><rect x="9" y="4" width="2" height="2" /><rect x="9" y="10" width="2" height="2" /><rect x="11" y="12" width="2" height="2" />
          </svg>
        </div>
        <div className="absolute top-6 left-[70%] opacity-20 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="2" y="6" width="4" height="4" /><rect x="10" y="6" width="4" height="4" /><rect x="6" y="7" width="4" height="2" />
          </svg>
        </div>
        <div className="absolute top-8 right-[4%] opacity-20 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="5" y="3" width="6" height="2" /><rect x="3" y="5" width="10" height="2" /><rect x="4" y="7" width="8" height="2" /><rect x="5" y="9" width="6" height="2" /><rect x="6" y="11" width="4" height="2" />
          </svg>
        </div>

        {/* Row 2 */}
        <div className="absolute top-[20%] left-[6%] opacity-15 text-white">
          <svg viewBox="0 0 16 16" className="w-8 h-8" shapeRendering="crispEdges" fill="currentColor">
            <rect x="6" y="2" width="4" height="4" /><rect x="7" y="6" width="2" height="8" /><rect x="9" y="8" width="2" height="1" /><rect x="9" y="11" width="2" height="1" />
          </svg>
        </div>
        <div className="absolute top-[18%] left-[24%] opacity-20 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="5" y="2" width="6" height="12" /><rect x="3" y="4" width="10" height="8" /><rect x="2" y="5" width="12" height="6" />
          </svg>
        </div>
        <div className="absolute top-[22%] left-[42%] opacity-15 text-white">
          <svg viewBox="0 0 16 16" className="w-8 h-8" shapeRendering="crispEdges" fill="currentColor">
            <rect x="3" y="2" width="10" height="2" /><rect x="3" y="4" width="2" height="2" /><rect x="5" y="6" width="2" height="2" /><rect x="7" y="8" width="2" height="2" /><rect x="5" y="10" width="2" height="2" /><rect x="3" y="12" width="10" height="2" />
          </svg>
        </div>
        <div className="absolute top-[20%] left-[62%] opacity-20 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="9" y="2" width="4" height="2" /><rect x="7" y="4" width="2" height="8" /><rect x="3" y="12" width="4" height="2" />
          </svg>
        </div>
        <div className="absolute top-[22%] right-[14%] opacity-15 text-white">
          <svg viewBox="0 0 16 16" className="w-8 h-8" shapeRendering="crispEdges" fill="currentColor">
            <rect x="3" y="4" width="8" height="4" /><rect x="11" y="5" width="3" height="2" /><rect x="6" y="8" width="2" height="6" />
          </svg>
        </div>

        {/* Row 3 */}
        <div className="absolute top-[38%] left-[2%] opacity-20 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="2" y="5" width="12" height="2" /><rect x="5" y="3" width="6" height="2" /><rect x="5" y="7" width="6" height="4" />
          </svg>
        </div>
        <div className="absolute top-[36%] left-[16%] opacity-15 text-white">
          <svg viewBox="0 0 16 16" className="w-8 h-8" shapeRendering="crispEdges" fill="currentColor">
            <rect x="6" y="2" width="4" height="5" /><rect x="5" y="7" width="6" height="2" /><rect x="7" y="9" width="2" height="4" /><rect x="4" y="13" width="8" height="2" />
          </svg>
        </div>
        <div className="absolute top-[40%] left-[32%] opacity-20 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="5" y="3" width="6" height="6" /><rect x="6" y="9" width="4" height="2" /><rect x="7" y="11" width="2" height="2" />
          </svg>
        </div>
        <div className="absolute top-[36%] left-[50%] opacity-15 text-white">
          <svg viewBox="0 0 16 16" className="w-8 h-8" shapeRendering="crispEdges" fill="currentColor">
            <rect x="6" y="5" width="4" height="6" /><rect x="2" y="7" width="12" height="2" />
          </svg>
        </div>
        <div className="absolute top-[40%] left-[68%] opacity-20 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="2" y="3" width="12" height="2" /><rect x="4" y="5" width="2" height="8" /><rect x="10" y="5" width="2" height="7" />
          </svg>
        </div>
        <div className="absolute top-[38%] right-[3%] opacity-15 text-white">
          <svg viewBox="0 0 16 16" className="w-8 h-8" shapeRendering="crispEdges" fill="currentColor">
            <rect x="7" y="7" width="2" height="2" /><rect x="4" y="4" width="8" height="1" /><rect x="4" y="11" width="8" height="1" />
          </svg>
        </div>

        {/* Row 4 */}
        <div className="absolute top-[56%] left-[8%] opacity-15 text-white">
          <svg viewBox="0 0 16 16" className="w-8 h-8" shapeRendering="crispEdges" fill="currentColor">
            <rect x="6" y="2" width="4" height="1" /><rect x="7" y="3" width="2" height="4" /><rect x="6" y="7" width="4" height="2" />
          </svg>
        </div>
        <div className="absolute top-[54%] left-[26%] opacity-20 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="3" y="2" width="2" height="2" /><rect x="5" y="4" width="2" height="2" /><rect x="7" y="6" width="2" height="4" />
          </svg>
        </div>
        <div className="absolute top-[58%] left-[44%] opacity-15 text-white">
          <svg viewBox="0 0 16 16" className="w-8 h-8" shapeRendering="crispEdges" fill="currentColor">
            <rect x="2" y="6" width="4" height="4" /><rect x="10" y="6" width="4" height="4" />
          </svg>
        </div>
        <div className="absolute top-[54%] left-[64%] opacity-20 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="5" y="3" width="6" height="2" /><rect x="3" y="5" width="10" height="2" />
          </svg>
        </div>
        <div className="absolute top-[56%] right-[10%] opacity-15 text-white">
          <svg viewBox="0 0 16 16" className="w-8 h-8" shapeRendering="crispEdges" fill="currentColor">
            <rect x="6" y="2" width="4" height="4" /><rect x="7" y="6" width="2" height="8" />
          </svg>
        </div>

        {/* Row 5 */}
        <div className="absolute top-[74%] left-[4%] opacity-20 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="5" y="2" width="6" height="12" /><rect x="3" y="4" width="10" height="8" />
          </svg>
        </div>
        <div className="absolute top-[72%] left-[20%] opacity-15 text-white">
          <svg viewBox="0 0 16 16" className="w-8 h-8" shapeRendering="crispEdges" fill="currentColor">
            <rect x="3" y="2" width="10" height="2" /><rect x="5" y="6" width="2" height="2" />
          </svg>
        </div>
        <div className="absolute top-[76%] left-[38%] opacity-20 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="9" y="2" width="4" height="2" /><rect x="7" y="4" width="2" height="8" />
          </svg>
        </div>
        <div className="absolute top-[72%] left-[58%] opacity-15 text-white">
          <svg viewBox="0 0 16 16" className="w-8 h-8" shapeRendering="crispEdges" fill="currentColor">
            <rect x="3" y="4" width="8" height="4" /><rect x="11" y="5" width="3" height="2" />
          </svg>
        </div>
        <div className="absolute top-[75%] left-[76%] opacity-20 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="2" y="5" width="12" height="2" /><rect x="5" y="3" width="6" height="2" />
          </svg>
        </div>
        <div className="absolute top-[74%] right-[4%] opacity-15 text-white">
          <svg viewBox="0 0 16 16" className="w-8 h-8" shapeRendering="crispEdges" fill="currentColor">
            <rect x="6" y="2" width="4" height="5" /><rect x="5" y="7" width="6" height="2" />
          </svg>
        </div>

      </div>
    </div>
  );
}

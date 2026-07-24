"use client";

import { useProgress } from "@/context/ProgressContext";

export function PixelCourseBackground() {
  const { progress } = useProgress();
  const isLightMode = progress?.theme === "light";

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Subtle Dot Matrix Grid Overlay (White dots in Dark Mode, Light Black dots in Light Mode) */}
      <div 
        className="absolute -top-10 -bottom-20 left-0 right-0 pointer-events-none"
        style={{
          backgroundImage: isLightMode 
            ? "radial-gradient(circle, rgba(0, 0, 0, 0.18) 1.2px, transparent 1.2px)" 
            : "radial-gradient(circle, rgba(255, 255, 255, 0.25) 1.2px, transparent 1.2px)",
          backgroundSize: "32px 32px",
          opacity: isLightMode ? 0.35 : 0.15
        }}
      />

      {/* Static Pixel Art Icons From Uploaded Reference Image (Greyscale Grid) */}
      <div className="absolute inset-0 pointer-events-none">

        {/* 1. Backpack - Top Left */}
        <div className="absolute top-8 left-[4%] opacity-20 text-white">
          <svg viewBox="0 0 16 16" className="w-10 h-10" shapeRendering="crispEdges" fill="currentColor">
            <rect x="5" y="2" width="6" height="2" />
            <rect x="4" y="4" width="8" height="9" />
            <rect x="3" y="6" width="1" height="6" />
            <rect x="12" y="6" width="1" height="6" />
            <rect x="6" y="6" width="4" height="2" />
            <rect x="5" y="9" width="6" height="3" />
          </svg>
        </div>

        {/* 2. Paper Sheet - Top Mid Left */}
        <div className="absolute top-10 left-[22%] opacity-15 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="3" y="2" width="10" height="12" />
            <rect x="5" y="4" width="6" height="1" fill="#000" opacity="0.3" />
            <rect x="5" y="6" width="6" height="1" fill="#000" opacity="0.3" />
            <rect x="5" y="8" width="6" height="1" fill="#000" opacity="0.3" />
            <rect x="11" y="12" width="2" height="2" fill="#000" opacity="0.4" />
          </svg>
        </div>

        {/* 3. Green Apple - Top Center */}
        <div className="absolute top-8 left-[42%] opacity-20 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="8" y="2" width="1" height="3" />
            <rect x="9" y="2" width="2" height="1" />
            <rect x="4" y="5" width="8" height="7" />
            <rect x="3" y="6" width="1" height="5" />
            <rect x="12" y="6" width="1" height="5" />
            <rect x="5" y="12" width="2" height="1" />
            <rect x="9" y="12" width="2" height="1" />
          </svg>
        </div>

        {/* 4. School Bell - Top Mid Right */}
        <div className="absolute top-10 left-[64%] opacity-15 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="7" y="2" width="2" height="2" />
            <rect x="6" y="4" width="4" height="2" />
            <rect x="5" y="6" width="6" height="4" />
            <rect x="3" y="10" width="10" height="2" />
            <rect x="7" y="12" width="2" height="2" />
          </svg>
        </div>

        {/* 5. Scissors - Top Right */}
        <div className="absolute top-8 right-[5%] opacity-20 text-white">
          <svg viewBox="0 0 16 16" className="w-10 h-10" shapeRendering="crispEdges" fill="currentColor">
            <rect x="3" y="2" width="3" height="3" />
            <rect x="10" y="2" width="3" height="3" />
            <rect x="5" y="5" width="2" height="2" />
            <rect x="9" y="5" width="2" height="2" />
            <rect x="7" y="7" width="2" height="2" />
            <rect x="5" y="9" width="2" height="5" />
            <rect x="9" y="9" width="2" height="5" />
          </svg>
        </div>

        {/* 6. Pencil - Mid Upper Left */}
        <div className="absolute top-[28%] left-[7%] opacity-15 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="7" y="2" width="2" height="3" />
            <rect x="6" y="5" width="4" height="7" />
            <rect x="7" y="12" width="2" height="2" />
            <rect x="7.5" y="14" width="1" height="1" />
          </svg>
        </div>

        {/* 7. Paint Palette - Mid Upper Center Left */}
        <div className="absolute top-[26%] left-[28%] opacity-20 text-white">
          <svg viewBox="0 0 16 16" className="w-10 h-10" shapeRendering="crispEdges" fill="currentColor">
            <rect x="4" y="3" width="8" height="9" />
            <rect x="3" y="5" width="1" height="5" />
            <rect x="12" y="5" width="1" height="3" />
            <rect x="5" y="5" width="2" height="2" fill="#000" opacity="0.3" />
            <rect x="9" y="5" width="2" height="2" fill="#000" opacity="0.3" />
            <rect x="6" y="9" width="2" height="2" fill="#000" opacity="0.3" />
          </svg>
        </div>

        {/* 8. Calculator - Mid Upper Center Right */}
        <div className="absolute top-[26%] left-[54%] opacity-15 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="3" y="2" width="10" height="12" />
            <rect x="5" y="4" width="6" height="2" fill="#000" opacity="0.4" />
            <rect x="5" y="7" width="2" height="2" fill="#000" opacity="0.3" />
            <rect x="9" y="7" width="2" height="2" fill="#000" opacity="0.3" />
            <rect x="5" y="10" width="2" height="2" fill="#000" opacity="0.3" />
            <rect x="9" y="10" width="2" height="2" fill="#000" opacity="0.3" />
          </svg>
        </div>

        {/* 9. School Bus - Mid Upper Right */}
        <div className="absolute top-[28%] right-[6%] opacity-20 text-white">
          <svg viewBox="0 0 16 16" className="w-10 h-10" shapeRendering="crispEdges" fill="currentColor">
            <rect x="2" y="4" width="12" height="7" />
            <rect x="4" y="6" width="2" height="2" fill="#000" opacity="0.4" />
            <rect x="7" y="6" width="2" height="2" fill="#000" opacity="0.4" />
            <rect x="10" y="6" width="2" height="2" fill="#000" opacity="0.4" />
            <rect x="4" y="11" width="2" height="2" />
            <rect x="10" y="11" width="2" height="2" />
          </svg>
        </div>

        {/* 10. Spiral Notebook - Center Left */}
        <div className="absolute top-[50%] left-[4%] opacity-20 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="5" y="2" width="8" height="12" />
            <rect x="3" y="3" width="2" height="1" />
            <rect x="3" y="6" width="2" height="1" />
            <rect x="3" y="9" width="2" height="1" />
            <rect x="3" y="12" width="2" height="1" />
            <rect x="8" y="5" width="3" height="3" fill="#000" opacity="0.3" />
          </svg>
        </div>

        {/* 11. Book - Center Mid Left */}
        <div className="absolute top-[48%] left-[25%] opacity-15 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="3" y="3" width="10" height="10" />
            <rect x="5" y="5" width="4" height="2" fill="#000" opacity="0.4" />
            <rect x="3" y="11" width="10" height="2" fill="#000" opacity="0.2" />
          </svg>
        </div>

        {/* 12. Magnifying Glass - Center Mid Right */}
        <div className="absolute top-[50%] left-[48%] opacity-20 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="3" y="3" width="6" height="6" />
            <rect x="4" y="4" width="4" height="4" fill="#000" opacity="0.3" />
            <rect x="8" y="8" width="3" height="3" />
            <rect x="11" y="11" width="3" height="3" />
          </svg>
        </div>

        {/* 13. Alarm Clock - Center Right */}
        <div className="absolute top-[48%] left-[70%] opacity-15 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="3" y="2" width="2" height="2" />
            <rect x="11" y="2" width="2" height="2" />
            <rect x="4" y="4" width="8" height="8" />
            <rect x="7" y="6" width="1" height="3" fill="#000" opacity="0.5" />
            <rect x="7" y="8" width="3" height="1" fill="#000" opacity="0.5" />
            <rect x="4" y="12" width="2" height="2" />
            <rect x="10" y="12" width="2" height="2" />
          </svg>
        </div>

        {/* 14. Pencil Holder - Lower Mid Left */}
        <div className="absolute top-[72%] left-[12%] opacity-20 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="5" y="2" width="1" height="5" />
            <rect x="7" y="3" width="1" height="4" />
            <rect x="9" y="2" width="1" height="5" />
            <rect x="4" y="7" width="8" height="7" />
          </svg>
        </div>

        {/* 15. Glue Bottle - Lower Center */}
        <div className="absolute top-[70%] left-[44%] opacity-15 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="7" y="2" width="2" height="2" />
            <rect x="6" y="4" width="4" height="2" />
            <rect x="5" y="6" width="6" height="8" />
            <rect x="6" y="8" width="4" height="3" fill="#000" opacity="0.3" />
          </svg>
        </div>

        {/* 16. Ruler - Lower Right */}
        <div className="absolute top-[72%] right-[8%] opacity-20 text-white">
          <svg viewBox="0 0 16 16" className="w-9 h-9" shapeRendering="crispEdges" fill="currentColor">
            <rect x="4" y="2" width="8" height="12" />
            <rect x="4" y="4" width="2" height="1" fill="#000" opacity="0.5" />
            <rect x="4" y="6" width="3" height="1" fill="#000" opacity="0.5" />
            <rect x="4" y="8" width="2" height="1" fill="#000" opacity="0.5" />
            <rect x="4" y="10" width="3" height="1" fill="#000" opacity="0.5" />
            <rect x="4" y="12" width="2" height="1" fill="#000" opacity="0.5" />
          </svg>
        </div>

      </div>
    </div>
  );
}

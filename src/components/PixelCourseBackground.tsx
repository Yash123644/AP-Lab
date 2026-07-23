"use client";

export function PixelCourseBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#03040a]">
      {/* Crisp White Dot Matrix Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-55 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.35) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px"
        }}
      />

      {/* High-Precision, Evenly Spread Academic Symbols */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* 1. Clean Biological Cell - Top Left Outer Buffer */}
        <div className="absolute top-10 left-[4%] opacity-35">
          <svg viewBox="0 0 32 32" className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="16" cy="16" r="12" strokeDasharray="4 2" />
            <circle cx="16" cy="16" r="5" fill="currentColor" fillOpacity="0.2" />
            <circle cx="16" cy="16" r="2" fill="currentColor" />
            <circle cx="9" cy="12" r="1.5" fill="currentColor" />
            <circle cx="23" cy="18" r="1.5" fill="currentColor" />
          </svg>
        </div>

        {/* 2. Sleek Chemistry Flask - Top Right Outer Buffer */}
        <div className="absolute top-10 right-[4%] opacity-35">
          <svg viewBox="0 0 32 32" className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4h8" />
            <path d="M14 4v6l-7 12a2 2 0 0 0 1.7 3h14.6a2 2 0 0 0 1.7-3L18 10V4" />
            <path d="M9.5 17c2.5-1 5 1 7.5 0s5-1 7.5 0" strokeDasharray="2 1" />
            <circle cx="16" cy="13" r="1" fill="currentColor" />
            <circle cx="18" cy="9" r="0.8" fill="currentColor" />
          </svg>
        </div>

        {/* 3. Clearly Recognizable DNA Double Helix - Moved Down to Mid-Hero Left */}
        <div className="absolute top-[36%] left-[12%] opacity-40">
          <svg viewBox="0 0 32 32" className="w-14 h-14 text-white/90" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {/* Strand A Wave */}
            <path d="M8 4 C16 10, 16 22, 24 28" />
            {/* Strand B Wave */}
            <path d="M24 4 C16 10, 16 22, 8 28" />
            {/* Base Pairs (rungs) */}
            <line x1="10" y1="6" x2="22" y2="6" strokeWidth="1.5" />
            <line x1="12" y1="10" x2="20" y2="10" strokeWidth="1.5" />
            <line x1="15" y1="14" x2="17" y2="14" strokeWidth="1.5" />
            <line x1="15" y1="18" x2="17" y2="18" strokeWidth="1.5" />
            <line x1="12" y1="22" x2="20" y2="22" strokeWidth="1.5" />
            <line x1="10" y1="26" x2="22" y2="26" strokeWidth="1.5" />
          </svg>
        </div>

        {/* 4. Optical Microscope - Moved Down to Mid-Hero Right */}
        <div className="absolute top-[36%] right-[12%] opacity-40">
          <svg viewBox="0 0 32 32" className="w-14 h-14 text-white/90" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="13" y="4" width="6" height="8" rx="1" fill="currentColor" fillOpacity="0.2" />
            <path d="M16 12v6" />
            <path d="M10 18h12" />
            <path d="M20 18c0 5-4 8-9 8" />
            <rect x="7" y="26" width="16" height="2.5" rx="1" fill="currentColor" fillOpacity="0.4" />
            <circle cx="16" cy="8" r="1.5" fill="currentColor" />
          </svg>
        </div>

        {/* 5. Atom Orbit System - Middle Outer Left */}
        <div className="absolute top-[52%] left-[4%] opacity-35">
          <svg viewBox="0 0 24 24" className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.6">
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-30 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        </div>

        {/* 6. Graduation Mortarboard & Ribbon - Middle Outer Right */}
        <div className="absolute top-[52%] right-[4%] opacity-35">
          <svg viewBox="0 0 24 24" className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M22 10L12 5L2 10l10 5l10-5z" fill="currentColor" fillOpacity="0.2" />
            <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
            <path d="M20 10v7" />
          </svg>
        </div>

        {/* 7. Astronomical Telescope - Lower Left */}
        <div className="absolute top-[68%] left-[10%] opacity-30">
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-white/70" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M4 11l15-7 2 4-15 7z" fill="currentColor" fillOpacity="0.2" />
            <line x1="12" y1="12" x2="8" y2="21" />
            <line x1="12" y1="12" x2="16" y2="21" />
          </svg>
        </div>

        {/* 8. Idea Lightbulb - Lower Right */}
        <div className="absolute top-[68%] right-[10%] opacity-30">
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-white/70" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.55.59 2.96 1.5 4 .76.76 1.23 1.52 1.41 2.5h6.18z" fill="currentColor" fillOpacity="0.2" />
          </svg>
        </div>

      </div>
    </div>
  );
}

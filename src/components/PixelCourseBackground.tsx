"use client";

export function PixelCourseBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#03040a]">
      {/* Subtle White Dot Matrix Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-35 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.16) 1.2px, transparent 1.2px)",
          backgroundSize: "32px 32px"
        }}
      />

      {/* High-Precision, Evenly Spread Academic Symbols */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* 1. Ultra-Detailed Eukaryotic Biological Cell - Top Left Outer Buffer */}
        <div className="absolute top-8 left-[3%] opacity-40">
          <svg viewBox="0 0 32 32" className="w-14 h-14 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.8">
            {/* Plasma Membrane */}
            <circle cx="16" cy="16" r="13" strokeDasharray="5 3" />
            <circle cx="16" cy="16" r="11" opacity="0.3" />
            {/* Nuclear Envelope & Nucleolus Core */}
            <circle cx="16" cy="16" r="6" fill="currentColor" fillOpacity="0.2" strokeWidth="1.5" />
            <circle cx="16" cy="16" r="2.5" fill="currentColor" fillOpacity="0.8" />
            {/* Mitochondria with Cristae Fold */}
            <path d="M7 11c1.5-2 4.5-2 6 0s1 4.5 0 6.5-4.5 2-6 0" fill="currentColor" fillOpacity="0.15" />
            <path d="M8.5 12.5c1-1 3-1 3.5 0" strokeWidth="1.2" />
            {/* Golgi Vesicle Orbs */}
            <circle cx="23" cy="11" r="1.5" fill="currentColor" fillOpacity="0.6" />
            <circle cx="25" cy="15" r="1" fill="currentColor" fillOpacity="0.6" />
            <circle cx="22" cy="21" r="1.8" fill="currentColor" fillOpacity="0.6" />
          </svg>
        </div>

        {/* 2. Sleek Erlenmeyer Flask with Liquid & Bubbles - Top Right Outer Buffer */}
        <div className="absolute top-8 right-[3%] opacity-40">
          <svg viewBox="0 0 32 32" className="w-14 h-14 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {/* Flask Lip & Neck */}
            <rect x="12" y="3" width="8" height="2" rx="1" fill="currentColor" fillOpacity="0.3" />
            <path d="M14 5v6l-8.5 14a2 2 0 0 0 1.7 3h17.6a2 2 0 0 0 1.7-3L18 11V5" />
            {/* Solution Fluid Level */}
            <path d="M8.5 19c2.5-1.5 5 1 7.5 0s5-1.5 7.5 0" strokeDasharray="2 1" />
            <path d="M8 20l-1 2a1 1 0 0 0 1 1.5h16a1 1 0 0 0 1-1.5l-1-2" fill="currentColor" fillOpacity="0.25" />
            {/* Graduation Tick Marks */}
            <line x1="12" y1="13" x2="15" y2="13" strokeWidth="1.2" />
            <line x1="10.5" y1="16" x2="14.5" y2="16" strokeWidth="1.2" />
            <line x1="9" y1="19" x2="13" y2="19" strokeWidth="1.2" />
            {/* Rising Bubbles */}
            <circle cx="16" cy="15" r="1" fill="currentColor" />
            <circle cx="19" cy="12" r="0.8" fill="currentColor" />
            <circle cx="14" cy="9" r="0.7" fill="currentColor" />
          </svg>
        </div>

        {/* 3. Detailed DNA Double Helix - Top Center-Left Buffer */}
        <div className="absolute top-12 left-[15%] opacity-35">
          <svg viewBox="0 0 24 24" className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M4 3c4 4 12 12 16 18" />
            <path d="M20 3c-4 4-12 12-16 18" />
            <line x1="6.5" y1="5.5" x2="8.5" y2="7.5" />
            <line x1="9.5" y1="8.5" x2="14.5" y2="13.5" />
            <line x1="15.5" y1="14.5" x2="17.5" y2="16.5" />
            <line x1="17.5" y1="5.5" x2="15.5" y2="7.5" />
            <line x1="6.5" y1="16.5" x2="8.5" y2="18.5" />
          </svg>
        </div>

        {/* 4. Optical Microscope - Top Center-Right Buffer */}
        <div className="absolute top-12 right-[15%] opacity-35">
          <svg viewBox="0 0 24 24" className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <rect x="9" y="3" width="4" height="6" rx="1" fill="currentColor" fillOpacity="0.2" />
            <path d="M11 9v4" />
            <path d="M7 13h8" />
            <path d="M15 13c0 4-3 6-7 6" />
            <rect x="5" y="19" width="12" height="2" rx="1" fill="currentColor" fillOpacity="0.4" />
          </svg>
        </div>

        {/* 5. Atom Orbit System - Middle Outer Left */}
        <div className="absolute top-[42%] left-[4%] opacity-35">
          <svg viewBox="0 0 24 24" className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.6">
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-30 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        </div>

        {/* 6. Graduation Mortarboard & Ribbon - Middle Outer Right */}
        <div className="absolute top-[42%] right-[4%] opacity-35">
          <svg viewBox="0 0 24 24" className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M22 10L12 5L2 10l10 5l10-5z" fill="currentColor" fillOpacity="0.2" />
            <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
            <path d="M20 10v7" />
          </svg>
        </div>

        {/* 7. Astronomical Telescope - Middle Inner Left */}
        <div className="absolute top-[44%] left-[25%] opacity-30">
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-white/70" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M4 11l15-7 2 4-15 7z" fill="currentColor" fillOpacity="0.2" />
            <line x1="12" y1="12" x2="8" y2="21" />
            <line x1="12" y1="12" x2="16" y2="21" />
          </svg>
        </div>

        {/* 8. Idea Lightbulb - Middle Inner Right */}
        <div className="absolute top-[44%] right-[25%] opacity-30">
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-white/70" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.55.59 2.96 1.5 4 .76.76 1.23 1.52 1.41 2.5h6.18z" fill="currentColor" fillOpacity="0.2" />
          </svg>
        </div>

        {/* 9. Open Textbook - Lower Outer Left */}
        <div className="absolute top-[68%] left-[8%] opacity-35">
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-white/70" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="currentColor" fillOpacity="0.15" />
            <line x1="8" y1="6" x2="16" y2="6" />
            <line x1="8" y1="10" x2="14" y2="10" />
          </svg>
        </div>

        {/* 10. Certificate Diploma Scroll - Lower Outer Right */}
        <div className="absolute top-[68%] right-[8%] opacity-35">
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-white/70" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" fillOpacity="0.15" />
            <line x1="8" y1="8" x2="16" y2="8" />
            <line x1="8" y1="12" x2="16" y2="12" />
            <line x1="8" y1="16" x2="12" y2="16" />
          </svg>
        </div>

        {/* 11. Math Pi (π) Symbol - Lower Inner Left */}
        <div className="absolute top-[72%] left-[22%] opacity-30">
          <svg viewBox="0 0 24 24" className="w-9 h-9 text-white/70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 7h16" />
            <path d="M8 7v12" />
            <path d="M16 7c-1 5-1 9 2 12" />
          </svg>
        </div>

        {/* 12. Math Sigma (∑) Symbol - Lower Inner Right */}
        <div className="absolute top-[72%] right-[22%] opacity-30">
          <svg viewBox="0 0 24 24" className="w-9 h-9 text-white/70" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 4H6l6 8-6 8h12" />
          </svg>
        </div>

      </div>
    </div>
  );
}

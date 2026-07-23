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

      {/* Beautifully Spread-Out High-Detail Academic Symbols */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* 1. Realistic DNA Double Helix - Top Left Outer Buffer */}
        <div className="absolute top-10 left-[4%] opacity-40">
          <svg viewBox="0 0 24 24" className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M4 2c4 4 12 12 16 16" />
            <path d="M20 2c-4 4-12 12-16 16" />
            <line x1="6" y1="4" x2="8" y2="6" />
            <line x1="9" y1="7" x2="15" y2="13" />
            <line x1="16" y1="4" x2="18" y2="6" />
            <line x1="6" y1="16" x2="8" y2="18" />
            <line x1="16" y1="16" x2="18" y2="18" />
          </svg>
        </div>

        {/* 2. Detailed Cell Structure (Nucleus & Organelles) - Top Right Outer Buffer */}
        <div className="absolute top-10 right-[4%] opacity-40">
          <svg viewBox="0 0 24 24" className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.8">
            {/* Outer Cell Membrane */}
            <circle cx="12" cy="12" r="9" strokeDasharray="3 2" />
            {/* Inner Nucleus */}
            <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
            <circle cx="12" cy="12" r="1.8" fill="currentColor" />
            {/* Mitochondria & Ribosome Orbs */}
            <circle cx="6" cy="9" r="1" fill="currentColor" fillOpacity="0.6" />
            <circle cx="18" cy="14" r="1.2" fill="currentColor" fillOpacity="0.6" />
            <circle cx="16" cy="7" r="0.8" fill="currentColor" fillOpacity="0.6" />
          </svg>
        </div>

        {/* 3. Detailed Atom & Orbits - Upper Center-Left Buffer */}
        <div className="absolute top-16 left-[18%] opacity-35">
          <svg viewBox="0 0 24 24" className="w-11 h-11 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.6">
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-30 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        </div>

        {/* 4. Optical Microscope - Upper Center-Right Buffer */}
        <div className="absolute top-16 right-[18%] opacity-35">
          <svg viewBox="0 0 24 24" className="w-11 h-11 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <rect x="9" y="3" width="4" height="6" rx="1" />
            <path d="M11 9v4" />
            <path d="M7 13h8" />
            <path d="M15 13c0 4-3 6-7 6" />
            <rect x="5" y="19" width="12" height="2" rx="1" fill="currentColor" fillOpacity="0.4" />
          </svg>
        </div>

        {/* 5. Detailed Erlenmeyer Flask - Middle Left Side */}
        <div className="absolute top-[45%] left-[8%] opacity-35">
          <svg viewBox="0 0 24 24" className="w-11 h-11 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M10 2h4" />
            <path d="M11 2v5l-6 11a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-6-11V2" />
            <path d="M7 16h10" strokeDasharray="2 2" />
            <circle cx="10" cy="13" r="0.8" fill="currentColor" />
            <circle cx="13" cy="11" r="0.8" fill="currentColor" />
          </svg>
        </div>

        {/* 6. Graduation Cap & Ribbon Diploma - Middle Right Side */}
        <div className="absolute top-[45%] right-[8%] opacity-35">
          <svg viewBox="0 0 24 24" className="w-11 h-11 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M22 10L12 5L2 10l10 5l10-5z" fill="currentColor" fillOpacity="0.2" />
            <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
            <path d="M20 10v7" />
          </svg>
        </div>

        {/* 7. Detailed Book / Textbook - Lower Left Outer Side */}
        <div className="absolute top-[68%] left-[12%] opacity-35">
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-white/70" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="currentColor" fillOpacity="0.15" />
            <line x1="8" y1="6" x2="16" y2="6" />
            <line x1="8" y1="10" x2="14" y2="10" />
          </svg>
        </div>

        {/* 8. Math Pi (π) Symbol - Lower Right Outer Side */}
        <div className="absolute top-[68%] right-[12%] opacity-35">
          <svg viewBox="0 0 24 24" className="w-9 h-9 text-white/70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 7h16" />
            <path d="M8 7v12" />
            <path d="M16 7c-1 5-1 9 2 12" />
          </svg>
        </div>

        {/* 9. Math Sigma (∑) Symbol - Top Far Left */}
        <div className="absolute top-28 left-[2%] opacity-30">
          <svg viewBox="0 0 24 24" className="w-9 h-9 text-white/70" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 4H6l6 8-6 8h12" />
          </svg>
        </div>

        {/* 10. Idea Lightbulb - Top Far Right */}
        <div className="absolute top-28 right-[2%] opacity-30">
          <svg viewBox="0 0 24 24" className="w-9 h-9 text-white/70" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.55.59 2.96 1.5 4 .76.76 1.23 1.52 1.41 2.5h6.18z" fill="currentColor" fillOpacity="0.2" />
          </svg>
        </div>

      </div>
    </div>
  );
}

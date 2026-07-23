"use client";

export function PixelCourseBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#03040a]">
      {/* Subtle Dot Matrix Pattern */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.16) 1.2px, transparent 1.2px)",
          backgroundSize: "32px 32px"
        }}
      />

      {/* Clean Crisp SVG Academic Symbols (Matching Practice Section Style) */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Pixel Book - Top Far Left */}
        <div className="absolute top-10 left-[4%] opacity-35">
          <svg viewBox="0 0 16 16" className="w-12 h-12 text-white/80" shapeRendering="crispEdges" fill="none">
            <rect x="2" y="2" width="12" height="12" fill="currentColor" fillOpacity="0.3" />
            <rect x="3" y="3" width="4" height="10" fill="currentColor" fillOpacity="0.6" />
            <rect x="8" y="3" width="5" height="10" fill="currentColor" fillOpacity="0.5" />
            <rect x="7" y="2" width="1" height="12" fill="currentColor" />
          </svg>
        </div>

        {/* Pixel Graduation Mortarboard - Top Outer Right */}
        <div className="absolute top-12 right-[5%] opacity-35">
          <svg viewBox="0 0 16 16" className="w-14 h-14 text-white/80" shapeRendering="crispEdges" fill="none">
            <rect x="1" y="5" width="14" height="2" fill="currentColor" />
            <rect x="7" y="3" width="2" height="2" fill="currentColor" />
            <rect x="4" y="7" width="8" height="4" fill="currentColor" fillOpacity="0.6" />
            <rect x="13" y="7" width="1" height="5" fill="currentColor" />
          </svg>
        </div>

        {/* Pixel Atom Orbit - Middle Outer Left */}
        <div className="absolute top-[40%] left-[3%] opacity-35">
          <svg viewBox="0 0 16 16" className="w-12 h-12 text-white/80" shapeRendering="crispEdges" fill="none">
            <rect x="7" y="7" width="2" height="2" fill="currentColor" />
            <rect x="2" y="7" width="3" height="2" fill="currentColor" fillOpacity="0.6" />
            <rect x="11" y="7" width="3" height="2" fill="currentColor" fillOpacity="0.6" />
            <rect x="7" y="2" width="2" height="3" fill="currentColor" fillOpacity="0.6" />
            <rect x="7" y="11" width="2" height="3" fill="currentColor" fillOpacity="0.6" />
          </svg>
        </div>

        {/* Pixel Chemistry Flask - Middle Outer Right */}
        <div className="absolute top-[42%] right-[4%] opacity-35">
          <svg viewBox="0 0 16 16" className="w-12 h-12 text-white/80" shapeRendering="crispEdges" fill="none">
            <rect x="6" y="2" width="4" height="1" fill="currentColor" />
            <rect x="7" y="3" width="2" height="4" fill="currentColor" fillOpacity="0.6" />
            <rect x="4" y="7" width="8" height="7" fill="currentColor" fillOpacity="0.4" />
            <rect x="5" y="10" width="6" height="3" fill="currentColor" fillOpacity="0.9" />
          </svg>
        </div>

        {/* Pixel DNA Helix - Top Outer Center Left */}
        <div className="absolute top-14 left-[20%] opacity-30">
          <svg viewBox="0 0 16 16" className="w-10 h-10 text-white/70" shapeRendering="crispEdges" fill="none">
            <rect x="3" y="2" width="2" height="2" fill="currentColor" />
            <rect x="11" y="2" width="2" height="2" fill="currentColor" />
            <rect x="5" y="4" width="6" height="2" fill="currentColor" fillOpacity="0.6" />
            <rect x="7" y="6" width="2" height="4" fill="currentColor" />
            <rect x="5" y="10" width="6" height="2" fill="currentColor" fillOpacity="0.6" />
            <rect x="3" y="12" width="2" height="2" fill="currentColor" />
            <rect x="11" y="12" width="2" height="2" fill="currentColor" />
          </svg>
        </div>

        {/* Pixel Lightbulb - Top Outer Center Right */}
        <div className="absolute top-16 right-[20%] opacity-30">
          <svg viewBox="0 0 16 16" className="w-10 h-10 text-white/70" shapeRendering="crispEdges" fill="none">
            <rect x="6" y="2" width="4" height="2" fill="currentColor" />
            <rect x="4" y="4" width="8" height="5" fill="currentColor" fillOpacity="0.5" />
            <rect x="6" y="9" width="4" height="2" fill="currentColor" />
            <rect x="7" y="11" width="2" height="2" fill="currentColor" fillOpacity="0.8" />
          </svg>
        </div>

        {/* Pixel Certificate Diploma - Bottom Outer Left */}
        <div className="absolute bottom-6 left-[8%] opacity-30">
          <svg viewBox="0 0 16 16" className="w-10 h-10 text-white/70" shapeRendering="crispEdges" fill="none">
            <rect x="3" y="3" width="10" height="10" fill="currentColor" fillOpacity="0.3" />
            <rect x="5" y="5" width="6" height="1" fill="currentColor" />
            <rect x="5" y="7" width="6" height="1" fill="currentColor" />
            <rect x="5" y="9" width="4" height="1" fill="currentColor" />
          </svg>
        </div>

        {/* Pixel Microscope - Bottom Outer Right */}
        <div className="absolute bottom-6 right-[8%] opacity-30">
          <svg viewBox="0 0 16 16" className="w-10 h-10 text-white/70" shapeRendering="crispEdges" fill="none">
            <rect x="6" y="2" width="4" height="3" fill="currentColor" />
            <rect x="7" y="5" width="2" height="4" fill="currentColor" fillOpacity="0.6" />
            <rect x="4" y="9" width="3" height="3" fill="currentColor" fillOpacity="0.8" />
            <rect x="3" y="12" width="10" height="2" fill="currentColor" />
          </svg>
        </div>

        {/* Pixel Pi Symbol - Middle Center Left */}
        <div className="absolute top-[52%] left-[12%] opacity-30">
          <svg viewBox="0 0 16 16" className="w-9 h-9 text-white/70" shapeRendering="crispEdges" fill="none">
            <rect x="2" y="3" width="12" height="2" fill="currentColor" />
            <rect x="4" y="5" width="2" height="8" fill="currentColor" />
            <rect x="9" y="5" width="2" height="8" fill="currentColor" />
          </svg>
        </div>

        {/* Pixel Sigma Symbol - Middle Center Right */}
        <div className="absolute top-[55%] right-[12%] opacity-30">
          <svg viewBox="0 0 16 16" className="w-9 h-9 text-white/70" shapeRendering="crispEdges" fill="none">
            <rect x="3" y="2" width="10" height="2" fill="currentColor" />
            <rect x="3" y="4" width="4" height="2" fill="currentColor" />
            <rect x="6" y="6" width="3" height="2" fill="currentColor" />
            <rect x="3" y="8" width="4" height="2" fill="currentColor" />
            <rect x="3" y="10" width="10" height="2" fill="currentColor" />
          </svg>
        </div>

      </div>
    </div>
  );
}

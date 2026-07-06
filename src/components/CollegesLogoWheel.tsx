"use client";

import { motion } from "framer-motion";
import React from "react";

const collegesList = [
  { name: "Harvard", src: "/images/colleges/harvard.png", colorRgb: "165, 28, 48" },
  { name: "MIT", src: "/images/colleges/mit.png", colorRgb: "163, 31, 52" },
  { name: "Yale", src: "/images/colleges/yale.png", colorRgb: "0, 53, 107" },
  { name: "Princeton", src: "/images/colleges/princeton.png", colorRgb: "231, 117, 10" },
  { name: "Dartmouth", src: "/images/colleges/dartmouth.png", colorRgb: "0, 105, 62" },
  { name: "Duke", src: "/images/colleges/duke.png", colorRgb: "0, 48, 135" },
  { name: "Stanford", src: "/images/colleges/stanford.png", colorRgb: "140, 21, 21" },
  { name: "UPenn", src: "/images/colleges/upenn.png", colorRgb: "1, 31, 91" },
  { name: "NYU", src: "/images/colleges/nyu.png", colorRgb: "87, 6, 140" },
];

function CollegeCard({ college }: { college: typeof collegesList[0] }) {
  return (
    <div className="relative group shrink-0 select-none">
      {/* Brand hover glow spotlight behind card */}
      <div 
        className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at center, rgba(${college.colorRgb}, 0.35) 0%, transparent 75%)`
        }}
      />

      {/* Card container */}
      <div 
        className="relative z-10 w-48 h-48 bg-[#07090E]/90 border border-white/5 shadow-inner rounded-[32px] flex items-center justify-center p-8 transition-all duration-500 hover:border-white/15 hover:bg-[#0C0F16] cursor-pointer overflow-hidden"
        style={{
          boxShadow: "inset 0 1px 1px rgba(255,255,255,0.02)"
        }}
      >
        {/* Glow halo inside the card */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
          style={{
            background: `radial-gradient(circle at center, rgba(${college.colorRgb}, 0.2) 0%, transparent 60%)`
          }}
        />

        {/* Logo Image */}
        <div className="relative z-10 w-32 h-32 flex items-center justify-center grayscale opacity-35 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105">
          <img 
            src={college.src} 
            alt={college.name} 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Brand label tooltip */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 text-[9px] font-mono text-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-wider uppercase">
          {college.name}
        </div>
      </div>
    </div>
  );
}

export function CollegesLogoWheel() {
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const isHoveredRef = React.useRef(false);

  // Multiply list to create a seamless infinite loop scrolling effect
  const repeatedColleges = [
    ...collegesList,
    ...collegesList,
    ...collegesList,
    ...collegesList,
    ...collegesList,
    ...collegesList,
  ];

  React.useEffect(() => {
    let loopWidth = 1792; // default fallback

    const measureWidth = () => {
      const marquee = marqueeRef.current;
      if (marquee) {
        const children = marquee.children;
        if (children.length > 8) {
          const firstRect = children[0].getBoundingClientRect();
          const ninthRect = children[8].getBoundingClientRect();
          const measuredWidth = ninthRect.left - firstRect.left;
          if (measuredWidth > 0) {
            loopWidth = measuredWidth;
          }
        }
      }
    };

    // Measure initially (wait a tick for layout)
    const timer = setTimeout(measureWidth, 100);
    window.addEventListener("resize", measureWidth);

    let animationFrameId: number;
    let x = 0;
    const baseSpeed = 1.0; // pixels per frame

    const animate = () => {
      const marquee = marqueeRef.current;
      if (marquee) {
        const speed = isHoveredRef.current ? baseSpeed * 0.25 : baseSpeed;
        x -= speed;
        if (x <= -loopWidth) {
          x += loopWidth;
        }
        marquee.style.transform = `translate3d(${x}px, 0, 0)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measureWidth);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="w-full py-20 bg-deep-navy overflow-hidden relative flex flex-col items-center z-10">
      {/* Title */}
      <div className="text-center mb-12 px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3 select-none">
           Ivy League & Elite Placement
        </p>
        <h2 className="font-inter font-extrabold text-white text-2xl md:text-4xl tracking-tight leading-tight select-none">
          AP Lab is trusted by students who got into...
        </h2>
      </div>

      {/* Infinite slider container */}
      <div className="relative w-full overflow-hidden py-4 flex items-center">
        {/* Edge Gradients for smooth fade in/out */}
        <div className="absolute top-0 bottom-0 left-0 w-32 md:w-64 bg-gradient-to-r from-deep-navy via-deep-navy/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 md:w-64 bg-gradient-to-l from-deep-navy via-deep-navy/80 to-transparent z-20 pointer-events-none" />

        <div className="flex w-max">
          <div 
            ref={marqueeRef}
            className="flex items-center space-x-8 px-4"
            onMouseEnter={() => { isHoveredRef.current = true; }}
            onMouseLeave={() => { isHoveredRef.current = false; }}
          >
            {repeatedColleges.map((college, idx) => (
              <CollegeCard key={idx} college={college} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

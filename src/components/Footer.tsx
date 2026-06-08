"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-16 overflow-hidden relative">
      
      {/* Top Section: Three Columns with Vertical Lines */}
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 border-b border-white/10 pb-16 relative">
        
        {/* Left Column */}
        <div className="flex flex-col md:border-r border-white/10 md:pr-8">
          <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-1">
            © {new Date().getFullYear()} All Rights Reserved.
          </span>
          <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
            AP Lab: The Pre-Med Accelerator
          </span>
        </div>

        {/* Center Column */}
        <div className="flex flex-col md:border-r border-white/10 md:px-8">
          <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-1">
            Navigation:
          </span>
          <div className="flex space-x-4">
            <Link href="#" className="font-mono text-[10px] text-white/40 hover:text-white uppercase tracking-widest transition-colors">
              Study Resources
            </Link>
            <span className="text-white/20">/</span>
            <Link href="/dashboard" className="font-mono text-[10px] text-white/40 hover:text-white uppercase tracking-widest transition-colors">
              The Dashboard
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col md:pl-8 md:text-right">
          <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-1">
            Connect:
          </span>
          <div className="flex md:justify-end space-x-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="font-mono text-[10px] text-white/40 hover:text-white uppercase tracking-widest transition-colors">
              GitHub Repository
            </a>
            <span className="text-white/20">/</span>
            <Link href="/contact" className="font-mono text-[10px] text-white/40 hover:text-white uppercase tracking-widest transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

      </div>

      {/* Center Subtitle */}
      <div className="w-full text-center mt-12 mb-4">
        <span className="font-manrope text-[11px] text-white/60 uppercase tracking-[0.3em]">
          Advanced Placement Preparation Platform
        </span>
      </div>

      {/* Massive Bottom Text */}
      <div className="w-full overflow-hidden flex justify-center items-end leading-none select-none h-[12vw] max-h-[200px] min-h-[60px] relative">
        <h1 
          className="font-inter font-bold text-center tracking-tighter absolute bottom-0 translate-y-[35%]"
          style={{
            fontSize: 'clamp(80px, 25vw, 400px)',
            lineHeight: '0.8',
            color: '#ffffff'
          }}
        >
          AP LAB
        </h1>
      </div>

    </footer>
  );
}

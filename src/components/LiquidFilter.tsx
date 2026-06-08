"use client";

import { useEffect, useRef } from "react";

interface LiquidFilterProps {
  active?: boolean;
}

export function LiquidFilter({ active = true }: LiquidFilterProps) {
  const turbRef = useRef<SVGFETurbulenceElement>(null);

  useEffect(() => {
    if (!active) return;

    let animationFrameId: number;
    let time = 0;
    
    const animate = () => {
      // Speed of the liquid animation
      time += 0.05;
      // Oscillate base frequency between 0.010 and 0.020
      const val = 0.015 + Math.sin(time) * 0.005;
      if (turbRef.current) {
        turbRef.current.setAttribute("baseFrequency", val.toFixed(4));
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [active]);

  return (
    <svg className="hidden" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="liquid-filter">
          <feTurbulence 
            ref={turbRef}
            type="fractalNoise" 
            baseFrequency="0.015" 
            numOctaves="3" 
            seed="2"
            result="noise"
          />
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="noise" 
            scale="10" 
            xChannelSelector="R" 
            yChannelSelector="G" 
          />
        </filter>
      </defs>
    </svg>
  );
}


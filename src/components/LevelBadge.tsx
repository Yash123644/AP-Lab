"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LevelBadgeProps {
  level: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function LevelBadge({ level, className, size = "sm" }: LevelBadgeProps) {
  // Clamp level between 1 and 100
  const displayLevel = Math.max(1, Math.min(100, level));

  // Determine tier name, geometric properties, base hues, and inner emblems
  let tierName = "Apprentice";
  let baseHue = 130; // Apprentice is green/teal
  let tierSides = 3; // Triangle
  let hueOffsetMultiplier = 6;
  let tierMinLevel = 1;
  let innerEmblem = null;

  if (displayLevel === 100) {
    tierName = "Grandmaster";
    baseHue = 45; // Gold
    tierSides = 10; // Decagon
    hueOffsetMultiplier = 0;
    tierMinLevel = 100;
    // Crown path
    innerEmblem = (
      <path
        d="M12 14 L14 26 L26 26 L28 14 L23 18 L20 12 L17 18 Z"
        fill="#ffffff"
        className="animate-pulse"
      />
    );
  } else if (displayLevel >= 90) {
    tierName = "Ascendant";
    baseHue = 280; // Cosmic purple/magenta
    tierSides = 8; // Octagon
    hueOffsetMultiplier = 6;
    tierMinLevel = 90;
    // Star path
    innerEmblem = (
      <polygon
        points="20,11 22,17 28,17 23,21 25,27 20,23 15,27 17,21 12,17 18,17"
        fill="#ffffff"
      />
    );
  } else if (displayLevel >= 70) {
    tierName = "Elite";
    baseHue = 350; // Crimson Red
    tierSides = 7; // Heptagon
    hueOffsetMultiplier = 4;
    tierMinLevel = 70;
    // Flame/fire symbol
    innerEmblem = (
      <path
        d="M20 11 C20 11 23 15 23 18 C23 21 20 25 17 22 C15 20 16 16 16 16 C16 16 14 18 14 21 C14 24 17 27 20 27 C24 27 26 23 26 19 C26 15 20 11 20 11 Z"
        fill="#ffffff"
      />
    );
  } else if (displayLevel >= 50) {
    tierName = "Master";
    baseHue = 25; // Amber/Gold
    tierSides = 6; // Hexagon
    hueOffsetMultiplier = 4;
    tierMinLevel = 50;
    // Diamond path
    innerEmblem = (
      <polygon
        points="20,11 26,20 20,29 14,20"
        fill="#ffffff"
      />
    );
  } else if (displayLevel >= 30) {
    tierName = "Expert";
    baseHue = 270; // Purple/Violet
    tierSides = 5; // Pentagon
    hueOffsetMultiplier = 3;
    tierMinLevel = 30;
    // Shield path
    innerEmblem = (
      <path
        d="M15 13 L20 11 L25 13 L25 20 C25 24 20 28 20 28 C20 28 15 24 15 20 Z"
        fill="#ffffff"
      />
    );
  } else if (displayLevel >= 10) {
    tierName = "Scholar";
    baseHue = 200; // Blue/Cyan
    tierSides = 4; // Square/Diamond
    hueOffsetMultiplier = 3.5;
    tierMinLevel = 10;
    // Simple target circle
    innerEmblem = <circle cx="20" cy="20" r="4" fill="#ffffff" />;
  } else {
    tierName = "Apprentice";
    baseHue = 130; // Green/Teal
    tierSides = 3; // Triangle
    hueOffsetMultiplier = 6;
    tierMinLevel = 1;
    // Dot
    innerEmblem = <circle cx="20" cy="20" r="2.5" fill="#ffffff" />;
  }

  // Calculate final hue
  const hue = Math.round((baseHue + (displayLevel - tierMinLevel) * hueOffsetMultiplier) % 360);
  const nextHue = (hue + 40) % 360;
  
  const primaryColor = `hsl(${hue}, 85%, 55%)`;
  const secondaryColor = `hsl(${nextHue}, 90%, 40%)`;
  const glowColor = `rgba(${hslToRgb(hue, 0.85, 0.55).join(",")}, 0.5)`;

  // Generate unique geometric properties based on the tier sides
  const sides = tierSides;
  const radius = 14;
  const cx = 20;
  const cy = 20;
  
  // Calculate regular polygon path
  const points = [];
  for (let i = 0; i < sides; i++) {
    const angle = (i * 2 * Math.PI) / sides - Math.PI / 2;
    points.push(`${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`);
  }
  const polygonPath = `M ${points.join(" L ")} Z`;

  // Ring styling
  const dashArray = `${(displayLevel * 2) % 8 + 2} ${(displayLevel * 3) % 6 + 2}`;

  // Dimensions based on size parameter
  const badgeSize = size === "sm" ? "w-10 h-10" : size === "md" ? "w-14 h-14" : "w-20 h-20";

  return (
    <div className={cn("inline-flex items-center space-x-1.5 select-none", className)}>
      {/* SVG Emblem Image */}
      <div 
        className={cn("relative shrink-0 flex items-center justify-center rounded-xl overflow-visible", badgeSize)}
        style={{
          filter: `drop-shadow(0 0 6px ${glowColor})`,
        }}
      >
        <svg 
          viewBox="0 0 40 40" 
          className="w-full h-full overflow-visible"
        >
          <defs>
            <linearGradient id={`grad-${displayLevel}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>

          {/* Outer Level Orbit Ring */}
          <circle
            cx="20"
            cy="20"
            r="18"
            fill="none"
            stroke={primaryColor}
            strokeWidth="1.5"
            strokeDasharray={dashArray}
            opacity="0.7"
            className={cn(displayLevel >= 70 ? "animate-spin-slow" : "")}
            style={{
              transformOrigin: "center",
              animationDuration: displayLevel === 100 ? "4s" : "12s"
            }}
          />

          {/* Inner Shard Glow */}
          <circle
            cx="20"
            cy="20"
            r="15"
            fill="none"
            stroke={secondaryColor}
            strokeWidth="1"
            opacity="0.3"
          />

          {/* Dynamic Polygon Shield Backdrop */}
          <path
            d={polygonPath}
            fill={`url(#grad-${displayLevel})`}
            stroke="#ffffff"
            strokeWidth="1"
            strokeOpacity="0.4"
            className={cn(displayLevel === 100 ? "animate-pulse" : "")}
          />

          {/* Inner Crest Emblem */}
          {innerEmblem}

          {/* Glowing Shard Overlay for High Levels */}
          {displayLevel >= 90 && (
            <circle cx="20" cy="20" r="13" fill="none" stroke="#ffffff" strokeWidth="0.75" strokeDasharray="2 6" opacity="0.6" />
          )}
        </svg>
      </div>

      {/* Label and Badge Level text */}
      <div className="flex flex-col items-start leading-none">
        <span className="text-[8px] uppercase tracking-widest opacity-40 font-mono font-bold">
          {tierName}
        </span>
        <span 
          className="font-mono text-[11px] font-black tracking-wider"
          style={{
            color: primaryColor,
            textShadow: `0 0 8px ${glowColor}`
          }}
        >
          LVL {displayLevel}
        </span>
      </div>
    </div>
  );
}

// HSL to RGB helper for canvas/shadow color formatting
function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  h /= 360;
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

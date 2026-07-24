"use client";

import React from "react";
import { PixelCourseBackground } from "@/components/PixelCourseBackground";

interface CourseThemeBackgroundProps {
  themeId?: string;
  accentColor?: string;
}

export const PHOTO_THEME_URLS: Record<string, { name: string; url: string; desc: string }> = {
  "toronto-skyline": {
    name: "Toronto Night Waterfront",
    desc: "Clean 4K Toronto skyline reflected over calm night water",
    url: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2560&auto=format&fit=crop"
  },
  "shanghai-night": {
    name: "Shanghai Waterfront Skyline",
    desc: "Illuminated 4K Shanghai Pudong towers evening view",
    url: "https://images.unsplash.com/photo-1506158669146-619067262a00?q=80&w=2560&auto=format&fit=crop"
  },
  "tokyo-neon": {
    name: "Tokyo Tower & Neon City",
    desc: "High-resolution Tokyo skyline with vibrant city lights",
    url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2560&auto=format&fit=crop"
  },
  "venice-sunset": {
    name: "Venice Grand Canal Evening",
    desc: "Serene sunset over historic Venice water channels",
    url: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=2560&auto=format&fit=crop"
  },
  "amalfi-coast": {
    name: "Amalfi Coast Nightline",
    desc: "Clifftop Italian coastal village with warm evening glows",
    url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2560&auto=format&fit=crop"
  },
  "great-wall": {
    name: "Great Wall Sunset Horizon",
    desc: "Scenic mountain peaks along the Great Wall of China",
    url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2560&auto=format&fit=crop"
  }
};

export function CourseThemeBackground({ themeId = "dark-matrix" }: CourseThemeBackgroundProps) {
  // 1. Default Pixel Matrix
  if (themeId === "dark-matrix" || !PHOTO_THEME_URLS[themeId]) {
    return <PixelCourseBackground />;
  }

  // 2. Crisp 4K Photography Backgrounds
  const photo = PHOTO_THEME_URLS[themeId];

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none bg-[#03040a]">
      <img
        src={photo.url}
        alt={photo.name}
        className="w-full h-full object-cover opacity-35 filter contrast-105 brightness-90 transition-opacity duration-700"
      />
      {/* Dark Gradient Overlay for Crisp Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
    </div>
  );
}

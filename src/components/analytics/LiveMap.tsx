"use client";

import React, { useState, useEffect, useRef } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { motion, useInView } from "framer-motion";
 
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
 
// Mock coordinates for active students
const MOCK_LOCATIONS = [
  { name: "New York", coordinates: [-74.006, 40.7128] },
  { name: "Los Angeles", coordinates: [-118.2437, 34.0522] },
  { name: "London", coordinates: [-0.1276, 51.5074] },
  { name: "Tokyo", coordinates: [139.6917, 35.6895] },
  { name: "Sydney", coordinates: [151.2093, -33.8688] },
  { name: "Mumbai", coordinates: [72.8777, 19.0760] },
  { name: "São Paulo", coordinates: [-46.6333, -23.5505] },
  { name: "Toronto", coordinates: [-79.3832, 43.6532] },
  { name: "Chicago", coordinates: [-87.6298, 41.8781] },
  { name: "Houston", coordinates: [-95.3698, 29.7604] },
  { name: "Miami", coordinates: [-80.1918, 25.7617] },
  { name: "Seattle", coordinates: [-122.3321, 47.6062] },
  { name: "Paris", coordinates: [2.3522, 48.8566] },
  { name: "Berlin", coordinates: [13.4050, 52.5200] },
  { name: "Singapore", coordinates: [103.8198, 1.3521] },
  { name: "Seoul", coordinates: [126.9780, 37.5665] },
];
 
export function LiveMap() {
  const [activeMarkers, setActiveMarkers] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);
 
  useEffect(() => {
    if (!isInView) return;

    // Randomly activate markers to simulate live traffic
    const updateMarkers = () => {
      const newActive: number[] = [];
      const numActive = Math.floor(Math.random() * 8) + 4; // 4 to 11 active at a time
      while (newActive.length < numActive) {
        const idx = Math.floor(Math.random() * MOCK_LOCATIONS.length);
        if (!newActive.includes(idx)) newActive.push(idx);
      }
      setActiveMarkers(newActive);
    };
 
    updateMarkers();
    const interval = setInterval(updateMarkers, 3000);
    return () => clearInterval(interval);
  }, [isInView]);
 
  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#121212] rounded-[24px] border border-white/10 shadow-[0_0_40px_rgba(123,57,252,0.1)]">
      <div className="absolute top-6 left-6 z-10 flex items-center space-x-2">
        <div className="relative flex items-center justify-center w-3 h-3">
          {isInView && (
            <motion.div
              animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute w-full h-full bg-[#7b39fc] rounded-full"
            />
          )}
          <div className="w-2 h-2 bg-[#7b39fc] rounded-full z-10 shadow-[0_0_8px_rgba(123,57,252,0.8)]" />
        </div>
        <span className="text-white/80 font-inter text-sm font-medium tracking-wide">Live Global Traffic</span>
      </div>
 
      <ComposableMap 
        projection="geoMercator"
        projectionConfig={{
          scale: 120,
        }}
        className="w-full h-full object-cover opacity-80"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#1f1f2e"
                stroke="#2a2a3e"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#2a2a3e", outline: "none" },
                  pressed: { fill: "#2a2a3e", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
 
        {MOCK_LOCATIONS.map((loc, idx) => {
          const isActive = activeMarkers.includes(idx);
          return (
            <Marker key={loc.name} coordinates={loc.coordinates as [number, number]}>
              <motion.circle
                r={2}
                fill={isActive ? "#00ff96" : "#7b39fc"}
                initial={{ opacity: 0.2 }}
                animate={isInView ? { 
                  opacity: isActive ? [0.4, 1, 0.4] : 0.2,
                  scale: isActive ? [1, 1.5, 1] : 1
                } : {}}
                transition={{ duration: isActive ? 1.5 : 0, repeat: Infinity }}
                style={{ filter: isActive ? "drop-shadow(0px 0px 4px rgba(0,255,150,0.8))" : "none" }}
              />
              {isActive && isInView && (
                <motion.circle
                  r={8}
                  fill="transparent"
                  stroke="#00ff96"
                  strokeWidth={0.5}
                  initial={{ scale: 0, opacity: 0.8 }}
                  animate={{ scale: 3, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
              )}
            </Marker>
          );
        })}
      </ComposableMap>
      
      {/* Overlay gradient to fade out edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0a0a0a_100%)] pointer-events-none" />
    </div>
  );
}

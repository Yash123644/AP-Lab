"use client";

import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';

// Use the standard US Atlas TopoJSON
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// Generate random mock data
const generateMockData = () => {
  const data: Record<string, number> = {};
  for (let i = 0; i < 100; i++) {
    // Generate a random number between 20 and 250 scholars
    data[i.toString().padStart(2, "0")] = Math.floor(Math.random() * (250 - 20 + 1)) + 20;
  }
  return data;
};

export function USMap() {
  const [content, setContent] = useState<{ name: string; users: number } | null>(null);
  const [mockData, setMockData] = useState<Record<string, number>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMockData(generateMockData());
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <Tooltip id="my-tooltip" className="z-50 !bg-[#050508] !border !border-white/10 !rounded-xl !px-4 !py-3 !shadow-[0_0_20px_rgba(32,201,151,0.2)]">
        {content && (
          <div className="flex flex-col items-center">
            <span className="text-white font-manrope font-bold mb-1">{content.name}</span>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-medical-teal rounded-full animate-pulse" />
              <span className="text-medical-teal font-mono text-xs uppercase tracking-widest">{content.users.toLocaleString()} Scholars</span>
            </div>
          </div>
        )}
      </Tooltip>
      
      <div className="w-full h-full min-h-[500px] md:min-h-[700px] relative group flex items-center justify-center -mr-12 md:-mr-24">
        <ComposableMap projection="geoAlbersUsa" className="w-[150%] h-[150%] relative z-10 overflow-visible" style={{ outline: "none" }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                // Get the state ID to map to our mock data (states are usually 01-56)
                const users = mockData[geo.id] || Math.floor(Math.random() * 230) + 20;
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      setContent({ name: geo.properties.name, users });
                    }}
                    onMouseLeave={() => {
                      setContent(null);
                    }}
                    data-tooltip-id="my-tooltip"
                    style={{
                      default: {
                        fill: "rgba(255,255,255,0.03)",
                        stroke: "rgba(255,255,255,0.1)",
                        strokeWidth: 0.75,
                        outline: "none",
                        transform: "translateY(0px) scale(1)",
                        transformOrigin: "center",
                        transformBox: "fill-box",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      },
                      hover: {
                        fill: "rgba(32,201,151,0.4)",
                        stroke: "#20c997",
                        strokeWidth: 2,
                        outline: "none",
                        filter: "drop-shadow(0 15px 15px rgba(0,0,0,0.6))",
                        transform: "translateY(-8px) scale(1.05)",
                        transformOrigin: "center",
                        transformBox: "fill-box",
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      },
                      pressed: {
                        fill: "rgba(32,201,151,0.5)",
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
}

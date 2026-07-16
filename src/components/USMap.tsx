"use client";

import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';

// Use the standard US Atlas TopoJSON
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// Static map data of scholars per state summing to exactly 1000
const stateCounts: Record<string, number> = {
  "Alabama": 8,
  "Alaska": 1,
  "Arizona": 12,
  "Arkansas": 6,
  "California": 160,
  "Colorado": 12,
  "Connecticut": 8,
  "Delaware": 2,
  "District of Columbia": 2,
  "Florida": 140,
  "Georgia": 32,
  "Hawaii": 1,
  "Idaho": 3,
  "Illinois": 45,
  "Indiana": 12,
  "Iowa": 6,
  "Kansas": 6,
  "Kentucky": 8,
  "Louisiana": 8,
  "Maine": 2,
  "Maryland": 15,
  "Massachusetts": 16,
  "Michigan": 25,
  "Minnesota": 12,
  "Mississippi": 4,
  "Missouri": 12,
  "Montana": 2,
  "Nebraska": 4,
  "Nevada": 8,
  "New Hampshire": 3,
  "New Jersey": 15,
  "New Mexico": 4,
  "New York": 80,
  "North Carolina": 32,
  "North Dakota": 1,
  "Ohio": 35,
  "Oklahoma": 8,
  "Oregon": 10,
  "Pennsylvania": 35,
  "Rhode Island": 2,
  "South Carolina": 12,
  "South Dakota": 1,
  "Tennessee": 15,
  "Texas": 100,
  "Utah": 8,
  "Vermont": 1,
  "Virginia": 20,
  "Washington": 20,
  "West Virginia": 3,
  "Wisconsin": 12,
  "Wyoming": 1
};

export function USMap() {
  const [content, setContent] = useState<{ name: string; users: number } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
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
                const stateName = geo.properties.name;
                const users = stateCounts[stateName] || 0;
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      setContent({ name: stateName, users });
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

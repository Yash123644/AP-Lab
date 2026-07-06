"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const ChemistryMolecule3DContent = dynamic(
  () => import("./ChemistryMolecule3DContent").then((mod) => mod.ChemistryMolecule3DContent),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[220px] max-h-[300px] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
      </div>
    ),
  }
);

interface ChemistryMolecule3DProps {
  isHovered: boolean;
}

export function ChemistryMolecule3D({ isHovered }: ChemistryMolecule3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { rootMargin: "200px" } // load 200px before coming into view for smooth transition
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full min-h-[220px] max-h-[300px]">
      {inView ? (
        <ChemistryMolecule3DContent isHovered={isHovered} />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}


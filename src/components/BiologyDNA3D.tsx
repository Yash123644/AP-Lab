"use client";

import dynamic from "next/dynamic";

const BiologyDNA3DContent = dynamic(
  () => import("./BiologyDNA3DContent").then((mod) => mod.BiologyDNA3DContent),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[220px] max-h-[300px] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
      </div>
    ),
  }
);

interface BiologyDNA3DProps {
  isHovered: boolean;
}

export function BiologyDNA3D({ isHovered }: BiologyDNA3DProps) {
  return (
    <div className="w-full h-full min-h-[220px] max-h-[300px]">
      <BiologyDNA3DContent isHovered={isHovered} />
    </div>
  );
}

"use client";

import dynamic from "next/dynamic";

const PhysicsOrbit3DContent = dynamic(
  () => import("./PhysicsOrbit3DContent").then((mod) => mod.PhysicsOrbit3DContent),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[180px] max-h-[220px] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
      </div>
    ),
  }
);

interface PhysicsOrbit3DProps {
  isHovered: boolean;
}

export function PhysicsOrbit3D({ isHovered }: PhysicsOrbit3DProps) {
  return (
    <div className="w-full h-full min-h-[180px] max-h-[220px]">
      <PhysicsOrbit3DContent isHovered={isHovered} />
    </div>
  );
}

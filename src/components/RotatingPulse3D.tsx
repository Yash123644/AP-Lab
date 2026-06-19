"use client";

import dynamic from "next/dynamic";

const RotatingPulse3DContent = dynamic(
  () => import("./RotatingPulse3DContent").then((mod) => mod.RotatingPulse3DContent),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
      </div>
    ),
  }
);

export function RotatingPulse3D() {
  return (
    <div className="w-full h-[450px] relative">
      <RotatingPulse3DContent />
    </div>
  );
}

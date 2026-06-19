"use client";

import dynamic from "next/dynamic";

const RotatingLogo3DContent = dynamic(
  () => import("./RotatingLogo3DContent").then((mod) => mod.RotatingLogo3DContent),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
      </div>
    ),
  }
);

export function RotatingLogo3D() {
  return (
    <div className="w-full h-full min-h-[300px] max-h-[400px]">
      <RotatingLogo3DContent />
    </div>
  );
}

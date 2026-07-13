"use client";

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
  return (
    <div className="w-full h-full min-h-[220px] max-h-[300px]">
      <ChemistryMolecule3DContent isHovered={isHovered} />
    </div>
  );
}

"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface DNAProps {
  isHovered: boolean;
}

function DNAHelix({ isHovered }: DNAProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Animate rotation based on time and hover speed
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * (isHovered ? 0.6 : 0.2);
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.1;
    }
  });

  const numPoints = 16;
  const radius = 1.8;
  const height = 4.5;

  const points = useMemo(() => {
    const list = [];
    for (let i = 0; i < numPoints; i++) {
      const t = (i / (numPoints - 1)) * Math.PI * 2.2; // windings
      const y = (i / (numPoints - 1)) * height - height / 2;
      
      const x1 = Math.cos(t) * radius;
      const z1 = Math.sin(t) * radius;

      const x2 = Math.cos(t + Math.PI) * radius;
      const z2 = Math.sin(t + Math.PI) * radius;

      list.push({ y, x1, z1, x2, z2 });
    }
    return list;
  }, [numPoints, height, radius]);

  // Interpolated colors on hover: vibrant teal/emerald vs desaturated grey/slate
  const nodeColor1 = isHovered ? "#34d399" : "#4b5563"; // Emerald-400 vs Grey-600
  const nodeColor2 = isHovered ? "#22d3ee" : "#6b7280"; // Cyan-400 vs Grey-500
  const rungColor = isHovered ? "#14b8a6" : "#374151";  // Teal-500 vs Grey-700

  return (
    <group ref={groupRef}>
      {points.map((pt, idx) => {
        // Calculate angle of connection
        const angle = Math.atan2(pt.z2 - pt.z1, pt.x2 - pt.x1);
        return (
          <group key={idx}>
            {/* Strand Node 1 */}
            <mesh position={[pt.x1, pt.y, pt.z1]}>
              <sphereGeometry args={[0.22, 16, 16]} />
              <meshStandardMaterial 
                color={nodeColor1} 
                roughness={0.2}
                metalness={0.9}
                emissive={isHovered ? "#047857" : "#000000"}
                emissiveIntensity={isHovered ? 0.6 : 0}
              />
            </mesh>

            {/* Strand Node 2 */}
            <mesh position={[pt.x2, pt.y, pt.z2]}>
              <sphereGeometry args={[0.22, 16, 16]} />
              <meshStandardMaterial 
                color={nodeColor2} 
                roughness={0.2}
                metalness={0.9}
                emissive={isHovered ? "#0e7490" : "#000000"}
                emissiveIntensity={isHovered ? 0.6 : 0}
              />
            </mesh>

            {/* Rung */}
            <mesh 
              position={[(pt.x1 + pt.x2) / 2, pt.y, (pt.z1 + pt.z2) / 2]}
              rotation={[0, -angle, 0]}
            >
              <boxGeometry args={[radius * 2, 0.05, 0.05]} />
              <meshStandardMaterial 
                color={rungColor}
                roughness={0.5}
                emissive={isHovered ? "#0f766e" : "#000000"}
                emissiveIntensity={isHovered ? 0.4 : 0}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

export function BiologyDNA3DContent({ isHovered }: DNAProps) {
  return (
    <div className="w-full h-full min-h-[220px] max-h-[300px] relative">
      <Canvas camera={{ position: [0, 0, 8.2], fov: 45 }}>
        <ambientLight intensity={isHovered ? 0.7 : 0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <DNAHelix isHovered={isHovered} />
      </Canvas>
    </div>
  );
}

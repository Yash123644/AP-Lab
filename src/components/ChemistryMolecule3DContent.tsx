"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface MoleculeProps {
  isHovered: boolean;
}

function Molecule({ isHovered }: MoleculeProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Rotate based on time and hover speed
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * (isHovered ? 0.7 : 0.25);
      groupRef.current.rotation.x += delta * (isHovered ? 0.3 : 0.1);
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.15;
    }
  });

  // Define atoms in the molecule
  const atoms = useMemo(() => {
    return [
      { id: 0, pos: [0, 0, 0] as [number, number, number], size: 0.45, type: "C" }, // Carbon (Center)
      { id: 1, pos: [1.2, 0.8, -0.4] as [number, number, number], size: 0.35, type: "O" }, // Oxygen
      { id: 2, pos: [-1.2, -0.8, 0.4] as [number, number, number], size: 0.35, type: "O" }, // Oxygen
      { id: 3, pos: [0.8, -1.2, -0.6] as [number, number, number], size: 0.38, type: "N" }, // Nitrogen
      { id: 4, pos: [-0.8, 1.2, 0.6] as [number, number, number], size: 0.38, type: "N" }, // Nitrogen
      { id: 5, pos: [0.3, 0.3, 1.3] as [number, number, number], size: 0.25, type: "H" }, // Hydrogen
      { id: 6, pos: [-0.3, -0.3, -1.3] as [number, number, number], size: 0.25, type: "H" }, // Hydrogen
    ];
  }, []);

  // Define bonds (connections between atom IDs)
  const bonds = useMemo(() => {
    return [
      { from: 0, to: 1 },
      { from: 0, to: 2 },
      { from: 0, to: 3 },
      { from: 0, to: 4 },
      { from: 0, to: 5 },
      { from: 0, to: 6 },
      { from: 1, to: 4 },
      { from: 2, to: 3 },
    ];
  }, []);

  // Map atom types to colors based on hover state
  const getAtomColorAndEmissive = (type: string) => {
    if (!isHovered) {
      // Grayscale/desaturated when not hovered
      switch (type) {
        case "C": return { color: "#4b5563", emissive: "#000000", intensity: 0 };
        case "O": return { color: "#6b7280", emissive: "#000000", intensity: 0 };
        case "N": return { color: "#374151", emissive: "#000000", intensity: 0 };
        default: return { color: "#9ca3af", emissive: "#000000", intensity: 0 };
      }
    } else {
      // Vibrant colors when hovered
      switch (type) {
        case "C": return { color: "#3b82f6", emissive: "#1d4ed8", intensity: 0.7 }; // Carbon - Blue
        case "O": return { color: "#ef4444", emissive: "#b91c1c", intensity: 0.8 }; // Oxygen - Red
        case "N": return { color: "#10b981", emissive: "#047857", intensity: 0.7 }; // Nitrogen - Green
        default: return { color: "#f59e0b", emissive: "#b45309", intensity: 0.6 };  // Hydrogen - Yellow/Amber
      }
    }
  };

  const bondColor = isHovered ? "#6366f1" : "#4b5563"; // Violet vs Gray-600
  const bondEmissive = isHovered ? "#4338ca" : "#000000";

  return (
    <group ref={groupRef}>
      {/* Draw Atoms */}
      {atoms.map((atom) => {
        const { color, emissive, intensity } = getAtomColorAndEmissive(atom.type);
        return (
          <mesh key={atom.id} position={atom.pos}>
            <sphereGeometry args={[atom.size, 32, 32]} />
            <meshStandardMaterial
              color={color}
              roughness={0.15}
              metalness={0.8}
              emissive={emissive}
              emissiveIntensity={intensity}
            />
          </mesh>
        );
      })}

      {/* Draw Bonds */}
      {bonds.map((bond, idx) => {
        const p1 = new THREE.Vector3(...atoms[bond.from].pos);
        const p2 = new THREE.Vector3(...atoms[bond.to].pos);
        
        // Calculate bond length, center position, and rotation
        const distance = p1.distanceTo(p2);
        const position = p1.clone().add(p2).multiplyScalar(0.5);
        
        // Align cylinder with the vector between points
        const direction = p2.clone().sub(p1).normalize();
        const alignMatrix = new THREE.Matrix4().lookAt(
          new THREE.Vector3(0, 0, 0),
          direction,
          new THREE.Vector3(0, 1, 0)
        );
        
        // Rotate 90 degrees around X because Three.js cylinder geometry points along Y axis
        const rotation = new THREE.Euler().setFromRotationMatrix(
          alignMatrix.multiply(new THREE.Matrix4().makeRotationX(Math.PI / 2))
        );

        return (
          <mesh key={idx} position={position} rotation={rotation}>
            <cylinderGeometry args={[0.06, 0.06, distance, 12]} />
            <meshStandardMaterial
              color={bondColor}
              roughness={0.4}
              metalness={0.5}
              emissive={bondEmissive}
              emissiveIntensity={isHovered ? 0.5 : 0}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export function ChemistryMolecule3DContent({ isHovered }: MoleculeProps) {
  return (
    <div className="w-full h-full min-h-[220px] max-h-[300px] relative">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
        <ambientLight intensity={isHovered ? 0.7 : 0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Molecule isHovered={isHovered} />
      </Canvas>
    </div>
  );
}

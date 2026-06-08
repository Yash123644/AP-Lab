"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface OrbitProps {
  isHovered: boolean;
}

function Electron({ radiusX, radiusZ, speed, angleOffset, color, isHovered }: { radiusX: number, radiusZ: number, speed: number, angleOffset: number, color: string, isHovered: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + angleOffset;
    if (meshRef.current) {
      meshRef.current.position.x = Math.cos(t) * radiusX;
      meshRef.current.position.z = Math.sin(t) * radiusZ;
      meshRef.current.position.y = 0;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.07, 16, 16]} />
      <meshStandardMaterial 
        color={isHovered ? "#ffffff" : "#111111"} 
        emissive={isHovered ? color : "#000000"} 
        emissiveIntensity={isHovered ? 1.5 : 0} 
        roughness={0.1}
      />
    </mesh>
  );
}

function Atom({ isHovered }: OrbitProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Gentle overall rotation
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.05;
    }
  });

  const nucleusColor = isHovered ? "#a855f7" : "#4b5563"; // Purple vs Gray
  const orbit1Color = isHovered ? "#6366f1" : "#374151";  // Indigo vs Gray
  const orbit2Color = isHovered ? "#a855f7" : "#374151";  // Purple vs Gray
  const orbit3Color = isHovered ? "#22d3ee" : "#374151";  // Cyan vs Gray

  return (
    <group ref={groupRef}>
      {/* Central Nucleus - cluster of 3 spheres */}
      <group>
        <mesh position={[0, 0.08, 0]}>
          <sphereGeometry args={[0.22, 32, 32]} />
          <meshStandardMaterial 
            color={isHovered ? "#ffffff" : "#4b5563"} 
            emissive={nucleusColor}
            emissiveIntensity={isHovered ? 1.0 : 0}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
        <mesh position={[-0.12, -0.06, 0.06]}>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial 
            color={isHovered ? "#a855f7" : "#374151"} 
            emissive={nucleusColor}
            emissiveIntensity={isHovered ? 0.8 : 0}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
        <mesh position={[0.12, -0.06, -0.06]}>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial 
            color={isHovered ? "#6366f1" : "#374151"} 
            emissive={nucleusColor}
            emissiveIntensity={isHovered ? 0.8 : 0}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </group>

      {/* Orbit 1: Tilted -30 degrees */}
      <group rotation={[0.4, 0, -0.5]}>
        {/* Ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.2, 0.012, 8, 64]} />
          <meshBasicMaterial color={orbit1Color} transparent opacity={isHovered ? 0.6 : 0.2} />
        </mesh>
        {/* Electron */}
        <Electron radiusX={1.2} radiusZ={1.2} speed={isHovered ? 3.5 : 1.8} angleOffset={0} color="#6366f1" isHovered={isHovered} />
      </group>

      {/* Orbit 2: Tilted 45 degrees */}
      <group rotation={[-0.6, 0.5, 0.8]}>
        {/* Ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.05, 0.012, 8, 64]} />
          <meshBasicMaterial color={orbit2Color} transparent opacity={isHovered ? 0.6 : 0.2} />
        </mesh>
        {/* Electron */}
        <Electron radiusX={1.05} radiusZ={1.05} speed={isHovered ? -3.0 : -1.5} angleOffset={Math.PI * 0.5} color="#a855f7" isHovered={isHovered} />
      </group>

      {/* Orbit 3: Tilted 105 degrees */}
      <group rotation={[0.8, -0.4, 1.8]}>
        {/* Ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.9, 0.012, 8, 64]} />
          <meshBasicMaterial color={orbit3Color} transparent opacity={isHovered ? 0.6 : 0.2} />
        </mesh>
        {/* Electron */}
        <Electron radiusX={0.9} radiusZ={0.9} speed={isHovered ? 4.2 : 2.1} angleOffset={Math.PI} color="#22d3ee" isHovered={isHovered} />
      </group>
    </group>
  );
}

export function PhysicsOrbit3DContent({ isHovered }: OrbitProps) {
  return (
    <div className="w-full h-full min-h-[180px] max-h-[220px] relative">
      <Canvas camera={{ position: [0, 0, 3.8], fov: 45 }}>
        <ambientLight intensity={isHovered ? 0.7 : 0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Atom isHovered={isHovered} />
      </Canvas>
    </div>
  );
}

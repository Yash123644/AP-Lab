"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function LogoShape() {
  const groupRef = useRef<THREE.Group>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
      groupRef.current.rotation.x += delta * 0.25;
    }
    if (outerRef.current) {
      outerRef.current.rotation.z -= delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer rotating wireframe structure */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial 
          color="#00ffb3" 
          wireframe 
          emissive="#00ffb3"
          emissiveIntensity={0.8}
        />
      </mesh>
      
      {/* Inner glowing sphere */}
      <mesh ref={innerRef}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#00d0ff"
          emissiveIntensity={1.5}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {/* Orbit ring */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[2.1, 0.03, 8, 64]} />
        <meshStandardMaterial 
          color="#a855f7" 
          emissive="#a855f7"
          emissiveIntensity={1.2}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}

export function RotatingLogo3DContent() {
  return (
    <div className="w-full h-full relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <LogoShape />
      </Canvas>
    </div>
  );
}

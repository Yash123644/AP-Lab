"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Clean EKG heartbeat pulse shape (single cycle: flat -> rise -> fall -> recover -> flat)
function getPulseHeight(x: number): number {
  const Hp = 1.35; // Peak height
  const Ht = 0.95; // Trough depth
  
  if (x < -0.8) return 0;
  if (x >= -0.8 && x < 0.0) {
    // Smooth rise from 0 to Hp
    return Hp * (0.5 - 0.5 * Math.cos(Math.PI * (x + 0.8) / 0.8));
  }
  if (x >= 0.0 && x < 0.6) {
    // Smooth fall from Hp to -Ht
    return -Ht + (Hp + Ht) * (0.5 + 0.5 * Math.cos(Math.PI * x / 0.6));
  }
  if (x >= 0.6 && x < 1.2) {
    // Smooth recovery from -Ht to 0
    return -Ht * (0.5 + 0.5 * Math.cos(Math.PI * (x - 0.6) / 0.6));
  }
  return 0; // x >= 1.2
}

function PulseModel() {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleGlobalMouseMove = (event: MouseEvent) => {
      // Normalize mouse positions between -1 and 1
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Auto-rotation baseline oscillation on Y (gentle horizontal swaying)
      const baseY = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.15;
      
      // Interactive target rotations (mouse movement tilts the model)
      const targetY = baseY + mouse.current.x * 0.35;
      const targetX = mouse.current.y * 0.3;
      const targetZ = -mouse.current.x * 0.08;
      
      // Smooth interpolation (lerp)
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.08;
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.08;
      groupRef.current.rotation.z += (targetZ - groupRef.current.rotation.z) * 0.08;
    }
  });

  const cubes = [];
  const startX = -2.1;
  const endX = 2.1;
  const stepX = 0.07;
  const startZ = -0.20;
  const endZ = 0.20;
  const stepZ = 0.08;

  for (let x = startX; x <= endX; x += stepX) {
    const y = getPulseHeight(x);
    for (let z = startZ; z <= endZ; z += stepZ) {
      cubes.push({
        position: [x, y, z] as [number, number, number],
        id: `${x.toFixed(3)}_${z.toFixed(3)}`
      });
    }
  }

  return (
    <group ref={groupRef}>
      {cubes.map((cube) => (
        <mesh key={cube.id} position={cube.position}>
          <boxGeometry args={[0.042, 0.042, 0.042]} />
          <meshStandardMaterial 
            color="#ffffff" 
            emissive="#ffffff"
            emissiveIntensity={0.9}
            roughness={0.2}
            metalness={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

export function RotatingPulse3DContent() {
  return (
    <div className="w-full h-full relative">
      <Canvas camera={{ position: [0, 0, 4.8], fov: 45 }}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.15} />
        
        {/* Key lights for 3D depth and cube face shading */}
        <pointLight position={[5, 10, 5]} intensity={2.0} />
        <pointLight position={[-5, -10, -5]} intensity={0.3} />
        
        {/* Soft center-bottom point light to produce the glow/reflection on the floor plane */}
        <pointLight position={[0, -1.2, 0.3]} intensity={2.5} distance={3.0} color="#ffffff" />
        
        <PulseModel />

        {/* Ground reflective floor plane matching the uploaded design */}
        <mesh position={[0, -1.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[15, 15]} />
          <meshStandardMaterial 
            color="#000000"
            roughness={0.55}
            metalness={0.95}
          />
        </mesh>
      </Canvas>
    </div>
  );
}

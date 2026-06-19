"use client";

import { useRef } from "react";
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

const startX = -2.1;
const endX = 2.1;
const stepX = 0.09; // Spaced out X step to make them clearly separate pixels
const radius = 0.15; // Radius of the hollow tube
const N = 6; // Number of pixels around the circumference forming a hollow tube

// Pre-generate the base coordinates of the cubes
const cubes: { basePosition: [number, number, number]; id: string }[] = [];
for (let x = startX; x <= endX; x += stepX) {
  const yCenter = getPulseHeight(x);
  for (let i = 0; i < N; i++) {
    const theta = (i / N) * Math.PI * 2;
    const y = yCenter + radius * Math.cos(theta);
    const z = radius * Math.sin(theta);
    
    cubes.push({
      basePosition: [x, y, z],
      id: `${x.toFixed(3)}_${i}`
    });
  }
}

function PulseModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      const pointerX = state.pointer.x;
      const pointerY = state.pointer.y;

      // Auto-rotation baseline oscillation on Y (gentle horizontal swaying)
      const baseY = Math.sin(time * 0.4) * 0.15;
      
      // Interactive target rotations (mouse movement tilts the model)
      const targetY = baseY + pointerX * 0.35;
      const targetX = pointerY * 0.3;
      const targetZ = -pointerX * 0.08;
      
      // Smooth interpolation (lerp)
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.08;
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.08;
      groupRef.current.rotation.z += (targetZ - groupRef.current.rotation.z) * 0.08;

      // Project mouse pointer NDC [-1, 1] into local 3D coordinates based on canvas viewport dimensions
      const mx = pointerX * (state.viewport.width / 2);
      const my = pointerY * (state.viewport.height / 2);

      groupRef.current.children.forEach((child, index) => {
        const cube = cubes[index];
        if (!cube) return;

        const [origX, origY, origZ] = cube.basePosition;

        // 1. Futuristic wiggling/distortion (digital screen noise wiggles)
        const wiggleX = Math.sin(time * 6 + origX * 10) * 0.015;
        const wiggleY = Math.cos(time * 6 + origY * 10) * 0.015;
        const wiggleZ = Math.sin(time * 6 + origZ * 10) * 0.015;

        // 2. Interactive parting effect (disperse cubes when cursor is near)
        let pushX = 0;
        let pushY = 0;
        
        const dx = origX - mx;
        const dy = origY - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        const pushRadius = 0.8; // Radius of mouse parting influence
        if (dist < pushRadius) {
          const force = (1 - dist / pushRadius) * 0.38; // Max push distance: 0.38 units
          const angle = dist > 0.01 ? Math.atan2(dy, dx) : Math.random() * Math.PI * 2;
          pushX = Math.cos(angle) * force;
          pushY = Math.sin(angle) * force;
        }

        // Apply updated position
        child.position.set(
          origX + wiggleX + pushX,
          origY + wiggleY + pushY,
          origZ + wiggleZ
        );

        // 3. Scanline/CRT pixel scale flicker (Futuristic digital screen breathe)
        const scaleFlicker = 1 + Math.sin(time * 12 + origX * 15) * 0.08;
        child.scale.set(scaleFlicker, scaleFlicker, scaleFlicker);
      });
    }
  });

  return (
    <group ref={groupRef}>
      {cubes.map((cube) => (
        <mesh key={cube.id} position={cube.basePosition}>
          <boxGeometry args={[0.035, 0.035, 0.035]} />
          <meshStandardMaterial 
            color="#ffffff" 
            emissive="#ffffff"
            emissiveIntensity={1.4} // Glowing white screen pixels!
            roughness={0.15}
            metalness={0.5}
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

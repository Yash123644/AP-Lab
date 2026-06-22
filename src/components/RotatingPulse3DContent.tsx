"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Clean EKG heartbeat pulse shape (single cycle: flat -> rise -> fall -> recover -> flat)
function getPulseHeight(x: number): number {
  const Hp = 1.55; // Increased peak height to make logo vertically taller and more prominent
  const Ht = 1.10; // Increased trough depth
  
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
const ds = 0.09; // Spaced out curve step (constant distance along the EKG path)
const radius = 0.15; // Radius of the hollow tube
const N = 6; // Number of pixels around the circumference forming a hollow tube

// Pre-generate base coordinates of cubes using uniform arc-length sampling
const cubes: { basePosition: [number, number, number]; id: string }[] = [];
let currentX = startX;
let currentY = getPulseHeight(startX);
let idCounter = 0;

const addRing = (cx: number, cy: number) => {
  for (let i = 0; i < N; i++) {
    const theta = (i / N) * Math.PI * 2;
    const y = cy + radius * Math.cos(theta);
    const z = radius * Math.sin(theta);
    cubes.push({
      basePosition: [cx, y, z],
      id: `${cx.toFixed(3)}_${i}_${idCounter++}`
    });
  }
};

// Start by placing the first ring
addRing(currentX, currentY);

// Numerically integrate along the EKG curve for uniform thickness
while (currentX < endX) {
  let accumulatedDistance = 0;
  let tempX = currentX;
  let tempY = currentY;
  const integrationStep = 0.001; // Small X increments for precision
  
  while (accumulatedDistance < ds && tempX < endX) {
    tempX += integrationStep;
    const nextY = getPulseHeight(tempX);
    const dx = tempX - currentX;
    const dy = nextY - currentY;
    accumulatedDistance = Math.sqrt(dx * dx + dy * dy);
  }
  
  currentX = tempX;
  currentY = getPulseHeight(currentX);
  
  if (currentX <= endX) {
    addRing(currentX, currentY);
  }
}

interface PulseModelProps {
  isHovered: React.RefObject<boolean>;
}

function PulseModel({ isHovered }: PulseModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const globalMouse = useRef({ x: 0, y: 0 });

  // Track cursor position globally across the entire screen window for perspective tilt
  useEffect(() => {
    const handleGlobalMouseMove = (event: MouseEvent) => {
      // Normalize position between -1 and 1
      globalMouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      globalMouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Auto-rotation baseline oscillation on Y (gentle horizontal swaying)
      const baseY = Math.sin(time * 0.4) * 0.15;
      
      // Global target rotations driven by window-wide mouse position
      const targetY = baseY + globalMouse.current.x * 0.35;
      const targetX = globalMouse.current.y * 0.3;
      const targetZ = -globalMouse.current.x * 0.08;
      
      // Smooth interpolation (lerp)
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.08;
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.08;
      groupRef.current.rotation.z += (targetZ - groupRef.current.rotation.z) * 0.08;

      // Project Canvas local pointer NDC [-1, 1] into 3D scene space for local parting effect
      const pointerX = state.pointer.x;
      const pointerY = state.pointer.y;
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

        // Initialize smooth parting coordinates in userData
        if (child.userData.pushX === undefined) child.userData.pushX = 0;
        if (child.userData.pushY === undefined) child.userData.pushY = 0;

        // 2. Interactive parting effect (disperse cubes when cursor is near)
        let targetPushX = 0;
        let targetPushY = 0;
        
        // Only trigger parting effect when mouse is actively inside the logo container
        if (isHovered.current) {
          const dx = origX - mx;
          const dy = origY - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          const pushRadius = 0.95; // Radius of mouse parting influence
          if (dist < pushRadius) {
            const force = (1 - dist / pushRadius) * 0.42; // Max push distance: 0.42 units
            const angle = dist > 0.01 ? Math.atan2(dy, dx) : Math.random() * Math.PI * 2;
            targetPushX = Math.cos(angle) * force;
            targetPushY = Math.sin(angle) * force;
          }
        }

        // Smoothly interpolate the push displacement using a lerp factor
        child.userData.pushX += (targetPushX - child.userData.pushX) * 0.12;
        child.userData.pushY += (targetPushY - child.userData.pushY) * 0.12;

        // Apply updated position in local space
        child.position.set(
          origX + wiggleX + child.userData.pushX,
          origY + wiggleY + child.userData.pushY,
          origZ + wiggleZ
        );

        // 3. Scanline/CRT pixel scale flicker (Futuristic digital screen breathe)
        const scaleFlicker = 1 + Math.sin(time * 12 + origX * 15) * 0.08;
        child.scale.set(scaleFlicker, scaleFlicker, scaleFlicker);
      });
    }
  });

  return (
    <group ref={groupRef} scale={0.85}>
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
  const containerRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onEnter = () => {
      isHovered.current = true;
    };
    const onLeave = () => {
      isHovered.current = false;
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {/* Adjusted camera position z to 5.4 to prevent side-cutting of the 3D model */}
      <Canvas camera={{ position: [0, 0, 5.4], fov: 45 }}>
        <ambientLight intensity={0.15} />
        
        {/* Key lights for 3D depth and cube face shading */}
        <pointLight position={[5, 10, 5]} intensity={2.0} />
        <pointLight position={[-5, -10, -5]} intensity={0.3} />
        
        {/* Soft center-bottom point light to produce the glow/reflection */}
        <pointLight position={[0, -1.2, 0.3]} intensity={2.5} distance={3.0} color="#ffffff" />
        
        <PulseModel isHovered={isHovered} />
      </Canvas>
    </div>
  );
}

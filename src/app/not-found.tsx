"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";

interface Particle {
  x: number;
  y: number;
  bx: number;
  by: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  speed: number;
}

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();

    // Setup offscreen canvas to render "404" and sample pixel positions
    const offscreenCanvas = document.createElement("canvas");
    const offscreenCtx = offscreenCanvas.getContext("2d");
    
    // Scale text based on container size
    const isMobile = window.innerWidth < 768;
    const textScale = isMobile ? 0.75 : 1.0;
    
    const textWidth = 500 * textScale;
    const textHeight = 220 * textScale;
    offscreenCanvas.width = textWidth;
    offscreenCanvas.height = textHeight;

    if (offscreenCtx) {
      offscreenCtx.fillStyle = "#ffffff";
      // Using Outfit or a modern high-end system sans-serif font
      offscreenCtx.font = `900 ${Math.floor(160 * textScale)}px system-ui, -apple-system, sans-serif`;
      offscreenCtx.textAlign = "center";
      offscreenCtx.textBaseline = "middle";
      offscreenCtx.fillText("404", textWidth / 2, textHeight / 2);
    }

    const imgData = offscreenCtx ? offscreenCtx.getImageData(0, 0, textWidth, textHeight) : null;
    const data = imgData ? imgData.data : [];
    
    const particles: Particle[] = [];
    const gap = isMobile ? 3 : 2.5; // pixel spacing

    const viewWidth = canvas.width / (window.devicePixelRatio || 1);
    const viewHeight = canvas.height / (window.devicePixelRatio || 1);

    if (imgData) {
      for (let y = 0; y < textHeight; y += gap) {
        for (let x = 0; x < textWidth; x += gap) {
          const index = (Math.floor(y) * textWidth + Math.floor(x)) * 4;
          if (data[index + 3] > 128) {
            // Spawn particles at random points around the center for a glowing futuristic assembly
            particles.push({
              x: viewWidth / 2 + (Math.random() - 0.5) * 600,
              y: viewHeight / 2 + (Math.random() - 0.5) * 400,
              bx: x,
              by: y,
              vx: (Math.random() - 0.5) * 2,
              vy: (Math.random() - 0.5) * 2,
              size: Math.random() * 1.6 + 1.2,
              alpha: Math.random() * 0.35 + 0.65,
              color: Math.random() > 0.42 ? "#ffffff" : "#5865f2", // glowing white & AP Lab indigo
              speed: Math.random() * 0.04 + 0.025, // spring rate
            });
          }
        }
      }
    }

    // Mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
      targetX: -1000,
      targetY: -1000,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
        mouse.active = true;
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resizeCanvas();
      }, 100);
    };
    window.addEventListener("resize", handleResize);

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 1;
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, w, h);

      // Smoothly interpolate mouse target position for fluid drag trails
      if (mouse.active) {
        if (mouse.x === -1000) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        } else {
          mouse.x += (mouse.targetX - mouse.x) * 0.12;
          mouse.y += (mouse.targetY - mouse.y) * 0.12;
        }
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }

      // Draw subtle glow ring behind cursor
      if (mouse.active && mouse.x !== -1000) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 110);
        gradient.addColorStop(0, "rgba(88, 101, 242, 0.08)");
        gradient.addColorStop(0.5, "rgba(88, 101, 242, 0.03)");
        gradient.addColorStop(1, "rgba(88, 101, 242, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 110, 0, Math.PI * 2);
        ctx.fill();
      }

      const centerX = w / 2;
      const centerY = h / 2;

      // Update and draw particles
      particles.forEach((p, index) => {
        // Base target position centered in viewport
        const tx = centerX - textWidth / 2 + p.bx;
        const ty = centerY - textHeight / 2 + p.by;

        // 1. Hover/Repulsion Force
        let force = 0;
        let pushX = 0;
        let pushY = 0;

        if (mouse.active && mouse.x !== -1000) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const pushRadius = 110;

          if (dist < pushRadius) {
            force = (pushRadius - dist) / pushRadius; // 0 to 1
            const strength = 14;
            const angle = Math.atan2(dy, dx);
            
            // Linear push
            pushX = Math.cos(angle) * force * strength;
            pushY = Math.sin(angle) * force * strength;

            // Swirl / Vortex rotation component
            const swirlStrength = 3.0;
            const swirlAngle = angle + Math.PI / 2;
            pushX += Math.cos(swirlAngle) * force * swirlStrength;
            pushY += Math.sin(swirlAngle) * force * swirlStrength;
          }
        }

        // 2. Base Spring Return Force
        const springX = (tx - p.x) * p.speed;
        const springY = (ty - p.y) * p.speed;

        // Apply forces to velocity
        p.vx += springX + pushX;
        p.vy += springY + pushY;

        // Friction / Damping
        p.vx *= 0.86;
        p.vy *= 0.86;

        // Update positions
        p.x += p.vx;
        p.y += p.vy;

        // 3. Subtle floating stardust noise (ambient micro-sway)
        p.x += Math.sin(time * 0.03 + p.bx * 0.04) * 0.07;
        p.y += Math.cos(time * 0.03 + p.by * 0.04) * 0.07;

        // Draw dynamic connecting grid lines for particles near cursor (constellation grid)
        if (mouse.active && mouse.x !== -1000) {
          const dxToMouse = p.x - mouse.x;
          const dyToMouse = p.y - mouse.y;
          const distToMouse = Math.sqrt(dxToMouse * dxToMouse + dyToMouse * dyToMouse);

          if (distToMouse < 60) {
            // Check a tiny spatial slice of nearby particles in the list
            for (let j = index + 1; j < index + 16; j++) {
              const p2 = particles[j % particles.length];
              const dx2 = p.x - p2.x;
              const dy2 = p.y - p2.y;
              const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

              if (dist2 < 28) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(88, 101, 242, ${0.14 * (1 - dist2 / 28) * (1 - distToMouse / 60)})`;
                ctx.lineWidth = 0.45;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
              }
            }
          }
        }

        // Draw particle
        ctx.beginPath();
        const pulse = 1 + Math.sin(time * 0.05 + p.bx) * 0.15; // subtle size glow breathe
        ctx.arc(p.x, p.y, p.size * pulse, 0, Math.PI * 2);
        
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-black text-white relative overflow-hidden select-none">
      {/* Home Page Navbar */}
      <Navbar />

      {/* Main Canvas Area */}
      <div 
        ref={containerRef} 
        className="flex-1 w-full relative flex items-center justify-center pt-24"
      >
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 block w-full h-full cursor-default z-0"
        />

        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.015] blur-[160px] rounded-full pointer-events-none -z-10" />
      </div>

      {/* Action Footer */}
      <div className="w-full flex flex-col items-center pb-24 z-10">
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center space-x-3 px-10 py-5 rounded-full bg-white text-black font-manrope font-bold text-sm tracking-widest uppercase hover:bg-neutral-200 shadow-[0_12px_40px_rgba(255,255,255,0.15)] transition-all duration-300"
          >
            <span>Return to Home Center</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

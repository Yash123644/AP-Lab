"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { PixelCourseBackground } from "@/components/PixelCourseBackground";

interface CourseThemeBackgroundProps {
  themeId?: string;
  accentColor?: string;
}

export function CourseThemeBackground({ themeId = "dark-matrix", accentColor = "#3b82f6" }: CourseThemeBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (themeId !== "cosmic-nebula" && themeId !== "cyber-grid" && themeId !== "golden-starlight") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resize();
    window.addEventListener("resize", resize);

    // Particle setup
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.2
    }));

    let scanLineY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (themeId === "cosmic-nebula") {
        // Deep purple/indigo particles
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          ctx.fillStyle = `rgba(168, 85, 247, ${p.alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 1.5, 0, Math.PI * 2);
          ctx.fill();
        });
      } else if (themeId === "cyber-grid") {
        // Scanning laser beam
        scanLineY += 1.5;
        if (scanLineY > height) scanLineY = 0;

        ctx.strokeStyle = "rgba(6, 182, 212, 0.25)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, scanLineY);
        ctx.lineTo(width, scanLineY);
        ctx.stroke();

        particles.forEach((p) => {
          p.x += p.vx * 0.5;
          p.y += p.vy * 0.5;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          ctx.fillStyle = `rgba(52, 211, 153, ${p.alpha * 0.8})`;
          ctx.fillRect(p.x, p.y, 2, 2);
        });
      } else if (themeId === "golden-starlight") {
        // Golden floating dust
        particles.forEach((p) => {
          p.y -= 0.3;
          if (p.y < 0) p.y = height;

          ctx.fillStyle = `rgba(245, 158, 11, ${p.alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, [themeId]);

  if (themeId === "cosmic-nebula") {
    return (
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[#070514] overflow-hidden select-none">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-purple-600/15 blur-[140px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-indigo-600/15 blur-[150px] rounded-full" />
      </div>
    );
  }

  if (themeId === "cyber-grid") {
    return (
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[#03090e] overflow-hidden select-none">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(6, 182, 212, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full" />
      </div>
    );
  }

  if (themeId === "minimal-slate") {
    return (
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[#0b0c10] overflow-hidden select-none">
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.03] blur-[120px] rounded-full" />
      </div>
    );
  }

  if (themeId === "golden-starlight") {
    return (
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[#0d0904] overflow-hidden select-none">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[20%] right-[15%] w-[550px] h-[550px] bg-orange-600/10 blur-[150px] rounded-full" />
      </div>
    );
  }

  // Default: Dark Matrix (Pixel Dot Matrix Overlay with floating academic symbols)
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 bg-[#03040a] overflow-hidden select-none">
      <PixelCourseBackground />
      <div 
        className="absolute top-[10%] left-[5%] w-[40%] h-[40%] blur-[130px] rounded-full opacity-50"
        style={{ backgroundColor: `${accentColor}12` }}
      />
    </div>
  );
}

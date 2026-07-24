"use client";

import React, { useEffect, useRef } from "react";

export function SandWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let time = 0;

    const resize = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      time += 0.006;
      ctx.clearRect(0, 0, width, height);

      // Base deep dark slate background
      ctx.fillStyle = "#03040a";
      ctx.fillRect(0, 0, width, height);

      // 1. Draw smooth primary sand wave ridge
      const grad1 = ctx.createLinearGradient(0, 0, width, height);
      grad1.addColorStop(0, "rgba(7, 16, 28, 0.95)");
      grad1.addColorStop(0.4, "rgba(24, 45, 66, 0.75)");
      grad1.addColorStop(0.7, "rgba(72, 118, 148, 0.45)");
      grad1.addColorStop(1, "rgba(3, 4, 10, 0.95)");

      ctx.beginPath();
      ctx.moveTo(0, 0);

      // Top wave curve
      for (let x = 0; x <= width; x += 15) {
        const normX = x / width;
        const wave1 = Math.sin(normX * 3.5 + time) * 45;
        const wave2 = Math.cos(normX * 2.2 - time * 0.8) * 35;
        const y = height * 0.45 + wave1 + wave2;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, 0);
      ctx.closePath();
      ctx.fillStyle = grad1;
      ctx.fill();

      // 2. Draw secondary highlighted sand dune wave (matching the cyan/slate sheen in reference photo)
      const grad2 = ctx.createLinearGradient(width * 0.2, 0, width * 0.9, height * 0.8);
      grad2.addColorStop(0, "rgba(100, 160, 190, 0.0)");
      grad2.addColorStop(0.5, "rgba(140, 195, 225, 0.22)");
      grad2.addColorStop(0.8, "rgba(45, 90, 120, 0.15)");
      grad2.addColorStop(1, "rgba(0, 0, 0, 0.0)");

      ctx.beginPath();
      ctx.moveTo(0, height * 0.1);

      for (let x = 0; x <= width; x += 15) {
        const normX = x / width;
        const waveA = Math.sin(normX * 4 + time * 1.2) * 55;
        const waveB = Math.cos(normX * 1.8 + time * 0.6) * 40;
        const y = height * 0.38 + waveA + waveB;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height * 0.9);
      ctx.lineTo(0, height * 0.9);
      ctx.closePath();
      ctx.fillStyle = grad2;
      ctx.fill();

      // 3. Ambient specular lighting streak across the dune fold
      const streakGrad = ctx.createRadialGradient(
        width * 0.65 + Math.sin(time * 0.5) * 60,
        height * 0.35 + Math.cos(time * 0.5) * 30,
        20,
        width * 0.65,
        height * 0.35,
        width * 0.45
      );
      streakGrad.addColorStop(0, "rgba(180, 225, 245, 0.18)");
      streakGrad.addColorStop(0.5, "rgba(90, 150, 180, 0.08)");
      streakGrad.addColorStop(1, "rgba(0, 0, 0, 0.0)");

      ctx.fillStyle = streakGrad;
      ctx.fillRect(0, 0, width, height);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#03040a]">
      {/* 2D Canvas Sand Dune Wave Animation */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover opacity-90"
      />

      {/* Subtle Grain Overlay for authentic textured dune feel */}
      <div 
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Bottom fade mask to seamlessly blend into lower dark section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#03040a] via-[#03040a]/80 to-transparent pointer-events-none" />
    </div>
  );
}

"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";

interface Point {
  x: number;
  y: number;
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

    // Fixed size offscreen canvas for crisp text sampling
    const offscreenCanvas = document.createElement("canvas");
    const offscreenCtx = offscreenCanvas.getContext("2d");
    const textWidth = 1000;
    const textHeight = 500;
    offscreenCanvas.width = textWidth;
    offscreenCanvas.height = textHeight;

    if (offscreenCtx) {
      offscreenCtx.fillStyle = "#ffffff";
      offscreenCtx.font = "900 290px system-ui, -apple-system, sans-serif";
      offscreenCtx.textAlign = "center";
      offscreenCtx.textBaseline = "middle";
      offscreenCtx.fillText("404", textWidth / 2, textHeight / 2);
    }

    const imgData = offscreenCtx ? offscreenCtx.getImageData(0, 0, textWidth, textHeight) : null;
    const data = imgData ? imgData.data : [];
    
    // Sample coordinates of the text pixels
    const textPoints: Point[] = [];
    const step = 3.5; // Controls fiber density and performance
    if (imgData) {
      for (let y = 0; y < textHeight; y += step) {
        for (let x = 0; x < textWidth; x += step) {
          const index = (Math.floor(y) * textWidth + Math.floor(x)) * 4;
          if (data[index + 3] > 128) {
            textPoints.push({ x, y });
          }
        }
      }
    }

    // Set canvas dimensions
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();

    // Mouse coordinates (relative to scaled canvas)
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      // We want coordinates in standard CSS pixels since ctx.scale(dpr, dpr) takes care of resolution scaling
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

    const animate = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);

      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);

      // Smoothly interpolate mouse position for a fluid smudge/pull effect
      if (mouse.active) {
        if (mouse.x === -1000) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        } else {
          mouse.x += (mouse.targetX - mouse.x) * 0.15;
          mouse.y += (mouse.targetY - mouse.y) * 0.15;
        }
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }

      // Calculate centering offset for the text image
      const scale = Math.min(w / textWidth, h / textHeight) * 0.85;
      const drawWidth = textWidth * scale;
      const drawHeight = textHeight * scale;
      const dx = (w - drawWidth) / 2;
      const dy = (h - drawHeight) / 2;

      // Step 1: Draw the solid crisp white 404 text
      ctx.drawImage(offscreenCanvas, dx, dy, drawWidth, drawHeight);

      // Step 2: Erase text under the cursor using circular gradient mask
      if (mouse.active && mouse.x !== -1000) {
        ctx.globalCompositeOperation = "destination-out";
        const eraseRadius = 135;
        const eraseGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, eraseRadius);
        eraseGrad.addColorStop(0, "rgba(0, 0, 0, 1.0)");
        eraseGrad.addColorStop(0.3, "rgba(0, 0, 0, 0.95)");
        eraseGrad.addColorStop(0.7, "rgba(0, 0, 0, 0.35)");
        eraseGrad.addColorStop(1, "rgba(0, 0, 0, 0.0)");
        
        ctx.fillStyle = eraseGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, eraseRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";

        // Step 3: Draw fuzzy, grainy fibers stretching from erased coordinates towards the cursor
        ctx.lineWidth = 0.5;

        textPoints.forEach((p) => {
          // Map to current screen coordinate
          const sx = dx + p.x * scale;
          const sy = dy + p.y * scale;

          const diffX = mouse.x - sx;
          const diffY = mouse.y - sy;
          const dist = Math.sqrt(diffX * diffX + diffY * diffY);
          const pullRadius = 140;

          if (dist < pullRadius) {
            // Eased pull force: stronger as it gets closer to cursor
            const pull = Math.pow((pullRadius - dist) / pullRadius, 2.0);

            // Stretches towards the cursor with organic grainy noise
            const tx = sx + diffX * pull * 0.65 + (Math.random() - 0.5) * 14 * pull;
            const ty = sy + diffY * pull * 0.65 + (Math.random() - 0.5) * 14 * pull;

            // Draw line fiber
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 + 0.45 * pull})`;
            ctx.moveTo(sx, sy);
            ctx.lineTo(tx, ty);
            ctx.stroke();

            // Render grain noise particles around target pull location
            if (Math.random() < 0.22) {
              ctx.fillStyle = `rgba(255, 255, 255, ${0.25 + 0.5 * pull})`;
              ctx.fillRect(
                tx + (Math.random() - 0.5) * 8 * pull,
                ty + (Math.random() - 0.5) * 8 * pull,
                1.2,
                1.2
              );
            }
          }
        });
      }

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

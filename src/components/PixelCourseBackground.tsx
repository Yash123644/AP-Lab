"use client";

import { useEffect, useRef } from "react";

interface PixelCourseBackgroundProps {
  opacity?: number;
  pixelSize?: number;
}

export function PixelCourseBackground({
  opacity = 0.22,
  pixelSize = 8,
}: PixelCourseBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Offscreen cached canvas for static dot grid background
    let dotCanvas: HTMLCanvasElement | null = null;

    const renderDotGridCache = (w: number, h: number) => {
      dotCanvas = document.createElement("canvas");
      dotCanvas.width = w;
      dotCanvas.height = h;
      const dotCtx = dotCanvas.getContext("2d");
      if (!dotCtx) return;

      const dotSpacing = 32;
      dotCtx.fillStyle = "rgba(255, 255, 255, 0.14)";
      for (let x = dotSpacing / 2; x < w; x += dotSpacing) {
        for (let y = dotSpacing / 2; y < h; y += dotSpacing) {
          dotCtx.fillRect(Math.floor(x), Math.floor(y), 1.8, 1.8);
        }
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      ctx.imageSmoothingEnabled = false;
      renderDotGridCache(width, height);
    };

    resize();
    window.addEventListener("resize", resize);

    // Color definitions for clean muted columns
    const mutedColor = "rgba(148, 163, 184, 0.75)";
    const mutedLight = "rgba(203, 213, 225, 0.85)";
    const mutedDim = "rgba(100, 116, 139, 0.5)";
    const mutedTeal = "rgba(56, 189, 248, 0.65)";

    const drawPixelRect = (px: number, py: number, w: number, h: number, color = mutedColor, alpha = 1.0) => {
      ctx.fillStyle = color;
      ctx.globalAlpha = alpha * opacity;
      ctx.fillRect(Math.floor(px), Math.floor(py), Math.floor(w), Math.floor(h));
      ctx.globalAlpha = 1.0;
    };

    let time = 0;
    let inView = true;

    // -------------------------------------------------------------------------
    // COLUMN 1: FULL-HEIGHT PIXEL DNA DOUBLE HELIX COLUMN (Far Left)
    // -------------------------------------------------------------------------
    const drawDNAColumn = (t: number) => {
      const p = pixelSize;
      const colX = Math.max(60, width * 0.07);
      const stepY = p * 1.5;
      const totalSteps = Math.ceil(height / stepY) + 2;

      for (let i = 0; i < totalSteps; i++) {
        const py = i * stepY;
        const angle = t * 1.8 + i * 0.35;
        const span = Math.sin(angle) * p * 4.2;
        const strandOpacity = Math.abs(Math.cos(angle)) * 0.65 + 0.35;

        // Left & Right Helix Nodes
        drawPixelRect(colX - span - p * 0.6, py, p * 1.2, p * 1.2, mutedLight, strandOpacity);
        drawPixelRect(colX + span - p * 0.6, py, p * 1.2, p * 1.2, mutedLight, strandOpacity);

        // Base-pair crossbar rungs
        if (Math.abs(span) > p * 0.8) {
          drawPixelRect(colX - Math.abs(span), py + p * 0.3, Math.abs(span) * 2, p * 0.5, mutedTeal, strandOpacity * 0.35);
        }
      }
    };

    // -------------------------------------------------------------------------
    // COLUMN 2: FULL-HEIGHT ANIMATED GRAPH & HISTOGRAM COLUMN (Mid-Left)
    // -------------------------------------------------------------------------
    const drawGraphColumn = (t: number) => {
      const p = pixelSize;
      const colX = Math.max(180, width * 0.26);
      const sectionHeight = p * 18;
      const totalSections = Math.ceil(height / sectionHeight) + 1;

      for (let s = 0; s < totalSections; s++) {
        const startY = s * sectionHeight;
        const barHeights = [4, 7, 5, 9, 6, 8, 4];
        const barW = p * 1.2;
        const gap = p * 0.6;

        // Vertical Axis Line
        drawPixelRect(colX - p, startY, p * 0.6, sectionHeight, mutedDim, 0.4);

        // Pulsing Histogram Bars
        barHeights.forEach((h, idx) => {
          const dynH = p * (h + Math.sin(t * 3 + s + idx * 0.8) * 1.5);
          const bx = colX + idx * (barW + gap);
          const by = startY + sectionHeight - dynH - p * 2;
          drawPixelRect(bx, by, barW, dynH, mutedColor, 0.6);
        });

        // Sine Wave Line overlaying bars
        ctx.strokeStyle = mutedLight;
        ctx.lineWidth = p * 0.5;
        ctx.globalAlpha = opacity * 0.75;
        ctx.beginPath();
        barHeights.forEach((h, idx) => {
          const dynH = p * (h + Math.sin(t * 3 + s + idx * 0.8) * 1.5);
          const bx = colX + idx * (barW + gap) + barW / 2;
          const by = startY + sectionHeight - dynH - p * 2;
          if (idx === 0) ctx.moveTo(bx, by);
          else ctx.lineTo(bx, by);
        });
        ctx.stroke();
        ctx.globalAlpha = 1.0;
      }
    };

    // -------------------------------------------------------------------------
    // COLUMN 3: FULL-HEIGHT CLASSICAL TEMPLE PILLAR COLUMN (Mid-Right)
    // -------------------------------------------------------------------------
    const drawPillarColumn = (t: number) => {
      const p = pixelSize;
      const colX = Math.max(width - 240, width * 0.74);
      const pillarSectionH = p * 22;
      const totalSections = Math.ceil(height / pillarSectionH) + 1;

      for (let s = 0; s < totalSections; s++) {
        const sy = s * pillarSectionH;

        // Repeating Capital Top
        drawPixelRect(colX - p * 3, sy, p * 6, p, mutedLight, 0.9);
        drawPixelRect(colX - p * 2, sy + p, p * 4, p, mutedColor, 0.8);

        // Fluted Shafts
        drawPixelRect(colX - p * 2, sy + p * 2, p * 0.8, pillarSectionH - p * 4, mutedColor, 0.6);
        drawPixelRect(colX - p * 0.4, sy + p * 2, p * 0.8, pillarSectionH - p * 4, mutedColor, 0.6);
        drawPixelRect(colX + p * 1.2, sy + p * 2, p * 0.8, pillarSectionH - p * 4, mutedColor, 0.6);

        // Pulsing Energy Ring traveling down column shaft
        const pulseY = sy + p * 2 + ((t * 40 + s * 15) % (pillarSectionH - p * 4));
        drawPixelRect(colX - p * 2.5, pulseY, p * 5, p * 0.8, mutedLight, 0.8);

        // Plinth Base Bottom
        drawPixelRect(colX - p * 3, sy + pillarSectionH - p, p * 6, p, mutedLight, 0.9);
      }
    };

    // -------------------------------------------------------------------------
    // COLUMN 4: FULL-HEIGHT CONSTANT BINARY MATRIX STREAM COLUMN (Far Right)
    // -------------------------------------------------------------------------
    const drawMatrixColumn = (t: number) => {
      const p = pixelSize;
      const colX = Math.max(width - 60, width * 0.94);
      const stepY = p * 2.8;
      const totalBits = Math.ceil(height / stepY) + 2;

      for (let r = 0; r < totalBits; r++) {
        const sy = ((r * stepY + t * 50) % (height + stepY)) - stepY;
        const bit = (r + Math.floor(t * 5)) % 2;
        const bitAlpha = (r % 3 === 0) ? 0.9 : 0.5;

        if (bit === 1) {
          // Draw Pixel '1'
          drawPixelRect(colX, sy, p * 0.8, p * 2.2, mutedLight, bitAlpha);
          drawPixelRect(colX - p * 0.6, sy + p * 0.4, p * 0.6, p * 0.6, mutedLight, bitAlpha);
        } else {
          // Draw Pixel '0'
          drawPixelRect(colX - p * 0.6, sy, p * 2, p * 0.6, mutedColor, bitAlpha);
          drawPixelRect(colX - p * 0.6, sy + p * 1.6, p * 2, p * 0.6, mutedColor, bitAlpha);
          drawPixelRect(colX - p * 0.6, sy, p * 0.6, p * 2.2, mutedColor, bitAlpha);
          drawPixelRect(colX + p * 0.8, sy, p * 0.6, p * 2.2, mutedColor, bitAlpha);
        }
      }
    };

    // -------------------------------------------------------------------------
    // MAIN RENDER LOOP
    // -------------------------------------------------------------------------
    const draw = () => {
      if (!inView) return;
      time += 0.016;

      ctx.clearRect(0, 0, width, height);

      // Layer 0: Hardware-Accelerated Cached Dot Matrix Grid Background
      if (dotCanvas) {
        ctx.drawImage(dotCanvas, 0, 0);
      }

      // Column 1: Full-Height Winding DNA Strand Column (Far Left)
      drawDNAColumn(time);

      // Column 2: Full-Height Animated Histogram & Sine Chart Column (Mid-Left)
      drawGraphColumn(time);

      // Column 3: Full-Height Classical Ionic Temple Pillar Column (Mid-Right)
      drawPillarColumn(time);

      // Column 4: Full-Height Constant Binary Matrix Stream Column (Far Right)
      drawMatrixColumn(time);

      animationFrameId = requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasInView = inView;
        inView = entry.isIntersecting;
        if (inView && !wasInView) {
          draw();
        }
      },
      { threshold: 0.01 }
    );
    observer.observe(canvas);

    draw();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [opacity, pixelSize]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-20 image-rendering-pixelated bg-[#03040a] blur-[0.5px]"
      style={{ display: "block" }}
    />
  );
}

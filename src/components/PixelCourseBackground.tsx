"use client";

import { useEffect, useRef } from "react";

interface PixelCourseBackgroundProps {
  opacity?: number;
  pixelSize?: number;
}

export function PixelCourseBackground({
  opacity = 0.24,
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
    // COLUMN 1: FULL-HEIGHT DNA HELIX COLUMN (AP Bio - 5% width)
    // -------------------------------------------------------------------------
    const drawDNAColumn = (t: number) => {
      const p = pixelSize;
      const colX = Math.max(50, width * 0.05);
      const stepY = p * 1.5;
      const totalSteps = Math.ceil(height / stepY) + 2;

      for (let i = 0; i < totalSteps; i++) {
        const py = i * stepY;
        const angle = t * 1.8 + i * 0.35;
        const span = Math.sin(angle) * p * 4.2;
        const strandOpacity = Math.abs(Math.cos(angle)) * 0.65 + 0.35;

        drawPixelRect(colX - span - p * 0.6, py, p * 1.2, p * 1.2, mutedLight, strandOpacity);
        drawPixelRect(colX + span - p * 0.6, py, p * 1.2, p * 1.2, mutedLight, strandOpacity);

        if (Math.abs(span) > p * 0.8) {
          drawPixelRect(colX - Math.abs(span), py + p * 0.3, Math.abs(span) * 2, p * 0.5, mutedTeal, strandOpacity * 0.35);
        }
      }
    };

    // -------------------------------------------------------------------------
    // COLUMN 2: FULL-HEIGHT CHEMISTRY MOLECULE & FLASK COLUMN (AP Chem - 20% width)
    // -------------------------------------------------------------------------
    const drawChemColumn = (t: number) => {
      const p = pixelSize;
      const colX = Math.max(160, width * 0.20);
      const sectionH = p * 16;
      const totalSections = Math.ceil(height / sectionH) + 1;

      for (let s = 0; s < totalSections; s++) {
        const sy = s * sectionH;

        // Benzene ring structure
        const molR = p * 3.5;
        for (let i = 0; i < 6; i++) {
          const a1 = (i * Math.PI * 2) / 6 + t * 0.4 + s;
          const a2 = ((i + 1) * Math.PI * 2) / 6 + t * 0.4 + s;
          const x1 = colX + Math.cos(a1) * molR;
          const y1 = sy + p * 6 + Math.sin(a1) * molR;
          const x2 = colX + Math.cos(a2) * molR;
          const y2 = sy + p * 6 + Math.sin(a2) * molR;

          ctx.strokeStyle = mutedDim;
          ctx.lineWidth = p * 0.5;
          ctx.globalAlpha = opacity * 0.4;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
          ctx.globalAlpha = 1.0;

          drawPixelRect(x1 - p * 0.5, y1 - p * 0.5, p, p, mutedLight, 0.7);
        }

        // Bubbling reaction dots connecting sections
        const bY = sy + p * 12 - ((t * 20 + s * 10) % (p * 8));
        drawPixelRect(colX, bY, p * 0.8, p * 0.8, "#ffffff", 0.8);
      }
    };

    // -------------------------------------------------------------------------
    // COLUMN 3: COMPLETE HORIZONTAL GRAPH & WAVE SPECTRUM COLUMN (AP Stats/Calc - 35% width)
    // -------------------------------------------------------------------------
    const drawGraphColumn = (t: number) => {
      const p = pixelSize;
      const colX = Math.max(270, width * 0.35);
      const stepY = p * 1.5;
      const totalSteps = Math.ceil(height / stepY) + 2;

      // Solid vertical Y-axis line running continuously from top to bottom
      drawPixelRect(colX, 0, p * 0.8, height, mutedLight, 0.9);

      // Continuous horizontal graph bar frequency lines extending outwards
      for (let i = 0; i < totalSteps; i++) {
        const py = i * stepY;
        const wave = Math.sin(t * 3 + py * 0.04);
        const barLengthLeft = p * (2 + Math.max(0, wave) * 4.5);
        const barLengthRight = p * (2 + Math.max(0, -wave) * 4.5);

        // Protruding horizontal bar frequency lines
        if (i % 2 === 0) {
          drawPixelRect(colX - barLengthLeft, py, barLengthLeft, p * 0.6, mutedColor, 0.65);
          drawPixelRect(colX + p * 0.8, py, barLengthRight, p * 0.6, mutedColor, 0.65);
        }
      }

      // Continuous unbroken smooth sine wave curve tracing along the axis top to bottom
      ctx.strokeStyle = mutedLight;
      ctx.lineWidth = p * 0.8;
      ctx.globalAlpha = opacity * 0.95;
      ctx.beginPath();
      for (let y = 0; y <= height + 20; y += 8) {
        const waveX = colX + Math.sin(t * 3.5 + y * 0.03) * p * 5;
        if (y === 0) ctx.moveTo(waveX, y);
        else ctx.lineTo(waveX, y);
      }
      ctx.stroke();
      ctx.globalAlpha = 1.0;
    };

    // -------------------------------------------------------------------------
    // COLUMN 4: FULL-HEIGHT ENGLISH LITERATURE BOOK COLUMN (AP Eng/Lit - 50% width)
    // -------------------------------------------------------------------------
    const drawEnglishColumn = (t: number) => {
      const p = pixelSize;
      const colX = Math.max(380, width * 0.50);
      const bookH = p * 14;
      const totalBooks = Math.ceil(height / bookH) + 1;

      for (let b = 0; b < totalBooks; b++) {
        const sy = b * bookH;

        // Open Book pages
        drawPixelRect(colX - p * 3, sy + p * 2, p * 2.8, p * 4, mutedColor, 0.7);
        drawPixelRect(colX + p * 0.2, sy + p * 2, p * 2.8, p * 4, mutedColor, 0.7);
        drawPixelRect(colX - p * 0.2, sy + p * 1.5, p * 0.4, p * 5, mutedLight, 0.9);

        // Horizontal lines of text on pages
        drawPixelRect(colX - p * 2.4, sy + p * 3, p * 1.8, p * 0.4, mutedLight, 0.6);
        drawPixelRect(colX - p * 2.4, sy + p * 4.2, p * 1.8, p * 0.4, mutedLight, 0.6);
        drawPixelRect(colX + p * 0.6, sy + p * 3, p * 1.8, p * 0.4, mutedLight, 0.6);
        drawPixelRect(colX + p * 0.6, sy + p * 4.2, p * 1.8, p * 0.4, mutedLight, 0.6);

        // Vertical connecting margin line
        drawPixelRect(colX, sy, p * 0.4, bookH, mutedDim, 0.35);
      }
    };

    // -------------------------------------------------------------------------
    // COLUMN 5: FULL-HEIGHT PSYCHOLOGY NEURAL SYNAPSE COLUMN (AP Psych - 65% width)
    // -------------------------------------------------------------------------
    const drawPsychColumn = (t: number) => {
      const p = pixelSize;
      const colX = Math.max(490, width * 0.65);
      const nodeH = p * 10;
      const totalNodes = Math.ceil(height / nodeH) + 1;

      // Continuous vertical axon spine
      drawPixelRect(colX, 0, p * 0.6, height, mutedDim, 0.4);

      for (let n = 0; n < totalNodes; n++) {
        const ny = n * nodeH;
        const offset = Math.sin(t * 2 + n) * p * 2.5;

        // Neural Node
        drawPixelRect(colX + offset - p * 0.8, ny - p * 0.8, p * 1.6, p * 1.6, mutedLight, 0.85);

        // Action potential signal pulse cascading down
        const pulseY = (t * 60 + n * 20) % height;
        drawPixelRect(colX - p * 1, pulseY, p * 2, p * 0.8, "#ffffff", 0.9);
      }
    };

    // -------------------------------------------------------------------------
    // COLUMN 6: FULL-HEIGHT CLASSICAL TEMPLE PILLAR COLUMN (AP History/Gov - 80% width)
    // -------------------------------------------------------------------------
    const drawPillarColumn = (t: number) => {
      const p = pixelSize;
      const colX = Math.max(width - 200, width * 0.80);
      const pillarSectionH = p * 20;
      const totalSections = Math.ceil(height / pillarSectionH) + 1;

      for (let s = 0; s < totalSections; s++) {
        const sy = s * pillarSectionH;

        // Capital Top
        drawPixelRect(colX - p * 3, sy, p * 6, p, mutedLight, 0.9);
        drawPixelRect(colX - p * 2, sy + p, p * 4, p, mutedColor, 0.8);

        // Fluted Shafts
        drawPixelRect(colX - p * 2, sy + p * 2, p * 0.8, pillarSectionH - p * 4, mutedColor, 0.6);
        drawPixelRect(colX - p * 0.4, sy + p * 2, p * 0.8, pillarSectionH - p * 4, mutedColor, 0.6);
        drawPixelRect(colX + p * 1.2, sy + p * 2, p * 0.8, pillarSectionH - p * 4, mutedColor, 0.6);

        // Traveling Energy Ring
        const pulseY = sy + p * 2 + ((t * 40 + s * 15) % (pillarSectionH - p * 4));
        drawPixelRect(colX - p * 2.5, pulseY, p * 5, p * 0.8, mutedLight, 0.8);

        // Plinth Base Bottom
        drawPixelRect(colX - p * 3, sy + pillarSectionH - p, p * 6, p, mutedLight, 0.9);
      }
    };

    // -------------------------------------------------------------------------
    // COLUMN 7: FULL-HEIGHT CONSTANT BINARY MATRIX STREAM COLUMN (AP CS A - 95% width)
    // -------------------------------------------------------------------------
    const drawMatrixColumn = (t: number) => {
      const p = pixelSize;
      const colX = Math.max(width - 50, width * 0.95);
      const stepY = p * 2.8;
      const totalBits = Math.ceil(height / stepY) + 2;

      for (let r = 0; r < totalBits; r++) {
        const sy = ((r * stepY + t * 50) % (height + stepY)) - stepY;
        const bit = (r + Math.floor(t * 5)) % 2;
        const bitAlpha = (r % 3 === 0) ? 0.9 : 0.5;

        if (bit === 1) {
          drawPixelRect(colX, sy, p * 0.8, p * 2.2, mutedLight, bitAlpha);
          drawPixelRect(colX - p * 0.6, sy + p * 0.4, p * 0.6, p * 0.6, mutedLight, bitAlpha);
        } else {
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

      // 7 Full-Height Animated Course Columns Spanning Screen
      drawDNAColumn(time);       // Col 1 (05%): AP Biology DNA
      drawChemColumn(time);      // Col 2 (20%): AP Chemistry Reaction
      drawGraphColumn(time);     // Col 3 (35%): AP Math/Stats Complete Horizontal Graph
      drawEnglishColumn(time);   // Col 4 (50%): AP English Literature Book & Scroll
      drawPsychColumn(time);     // Col 5 (65%): AP Psychology Neural Network
      drawPillarColumn(time);    // Col 6 (80%): AP History/Gov Classical Pillar
      drawMatrixColumn(time);    // Col 7 (95%): AP CS Binary Matrix Stream

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

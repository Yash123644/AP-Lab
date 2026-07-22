"use client";

import { useEffect, useRef } from "react";

interface PixelCourseBackgroundProps {
  opacity?: number;
  pixelSize?: number;
}

export function PixelCourseBackground({
  opacity = 0.14, // Faint, sleek background opacity
  pixelSize = 7,  // Sharp, authentic pixel grid size
}: PixelCourseBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const renderCanvas = () => {
      // Calculate full document height so canvas spans the entire scrollable area
      const width = Math.max(window.innerWidth, document.documentElement.clientWidth);
      const height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        window.innerHeight
      );

      canvas.width = width;
      canvas.height = height;
      ctx.imageSmoothingEnabled = false;

      // 1. Draw Deep Black Background Base
      ctx.fillStyle = "#03040a";
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Soft White Dot Matrix Pattern (Clean 0.16 opacity)
      const dotSpacing = 32;
      ctx.fillStyle = "rgba(255, 255, 255, 0.16)";
      for (let x = dotSpacing / 2; x < width; x += dotSpacing) {
        for (let y = dotSpacing / 2; y < height; y += dotSpacing) {
          ctx.fillRect(Math.floor(x), Math.floor(y), 1.8, 1.8);
        }
      }

      // Single, uniform light-grey color for ALL icons
      const iconColor = "#cbd5e1"; // Muted Slate/Light Grey
      const p = pixelSize;

      // -----------------------------------------------------------------------
      // Authentic, Connected Pixel-Art Symbol Drawers (No vector paths / No overlap)
      // -----------------------------------------------------------------------

      // Helper: Draw crisp pixel block relative to center (cx, cy)
      const drawPx = (cx: number, cy: number, dx: number, dy: number, w = 1, h = 1) => {
        ctx.fillRect(Math.floor(cx + dx * p), Math.floor(cy + dy * p), Math.floor(w * p), Math.floor(h * p));
      };

      // 1. Authentic Pixel Art DNA Helix
      const drawDNA = (cx: number, cy: number) => {
        const strand = [
          [-3, -4], [3, -4],
          [-2, -3], [2, -3],
          [-1, -2], [1, -2],
          [0, -1],
          [1, 0], [-1, 0],
          [2, 1], [-2, 1],
          [3, 2], [-3, 2],
          [2, 3], [-2, 3],
          [1, 4], [-1, 4]
        ];
        strand.forEach(([dx, dy]) => drawPx(cx, cy, dx, dy, 1, 1));
        // Cross rungs
        drawPx(cx, cy, -2, -3, 4, 0.8);
        drawPx(cx, cy, -2, 3, 4, 0.8);
      };

      // 2. Authentic Pixel Art Erlenmeyer Beaker
      const drawBeaker = (cx: number, cy: number) => {
        // Rim & Neck
        drawPx(cx, cy, -1.5, -3.5, 3, 0.8);
        drawPx(cx, cy, -0.8, -2.7, 1.6, 1.2);
        // Flared body
        drawPx(cx, cy, -1.5, -1.5, 3, 0.8);
        drawPx(cx, cy, -2.2, -0.7, 4.4, 0.8);
        drawPx(cx, cy, -3.0, 0.1, 6, 2.5);
        // Base rim
        drawPx(cx, cy, -3.2, 2.6, 6.4, 0.8);
      };

      // 3. Authentic Pixel Art Atom Orbit
      const drawAtom = (cx: number, cy: number) => {
        // Nucleus
        drawPx(cx, cy, -1, -1, 2, 2);
        // Orbit ring pixels
        const ring = [
          [0, -4], [1, -4], [-1, -4],
          [3, -3], [-3, -3],
          [4, -1], [-4, -1], [4, 0], [-4, 0], [4, 1], [-4, 1],
          [3, 3], [-3, 3],
          [0, 4], [1, 4], [-1, 4]
        ];
        ring.forEach(([dx, dy]) => drawPx(cx, cy, dx, dy, 1, 1));
      };

      // 4. Authentic Pixel Art Integral ∫
      const drawIntegral = (cx: number, cy: number) => {
        const pixels = [
          [1, -4], [2, -4], [3, -4],
          [1, -3],
          [1, -2],
          [0, -1],
          [0, 0],
          [0, 1],
          [-1, 2],
          [-1, 3],
          [-3, 4], [-2, 4], [-1, 4]
        ];
        pixels.forEach(([dx, dy]) => drawPx(cx, cy, dx, dy, 1, 1));
      };

      // 5. Authentic Pixel Art Summation Σ
      const drawSummation = (cx: number, cy: number) => {
        const pixels = [
          [-3, -4], [-2, -4], [-1, -4], [0, -4], [1, -4], [2, -4], [3, -4],
          [-2, -3],
          [-1, -2],
          [0, -1],
          [-1, 0],
          [-2, 1],
          [-3, 2],
          [-3, 4], [-2, 4], [-1, 4], [0, 4], [1, 4], [2, 4], [3, 4]
        ];
        pixels.forEach(([dx, dy]) => drawPx(cx, cy, dx, dy, 1, 1));
      };

      // 6. Authentic Pixel Art 3-Bar Histogram
      const drawGraphBar = (cx: number, cy: number) => {
        // Baseline
        drawPx(cx, cy, -3.5, 3.2, 7, 0.8);
        // Bar 1
        drawPx(cx, cy, -3, 0, 1.6, 3.2);
        // Bar 2
        drawPx(cx, cy, -0.8, -2.5, 1.6, 5.7);
        // Bar 3
        drawPx(cx, cy, 1.4, -1, 1.6, 4.2);
      };

      // 7. Authentic Pixel Art Sine Wave Curve
      const drawGraphCurve = (cx: number, cy: number) => {
        const wave = [
          [-4, 2], [-3, 1], [-2, 0], [-1, -1], [0, -2],
          [1, -1], [2, 0], [3, 1], [4, 2]
        ];
        wave.forEach(([dx, dy]) => drawPx(cx, cy, dx, dy, 1.2, 1.2));
      };

      // 8. Authentic Pixel Art Code Brackets { }
      const drawCodeBrackets = (cx: number, cy: number) => {
        // Left {
        const leftB = [[0, -3.5], [-1, -2.5], [-1, -1.5], [-2, -0.5], [-1, 0.5], [-1, 1.5], [0, 2.5]];
        leftB.forEach(([dx, dy]) => drawPx(cx, cy, -2 + dx, dy, 1, 1));
        // Right }
        const rightB = [[0, -3.5], [1, -2.5], [1, -1.5], [2, -0.5], [1, 0.5], [1, 1.5], [0, 2.5]];
        rightB.forEach(([dx, dy]) => drawPx(cx, cy, 2 + dx, dy, 1, 1));
      };

      // 9. Authentic Pixel Art Neural Synapse
      const drawNeural = (cx: number, cy: number) => {
        // Nodes
        drawPx(cx, cy, -3, -2, 1.8, 1.8);
        drawPx(cx, cy, 2, -1.5, 1.8, 1.8);
        drawPx(cx, cy, -0.5, 2, 1.8, 1.8);
        // Connectors
        drawPx(cx, cy, -2, -1, 2, 1);
        drawPx(cx, cy, 0.5, 0, 1.5, 1.5);
      };

      // 10. Authentic Pixel Art Open Book
      const drawBook = (cx: number, cy: number) => {
        // Center spine
        drawPx(cx, cy, -0.4, -2.5, 0.8, 5);
        // Left page top/bottom
        drawPx(cx, cy, -3.2, -2.2, 2.8, 0.8);
        drawPx(cx, cy, -3.5, -1.4, 0.8, 3.2);
        drawPx(cx, cy, -3.2, 1.8, 2.8, 0.8);
        // Right page top/bottom
        drawPx(cx, cy, 0.4, -2.2, 2.8, 0.8);
        drawPx(cx, cy, 2.7, -1.4, 0.8, 3.2);
        drawPx(cx, cy, 0.4, 1.8, 2.8, 0.8);
      };

      // 11. Authentic Pixel Art Dollar Sign ($)
      const drawDollar = (cx: number, cy: number) => {
        drawPx(cx, cy, -0.4, -3.5, 0.8, 7);
        const sPixels = [
          [-1.8, -2.5], [-0.8, -2.5], [0.2, -2.5], [1.2, -2.5],
          [-1.8, -1.5],
          [-1.8, -0.5], [-0.8, -0.5], [0.2, -0.5], [1.2, -0.5],
          [1.2, 0.5],
          [-1.8, 1.5], [-0.8, 1.5], [0.2, 1.5], [1.2, 1.5]
        ];
        sPixels.forEach(([dx, dy]) => drawPx(cx, cy, dx, dy, 0.9, 0.9));
      };

      // 12. Authentic Pixel Art Judge Gavel
      const drawGavel = (cx: number, cy: number) => {
        // Head
        drawPx(cx, cy, -2.5, -2.5, 5, 1.5);
        // Handle
        drawPx(cx, cy, -0.4, -1, 0.8, 4);
        // Sounding base block
        drawPx(cx, cy, -3, 3, 6, 0.8);
      };

      // 13. Authentic Pixel Art Temple Pillar
      const drawPillar = (cx: number, cy: number) => {
        drawPx(cx, cy, -2.5, -3, 5, 0.8);
        drawPx(cx, cy, -1.8, -2.2, 3.6, 0.6);
        drawPx(cx, cy, -1.4, -1.6, 0.7, 3.8);
        drawPx(cx, cy, -0.35, -1.6, 0.7, 3.8);
        drawPx(cx, cy, 0.7, -1.6, 0.7, 3.8);
        drawPx(cx, cy, -2.5, 2.2, 5, 0.8);
      };

      // Array of curated authentic pixel drawers
      const symbolDrawers = [
        drawDNA, drawBeaker, drawAtom, drawIntegral, drawSummation,
        drawGraphBar, drawGraphCurve, drawCodeBrackets, drawNeural,
        drawBook, drawDollar, drawGavel, drawPillar
      ];

      // 3. Render Deterministic Grid of Pixel-Art Symbols (Zero Reload Flicker / 100% Static Layout)
      const cols = 6;
      const rows = Math.ceil(height / (window.innerHeight / 4));
      const cellW = width / cols;
      const cellH = height / rows;

      ctx.fillStyle = iconColor;
      ctx.globalAlpha = opacity; // Faint, sleek uniform opacity pass

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cx = c * cellW + cellW * 0.5;
          const cy = r * cellH + cellH * 0.5;
          // Deterministic slot mapping (no Math.random on render!)
          const drawerIdx = (r * 5 + c * 3) % symbolDrawers.length;
          const drawer = symbolDrawers[drawerIdx];
          drawer(cx, cy);
        }
      }

      ctx.globalAlpha = 1.0;
    };

    renderCanvas();
    window.addEventListener("resize", renderCanvas);

    return () => {
      window.removeEventListener("resize", renderCanvas);
    };
  }, [opacity, pixelSize]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-20 image-rendering-pixelated bg-[#03040a]"
      style={{ display: "block" }}
    />
  );
}

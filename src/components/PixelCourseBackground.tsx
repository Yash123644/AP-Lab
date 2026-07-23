"use client";

import { useEffect, useRef } from "react";

interface PixelCourseBackgroundProps {
  opacity?: number;
  pixelSize?: number;
}

export function PixelCourseBackground({
  opacity = 0.14, // Faint, sleek background opacity
  pixelSize = 7,  // 1:1 Square Pixel Block Size
}: PixelCourseBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const renderCanvas = () => {
      const parent = canvas.parentElement;
      const width = parent ? parent.offsetWidth : window.innerWidth;
      const height = parent ? parent.offsetHeight : window.innerHeight;

      // Lock canvas dimensions to exact parent container resolution
      canvas.width = width;
      canvas.height = height;
      ctx.imageSmoothingEnabled = false;

      // 1. Draw Deep Black Background Base
      ctx.fillStyle = "#03040a";
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Soft White Dot Matrix Pattern
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

      // Helper: Draw crisp, 1:1 SQUARE pixel block (Guarantees zero horizontal stretching)
      const drawPx = (cx: number, cy: number, dx: number, dy: number, w = 1, h = 1) => {
        const px = Math.round(cx + dx * p);
        const py = Math.round(cy + dy * p);
        const pw = Math.round(w * p);
        const ph = Math.round(h * p);
        ctx.fillRect(px, py, pw, ph);
      };

      // -----------------------------------------------------------------------
      // Authentic 1:1 Square Pixel-Art Symbol Drawers
      // -----------------------------------------------------------------------

      // 1. DNA Helix
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
        drawPx(cx, cy, -2, -3, 4, 1);
        drawPx(cx, cy, -2, 3, 4, 1);
      };

      // 2. Erlenmeyer Beaker
      const drawBeaker = (cx: number, cy: number) => {
        drawPx(cx, cy, -1.5, -3.5, 3, 1);
        drawPx(cx, cy, -0.8, -2.5, 1.6, 1);
        drawPx(cx, cy, -1.5, -1.5, 3, 1);
        drawPx(cx, cy, -2.2, -0.5, 4.4, 1);
        drawPx(cx, cy, -3.0, 0.5, 6, 2);
        drawPx(cx, cy, -3.2, 2.5, 6.4, 1);
      };

      // 3. Atom Orbit
      const drawAtom = (cx: number, cy: number) => {
        drawPx(cx, cy, -1, -1, 2, 2);
        const ring = [
          [0, -4], [1, -4], [-1, -4],
          [3, -3], [-3, -3],
          [4, -1], [-4, -1], [4, 0], [-4, 0], [4, 1], [-4, 1],
          [3, 3], [-3, 3],
          [0, 4], [1, 4], [-1, 4]
        ];
        ring.forEach(([dx, dy]) => drawPx(cx, cy, dx, dy, 1, 1));
      };

      // 4. Integral ∫
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

      // 5. Summation Σ
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

      // 6. 3-Bar Histogram
      const drawGraphBar = (cx: number, cy: number) => {
        drawPx(cx, cy, -3.5, 3, 7, 1);
        drawPx(cx, cy, -3, 0, 1.6, 3);
        drawPx(cx, cy, -0.8, -2.5, 1.6, 5.5);
        drawPx(cx, cy, 1.4, -1, 1.6, 4);
      };

      // 7. Sine Wave Curve
      const drawGraphCurve = (cx: number, cy: number) => {
        const wave = [
          [-4, 2], [-3, 1], [-2, 0], [-1, -1], [0, -2],
          [1, -1], [2, 0], [3, 1], [4, 2]
        ];
        wave.forEach(([dx, dy]) => drawPx(cx, cy, dx, dy, 1, 1));
      };

      // 8. Code Brackets { }
      const drawCodeBrackets = (cx: number, cy: number) => {
        const leftB = [[0, -3.5], [-1, -2.5], [-1, -1.5], [-2, -0.5], [-1, 0.5], [-1, 1.5], [0, 2.5]];
        leftB.forEach(([dx, dy]) => drawPx(cx, cy, -2 + dx, dy, 1, 1));
        const rightB = [[0, -3.5], [1, -2.5], [1, -1.5], [2, -0.5], [1, 0.5], [1, 1.5], [0, 2.5]];
        rightB.forEach(([dx, dy]) => drawPx(cx, cy, 2 + dx, dy, 1, 1));
      };

      // 9. Neural Synapse
      const drawNeural = (cx: number, cy: number) => {
        drawPx(cx, cy, -3, -2, 1.8, 1.8);
        drawPx(cx, cy, 2, -1.5, 1.8, 1.8);
        drawPx(cx, cy, -0.5, 2, 1.8, 1.8);
        drawPx(cx, cy, -2, -1, 2, 1);
        drawPx(cx, cy, 0.5, 0, 1.5, 1.5);
      };

      // 10. Authentic Open Book Pixel Art
      const drawBook = (cx: number, cy: number) => {
        // Spine
        drawPx(cx, cy, -0.5, -4, 1, 8.5);
        
        // Left Page
        drawPx(cx, cy, -4.5, -4, 4, 1);    // top edge
        drawPx(cx, cy, -4.5, -4, 1, 7.5);  // outer edge
        drawPx(cx, cy, -4.5, 3.5, 4, 1);   // bottom edge
        // Left text lines
        drawPx(cx, cy, -3.2, -2, 2.2, 0.8);
        drawPx(cx, cy, -3.2, 0, 2.2, 0.8);

        // Right Page
        drawPx(cx, cy, 0.5, -4, 4, 1);     // top edge
        drawPx(cx, cy, 3.5, -4, 1, 7.5);   // outer edge
        drawPx(cx, cy, 0.5, 3.5, 4, 1);    // bottom edge
        // Right text lines
        drawPx(cx, cy, 1.0, -2, 2.2, 0.8);
        drawPx(cx, cy, 1.0, 0, 2.2, 0.8);
      };

      // 11. Dollar Sign ($)
      const drawDollar = (cx: number, cy: number) => {
        drawPx(cx, cy, -0.4, -3.5, 0.8, 7);
        const sPixels = [
          [-1.8, -2.5], [-0.8, -2.5], [0.2, -2.5], [1.2, -2.5],
          [-1.8, -1.5],
          [-1.8, -0.5], [-0.8, -0.5], [0.2, -0.5], [1.2, -0.5],
          [1.2, 0.5],
          [-1.8, 1.5], [-0.8, 1.5], [0.2, 1.5], [1.2, 1.5]
        ];
        sPixels.forEach(([dx, dy]) => drawPx(cx, cy, dx, dy, 1, 1));
      };

      // 12. Judge Gavel
      const drawGavel = (cx: number, cy: number) => {
        drawPx(cx, cy, -2.5, -2.5, 5, 1.5);
        drawPx(cx, cy, -0.4, -1, 0.8, 4);
        drawPx(cx, cy, -3, 3, 6, 1);
      };

      // 13. Temple Pillar
      const drawPillar = (cx: number, cy: number) => {
        drawPx(cx, cy, -2.5, -3, 5, 1);
        drawPx(cx, cy, -1.8, -2, 3.6, 0.8);
        drawPx(cx, cy, -1.4, -1.2, 0.8, 3.4);
        drawPx(cx, cy, -0.4, -1.2, 0.8, 3.4);
        drawPx(cx, cy, 0.6, -1.2, 0.8, 3.4);
        drawPx(cx, cy, -2.5, 2.2, 5, 1);
      };

      const symbolDrawers = [
        drawDNA, drawBeaker, drawAtom, drawIntegral, drawSummation,
        drawGraphBar, drawGraphCurve, drawCodeBrackets, drawNeural,
        drawBook, drawDollar, drawGavel, drawPillar
      ];

      // 3. Render Deterministic 1:1 Square Grid of Symbols
      const cols = 6;
      const rows = Math.ceil(height / (window.innerHeight / 4));
      const cellW = width / cols;
      const cellH = height / rows;

      ctx.fillStyle = iconColor;
      ctx.globalAlpha = opacity;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cx = c * cellW + cellW * 0.5;
          const cy = r * cellH + cellH * 0.5;
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
      className="fixed inset-0 w-full h-full pointer-events-none -z-20 image-rendering-pixelated bg-[#03040a]"
      style={{ display: "block" }}
    />
  );
}

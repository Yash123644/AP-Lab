"use client";

import { useEffect, useRef } from "react";

interface PixelCourseBackgroundProps {
  opacity?: number;
  pixelSize?: number;
}

export function PixelCourseBackground({
  opacity = 0.12, // Reduced symbol opacity for subtle, sleek ambient background
  pixelSize = 8,
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

      // 2. Draw Soft White Dot Matrix Pattern (Kept clean at 0.16 opacity)
      const dotSpacing = 32;
      ctx.fillStyle = "rgba(255, 255, 255, 0.16)";
      for (let x = dotSpacing / 2; x < width; x += dotSpacing) {
        for (let y = dotSpacing / 2; y < height; y += dotSpacing) {
          ctx.fillRect(Math.floor(x), Math.floor(y), 1.8, 1.8);
        }
      }

      // Helper: Draw non-overlapping solid pixel rect at uniform alpha
      const p = pixelSize;
      const iconColor = "#cbd5e1"; // Muted Slate/Light Grey

      const drawPixel = (px: number, py: number, w = p, h = p) => {
        ctx.fillRect(Math.floor(px), Math.floor(py), Math.floor(w), Math.floor(h));
      };

      // -----------------------------------------------------------------------
      // Clean, Non-Overlapping Uniform Minimalist Symbol Drawers
      // -----------------------------------------------------------------------

      // 1. DNA Helix
      const drawDNA = (cx: number, cy: number) => {
        ctx.fillStyle = iconColor;
        for (let i = -4; i <= 4; i++) {
          const py = cy + i * p * 1.4;
          const span = Math.sin(i * 0.5) * p * 3.2;
          drawPixel(cx - span - p * 0.5, py, p * 1.1, p * 1.1);
          drawPixel(cx + span - p * 0.5, py, p * 1.1, p * 1.1);
          if (Math.abs(span) > p * 0.8) {
            drawPixel(cx - Math.abs(span) + p * 0.5, py + p * 0.3, (Math.abs(span) - p * 0.5) * 2, p * 0.4);
          }
        }
      };

      // 2. Erlenmeyer Beaker
      const drawBeaker = (cx: number, cy: number) => {
        ctx.fillStyle = iconColor;
        drawPixel(cx - p * 1.5, cy - p * 3, p * 3, p * 0.8);
        drawPixel(cx - p * 0.8, cy - p * 2.2, p * 1.6, p * 1.5);
        drawPixel(cx - p * 2.5, cy - p * 0.7, p * 5, p * 3.5);
      };

      // 3. Atom Orbit
      const drawAtom = (cx: number, cy: number) => {
        ctx.fillStyle = iconColor;
        drawPixel(cx - p * 0.8, cy - p * 0.8, p * 1.6, p * 1.6);
        const r1 = p * 4;
        for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
          drawPixel(cx + Math.cos(a) * r1 - p * 0.4, cy + Math.sin(a) * r1 - p * 0.4, p * 0.8, p * 0.8);
        }
      };

      // 4. Integral ∫
      const drawIntegral = (cx: number, cy: number) => {
        ctx.fillStyle = iconColor;
        const pixels = [[2, -4], [3, -4], [1, -3], [1, -2], [1, -1], [1, 0], [1, 1], [1, 2], [1, 3], [0, 4], [-1, 4]];
        pixels.forEach(([dx, dy]) => {
          drawPixel(cx + dx * p * 0.8, cy + dy * p * 0.8, p * 0.9, p * 0.9);
        });
      };

      // 5. Summation Σ (Discrete grid points - zero overlap)
      const drawSummation = (cx: number, cy: number) => {
        ctx.fillStyle = iconColor;
        const sigmaPixels = [
          [-3, -4], [-2, -4], [-1, -4], [0, -4], [1, -4], [2, -4],
          [-2, -3], [-1, -2], [0, -1], [-1, 0], [-2, 1],
          [-3, 2], [-2, 3], [-1, 4], [0, 4], [1, 4], [2, 4]
        ];
        sigmaPixels.forEach(([dx, dy]) => {
          drawPixel(cx + dx * p * 0.75, cy + dy * p * 0.75, p * 0.9, p * 0.9);
        });
      };

      // 6. 3-Bar Histogram
      const drawGraphBar = (cx: number, cy: number) => {
        ctx.fillStyle = iconColor;
        const heights = [3, 5, 4];
        const barW = p * 1.2;
        const gap = p * 0.6;
        drawPixel(cx - p * 2.5, cy + p * 2.5, heights.length * (barW + gap), p * 0.6);
        heights.forEach((h, idx) => {
          const bx = cx - p * 2.5 + idx * (barW + gap);
          drawPixel(bx, cy + p * 2.5 - p * h, barW, p * h);
        });
      };

      // 7. Sine Wave Curve
      const drawGraphCurve = (cx: number, cy: number) => {
        ctx.fillStyle = iconColor;
        for (let i = -5; i <= 5; i++) {
          const x = i * p * 0.8;
          const normY = Math.sin(i * 0.5) * p * 2.5;
          drawPixel(cx + x, cy - normY, p, p);
        }
      };

      // 8. Code Brackets { }
      const drawCodeBrackets = (cx: number, cy: number) => {
        ctx.fillStyle = iconColor;
        const leftB = [[1, -3], [0, -2], [0, -1], [-1, 0], [0, 1], [0, 2], [1, 3]];
        leftB.forEach(([dx, dy]) => {
          drawPixel(cx - p * 2.2 + dx * p * 0.8, cy + dy * p * 0.8, p * 0.9, p * 0.9);
        });
        const rightB = [[-1, -3], [0, -2], [0, -1], [1, 0], [0, 1], [0, 2], [-1, 3]];
        rightB.forEach(([dx, dy]) => {
          drawPixel(cx + p * 2.2 + dx * p * 0.8, cy + dy * p * 0.8, p * 0.9, p * 0.9);
        });
      };

      // 9. Neural Network Nodes
      const drawNeural = (cx: number, cy: number) => {
        ctx.strokeStyle = "rgba(203, 213, 225, 0.4)";
        ctx.lineWidth = p * 0.4;
        const nodes = [{ x: -p * 2.5, y: -p * 1.5 }, { x: p * 2.5, y: -p * 1 }, { x: 0, y: p * 2 }];
        ctx.beginPath();
        ctx.moveTo(cx + nodes[0].x, cy + nodes[0].y);
        ctx.lineTo(cx + nodes[2].x, cy + nodes[2].y);
        ctx.lineTo(cx + nodes[1].x, cy + nodes[1].y);
        ctx.stroke();

        ctx.fillStyle = iconColor;
        nodes.forEach((n) => {
          drawPixel(cx + n.x - p * 0.5, cy + n.y - p * 0.5, p, p);
        });
      };

      // 10. Redesigned Clean Open Book Icon (New & Minimalist)
      const drawBook = (cx: number, cy: number) => {
        ctx.fillStyle = iconColor;
        // Spine center
        drawPixel(cx - p * 0.3, cy - p * 2.5, p * 0.6, p * 5);
        // Left page curves
        drawPixel(cx - p * 3, cy - p * 2, p * 2.6, p * 0.6);
        drawPixel(cx - p * 3.5, cy - p * 1.5, p * 0.6, p * 3.5);
        drawPixel(cx - p * 3, cy + p * 2, p * 2.6, p * 0.6);
        // Right page curves
        drawPixel(cx + p * 0.4, cy - p * 2, p * 2.6, p * 0.6);
        drawPixel(cx + p * 2.9, cy - p * 1.5, p * 0.6, p * 3.5);
        drawPixel(cx + p * 0.4, cy + p * 2, p * 2.6, p * 0.6);
      };

      // 11. New Clean Dollar Sign ($)
      const drawDollar = (cx: number, cy: number) => {
        ctx.fillStyle = iconColor;
        // Vertical center line
        drawPixel(cx - p * 0.3, cy - p * 3.2, p * 0.6, p * 6.4);
        // S curves
        const sPixels = [
          [-1.5, -2.5], [0, -2.5], [1.5, -2.5],
          [-1.5, -1.5],
          [-1.5, -0.5], [0, -0.5], [1.5, -0.5],
          [1.5, 0.5],
          [-1.5, 1.5], [0, 1.5], [1.5, 1.5]
        ];
        sPixels.forEach(([dx, dy]) => {
          drawPixel(cx + dx * p * 0.8, cy + dy * p * 0.8, p * 0.8, p * 0.8);
        });
      };

      // 12. New Clean Judge Gavel / Hammer
      const drawGavel = (cx: number, cy: number) => {
        ctx.fillStyle = iconColor;
        // Hammer head (angled block)
        drawPixel(cx - p * 2.5, cy - p * 2.5, p * 4.5, p * 1.6);
        // Handle
        drawPixel(cx - p * 0.4, cy - p * 1, p * 0.8, p * 4.5);
        // Sounding board base
        drawPixel(cx - p * 3, cy + p * 3, p * 6, p * 0.8);
      };

      // 13. Temple Pillar Column
      const drawPillar = (cx: number, cy: number) => {
        ctx.fillStyle = iconColor;
        drawPixel(cx - p * 2, cy - p * 3, p * 4, p * 0.8);
        drawPixel(cx - p * 1.2, cy - p * 2, p * 0.6, p * 4);
        drawPixel(cx + p * 0.6, cy - p * 2, p * 0.6, p * 4);
        drawPixel(cx - p * 2, cy + p * 2, p * 4, p * 0.8);
      };

      // Array of curated clean minimalist symbol drawers
      const symbolDrawers = [
        drawDNA, drawBeaker, drawAtom, drawIntegral, drawSummation,
        drawGraphBar, drawGraphCurve, drawCodeBrackets, drawNeural,
        drawBook, drawDollar, drawGavel, drawPillar
      ];

      // 3. Render Evenly Distributed Grid of Symbols with UNIFORM ALPHA
      const cols = 6;
      const rows = Math.ceil(height / (window.innerHeight / 4));
      const cellW = width / cols;
      const cellH = height / rows;

      ctx.globalAlpha = opacity; // Set single uniform opacity for all symbols (no overlapping alpha artifacts!)

      let drawerIdx = 0;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cx = c * cellW + cellW * 0.5;
          const cy = r * cellH + cellH * 0.5;
          const drawer = symbolDrawers[drawerIdx % symbolDrawers.length];
          drawer(cx, cy);
          drawerIdx++;
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

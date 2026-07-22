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

    const renderStaticCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      ctx.imageSmoothingEnabled = false;

      // 1. Draw Deep Black Background Base
      ctx.fillStyle = "#03040a";
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Soft White/Light Grey Dot Matrix Pattern
      const dotSpacing = 32;
      ctx.fillStyle = "rgba(255, 255, 255, 0.16)";
      for (let x = dotSpacing / 2; x < width; x += dotSpacing) {
        for (let y = dotSpacing / 2; y < height; y += dotSpacing) {
          ctx.fillRect(Math.floor(x), Math.floor(y), 1.8, 1.8);
        }
      }

      // Helper: Draw pixel rect with light grey color
      const p = pixelSize;
      const iconColor = "#cbd5e1"; // Muted Slate/Light Grey

      const drawPixelRect = (px: number, py: number, w: number, h: number, color = iconColor, alpha = 1.0) => {
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha * opacity;
        ctx.fillRect(Math.floor(px), Math.floor(py), Math.floor(w), Math.floor(h));
        ctx.globalAlpha = 1.0;
      };

      // -----------------------------------------------------------------------
      // Clean, Minimalist Symbol Drawers (NO weird symbols)
      // -----------------------------------------------------------------------

      // 1. DNA Double Helix
      const drawDNA = (cx: number, cy: number) => {
        for (let i = -4; i <= 4; i++) {
          const py = cy + i * p * 1.4;
          const span = Math.sin(i * 0.5) * p * 3.5;
          drawPixelRect(cx - span - p * 0.5, py, p, p, iconColor, 0.8);
          drawPixelRect(cx + span - p * 0.5, py, p, p, iconColor, 0.8);
          if (Math.abs(span) > p * 0.8) {
            drawPixelRect(cx - Math.abs(span), py + p * 0.3, Math.abs(span) * 2, p * 0.4, iconColor, 0.3);
          }
        }
      };

      // 2. Erlenmeyer Beaker / Flask
      const drawBeaker = (cx: number, cy: number) => {
        drawPixelRect(cx - p * 1.5, cy - p * 3, p * 3, p * 0.8, iconColor, 0.8);
        drawPixelRect(cx - p * 0.8, cy - p * 2.2, p * 1.6, p * 1.5, iconColor, 0.7);
        drawPixelRect(cx - p * 2.5, cy - p * 0.7, p * 5, p * 3.5, iconColor, 0.6);
        drawPixelRect(cx - p * 2, cy + p * 1.2, p * 4, p * 1.2, iconColor, 0.35);
        drawPixelRect(cx - p * 0.5, cy - p * 0.2, p, p, iconColor, 0.9);
      };

      // 3. Atom Orbit
      const drawAtom = (cx: number, cy: number) => {
        drawPixelRect(cx - p * 0.8, cy - p * 0.8, p * 1.6, p * 1.6, iconColor, 0.9);
        const r1 = p * 4;
        for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
          drawPixelRect(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1, p * 0.6, p * 0.6, iconColor, 0.4);
        }
        drawPixelRect(cx + r1 - p * 0.5, cy - p * 0.5, p, p, iconColor, 0.85);
        drawPixelRect(cx - r1 - p * 0.5, cy - p * 0.5, p, p, iconColor, 0.85);
      };

      // 4. Integral ∫
      const drawIntegral = (cx: number, cy: number) => {
        const pixels = [[2, -4], [3, -4], [1, -3], [1, -2], [1, -1], [1, 0], [1, 1], [1, 2], [1, 3], [0, 4], [-1, 4]];
        pixels.forEach(([dx, dy]) => {
          drawPixelRect(cx + dx * p * 0.8, cy + dy * p * 0.8, p * 0.9, p * 0.9, iconColor, 0.85);
        });
      };

      // 5. Summation Σ
      const drawSummation = (cx: number, cy: number) => {
        const sigmaPixels = [[-3, -4], [-2, -4], [-1, -4], [0, -4], [1, -4], [2, -4], [-2, -3], [-1, -2], [0, -1], [-1, 0], [-2, 1], [-3, 2], [-2, 3], [-1, 4], [0, 4], [1, 4], [2, 4]];
        sigmaPixels.forEach(([dx, dy]) => {
          drawPixelRect(cx + dx * p * 0.7, cy + dy * p * 0.7, p * 0.9, p * 0.9, iconColor, 0.85);
        });
      };

      // 6. Minimalist 3-Bar Histogram
      const drawGraphBar = (cx: number, cy: number) => {
        const heights = [3, 6, 4];
        const barW = p * 1.2;
        const gap = p * 0.6;
        drawPixelRect(cx - p * 2.5, cy + p * 2.5, heights.length * (barW + gap), p * 0.6, iconColor, 0.5);
        heights.forEach((h, idx) => {
          const bx = cx - p * 2.5 + idx * (barW + gap);
          drawPixelRect(bx, cy + p * 2.5 - p * h, barW, p * h, iconColor, 0.7);
        });
      };

      // 7. Sine Wave Curve
      const drawGraphCurve = (cx: number, cy: number) => {
        for (let i = -5; i <= 5; i++) {
          const x = i * p * 0.8;
          const normY = Math.sin(i * 0.5) * p * 2.5;
          drawPixelRect(cx + x, cy - normY, p, p, iconColor, 0.8);
        }
      };

      // 8. Code Brackets { }
      const drawCodeBrackets = (cx: number, cy: number) => {
        const leftB = [[1, -3], [0, -2], [0, -1], [-1, 0], [0, 1], [0, 2], [1, 3]];
        leftB.forEach(([dx, dy]) => {
          drawPixelRect(cx - p * 2 + dx * p * 0.8, cy + dy * p * 0.8, p * 0.9, p * 0.9, iconColor, 0.8);
        });
        const rightB = [[-1, -3], [0, -2], [0, -1], [1, 0], [0, 1], [0, 2], [-1, 3]];
        rightB.forEach(([dx, dy]) => {
          drawPixelRect(cx + p * 2 + dx * p * 0.8, cy + dy * p * 0.8, p * 0.9, p * 0.9, iconColor, 0.8);
        });
      };

      // 9. Neural Network Nodes
      const drawNeural = (cx: number, cy: number) => {
        const nodes = [{ x: -p * 2.5, y: -p * 1.5 }, { x: p * 2.5, y: -p * 1 }, { x: 0, y: p * 2 }];
        ctx.strokeStyle = "rgba(203, 213, 225, 0.3)";
        ctx.lineWidth = p * 0.4;
        ctx.beginPath();
        ctx.moveTo(cx + nodes[0].x, cy + nodes[0].y);
        ctx.lineTo(cx + nodes[2].x, cy + nodes[2].y);
        ctx.lineTo(cx + nodes[1].x, cy + nodes[1].y);
        ctx.stroke();
        nodes.forEach((n) => {
          drawPixelRect(cx + n.x - p * 0.5, cy + n.y - p * 0.5, p * 1, p * 1, iconColor, 0.8);
        });
      };

      // 10. Temple Pillar Column
      const drawPillar = (cx: number, cy: number) => {
        drawPixelRect(cx - p * 2, cy - p * 3, p * 4, p * 0.8, iconColor, 0.8);
        drawPixelRect(cx - p * 1.2, cy - p * 2, p * 0.6, p * 4, iconColor, 0.65);
        drawPixelRect(cx + p * 0.6, cy - p * 2, p * 0.6, p * 4, iconColor, 0.65);
        drawPixelRect(cx - p * 2, cy + p * 2, p * 4, p * 0.8, iconColor, 0.8);
      };

      // 11. Open Book
      const drawBook = (cx: number, cy: number) => {
        drawPixelRect(cx - p * 2.5, cy - p * 1.5, p * 2.2, p * 3, iconColor, 0.65);
        drawPixelRect(cx + p * 0.3, cy - p * 1.5, p * 2.2, p * 3, iconColor, 0.65);
        drawPixelRect(cx - p * 0.2, cy - p * 1.8, p * 0.4, p * 3.6, iconColor, 0.9);
      };

      // Array of curated minimalist symbol drawers
      const symbolDrawers = [
        drawDNA, drawBeaker, drawAtom, drawIntegral, drawSummation,
        drawGraphBar, drawGraphCurve, drawCodeBrackets, drawNeural,
        drawPillar, drawBook
      ];

      // Render Grid of Clean Minimalist Light Grey Icons
      const cols = 6;
      const rows = 4;
      const cellW = width / cols;
      const cellH = height / rows;

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
    };

    renderStaticCanvas();
    window.addEventListener("resize", renderStaticCanvas);

    return () => {
      window.removeEventListener("resize", renderStaticCanvas);
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

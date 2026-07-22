"use client";

import { useEffect, useRef } from "react";

interface PixelCourseBackgroundProps {
  opacity?: number;
  pixelSize?: number;
}

type SymbolType =
  | "dna"
  | "molecule"
  | "cell"
  | "beaker"
  | "atom"
  | "vectors"
  | "integral"
  | "summation"
  | "graph_bar"
  | "graph_curve"
  | "code_brackets"
  | "binary_bits"
  | "neural"
  | "pillar"
  | "book_quill"
  | "econ_trend"
  | "rna_loop"
  | "magnet"
  | "brain_spark"
  | "scales";

export function PixelCourseBackground({
  opacity = 0.45,
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

      // 1. Draw Pure White Background Base
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Black Dot Matrix Pattern (Matching user specification)
      const dotSpacing = 32;
      ctx.fillStyle = "rgba(0, 0, 0, 0.16)";
      for (let x = dotSpacing / 2; x < width; x += dotSpacing) {
        for (let y = dotSpacing / 2; y < height; y += dotSpacing) {
          ctx.fillRect(Math.floor(x), Math.floor(y), 1.8, 1.8);
        }
      }

      // Helper: Draw solid black pixel rect
      const p = pixelSize;
      const drawPixelRect = (px: number, py: number, w: number, h: number, color = "#000000", alpha = 1.0) => {
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha * opacity;
        ctx.fillRect(Math.floor(px), Math.floor(py), Math.floor(w), Math.floor(h));
        ctx.globalAlpha = 1.0;
      };

      // Crisp Black Symbol Drawers
      const drawDNA = (cx: number, cy: number) => {
        for (let i = -5; i <= 5; i++) {
          const py = cy + i * p * 1.4;
          const span = Math.sin(i * 0.5) * p * 3.8;
          drawPixelRect(cx - span - p * 0.6, py, p * 1.2, p * 1.2, "#000000", 0.7);
          drawPixelRect(cx + span - p * 0.6, py, p * 1.2, p * 1.2, "#000000", 0.7);
          if (Math.abs(span) > p * 0.8) {
            drawPixelRect(cx - Math.abs(span), py + p * 0.3, Math.abs(span) * 2, p * 0.5, "#000000", 0.35);
          }
        }
      };

      const drawMolecule = (cx: number, cy: number) => {
        const r = p * 3.8;
        for (let i = 0; i < 6; i++) {
          const a1 = (i * Math.PI * 2) / 6;
          const a2 = ((i + 1) * Math.PI * 2) / 6;
          const x1 = cx + Math.cos(a1) * r;
          const y1 = cy + Math.sin(a1) * r;
          const x2 = cx + Math.cos(a2) * r;
          const y2 = cy + Math.sin(a2) * r;

          ctx.strokeStyle = "rgba(0, 0, 0, 0.4)";
          ctx.lineWidth = p * 0.5;
          ctx.globalAlpha = opacity * 0.6;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
          ctx.globalAlpha = 1.0;

          drawPixelRect(x1 - p * 0.6, y1 - p * 0.6, p * 1.2, p * 1.2, "#000000", 0.75);
        }
        drawPixelRect(cx - p, cy - p, p * 2, p * 2, "#000000", 0.9);
      };

      const drawBeaker = (cx: number, cy: number) => {
        drawPixelRect(cx - p * 2.2, cy - p * 3.5, p * 4.4, p, "#000000", 0.8);
        drawPixelRect(cx - p * 1.1, cy - p * 2.5, p * 2.2, p * 1.8, "#000000", 0.7);
        drawPixelRect(cx - p * 3, cy - p * 0.7, p * 6, p * 4.5, "#000000", 0.6);
        drawPixelRect(cx - p * 2.6, cy + p * 1.5, p * 5.2, p * 2, "#000000", 0.35);
        drawPixelRect(cx - p * 0.8, cy, p, p, "#000000", 0.9);
      };

      const drawAtom = (cx: number, cy: number) => {
        drawPixelRect(cx - p, cy - p, p * 2, p * 2, "#000000", 0.9);
        const r1 = p * 4.2;
        drawPixelRect(cx + r1 - p * 0.5, cy - p * 0.5, p * 1.2, p * 1.2, "#000000", 0.8);
        drawPixelRect(cx - r1 - p * 0.5, cy - p * 0.5, p * 1.2, p * 1.2, "#000000", 0.8);
        for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
          drawPixelRect(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1, p * 0.5, p * 0.5, "#000000", 0.3);
        }
      };

      const drawVectors = (cx: number, cy: number) => {
        drawPixelRect(cx - p * 3.5, cy, p * 7, p * 0.8, "#000000", 0.8);
        drawPixelRect(cx + p * 2.5, cy - p * 1.2, p * 1.2, p * 3.2, "#000000", 0.8);
        for (let x = -p * 3.5; x <= p * 3.5; x += p) {
          const wy = Math.sin(x * 0.3) * p * 1.4;
          drawPixelRect(cx + x, cy - p * 3.5 + wy, p * 0.8, p * 0.8, "#000000", 0.5);
        }
      };

      const drawIntegral = (cx: number, cy: number) => {
        const pixels = [[2, -4], [3, -4], [1, -3], [1, -2], [1, -1], [1, 0], [1, 1], [1, 2], [1, 3], [0, 4], [-1, 4]];
        pixels.forEach(([dx, dy]) => {
          drawPixelRect(cx + dx * p * 0.9, cy + dy * p * 0.9, p, p, "#000000", 0.85);
        });
        drawPixelRect(cx + p * 2.8, cy - p * 2.8, p, p, "#000000", 0.9);
      };

      const drawSummation = (cx: number, cy: number) => {
        const sigmaPixels = [[-3, -4], [-2, -4], [-1, -4], [0, -4], [1, -4], [2, -4], [-2, -3], [-1, -2], [0, -1], [-1, 0], [-2, 1], [-3, 2], [-2, 3], [-1, 4], [0, 4], [1, 4], [2, 4]];
        sigmaPixels.forEach(([dx, dy]) => {
          drawPixelRect(cx + dx * p * 0.75, cy + dy * p * 0.75, p, p, "#000000", 0.85);
        });
      };

      const drawGraphBar = (cx: number, cy: number) => {
        const heights = [3, 5, 4, 7, 4];
        const barW = p * 1.2;
        const gap = p * 0.5;
        drawPixelRect(cx - p * 3.5, cy + p * 3.5, heights.length * (barW + gap), p * 0.6, "#000000", 0.5);
        heights.forEach((h, idx) => {
          const bx = cx - p * 3.5 + idx * (barW + gap);
          drawPixelRect(bx, cy + p * 3.5 - p * h, barW, p * h, "#000000", 0.75);
        });
      };

      const drawGraphCurve = (cx: number, cy: number) => {
        for (let i = -5; i <= 5; i++) {
          const x = i * p * 0.9;
          const normY = Math.exp(-(i * i) / 6) * p * 4.5;
          drawPixelRect(cx + x, cy + p * 2.5 - normY, p, p, "#000000", 0.8);
        }
      };

      const drawCodeBrackets = (cx: number, cy: number) => {
        const leftB = [[1, -3], [0, -2], [0, -1], [-1, 0], [0, 1], [0, 2], [1, 3]];
        leftB.forEach(([dx, dy]) => {
          drawPixelRect(cx - p * 2.5 + dx * p, cy + dy * p, p, p, "#000000", 0.8);
        });
        const rightB = [[-1, -3], [0, -2], [0, -1], [1, 0], [0, 1], [0, 2], [-1, 3]];
        rightB.forEach(([dx, dy]) => {
          drawPixelRect(cx + p * 2.5 + dx * p, cy + dy * p, p, p, "#000000", 0.8);
        });
      };

      const drawBinaryBits = (cx: number, cy: number) => {
        drawPixelRect(cx - p * 2, cy - p * 2.5, p * 0.8, p * 5, "#000000", 0.85);
        drawPixelRect(cx + p * 1.2, cy - p * 2.5, p * 2, p * 0.8, "#000000", 0.85);
        drawPixelRect(cx + p * 1.2, cy + p * 1.7, p * 2, p * 0.8, "#000000", 0.85);
        drawPixelRect(cx + p * 1.2, cy - p * 1.7, p * 0.8, p * 3.4, "#000000", 0.85);
        drawPixelRect(cx + p * 2.4, cy - p * 1.7, p * 0.8, p * 3.4, "#000000", 0.85);
      };

      const drawNeural = (cx: number, cy: number) => {
        const nodes = [{ x: -p * 3, y: -p * 2 }, { x: p * 3, y: -p * 1.5 }, { x: 0, y: p * 2 }, { x: -p * 3.5, y: p * 2.5 }];
        ctx.strokeStyle = "rgba(0, 0, 0, 0.35)";
        ctx.lineWidth = p * 0.5;
        ctx.beginPath();
        ctx.moveTo(cx + nodes[0].x, cy + nodes[0].y);
        ctx.lineTo(cx + nodes[2].x, cy + nodes[2].y);
        ctx.lineTo(cx + nodes[1].x, cy + nodes[1].y);
        ctx.stroke();
        nodes.forEach((n) => {
          drawPixelRect(cx + n.x - p * 0.6, cy + n.y - p * 0.6, p * 1.2, p * 1.2, "#000000", 0.8);
        });
      };

      const drawPillar = (cx: number, cy: number) => {
        drawPixelRect(cx - p * 2.5, cy - p * 3.5, p * 5, p, "#000000", 0.85);
        drawPixelRect(cx - p * 1.8, cy - p * 2.5, p * 0.8, p * 5, "#000000", 0.65);
        drawPixelRect(cx + p * 1, cy - p * 2.5, p * 0.8, p * 5, "#000000", 0.65);
        drawPixelRect(cx - p * 2.5, cy + p * 2.8, p * 5, p, "#000000", 0.85);
      };

      const drawBookQuill = (cx: number, cy: number) => {
        drawPixelRect(cx - p * 3.5, cy - p * 1.5, p * 3, p * 3.5, "#000000", 0.6);
        drawPixelRect(cx + p * 0.5, cy - p * 1.5, p * 3, p * 3.5, "#000000", 0.6);
        drawPixelRect(cx - p * 0.3, cy - p * 1.8, p * 0.6, p * 4, "#000000", 0.9);
        drawPixelRect(cx + p * 2, cy - p * 4, p * 0.8, p * 3, "#000000", 0.8);
      };

      const drawEconTrend = (cx: number, cy: number) => {
        const dollar = [[-1, -3], [0, -3], [1, -3], [-1, -2], [-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [-1, 2], [0, 2], [1, 2]];
        dollar.forEach(([dx, dy]) => {
          drawPixelRect(cx - p * 2 + dx * p * 0.8, cy + dy * p * 0.8, p * 0.9, p * 0.9, "#000000", 0.8);
        });
        drawPixelRect(cx - p * 2, cy - p * 3.2, p * 0.6, p * 5.4, "#000000", 0.8);
        drawPixelRect(cx + p * 4, cy - p * 2.5, p * 1.6, p * 1.6, "#000000", 0.85);
      };

      const drawMagnet = (cx: number, cy: number) => {
        drawPixelRect(cx - p * 2.5, cy - p * 3, p * 1.2, p * 5, "#000000", 0.8);
        drawPixelRect(cx + p * 1.3, cy - p * 3, p * 1.2, p * 5, "#000000", 0.8);
        drawPixelRect(cx - p * 2.5, cy + p * 2, p * 5, p * 1.2, "#000000", 0.8);
      };

      const drawScales = (cx: number, cy: number) => {
        drawPixelRect(cx - p * 0.4, cy - p * 3, p * 0.8, p * 6, "#000000", 0.85);
        drawPixelRect(cx - p * 3, cy - p * 2.5, p * 6, p * 0.8, "#000000", 0.85);
        drawPixelRect(cx - p * 2, cy + p * 3, p * 4, p * 0.8, "#000000", 0.85);
        drawPixelRect(cx - p * 3.2, cy + p * 0.5, p * 1.6, p * 0.6, "#000000", 0.7);
        drawPixelRect(cx + p * 1.6, cy - p * 0.5, p * 1.6, p * 0.6, "#000000", 0.7);
      };

      // Dispatcher array of symbol drawers
      const symbolDrawers = [
        drawDNA, drawMolecule, drawBeaker, drawAtom, drawVectors,
        drawIntegral, drawSummation, drawGraphBar, drawGraphCurve,
        drawCodeBrackets, drawBinaryBits, drawNeural, drawPillar,
        drawBookQuill, drawEconTrend, drawMagnet, drawScales
      ];

      // 3. Render Evenly Distributed Grid of Black Symbols
      const cols = 6;
      const rows = 5;
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
      className="fixed inset-0 w-full h-full pointer-events-none -z-20 image-rendering-pixelated bg-white"
      style={{ display: "block" }}
    />
  );
}

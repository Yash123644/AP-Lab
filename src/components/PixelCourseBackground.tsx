"use client";

import { useEffect, useRef } from "react";

interface PixelCourseBackgroundProps {
  opacity?: number;
  pixelSize?: number;
}

export function PixelCourseBackground({
  opacity = 0.22, // Increased visibility
  pixelSize = 8,
}: PixelCourseBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const renderCanvas = () => {
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

      // 2. Draw Soft White Dot Matrix Pattern
      const dotSpacing = 32;
      ctx.fillStyle = "rgba(255, 255, 255, 0.16)";
      for (let x = dotSpacing / 2; x < width; x += dotSpacing) {
        for (let y = dotSpacing / 2; y < height; y += dotSpacing) {
          ctx.fillRect(Math.floor(x), Math.floor(y), 1.8, 1.8);
        }
      }

      // Single, uniform bright light-grey color for ALL icons
      const iconColor = "#e2e8f0"; // Slate-200 (Crisp, uniform light-grey)
      const p = pixelSize;

      // Setup clean crisp stroke styling
      ctx.strokeStyle = iconColor;
      ctx.fillStyle = iconColor;
      ctx.lineWidth = p * 0.5;
      ctx.lineCap = "square";
      ctx.lineJoin = "miter";

      // -----------------------------------------------------------------------
      // Solid, Fully Connected Pixelated Symbol Drawers
      // -----------------------------------------------------------------------

      // 1. DNA Double Helix (Connected continuous strands + base rungs)
      const drawDNA = (cx: number, cy: number) => {
        ctx.beginPath();
        for (let y = -p * 4; y <= p * 4; y += p * 0.5) {
          const span = Math.sin(y * 0.25) * p * 2.8;
          if (y === -p * 4) ctx.moveTo(cx - span, cy + y);
          else ctx.lineTo(cx - span, cy + y);
        }
        ctx.stroke();

        ctx.beginPath();
        for (let y = -p * 4; y <= p * 4; y += p * 0.5) {
          const span = Math.sin(y * 0.25) * p * 2.8;
          if (y === -p * 4) ctx.moveTo(cx + span, cy + y);
          else ctx.lineTo(cx + span, cy + y);
        }
        ctx.stroke();

        // Connecting rungs
        for (let i = -3; i <= 3; i += 2) {
          const py = cy + i * p * 1.1;
          const span = Math.sin((i * p * 1.1) * 0.25) * p * 2.8;
          ctx.beginPath();
          ctx.moveTo(cx - span, py);
          ctx.lineTo(cx + span, py);
          ctx.stroke();
        }
      };

      // 2. Erlenmeyer Beaker (Solid connected outline)
      const drawBeaker = (cx: number, cy: number) => {
        ctx.beginPath();
        // Top Rim
        ctx.moveTo(cx - p * 1.5, cy - p * 3);
        ctx.lineTo(cx + p * 1.5, cy - p * 3);
        // Neck
        ctx.moveTo(cx - p * 0.8, cy - p * 3);
        ctx.lineTo(cx - p * 0.8, cy - p * 1.5);
        ctx.lineTo(cx - p * 2.8, cy + p * 2.5);
        ctx.lineTo(cx + p * 2.8, cy + p * 2.5);
        ctx.lineTo(cx + p * 0.8, cy - p * 1.5);
        ctx.lineTo(cx + p * 0.8, cy - p * 3);
        ctx.stroke();

        // Liquid Level
        ctx.beginPath();
        ctx.moveTo(cx - p * 2, cy + p * 0.5);
        ctx.lineTo(cx + p * 2, cy + p * 0.5);
        ctx.stroke();
      };

      // 3. Atom Orbit (Nucleus + connected oval orbital ring)
      const drawAtom = (cx: number, cy: number) => {
        // Solid nucleus
        ctx.fillRect(cx - p * 0.8, cy - p * 0.8, p * 1.6, p * 1.6);

        // Connected Orbital Ring 1
        ctx.beginPath();
        ctx.ellipse(cx, cy, p * 3.8, p * 1.8, Math.PI / 4, 0, Math.PI * 2);
        ctx.stroke();

        // Connected Orbital Ring 2
        ctx.beginPath();
        ctx.ellipse(cx, cy, p * 3.8, p * 1.8, -Math.PI / 4, 0, Math.PI * 2);
        ctx.stroke();
      };

      // 4. Integral ∫ (Connected smooth S-curve stroke)
      const drawIntegral = (cx: number, cy: number) => {
        ctx.beginPath();
        ctx.moveTo(cx + p * 1.8, cy - p * 3.5);
        ctx.bezierCurveTo(
          cx - p * 1.5, cy - p * 3.5,
          cx + p * 1.5, cy + p * 3.5,
          cx - p * 1.8, cy + p * 3.5
        );
        ctx.stroke();
      };

      // 5. Summation Σ (Connected 4-segment stroke)
      const drawSummation = (cx: number, cy: number) => {
        ctx.beginPath();
        ctx.moveTo(cx + p * 2.2, cy - p * 3.2);
        ctx.lineTo(cx - p * 1.8, cy - p * 3.2);
        ctx.lineTo(cx + p * 0.4, cy);
        ctx.lineTo(cx - p * 1.8, cy + p * 3.2);
        ctx.lineTo(cx + p * 2.2, cy + p * 3.2);
        ctx.stroke();
      };

      // 6. 3-Bar Histogram (Connected baseline + solid bars)
      const drawGraphBar = (cx: number, cy: number) => {
        const heights = [2.2, 4.5, 3.2];
        const barW = p * 1.2;
        const gap = p * 0.5;
        const startX = cx - (heights.length * (barW + gap)) / 2;
        const baseY = cy + p * 2.5;

        // Baseline
        ctx.beginPath();
        ctx.moveTo(startX - p * 0.5, baseY);
        ctx.lineTo(startX + heights.length * (barW + gap) + p * 0.5, baseY);
        ctx.stroke();

        // Solid connected bars
        heights.forEach((h, idx) => {
          const bx = startX + idx * (barW + gap);
          ctx.strokeRect(bx, baseY - p * h, barW, p * h);
        });
      };

      // 7. Sine Wave Curve (Connected continuous wave line)
      const drawGraphCurve = (cx: number, cy: number) => {
        ctx.beginPath();
        for (let x = -p * 3.5; x <= p * 3.5; x += p * 0.4) {
          const y = Math.sin((x / p) * 0.8) * p * 2.2;
          if (x === -p * 3.5) ctx.moveTo(cx + x, cy - y);
          else ctx.lineTo(cx + x, cy - y);
        }
        ctx.stroke();
      };

      // 8. Code Brackets { } (Connected continuous curly brackets)
      const drawCodeBrackets = (cx: number, cy: number) => {
        // Left {
        ctx.beginPath();
        ctx.moveTo(cx - p * 1.5, cy - p * 3);
        ctx.lineTo(cx - p * 2.2, cy - p * 3);
        ctx.lineTo(cx - p * 2.2, cy - p * 0.8);
        ctx.lineTo(cx - p * 3.0, cy);
        ctx.lineTo(cx - p * 2.2, cy + p * 0.8);
        ctx.lineTo(cx - p * 2.2, cy + p * 3);
        ctx.lineTo(cx - p * 1.5, cy + p * 3);
        ctx.stroke();

        // Right }
        ctx.beginPath();
        ctx.moveTo(cx + p * 1.5, cy - p * 3);
        ctx.lineTo(cx + p * 2.2, cy - p * 3);
        ctx.lineTo(cx + p * 2.2, cy - p * 0.8);
        ctx.lineTo(cx + p * 3.0, cy);
        ctx.lineTo(cx + p * 2.2, cy + p * 0.8);
        ctx.lineTo(cx + p * 2.2, cy + p * 3);
        ctx.lineTo(cx + p * 1.5, cy + p * 3);
        ctx.stroke();
      };

      // 9. Neural Network (Connected nodes + continuous connection lines)
      const drawNeural = (cx: number, cy: number) => {
        const nodes = [
          { x: -p * 2.5, y: -p * 1.8 },
          { x: p * 2.5, y: -p * 1.2 },
          { x: 0, y: p * 2.2 },
        ];

        // Connection lines
        ctx.beginPath();
        ctx.moveTo(cx + nodes[0].x, cy + nodes[0].y);
        ctx.lineTo(cx + nodes[2].x, cy + nodes[2].y);
        ctx.lineTo(cx + nodes[1].x, cy + nodes[1].y);
        ctx.stroke();

        // Solid connected node dots
        nodes.forEach((n) => {
          ctx.beginPath();
          ctx.arc(cx + n.x, cy + n.y, p * 0.6, 0, Math.PI * 2);
          ctx.fill();
        });
      };

      // 10. Redesigned Connected Open Book (Clean connected geometry)
      const drawBook = (cx: number, cy: number) => {
        ctx.beginPath();
        // Left page curve
        ctx.moveTo(cx, cy - p * 1.8);
        ctx.quadraticCurveTo(cx - p * 1.5, cy - p * 2.8, cx - p * 3.2, cy - p * 2.2);
        ctx.lineTo(cx - p * 3.2, cy + p * 2.2);
        ctx.quadraticCurveTo(cx - p * 1.5, cy + p * 1.6, cx, cy + p * 2.4);

        // Right page curve
        ctx.quadraticCurveTo(cx + p * 1.5, cy + p * 1.6, cx + p * 3.2, cy + p * 2.2);
        ctx.lineTo(cx + p * 3.2, cy - p * 2.2);
        ctx.quadraticCurveTo(cx + p * 1.5, cy - p * 2.8, cx, cy - p * 1.8);
        ctx.stroke();

        // Spine Line
        ctx.beginPath();
        ctx.moveTo(cx, cy - p * 1.8);
        ctx.lineTo(cx, cy + p * 2.4);
        ctx.stroke();
      };

      // 11. Connected Dollar Sign ($)
      const drawDollar = (cx: number, cy: number) => {
        // Vertical line
        ctx.beginPath();
        ctx.moveTo(cx, cy - p * 3.2);
        ctx.lineTo(cx, cy + p * 3.2);
        ctx.stroke();

        // S-curve stroke
        ctx.beginPath();
        ctx.moveTo(cx + p * 1.8, cy - p * 2.0);
        ctx.quadraticCurveTo(cx, cy - p * 2.8, cx - p * 1.8, cy - p * 1.5);
        ctx.quadraticCurveTo(cx, cy, cx + p * 1.8, cy + p * 1.5);
        ctx.quadraticCurveTo(cx, cy + p * 2.8, cx - p * 1.8, cy + p * 2.0);
        ctx.stroke();
      };

      // 12. Connected Judge Gavel / Hammer
      const drawGavel = (cx: number, cy: number) => {
        // Hammer head (rectangle outline)
        ctx.strokeRect(cx - p * 2.2, cy - p * 2.8, p * 4.4, p * 1.5);
        // Handle line
        ctx.beginPath();
        ctx.moveTo(cx, cy - p * 1.3);
        ctx.lineTo(cx, cy + p * 2.2);
        ctx.stroke();
        // Sounding Base
        ctx.beginPath();
        ctx.moveTo(cx - p * 2.8, cy + p * 2.8);
        ctx.lineTo(cx + p * 2.8, cy + p * 2.8);
        ctx.stroke();
      };

      // 13. Connected Temple Pillar Column
      const drawPillar = (cx: number, cy: number) => {
        // Capital Top
        ctx.strokeRect(cx - p * 2.2, cy - p * 3.0, p * 4.4, p * 0.8);
        // Fluted Columns
        ctx.beginPath();
        ctx.moveTo(cx - p * 1.4, cy - p * 2.2);
        ctx.lineTo(cx - p * 1.4, cy + p * 2.2);
        ctx.moveTo(cx, cy - p * 2.2);
        ctx.lineTo(cx, cy + p * 2.2);
        ctx.moveTo(cx + p * 1.4, cy - p * 2.2);
        ctx.lineTo(cx + p * 1.4, cy + p * 2.2);
        ctx.stroke();
        // Base Bottom
        ctx.strokeRect(cx - p * 2.2, cy + p * 2.2, p * 4.4, p * 0.8);
      };

      // Symbol drawers array
      const symbolDrawers = [
        drawDNA, drawBeaker, drawAtom, drawIntegral, drawSummation,
        drawGraphBar, drawGraphCurve, drawCodeBrackets, drawNeural,
        drawBook, drawDollar, drawGavel, drawPillar
      ];

      // 3. Render Evenly Distributed Grid of Connected Symbols
      const cols = 6;
      const rows = Math.ceil(height / (window.innerHeight / 4));
      const cellW = width / cols;
      const cellH = height / rows;

      ctx.globalAlpha = opacity; // High-visibility single uniform alpha pass

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

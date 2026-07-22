"use client";

import { useEffect, useRef } from "react";

interface PixelCourseBackgroundProps {
  opacity?: number;
  pixelSize?: number;
}

export function PixelCourseBackground({
  opacity = 0.18,
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
      dotCtx.fillStyle = "rgba(255, 255, 255, 0.15)";
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

    // Muted slate & zinc palette for a clean ambient look
    const mutedColor = "rgba(148, 163, 184, 0.75)";
    const mutedLight = "rgba(203, 213, 225, 0.85)";
    const mutedDim = "rgba(100, 116, 139, 0.5)";

    // Helpers
    const drawPixelRect = (px: number, py: number, w: number, h: number, color = mutedColor, alpha = 1.0) => {
      ctx.fillStyle = color;
      ctx.globalAlpha = alpha * opacity;
      ctx.fillRect(Math.floor(px), Math.floor(py), Math.floor(w), Math.floor(h));
      ctx.globalAlpha = 1.0;
    };

    let time = 0;
    let inView = true;

    // Floating ambient elements state
    const floatingItems = [
      // Math & CS symbols floating gently in right zone
      { x: 0, y: 0, vx: -0.15, vy: 0.1, type: "integral" },
      { x: 0, y: 0, vx: 0.12, vy: -0.14, type: "sigma" },
      { type: "brackets", x: 0, y: 0, vx: -0.1, vy: -0.12 },
      { type: "scales", x: 0, y: 0, vx: 0.14, vy: 0.15 },
      { type: "quill", x: 0, y: 0, vx: -0.12, vy: 0.12 },
      { type: "beaker", x: 0, y: 0, vx: 0.1, vy: -0.15 },
    ];

    const initFloatingItems = () => {
      floatingItems.forEach((item, idx) => {
        item.x = (width * 0.2) + (idx * (width * 0.12)) % (width * 0.7);
        item.y = (height * 0.15) + ((idx * 170) % (height * 0.7));
      });
    };
    initFloatingItems();

    // -------------------------------------------------------------------------
    // LAYER 1: STEM & SCIENCES LAYER (DNA Strand, Atom Orbit, Molecule)
    // -------------------------------------------------------------------------
    const drawSTEMLayer = (t: number) => {
      const p = pixelSize;

      // 1A. Full Height Winding Pixel DNA Strand Column on Left Side
      const dnaX = Math.max(70, width * 0.08);
      const dnaStep = p * 1.5;
      const strandHeight = Math.ceil(height / dnaStep) + 2;

      for (let i = 0; i < strandHeight; i++) {
        const py = i * dnaStep;
        const angle = t * 1.6 + i * 0.35;
        const span = Math.sin(angle) * p * 4.2;
        const strandOpacity = Math.abs(Math.cos(angle)) * 0.65 + 0.35;

        // Left & Right strand helix nodes
        drawPixelRect(dnaX - span - p * 0.6, py, p * 1.2, p * 1.2, mutedLight, strandOpacity);
        drawPixelRect(dnaX + span - p * 0.6, py, p * 1.2, p * 1.2, mutedLight, strandOpacity);

        // Connecting rungs
        if (Math.abs(span) > p * 0.8) {
          drawPixelRect(dnaX - Math.abs(span), py + p * 0.3, Math.abs(span) * 2, p * 0.5, mutedColor, strandOpacity * 0.35);
        }
      }

      // 1B. Atomic Orbital System (Mid-Left Region)
      const atomX = Math.max(180, width * 0.22);
      const atomY = height * 0.72;

      // Nucleus
      drawPixelRect(atomX - p, atomY - p, p * 2, p * 2, mutedLight);

      // Orbit 1
      const r1 = p * 5;
      const a1 = t * 2.2;
      drawPixelRect(atomX + Math.cos(a1) * r1 - p * 0.5, atomY + Math.sin(a1) * r1 - p * 0.5, p * 1.2, p * 1.2, mutedLight);

      // Orbit 2 (Tilted)
      const r2 = p * 6.5;
      const a2 = -t * 1.8;
      drawPixelRect(atomX + Math.cos(a2) * r2 - p * 0.5, atomY + Math.sin(a2) * (r2 * 0.4) - p * 0.5, p * 1.2, p * 1.2, mutedColor);

      // Orbital rings dotted outline
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
        drawPixelRect(atomX + Math.cos(a) * r1, atomY + Math.sin(a) * r1, p * 0.5, p * 0.5, mutedDim, 0.5);
      }

      // 1C. Benzene Ring Molecule (Upper-Left Region)
      const molX = Math.max(140, width * 0.18);
      const molY = height * 0.25;
      const molR = p * 4;

      for (let i = 0; i < 6; i++) {
        const angle1 = (i * Math.PI * 2) / 6 + t * 0.3;
        const angle2 = ((i + 1) * Math.PI * 2) / 6 + t * 0.3;

        const x1 = molX + Math.cos(angle1) * molR;
        const y1 = molY + Math.sin(angle1) * molR;
        const x2 = molX + Math.cos(angle2) * molR;
        const y2 = molY + Math.sin(angle2) * molR;

        ctx.strokeStyle = mutedDim;
        ctx.lineWidth = p * 0.5;
        ctx.globalAlpha = opacity * 0.5;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.globalAlpha = 1.0;

        drawPixelRect(x1 - p * 0.6, y1 - p * 0.6, p * 1.2, p * 1.2, mutedLight);
      }
    };

    // -------------------------------------------------------------------------
    // LAYER 2: MATHEMATICAL LOGIC & CS MATRIX LAYER (Graphs, Bar Charts, Binary Stream)
    // -------------------------------------------------------------------------
    const drawMathCSLayer = (t: number) => {
      const p = pixelSize;

      // 2A. Animated Histogram Bar Chart & Sine Trend Curve (Bottom Right Region)
      const graphX = Math.max(width - 340, width * 0.7);
      const graphY = height * 0.82;
      const barHeights = [4, 7, 5, 9, 6, 8, 4];
      const barW = p * 1.5;
      const gap = p * 0.8;

      // X & Y Axes
      drawPixelRect(graphX - p, graphY, barHeights.length * (barW + gap) + p * 2, p * 0.6, mutedDim, 0.5);
      drawPixelRect(graphX - p, graphY - p * 10, p * 0.6, p * 10, mutedDim, 0.5);

      // Pulsing Histogram Bars
      barHeights.forEach((h, idx) => {
        const dynH = p * (h + Math.sin(t * 3 + idx * 0.7) * 1.4);
        const bx = graphX + idx * (barW + gap);
        const by = graphY - dynH;
        drawPixelRect(bx, by, barW, dynH, mutedColor, 0.7);
      });

      // Sine Trend Curve overlaying bars
      ctx.strokeStyle = mutedLight;
      ctx.lineWidth = p * 0.6;
      ctx.globalAlpha = opacity * 0.8;
      ctx.beginPath();
      barHeights.forEach((h, idx) => {
        const dynH = p * (h + Math.sin(t * 3 + idx * 0.7) * 1.4);
        const bx = graphX + idx * (barW + gap) + barW / 2;
        const by = graphY - dynH;
        if (idx === 0) ctx.moveTo(bx, by);
        else ctx.lineTo(bx, by);
      });
      ctx.stroke();
      ctx.globalAlpha = 1.0;

      // 2B. Falling Binary Matrix Stream (Far Right Edge)
      const streamX = width - 45;
      const streamRows = 14;
      for (let r = 0; r < streamRows; r++) {
        const sy = ((r * p * 3 + t * 45) % (height + 100)) - 50;
        const bit = (r + Math.floor(t * 4)) % 2;
        if (bit === 1) {
          drawPixelRect(streamX, sy, p * 0.8, p * 2.2, mutedLight, 0.6);
        } else {
          drawPixelRect(streamX, sy, p * 1.6, p * 0.8, mutedColor, 0.5);
          drawPixelRect(streamX, sy + p * 1.4, p * 1.6, p * 0.8, mutedColor, 0.5);
          drawPixelRect(streamX, sy, p * 0.8, p * 2.2, mutedColor, 0.5);
          drawPixelRect(streamX + p * 0.8, sy, p * 0.8, p * 2.2, mutedColor, 0.5);
        }
      }
    };

    // -------------------------------------------------------------------------
    // LAYER 3: HUMANITIES & SOCIAL SCIENCES LAYER (Pillars, Neural Synapses, Scales)
    // -------------------------------------------------------------------------
    const drawHumanitiesLayer = (t: number) => {
      const p = pixelSize;

      // 3A. Classical Ionic Temple Pillar (Top Right Region)
      const pillarX = Math.max(width - 180, width * 0.82);
      const pillarY = height * 0.22;

      // Capital
      drawPixelRect(pillarX - p * 3, pillarY - p * 5, p * 6, p, mutedLight);
      drawPixelRect(pillarX - p * 2, pillarY - p * 4, p * 4, p, mutedColor);
      // Shafts
      drawPixelRect(pillarX - p * 2, pillarY - p * 3, p * 0.8, p * 8, mutedColor);
      drawPixelRect(pillarX - p * 0.4, pillarY - p * 3, p * 0.8, p * 8, mutedColor);
      drawPixelRect(pillarX + p * 1.2, pillarY - p * 3, p * 0.8, p * 8, mutedColor);
      // Base
      drawPixelRect(pillarX - p * 3, pillarY + p * 5, p * 6, p, mutedLight);

      // 3B. Neural Network Synapses (Top Center Region)
      const netX = width * 0.5;
      const netY = height * 0.18;
      const nodes = [
        { x: -p * 4, y: -p * 2 },
        { x: p * 4, y: -p * 3 },
        { x: 0, y: p * 2 },
        { x: -p * 5, y: p * 3 },
        { x: p * 5, y: p * 2 },
      ];

      // Neural connection paths
      ctx.strokeStyle = mutedDim;
      ctx.lineWidth = p * 0.5;
      ctx.globalAlpha = opacity * 0.4;
      ctx.beginPath();
      ctx.moveTo(netX + nodes[0].x, netY + nodes[0].y);
      ctx.lineTo(netX + nodes[2].x, netY + nodes[2].y);
      ctx.lineTo(netX + nodes[1].x, netY + nodes[1].y);
      ctx.lineTo(netX + nodes[4].x, netY + nodes[4].y);
      ctx.moveTo(netX + nodes[2].x, netY + nodes[2].y);
      ctx.lineTo(netX + nodes[3].x, netY + nodes[3].y);
      ctx.stroke();
      ctx.globalAlpha = 1.0;

      // Pulse nodes
      nodes.forEach((n, i) => {
        const pulse = (Math.sin(t * 3.5 + i) + 1) * 0.5;
        const nSize = p * (1.1 + pulse * 0.5);
        drawPixelRect(netX + n.x - nSize / 2, netY + n.y - nSize / 2, nSize, nSize, mutedLight);
      });
    };

    // -------------------------------------------------------------------------
    // LAYER 4: FLOATING DISCIPLINE EMBLEMS (Drifting Smoothly)
    // -------------------------------------------------------------------------
    const drawFloatingEmblems = (t: number) => {
      const p = pixelSize;

      floatingItems.forEach((item) => {
        item.x += item.vx;
        item.y += item.vy;

        // Wrap boundaries
        if (item.x < 50) item.x = width - 50;
        if (item.x > width - 50) item.x = 50;
        if (item.y < 50) item.y = height - 50;
        if (item.y > height - 50) item.y = 50;

        const cx = item.x;
        const cy = item.y;

        switch (item.type) {
          case "integral": {
            const pixels = [[2, -4], [3, -4], [1, -3], [1, -2], [1, -1], [1, 0], [1, 1], [1, 2], [1, 3], [0, 4], [-1, 4]];
            pixels.forEach(([dx, dy]) => {
              drawPixelRect(cx + dx * p * 0.8, cy + dy * p * 0.8, p, p, mutedLight, 0.7);
            });
            break;
          }
          case "sigma": {
            const pixels = [[-3, -4], [-2, -4], [-1, -4], [0, -4], [1, -4], [2, -4], [-2, -3], [-1, -2], [0, -1], [-1, 0], [-2, 1], [-3, 2], [-2, 3], [-1, 4], [0, 4], [1, 4], [2, 4]];
            pixels.forEach(([dx, dy]) => {
              drawPixelRect(cx + dx * p * 0.7, cy + dy * p * 0.7, p, p, mutedColor, 0.7);
            });
            break;
          }
          case "brackets": {
            const leftB = [[1, -3], [0, -2], [0, -1], [-1, 0], [0, 1], [0, 2], [1, 3]];
            leftB.forEach(([dx, dy]) => {
              drawPixelRect(cx - p * 2 + dx * p, cy + dy * p, p, p, mutedColor, 0.6);
            });
            const rightB = [[-1, -3], [0, -2], [0, -1], [1, 0], [0, 1], [0, 2], [-1, 3]];
            rightB.forEach(([dx, dy]) => {
              drawPixelRect(cx + p * 2 + dx * p, cy + dy * p, p, p, mutedColor, 0.6);
            });
            break;
          }
          case "scales": {
            drawPixelRect(cx - p * 0.4, cy - p * 3, p * 0.8, p * 6, mutedColor, 0.7);
            drawPixelRect(cx - p * 3, cy - p * 2.5, p * 6, p * 0.8, mutedColor, 0.7);
            drawPixelRect(cx - p * 2, cy + p * 3, p * 4, p * 0.8, mutedColor, 0.7);
            const tilt = Math.sin(t * 2.5) * p * 0.5;
            drawPixelRect(cx - p * 3, cy + tilt, p * 1.5, p * 0.5, mutedLight, 0.8);
            drawPixelRect(cx + p * 1.5, cy - tilt, p * 1.5, p * 0.5, mutedLight, 0.8);
            break;
          }
          case "quill": {
            drawPixelRect(cx - p * 3, cy - p * 1, p * 2.5, p * 3, mutedColor, 0.6);
            drawPixelRect(cx + p * 0.5, cy - p * 1, p * 2.5, p * 3, mutedColor, 0.6);
            const qy = Math.sin(t * 2.5) * p;
            drawPixelRect(cx + p * 1.5, cy - p * 3.5 + qy, p * 0.8, p * 2.5, mutedLight, 0.8);
            break;
          }
          case "beaker": {
            drawPixelRect(cx - p * 2, cy - p * 3, p * 4, p, mutedColor, 0.7);
            drawPixelRect(cx - p * 1, cy - p * 2, p * 2, p * 1.5, mutedColor, 0.7);
            drawPixelRect(cx - p * 2.5, cy - p * 0.5, p * 5, p * 4, mutedColor, 0.6);
            break;
          }
        }
      });
    };

    // -------------------------------------------------------------------------
    // MAIN RENDER LOOP
    // -------------------------------------------------------------------------
    const draw = () => {
      if (!inView) return;
      time += 0.016;

      ctx.clearRect(0, 0, width, height);

      // Layer 0: Hardware-Accelerated Cached Dot Grid Background
      if (dotCanvas) {
        ctx.drawImage(dotCanvas, 0, 0);
      }

      // Layer 1: STEM & Sciences (DNA Strand, Atom Orbit, Molecule)
      drawSTEMLayer(time);

      // Layer 2: Mathematical Logic & CS Matrix (Histograms, Sine Waves, Binary Matrix)
      drawMathCSLayer(time);

      // Layer 3: Humanities & Social Sciences (Pillars, Neural Synapses)
      drawHumanitiesLayer(time);

      // Layer 4: Floating Discipline Emblems
      drawFloatingEmblems(time);

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

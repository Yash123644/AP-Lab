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
  | "pillar";

interface SymbolObject {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  type: SymbolType;
  color: string;
  phase: number;
}

export function PixelCourseBackground({
  opacity = 0.85,
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

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      ctx.imageSmoothingEnabled = false;
    };

    resize();
    window.addEventListener("resize", resize);

    // List of 14 distinct AP course symbol definitions with dedicated neon colors
    const symbolConfigs: Array<{ type: SymbolType; color: string }> = [
      { type: "dna", color: "#00f2ff" },           // AP Bio - Electric Teal
      { type: "molecule", color: "#38bdf8" },      // AP Chem - Cyan
      { type: "cell", color: "#34d399" },          // AP Bio - Emerald
      { type: "beaker", color: "#60a5fa" },        // AP Chem - Sky Blue
      { type: "atom", color: "#818cf8" },          // AP Physics - Indigo
      { type: "vectors", color: "#38bdf8" },       // AP Physics - Light Blue
      { type: "integral", color: "#a78bfa" },      // AP Calc - Purple
      { type: "summation", color: "#c084fc" },     // AP Calc - Violet
      { type: "graph_bar", color: "#10b981" },     // AP Stats - Green
      { type: "graph_curve", color: "#4ade80" },   // AP Stats - Lime Green
      { type: "code_brackets", color: "#6366f1" }, // AP CS A - Deep Indigo
      { type: "binary_bits", color: "#0ea5e9" },   // AP CS A - Ocean Blue
      { type: "neural", color: "#e879f9" },        // AP Psych - Pink Purple
      { type: "pillar", color: "#fbbf24" },        // AP USH / History - Amber Gold
    ];

    // Grid-based initial placement to strictly prevent initial overlap
    const cols = 5;
    const rows = 3;
    const totalSlots = cols * rows;
    const symbols: SymbolObject[] = [];

    // Shuffle symbol configs to distribute randomly
    const shuffledConfigs = [...symbolConfigs].sort(() => Math.random() - 0.5);

    const cellW = (width || 1200) / cols;
    const cellH = (height || 800) / rows;

    for (let i = 0; i < totalSlots; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);

      const cfg = shuffledConfigs[i % shuffledConfigs.length];

      // Place in center of grid cell with slight random jitter
      const cx = col * cellW + cellW * 0.5 + (Math.random() - 0.5) * (cellW * 0.4);
      const cy = row * cellH + cellH * 0.5 + (Math.random() - 0.5) * (cellH * 0.4);

      // Low velocity for smooth motion
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.2 + Math.random() * 0.25;

      symbols.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 65, // Safety collision radius around symbols
        type: cfg.type,
        color: cfg.color,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    let inView = true;

    // Helper: Draw solid pixel rectangle
    const drawPixelRect = (px: number, py: number, w: number, h: number, color: string, alpha = 1.0) => {
      ctx.fillStyle = color;
      ctx.globalAlpha = alpha;
      ctx.fillRect(Math.floor(px), Math.floor(py), Math.floor(w), Math.floor(h));
      ctx.globalAlpha = 1.0;
    };

    // 1. AP Bio: Pixel DNA Double Helix
    const drawDNA = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      const nodes = 7;
      for (let i = -nodes; i <= nodes; i++) {
        const py = cy + i * p * 1.4;
        const angle = t * 1.8 + i * 0.45;
        const span = Math.sin(angle) * p * 4;
        const opacity = Math.abs(Math.cos(angle)) * 0.7 + 0.3;

        drawPixelRect(cx - span - p * 0.6, py, p * 1.2, p * 1.2, color);
        drawPixelRect(cx + span - p * 0.6, py, p * 1.2, p * 1.2, color);

        if (Math.abs(span) > p * 0.8) {
          drawPixelRect(cx - Math.abs(span), py + p * 0.3, Math.abs(span) * 2, p * 0.5, color, opacity * 0.35);
        }
      }
    };

    // 2. AP Chem: Pixel Molecule / Benzene Ring
    const drawMolecule = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      const r = p * 4;
      const nodeCount = 6;
      for (let i = 0; i < nodeCount; i++) {
        const a1 = (i * Math.PI * 2) / nodeCount + t * 0.3;
        const a2 = ((i + 1) * Math.PI * 2) / nodeCount + t * 0.3;

        const x1 = cx + Math.cos(a1) * r;
        const y1 = cy + Math.sin(a1) * r;
        const x2 = cx + Math.cos(a2) * r;
        const y2 = cy + Math.sin(a2) * r;

        // Bond lines
        ctx.strokeStyle = `${color}66`;
        ctx.lineWidth = p * 0.6;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        // Atom nodes
        drawPixelRect(x1 - p * 0.8, y1 - p * 0.8, p * 1.6, p * 1.6, color);
      }
      // Core atom
      drawPixelRect(cx - p, cy - p, p * 2, p * 2, "#ffffff");
    };

    // 3. AP Bio: Pixel Cell Membrane & Nucleus
    const drawCell = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      const r = p * 4.5;
      // Membrane boundary dots
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 6) {
        const waveR = r + Math.sin(t * 2 + a * 3) * p * 0.6;
        const px = cx + Math.cos(a) * waveR;
        const py = cy + Math.sin(a) * waveR;
        drawPixelRect(px - p * 0.5, py - p * 0.5, p, p, color);
      }
      // Nucleus core
      drawPixelRect(cx - p * 1.5, cy - p * 1.5, p * 3, p * 3, `${color}88`);
      drawPixelRect(cx - p * 0.6, cy - p * 0.6, p * 1.2, p * 1.2, "#ffffff");
    };

    // 4. AP Chem: Pixel Erlenmeyer Beaker
    const drawBeaker = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      // Rim
      drawPixelRect(cx - p * 2.5, cy - p * 4, p * 5, p, color);
      // Neck
      drawPixelRect(cx - p * 1.2, cy - p * 3, p * 2.4, p * 2, color);
      // Flared Body
      drawPixelRect(cx - p * 3.5, cy - p * 1, p * 7, p * 5, color, 0.8);

      // Liquid level inside
      const fillH = p * (2.5 + Math.sin(t * 3) * 0.4);
      drawPixelRect(cx - p * 3, cy + p * 4 - fillH, p * 6, fillH, color, 0.4);

      // Bubbles
      const b1Y = cy + p * 2 - ((t * 20) % (p * 5));
      const b2Y = cy + p * 3 - (((t + 0.8) * 16) % (p * 6));
      drawPixelRect(cx - p * 1, b1Y, p, p, "#ffffff");
      drawPixelRect(cx + p * 1, b2Y, p, p, "#ffffff");
    };

    // 5. AP Physics: Pixel Atomic Orbit
    const drawAtom = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      // Nucleus
      drawPixelRect(cx - p, cy - p, p * 2, p * 2, "#ffffff");

      // Orbit 1
      const r1 = p * 4.5;
      const a1 = t * 2.2;
      drawPixelRect(cx + Math.cos(a1) * r1 - p * 0.5, cy + Math.sin(a1) * r1 - p * 0.5, p * 1.2, p * 1.2, color);

      // Orbit 2 (Tilted)
      const r2 = p * 5.5;
      const a2 = -t * 1.9;
      drawPixelRect(cx + Math.cos(a2) * r2 - p * 0.5, cy + Math.sin(a2) * (r2 * 0.45) - p * 0.5, p * 1.2, p * 1.2, color);

      // Dotted orbital path rings
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
        drawPixelRect(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1, p * 0.5, p * 0.5, `${color}44`);
      }
    };

    // 6. AP Physics: Vector Arrows & Wave
    const drawVectors = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      // Main arrow shaft
      drawPixelRect(cx - p * 4, cy, p * 8, p * 0.8, color);
      // Arrow head
      drawPixelRect(cx + p * 3, cy - p * 1.5, p * 1.2, p * 3.8, color);
      drawPixelRect(cx + p * 4, cy - p * 0.8, p * 1.2, p * 2.4, color);

      // Sine wave pulse above vector
      for (let x = -p * 4; x <= p * 4; x += p) {
        const wy = Math.sin(t * 3 + x * 0.2) * p * 1.5;
        drawPixelRect(cx + x, cy - p * 4 + wy, p * 0.8, p * 0.8, `${color}99`);
      }
    };

    // 7. AP Calculus: Integral Symbol ∫ dx
    const drawIntegral = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      const integralPixels = [
        [2, -4], [3, -4], [1, -3],
        [1, -2], [1, -1], [1, 0], [1, 1], [1, 2], [1, 3],
        [0, 4], [-1, 4]
      ];
      integralPixels.forEach(([dx, dy]) => {
        drawPixelRect(cx + dx * p, cy + dy * p, p * 1.2, p * 1.2, color);
      });

      // Floating bounds (a & b)
      const pulse = Math.sin(t * 2) * p * 0.5;
      drawPixelRect(cx + p * 3, cy - p * 3 + pulse, p, p, "#ffffff");
      drawPixelRect(cx + p * 3, cy + p * 3 - pulse, p, p, color);
    };

    // 8. AP Calculus: Summation Sigma ∑
    const drawSummation = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      const sigmaPixels = [
        [-3, -4], [-2, -4], [-1, -4], [0, -4], [1, -4], [2, -4],
        [-2, -3], [-1, -2], [0, -1], [-1, 0], [-2, 1],
        [-3, 2], [-2, 3], [-1, 4], [0, 4], [1, 4], [2, 4]
      ];
      sigmaPixels.forEach(([dx, dy]) => {
        drawPixelRect(cx + dx * p * 0.8, cy + dy * p * 0.8, p, p, color);
      });
    };

    // 9. AP Stats: Bar Histogram
    const drawGraphBar = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      const heights = [3, 6, 4, 8, 5];
      const barW = p * 1.4;
      const gap = p * 0.6;

      // X-Axis
      drawPixelRect(cx - p * 4, cy + p * 4, heights.length * (barW + gap) + p, p * 0.6, `${color}66`);

      heights.forEach((h, idx) => {
        const dynH = p * (h + Math.sin(t * 3 + idx) * 1.2);
        const bx = cx - p * 4 + idx * (barW + gap);
        const by = cy + p * 4 - dynH;
        drawPixelRect(bx, by, barW, dynH, color);
      });
    };

    // 10. AP Stats: Bell Curve / Normal Distribution
    const drawGraphCurve = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      // Plot Gaussian curve points
      const pointsCount = 12;
      for (let i = -6; i <= 6; i++) {
        const x = i * p * 0.9;
        const normY = Math.exp(-(i * i) / 8) * p * 5;
        drawPixelRect(cx + x, cy + p * 3 - normY, p * 1.1, p * 1.1, color);
      }
      // Dotted Mean Line
      for (let y = -p * 2; y <= p * 3; y += p) {
        drawPixelRect(cx, cy + y, p * 0.6, p * 0.6, "#ffffff", 0.7);
      }
    };

    // 11. AP CS: Code Brackets { }
    const drawCodeBrackets = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      // Left bracket {
      const leftB = [[1, -4], [0, -3], [0, -2], [-1, -1], [0, 0], [0, 1], [0, 2], [1, 3]];
      leftB.forEach(([dx, dy]) => {
        drawPixelRect(cx - p * 3 + dx * p, cy + dy * p, p, p, color);
      });
      // Right bracket }
      const rightB = [[-1, -4], [0, -3], [0, -2], [1, -1], [0, 0], [0, 1], [0, 2], [-1, 3]];
      rightB.forEach(([dx, dy]) => {
        drawPixelRect(cx + p * 3 + dx * p, cy + dy * p, p, p, color);
      });

      // Blinking cursor dot inside
      const cursorVisible = Math.floor(t * 3) % 2 === 0;
      if (cursorVisible) {
        drawPixelRect(cx - p * 0.5, cy - p * 0.5, p, p * 2, "#ffffff");
      }
    };

    // 12. AP CS: Binary Bits Matrix 1 0
    const drawBinaryBits = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      const bitCycle = Math.floor(t * 2.5) % 4;

      // Draw '1'
      drawPixelRect(cx - p * 2.5, cy - p * 3, p * 0.8, p * 6, color);
      drawPixelRect(cx - p * 3.3, cy - p * 2, p * 0.8, p * 0.8, color);

      // Draw '0'
      drawPixelRect(cx + p * 1.5, cy - p * 3, p * 2.2, p * 0.8, color);
      drawPixelRect(cx + p * 1.5, cy + p * 2.2, p * 2.2, p * 0.8, color);
      drawPixelRect(cx + p * 1.5, cy - p * 2.2, p * 0.8, p * 4.4, color);
      drawPixelRect(cx + p * 2.9, cy - p * 2.2, p * 0.8, p * 4.4, color);
    };

    // 13. AP Psych: Neural Synapse Network
    const drawNeural = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      const nodes = [
        { x: -p * 3.5, y: -p * 2.5 },
        { x: p * 3.5, y: -p * 2 },
        { x: 0, y: p * 2.5 },
        { x: -p * 4, y: p * 3 },
        { x: p * 4, y: p * 3 }
      ];

      // Lines
      ctx.strokeStyle = `${color}55`;
      ctx.lineWidth = p * 0.5;
      ctx.beginPath();
      ctx.moveTo(cx + nodes[0].x, cy + nodes[0].y);
      ctx.lineTo(cx + nodes[2].x, cy + nodes[2].y);
      ctx.lineTo(cx + nodes[1].x, cy + nodes[1].y);
      ctx.lineTo(cx + nodes[4].x, cy + nodes[4].y);
      ctx.moveTo(cx + nodes[2].x, cy + nodes[2].y);
      ctx.lineTo(cx + nodes[3].x, cy + nodes[3].y);
      ctx.stroke();

      nodes.forEach((n, i) => {
        const pulse = (Math.sin(t * 4 + i) + 1) * 0.5;
        const nSize = p * (1.2 + pulse * 0.6);
        drawPixelRect(cx + n.x - nSize / 2, cy + n.y - nSize / 2, nSize, nSize, color);
      });
    };

    // 14. AP History: Classical Pillar / Scroll
    const drawPillar = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      // Capital Top
      drawPixelRect(cx - p * 3, cy - p * 4, p * 6, p, color);
      drawPixelRect(cx - p * 2, cy - p * 3, p * 4, p, color);
      // Shafts
      drawPixelRect(cx - p * 2, cy - p * 2, p * 0.8, p * 5.5, color);
      drawPixelRect(cx - p * 0.4, cy - p * 2, p * 0.8, p * 5.5, color);
      drawPixelRect(cx + p * 1.2, cy - p * 2, p * 0.8, p * 5.5, color);
      // Base Bottom
      drawPixelRect(cx - p * 3, cy + p * 3.5, p * 6, p, color);
    };

    // Dispatcher mapping symbol type to drawing function
    const drawSymbol = (s: SymbolObject) => {
      ctx.save();
      ctx.globalAlpha = opacity;

      switch (s.type) {
        case "dna":
          drawDNA(s.x, s.y, s.color, time + s.phase);
          break;
        case "molecule":
          drawMolecule(s.x, s.y, s.color, time + s.phase);
          break;
        case "cell":
          drawCell(s.x, s.y, s.color, time + s.phase);
          break;
        case "beaker":
          drawBeaker(s.x, s.y, s.color, time + s.phase);
          break;
        case "atom":
          drawAtom(s.x, s.y, s.color, time + s.phase);
          break;
        case "vectors":
          drawVectors(s.x, s.y, s.color, time + s.phase);
          break;
        case "integral":
          drawIntegral(s.x, s.y, s.color, time + s.phase);
          break;
        case "summation":
          drawSummation(s.x, s.y, s.color, time + s.phase);
          break;
        case "graph_bar":
          drawGraphBar(s.x, s.y, s.color, time + s.phase);
          break;
        case "graph_curve":
          drawGraphCurve(s.x, s.y, s.color, time + s.phase);
          break;
        case "code_brackets":
          drawCodeBrackets(s.x, s.y, s.color, time + s.phase);
          break;
        case "binary_bits":
          drawBinaryBits(s.x, s.y, s.color, time + s.phase);
          break;
        case "neural":
          drawNeural(s.x, s.y, s.color, time + s.phase);
          break;
        case "pillar":
          drawPillar(s.x, s.y, s.color, time + s.phase);
          break;
      }

      ctx.restore();
    };

    // Main Animation Loop
    const draw = () => {
      if (!inView) return;
      time += 0.016;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Clean Subtle Background Pixel Grid Dots
      const gridStep = pixelSize * 6;
      ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
      for (let x = gridStep / 2; x < width; x += gridStep) {
        for (let y = gridStep / 2; y < height; y += gridStep) {
          ctx.fillRect(x, y, pixelSize * 0.6, pixelSize * 0.6);
        }
      }

      // 2. Anti-Overlap Spatial Collision Engine (Nudge symbols apart if they get within 130px)
      const minDistance = 140;

      for (let i = 0; i < symbols.length; i++) {
        for (let j = i + 1; j < symbols.length; j++) {
          const s1 = symbols[i];
          const s2 = symbols[j];

          const dx = s2.x - s1.x;
          const dy = s2.y - s1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < minDistance && dist > 0) {
            const overlap = (minDistance - dist) * 0.5;
            const nx = dx / dist;
            const ny = dy / dist;

            // Separate positions to prevent overlapping
            s1.x -= nx * overlap * 0.05;
            s1.y -= ny * overlap * 0.05;
            s2.x += nx * overlap * 0.05;
            s2.y += ny * overlap * 0.05;

            // Gently exchange velocity vectors (elastic separation)
            s1.vx -= nx * 0.02;
            s1.vy -= ny * 0.02;
            s2.vx += nx * 0.02;
            s2.vy += ny * 0.02;
          }
        }
      }

      // 3. Move and Draw Symbols
      symbols.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;

        // Wrap around screen boundaries with safety margin
        const margin = 80;
        if (s.x < -margin) s.x = width + margin;
        if (s.x > width + margin) s.x = -margin;
        if (s.y < -margin) s.y = height + margin;
        if (s.y > height + margin) s.y = -margin;

        // Speed limit clamp to keep motion ultra-smooth & elegant
        const speed = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
        if (speed > 0.45) {
          s.vx = (s.vx / speed) * 0.45;
          s.vy = (s.vy / speed) * 0.45;
        } else if (speed < 0.15) {
          s.vx = (s.vx / speed) * 0.15;
          s.vy = (s.vy / speed) * 0.15;
        }

        drawSymbol(s);
      });

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
      className="fixed inset-0 w-full h-full pointer-events-none -z-20 image-rendering-pixelated bg-[#03040a]"
      style={{ display: "block" }}
    />
  );
}

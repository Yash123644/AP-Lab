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
  opacity = 0.16,
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

    // Offscreen cached canvas for static dot grid background optimization
    let dotCanvas: HTMLCanvasElement | null = null;

    const renderDotGridCache = (w: number, h: number) => {
      dotCanvas = document.createElement("canvas");
      dotCanvas.width = w;
      dotCanvas.height = h;
      const dotCtx = dotCanvas.getContext("2d");
      if (!dotCtx) return;

      const dotSpacing = 32;
      dotCtx.fillStyle = "rgba(255, 255, 255, 0.16)"; // Soft dot grid opacity
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

    // Muted, neutral, bland slate & zinc colors for clean ambient look
    const mutedColors = [
      "#94a3b8", // Slate 400
      "#cbd5e1", // Slate 300
      "#64748b", // Slate 500
      "#a1a1aa", // Zinc 400
      "#71717a", // Zinc 500
      "#e2e8f0", // Slate 200
      "#475569", // Slate 600
    ];

    const symbolConfigs: Array<{ type: SymbolType; color: string }> = [
      { type: "dna", color: mutedColors[0] },
      { type: "molecule", color: mutedColors[1] },
      { type: "cell", color: mutedColors[2] },
      { type: "beaker", color: mutedColors[3] },
      { type: "atom", color: mutedColors[4] },
      { type: "vectors", color: mutedColors[5] },
      { type: "integral", color: mutedColors[0] },
      { type: "summation", color: mutedColors[1] },
      { type: "graph_bar", color: mutedColors[2] },
      { type: "graph_curve", color: mutedColors[3] },
      { type: "code_brackets", color: mutedColors[4] },
      { type: "binary_bits", color: mutedColors[5] },
      { type: "neural", color: "#64748b" },
      { type: "pillar", color: "#94a3b8" },
      { type: "book_quill", color: "#cbd5e1" },
      { type: "econ_trend", color: "#a1a1aa" },
      { type: "rna_loop", color: "#71717a" },
      { type: "magnet", color: "#94a3b8" },
      { type: "brain_spark", color: "#cbd5e1" },
      { type: "scales", color: "#64748b" },
    ];

    // Grid placement for initial spread (6 cols x 4 rows = 24 active symbols)
    const cols = 6;
    const rows = 4;
    const totalSlots = cols * rows;
    const symbols: SymbolObject[] = [];

    const shuffledConfigs = [...symbolConfigs, ...symbolConfigs].sort(() => Math.random() - 0.5);

    const cellW = (width || 1200) / cols;
    const cellH = (height || 800) / rows;

    for (let i = 0; i < totalSlots; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);

      const cfg = shuffledConfigs[i % shuffledConfigs.length];

      const cx = col * cellW + cellW * 0.5 + (Math.random() - 0.5) * (cellW * 0.4);
      const cy = row * cellH + cellH * 0.5 + (Math.random() - 0.5) * (cellH * 0.4);

      // Higher initial drift speed for active motion
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.45 + Math.random() * 0.4;

      symbols.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 60,
        type: cfg.type,
        color: cfg.color,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    let inView = true;

    // Helper: Draw solid pixel rect
    const drawPixelRect = (px: number, py: number, w: number, h: number, color: string, alpha = 1.0) => {
      ctx.fillStyle = color;
      ctx.globalAlpha = alpha;
      ctx.fillRect(Math.floor(px), Math.floor(py), Math.floor(w), Math.floor(h));
      ctx.globalAlpha = 1.0;
    };

    // 1. AP Bio: Pixel DNA Double Helix
    const drawDNA = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      const nodes = 6;
      for (let i = -nodes; i <= nodes; i++) {
        const py = cy + i * p * 1.4;
        const angle = t * 2.2 + i * 0.45;
        const span = Math.sin(angle) * p * 3.8;
        const op = Math.abs(Math.cos(angle)) * 0.7 + 0.3;

        drawPixelRect(cx - span - p * 0.6, py, p * 1.2, p * 1.2, color);
        drawPixelRect(cx + span - p * 0.6, py, p * 1.2, p * 1.2, color);

        if (Math.abs(span) > p * 0.8) {
          drawPixelRect(cx - Math.abs(span), py + p * 0.3, Math.abs(span) * 2, p * 0.5, color, op * 0.35);
        }
      }
    };

    // 2. AP Chem: Benzene Ring
    const drawMolecule = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      const r = p * 3.8;
      const nodeCount = 6;
      for (let i = 0; i < nodeCount; i++) {
        const a1 = (i * Math.PI * 2) / nodeCount + t * 0.5;
        const a2 = ((i + 1) * Math.PI * 2) / nodeCount + t * 0.5;

        const x1 = cx + Math.cos(a1) * r;
        const y1 = cy + Math.sin(a1) * r;
        const x2 = cx + Math.cos(a2) * r;
        const y2 = cy + Math.sin(a2) * r;

        ctx.strokeStyle = `${color}44`;
        ctx.lineWidth = p * 0.6;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        drawPixelRect(x1 - p * 0.7, y1 - p * 0.7, p * 1.4, p * 1.4, color);
      }
      drawPixelRect(cx - p, cy - p, p * 2, p * 2, "#94a3b8");
    };

    // 3. AP Bio: Cell Membrane
    const drawCell = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      const r = p * 4;
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 6) {
        const waveR = r + Math.sin(t * 2.5 + a * 3) * p * 0.5;
        const px = cx + Math.cos(a) * waveR;
        const py = cy + Math.sin(a) * waveR;
        drawPixelRect(px - p * 0.5, py - p * 0.5, p, p, color);
      }
      drawPixelRect(cx - p * 1.2, cy - p * 1.2, p * 2.4, p * 2.4, `${color}88`);
      drawPixelRect(cx - p * 0.5, cy - p * 0.5, p, p, "#cbd5e1");
    };

    // 4. AP Chem: Beaker
    const drawBeaker = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      drawPixelRect(cx - p * 2.2, cy - p * 3.5, p * 4.4, p, color);
      drawPixelRect(cx - p * 1.1, cy - p * 2.5, p * 2.2, p * 1.8, color);
      drawPixelRect(cx - p * 3, cy - p * 0.7, p * 6, p * 4.5, color, 0.8);

      const fillH = p * (2.2 + Math.sin(t * 3.5) * 0.4);
      drawPixelRect(cx - p * 2.6, cy + p * 3.8 - fillH, p * 5.2, fillH, color, 0.4);

      const b1Y = cy + p * 2 - ((t * 25) % (p * 5));
      drawPixelRect(cx - p * 0.8, b1Y, p, p, "#cbd5e1");
    };

    // 5. AP Physics: Atom Orbit
    const drawAtom = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      drawPixelRect(cx - p, cy - p, p * 2, p * 2, "#cbd5e1");

      const r1 = p * 4.2;
      const a1 = t * 2.8;
      drawPixelRect(cx + Math.cos(a1) * r1 - p * 0.5, cy + Math.sin(a1) * r1 - p * 0.5, p * 1.1, p * 1.1, color);

      const r2 = p * 5;
      const a2 = -t * 2.4;
      drawPixelRect(cx + Math.cos(a2) * r2 - p * 0.5, cy + Math.sin(a2) * (r2 * 0.45) - p * 0.5, p * 1.1, p * 1.1, color);
    };

    // 6. AP Physics: Vectors
    const drawVectors = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      drawPixelRect(cx - p * 3.5, cy, p * 7, p * 0.8, color);
      drawPixelRect(cx + p * 2.5, cy - p * 1.2, p * 1.2, p * 3.2, color);

      for (let x = -p * 3.5; x <= p * 3.5; x += p) {
        const wy = Math.sin(t * 3.5 + x * 0.2) * p * 1.4;
        drawPixelRect(cx + x, cy - p * 3.5 + wy, p * 0.8, p * 0.8, `${color}88`);
      }
    };

    // 7. AP Calculus: Integral
    const drawIntegral = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      const pixels = [[2, -4], [3, -4], [1, -3], [1, -2], [1, -1], [1, 0], [1, 1], [1, 2], [1, 3], [0, 4], [-1, 4]];
      pixels.forEach(([dx, dy]) => {
        drawPixelRect(cx + dx * p * 0.9, cy + dy * p * 0.9, p, p, color);
      });
      const pulse = Math.sin(t * 2.5) * p * 0.5;
      drawPixelRect(cx + p * 2.8, cy - p * 2.8 + pulse, p, p, "#cbd5e1");
    };

    // 8. AP Calculus: Summation Sigma
    const drawSummation = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      const sigmaPixels = [[-3, -4], [-2, -4], [-1, -4], [0, -4], [1, -4], [2, -4], [-2, -3], [-1, -2], [0, -1], [-1, 0], [-2, 1], [-3, 2], [-2, 3], [-1, 4], [0, 4], [1, 4], [2, 4]];
      sigmaPixels.forEach(([dx, dy]) => {
        drawPixelRect(cx + dx * p * 0.75, cy + dy * p * 0.75, p, p, color);
      });
    };

    // 9. AP Stats: Bar Histogram
    const drawGraphBar = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      const heights = [3, 5, 4, 7, 4];
      const barW = p * 1.2;
      const gap = p * 0.5;

      drawPixelRect(cx - p * 3.5, cy + p * 3.5, heights.length * (barW + gap), p * 0.6, `${color}55`);
      heights.forEach((h, idx) => {
        const dynH = p * (h + Math.sin(t * 3.5 + idx) * 1.1);
        const bx = cx - p * 3.5 + idx * (barW + gap);
        drawPixelRect(bx, cy + p * 3.5 - dynH, barW, dynH, color);
      });
    };

    // 10. AP Stats: Bell Curve
    const drawGraphCurve = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      for (let i = -5; i <= 5; i++) {
        const x = i * p * 0.9;
        const normY = Math.exp(-(i * i) / 6) * p * 4.5;
        drawPixelRect(cx + x, cy + p * 2.5 - normY, p, p, color);
      }
    };

    // 11. AP CS: Code Brackets
    const drawCodeBrackets = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      const leftB = [[1, -3], [0, -2], [0, -1], [-1, 0], [0, 1], [0, 2], [1, 3]];
      leftB.forEach(([dx, dy]) => {
        drawPixelRect(cx - p * 2.5 + dx * p, cy + dy * p, p, p, color);
      });
      const rightB = [[-1, -3], [0, -2], [0, -1], [1, 0], [0, 1], [0, 2], [-1, 3]];
      rightB.forEach(([dx, dy]) => {
        drawPixelRect(cx + p * 2.5 + dx * p, cy + dy * p, p, p, color);
      });
    };

    // 12. AP CS: Binary Bits
    const drawBinaryBits = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      drawPixelRect(cx - p * 2, cy - p * 2.5, p * 0.8, p * 5, color);
      drawPixelRect(cx + p * 1.2, cy - p * 2.5, p * 2, p * 0.8, color);
      drawPixelRect(cx + p * 1.2, cy + p * 1.7, p * 2, p * 0.8, color);
      drawPixelRect(cx + p * 1.2, cy - p * 1.7, p * 0.8, p * 3.4, color);
      drawPixelRect(cx + p * 2.4, cy - p * 1.7, p * 0.8, p * 3.4, color);
    };

    // 13. AP Psych: Neural Nodes
    const drawNeural = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      const nodes = [{ x: -p * 3, y: -p * 2 }, { x: p * 3, y: -p * 1.5 }, { x: 0, y: p * 2 }, { x: -p * 3.5, y: p * 2.5 }];
      ctx.strokeStyle = `${color}44`;
      ctx.lineWidth = p * 0.5;
      ctx.beginPath();
      ctx.moveTo(cx + nodes[0].x, cy + nodes[0].y);
      ctx.lineTo(cx + nodes[2].x, cy + nodes[2].y);
      ctx.lineTo(cx + nodes[1].x, cy + nodes[1].y);
      ctx.stroke();
      nodes.forEach((n, i) => {
        const pulse = (Math.sin(t * 4.5 + i) + 1) * 0.4;
        const nSize = p * (1.1 + pulse * 0.5);
        drawPixelRect(cx + n.x - nSize / 2, cy + n.y - nSize / 2, nSize, nSize, color);
      });
    };

    // 14. AP History: Pillar
    const drawPillar = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      drawPixelRect(cx - p * 2.5, cy - p * 3.5, p * 5, p, color);
      drawPixelRect(cx - p * 1.8, cy - p * 2.5, p * 0.8, p * 5, color);
      drawPixelRect(cx + p * 1, cy - p * 2.5, p * 0.8, p * 5, color);
      drawPixelRect(cx - p * 2.5, cy + p * 2.8, p * 5, p, color);
    };

    // 15. AP Lit: Book & Quill
    const drawBookQuill = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      drawPixelRect(cx - p * 3.5, cy - p * 1.5, p * 3, p * 3.5, color, 0.7);
      drawPixelRect(cx + p * 0.5, cy - p * 1.5, p * 3, p * 3.5, color, 0.7);
      drawPixelRect(cx - p * 0.3, cy - p * 1.8, p * 0.6, p * 4, "#cbd5e1");
      const qy = Math.sin(t * 3) * p * 1.2;
      drawPixelRect(cx + p * 2, cy - p * 4 + qy, p * 0.8, p * 3, color);
      drawPixelRect(cx + p * 2.8, cy - p * 4.8 + qy, p * 1.2, p * 1.2, "#cbd5e1");
    };

    // 16. AP Econ: Dollar $ & Trend Line
    const drawEconTrend = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      const dollar = [[-1, -3], [0, -3], [1, -3], [-1, -2], [-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [-1, 2], [0, 2], [1, 2]];
      dollar.forEach(([dx, dy]) => {
        drawPixelRect(cx - p * 2 + dx * p * 0.8, cy + dy * p * 0.8, p * 0.9, p * 0.9, color);
      });
      drawPixelRect(cx - p * 2, cy - p * 3.2, p * 0.6, p * 5.4, color);

      drawPixelRect(cx + p * 1, cy + p * 2, p * 0.8, p * 0.8, "#cbd5e1");
      drawPixelRect(cx + p * 2, cy + p * 0.5, p * 0.8, p * 0.8, "#cbd5e1");
      drawPixelRect(cx + p * 3, cy - p * 1, p * 0.8, p * 0.8, "#cbd5e1");
      drawPixelRect(cx + p * 4, cy - p * 2.5, p * 1.6, p * 1.6, color);
    };

    // 17. AP Bio: RNA Strand
    const drawRNALoop = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      for (let i = -5; i <= 5; i++) {
        const py = cy + i * p * 1.2;
        const rx = Math.sin(t * 2.5 + i * 0.5) * p * 3;
        drawPixelRect(cx + rx, py, p * 1.1, p * 1.1, color);
        if (i % 2 === 0) {
          drawPixelRect(cx + rx - p * 1.2, py + p * 0.2, p * 1.2, p * 0.6, "#cbd5e1", 0.5);
        }
      }
    };

    // 18. AP Phys C: Magnet
    const drawMagnet = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      drawPixelRect(cx - p * 2.5, cy - p * 3, p * 1.2, p * 5, color);
      drawPixelRect(cx + p * 1.3, cy - p * 3, p * 1.2, p * 5, color);
      drawPixelRect(cx - p * 2.5, cy + p * 2, p * 5, p * 1.2, color);
      drawPixelRect(cx - p * 2.5, cy - p * 3, p * 1.2, p * 1.5, "#cbd5e1");
      drawPixelRect(cx + p * 1.3, cy - p * 3, p * 1.2, p * 1.5, `${color}88`);
    };

    // 19. AP Psych: Brain Spark
    const drawBrainSpark = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      drawPixelRect(cx - p * 2, cy - p * 1, p * 4, p * 3, color, 0.8);
      drawPixelRect(cx - p * 3, cy, p, p * 2, color, 0.8);
      drawPixelRect(cx + p * 2, cy, p, p * 2, color, 0.8);
      const pulse = (Math.sin(t * 4) + 1) * 0.5 * p;
      drawPixelRect(cx - p * 0.5, cy - p * 3.5 - pulse, p, p * 1.5, "#cbd5e1");
    };

    // 20. AP Gov: Scales of Justice
    const drawScales = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      drawPixelRect(cx - p * 0.4, cy - p * 3, p * 0.8, p * 6, color);
      drawPixelRect(cx - p * 3, cy - p * 2.5, p * 6, p * 0.8, color);
      drawPixelRect(cx - p * 2, cy + p * 3, p * 4, p * 0.8, color);

      const tilt = Math.sin(t * 2.5) * p * 0.6;
      drawPixelRect(cx - p * 3.2, cy + tilt, p * 1.6, p * 0.6, "#cbd5e1");
      drawPixelRect(cx + p * 1.6, cy - tilt, p * 1.6, p * 0.6, "#cbd5e1");
    };

    // Dispatcher mapping symbol type to drawing function
    const drawSymbol = (s: SymbolObject) => {
      ctx.save();
      ctx.globalAlpha = opacity;

      switch (s.type) {
        case "dna": drawDNA(s.x, s.y, s.color, time + s.phase); break;
        case "molecule": drawMolecule(s.x, s.y, s.color, time + s.phase); break;
        case "cell": drawCell(s.x, s.y, s.color, time + s.phase); break;
        case "beaker": drawBeaker(s.x, s.y, s.color, time + s.phase); break;
        case "atom": drawAtom(s.x, s.y, s.color, time + s.phase); break;
        case "vectors": drawVectors(s.x, s.y, s.color, time + s.phase); break;
        case "integral": drawIntegral(s.x, s.y, s.color, time + s.phase); break;
        case "summation": drawSummation(s.x, s.y, s.color, time + s.phase); break;
        case "graph_bar": drawGraphBar(s.x, s.y, s.color, time + s.phase); break;
        case "graph_curve": drawGraphCurve(s.x, s.y, s.color, time + s.phase); break;
        case "code_brackets": drawCodeBrackets(s.x, s.y, s.color, time + s.phase); break;
        case "binary_bits": drawBinaryBits(s.x, s.y, s.color, time + s.phase); break;
        case "neural": drawNeural(s.x, s.y, s.color, time + s.phase); break;
        case "pillar": drawPillar(s.x, s.y, s.color, time + s.phase); break;
        case "book_quill": drawBookQuill(s.x, s.y, s.color, time + s.phase); break;
        case "econ_trend": drawEconTrend(s.x, s.y, s.color, time + s.phase); break;
        case "rna_loop": drawRNALoop(s.x, s.y, s.color, time + s.phase); break;
        case "magnet": drawMagnet(s.x, s.y, s.color, time + s.phase); break;
        case "brain_spark": drawBrainSpark(s.x, s.y, s.color, time + s.phase); break;
        case "scales": drawScales(s.x, s.y, s.color, time + s.phase); break;
      }

      ctx.restore();
    };

    // Optimized Active Motion Loop
    const minDistanceSq = 110 * 110;

    const draw = () => {
      if (!inView) return;
      time += 0.016;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Hardware-Accelerated Cached Dot Matrix Grid Background
      if (dotCanvas) {
        ctx.drawImage(dotCanvas, 0, 0);
      }

      // 2. High-Performance Pair Separation Engine
      const len = symbols.length;
      for (let i = 0; i < len; i++) {
        const s1 = symbols[i];
        for (let j = i + 1; j < len; j++) {
          const s2 = symbols[j];

          const dx = s2.x - s1.x;
          const dy = s2.y - s1.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < minDistanceSq && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const overlap = (110 - dist) * 0.5;
            const nx = dx / dist;
            const ny = dy / dist;

            s1.x -= nx * overlap * 0.05;
            s1.y -= ny * overlap * 0.05;
            s2.x += nx * overlap * 0.05;
            s2.y += ny * overlap * 0.05;

            s1.vx -= nx * 0.02;
            s1.vy -= ny * 0.02;
            s2.vx += nx * 0.02;
            s2.vy += ny * 0.02;
          }
        }
      }

      // 3. Move Symbols with Continuous Dynamic Floating & Boundary Wrap
      const margin = 70;
      for (let i = 0; i < len; i++) {
        const s = symbols[i];

        s.x += s.vx;
        s.y += s.vy;

        // Screen edge wrap-around for endless motion
        if (s.x < -margin) s.x = width + margin;
        if (s.x > width + margin) s.x = -margin;
        if (s.y < -margin) s.y = height + margin;
        if (s.y > height + margin) s.y = -margin;

        // Keep velocity steadily active between 0.45 and 0.8
        const speedSq = s.vx * s.vx + s.vy * s.vy;
        if (speedSq > 0.64) { // 0.8^2
          const speed = Math.sqrt(speedSq);
          s.vx = (s.vx / speed) * 0.8;
          s.vy = (s.vy / speed) * 0.8;
        } else if (speedSq < 0.16) { // 0.4^2
          const speed = Math.sqrt(speedSq);
          if (speed > 0) {
            s.vx = (s.vx / speed) * 0.45;
            s.vy = (s.vy / speed) * 0.45;
          }
        }

        drawSymbol(s);
      }

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

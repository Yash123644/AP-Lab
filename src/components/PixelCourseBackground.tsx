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
  opacity = 0.55,
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
      dotCtx.fillStyle = "rgba(255, 255, 255, 0.45)"; // Higher dot opacity
      for (let x = dotSpacing / 2; x < w; x += dotSpacing) {
        for (let y = dotSpacing / 2; y < h; y += dotSpacing) {
          dotCtx.fillRect(Math.floor(x), Math.floor(y), 2, 2);
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

    // List of 20 distinct AP course symbol definitions with dedicated vibrant colors
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
      { type: "pillar", color: "#fbbf24" },        // AP USH - Amber Gold
      { type: "book_quill", color: "#f472b6" },    // AP Eng Lit - Pink
      { type: "econ_trend", color: "#22c55e" },    // AP Econ - Green
      { type: "rna_loop", color: "#2dd4bf" },      // AP Bio - Teal
      { type: "magnet", color: "#ef4444" },        // AP Phys C - Red
      { type: "brain_spark", color: "#f43f5e" },   // AP Psych - Rose
      { type: "scales", color: "#eab308" },        // AP Gov - Yellow
    ];

    // Grid-based initial placement (6 cols x 4 rows = 24 active symbols)
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

      const cx = col * cellW + cellW * 0.5 + (Math.random() - 0.5) * (cellW * 0.35);
      const cy = row * cellH + cellH * 0.5 + (Math.random() - 0.5) * (cellH * 0.35);

      const angle = Math.random() * Math.PI * 2;
      const speed = 0.2 + Math.random() * 0.2;

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
        const angle = t * 1.8 + i * 0.45;
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
        const a1 = (i * Math.PI * 2) / nodeCount + t * 0.3;
        const a2 = ((i + 1) * Math.PI * 2) / nodeCount + t * 0.3;

        const x1 = cx + Math.cos(a1) * r;
        const y1 = cy + Math.sin(a1) * r;
        const x2 = cx + Math.cos(a2) * r;
        const y2 = cy + Math.sin(a2) * r;

        ctx.strokeStyle = `${color}66`;
        ctx.lineWidth = p * 0.6;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        drawPixelRect(x1 - p * 0.7, y1 - p * 0.7, p * 1.4, p * 1.4, color);
      }
      drawPixelRect(cx - p, cy - p, p * 2, p * 2, "#ffffff");
    };

    // 3. AP Bio: Cell Membrane
    const drawCell = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      const r = p * 4;
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 6) {
        const waveR = r + Math.sin(t * 2 + a * 3) * p * 0.5;
        const px = cx + Math.cos(a) * waveR;
        const py = cy + Math.sin(a) * waveR;
        drawPixelRect(px - p * 0.5, py - p * 0.5, p, p, color);
      }
      drawPixelRect(cx - p * 1.2, cy - p * 1.2, p * 2.4, p * 2.4, `${color}88`);
      drawPixelRect(cx - p * 0.5, cy - p * 0.5, p, p, "#ffffff");
    };

    // 4. AP Chem: Beaker
    const drawBeaker = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      drawPixelRect(cx - p * 2.2, cy - p * 3.5, p * 4.4, p, color);
      drawPixelRect(cx - p * 1.1, cy - p * 2.5, p * 2.2, p * 1.8, color);
      drawPixelRect(cx - p * 3, cy - p * 0.7, p * 6, p * 4.5, color, 0.8);

      const fillH = p * (2.2 + Math.sin(t * 3) * 0.4);
      drawPixelRect(cx - p * 2.6, cy + p * 3.8 - fillH, p * 5.2, fillH, color, 0.4);

      const b1Y = cy + p * 2 - ((t * 20) % (p * 5));
      drawPixelRect(cx - p * 0.8, b1Y, p, p, "#ffffff");
    };

    // 5. AP Physics: Atom Orbit
    const drawAtom = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      drawPixelRect(cx - p, cy - p, p * 2, p * 2, "#ffffff");

      const r1 = p * 4.2;
      const a1 = t * 2.2;
      drawPixelRect(cx + Math.cos(a1) * r1 - p * 0.5, cy + Math.sin(a1) * r1 - p * 0.5, p * 1.1, p * 1.1, color);

      const r2 = p * 5;
      const a2 = -t * 1.9;
      drawPixelRect(cx + Math.cos(a2) * r2 - p * 0.5, cy + Math.sin(a2) * (r2 * 0.45) - p * 0.5, p * 1.1, p * 1.1, color);
    };

    // 6. AP Physics: Vectors
    const drawVectors = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      drawPixelRect(cx - p * 3.5, cy, p * 7, p * 0.8, color);
      drawPixelRect(cx + p * 2.5, cy - p * 1.2, p * 1.2, p * 3.2, color);

      for (let x = -p * 3.5; x <= p * 3.5; x += p) {
        const wy = Math.sin(t * 3 + x * 0.2) * p * 1.4;
        drawPixelRect(cx + x, cy - p * 3.5 + wy, p * 0.8, p * 0.8, `${color}99`);
      }
    };

    // 7. AP Calculus: Integral
    const drawIntegral = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      const pixels = [[2, -4], [3, -4], [1, -3], [1, -2], [1, -1], [1, 0], [1, 1], [1, 2], [1, 3], [0, 4], [-1, 4]];
      pixels.forEach(([dx, dy]) => {
        drawPixelRect(cx + dx * p * 0.9, cy + dy * p * 0.9, p, p, color);
      });
      const pulse = Math.sin(t * 2) * p * 0.5;
      drawPixelRect(cx + p * 2.8, cy - p * 2.8 + pulse, p, p, "#ffffff");
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

      drawPixelRect(cx - p * 3.5, cy + p * 3.5, heights.length * (barW + gap), p * 0.6, `${color}66`);
      heights.forEach((h, idx) => {
        const dynH = p * (h + Math.sin(t * 3 + idx) * 1.1);
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
      ctx.strokeStyle = `${color}55`;
      ctx.lineWidth = p * 0.5;
      ctx.beginPath();
      ctx.moveTo(cx + nodes[0].x, cy + nodes[0].y);
      ctx.lineTo(cx + nodes[2].x, cy + nodes[2].y);
      ctx.lineTo(cx + nodes[1].x, cy + nodes[1].y);
      ctx.stroke();
      nodes.forEach((n, i) => {
        const pulse = (Math.sin(t * 4 + i) + 1) * 0.4;
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
      drawPixelRect(cx - p * 0.3, cy - p * 1.8, p * 0.6, p * 4, "#ffffff");
      const qy = Math.sin(t * 2.5) * p * 1.2;
      drawPixelRect(cx + p * 2, cy - p * 4 + qy, p * 0.8, p * 3, color);
      drawPixelRect(cx + p * 2.8, cy - p * 4.8 + qy, p * 1.2, p * 1.2, "#ffffff");
    };

    // 16. AP Econ: Dollar $ & Trend Line
    const drawEconTrend = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      const dollar = [[-1, -3], [0, -3], [1, -3], [-1, -2], [-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [-1, 2], [0, 2], [1, 2]];
      dollar.forEach(([dx, dy]) => {
        drawPixelRect(cx - p * 2 + dx * p * 0.8, cy + dy * p * 0.8, p * 0.9, p * 0.9, color);
      });
      drawPixelRect(cx - p * 2, cy - p * 3.2, p * 0.6, p * 5.4, color);

      drawPixelRect(cx + p * 1, cy + p * 2, p * 0.8, p * 0.8, "#ffffff");
      drawPixelRect(cx + p * 2, cy + p * 0.5, p * 0.8, p * 0.8, "#ffffff");
      drawPixelRect(cx + p * 3, cy - p * 1, p * 0.8, p * 0.8, "#ffffff");
      drawPixelRect(cx + p * 4, cy - p * 2.5, p * 1.6, p * 1.6, color);
    };

    // 17. AP Bio: RNA Strand
    const drawRNALoop = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      for (let i = -5; i <= 5; i++) {
        const py = cy + i * p * 1.2;
        const rx = Math.sin(t * 2 + i * 0.5) * p * 3;
        drawPixelRect(cx + rx, py, p * 1.1, p * 1.1, color);
        if (i % 2 === 0) {
          drawPixelRect(cx + rx - p * 1.2, py + p * 0.2, p * 1.2, p * 0.6, "#ffffff", 0.6);
        }
      }
    };

    // 18. AP Phys C: Magnet
    const drawMagnet = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      drawPixelRect(cx - p * 2.5, cy - p * 3, p * 1.2, p * 5, color);
      drawPixelRect(cx + p * 1.3, cy - p * 3, p * 1.2, p * 5, color);
      drawPixelRect(cx - p * 2.5, cy + p * 2, p * 5, p * 1.2, color);
      drawPixelRect(cx - p * 2.5, cy - p * 3, p * 1.2, p * 1.5, "#ffffff");
      drawPixelRect(cx + p * 1.3, cy - p * 3, p * 1.2, p * 1.5, `${color}88`);
    };

    // 19. AP Psych: Brain Spark
    const drawBrainSpark = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      drawPixelRect(cx - p * 2, cy - p * 1, p * 4, p * 3, color, 0.8);
      drawPixelRect(cx - p * 3, cy, p, p * 2, color, 0.8);
      drawPixelRect(cx + p * 2, cy, p, p * 2, color, 0.8);
      const pulse = (Math.sin(t * 4) + 1) * 0.5 * p;
      drawPixelRect(cx - p * 0.5, cy - p * 3.5 - pulse, p, p * 1.5, "#ffffff");
    };

    // 20. AP Gov: Scales of Justice
    const drawScales = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      drawPixelRect(cx - p * 0.4, cy - p * 3, p * 0.8, p * 6, color);
      drawPixelRect(cx - p * 3, cy - p * 2.5, p * 6, p * 0.8, color);
      drawPixelRect(cx - p * 2, cy + p * 3, p * 4, p * 0.8, color);

      const tilt = Math.sin(t * 2) * p * 0.6;
      drawPixelRect(cx - p * 3.2, cy + tilt, p * 1.6, p * 0.6, "#ffffff");
      drawPixelRect(cx + p * 1.6, cy - tilt, p * 1.6, p * 0.6, "#ffffff");
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

    // Optimized Animation Loop
    const minDistanceSq = 135 * 135;

    const draw = () => {
      if (!inView) return;
      time += 0.016;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Hardware-Accelerated Cached Dot Matrix Grid Background
      if (dotCanvas) {
        ctx.drawImage(dotCanvas, 0, 0);
      }

      // 2. High-Performance Anti-Overlap Spatial Engine (Squared Distance Checks)
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
            const overlap = (135 - dist) * 0.5;
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

      // 3. Move and Render Symbols
      for (let i = 0; i < len; i++) {
        const s = symbols[i];
        s.x += s.vx;
        s.y += s.vy;

        const margin = 80;
        if (s.x < -margin) s.x = width + margin;
        if (s.x > width + margin) s.x = -margin;
        if (s.y < -margin) s.y = height + margin;
        if (s.y > height + margin) s.y = -margin;

        const speedSq = s.vx * s.vx + s.vy * s.vy;
        if (speedSq > 0.2025) { // 0.45^2 = 0.2025
          const speed = Math.sqrt(speedSq);
          s.vx = (s.vx / speed) * 0.45;
          s.vy = (s.vy / speed) * 0.45;
        } else if (speedSq < 0.0225) { // 0.15^2 = 0.0225
          const speed = Math.sqrt(speedSq);
          s.vx = (s.vx / speed) * 0.15;
          s.vy = (s.vy / speed) * 0.15;
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

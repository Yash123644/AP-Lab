"use client";

import { useEffect, useRef } from "react";

interface PixelCourseBackgroundProps {
  opacity?: number;
  pixelSize?: number;
}

export function PixelCourseBackground({
  opacity = 0.85,
  pixelSize = 8,
}: PixelCourseBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

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

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Initialize course element particle objects
    const elementsCount = 28;
    const elements: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      type: "dna" | "graph" | "atom" | "math" | "code" | "neural" | "beaker" | "history";
      color: string;
      scale: number;
      rotation: number;
      rotSpeed: number;
      extraData?: any;
    }> = [];

    const types: Array<{ type: any; color: string }> = [
      { type: "dna", color: "#00f2ff" },       // Bio - Cyan
      { type: "beaker", color: "#38bdf8" },    // Chem - Sky
      { type: "atom", color: "#60a5fa" },      // Phys - Blue
      { type: "math", color: "#34d399" },      // Calc - Emerald
      { type: "graph", color: "#10b981" },     // Stats - Teal
      { type: "code", color: "#818cf8" },      // CS - Indigo
      { type: "neural", color: "#a78bfa" },    // Psych - Purple
      { type: "history", color: "#f59e0b" },   // USH - Amber
    ];

    for (let i = 0; i < elementsCount; i++) {
      const t = types[i % types.length];
      elements.push({
        x: Math.random() * (width || 1200),
        y: Math.random() * (height || 800),
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        type: t.type,
        color: t.color,
        scale: 1.8 + Math.random() * 0.8,
        rotation: 0,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        extraData: Math.random() * 100,
      });
    }

    let time = 0;
    let inView = true;

    // Pixel drawing helpers
    const drawPixelRect = (px: number, py: number, w: number, h: number, color: string) => {
      ctx.fillStyle = color;
      ctx.fillRect(Math.floor(px), Math.floor(py), Math.floor(w), Math.floor(h));
    };

    // Draw Pixel Art DNA Strand
    const drawPixelDNA = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      const heightBars = 6;
      for (let i = -heightBars; i <= heightBars; i++) {
        const offset = i * p * 1.5;
        const angle = t * 2 + i * 0.4;
        const widthSpan = Math.sin(angle) * p * 4;
        const opacity = Math.abs(Math.cos(angle)) * 0.8 + 0.2;

        // Left & Right Strand Nodes
        drawPixelRect(cx - widthSpan - p, cy + offset, p * 1.2, p * 1.2, color);
        drawPixelRect(cx + widthSpan, cy + offset, p * 1.2, p * 1.2, color);

        // Connecting Rung
        if (Math.abs(widthSpan) > p * 0.8) {
          ctx.fillStyle = color;
          ctx.globalAlpha = opacity * 0.4;
          ctx.fillRect(cx - Math.abs(widthSpan), cy + offset + p * 0.3, Math.abs(widthSpan) * 2, p * 0.6);
          ctx.globalAlpha = 1.0;
        }
      }
    };

    // Draw Pixel Art Bar Chart / Graph
    const drawPixelGraph = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      const bars = [4, 7, 3, 9, 6];
      const barW = p * 1.5;
      const gap = p * 0.8;

      // Axes
      drawPixelRect(cx - p, cy + p * 6, bars.length * (barW + gap) + p * 2, p * 0.8, `${color}88`);
      drawPixelRect(cx - p, cy - p * 4, p * 0.8, p * 10, `${color}88`);

      // Pulsing Bars
      bars.forEach((bHeight, idx) => {
        const dynamicH = p * (bHeight + Math.sin(t * 3 + idx) * 1.5);
        const bx = cx + idx * (barW + gap);
        const by = cy + p * 6 - dynamicH;
        drawPixelRect(bx, by, barW, dynamicH, color);
      });

      // Line Graph Curve Trend
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = p * 0.6;
      ctx.beginPath();
      bars.forEach((bHeight, idx) => {
        const dynamicH = p * (bHeight + Math.sin(t * 3 + idx) * 1.5);
        const bx = cx + idx * (barW + gap) + barW / 2;
        const by = cy + p * 6 - dynamicH;
        if (idx === 0) ctx.moveTo(bx, by);
        else ctx.lineTo(bx, by);
      });
      ctx.stroke();
    };

    // Draw Pixel Atom / Orbit
    const drawPixelAtom = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      // Nucleus
      drawPixelRect(cx - p, cy - p, p * 2, p * 2, color);

      // Orbit 1
      const r1 = p * 4.5;
      const a1 = t * 2;
      drawPixelRect(cx + Math.cos(a1) * r1 - p / 2, cy + Math.sin(a1) * r1 - p / 2, p, p, "#ffffff");

      // Orbit 2 (Tilted)
      const r2 = p * 5.5;
      const a2 = -t * 1.8;
      drawPixelRect(cx + Math.cos(a2) * r2 - p / 2, cy + Math.sin(a2) * (r2 * 0.4) - p / 2, p, p, color);

      // Orbital Rings (Pixel dotted)
      for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 4) {
        drawPixelRect(cx + Math.cos(angle) * r1, cy + Math.sin(angle) * r1, p * 0.5, p * 0.5, `${color}44`);
      }
    };

    // Draw Pixel Math Symbol (Integral & Sigma)
    const drawPixelMath = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      // Pixelated Integral Symbol
      const pixels = [
        [2, 0], [3, 0], [1, 1],
        [1, 2], [1, 3], [1, 4], [1, 5],
        [1, 6], [0, 7], [0, 8]
      ];
      pixels.forEach(([dx, dy]) => {
        drawPixelRect(cx + dx * p, cy + dy * p - p * 4, p, p, color);
      });

      // Floating dx/dt text pixel dots
      const wave = Math.sin(t * 2) * p * 2;
      drawPixelRect(cx + p * 5, cy + wave, p * 1.5, p * 1.5, "#ffffff");
      drawPixelRect(cx + p * 7, cy - wave, p * 1.5, p * 1.5, color);
    };

    // Draw Pixel Binary & Code Matrix
    const drawPixelCode = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      // Draw pixelated curly brackets { }
      const bracketLeft = [
        [1, 0], [0, 1], [0, 2], [0, 3], [-1, 4], [0, 5], [0, 6], [0, 7], [1, 8]
      ];
      bracketLeft.forEach(([dx, dy]) => {
        drawPixelRect(cx + dx * p - p * 3, cy + dy * p - p * 4, p, p, color);
      });

      const bracketRight = [
        [-1, 0], [0, 1], [0, 2], [0, 3], [1, 4], [0, 5], [0, 6], [0, 7], [-1, 8]
      ];
      bracketRight.forEach(([dx, dy]) => {
        drawPixelRect(cx + dx * p + p * 3, cy + dy * p - p * 4, p, p, color);
      });

      // Binary bit 1 / 0 inside
      const bit = Math.floor(t * 3) % 2;
      ctx.fillStyle = "#ffffff";
      if (bit === 1) {
        drawPixelRect(cx - p * 0.5, cy - p * 2, p, p * 4, "#ffffff");
      } else {
        drawPixelRect(cx - p, cy - p * 2, p * 2, p, "#ffffff");
        drawPixelRect(cx - p, cy + p, p * 2, p, "#ffffff");
        drawPixelRect(cx - p, cy - p, p, p * 2, "#ffffff");
        drawPixelRect(cx + p * 0.5, cy - p, p, p * 2, "#ffffff");
      }
    };

    // Draw Pixel Neural Node Network
    const drawPixelNeural = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      const nodes = [
        { x: -p * 3, y: -p * 2 },
        { x: p * 3, y: -p * 3 },
        { x: 0, y: p * 2 },
        { x: -p * 4, y: p * 3 },
        { x: p * 4, y: p * 2 },
      ];

      // Draw Connection lines
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

      // Draw Nodes
      nodes.forEach((n, i) => {
        const pulse = (Math.sin(t * 4 + i) + 1) * 0.5;
        const nSize = p * (1.2 + pulse * 0.6);
        drawPixelRect(cx + n.x - nSize / 2, cy + n.y - nSize / 2, nSize, nSize, color);
      });
    };

    // Draw Pixel Beaker / Flask
    const drawPixelBeaker = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      // Rim
      drawPixelRect(cx - p * 2, cy - p * 4, p * 4, p, color);
      // Neck
      drawPixelRect(cx - p * 1, cy - p * 3, p * 2, p * 2, color);
      // Base
      drawPixelRect(cx - p * 3, cy - p * 1, p * 6, p * 5, color);

      // Bubbles rising
      const b1 = (cy + p * 3 - (t * 20) % (p * 7));
      const b2 = (cy + p * 2 - ((t + 1) * 15) % (p * 6));
      drawPixelRect(cx - p * 1, b1, p, p, "#ffffff");
      drawPixelRect(cx + p * 1, b2, p, p, color);
    };

    // Draw Pixel Historical Pillar / Scroll
    const drawPixelHistory = (cx: number, cy: number, color: string, t: number) => {
      const p = pixelSize;
      // Pillar top
      drawPixelRect(cx - p * 3, cy - p * 4, p * 6, p, color);
      drawPixelRect(cx - p * 2, cy - p * 3, p * 4, p, color);
      // Columns
      drawPixelRect(cx - p * 2, cy - p * 2, p, p * 6, color);
      drawPixelRect(cx, cy - p * 2, p, p * 6, color);
      drawPixelRect(cx + p * 2, cy - p * 2, p, p * 6, color);
      // Base
      drawPixelRect(cx - p * 3, cy + p * 4, p * 6, p, color);
    };

    const draw = () => {
      if (!inView) return;
      time += 0.016;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Subtle Retro Pixel Grid Background
      const gridStep = pixelSize * 4;
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      ctx.fillStyle = "rgba(255, 255, 255, 0.02)";
      for (let x = 0; x < width; x += gridStep) {
        for (let y = 0; y < height; y += gridStep) {
          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const factor = 1 - dist / 180;
            ctx.fillStyle = `rgba(0, 242, 255, ${0.03 + factor * 0.15})`;
            ctx.fillRect(x, y, pixelSize * 0.8, pixelSize * 0.8);
            ctx.fillStyle = "rgba(255, 255, 255, 0.02)";
          } else if ((x + y) % (gridStep * 3) === 0) {
            ctx.fillRect(x, y, pixelSize * 0.5, pixelSize * 0.5);
          }
        }
      }

      // 2. Draw Floating Course Elements
      elements.forEach((el) => {
        // Move element
        el.x += el.vx;
        el.y += el.vy;
        el.rotation += el.rotSpeed;

        // Wrap around boundaries
        if (el.x < -60) el.x = width + 60;
        if (el.x > width + 60) el.x = -60;
        if (el.y < -60) el.y = height + 60;
        if (el.y > height + 60) el.y = -60;

        // Calculate proximity to mouse cursor for interactive repulsion/glow
        const dx = el.x - mouseX;
        const dy = el.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let currentOpacity = opacity * 0.45;

        if (dist < 220) {
          const factor = 1 - dist / 220;
          currentOpacity = opacity * (0.45 + factor * 0.5);
          el.x += (dx / dist) * factor * 1.5;
          el.y += (dy / dist) * factor * 1.5;
        }

        ctx.save();
        ctx.globalAlpha = currentOpacity;

        switch (el.type) {
          case "dna":
            drawPixelDNA(el.x, el.y, el.color, time);
            break;
          case "graph":
            drawPixelGraph(el.x, el.y, el.color, time);
            break;
          case "atom":
            drawPixelAtom(el.x, el.y, el.color, time);
            break;
          case "math":
            drawPixelMath(el.x, el.y, el.color, time);
            break;
          case "code":
            drawPixelCode(el.x, el.y, el.color, time);
            break;
          case "neural":
            drawPixelNeural(el.x, el.y, el.color, time);
            break;
          case "beaker":
            drawPixelBeaker(el.x, el.y, el.color, time);
            break;
          case "history":
            drawPixelHistory(el.x, el.y, el.color, time);
            break;
        }

        ctx.restore();
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
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
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

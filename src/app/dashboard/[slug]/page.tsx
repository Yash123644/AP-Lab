"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  ChevronDown, 
  Play, 
  FileText, 
  CheckCircle2, 
  ArrowLeft,
  Trophy,
  Brain,
  AlertCircle,
  Activity,
  XCircle,
  RotateCcw
} from "lucide-react";
import Link from "next/link";
import { courseRegistry, CourseUnit, CourseTopic } from "@/lib/courses/course-registry";
import { cn } from "@/lib/utils";
import { useProgress } from "@/context/ProgressContext";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import confetti from "canvas-confetti";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import { MockExam } from "@/components/MockExam";
import { AIAssistantDrawer } from "@/components/AIAssistantDrawer";
import { SelectionAIPopover } from "@/components/SelectionAIPopover";
import { VocabularyPopover } from "@/components/VocabularyPopover";
import { DiagramContainer } from "@/components/DiagramContainer";

function MagneticButton({ children, className, onClick, disabled, accentColor }: { children: React.ReactNode, className?: string, onClick?: () => void, disabled?: boolean, accentColor: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || disabled) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      disabled={disabled}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative group focus:outline-none focus:ring-2",
        className
      )}
      style={{
        // @ts-ignore
        "--tw-ring-color": `${accentColor}80`
      }}
    >
      <div 
        className="absolute inset-0 rounded-2xl blur-xl transition-all duration-300 pointer-events-none" 
        style={{
          backgroundColor: `${accentColor}10`
        }}
      />
      {children}
    </motion.button>
  );
}

function getUnitWatermark(unitId: number) {
  switch (unitId) {
    case 1:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <circle cx="12" cy="12" r="3" />
          <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(-30 12 12)" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <circle cx="6" cy="12" r="2.5" />
          <circle cx="18" cy="12" r="2.5" />
          <circle cx="12" cy="6" r="3.5" />
          <line x1="7.7" y1="10.3" x2="10.3" y2="7.7" />
          <line x1="16.3" y1="10.3" x2="13.7" y2="7.7" />
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <circle cx="5" cy="8" r="2" />
          <circle cx="19" cy="8" r="2" />
          <circle cx="12" cy="16" r="2" />
          <line x1="7" y1="9" x2="10" y2="14" strokeDasharray="2 2" />
          <line x1="17" y1="9" x2="14" y2="14" strokeDasharray="2 2" />
        </svg>
      );
    case 4:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M6 3v3m12-3v3M6 21h12a2 2 0 002-2V8H4v11a2 2 0 002 2z" />
          <circle cx="9" cy="12" r="1" />
          <circle cx="15" cy="15" r="1" />
          <circle cx="12" cy="18" r="1" />
        </svg>
      );
    case 5:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <circle cx="12" cy="13" r="8" />
          <path d="M12 5V2m-3 0h6m-3 7v4l3 2" />
        </svg>
      );
    case 6:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3.5-.72 1.5-1.5 2-1.5 3.5A2.5 2.5 0 0011 14.5zM12 2c0 0 7 4 7 11a7 7 0 11-14 0c0-7 7-11 7-11z" />
        </svg>
      );
    case 7:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M4 9h16M20 9l-4-4M4 15h16M4 15l4 4" />
        </svg>
      );
    case 8:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM7 7h10M7 12h10M7 17h5" />
        </svg>
      );
    case 9:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <rect x="6" y="7" width="12" height="12" rx="2" />
          <path d="M9 7V5h2v2M13 7V5h2v2M9 13h6" />
        </svg>
      );
    default:
      return null;
  }
}

function getInsightLabel(slug: string) {
  if (slug === "ap-biology") return "Biological Insight";
  if (slug === "ap-chemistry") return "Chemical Insight";
  if (slug.includes("physics")) return "Physical Insight";
  if (slug === "ap-ush") return "Historical Insight";
  if (slug === "ap-psych") return "Psychological Insight";
  if (slug === "ap-eng-lang") return "Rhetorical Insight";
  if (slug === "ap-calc-bc") return "Mathematical Insight";
  if (slug === "ap-stats") return "Statistical Insight";
  if (slug === "ap-csa") return "Computational Insight";
  return "Academic Insight";
}

const getCourseNameFromSlug = (slug: string) => {
  const map: Record<string, string> = {
    "ap-physics-1": "AP Physics 1",
    "ap-world-history": "AP World History",
    "ap-macroeconomics": "AP Macroeconomics",
    "ap-environmental": "AP Environmental",
    "ap-physics-c": "AP Physics C",
    "ap-calc-bc": "AP Calculus BC",
    "ap-stats": "AP Statistics",
    "ap-csa": "AP Computer Science A",
    "ap-ush": "AP US History",
    "ap-psych": "AP Psychology",
    "ap-eng-lang": "AP English Language",
  };
  return map[slug] || slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
};

interface RadarBlip {
  distance: number;
  angle: number;
  speed: number;
  intensity: number;
}

function RadarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Hardcode small canvas resolution for authentic pixelated rendering
    canvas.width = 256;
    canvas.height = 256;

    const cx = 128;
    const cy = 128;
    let sweepAngle = 0;

    // Setup blips with randomized starting states
    const blips: RadarBlip[] = [
      { distance: 115, angle: 0.6, speed: 0.15, intensity: 0 },
      { distance: 90, angle: 2.2, speed: 0.11, intensity: 0 },
      { distance: 65, angle: 3.7, speed: 0.13, intensity: 0 },
      { distance: 105, angle: 5.0, speed: 0.17, intensity: 0 },
      { distance: 45, angle: 1.1, speed: 0.09, intensity: 0 },
    ];

    let animationId: number;

    const render = () => {
      // Radial fade to create trails
      ctx.fillStyle = "rgba(1, 12, 1, 0.07)";
      ctx.fillRect(0, 0, 256, 256);

      // 1. Draw radar concentric circle grids (pixelated stroke)
      ctx.strokeStyle = "rgba(0, 180, 0, 0.16)";
      ctx.lineWidth = 1;

      // Vertical & horizontal lines through center
      ctx.beginPath();
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, 256);
      ctx.moveTo(0, cy);
      ctx.lineTo(256, cy);
      ctx.stroke();

      // Concentric circles
      [35, 72, 108].forEach((radius) => {
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.stroke();
      });

      // 2. Update and render blips (incoming dots)
      blips.forEach((blip) => {
        // Move closer to center over time
        blip.distance -= blip.speed;
        
        // Loop seamlessly: reset when blips reach the center
        if (blip.distance < 6) {
          blip.distance = 115 + Math.random() * 10;
          blip.angle = Math.random() * Math.PI * 2;
          blip.speed = Math.random() * 0.10 + 0.12;
          blip.intensity = 0;
        }

        // Detect sweep line crossing the blip's angle to trigger ping
        const diff = Math.abs((sweepAngle % (Math.PI * 2)) - (blip.angle % (Math.PI * 2)));
        if (diff < 0.04) {
          blip.intensity = 1.0;
        }

        // Fade blip intensity
        blip.intensity *= 0.96;

        if (blip.intensity > 0.02) {
          const bx = cx + Math.cos(blip.angle) * blip.distance;
          const by = cy + Math.sin(blip.angle) * blip.distance;

          // Inner pixel core
          ctx.fillStyle = `rgba(0, 255, 0, ${blip.intensity})`;
          ctx.fillRect(Math.round(bx - 1.5), Math.round(by - 1.5), 3, 3);
          
          // Outer glow ring
          ctx.fillStyle = `rgba(0, 255, 0, ${blip.intensity * 0.28})`;
          ctx.fillRect(Math.round(bx - 2.5), Math.round(by - 2.5), 5, 5);
        }
      });

      // 3. Draw radar sweep line
      sweepAngle += 0.022;
      if (sweepAngle > Math.PI * 2) {
        sweepAngle -= Math.PI * 2;
      }

      // Draw phosphor sweep sector (trailing line sweeps)
      const trails = 20;
      for (let i = 0; i < trails; i++) {
        const trailAngle = sweepAngle - i * 0.015;
        const alpha = ((trails - i) / trails) * 0.22;
        ctx.strokeStyle = `rgba(0, 255, 0, ${alpha})`;
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(
          cx + Math.cos(trailAngle) * 120,
          cy + Math.sin(trailAngle) * 120
        );
        ctx.stroke();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-[0.24]"
      style={{ imageRendering: "pixelated" }}
    />
  );
}

function ForestBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 256;
    canvas.height = 256;

    // Detailed large trees for 3 parallax layers (height, speed, colors, offset, spacing)
    const layers = [
      {
        speed: 0.15,
        height: 105,
        foliage: "#0e5c38",
        foliageHighlight: "#1b9d62",
        foliageShadow: "#073c24",
        trunk: "#2c1f17",
        offset: 0,
        spacing: 90
      },
      {
        speed: 0.08,
        height: 80,
        foliage: "#083822",
        foliageHighlight: "#0e5b38",
        foliageShadow: "#052014",
        trunk: "#1b140f",
        offset: 60,
        spacing: 75
      },
      {
        speed: 0.03,
        height: 60,
        foliage: "#051b11",
        foliageHighlight: "#082c1b",
        foliageShadow: "#03110b",
        trunk: "#0e0b09",
        offset: 130,
        spacing: 60
      }
    ];

    const leaves = Array.from({ length: 15 }, () => ({
      x: Math.random() * 256,
      y: Math.random() * 256,
      speedY: 0.35 + Math.random() * 0.4,
      speedX: -0.15 + Math.random() * 0.3
    }));

    let animId: number;

    const drawPixelTree = (
      rx: number,
      ry: number,
      height: number,
      foliageColor: string,
      shadowColor: string,
      highlightColor: string,
      trunkColor: string
    ) => {
      const trunkW = Math.max(3, Math.round(height * 0.08));
      const trunkH = Math.round(height * 0.35);
      const foliageH = height - trunkH;
      
      // 1. Draw trunk with bark texture (vertical stripes)
      ctx.fillStyle = trunkColor;
      ctx.fillRect(rx - Math.floor(trunkW / 2), ry - trunkH, trunkW, trunkH);
      
      // Left highlight stripe
      ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
      ctx.fillRect(rx - Math.floor(trunkW / 2), ry - trunkH, Math.max(1, Math.floor(trunkW / 3)), trunkH);
      
      // Right shadow stripe
      ctx.fillStyle = "rgba(0, 0, 0, 0.12)";
      ctx.fillRect(rx + Math.floor(trunkW / 2) - Math.max(1, Math.floor(trunkW / 3)), ry - trunkH, Math.max(1, Math.floor(trunkW / 3)), trunkH);

      // 2. Draw Pine Foliage (layered triangles with jagged edges)
      // 3 overlapping tiers.
      const tiers = 3;
      const tierH = foliageH / tiers;
      
      for (let t = 0; t < tiers; t++) {
        const tierBottomY = ry - trunkH - t * (tierH * 0.75);
        const tierTopY = tierBottomY - tierH;
        
        // Width of this tier
        const maxW = height * 0.45 * (1 - t * 0.28);
        
        // Draw jagged foliage for this tier row-by-row
        const step = 2; // pixel block size
        for (let py = Math.round(tierTopY); py <= Math.round(tierBottomY); py += step) {
          const progress = (py - tierTopY) / (tierBottomY - tierTopY);
          const rowW = maxW * (0.2 + progress * 0.8);
          
          const rxStart = rx - rowW / 2;
          const rxEnd = rx + rowW / 2;
          
          // Draw base foliage row
          ctx.fillStyle = foliageColor;
          ctx.fillRect(Math.round(rxStart), py, Math.round(rowW), step);
          
          // Add jagged branch tips at the edges
          if (py % 4 === 0) {
            ctx.fillRect(Math.round(rxStart - 2), py, 2, step);
            ctx.fillRect(Math.round(rxEnd), py, 2, step);
          }
          
          // Highlight on the top-left edge
          ctx.fillStyle = highlightColor;
          ctx.fillRect(Math.round(rxStart), py, Math.max(1, Math.round(rowW * 0.22)), step);
          
          // Shadow on the bottom-right edge
          ctx.fillStyle = shadowColor;
          ctx.fillRect(Math.round(rxEnd - Math.max(1, Math.round(rowW * 0.35))), py, Math.max(1, Math.round(rowW * 0.35)), step);
        }
      }
    };

    const render = () => {
      // Clear the canvas completely (no-smear)
      ctx.fillStyle = "#010801";
      ctx.fillRect(0, 0, 256, 256);

      // Draw starry sky
      ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
      for (let i = 0; i < 15; i++) {
        const sx = (Math.sin(i * 12345) * 0.5 + 0.5) * 256;
        const sy = (Math.cos(i * 54321) * 0.5 + 0.5) * 120;
        ctx.fillRect(Math.round(sx), Math.round(sy), 1, 1);
      }

      // Draw layers of detailed trees
      layers.forEach((layer) => {
        layer.offset -= layer.speed;
        if (layer.offset < -256) layer.offset += 256;

        for (let x = layer.offset - 40; x < 256 + 80; x += layer.spacing) {
          const rx = Math.round(x);
          const ry = 220; // Ground line
          
          drawPixelTree(
            rx,
            ry,
            layer.height,
            layer.foliage,
            layer.foliageShadow,
            layer.foliageHighlight,
            layer.trunk
          );
        }
      });

      // Draw ground
      ctx.fillStyle = "#05180f";
      ctx.fillRect(0, 220, 256, 36);
      ctx.fillStyle = "#083822";
      ctx.fillRect(0, 220, 256, 4);
      // Add pixelated grass details on ground
      ctx.fillStyle = "#1b9d62";
      for (let gx = 0; gx < 256; gx += 8) {
        ctx.fillRect(gx + (Math.floor(gx * 0.7) % 4), 218, 2, 2);
      }

      // Leaves falling
      ctx.fillStyle = "#34d399";
      leaves.forEach((l) => {
        l.y += l.speedY;
        l.x += l.speedX;
        if (l.y > 256) {
          l.y = -5;
          l.x = Math.random() * 256;
        }
        ctx.fillRect(Math.round(l.x), Math.round(l.y), 2, 2);
      });

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-[0.24]"
      style={{ imageRendering: "pixelated" }}
    />
  );
}

function PhysicsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 256;
    canvas.height = 256;

    let time = 0;
    let animId: number;

    const render = () => {
      ctx.fillStyle = "rgba(1, 1, 10, 0.12)";
      ctx.fillRect(0, 0, 256, 256);

      // Draw gravity grid warping
      ctx.strokeStyle = "rgba(129, 140, 248, 0.08)";
      ctx.lineWidth = 1;
      const step = 32;
      for (let x = 0; x <= 256; x += step) {
        ctx.beginPath();
        for (let y = 0; y <= 256; y += 4) {
          const dx = x - 128;
          const dy = y - 128;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const warp = Math.min(16, 260 / (dist + 16));
          const wx = x - (dx / (dist + 0.1)) * warp;
          const wy = y - (dy / (dist + 0.1)) * warp;
          if (y === 0) ctx.moveTo(wx, wy);
          else ctx.lineTo(wx, wy);
        }
        ctx.stroke();
      }
      for (let y = 0; y <= 256; y += step) {
        ctx.beginPath();
        for (let x = 0; x <= 256; x += 4) {
          const dx = x - 128;
          const dy = y - 128;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const warp = Math.min(16, 260 / (dist + 16));
          const wx = x - (dx / (dist + 0.1)) * warp;
          const wy = y - (dy / (dist + 0.1)) * warp;
          if (x === 0) ctx.moveTo(wx, wy);
          else ctx.lineTo(wx, wy);
        }
        ctx.stroke();
      }

      // Orbiting particles
      time += 0.015;
      const orbits = [
        { rx: 65, ry: 25, speed: 1.2, color: "rgba(129, 140, 248, 0.7)", rot: 0.4 },
        { rx: 95, ry: 35, speed: 0.8, color: "rgba(167, 139, 250, 0.7)", rot: -0.6 }
      ];

      orbits.forEach((orb) => {
        const theta = time * orb.speed;
        const ox = Math.cos(theta) * orb.rx;
        const oy = Math.sin(theta) * orb.ry;

        // Apply rotation to ellipse orbit path
        const rx = 128 + ox * Math.cos(orb.rot) - oy * Math.sin(orb.rot);
        const ry = 128 + ox * Math.sin(orb.rot) + oy * Math.cos(orb.rot);

        // Draw orbital trail path
        ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
        ctx.beginPath();
        ctx.ellipse(128, 128, orb.rx, orb.ry, orb.rot, 0, Math.PI * 2);
        ctx.stroke();

        // Draw particle core
        ctx.fillStyle = orb.color;
        ctx.fillRect(Math.round(rx - 1.5), Math.round(ry - 1.5), 3, 3);
      });

      // Nuclear core
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.fillRect(126, 126, 4, 4);

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-[0.24]"
      style={{ imageRendering: "pixelated" }}
    />
  );
}

function HistoryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Highly detailed pixelated map of the world (80 columns x 19 rows)
    const mapData = [
      "                       ...........                                              ",
      "                  .  .............                                       ....   ",
      "  .  ....     ...... .............                 .    ..        ............. ",
      " .......    ........  ...........                 ..   ...       .............. ",
      ".........  ..........   .......         .       ....  ....      ................",
      ".........  ..........    .....                 ..........      ................ ",
      " ........  .........      .                   ..........     .................. ",
      "  ......   .......                           ... ........     ..............     ",
      "   ....    .....                            ...........     ..............      ",
      "    .     ......                            ..........       ...........        ",
      "          .......                           .........         .........         ",
      "         .........                           .......          .......   .       ",
      "         .........                           ......            ....      .      ",
      "          .......                            .....             ..               ",
      "          ......                             ....               .      ......   ",
      "           ....                               ..                      ........  ",
      "           ...                                 .                      ........  ",
      "            .                                                          ......   ",
      "                                                                          .     "
    ];

    canvas.width = 256;
    canvas.height = 256;

    let scrollX = 0;
    let scanY = 0;
    let animId: number;

    const render = () => {
      // Historical dark brown parchment/satellite radar bg
      ctx.fillStyle = "rgba(12, 6, 2, 0.14)";
      ctx.fillRect(0, 0, 256, 256);

      // Draw grid lines
      ctx.strokeStyle = "rgba(245, 158, 11, 0.02)";
      ctx.lineWidth = 1;
      for (let x = 0; x <= 256; x += 16) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 256);
        ctx.stroke();
      }
      for (let y = 0; y <= 256; y += 16) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(256, y);
        ctx.stroke();
      }

      // Scroll world map
      scrollX += 0.35;
      if (scrollX >= 256) scrollX -= 256;

      const scaleX = 3.2; // 256 width / 80 columns
      const scaleY = 3.8;
      const startY = 85;

      // Draw pixel map
      ctx.fillStyle = "rgba(245, 158, 11, 0.16)";
      for (let r = 0; r < mapData.length; r++) {
        const row = mapData[r];
        for (let c = 0; c < row.length; c++) {
          if (row[c] === ".") {
            const x1 = Math.round((c * scaleX + scrollX) % 256);
            const y1 = Math.round(startY + r * scaleY);
            ctx.fillRect(x1, y1, 2.5, 2.5);
          }
        }
      }

      // Blinking research indicators at historical centers
      const pulse = Math.floor(Date.now() / 350) % 2 === 0;
      if (pulse) {
        ctx.fillStyle = "rgba(239, 68, 68, 0.85)";
        const dots = [
          { cx: 14, cy: 5 },  // North America (East Coast)
          { cx: 48, cy: 4 },  // Western Europe
          { cx: 48, cy: 7 },  // Egypt / Middle East
          { cx: 66, cy: 5 }   // East Asia
        ];
        dots.forEach((dot) => {
          const dx = Math.round((dot.cx * scaleX + scrollX) % 256);
          const dy = Math.round(startY + dot.cy * scaleY);
          ctx.fillRect(dx - 1, dy - 1, 3, 3);
        });
      }

      // Scanning radar line
      scanY += 1.25;
      if (scanY > 256) scanY = 0;
      ctx.strokeStyle = "rgba(245, 158, 11, 0.08)";
      ctx.beginPath();
      ctx.moveTo(0, Math.round(scanY));
      ctx.lineTo(256, Math.round(scanY));
      ctx.stroke();

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-[0.24]"
      style={{ imageRendering: "pixelated" }}
    />
  );
}

function EconomicsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 256;
    canvas.height = 256;

    // Set up initial candles
    const candles = Array.from({ length: 16 }, (_, i) => {
      const open = 110 + Math.sin(i * 0.5) * 30 + Math.random() * 10;
      const close = open + (Math.random() - 0.5) * 20;
      return {
        x: i * 18 + 10,
        open,
        close,
        high: Math.max(open, close) + Math.random() * 8,
        low: Math.min(open, close) - Math.random() * 8
      };
    });

    let animId: number;

    const render = () => {
      ctx.fillStyle = "rgba(1, 8, 1, 0.12)";
      ctx.fillRect(0, 0, 256, 256);

      // Draw grid lines
      ctx.strokeStyle = "rgba(16, 185, 129, 0.03)";
      ctx.lineWidth = 1;
      for (let x = 0; x <= 256; x += 32) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 256);
        ctx.stroke();
      }
      for (let y = 0; y <= 256; y += 32) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(256, y);
        ctx.stroke();
      }

      // Shift candles left
      candles.forEach((c) => {
        c.x -= 0.35;
      });

      // Wrap-around candles
      if (candles[0].x < -15) {
        candles.shift();
        const last = candles[candles.length - 1];
        const lastOpen = last.close;
        const nextClose = lastOpen + (Math.random() - 0.48) * 24; // slight upward trend
        const nextHigh = Math.max(lastOpen, nextClose) + Math.random() * 10;
        const nextLow = Math.min(lastOpen, nextClose) - Math.random() * 10;
        
        candles.push({
          x: last.x + 18,
          open: lastOpen,
          close: nextClose,
          high: Math.min(230, Math.max(20, nextHigh)),
          low: Math.min(230, Math.max(20, nextLow))
        });
      }

      // Draw candles
      candles.forEach((c) => {
        const isUp = c.close >= c.open;
        ctx.strokeStyle = isUp ? "rgba(16, 185, 129, 0.28)" : "rgba(239, 68, 68, 0.28)";
        ctx.fillStyle = isUp ? "rgba(16, 185, 129, 0.25)" : "rgba(239, 68, 68, 0.25)";
        ctx.lineWidth = 1.5;

        // Wick
        ctx.beginPath();
        ctx.moveTo(Math.round(c.x), Math.round(c.low));
        ctx.lineTo(Math.round(c.x), Math.round(c.high));
        ctx.stroke();

        // Body
        const top = Math.min(c.open, c.close);
        const bottom = Math.max(c.open, c.close);
        const h = Math.max(2, bottom - top);
        ctx.fillRect(Math.round(c.x - 4), Math.round(top), 8, Math.round(h));
      });

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-[0.24]"
      style={{ imageRendering: "pixelated" }}
    />
  );
}

function UpcomingCourseFallback({ slug }: { slug: string }) {
  const courseName = getCourseNameFromSlug(slug);

  let Background = RadarBackground;
  let themeBg = "bg-[#010601]";
  let ambientColor = "bg-green-500/[0.03]";

  if (slug === "ap-environmental") {
    Background = ForestBackground;
    themeBg = "bg-[#010801]";
    ambientColor = "bg-emerald-500/[0.04]";
  } else if (slug === "ap-physics-1" || slug === "ap-physics-c") {
    Background = PhysicsBackground;
    themeBg = "bg-[#01020d]";
    ambientColor = "bg-indigo-500/[0.04]";
  } else if (slug === "ap-world-history") {
    Background = HistoryBackground;
    themeBg = "bg-[#0a0501]";
    ambientColor = "bg-amber-500/[0.03]";
  } else if (slug === "ap-macroeconomics") {
    Background = EconomicsBackground;
    themeBg = "bg-[#010601]";
    ambientColor = "bg-green-500/[0.03]";
  }

  return (
    <div className={`min-h-screen ${themeBg} text-white flex flex-col font-sans relative overflow-hidden select-none`}>
      {/* Dynamic themed pixelated background */}
      <Background />

      {/* Dynamic ambient lighting */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] ${ambientColor} blur-[160px] rounded-full pointer-events-none`} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 z-10 text-center">
        <div className="flex flex-col items-center max-w-2xl bg-black/40 backdrop-blur-md border border-white/10 rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Animated pulsing activity radar icon */}
          <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,255,255,0.02)]">
            <Activity className="w-7 h-7 text-white/80 animate-pulse" />
          </div>

          <span className="text-[10px] font-manrope font-black text-white/40 uppercase tracking-[0.25em] mb-4">
            {courseName}
          </span>

          <h1 className="font-instrument text-4xl md:text-5xl text-white font-medium tracking-tight mb-4 leading-tight">
            We are working on creating this course
          </h1>

          <p className="font-inter text-white/50 text-sm md:text-base leading-relaxed max-w-md mb-10">
            We are actively creating the curriculum for this course.
          </p>

          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-full bg-white text-black font-manrope font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-[0_8px_30px_rgba(255,255,255,0.15)]"
            >
              Go Back to Home Page
            </motion.button>
          </Link>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="h-16 flex items-center justify-center px-8 z-10">
        <span className="text-xs text-white/20 font-mono">
          © {new Date().getFullYear()} AP Lab. All rights reserved.
        </span>
      </footer>
    </div>
  );
}

export default function APDynamicCoursePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const course = courseRegistry[slug];
  
  const { progress, completeTopic } = useProgress();
  
  const [activeUnit, setActiveUnit] = useState<number>(1);
  const [activeTopic, setActiveTopic] = useState<CourseTopic | null>(null);
  const [activeTab, setActiveTab] = useState<"video" | "article" | "practice">("video");
  const [expandedUnits, setExpandedUnits] = useState<number[]>([1]);
  const [showExam, setShowExam] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [assistantQuery, setAssistantQuery] = useState("");
  const [topicInteracted, setTopicInteracted] = useState(false);
  const [tabInteracted, setTabInteracted] = useState(false);

  // Safely initialize active topic
  useEffect(() => {
    if (course && course.units.length > 0 && course.units[0].topics.length > 0) {
      setActiveTopic(course.units[0].topics[0]);
      setActiveUnit(course.units[0].id);
    }
  }, [course]);

  if (!course) {
    return <UpcomingCourseFallback slug={slug} />;
  }

  const toggleUnit = (id: number) => {
    setExpandedUnits(prev => 
      prev.includes(id) ? prev.filter(u => u !== id) : [...prev, id]
    );
  };

  const masteryKey = `${course.masteryPrefix}-${activeTopic?.id}`;
  const masteryScore = progress.masteryScores[masteryKey] || 0;

  return (
    <div 
      className="min-h-screen bg-deep-navy flex flex-col relative z-0 selection:bg-white selection:text-black"
      style={{
        // @ts-ignore
        "--theme-accent": course.accentColor,
        "--theme-accent-border": `${course.accentColor}4d`
      }}
    >
      {/* Inject custom variables for page accent coloring */}
      <style>{`
        .subject-accent-text { color: ${course.accentColor}; }
        .subject-accent-bg { background-color: ${course.accentColor}; }
        .subject-accent-border { border-color: ${course.accentColor}33; }
        .subject-accent-border-hover:hover { border-color: ${course.accentColor}66; }
        .subject-accent-bg-glow { background-color: ${course.accentColor}15; }
        .subject-accent-selection::selection {
          background-color: ${course.accentColor};
          color: #000000;
        }
      `}</style>

      {showExam && (
        <MockExam 
          units={course.units} 
          subjectName={course.name} 
          accentColor={course.accentColor}
          onClose={() => setShowExam(false)} 
        />
      )}
      
      <AIAssistantDrawer 
        course={course.slug} 
        isOpen={isAssistantOpen} 
        onClose={() => setIsAssistantOpen(false)} 
        initialQuery={assistantQuery} 
      />
      
      <SelectionAIPopover onAsk={(text) => {
        setAssistantQuery(text);
        setIsAssistantOpen(true);
      }} />

      {/* Floating AP Lab Logo AI Toggle */}
      <div className="fixed bottom-8 right-8 z-[80]">
        <button
          onClick={() => setIsAssistantOpen(true)}
          className="w-16 h-16 rounded-full flex items-center justify-center liquid-glass border border-white/20 shadow-[0_10px_40px_rgba(255,255,255,0.15)] hover:scale-105 transition-all group"
          style={{
            boxShadow: `0 10px 40px ${course.accentColor}33`
          }}
        >
          <Activity className="w-8 h-8 text-white group-hover:text-white transition-colors drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
        </button>
      </div>
      
      {/* Glow Background */}
      <div className="fixed top-0 left-0 right-0 h-screen pointer-events-none -z-10">
        <div 
          className="absolute top-[10%] left-[5%] w-[40%] h-[40%] blur-[120px] rounded-full opacity-60"
          style={{ backgroundColor: `${course.accentColor}10` }}
        />
        <div 
          className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] blur-[120px] rounded-full opacity-40"
          style={{ backgroundColor: `${course.accentColor}08` }}
        />
      </div>

      {/* Header */}
      <header className="h-16 border-b border-white/5 backdrop-blur-xl bg-black/20 flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/50 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="h-4 w-[1px] bg-white/10" />
          <h1 className="font-instrument text-xl text-white tracking-tight">
            {course.name} <span className="text-white/40 font-inter text-sm ml-2">Quantitative Mastery</span>
          </h1>
        </div>
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => setShowExam(true)}
            className="flex items-center space-x-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 text-white hover:bg-white/10 transition-all"
            style={{
              borderColor: `${course.accentColor}33`
            }}
          >
            <Trophy className="w-4 h-4 text-white/80" />
            <span className="text-xs font-manrope font-bold uppercase tracking-widest">Mock Exam</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className="w-80 border-r border-white/5 bg-black/10 flex flex-col hidden lg:flex">
          <div className="flex-1 overflow-y-auto scrollbar-hide p-4 space-y-2">
            {course.units.map((unit) => {
              const isUnitCompleted = unit.topics.length > 0 && unit.topics.every(topic => 
                progress.completedTopics.includes(`${course.masteryPrefix}-${topic.id}`)
              );

              return (
                <div key={unit.id} className="space-y-1">
                  <button
                    onClick={() => toggleUnit(unit.id)}
                    className={cn(
                      "w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 relative overflow-hidden group",
                      activeUnit === unit.id ? "bg-white/5" : "hover:bg-white/5"
                    )}
                  >
                    <div className="flex flex-col items-start text-left relative z-10">
                      <span className="text-[10px] font-manrope font-black uppercase tracking-widest mb-1 subject-accent-text flex items-center gap-1.5">
                        <span>Unit {unit.id} • {unit.masteryWeight}</span>
                        {isUnitCompleted && (
                          <span className="text-[8px] px-1.5 py-0.5 rounded bg-white/10 border border-white/15 text-white/90 font-black tracking-widest uppercase">
                            ✓ Done
                          </span>
                        )}
                      </span>
                      <span className={cn(
                        "text-sm font-medium leading-tight",
                        activeUnit === unit.id ? "text-white" : "text-white/60"
                      )}>
                        {unit.title}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 relative z-10">
                      {expandedUnits.includes(unit.id) ? (
                        <ChevronDown className="w-4 h-4 text-white/40" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-white/40" />
                      )}
                    </div>

                    {/* Unit Watermark Background decoration */}
                    <div 
                      className="absolute right-3 -bottom-1.5 w-14 h-14 opacity-[0.05] group-hover:opacity-[0.10] transition-opacity duration-300 pointer-events-none select-none z-0"
                      style={{ color: course.accentColor }}
                    >
                      {getUnitWatermark(unit.id)}
                    </div>
                  </button>

                <AnimatePresence>
                  {expandedUnits.includes(unit.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-3"
                    >
                      <div className="border-l border-white/5 ml-2 mt-1 space-y-1">
                        {unit.topics.map((topic) => (
                          <button
                            key={topic.id}
                            onClick={() => {
                              setActiveTopic(topic);
                              setActiveUnit(unit.id);
                              setTopicInteracted(true);
                            }}
                            className={cn(
                              "w-full text-left p-3 pl-6 text-xs transition-colors rounded-r-lg relative",
                              activeTopic?.id === topic.id 
                                ? "bg-white/5 text-white" 
                                : "text-white/40 hover:text-white/60 hover:bg-white/5"
                            )}
                            style={{
                              color: activeTopic?.id === topic.id ? course.accentColor : undefined
                            }}
                          >
                            {activeTopic?.id === topic.id && (
                              <motion.div 
                                layoutId={topicInteracted ? "activeTopicDynamic" : undefined}
                                className="absolute left-0 top-0 bottom-0 w-[2px] subject-accent-bg"
                              />
                            )}
                            <div className="flex items-center justify-between w-full">
                              <div className="flex items-center">
                                <span className="font-manrope font-bold mr-2">{topic.id}</span>
                                {topic.title}
                              </div>
                              {progress.completedTopics.includes(`${course.masteryPrefix}-${topic.id}`) && (
                                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 ml-2 subject-accent-text" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )})}
          </div>
          
          <div className="p-4 border-t border-white/5">
            <button 
              onClick={() => setShowExam(true)}
              className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              style={{
                borderColor: `${course.accentColor}33`
              }}
            >
              <div className="flex items-center space-x-3">
                <Trophy className="w-5 h-5 subject-accent-text" />
                <span className="text-sm font-bold text-white uppercase tracking-widest">Mock Exam</span>
              </div>
              <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white" />
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto scroll-smooth">
          {activeTopic ? (
            <div className="max-w-5xl mx-auto p-6 md:p-12 space-y-8">
              {/* Breadcrumbs */}
              <div className="flex items-center space-x-2 text-[10px] font-manrope font-black text-white/30 uppercase tracking-[0.2em]">
                <span>{course.name}</span>
                <ChevronRight className="w-3 h-3" />
                <span className="text-white/50">Unit {activeUnit}</span>
                <ChevronRight className="w-3 h-3" />
                <span className="subject-accent-text">Topic {activeTopic.id}</span>
              </div>

              {/* Title & Mastery */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                  <h2 className="font-instrument text-4xl md:text-5xl text-white tracking-tight">
                    {activeTopic.title}
                  </h2>
                  <p className="font-inter text-white/50 max-w-2xl">
                    {activeTopic.description}
                  </p>
                </div>
                <div className="w-full md:w-64 space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-manrope font-black text-white/40 uppercase tracking-widest">Topic Mastery</span>
                    <span className="text-lg font-instrument italic subject-accent-text">
                      {masteryScore}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${masteryScore}%` }}
                      className="h-full subject-accent-bg"
                      style={{
                        boxShadow: `0 0 15px ${course.accentColor}4d`
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Tab System */}
              <div className="flex items-center space-x-1 p-1 bg-black/20 backdrop-blur-md rounded-2xl w-fit border border-white/5">
                {[
                  { id: "video", label: "Video", icon: Play },
                  { id: "article", label: "Article", icon: FileText },
                  { id: "practice", label: "Practice", icon: Brain }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id as any);
                      setTabInteracted(true);
                    }}
                    className={cn(
                      "flex items-center space-x-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all relative",
                      activeTab === tab.id ? "text-white" : "text-white/40 hover:text-white/60"
                    )}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId={tabInteracted ? "activeTabDynamic" : undefined}
                        className="absolute inset-0 bg-white/5 border border-white/10 shadow-xl rounded-xl"
                      />
                    )}
                    <tab.icon className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                  {activeTab === "video" && (
                    <motion.div
                      key={activeTopic.id + "_video"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="relative aspect-video w-full liquid-glass-strong rounded-[32px] overflow-hidden border border-white/10"
                    >
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube-nocookie.com/embed/${activeTopic.youtubeId}?rel=0&modestbranding=1&autohide=1&showinfo=0`}
                        title={activeTopic.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </motion.div>
                  )}

                  {activeTab === "article" && (
                    <motion.div
                      key={activeTopic.id + "_article"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-8"
                    >
                      {activeTopic.article.split("##").map((section, idx) => {
                        if (!section.trim()) return null;
                        const isFirst = idx === 0;
                        const fullSection = isFirst ? section : `## ${section}`;
                        const isExample = fullSection.toLowerCase().includes("example problem") || fullSection.toLowerCase().includes("example");
                        
                        return (
                          <div 
                            key={idx}
                            className={cn(
                              "liquid-glass-strong rounded-[32px] p-8 md:p-12 border transition-all duration-500",
                              isExample 
                                ? "bg-white/[0.02] border-white/20 shadow-xl" 
                                : "bg-white/5 border-white/10"
                            )}
                            style={isExample ? {
                              borderColor: `${course.accentColor}40`,
                              boxShadow: `0 0 50px ${course.accentColor}10`
                            } : undefined}
                          >
                            <div className="prose prose-invert max-w-none prose-headings:font-instrument prose-headings:font-normal prose-h1:text-4xl prose-h2:text-2xl prose-p:font-inter prose-p:text-white/70 prose-p:leading-relaxed">
                              <ReactMarkdown 
                                remarkPlugins={[remarkMath]} 
                                rehypePlugins={[rehypeKatex, rehypeRaw]}
                                components={{
                                  // Custom vocab component handler in react-markdown
                                  // @ts-ignore
                                  vocab: ({ node, children, ...props }) => {
                                    const term = (props as any).term || "";
                                    const definition = (props as any).definition || "";
                                    return (
                                      <VocabularyPopover 
                                        term={term} 
                                        definition={definition}
                                        accentColor={course.accentColor}
                                        accentColorBorder={`${course.accentColor}4d`}
                                      >
                                        {children}
                                      </VocabularyPopover>
                                    );
                                  }
                                } as any}
                              >
                                {fullSection}
                              </ReactMarkdown>
                            </div>
                          </div>
                        );
                      })}
                      
                      {/* Visual Aids - Dynamic Rendering based on Topic Image */}
                      {activeTopic.image && (
                        <DiagramContainer 
                          title={activeTopic.title}
                          alt={activeTopic.title}
                          src={activeTopic.image}
                          caption={activeTopic.description}
                          accentColor={course.accentColor}
                          insightLabel={getInsightLabel(slug)}
                        />
                      )}
                    </motion.div>
                  )}

                  {activeTab === "practice" && (
                    <motion.div
                      key={activeTopic.id + "_practice"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      <PracticeSystem 
                        topicId={activeTopic.id}
                        masteryKey={masteryKey}
                        questions={activeTopic.questions} 
                        accentColor={course.accentColor}
                        onComplete={(score) => completeTopic(masteryKey, score)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center text-white/40">Loading workspace...</div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

interface PracticeProps {
  topicId: string;
  masteryKey: string;
  questions: any[];
  accentColor: string;
  onComplete: (score: number) => void;
}

function PracticeSystem({ topicId, masteryKey, questions, accentColor, onComplete }: PracticeProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [hasRewarded, setHasRewarded] = useState(false);

  useEffect(() => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setShowHint(false);
    setCorrectAnswers(0);
    setIsFinished(false);
    setHasRewarded(false);
  }, [topicId]);

  useEffect(() => {
    if (isFinished && !hasRewarded) {
      setHasRewarded(true);
      const percentage = Math.round((correctAnswers / questions.length) * 100);
      if (percentage >= 60) {
        onComplete(percentage);
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: [accentColor, "#ffffff", "#22c55e"]
        });
      }
    }
  }, [isFinished, hasRewarded, correctAnswers, questions.length, onComplete, accentColor]);

  if (!questions || questions.length === 0) {
    return (
      <div className="liquid-glass-strong rounded-[32px] p-12 text-center border border-white/10">
        <Brain className="w-12 h-12 text-white/20 mx-auto mb-4" />
        <p className="text-white/40">No practice questions available for this topic yet.</p>
      </div>
    );
  }

  const handleRetake = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setShowHint(false);
    setCorrectAnswers(0);
    setIsFinished(false);
    setHasRewarded(false);
  };

  if (isFinished) {
    const percentage = Math.round((correctAnswers / questions.length) * 100);
    const passed = percentage >= 60;

    return (
      <div className="liquid-glass-strong rounded-[32px] p-8 md:p-12 border border-white/10 space-y-8 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="space-y-4 max-w-md">
          {/* Animated/Glowing Icon */}
          <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-full border border-white/10 bg-white/5">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="absolute inset-0 rounded-full blur-xl opacity-30"
              style={{
                backgroundColor: passed ? "#22c55e" : "#ef4444"
              }}
            />
            {passed ? (
              <Trophy className="w-10 h-10 text-green-400" />
            ) : (
              <XCircle className="w-10 h-10 text-red-400 animate-pulse" />
            )}
          </div>

          <span className="text-[10px] font-manrope font-black text-white/40 uppercase tracking-[0.25em]">
            Topic Practice Complete
          </span>

          <h3 className="font-instrument text-4xl text-white font-medium">
            {passed ? "Topic Mastered!" : "Keep Practicing"}
          </h3>

          <div className="py-4">
            <span className="text-6xl font-instrument italic font-bold animate-pulse" style={{ color: passed ? "#22c55e" : "#ef4444" }}>
              {percentage}%
            </span>
            <p className="text-white/40 font-inter text-xs mt-2 uppercase tracking-widest">
              Score: {correctAnswers} / {questions.length} Correct
            </p>
          </div>

          <p className="font-inter text-white/60 text-sm leading-relaxed">
            {passed
              ? "Fantastic work! You have exceeded the 60% passing threshold and successfully completed this section."
              : "You need at least 60% to count this section as completed. Review the article and video tabs, and try again!"}
          </p>

          <div className="pt-8">
            <MagneticButton
              onClick={handleRetake}
              accentColor={accentColor}
              className="px-12 py-4 rounded-2xl text-black bg-white hover:bg-neutral-200 transition-all font-manrope font-black uppercase tracking-widest text-xs shadow-lg"
            >
              <span className="relative z-10 text-black">Retake Quiz</span>
            </MagneticButton>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentIdx];

  const handleCheck = () => {
    if (selectedOption === null) return;
    
    const correct = selectedOption === question.correctIndex;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: [accentColor, "#ffffff"]
      });
      setCorrectAnswers((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    setCurrentIdx((prev) => (prev + 1) % questions.length);
    setSelectedOption(null);
    setShowFeedback(false);
    setShowHint(false);
  };

  return (
    <div className="liquid-glass-strong rounded-[32px] p-8 md:p-12 border border-white/10 space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="font-instrument text-3xl text-white">Check Understanding</h3>
          <p className="text-xs font-manrope font-bold uppercase tracking-[0.2em] subject-accent-text">Question {currentIdx + 1} of {questions.length}</p>
        </div>
        <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center">
          <span className="text-xs font-bold text-white/40">{Math.round(((currentIdx) / questions.length) * 100)}%</span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-xl text-white/90 leading-relaxed font-inter">
          {question.text.split('$').map((part: string, i: number) => (
            i % 2 === 0 ? part : <InlineMath key={i}>{part}</InlineMath>
          ))}
        </div>

        <div className="grid gap-3">
          {question.options.map((option: string, idx: number) => (
            <button
              key={idx}
              onClick={() => !showFeedback && setSelectedOption(idx)}
              className={cn(
                "w-full text-left p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden",
                selectedOption === idx 
                  ? "text-white" 
                  : "bg-white/5 border-white/5 text-white/60 hover:border-white/20 hover:bg-white/10",
                showFeedback && idx === question.correctIndex && "border-green-500 bg-green-500/20 text-white",
                showFeedback && selectedOption === idx && idx !== question.correctIndex && "border-red-500 bg-red-500/20 text-white"
              )}
              style={{
                borderColor: selectedOption === idx && !showFeedback ? accentColor : undefined,
                backgroundColor: selectedOption === idx && !showFeedback ? `${accentColor}15` : undefined
              }}
            >
              <div className="flex items-center space-x-4">
                <div 
                  className={cn(
                    "w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold border transition-colors",
                    selectedOption === idx ? "text-black border-transparent" : "border-white/10 text-white/40"
                  )}
                  style={{
                    backgroundColor: selectedOption === idx && !showFeedback ? accentColor : undefined
                  }}
                >
                  {String.fromCharCode(65 + idx)}
                </div>
                <span>
                  {option.split('$').map((part, i) => (
                    i % 2 === 0 ? part : <InlineMath key={i}>{part}</InlineMath>
                  ))}
                </span>
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "p-6 rounded-2xl border",
                isCorrect ? "bg-green-500/10 border-green-500/30" : "bg-red-500/10 border-red-500/30"
              )}
            >
              <div className="flex items-start space-x-4">
                <div className={cn(
                  "p-2 rounded-xl shrink-0",
                  isCorrect ? "bg-green-500/20" : "bg-red-500/20"
                )}>
                  {isCorrect ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <XCircle className="w-5 h-5 text-red-400" />}
                </div>
                <div className="space-y-1">
                  <h4 className={cn("font-bold text-sm", isCorrect ? "text-green-400" : "text-red-400")}>
                    {isCorrect ? "Excellent!" : "Not quite right"}
                  </h4>
                  <div className="text-sm text-white/60 leading-relaxed font-inter">
                    {question.explanation.split('$').map((part: string, i: number) => (
                      i % 2 === 0 ? part : <InlineMath key={i}>{part}</InlineMath>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {showHint && !showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-2xl bg-white/5 border text-white"
              style={{
                borderColor: `${accentColor}33`,
                backgroundColor: `${accentColor}08`
              }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <AlertCircle className="w-4 h-4" style={{ color: accentColor }} />
                <span className="font-bold text-sm uppercase tracking-widest" style={{ color: accentColor }}>Mastery Hint</span>
              </div>
              <p className="text-sm text-white/70">{question.hint || "Recall key properties discussed in the article tab."}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between items-center pt-4">
          <button 
            onClick={() => setShowHint(!showHint)}
            className="text-xs font-manrope font-black text-white/40 hover:text-white uppercase tracking-widest transition-colors"
          >
            {showHint ? "Hide Hint" : "Show Hint"}
          </button>
          
          <div className="flex space-x-4">
            {!showFeedback ? (
              <MagneticButton
                onClick={handleCheck}
                disabled={selectedOption === null}
                accentColor={accentColor}
                className="bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-md px-12 py-4 rounded-2xl text-white font-manrope font-black uppercase tracking-widest text-xs disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <span className="flex items-center space-x-2 relative z-10">
                  <span>Check Answer</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </MagneticButton>
            ) : (
              <MagneticButton
                onClick={() => {
                  if (currentIdx + 1 === questions.length) {
                    setIsFinished(true);
                  } else {
                    nextQuestion();
                  }
                }}
                accentColor={accentColor}
                className="bg-white/10 px-12 py-4 rounded-2xl text-white font-manrope font-black uppercase tracking-widest text-xs"
              >
                <span className="flex items-center space-x-2 relative z-10">
                  <span>{currentIdx + 1 === questions.length ? "Finish Practice" : "Next Question"}</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </MagneticButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

interface LogoFieldBackgroundProps {
  opacity?: number;
  speedX?: number;
  speedY?: number;
  spacingX?: number;
  spacingY?: number;
  color?: string;
}

function hexToRgb(hex: string) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 242, b: 255 }; // default fallback (medical-teal)
}

export function LogoFieldBackground({
  opacity = 0.07,
  speedX = 0.25,
  speedY = 0.12,
  spacingX = 180,
  spacingY = 90,
  color = "#00f2ff",
}: LogoFieldBackgroundProps) {
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
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    let scrollX = 0;
    let scrollY = 0;
    let inView = true;
    const rgb = hexToRgb(color);

    const draw = () => {
      if (!inView) return;
      ctx.clearRect(0, 0, width, height);

      scrollX = (scrollX + speedX) % spacingX;
      scrollY = (scrollY + speedY) % (spacingY * 2);

      const startRow = Math.floor(-scrollY / spacingY) - 1;
      const endRow = Math.ceil((height - scrollY) / spacingY) + 1;

      // Draw rows of logos
      for (let r = startRow; r <= endRow; r++) {
        const posY = r * spacingY + scrollY;
        const isStaggered = r % 2 !== 0;
        const staggerX = isStaggered ? spacingX / 2 : 0;

        const startCol = Math.floor((-scrollX - staggerX) / spacingX) - 1;
        const endCol = Math.ceil((width - scrollX - staggerX) / spacingX) + 1;

        for (let c = startCol; c <= endCol; c++) {
          const posX = c * spacingX + staggerX + scrollX;
          
          // Calculate distance to mouse
          const logoCenterX = posX + 18;
          const logoCenterY = posY + 18;
          const dx = logoCenterX - mouseRef.current.x;
          const dy = logoCenterY - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          let currentOpacity = opacity;
          let currentScale = 1.4;
          let glow = 0;

          if (dist < 220) {
            const factor = 1 - dist / 220;
            currentOpacity = opacity + (0.28 - opacity) * factor;
            currentScale = 1.4 + 0.15 * factor;
            glow = factor;
          }

          ctx.save();
          ctx.translate(posX, posY);
          ctx.scale(currentScale, currentScale);

          // Path: M2 12 H6 L9 3 L15 21 L18 12 H22 (standard 24x24 grid)
          ctx.beginPath();
          ctx.moveTo(2, 12);
          ctx.lineTo(6, 12);
          ctx.lineTo(9, 3);
          ctx.lineTo(15, 21);
          ctx.lineTo(18, 12);
          ctx.lineTo(22, 12);

          // Render glowing shadow when mouse is near
          if (glow > 0) {
            ctx.shadowColor = color;
            ctx.shadowBlur = 4 + 8 * glow;
          }

          ctx.strokeStyle = glow > 0 
            ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${currentOpacity})`
            : `rgba(255, 255, 255, ${currentOpacity})`;
            
          ctx.lineWidth = glow > 0 ? 1.6 : 1.1;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.stroke();

          ctx.restore();
        }
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
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [opacity, speedX, speedY, spacingX, spacingY, color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-10"
      style={{ display: "block" }}
    />
  );
}

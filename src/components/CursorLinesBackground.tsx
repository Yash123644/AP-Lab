"use client";

import { useEffect, useRef } from "react";

interface GridLine {
  cx: number;
  cy: number;
  col: number;
  row: number;
  currentAngle: number;
  color: string;
  spinVelocity?: number;
  spinAngle?: number;
}

export function CursorLinesBackground({ isPaused = false }: { isPaused?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(isPaused);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let gridLines: GridLine[] = [];
    let time = 0;
    let inView = true;
    let pullIntensity = 0;
    
    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const easedMouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const cellSpacing = 45;
    const lineLength = 18;
    const lineWidth = 2;
    const maxInfluenceDistance = 220;

    const initGrid = (width: number, height: number) => {
      gridLines = [];
      const cols = Math.floor(width / cellSpacing);
      const rows = Math.floor(height / cellSpacing);
      
      const startX = (width - (cols - 1) * cellSpacing) / 2;
      const startY = (height - (rows - 1) * cellSpacing) / 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cx = startX + c * cellSpacing;
          const cy = startY + r * cellSpacing;

          // Normalized coordinates for gradient distribution
          const nx = cols > 1 ? c / (cols - 1) : 0.5;
          const ny = rows > 1 ? r / (rows - 1) : 0.5;

          // Calculate hue based on spatial positions:
          // Pink/Crimson (330) on left -> Violet/Purple (270) -> Blue/Cyan (210) on right
          let hue = 335 - nx * 125; 

          // Blend in Orange/Red (15) towards the top right (nx -> 1, ny -> 0)
          const topRightInfluence = Math.pow(nx * (1 - ny), 1.5);
          if (topRightInfluence > 0.02) {
            const targetHue = 375; // 15 degrees offset
            hue = hue + (targetHue - hue) * topRightInfluence;
            if (hue > 360) hue -= 360;
          }

          // Saturation 80%, Lightness 48% for slightly higher definition against dark canvas
          const color = `hsla(${hue.toFixed(1)}, 80%, 48%, 1)`;

          gridLines.push({
            cx,
            cy,
            col: c,
            row: r,
            currentAngle: Math.random() * Math.PI * 2, // randomized start
            color,
            spinVelocity: 0,
            spinAngle: 0,
          });
        }
      }
    };

    const resize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      ctx.scale(dpr, dpr);
      
      initGrid(rect.width, rect.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || isPausedRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current || e.touches.length === 0 || isPausedRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.isDown = false;
    };

    const triggerSpin = (clickX: number, clickY: number) => {
      for (let i = 0; i < gridLines.length; i++) {
        const line = gridLines[i];
        const dx = clickX - line.cx;
        const dy = clickY - line.cy;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxInfluenceDistance) {
          const clickInfluence = Math.pow(1 - distance / maxInfluenceDistance, 1.5);
          line.spinVelocity = (line.spinVelocity || 0) + 1.8 * clickInfluence;
        }
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (!containerRef.current || isPausedRef.current) return;
      mouse.isDown = true;
      const rect = containerRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      triggerSpin(clickX, clickY);
    };

    const handleMouseUp = () => {
      mouse.isDown = false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (!containerRef.current || e.touches.length === 0 || isPausedRef.current) return;
      mouse.isDown = true;
      const rect = containerRef.current.getBoundingClientRect();
      const clickX = e.touches[0].clientX - rect.left;
      const clickY = e.touches[0].clientY - rect.top;
      triggerSpin(clickX, clickY);
    };

    const handleTouchEnd = () => {
      mouse.isDown = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchcancel", handleTouchEnd);

    // Animation Loop
    const animate = () => {
      if (!inView) return;

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // Increment time for slow constant rotation and pull intensity for black hole effect
      if (!isPausedRef.current) {
        if (mouse.isDown) {
          time += 0.012; 
          pullIntensity += (1 - pullIntensity) * 0.12;
        } else {
          time += 0.008; 
          pullIntensity += (0 - pullIntensity) * 0.12;
        }
      }

      // Smooth/Ease the cursor coordinate to introduce a lagging "heavy" trail effect
      if (mouse.active) {
        if (easedMouse.x === -1000) {
          easedMouse.x = mouse.x;
          easedMouse.y = mouse.y;
          easedMouse.active = true;
        } else {
          const easeFactor = 0.08; // smooth trailing lag
          easedMouse.x += (mouse.x - easedMouse.x) * easeFactor;
          easedMouse.y += (mouse.y - easedMouse.y) * easeFactor;
          easedMouse.active = true;
        }
      } else {
        if (easedMouse.x !== -1000) {
          const easeFactor = 0.08;
          easedMouse.x += (mouse.x - easedMouse.x) * easeFactor;
          easedMouse.y += (mouse.y - easedMouse.y) * easeFactor;
          
          const dx = mouse.x - easedMouse.x;
          const dy = mouse.y - easedMouse.y;
          if (Math.sqrt(dx * dx + dy * dy) < 4) {
            easedMouse.x = -1000;
            easedMouse.y = -1000;
            easedMouse.active = false;
          }
        }
      }
      easedMouse.isDown = mouse.isDown;

      for (let i = 0; i < gridLines.length; i++) {
        const line = gridLines[i];

        // 1. Compute Base slow rotation (varies slightly by position for a wave effect)
        const spatialPhase = (line.cx + line.cy) * 0.0015;
        const baseAngle = time + spatialPhase;

        // 2. Compute Cursor Influence
        let targetAngle = baseAngle;
        let influence = 0;
        let drawX = line.cx;
        let drawY = line.cy;

        if (easedMouse.active) {
          const dx = easedMouse.x - line.cx;
          const dy = easedMouse.y - line.cy;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const currentMaxDistance = maxInfluenceDistance;

          if (distance < currentMaxDistance) {
            influence = Math.pow(1 - distance / currentMaxDistance, 1.5);
            const angleToMouse = Math.atan2(dy, dx);
            
            // Radial pointing: lines point directly to mouse (blackhole center)
            const targetAngleMouse = angleToMouse;

            // Blend base angle and mouse tracking angle
            targetAngle = baseAngle + (targetAngleMouse - baseAngle) * influence;

            // Black hole pull displacement: pull centers towards the mouse
            if (pullIntensity > 0 && distance > 5) {
              const maxPullDistance = cellSpacing * 0.75; // Pull up to 75% of cell spacing (~33px)
              const pullDist = influence * maxPullDistance * pullIntensity;
              drawX += (dx / distance) * pullDist;
              drawY += (dy / distance) * pullDist;
            }
          }
        }

        // 3. Easing updates with angle-wrapping correction (shortest rotation path)
        if (!isPausedRef.current) {
          // Update spin physics
          if (line.spinVelocity || line.spinAngle) {
            line.spinVelocity = (line.spinVelocity || 0) * 0.93;
            line.spinAngle = ((line.spinAngle || 0) + (line.spinVelocity || 0)) * 0.95;
            
            if (Math.abs(line.spinVelocity) < 0.001 && Math.abs(line.spinAngle) < 0.001) {
              line.spinVelocity = 0;
              line.spinAngle = 0;
            }
          }

          const finalTarget = targetAngle + (line.spinAngle || 0);

          let diff = finalTarget - line.currentAngle;
          while (diff < -Math.PI) diff += Math.PI * 2;
          while (diff > Math.PI) diff -= Math.PI * 2;
          line.currentAngle += diff * 0.09; // fluid lerp step
        }

        // 4. Fade lines out near the bottom of the canvas
        const bottomFadeStart = height - 250;
        let yOpacity = 1;
        if (line.cy > bottomFadeStart) {
          yOpacity = Math.max(0, 1 - (line.cy - bottomFadeStart) / 250);
        }

        // 5. Determine glowing intensity (0.35 resting, up to 0.9 active when clicked)
        const maxActiveOpacity = easedMouse.isDown ? 0.55 : 0.48;
        const opacity = (0.35 + influence * maxActiveOpacity) * yOpacity;
        
        // 6. Draw line
        const cos = Math.cos(line.currentAngle);
        const sin = Math.sin(line.currentAngle);
        
        const halfLength = lineLength / 2;
        const x1 = drawX - halfLength * cos;
        const y1 = drawY - halfLength * sin;
        const x2 = drawX + halfLength * cos;
        const y2 = drawY + halfLength * sin;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        
        // Set color with dynamic brightness glow
        ctx.strokeStyle = line.color.replace(", 1)", `, ${opacity})`);
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasInView = inView;
        inView = entry.isIntersecting;
        if (inView && !wasInView) {
          animate();
        }
      },
      { threshold: 0.01 }
    );
    observer.observe(canvas);

    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 block bg-[#030303]"
      />
    </div>
  );
}

"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";

// Vertex shader source
const vsSource = `
  attribute vec2 position;
  varying vec2 v_texCoord;
  void main() {
    v_texCoord = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

// Fragment shader source
const fsSource = `
  precision mediump float;
  varying vec2 v_texCoord;
  
  uniform sampler2D u_texture;
  uniform vec2 u_mouse;
  uniform vec2 u_mouseVel;
  uniform float u_mouseActive;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_clickImpulse;

  // Simple 2D noise for subtle background fluid simulation
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  // Center the 1024x512 text dynamically and scale it
  vec2 getCenteredUv(vec2 uv, vec2 resolution) {
    float screenAspect = resolution.x / resolution.y;
    float textAspect = 2.0; // 1024 / 512
    vec2 st = uv - 0.5;
    if (screenAspect > textAspect) {
      st.x *= screenAspect / textAspect;
    } else {
      st.y *= textAspect / screenAspect;
    }
    st *= 1.4; // Larger 404 text
    return st + 0.5;
  }

  // Sample with zero margin bounds (clamp to black)
  vec4 sampleTextTexture(vec2 uv) {
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
      return vec4(0.0, 0.0, 0.0, 1.0);
    }
    return texture2D(u_texture, uv);
  }

  void main() {
    vec2 uv = v_texCoord;
    vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
    vec2 diff = (uv - u_mouse) * aspect;
    float dist = length(diff);

    // Influence radius (expands on click shockwave)
    float radius = 0.16 + u_clickImpulse * 0.12;
    float effect = smoothstep(radius, 0.0, dist) * u_mouseActive;

    // Sharp rendering bypass: immediately output raw texture when cursor is not in proximity
    if (effect < 0.001) {
      vec2 textUv = getCenteredUv(uv, u_resolution);
      gl_FragColor = sampleTextTexture(textUv);
      return;
    }

    // Repulsion direction from the cursor
    vec2 repelDir = vec2(0.0);
    if (dist > 0.0001) {
      repelDir = normalize(diff / aspect);
    }

    // Fluid swirl / noise rotation
    float angle = noise(uv * 3.0 + u_time * 0.5) * 6.28318;
    vec2 swirlDir = vec2(cos(angle), sin(angle));

    // Combine repulsion, mouse velocity smudge, and swirl noise
    vec2 warpDir = mix(repelDir, swirlDir, 0.25);
    
    // Lens distortion formula (refraction index style)
    float refractionStrength = 0.06 + u_clickImpulse * 0.12;
    vec2 warp = warpDir * effect * refractionStrength;
    
    // Smudge trail in direction of cursor movement
    vec2 smudgeVec = u_mouseVel * effect * 1.5;
    
    // Final warp vector
    vec2 totalWarp = warp + smudgeVec;

    // Sample RGB channels separately to create beautiful chromatic aberration
    // Red channel has a slightly larger displacement
    float r = sampleTextTexture(getCenteredUv(uv - totalWarp * 1.25, u_resolution)).r;
    // Green channel has the standard displacement
    float g = sampleTextTexture(getCenteredUv(uv - totalWarp, u_resolution)).g;
    // Blue channel has a slightly smaller displacement
    float b = sampleTextTexture(getCenteredUv(uv - totalWarp * 0.75, u_resolution)).b;

    // Combine channels
    vec4 finalColor = vec4(r, g, b, 1.0);

    // Add a subtle volumetric ring highlight around the lens distortion edge
    float ringEffect = smoothstep(0.03, 0.0, abs(dist - radius * 0.8));
    finalColor += vec4(vec3(0.06) * ringEffect * u_mouseActive, 0.0);

    gl_FragColor = finalColor;
  }
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Shader compile error:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string) {
  const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
  if (!vs || !fs) return null;
  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("Program link error:", gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }
  return { program, vs, fs };
}

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const gl = (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) {
      console.error("WebGL context not supported");
      return;
    }

    // Set flip Y flag so the 2D canvas texture matches WebGL coords
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

    // Create program
    const setup = createProgram(gl, vsSource, fsSource);
    if (!setup) return;
    const { program, vs, fs } = setup;

    // Buffer setup
    const positionAttributeLocation = gl.getAttribLocation(program, "position");
    const positions = new Float32Array([
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
      -1.0,  1.0,
       1.0, -1.0,
       1.0,  1.0,
    ]);
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    // Uniform locations
    const uTextureLoc = gl.getUniformLocation(program, "u_texture");
    const uMouseLoc = gl.getUniformLocation(program, "u_mouse");
    const uMouseVelLoc = gl.getUniformLocation(program, "u_mouseVel");
    const uMouseActiveLoc = gl.getUniformLocation(program, "u_mouseActive");
    const uTimeLoc = gl.getUniformLocation(program, "u_time");
    const uResolutionLoc = gl.getUniformLocation(program, "u_resolution");
    const uClickImpulseLoc = gl.getUniformLocation(program, "u_clickImpulse");

    // Offscreen text canvas texture setup
    const textCanvas = document.createElement("canvas");
    textCanvas.width = 1024;
    textCanvas.height = 512;
    const tCtx = textCanvas.getContext("2d");
    if (tCtx) {
      tCtx.fillStyle = "#000000";
      tCtx.fillRect(0, 0, 1024, 512);
      tCtx.fillStyle = "#ffffff";
      tCtx.font = "900 320px system-ui, -apple-system, sans-serif";
      tCtx.textAlign = "center";
      tCtx.textBaseline = "middle";
      tCtx.fillText("404", 512, 256);
    }

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textCanvas);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    // Physics parameters & state tracking
    const mouse = {
      targetX: 0.5,
      targetY: 0.5,
      currentX: 0.5,
      currentY: 0.5,
      velX: 0,
      velY: 0,
      active: 0.0,
      easedX: 0.5,
      easedY: 0.5,
      easedVelX: 0,
      easedVelY: 0,
      easedActive: 0.0,
      clickImpulse: 0.0,
    };

    let firstMove = true;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = (e.clientX - rect.left) / rect.width;
      const my = 1.0 - (e.clientY - rect.top) / rect.height;

      if (firstMove) {
        mouse.targetX = mx;
        mouse.targetY = my;
        mouse.currentX = mx;
        mouse.currentY = my;
        mouse.easedX = mx;
        mouse.easedY = my;
        firstMove = false;
      } else {
        mouse.targetX = mx;
        mouse.targetY = my;
      }
      mouse.active = 1.0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        const mx = (e.touches[0].clientX - rect.left) / rect.width;
        const my = 1.0 - (e.touches[0].clientY - rect.top) / rect.height;

        if (firstMove) {
          mouse.targetX = mx;
          mouse.targetY = my;
          mouse.currentX = mx;
          mouse.currentY = my;
          mouse.easedX = mx;
          mouse.easedY = my;
          firstMove = false;
        } else {
          mouse.targetX = mx;
          mouse.targetY = my;
        }
        mouse.active = 1.0;
      }
    };

    const handleMouseLeave = () => {
      mouse.active = 0.0;
    };

    const handleMouseDown = () => {
      mouse.clickImpulse = 1.0;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("touchstart", handleMouseDown);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    // Tab switching/hidden window listener
    let isPaused = false;
    const handleVisibility = () => {
      isPaused = document.hidden;
      if (!isPaused) {
        animate();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    let animationFrameId: number;

    const animate = () => {
      if (isPaused) return;

      // Calculate instantaneous mouse velocity
      const rawDx = mouse.targetX - mouse.currentX;
      const rawDy = mouse.targetY - mouse.currentY;
      mouse.velX = rawDx;
      mouse.velY = rawDy;
      mouse.currentX = mouse.targetX;
      mouse.currentY = mouse.targetY;

      // Apply drag to target position so it decays when mouse stops
      mouse.velX *= 0.92;
      mouse.velY *= 0.92;

      // Decay the click shockwave impulse
      mouse.clickImpulse *= 0.94;

      // Spring-ease coordinates & state uniforms for liquid inertia
      // Increased easing factor slightly for better responsiveness
      mouse.easedX += (mouse.targetX - mouse.easedX) * 0.10;
      mouse.easedY += (mouse.targetY - mouse.easedY) * 0.10;
      mouse.easedVelX += (mouse.velX - mouse.easedVelX) * 0.10;
      mouse.easedVelY += (mouse.velY - mouse.easedVelY) * 0.10;
      mouse.easedActive += (mouse.active - mouse.easedActive) * 0.10;

      // Render loop
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);

      // Bind positions
      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

      // Set uniforms
      gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
      gl.uniform2f(uMouseLoc, mouse.easedX, mouse.easedY);
      gl.uniform2f(uMouseVelLoc, mouse.easedVelX, mouse.easedVelY);
      gl.uniform1f(uMouseActiveLoc, mouse.easedActive);
      gl.uniform1f(uTimeLoc, performance.now() / 1000);
      gl.uniform1f(uClickImpulseLoc, mouse.clickImpulse);

      // Bind texture
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(uTextureLoc, 0);

      // Draw quad
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("touchstart", handleMouseDown);
      document.removeEventListener("visibilitychange", handleVisibility);

      // Cleanup WebGL resources
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteTexture(texture);
      gl.deleteBuffer(positionBuffer);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-black text-white relative overflow-hidden select-none">
      {/* Home Page Navbar */}
      <Navbar />

      {/* Main Canvas Area */}
      <div 
        ref={containerRef} 
        className="flex-1 w-full relative flex items-center justify-center pt-24"
      >
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 block w-full h-full cursor-default z-0"
        />

        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.015] blur-[160px] rounded-full pointer-events-none -z-10" />
      </div>

      {/* Action Footer */}
      <div className="w-full flex flex-col items-center pb-24 z-10">
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center space-x-3 px-10 py-5 rounded-full bg-white text-black font-manrope font-bold text-sm tracking-widest uppercase hover:bg-neutral-200 shadow-[0_12px_40px_rgba(255,255,255,0.15)] transition-all duration-300"
          >
            <span>Return to Home Center</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

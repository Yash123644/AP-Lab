"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Shield, Stethoscope, Microscope, BrainCircuit, Activity, Database, Hexagon, Component, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const team = [
  {
    id: 1,
    name: "Yash Patil",
    role: "Founder & CEO",
    desc: "Architect of the AP Lab engine.",
    icon: BrainCircuit,
    color: "from-blue-500 to-cyan-400",
    image: "/images/about/yash-patil.jpg",
    x: "10%",
    y: "15.15%",
    rotate: -12
  },
  {
    id: 2,
    name: "Dr. Sarah Chen",
    role: "Medical Director",
    desc: "Ensures clinical accuracy.",
    icon: Stethoscope,
    color: "from-rose-500 to-orange-400",
    x: "30%",
    y: "25.35%",
    rotate: -6
  },
  {
    id: 3,
    name: "Dr. James Miller",
    role: "Head of Sciences",
    desc: "AP Chemistry & Biology Lead.",
    icon: Microscope,
    color: "from-medical-teal to-emerald-400",
    x: "50%",
    y: "28.75%",
    rotate: 0
  },
  {
    id: 4,
    name: "Elena Rostova",
    role: "Curriculum Architect",
    desc: "Designs high-yield pathways.",
    icon: Component,
    color: "from-purple-500 to-indigo-400",
    x: "70%",
    y: "25.35%",
    rotate: 6
  },
  {
    id: 5,
    name: "Marcus Cole",
    role: "Lead Engineer",
    desc: "Built the examination engine.",
    icon: Cpu,
    color: "from-slate-400 to-slate-200",
    x: "90%",
    y: "15.15%",
    rotate: 12
  }
];

const sponsorLogos = [
  {
    name: "Google",
    svg: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-6.887 4.114-4.664 0-8.378-3.793-8.378-8.5s3.714-8.5 8.378-8.5c2.196 0 4.026.792 5.472 2.19l3.12-3.12C18.66 1.05 15.688 0 12.24 0 5.48 0 0 5.48 0 12.24s5.48 12.24 12.24 12.24c7.058 0 11.72-4.962 11.72-11.93 0-.806-.073-1.583-.2-2.265H12.24z"/>
      </svg>
    )
  },
  {
    name: "Apple",
    svg: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.62.72-1.16 1.86-1.02 2.97 1.1.09 2.23-.55 2.97-1.41z"/>
      </svg>
    )
  },
  {
    name: "Microsoft",
    svg: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z"/>
      </svg>
    )
  },
  {
    name: "Meta",
    svg: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.2 6.6c-2.3 0-4.3 1.5-5.3 3.6-.3-.7-.9-1.3-1.5-1.7C8.1 7.4 6.6 6.6 5 6.6 2.2 6.6 0 8.8 0 11.6s2.2 5 5 5c2.3 0 4.3-1.5 5.3-3.6.3.7.9 1.3 1.5 1.7.9 1.1 2.4 1.9 4 1.9 2.8 0 5-2.2 5-5s-2.2-5-5-5zm-11.2 8.4c-1.8 0-3.3-1.5-3.3-3.4s1.5-3.4 3.3-3.4c1.2 0 2.3.7 2.9 1.7-.5.7-.8 1.5-.8 2.4 0 .6.1 1.1.3 1.6-.5 1-1.6 1.7-2.9 1.7zm11.2 0c-1.2 0-2.3-.7-2.9-1.7.5-.7.8-1.5.8-2.4 0-.6-.1-1.1-.3-1.6.5-1 1.6-1.7 2.9-1.7 1.8 0 3.3 1.5 3.3 3.4s-1.5 3.4-3.3 3.4z"/>
      </svg>
    )
  },
  {
    name: "Stripe",
    svg: (
      <svg className="h-6 w-auto fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 10.22c0-3.18-1.59-4.82-4.22-4.82-2.88 0-4.83 2-4.83 5 0 2.91 2 4.14 4.54 4.14a5.62 5.62 0 0 0 3.53-1.11l1.1 1.71A7.63 7.63 0 0 1 15.22 17c-4 0-6.84-2.14-6.84-6.42 0-4.14 2.89-6.38 6.94-6.38 3.86 0 6.64 2 6.64 5.92V10.22zM3.46 9.38c0-.6.48-.9 1.35-.9 1.26 0 2.68.39 3.73.95V4.28A12.18 12.18 0 0 0 4.81 3.8c-3.18 0-4.81 1.59-4.81 4.12 0 4.09 5.59 3.44 5.59 5.86 0 .74-.63 1-1.61 1a4.91 4.91 0 0 1-3.23-1.15v5.1A10.28 10.28 0 0 0 4.67 19c3.35 0 5.09-1.63 5.09-4.12.04-4.52-6.3-3.76-6.3-5.5z"/>
      </svg>
    )
  }
];

function TeamCard({ member, idx }: { member: typeof team[0]; idx: number }) {
  const panRotate = useMotionValue(0);
  const springRotate = useSpring(panRotate, { stiffness: 60, damping: 6, mass: 2 });
  const combinedRotate = useTransform(() => member.rotate + springRotate.get());

  return (
    <div 
      className="absolute z-10 origin-top"
      style={{
        left: member.x,
        top: member.y,
        transform: "translateX(-50%)"
      }}
    >
      <motion.div
        initial={{ opacity: 0, rotate: member.rotate }}
        animate={{ 
          opacity: 1, 
          rotate: [member.rotate, member.rotate + 3, member.rotate - 2, member.rotate] 
        }}
        transition={{ 
          rotate: { duration: 6 + (idx % 3), repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 },
          opacity: { duration: 1 }
        }}
        className="origin-top"
      >
        <motion.div
          style={{ rotate: combinedRotate }}
          onPan={(event, info) => {
            panRotate.set(info.offset.x * 0.15);
          }}
          onPanEnd={() => {
            panRotate.set(0);
          }}
          whileTap={{ cursor: "grabbing" }}
          className="relative flex flex-col items-center cursor-grab origin-top group select-none"
        >
          <div className="absolute -top-[14px] w-5 h-8 bg-medical-teal rounded-sm z-20 shadow-[0_0_15px_rgba(32,201,151,0.5)] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white/30" />
          </div>

          <div className="liquid-glass-strong w-[160px] md:w-[200px] rounded-3xl p-4 md:p-5 flex flex-col border border-white/10 group-hover:border-white/30 transition-colors bg-[#0a0a0a]">
            {member.image ? (
              <div className="w-full aspect-square rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden bg-zinc-900 border border-white/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            ) : (
              <div className={cn(
                "w-full aspect-square rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden",
                "bg-gradient-to-br",
                member.color
              )}>
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                <member.icon className="w-12 h-12 text-white drop-shadow-lg" />
              </div>
            )}

            <div className="flex items-center justify-between gap-1 mb-1">
              <h3 className="font-manrope font-bold text-white text-[15px] leading-tight tracking-tight">
                {member.name}
              </h3>
              {member.name === "Yash Patil" && (
                <a
                  href="https://www.linkedin.com/in/yash-patil2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="LinkedinBtn scale-[0.6] origin-center -my-3 -mr-3 shrink-0"
                >
                  <div className="BG"></div>
                  <div className="svgContainer">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                </a>
              )}
            </div>
            <span className="font-mono text-[9px] text-medical-teal uppercase tracking-widest mb-3 block">
              {member.role}
            </span>
            <p className="font-inter text-[11px] text-white/50 leading-relaxed">
              {member.desc}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function AboutPage() {
  const sponsorsRef = React.useRef<HTMLDivElement>(null);
  const isSponsorsHoveredRef = React.useRef(false);

  React.useEffect(() => {
    let animationFrameId: number;
    let x = 0;
    const baseSpeed = 1.0; // pixels per frame

    const animate = () => {
      const marquee = sponsorsRef.current;
      if (marquee) {
        const halfWidth = marquee.scrollWidth / 2;
        if (halfWidth > 0) {
          const speed = isSponsorsHoveredRef.current ? baseSpeed * 0.25 : baseSpeed;
          x -= speed;
          if (x <= -halfWidth) {
            x += halfWidth;
          }
          marquee.style.transform = `translate3d(${x}px, 0, 0)`;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <main className="h-screen bg-[#02050D] flex flex-col selection:bg-medical-teal selection:text-white overflow-hidden relative">
      <Navbar />

      {/* Dynamic Background Design */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Ambient color blobs */}
        <div className="absolute -top-[20%] left-[10%] w-[50%] aspect-square rounded-full bg-medical-teal/10 blur-[130px] animate-[pulse_8s_infinite]" />
        <div className="absolute -bottom-[20%] right-[10%] w-[50%] aspect-square rounded-full bg-primary-purple/10 blur-[130px] animate-[pulse_12s_infinite]" />
        <div className="absolute top-[30%] right-[20%] w-[35%] aspect-square rounded-full bg-blue-500/5 blur-[100px]" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjAuNSIgZmlsbD0icmdiYSgyNTUsIDIyMCwgMjU1LCAwLjA0KSIvPjwvc3ZnPg==')] opacity-60" />
      </div>

      {/* Main Content Area */}
      <div className="flex-grow relative flex flex-col items-center justify-between pt-36 md:pt-40 pb-4">
        
        {/* Header */}
        <div className="text-center z-20 mb-0 px-4 mt-2 md:mt-4">
          <h1 className="font-instrument text-4xl md:text-5xl lg:text-7xl text-white tracking-tighter leading-none mb-2 uppercase">
            Meet the <span className="text-medical-teal italic">Minds</span><br/>Behind AP Lab
          </h1>
          <p className="font-inter text-base text-white/50">Architects of the elite pre-med accelerator.</p>
        </div>

        {/* Hanging Cards Container */}
        <div className="w-full overflow-visible py-0 pt-2 mt-0 relative z-10">
          <div className="relative w-full h-[420px] md:h-[460px] overflow-visible">
            
            {/* Background SVG Curve (The Clothesline) */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 1000 400" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M 0 30 Q 500 200 1000 30" 
                  fill="none" 
                  stroke="rgba(255,255,255,0.2)" 
                  strokeWidth="2" 
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            {/* Cards */}
            {team.map((member, idx) => (
              <TeamCard key={member.id} member={member} idx={idx} />
            ))}
          </div>
        </div>

        {/* Infinite Sponsors Marquee */}
        <div className="w-full overflow-hidden py-10 border-t border-white/5 bg-black/10 backdrop-blur-sm relative flex flex-col justify-center">
          
          {/* Edge fade gradients for seamless look */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#02050D] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#02050D] to-transparent z-20 pointer-events-none" />
          
          <div className="flex w-max">
            <div 
              ref={sponsorsRef}
              className="flex items-center space-x-16 px-8"
              onMouseEnter={() => { isSponsorsHoveredRef.current = true; }}
              onMouseLeave={() => { isSponsorsHoveredRef.current = false; }}
            >
              {[...sponsorLogos, ...sponsorLogos, ...sponsorLogos, ...sponsorLogos, ...sponsorLogos, ...sponsorLogos].map((sponsor, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-center filter drop-shadow-[0_0_12px_rgba(255,255,255,0.05)] text-white/30 hover:text-white/80 transition-all duration-300 transform hover:scale-105"
                >
                  {sponsor.svg}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

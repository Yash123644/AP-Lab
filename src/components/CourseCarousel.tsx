"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { courses, APSubject } from "@/lib/courseData";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  subject: APSubject;
  index: number;
  total: number;
  activeIndex: number;
}

function CourseCard({ subject, index, total, activeIndex }: CourseCardProps) {
  // Calculate relative position to active index
  const offset = index - activeIndex;
  
  // 3D Transforms based on offset
  const rotateY = offset * -25; // Curved rotation
  const translateZ = Math.abs(offset) * -150; // Push back as it goes away
  const translateX = offset * 280; // Spread out
  const scale = 1 - Math.min(Math.abs(offset) * 0.15, 0.4);
  const opacity = 1 - Math.min(Math.abs(offset) * 0.3, 0.8);

  return (
    <motion.div
      initial={false}
      animate={{
        rotateY,
        z: translateZ,
        x: translateX,
        scale,
        opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20
      }}
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        marginLeft: "-160px",
        marginTop: "-220px",
      }}
      className="w-[320px] h-[440px] z-10"
    >
      <div className={cn(
        "w-full h-full rounded-[32px] overflow-hidden liquid-glass-strong border border-white/10 flex flex-col p-8 transition-all duration-500",
        Math.abs(offset) < 0.5 ? "shadow-[0_0_50px_rgba(123,57,252,0.3)]" : ""
      )}>
        {/* Simplified Symbol */}
        <div className="mb-12">
          <div className={cn(
            "w-20 h-20 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5",
            subject.color.replace("text-", "bg-").replace("-400", "/10")
          )}>
            <subject.icon className={cn("w-10 h-10 drop-shadow-lg", subject.color)} />
          </div>
        </div>

        {/* Course Info */}
        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-medical-teal rounded-full" />
            <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">
              {subject.category.split(" & ")[0]}
            </span>
          </div>
          <h3 className="font-instrument text-4xl text-white leading-tight mb-4">
            {subject.name}
          </h3>
          <div className="flex items-center justify-between pt-6 border-t border-white/5">
            <div className="flex flex-col">
              <span className="text-[10px] text-white/30 uppercase font-bold tracking-widest">Lessons</span>
              <span className="text-sm font-manrope font-bold text-white/80">{subject.lessons}</span>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer">
              <div className="w-1.5 h-1.5 rounded-full bg-medical-teal" />
            </div>
          </div>
        </div>

        {/* Subtle Shine */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
}

export function CourseCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % courses.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % courses.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + courses.length) % courses.length);

  return (
    <section className="relative w-full h-[800px] flex items-center justify-center overflow-hidden py-32">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-primary-purple/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div 
        ref={containerRef}
        className="relative w-full max-w-7xl h-full flex items-center justify-center perspective-container"
      >
        <div className="relative w-full h-[500px] flex items-center justify-center preserve-3d">
          <AnimatePresence mode="popLayout">
            {courses.map((subject, idx) => (
              <CourseCard 
                key={subject.slug}
                subject={subject}
                index={idx}
                total={courses.length}
                activeIndex={activeIndex}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Overlay */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-12 z-50 px-12 py-6 rounded-full bg-black/20 backdrop-blur-xl border border-white/5">
          <button 
            onClick={handlePrev}
            className="text-white/40 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.2em]"
          >
            Prev
          </button>
          <div className="flex gap-2">
            {courses.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all duration-500",
                  i === activeIndex ? "bg-medical-teal w-6" : "bg-white/20"
                )}
              />
            ))}
          </div>
          <button 
            onClick={handleNext}
            className="text-white/40 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.2em]"
          >
            Next
          </button>
        </div>
      </div>

      <style jsx global>{`
        .perspective-container {
          perspective: 2000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { id: 1, name: "Sophia M.", role: "AP Bio Student", text: "The Live Diagnostics showed exactly where I was failing. Got a 5!" },
  { id: 2, name: "Daniel K.", role: "AP Chem Student", text: "Socratic AI is literally a 24/7 tutor. Unbelievable platform." },
  { id: 3, name: "Emily R.", role: "AP Calc Student", text: "I struggled with integrals until the Neural Recall system stepped in." },
  { id: 4, name: "Liam T.", role: "AP Physics Student", text: "The mock exams are exactly like the real thing. Highly recommend." },
  { id: 5, name: "Ava L.", role: "AP Lang Student", text: "Beautiful UI. Studying actually feels engaging now instead of a chore." },
  { id: 6, name: "Noah W.", role: "AP Euro Student", text: "My teacher recommended this, and my DBQ scores skyrocketed." },
  { id: 7, name: "Mia S.", role: "AP Psych Student", text: "The spaced repetition algorithm is absolute magic. Never forgetting vocab again." },
  { id: 8, name: "Ethan H.", role: "AP US History", text: "Best $0 I've ever spent. The fact that this is free is insane." }
];

interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
}

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="shrink-0 w-[360px] md:w-[460px] bg-[#121212] border border-white/[0.03] rounded-[28px] p-7 md:p-8 mx-4 flex flex-col justify-between shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative group overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.08] hover:bg-[#1a1a1a]">
    
    <div className="flex space-x-1 mb-5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} className="w-[18px] h-[18px] fill-amber-400 text-amber-400" />
      ))}
    </div>
    
    <p className="font-inter text-white/80 text-[16px] leading-relaxed mb-8 flex-1 italic select-none">
      &ldquo;{review.text}&rdquo;
    </p>
    
    <div className="flex items-center space-x-4">
      <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center font-manrope font-bold text-white text-[17px] select-none">
        {review.name[0]}
      </div>
      <div className="flex flex-col">
        <span className="font-inter font-semibold text-white text-[15px] tracking-tight">{review.name}</span>
        <span className="font-inter text-white/45 text-[13px]">{review.role}</span>
      </div>
    </div>
  </div>
);

export function ReviewSection() {
  // Duplicate arrays to allow seamless infinite looping
  const row1 = [...reviews.slice(0, 4), ...reviews.slice(0, 4)];
  const row2 = [...reviews.slice(4, 8), ...reviews.slice(4, 8)];

  return (
    <section className="relative w-full py-[160px] bg-deep-navy overflow-hidden flex flex-col items-center z-10">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-deep-navy to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-navy to-transparent pointer-events-none z-10" />
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-20 relative z-20 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-inter font-extrabold text-white text-3xl md:text-5xl tracking-tight mb-4 select-none"
        >
          Included Reviews
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-white/50 text-sm md:text-base max-w-lg mx-auto leading-relaxed select-none"
        >
          The verdict is in. See how our cognitive tools are actively shaping the next generation of top performers.
        </motion.p>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full flex flex-col space-y-6">
        
        {/* Edge Gradients for smooth fade */}
        <div className="absolute top-0 bottom-0 left-0 w-[100px] md:w-[250px] bg-gradient-to-r from-deep-navy to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-[100px] md:w-[250px] bg-gradient-to-l from-deep-navy to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Moves Left */}
        <div className="flex w-max">
          <motion.div 
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {row1.map((review, i) => (
              <ReviewCard key={`r1-${i}`} review={review} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Moves Right */}
        <div className="flex w-max">
          <motion.div 
            className="flex"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {row2.map((review, i) => (
              <ReviewCard key={`r2-${i}`} review={review} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

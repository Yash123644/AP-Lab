"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, CheckCircle2, MessageSquare, TrendingUp } from "lucide-react";

interface ActivityEvent {
  id: string;
  user: string;
  action: string;
  subject: string;
  time: string;
  icon: React.ReactNode;
  color: string;
}

const FIRST_NAMES = ["Alex", "Sarah", "Jordan", "Emma", "Liam", "Olivia", "Noah", "Ava", "William", "Sophia"];
const SUBJECTS = ["AP Biology", "AP Chemistry", "AP US History", "AP Calculus AB", "AP Psychology", "AP Physics 1"];
const ACTIONS = [
  { text: "just mastered a unit in", icon: <CheckCircle2 className="w-4 h-4" />, color: "text-emerald-400" },
  { text: "started chatting with the AI Tutor for", icon: <MessageSquare className="w-4 h-4" />, color: "text-blue-400" },
  { text: "scored a 5/5 on a practice quiz for", icon: <TrendingUp className="w-4 h-4" />, color: "text-amber-400" },
  { text: "generated a new study guide for", icon: <BrainCircuit className="w-4 h-4" />, color: "text-purple-400" }
];

const generateMockEvent = (): ActivityEvent => {
  const actionObj = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
  return {
    id: Math.random().toString(36).substr(2, 9),
    user: FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)],
    action: actionObj.text,
    subject: SUBJECTS[Math.floor(Math.random() * SUBJECTS.length)],
    time: "Just now",
    icon: actionObj.icon,
    color: actionObj.color
  };
};

export function ActivityFeed() {
  const [events, setEvents] = useState<ActivityEvent[]>([]);

  useEffect(() => {
    // Initial load
    setEvents(Array.from({ length: 4 }).map(generateMockEvent));

    const interval = setInterval(() => {
      setEvents(prev => {
        const newEvent = generateMockEvent();
        return [newEvent, ...prev].slice(0, 8); // Keep max 8 events
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-[rgba(20,20,25,0.4)] backdrop-blur-xl rounded-[24px] border border-white/10 p-6 overflow-hidden">
      <h3 className="text-white/90 font-manrope font-semibold text-xl mb-6 flex items-center">
        <span className="w-2 h-2 rounded-full bg-blue-500 mr-3 animate-pulse" />
        Live Activity Feed
      </h3>
      
      <div className="flex-1 overflow-hidden relative">
        {/* Fade overlay top */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[rgba(20,20,25,0.4)] to-transparent z-10" />
        
        <div className="space-y-4">
          <AnimatePresence initial={false}>
            {events.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
              >
                <div className={`mt-1 p-2 rounded-full bg-white/5 ${event.color}`}>
                  {event.icon}
                </div>
                <div className="flex-1">
                  <p className="text-white/80 font-inter text-[14px] leading-relaxed">
                    <span className="font-semibold text-white">{event.user}</span> {event.action} <span className="font-medium text-[#a484d7]">{event.subject}</span>
                  </p>
                  <span className="text-white/40 text-[12px] font-mono mt-1 block">{event.time}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Fade overlay bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[rgba(20,20,25,1)] to-transparent z-10" />
      </div>
    </div>
  );
}

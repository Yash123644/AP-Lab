"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ActivityFeed } from "@/components/analytics/ActivityFeed";
import { SubjectBreakdown } from "@/components/analytics/SubjectBreakdown";
import { Users, BookOpen, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { PremiumButton } from "@/components/PremiumButton";

const LiveMap = dynamic(
  () => import("@/components/analytics/LiveMap").then((mod) => mod.LiveMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] to-[#121212] rounded-[24px] border border-white/10 shadow-[0_0_40px_rgba(123,57,252,0.1)]">
        <div className="w-8 h-8 border-2 border-white/20 border-t-[#7b39fc] rounded-full animate-spin" />
      </div>
    ),
  }
);

const StatCard = ({ title, value, icon, delay }: { title: string, value: string | number, icon: React.ReactNode, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-[rgba(20,20,25,0.4)] backdrop-blur-xl rounded-[24px] border border-white/10 p-6 flex items-center space-x-4"
  >
    <div className="p-4 rounded-2xl bg-[#7b39fc]/20 text-[#a484d7]">
      {icon}
    </div>
    <div>
      <h4 className="text-white/60 font-inter text-sm mb-1">{title}</h4>
      <span className="text-white text-3xl font-manrope font-bold tracking-tight">{value}</span>
    </div>
  </motion.div>
);

export default function LiveAnalyticsPage() {
  const [activeUsers, setActiveUsers] = useState(2458);
  const [questionsAnswered, setQuestionsAnswered] = useState(145920);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => Math.max(100, prev + Math.floor(Math.random() * 7) - 3));
      setQuestionsAnswered(prev => prev + Math.floor(Math.random() * 10));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#020202] text-white pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#7b39fc] opacity-[0.1] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00ff96] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="flex items-center justify-center relative w-4 h-4">
                <div className="absolute w-full h-full bg-red-500 rounded-full animate-ping opacity-75" />
                <div className="w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-400 font-inter text-sm tracking-[0.2em] uppercase font-bold">Live System Data</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-instrument font-bold tracking-tight">Global Live Activity</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">
              <PremiumButton size="sm">Back to Home</PremiumButton>
            </Link>
          </motion.div>
        </div>

        {/* Top Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard 
            title="Total Active Students" 
            value={activeUsers.toLocaleString()} 
            icon={<Users className="w-8 h-8" />} 
            delay={0.1} 
          />
          <StatCard 
            title="Questions Answered Today" 
            value={questionsAnswered.toLocaleString()} 
            icon={<BookOpen className="w-8 h-8" />} 
            delay={0.2} 
          />
          <StatCard 
            title="AI Sessions Active" 
            value={Math.floor(activeUsers * 0.45).toLocaleString()} 
            icon={<BrainCircuit className="w-8 h-8" />} 
            delay={0.3} 
          />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[800px] lg:h-[600px]">
          {/* Map Section (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 h-[400px] lg:h-full"
          >
            <LiveMap />
          </motion.div>

          {/* Right Side Column (Activity Feed & Subject Breakdown) */}
          <div className="lg:col-span-1 flex flex-col gap-6 h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="h-[50%]"
            >
              <SubjectBreakdown />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="h-[50%]"
            >
              <ActivityFeed />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion, Variants } from "framer-motion";
import { BookOpen, Search, Microscope } from "lucide-react";

export function BentoFeatures() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen py-32 px-6 md:px-12 bg-deep-navy flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-inter font-extrabold text-white text-3xl md:text-5xl tracking-tight mb-4"
          >
            Included Curriculum
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-white/50 text-sm md:text-base max-w-lg mx-auto leading-relaxed"
          >
            Everything you need to master your AP courses while building clinical intuition.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
        >
          {/* Small Tile: Unit-by-Unit */}
          <motion.div variants={itemVariants} className="md:col-span-1 glass rounded-3xl p-8 flex flex-col justify-between group hover:bg-white/10 transition-colors">
            <div className="bg-blue-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Unit-by-Unit Curation</h3>
              <p className="text-white/60">Structured learning paths directly mapped to the College Board curriculum.</p>
            </div>
          </motion.div>

          {/* Large Tile: Clinical Deep Dives */}
          <motion.div variants={itemVariants} className="md:col-span-2 glass rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 group hover:bg-white/10 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-medical-teal/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="flex-1 z-10">
              <div className="bg-medical-teal/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Microscope className="w-8 h-8 text-medical-teal" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Clinical Deep Dives</h3>
              <p className="text-lg text-white/60">
                Connect textbook theory to real-world medical practice. See how AP Biology and Chemistry concepts are used daily in hospitals.
              </p>
            </div>
            {/* Placeholder for Medical Image */}
            <div className="w-full md:w-1/2 h-full min-h-[200px] bg-deep-navy/50 border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden z-10">
              <div className="text-white/30 font-mono text-sm">[ Medical Image Placeholder ]</div>
            </div>
          </motion.div>

          {/* Small Tile: AI-Powered Search */}
          <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-1 glass rounded-3xl p-8 flex flex-col justify-between group hover:bg-white/10 transition-colors">
            <div className="bg-purple-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Search className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">AI-Powered Search</h3>
              <p className="text-white/60">Instantly find definitions, clinical correlations, and practice questions.</p>
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}

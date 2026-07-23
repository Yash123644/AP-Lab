"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BLOG_POSTS } from "@/data/blogs";
import Link from "next/link";
import { ArrowUpRight, Newspaper, Sparkles } from "lucide-react";

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-[#03040a] text-white selection:bg-medical-teal selection:text-black overflow-hidden relative font-manrope">
      
      {/* Background Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary-purple/10 blur-[150px] rounded-full" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-medical-teal/10 blur-[140px] rounded-full" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 sm:pt-40 md:pt-44 pb-16 px-6 md:px-[120px] z-10">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          
          {/* Top Pill Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/[0.05] border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-md shadow-inner"
          >
            <Newspaper className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-bold tracking-wider text-white/80 uppercase">AP Lab Insights</span>
          </motion.div>

          {/* Main Title matching reference layout */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-manrope text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Announcements and Blogs
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl mx-auto"
          >
            Updates, announcements, and insights from the AP Lab team! :)
          </motion.p>

        </div>
      </section>

      {/* Blog Cards Grid Section */}
      <section className="px-6 md:px-[120px] pb-32 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {BLOG_POSTS.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link 
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-[#0b0c16]/80 border border-white/10 hover:border-white/25 rounded-3xl overflow-hidden transition-all duration-400 hover:-translate-y-2 shadow-[0_15px_35px_rgba(0,0,0,0.4)] h-full justify-between"
                >
                  <div>
                    {/* Cover Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                      <img 
                        src={post.coverImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-emerald-400 text-xs font-mono font-bold">
                        {post.category}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-7 space-y-4">
                      {/* Meta Date & Read Time */}
                      <div className="flex items-center space-x-2 text-xs font-mono text-white/40">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-white/50 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Author Footer Badge */}
                  <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name} 
                        className="w-9 h-9 rounded-full object-cover border border-white/20"
                      />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white">{post.author.name}</span>
                        <span className="text-[10px] text-white/40">{post.author.role}</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-white/15 flex items-center justify-center text-white/60 group-hover:text-white transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                </Link>
              </motion.div>
            ))}

            {/* Placeholder Upcoming Blog Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col bg-[#0b0c16]/50 border border-white/5 rounded-3xl overflow-hidden h-full justify-between opacity-80"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900/60 flex items-center justify-center p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-purple-400" />
                  </div>
                </div>
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center space-x-2 text-xs font-mono text-white/30">
                    <span>Coming Soon</span>
                    <span>•</span>
                    <span>3 min read</span>
                  </div>
                  <h2 className="text-xl font-bold text-white/80 leading-snug">
                    How We Built a 100% Free Nationwide Prep Platform
                  </h2>
                  <p className="text-white/40 text-sm leading-relaxed">
                    A deep dive into our mission to make high-quality AP exam prep accessible to every student, everywhere.
                  </p>
                </div>
              </div>
              <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" 
                    alt="Yash Patil" 
                    className="w-9 h-9 rounded-full object-cover border border-white/15"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white/80">Yash Patil</span>
                    <span className="text-[10px] text-white/30">Founder, AP Lab</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

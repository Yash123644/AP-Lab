"use client";

import React, { use } from "react";
import { BLOG_POSTS } from "@/data/blogs";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ChevronLeft, Calendar, Clock, ArrowLeft } from "lucide-react";

export default function SingleBlogPostPage({ params }: { params: { slug: string } | Promise<{ slug: string }> }) {
  // Safely unwrap params whether passed synchronously or as a Promise
  const resolvedParams = params && typeof (params as any).then === "function" ? use(params as Promise<{ slug: string }>) : (params as { slug: string });
  const slug = resolvedParams?.slug;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-[#03040a] text-white flex flex-col items-center justify-center p-6 font-manrope">
        <Navbar />
        <div className="text-center py-40 space-y-4">
          <h1 className="text-4xl font-bold">Article Not Found</h1>
          <p className="text-white/60 text-sm">The article you are looking for does not exist or has been moved.</p>
          <Link href="/blog" className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-all">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Blogs</span>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#03040a] text-white selection:bg-medical-teal selection:text-black overflow-hidden relative font-manrope">
      
      {/* Background Gradient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary-purple/10 blur-[160px] rounded-full" />
      </div>

      <Navbar />

      {/* Article Hero Container */}
      <article className="relative pt-36 sm:pt-40 md:pt-44 pb-24 px-6 md:px-[120px] z-10">
        <div className="max-w-3xl mx-auto">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs font-mono text-white/40 mb-8">
            <Link href="/blog" className="hover:text-emerald-400 transition-colors flex items-center space-x-1">
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Blog</span>
            </Link>
            <span>/</span>
            <span className="text-white/70">{post.category}</span>
          </div>

          {/* Article Header Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
            {post.title}
          </h1>

          {/* Meta Info & Author Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-y border-white/10 mb-10 gap-4">
            
            {/* Author Badge */}
            <div className="flex items-center space-x-3.5">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
              />
              <div className="flex flex-col">
                <span className="font-bold text-white text-base">{post.author.name}</span>
                <span className="text-xs text-white/50">{post.author.role}</span>
              </div>
            </div>

            {/* Date & Read Time */}
            <div className="flex items-center space-x-4 text-xs font-mono text-white/40">
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span>{post.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>{post.readTime}</span>
              </div>
            </div>

          </div>

          {/* Cover Image */}
          <div className="rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl aspect-[16/9]">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article HTML Body */}
          <div 
            className="prose prose-invert prose-emerald max-w-none font-inter text-white/80 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Back to Blogs Footer CTA */}
          <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
            <Link 
              href="/blog"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white text-sm font-semibold transition-all hover:-translate-x-1"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all posts</span>
            </Link>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}

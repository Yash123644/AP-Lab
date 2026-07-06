"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, User, Calendar, LogOut, Compass, Sparkles, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

interface ContextMenuProps {
  onOpenProfile: () => void;
}

const SEARCHABLE_PAGES = [
  { name: "Dashboard", url: "/dashboard", desc: "Your personal study hub & registered courses", category: "Core" },
  { name: "Progress Analytics", url: "/dashboard/progress", desc: "XP breakdown, calendar, streaks, and study stats", category: "Core" },
  { name: "AP Biology", url: "/dashboard/ap-biology", desc: "Cell communications, mitosis, and genetics study guides", category: "Classes" },
  { name: "AP Chemistry", url: "/dashboard/ap-chemistry", desc: "Chemical structures, thermodynamics, and kinetics database", category: "Classes" },
  { name: "AP Physics C", url: "/dashboard/ap-physics", desc: "Classical mechanics and electricity/magnetism review", category: "Classes" },
  { name: "AP Psychology", url: "/dashboard/ap-psychology", desc: "Neuroanatomy, behavioral bases, and diagnostic treatment", category: "Classes" },
  { name: "AP US History", url: "/dashboard/ap-ush", desc: "Colonial era, historical analysis, and exam review", category: "Classes" },
  { name: "Home Page", url: "/", desc: "AP Lab landing page & core accelerators", category: "General" },
  { name: "Join Network", url: "/join", desc: "Register a new account or view elite pricing tiers", category: "General" },
  { name: "Contact Us", url: "/contact", desc: "Get in touch with support or medical mentors", category: "General" },
  { name: "About Us", url: "/about", desc: "Learn about the mission of the Pre-Med Accelerator", category: "General" },
  { name: "Live Analytics", url: "/live-analytics", desc: "Active scholar counts and real-time study patterns", category: "General" },
];

export function DashboardContextMenu({ onOpenProfile }: ContextMenuProps) {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const menuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Context menu trigger
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    window.addEventListener("contextmenu", handleContextMenu);
    return () => window.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  // Keyboard shortcut for search (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Hide context menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setVisible(false);
      } else if (!menuRef.current) {
        setVisible(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  // Auto-focus search input when opened
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
      setSelectedIndex(0);
    } else {
      setSearchQuery("");
    }
  }, [searchOpen]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (err) {
      console.error("Sign out error:", err);
    }
  };

  const filteredPages = SEARCHABLE_PAGES.filter((page) =>
    page.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    page.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    page.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredPages.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredPages.length) % Math.max(1, filteredPages.length));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredPages[selectedIndex]) {
        router.push(filteredPages[selectedIndex].url);
        setSearchOpen(false);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      setSearchOpen(false);
    }
  };

  return (
    <>
      {/* Context Menu Dropdown */}
      <AnimatePresence>
        {visible && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="fixed z-[99999] w-64 rounded-2xl bg-neutral-950/85 backdrop-blur-2xl border border-white/10 p-2 shadow-[0_12px_40px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] text-white"
            style={{
              top: `${Math.min(position.y, window.innerHeight - 240)}px`,
              left: `${Math.min(position.x, window.innerWidth - 270)}px`,
            }}
          >
            <div className="px-3 py-1.5 text-[10px] font-manrope font-bold text-white/40 uppercase tracking-[0.2em] border-b border-white/5 mb-1.5 flex items-center justify-between">
              <span>AP LAB MENU</span>
              <Sparkles className="w-3 h-3 text-cyan-400" />
            </div>

            <button
              onClick={() => {
                setVisible(false);
                setSearchOpen(true);
              }}
              className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm text-white/80 hover:text-white hover:bg-white/5 transition-all text-left"
            >
              <Search className="w-4 h-4 text-cyan-400" />
              <div className="flex-1 flex justify-between items-center">
                <span>Search Platform</span>
                <span className="text-[10px] font-mono text-white/40 bg-white/5 px-1.5 py-0.5 rounded">⌘K</span>
              </div>
            </button>

            <button
              onClick={() => {
                setVisible(false);
                onOpenProfile();
              }}
              className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm text-white/80 hover:text-white hover:bg-white/5 transition-all text-left"
            >
              <User className="w-4 h-4 text-blue-400" />
              <span>Open Profile</span>
            </button>

            <button
              onClick={() => {
                setVisible(false);
                router.push("/dashboard/progress");
              }}
              className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm text-white/80 hover:text-white hover:bg-white/5 transition-all text-left"
            >
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>View Progress</span>
            </button>

            <div className="h-[1px] bg-white/5 my-1.5" />

            <button
              onClick={() => {
                setVisible(false);
                handleSignOut();
              }}
              className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm text-red-400 hover:bg-red-950/20 transition-all text-left"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Command Palette Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-[999999] flex items-start justify-center pt-[15vh] px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-2xl bg-neutral-950/90 border border-white/10 rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] flex flex-col max-h-[60vh] text-white"
            >
              {/* Header Search Input */}
              <div className="flex items-center px-6 py-4.5 border-b border-white/10 relative">
                <Search className="w-5 h-5 text-white/50 mr-4 shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search pages, classes, progress, general tools..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  onKeyDown={handleSearchKeyDown}
                  className="w-full bg-transparent border-0 outline-none text-white text-base placeholder-white/40 focus:ring-0"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-xs text-white/40 bg-white/5 hover:bg-white/10 px-2 py-1 rounded-lg transition-all"
                >
                  ESC
                </button>
              </div>

              {/* Scrollable List */}
              <div className="flex-1 overflow-y-auto p-3 space-y-1.5 scrollbar-hide">
                {filteredPages.length === 0 ? (
                  <div className="py-12 text-center text-white/40">
                    <Compass className="w-8 h-8 mx-auto mb-3 opacity-30 animate-pulse" />
                    <p className="text-sm">No pages found matching "{searchQuery}"</p>
                  </div>
                ) : (
                  filteredPages.map((page, index) => {
                    const isSelected = index === selectedIndex;
                    return (
                      <button
                        key={page.url}
                        onClick={() => {
                          router.push(page.url);
                          setSearchOpen(false);
                        }}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`w-full flex items-start text-left px-4 py-3 rounded-2xl transition-all duration-150 relative ${
                          isSelected
                            ? "bg-white/[0.08] text-white shadow-[0_4px_16px_rgba(255,255,255,0.02)]"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/5 border border-white/10 mr-4.5 shrink-0 mt-0.5">
                          {page.category === "Classes" ? (
                            <BookOpen className="w-4 h-4 text-cyan-400" />
                          ) : page.category === "Core" ? (
                            <Sparkles className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Compass className="w-4 h-4 text-blue-400" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm truncate">{page.name}</span>
                            <span className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold ${
                              page.category === "Classes" ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" :
                              page.category === "Core" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                              "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                            }`}>
                              {page.category}
                            </span>
                          </div>
                          <p className="text-xs text-white/40 mt-1 truncate">{page.desc}</p>
                        </div>
                      </button>
                    );
                  })
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

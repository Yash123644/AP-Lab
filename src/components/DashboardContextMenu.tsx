"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, User, Calendar, LogOut, Compass, BookOpen } from "lucide-react";
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

  // Global & Dropdown Keyboard Shortcut Handler
  useEffect(() => {
    const handleKeys = (e: KeyboardEvent) => {
      const isCmdOrCtrl = e.metaKey || e.ctrlKey;
      const key = e.key.toLowerCase();

      // Check if user is typing in a text field
      const isEditing = document.activeElement && (
        document.activeElement.tagName === "INPUT" || 
        document.activeElement.tagName === "TEXTAREA" ||
        document.activeElement.getAttribute("contenteditable") === "true"
      );

      // Handle Escape key
      if (key === "escape") {
        if (visible) {
          e.preventDefault();
          setVisible(false);
        }
        return;
      }

      // 1. Global Commands: Cmd + Key (when user is not writing in input)
      if (isCmdOrCtrl) {
        if (isEditing) return;

        if (key === "s" || key === "k") {
          e.preventDefault();
          setSearchOpen(true);
          setVisible(false);
        } else if (key === "p") {
          e.preventDefault();
          onOpenProfile();
          setVisible(false);
        } else if (key === "g") {
          e.preventDefault();
          router.push("/dashboard/progress");
          setVisible(false);
        } else if (key === "e") {
          e.preventDefault();
          handleSignOut();
          setVisible(false);
        }
      } 
      // 2. Menu-Specific hotkeys (when dropdown is visible, e.g. pressing S, P, V, Q)
      else if (visible) {
        if (key === "s") {
          e.preventDefault();
          setSearchOpen(true);
          setVisible(false);
        } else if (key === "p") {
          e.preventDefault();
          onOpenProfile();
          setVisible(false);
        } else if (key === "g" || key === "v") {
          e.preventDefault();
          router.push("/dashboard/progress");
          setVisible(false);
        } else if (key === "e" || key === "q") {
          e.preventDefault();
          handleSignOut();
          setVisible(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, [visible, onOpenProfile, router]);

  // Hide context menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setVisible(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  // Focus input when Search opens
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
            initial={{ opacity: 0, filter: "blur(12px)", scale: 0.94 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0, filter: "blur(12px)", scale: 0.94 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="fixed z-[999999] w-52 rounded-xl bg-[#060608]/85 backdrop-blur-xl border border-white/10 p-1.5 shadow-[0_16px_50px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.07)] text-white/90"
            style={{
              top: `${Math.min(position.y, window.innerHeight - 200)}px`,
              left: `${Math.min(position.x, window.innerWidth - 220)}px`,
              backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 100%), url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjYiPjxyZWN0IHdpZHRoPSI2IiBoZWlnaHQ9IjYiIGZpbGw9InRyYW5zcGFyZW50Ii8+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjAuNSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA4Ii8+PGNpcmNsZSBjeD0iNCIgY3k9IjQiIHI9IjAuNSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA0Ii8+PC9zdmc+')",
              backgroundSize: "auto, 6px 6px",
            }}
          >
            <button
              onClick={() => {
                setVisible(false);
                setSearchOpen(true);
              }}
              className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all text-left"
            >
              <div className="flex items-center space-x-2.5">
                <Search className="w-3.5 h-3.5 text-white/40" />
                <span>Search</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-[9px] font-mono text-white/35 bg-white/5 border border-white/10 px-1 py-0.5 rounded">⌘S</span>
              </div>
            </button>

            <button
              onClick={() => {
                setVisible(false);
                onOpenProfile();
              }}
              className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all text-left"
            >
              <div className="flex items-center space-x-2.5">
                <User className="w-3.5 h-3.5 text-white/40" />
                <span>Profile</span>
              </div>
              <span className="text-[9px] font-mono text-white/35 bg-white/5 border border-white/10 px-1 py-0.5 rounded">⌘P</span>
            </button>

            <button
              onClick={() => {
                setVisible(false);
                router.push("/dashboard/progress");
              }}
              className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all text-left"
            >
              <div className="flex items-center space-x-2.5">
                <Calendar className="w-3.5 h-3.5 text-white/40" />
                <span>Progress</span>
              </div>
              <span className="text-[9px] font-mono text-white/35 bg-white/5 border border-white/10 px-1 py-0.5 rounded">⌘G</span>
            </button>

            <div className="h-[1px] bg-white/5 my-1" />

            <button
              onClick={() => {
                setVisible(false);
                handleSignOut();
              }}
              className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium text-red-400 hover:bg-red-950/20 hover:text-red-300 transition-all text-left"
            >
              <div className="flex items-center space-x-2.5">
                <LogOut className="w-3.5 h-3.5 opacity-60" />
                <span>Sign Out</span>
              </div>
              <span className="text-[9px] font-mono text-red-400/40 bg-red-950/20 border border-red-500/10 px-1 py-0.5 rounded">⌘E</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Command Palette Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-[9999999] flex items-start justify-center pt-[12vh] px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="relative w-full max-w-3xl bg-[#0a0b14]/95 backdrop-blur-3xl border border-white/15 rounded-3xl overflow-hidden shadow-[0_32px_100px_rgba(0,0,0,0.9),_inset_0_1px_1px_rgba(255,255,255,0.1)] flex flex-col max-h-[70vh] text-white"
            >
              {/* Subtle top glowing accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 pointer-events-none z-10" />

              {/* Header Search Input */}
              <div className="flex items-center px-6 py-4.5 border-b border-white/10 relative bg-white/[0.02]">
                <Search className="w-5 h-5 text-blue-400 mr-4 shrink-0 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search AP topics, pages, and account actions..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  onKeyDown={handleSearchKeyDown}
                  className="w-full bg-transparent border-0 outline-none text-white text-lg font-manrope font-semibold placeholder-white/30 focus:ring-0"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-[10px] font-mono tracking-widest text-white/50 bg-white/10 hover:bg-white/20 border border-white/15 px-2.5 py-1 rounded-lg transition-all shrink-0 shadow-sm"
                >
                  ESC
                </button>
              </div>

              {/* Scrollable List */}
              <div 
                data-lenis-prevent
                className="flex-1 overflow-y-auto p-3 space-y-1.5 scrollbar-hide"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none"
                }}
              >
                {filteredPages.length === 0 ? (
                  <div className="py-16 text-center text-white/40">
                    <Compass className="w-10 h-10 mx-auto mb-3 opacity-30 text-blue-400 animate-pulse" />
                    <p className="text-sm font-manrope font-medium">No results found matching "{searchQuery}"</p>
                  </div>
                ) : (
                  filteredPages.map((page, index) => {
                    const isSelected = index === selectedIndex;
                    const categoryColors: Record<string, { bg: string; text: string; border: string; iconColor: string }> = {
                      Core: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30", iconColor: "#3b82f6" },
                      Classes: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30", iconColor: "#a855f7" },
                      General: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30", iconColor: "#10b981" }
                    };
                    const colorStyle = categoryColors[page.category] || categoryColors.General;

                    return (
                      <button
                        key={page.url}
                        onClick={() => {
                          router.push(page.url);
                          setSearchOpen(false);
                        }}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`w-full flex items-center justify-between text-left px-5 py-3.5 rounded-2xl transition-all duration-150 border ${
                          isSelected
                            ? "bg-white/[0.08] border-white/20 text-white shadow-lg scale-[1.008]"
                            : "bg-transparent border-transparent text-white/70 hover:bg-white/[0.04]"
                        }`}
                      >
                        <div className="flex items-center space-x-4 min-w-0 mr-4">
                          <div 
                            className={`flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border shrink-0 transition-all ${
                              isSelected ? "border-white/25 bg-white/10 shadow-md" : "border-white/10"
                            }`}
                            style={{ borderColor: isSelected ? colorStyle.iconColor : "rgba(255,255,255,0.1)" }}
                          >
                            {page.category === "Classes" ? (
                              <BookOpen className="w-4.5 h-4.5" style={{ color: colorStyle.iconColor }} />
                            ) : (
                              <Compass className="w-4.5 h-4.5" style={{ color: colorStyle.iconColor }} />
                            )}
                          </div>
                          <div className="min-w-0">
                            <span className="font-manrope font-bold text-sm sm:text-base block leading-snug text-white">{page.name}</span>
                            <span className="text-xs text-white/40 block mt-0.5 truncate font-medium">{page.desc}</span>
                          </div>
                        </div>
                        
                        <span className={`text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-full uppercase shrink-0 font-bold border ${colorStyle.bg} ${colorStyle.text} ${colorStyle.border}`}>
                          {page.category}
                        </span>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Footer status bar */}
              <div className="flex items-center justify-between px-6 py-3 border-t border-white/10 bg-white/[0.02] text-[11px] font-mono text-white/40">
                <div className="flex items-center space-x-4">
                  <span><kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/80">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/80">↓</kbd> Navigate</span>
                  <span><kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/80">↵</kbd> Select</span>
                </div>
                <span>AP LAB Universal Search</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

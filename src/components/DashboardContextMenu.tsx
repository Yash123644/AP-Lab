"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, User, Calendar, LogOut, Compass, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { cn } from "@/lib/utils";

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
          <div className="fixed inset-0 z-[9999999] flex items-start justify-center pt-[15vh] px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Floating Container */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full max-w-xl flex flex-col space-y-3 z-10"
            >
              {/* Simplistic White Capsule Search Bar matching uploaded image */}
              <div className="relative w-full bg-white rounded-full shadow-[0_25px_70px_rgba(0,0,0,0.6)] flex items-center px-6 py-4">
                <Search className="w-5 h-5 text-neutral-400 mr-3.5 shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  onKeyDown={handleSearchKeyDown}
                  className="w-full bg-transparent border-0 outline-none text-black text-lg font-manrope font-medium placeholder-neutral-400 focus:ring-0"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-[10px] font-mono font-bold tracking-widest text-neutral-400 hover:text-black bg-neutral-100 hover:bg-neutral-200 px-2.5 py-1 rounded-full transition-all shrink-0 ml-2"
                >
                  ESC
                </button>
              </div>

              {/* Minimalist Floating Results Dropdown */}
              {searchQuery.trim() !== "" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="w-full bg-[#0c0d14]/95 backdrop-blur-2xl border border-white/12 rounded-3xl overflow-hidden shadow-2xl p-2 max-h-[50vh] overflow-y-auto custom-scrollbar space-y-1"
                >
                  {filteredPages.length === 0 ? (
                    <div className="py-8 text-center text-white/40 font-manrope text-sm">
                      No matching results found.
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
                          className={cn(
                            "w-full flex items-center justify-between px-5 py-3.5 rounded-2xl transition-all text-left",
                            isSelected 
                              ? "bg-white text-black shadow-md font-semibold" 
                              : "text-white/70 hover:bg-white/5 hover:text-white"
                          )}
                        >
                          <div className="flex items-center space-x-3.5 min-w-0 mr-3">
                            <div className={cn(
                              "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border transition-colors",
                              isSelected ? "bg-black/5 border-black/10 text-black" : "bg-white/5 border-white/10 text-white/60"
                            )}>
                              {page.category === "Classes" ? <BookOpen className="w-4 h-4" /> : <Compass className="w-4 h-4" />}
                            </div>
                            <div className="min-w-0">
                              <span className="text-sm font-manrope block leading-tight truncate">{page.name}</span>
                              <span className={cn(
                                "text-xs block mt-0.5 truncate font-medium",
                                isSelected ? "text-neutral-600" : "text-white/40"
                              )}>{page.desc}</span>
                            </div>
                          </div>
                          <span className={cn(
                            "text-[10px] font-mono tracking-widest uppercase shrink-0 font-bold px-2.5 py-1 rounded-full border",
                            isSelected ? "bg-black/10 border-black/20 text-black" : "bg-white/5 border-white/10 text-white/40"
                          )}>
                            {page.category}
                          </span>
                        </button>
                      );
                    })
                  )}
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

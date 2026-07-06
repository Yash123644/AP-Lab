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

  // Keyboard shortcut listener when menu is active
  useEffect(() => {
    if (!visible) return;

    const handleMenuKeys = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      
      const key = e.key.toLowerCase();
      if (key === "s") {
        e.preventDefault();
        setVisible(false);
        setSearchOpen(true);
      } else if (key === "p") {
        e.preventDefault();
        setVisible(false);
        onOpenProfile();
      } else if (key === "v") {
        e.preventDefault();
        setVisible(false);
        router.push("/dashboard/progress");
      } else if (key === "q") {
        e.preventDefault();
        setVisible(false);
        handleSignOut();
      } else if (key === "escape") {
        e.preventDefault();
        setVisible(false);
      }
    };

    window.addEventListener("keydown", handleMenuKeys);
    return () => window.removeEventListener("keydown", handleMenuKeys);
  }, [visible, onOpenProfile, router]);

  // Global search trigger (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleGlobalSearch = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleGlobalSearch);
    return () => window.removeEventListener("keydown", handleGlobalSearch);
  }, []);

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
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.1 }}
            className="fixed z-[999999] w-52 rounded-xl bg-neutral-900/90 backdrop-blur-2xl border border-white/10 p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.05)] text-white/90"
            style={{
              top: `${Math.min(position.y, window.innerHeight - 200)}px`,
              left: `${Math.min(position.x, window.innerWidth - 220)}px`,
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
                <span className="text-[9px] font-mono text-white/30 bg-white/5 border border-white/10 px-1 py-0.2 rounded">S</span>
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
              <span className="text-[9px] font-mono text-white/30 bg-white/5 border border-white/10 px-1 py-0.2 rounded">P</span>
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
              <span className="text-[9px] font-mono text-white/30 bg-white/5 border border-white/10 px-1 py-0.2 rounded">V</span>
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
              <span className="text-[9px] font-mono text-red-400/40 bg-red-950/20 border border-red-500/10 px-1 py-0.2 rounded">Q</span>
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
              initial={{ opacity: 0, y: -16, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.99 }}
              transition={{ type: "spring", duration: 0.35 }}
              className="relative w-full max-w-3xl bg-neutral-950 border border-white/10 rounded-2xl overflow-hidden shadow-[0_32px_100px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.05)] flex flex-col max-h-[70vh] text-white"
            >
              {/* Header Search Input */}
              <div className="flex items-center px-6 py-5 border-b border-white/5 relative">
                <Search className="w-5 h-5 text-white/30 mr-4.5 shrink-0" />
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
                  className="w-full bg-transparent border-0 outline-none text-white text-lg placeholder-white/30 focus:ring-0"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-[10px] font-mono tracking-widest text-white/40 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md transition-all shrink-0 hover:bg-white/10"
                >
                  ESC
                </button>
              </div>

              {/* Scrollable List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-1 scrollbar-hide">
                {filteredPages.length === 0 ? (
                  <div className="py-16 text-center text-white/30">
                    <Compass className="w-10 h-10 mx-auto mb-3 opacity-20" />
                    <p className="text-sm font-medium">No results found matching "{searchQuery}"</p>
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
                        className={`w-full flex items-center justify-between text-left px-5 py-4 rounded-xl transition-all duration-100 ${
                          isSelected
                            ? "bg-white/[0.05] text-white shadow-sm"
                            : "text-white/70 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center space-x-4 min-w-0 mr-4">
                          <div className={`flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/5 shrink-0 transition-colors ${
                            isSelected ? "border-white/15 bg-white/10" : ""
                          }`}>
                            {page.category === "Classes" ? (
                              <BookOpen className="w-4 h-4 text-white/50" />
                            ) : (
                              <Compass className="w-4 h-4 text-white/50" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <span className="font-semibold text-sm block leading-none">{page.name}</span>
                            <span className="text-xs text-white/40 block mt-1.5 truncate leading-none font-medium">{page.desc}</span>
                          </div>
                        </div>
                        
                        <span className="text-[10px] font-mono tracking-[0.15em] text-white/30 uppercase shrink-0 font-bold">
                          {page.category}
                        </span>
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

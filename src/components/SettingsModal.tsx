"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Moon, Sun, User, Palette, Check, Sparkles } from "lucide-react";
import { useProgress } from "@/context/ProgressContext";
import { useAuth } from "@/context/AuthContext";
import { updateProfile } from "firebase/auth";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const COURSE_BG_THEMES = [
  {
    id: "dark-matrix",
    name: "Dark Matrix (Default)",
    desc: "Crisp dot matrix overlay with 8-bit academic symbols",
    previewBg: "bg-[#03040a] border-emerald-500/40",
    gradient: "from-blue-600/20 via-purple-600/10 to-emerald-500/20"
  },
  {
    id: "cosmic-nebula",
    name: "Cosmic Nebula",
    desc: "Deep indigo and glowing purple cosmic ambient light",
    previewBg: "bg-[#09071a] border-purple-500/40",
    gradient: "from-purple-900/40 via-indigo-900/30 to-pink-600/20"
  },
  {
    id: "cyber-grid",
    name: "Cyber Grid",
    desc: "Futuristic cyan and emerald neon grid overlay",
    previewBg: "bg-[#040d12] border-cyan-500/40",
    gradient: "from-cyan-600/30 via-teal-600/20 to-emerald-600/30"
  },
  {
    id: "minimal-slate",
    name: "Minimal Slate",
    desc: "Ultra-sleek charcoal slate with clean monochrome tones",
    previewBg: "bg-[#0d0e12] border-white/20",
    gradient: "from-white/10 via-neutral-800/40 to-neutral-900/60"
  },
  {
    id: "golden-starlight",
    name: "Golden Starlight",
    desc: "Warm starlight with rich amber and gold highlights",
    previewBg: "bg-[#0f0b06] border-amber-500/40",
    gradient: "from-amber-600/30 via-orange-600/20 to-yellow-600/20"
  }
];

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const { progress, updatePreferences } = useProgress();
  const { currentUser } = useAuth();
  
  const [selectedTheme, setSelectedTheme] = useState<"dark" | "light">("dark");
  const [selectedBg, setSelectedBg] = useState<string>("dark-matrix");
  const [nameInput, setNameInput] = useState<string>("");
  const [savingName, setSavingName] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (progress) {
      if (progress.theme) setSelectedTheme(progress.theme);
      if (progress.courseBg) setSelectedBg(progress.courseBg);
      setNameInput(progress.displayName || currentUser?.displayName || "");
    }
  }, [progress, currentUser]);

  const handleThemeChange = async (theme: "dark" | "light") => {
    setSelectedTheme(theme);
    if (updatePreferences) {
      await updatePreferences({ theme });
    }
  };

  const handleBgChange = async (bgId: string) => {
    setSelectedBg(bgId);
    if (updatePreferences) {
      await updatePreferences({ courseBg: bgId });
    }
  };

  const handleSaveName = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim()) return;

    setSavingName(true);
    try {
      if (currentUser) {
        await updateProfile(currentUser, { displayName: nameInput.trim() });
      }
      if (updatePreferences) {
        await updatePreferences({ displayName: nameInput.trim() });
      }
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2500);
    } catch (err) {
      console.error("Error saving display name:", err);
    } finally {
      setSavingName(false);
    }
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className="relative w-full max-w-xl bg-[#0a0c16]/95 border border-white/15 rounded-[32px] shadow-[0_25px_80px_rgba(0,0,0,0.85)] p-6 sm:p-8 text-white z-10 overflow-hidden"
        >
          {/* Ambient Glow background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-purple/10 blur-[90px] rounded-full pointer-events-none" />

          {/* Modal Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 relative z-10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-manrope font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                  Workspace Settings
                </h3>
                <p className="text-white/50 text-xs font-inter mt-0.5">
                  Customize your personal appearance & preferences
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-6 py-6 relative z-10">

            {/* 1. Theme Selector (Dark / Light) */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold text-white/50 uppercase tracking-widest flex items-center gap-2">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Color Mode</span>
              </label>

              <div className="grid grid-cols-2 gap-3">
                {/* Dark Mode */}
                <button
                  type="button"
                  onClick={() => handleThemeChange("dark")}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${
                    selectedTheme === "dark"
                      ? "bg-emerald-950/40 border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                      : "bg-white/[0.03] border-white/10 hover:bg-white/[0.07]"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Moon className="w-5 h-5 text-emerald-400" />
                    <div className="text-left">
                      <p className="font-manrope font-bold text-sm text-white">Dark Mode</p>
                      <p className="text-[10px] text-white/40 font-mono">High-contrast dark UI</p>
                    </div>
                  </div>
                  {selectedTheme === "dark" && (
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-black">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </button>

                {/* Light Mode */}
                <button
                  type="button"
                  onClick={() => handleThemeChange("light")}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${
                    selectedTheme === "light"
                      ? "bg-emerald-950/40 border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                      : "bg-white/[0.03] border-white/10 hover:bg-white/[0.07]"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Sun className="w-5 h-5 text-amber-400" />
                    <div className="text-left">
                      <p className="font-manrope font-bold text-sm text-white">Light Mode</p>
                      <p className="text-[10px] text-white/40 font-mono">Clean bright theme</p>
                    </div>
                  </div>
                  {selectedTheme === "light" && (
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-black">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* 2. Display Name Editor */}
            <form onSubmit={handleSaveName} className="space-y-3 pt-2">
              <label className="text-xs font-mono font-bold text-white/50 uppercase tracking-widest flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-blue-400" />
                <span>Display Name</span>
              </label>
              
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder="Enter display name..."
                  className="flex-1 bg-white/[0.05] border border-white/15 rounded-2xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/60 font-manrope font-semibold text-sm transition-colors"
                />
                <button
                  type="submit"
                  disabled={savingName || !nameInput.trim()}
                  className="px-5 py-3 rounded-2xl bg-white text-black font-manrope font-extrabold text-xs hover:bg-neutral-200 transition-colors disabled:opacity-50 shrink-0 flex items-center gap-1.5"
                >
                  {savingName ? "Saving..." : savedSuccess ? "Saved!" : "Save Name"}
                </button>
              </div>
            </form>

            {/* 3. Course Page Background Image Theme */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-mono font-bold text-white/50 uppercase tracking-widest flex items-center gap-2">
                <Palette className="w-3.5 h-3.5 text-purple-400" />
                <span>Course Page Background Theme</span>
              </label>

              <div className="space-y-2.5 max-h-[220px] overflow-y-auto custom-scrollbar pr-1">
                {COURSE_BG_THEMES.map((theme) => {
                  const isSelected = selectedBg === theme.id;
                  return (
                    <button
                      key={theme.id}
                      type="button"
                      onClick={() => handleBgChange(theme.id)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-2xl border transition-all duration-300 text-left ${
                        isSelected
                          ? "bg-white/10 border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                          : "bg-white/[0.03] border-white/10 hover:bg-white/[0.07]"
                      }`}
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className={`w-10 h-10 rounded-xl ${theme.previewBg} border flex items-center justify-center shadow-inner overflow-hidden relative`}>
                          <div className={`absolute inset-0 bg-gradient-to-tr ${theme.gradient} opacity-80`} />
                        </div>
                        <div>
                          <p className="font-manrope font-bold text-sm text-white">{theme.name}</p>
                          <p className="text-[11px] text-white/40 font-inter">{theme.desc}</p>
                        </div>
                      </div>

                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-black shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Footer Close */}
          <div className="pt-4 border-t border-white/10 flex justify-end relative z-10">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-manrope font-bold text-xs transition-colors"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}

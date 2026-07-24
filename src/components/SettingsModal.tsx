"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Moon, Sun, User, Palette, Check, Settings, Info } from "lucide-react";
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
    desc: "Crisp dot matrix overlay with floating 8-bit academic icons",
    previewBg: "bg-[#03040a] border-white/20",
    accentDot: "bg-blue-400"
  },
  {
    id: "cosmic-nebula",
    name: "Cosmic Nebula",
    desc: "Deep indigo & glowing purple cosmic dust ambient light",
    previewBg: "bg-[#09071a] border-purple-500/30",
    accentDot: "bg-purple-400"
  },
  {
    id: "cyber-grid",
    name: "Cyber Grid",
    desc: "Futuristic cyan & emerald neon grid with laser scan beam",
    previewBg: "bg-[#040d12] border-cyan-500/30",
    accentDot: "bg-cyan-400"
  },
  {
    id: "minimal-slate",
    name: "Minimal Slate",
    desc: "Ultra-sleek charcoal slate with clean geometric lines",
    previewBg: "bg-[#0d0e12] border-white/15",
    accentDot: "bg-neutral-300"
  },
  {
    id: "golden-starlight",
    name: "Golden Starlight",
    desc: "Warm dark amber & gold starlight particles drifting in 3D",
    previewBg: "bg-[#0f0b06] border-amber-500/30",
    accentDot: "bg-amber-400"
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
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-lg max-h-[90vh] flex flex-col bg-[#080910] border border-white/10 rounded-2xl p-6 sm:p-7 text-white z-10 overflow-y-auto custom-scrollbar shadow-2xl"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80">
                <Settings className="w-4.5 h-4.5" />
              </div>
              <div>
                <h3 className="font-manrope font-bold text-lg text-white tracking-tight">
                  Settings
                </h3>
                <p className="text-white/40 text-xs font-inter">
                  Manage interface theme & account parameters
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-6 py-5 relative z-10">

            {/* 1. Theme Selector (Dark / Light Toggle Switch) */}
            <div className="space-y-2.5">
              <label className="text-[11px] font-mono font-bold text-white/40 uppercase tracking-widest flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-white/60" />
                <span>Color Theme Mode</span>
              </label>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${selectedTheme === "light" ? "bg-amber-500/20 border border-amber-500/30 text-amber-400" : "bg-blue-500/20 border border-blue-500/30 text-blue-400"}`}>
                    {selectedTheme === "light" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </div>
                  <div>
                    <p className="font-manrope font-semibold text-xs text-white">
                      {selectedTheme === "light" ? "Light Theme" : "Dark Theme"}
                    </p>
                    <p className="text-[10px] text-white/40 font-inter">
                      {selectedTheme === "light" ? "Active bright contrast mode" : "Active dark obsidian mode"}
                    </p>
                  </div>
                </div>

                {/* Sliding Toggle Switch */}
                <button
                  type="button"
                  onClick={() => handleThemeChange(selectedTheme === "light" ? "dark" : "light")}
                  className={`w-12 h-6.5 rounded-full p-1 transition-colors duration-300 flex items-center cursor-pointer ${
                    selectedTheme === "light" ? "bg-amber-400 justify-end" : "bg-white/20 justify-start"
                  }`}
                  aria-label="Toggle light/dark theme"
                >
                  <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="w-4.5 h-4.5 rounded-full bg-white shadow-md flex items-center justify-center"
                  >
                    {selectedTheme === "light" ? (
                      <Sun className="w-3 h-3 text-amber-600" />
                    ) : (
                      <Moon className="w-3 h-3 text-slate-900" />
                    )}
                  </motion.div>
                </button>
              </div>
            </div>

            {/* 2. Display Name Editor */}
            <form onSubmit={handleSaveName} className="space-y-2.5">
              <label className="text-[11px] font-mono font-bold text-white/40 uppercase tracking-widest flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-white/60" />
                <span>Account Display Name</span>
              </label>
              
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder="Enter display name..."
                  className="flex-1 bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-white/20 focus:outline-none focus:border-white/30 font-manrope font-medium text-xs transition-colors"
                />
                <button
                  type="submit"
                  disabled={savingName || !nameInput.trim()}
                  className="px-4 py-2.5 rounded-xl bg-white text-black font-manrope font-bold text-xs hover:bg-neutral-200 transition-colors disabled:opacity-50 shrink-0 cursor-pointer"
                >
                  {savingName ? "Saving..." : savedSuccess ? "Saved" : "Save"}
                </button>
              </div>
            </form>

            {/* 3. Course Page Background Image Theme */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-mono font-bold text-white/40 uppercase tracking-widest flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-white/60" />
                  <span>Course Page Background Theme</span>
                </label>
              </div>

              {/* Disclaimer Notice */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[11px] font-inter">
                <Info className="w-3.5 h-3.5 shrink-0 text-blue-400" />
                <span>Note: Custom course background themes are applied during Dark Mode.</span>
              </div>

              <div className="space-y-2 pt-1">
                {COURSE_BG_THEMES.map((theme) => {
                  const isSelected = selectedBg === theme.id;
                  return (
                    <button
                      key={theme.id}
                      type="button"
                      onClick={() => handleBgChange(theme.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-200 text-left cursor-pointer ${
                        isSelected
                          ? "bg-white/10 border-white/30 text-white shadow-sm"
                          : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] text-white/70"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${theme.accentDot} shrink-0`} />
                        <div>
                          <p className="font-manrope font-bold text-xs text-white">{theme.name}</p>
                          <p className="text-[10px] text-white/40 font-inter">{theme.desc}</p>
                        </div>
                      </div>

                      {isSelected && (
                        <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-black shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Footer Close */}
          <div className="pt-3 border-t border-white/10 flex justify-end relative z-10">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-manrope font-bold text-xs transition-colors"
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

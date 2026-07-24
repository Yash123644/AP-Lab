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
    miniPreviewClass: "bg-[#03040a] relative overflow-hidden border border-white/20",
    renderMini: () => (
      <div className="absolute inset-0 bg-[#03040a]">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "6px 6px" }} />
        <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400 blur-[1px]" />
      </div>
    )
  },
  {
    id: "cosmic-nebula",
    name: "Cosmic Nebula",
    desc: "Deep indigo & glowing purple cosmic dust ambient light",
    miniPreviewClass: "bg-[#09071a] relative overflow-hidden border border-purple-500/30",
    renderMini: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-[#09071a] via-[#1a0c33] to-[#05030d]">
        <div className="absolute top-1 left-2 w-3 h-3 rounded-full bg-purple-500/50 blur-[3px]" />
        <div className="absolute bottom-1 right-2 w-4 h-4 rounded-full bg-indigo-500/40 blur-[4px]" />
      </div>
    )
  },
  {
    id: "cyber-grid",
    name: "Cyber Grid",
    desc: "Futuristic cyan & emerald neon grid with laser scan beam",
    miniPreviewClass: "bg-[#040d12] relative overflow-hidden border border-cyan-500/30",
    renderMini: () => (
      <div className="absolute inset-0 bg-[#040d12]">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(to right, rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(6,182,212,0.3) 1px, transparent 1px)", backgroundSize: "8px 8px" }} />
        <div className="absolute inset-x-0 top-1.5 h-[1px] bg-cyan-400 shadow-[0_0_6px_#06b6d4]" />
      </div>
    )
  },
  {
    id: "minimal-slate",
    name: "Minimal Slate",
    desc: "Ultra-sleek charcoal slate with clean geometric lines",
    miniPreviewClass: "bg-[#0d0e12] relative overflow-hidden border border-white/15",
    renderMini: () => (
      <div className="absolute inset-0 bg-[#0d0e12]">
        <div className="absolute top-0 left-0 bottom-0 w-1/3 bg-white/[0.04]" />
        <div className="absolute bottom-1 left-2 right-2 h-[1px] bg-white/20" />
      </div>
    )
  },
  {
    id: "golden-starlight",
    name: "Golden Starlight",
    desc: "Warm dark amber & gold starlight particles drifting in 3D",
    miniPreviewClass: "bg-[#0f0b06] relative overflow-hidden border border-amber-500/30",
    renderMini: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0b06] via-[#1a1207] to-[#080502]">
        <div className="absolute top-1.5 left-2 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_4px_#fbbf24]" />
        <div className="absolute bottom-2 right-3 w-1 h-1 rounded-full bg-yellow-300 shadow-[0_0_4px_#fde047]" />
      </div>
    )
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

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleThemeChange = (theme: "dark" | "light") => {
    setSelectedTheme(theme);
    if (updatePreferences) {
      updatePreferences({ theme });
    }
  };

  const handleBgChange = (bgId: string) => {
    setSelectedBg(bgId);
    if (updatePreferences) {
      updatePreferences({ courseBg: bgId });
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
          className="relative w-full max-w-lg bg-[#080910] border border-white/10 rounded-2xl p-6 text-white z-10 shadow-2xl flex flex-col max-h-[85vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
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
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Modal Content */}
          <div className="space-y-6 py-5 overflow-y-auto custom-scrollbar flex-1 pr-1" onWheel={(e) => e.stopPropagation()}>

            {/* 1. Theme Selector (Apple-Style Minimal Toggle Switch) */}
            <div className="space-y-2.5">
              <label className="text-[11px] font-mono font-bold text-white/40 uppercase tracking-widest flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-white/60" />
                <span>Color Theme Mode</span>
              </label>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${selectedTheme === "light" ? "bg-white/15 text-white" : "bg-blue-500/20 text-blue-400"}`}>
                    {selectedTheme === "light" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </div>
                  <div>
                    <p className="font-manrope font-semibold text-xs text-white">
                      {selectedTheme === "light" ? "Light Theme" : "Dark Theme"}
                    </p>
                    <p className="text-[10px] text-white/40 font-inter">
                      {selectedTheme === "light" ? "Bright contrast mode" : "Dark obsidian mode"}
                    </p>
                  </div>
                </div>

                {/* Apple-Style Minimal Toggle Switch */}
                <button
                  type="button"
                  onClick={() => handleThemeChange(selectedTheme === "light" ? "dark" : "light")}
                  className={`w-12 h-6.5 rounded-full p-1 transition-colors duration-300 flex items-center cursor-pointer ${
                    selectedTheme === "light" ? "bg-[#e9e9ea] justify-end" : "bg-white/20 justify-start"
                  }`}
                  aria-label="Toggle light/dark theme"
                >
                  <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 600, damping: 35 }}
                    className="w-4.5 h-4.5 rounded-full bg-white shadow-md"
                  />
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

              {/* Actual Background Visual Mini Preview Rectangles */}
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
                          ? "bg-white/10 border-white/40 text-white shadow-lg"
                          : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] text-white/70"
                      }`}
                    >
                      <div className="flex items-center space-x-3.5">
                        {/* Mini Actual Background Visual Preview */}
                        <div className={`w-10 h-7 rounded-lg shrink-0 ${theme.miniPreviewClass}`}>
                          {theme.renderMini()}
                        </div>

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
          <div className="pt-3 border-t border-white/10 flex justify-end shrink-0">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-manrope font-bold text-xs transition-colors cursor-pointer"
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

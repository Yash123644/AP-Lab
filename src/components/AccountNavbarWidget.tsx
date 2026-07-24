"use client";

import React, { useState } from "react";
import { Settings } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useProgress } from "@/context/ProgressContext";
import { SettingsModal } from "@/components/SettingsModal";

interface AccountNavbarWidgetProps {
  onOpenProfile: () => void;
}

export function AccountNavbarWidget({ onOpenProfile }: AccountNavbarWidgetProps) {
  const { currentUser } = useAuth();
  const { progress } = useProgress();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const displayName = progress?.displayName || currentUser?.displayName || "Scholar";
  const initials = displayName
    ? displayName.split(" ").map((n) => n[0]).join("").toUpperCase().substring(0, 2)
    : "AP";
  const photoURL = currentUser?.photoURL || progress?.photoURL || "";
  const totalXp = progress?.xp || 0;
  const level = progress?.level || 1;

  return (
    <>
      {/* Single Unified Rectangle Capsule containing Profile + Gear Icon inside */}
      <div 
        className="flex items-center space-x-2.5 px-3 py-1.5 rounded-2xl sm:rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg select-none group"
      >
        {/* Left Section: Clickable Profile Info (Avatar, Name, XP) */}
        <button
          onClick={onOpenProfile}
          className="flex items-center space-x-2.5 cursor-pointer text-left focus:outline-none"
          title="View Account Profile"
        >
          {/* Avatar Picture */}
          <div className="relative shrink-0">
            {photoURL ? (
              <img
                src={photoURL}
                alt={displayName}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl object-cover border border-white/20 group-hover:border-white/40 transition-colors"
              />
            ) : (
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white/90 font-manrope font-bold text-xs">
                {initials}
              </div>
            )}
          </div>

          {/* Account Name & Total XP */}
          <div className="flex flex-col items-start text-left min-w-0">
            <span className="font-manrope font-extrabold text-xs sm:text-sm text-white tracking-tight leading-none group-hover:text-emerald-400 transition-colors truncate max-w-[90px] sm:max-w-[120px]">
              {displayName}
            </span>
            <span className="font-mono font-bold text-[9px] sm:text-[10px] text-white/50 tracking-wider mt-0.5 whitespace-nowrap">
              Lvl {level} • {totalXp.toLocaleString()} XP
            </span>
          </div>
        </button>

        {/* Subtle Vertical Divider */}
        <div className="w-[1px] h-5 bg-white/15 mx-0.5 shrink-0" />

        {/* Right Section: Settings Gear Icon inside the exact same rectangle */}
        <button
          onClick={() => setIsSettingsOpen(true)}
          className="p-1 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-all cursor-pointer shrink-0 focus:outline-none"
          title="Workspace Settings"
        >
          <Settings className="w-4 h-4 text-white/80 hover:text-white hover:rotate-180 transition-transform duration-700 ease-in-out" />
        </button>
      </div>

      {/* Settings Modal (Portalized to document.body) */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </>
  );
}

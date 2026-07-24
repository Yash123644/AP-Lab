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

  const displayName = progress?.displayName || currentUser?.displayName || "Yash Patil";
  const initials = displayName
    ? displayName.split(" ").map((n) => n[0]).join("").toUpperCase().substring(0, 2)
    : "AP";
  const photoURL = currentUser?.photoURL || progress?.photoURL || "";
  const totalXp = progress?.xp || 0;
  const level = progress?.level || 1;

  return (
    <>
      <div className="flex items-center space-x-2 z-20">
        {/* Smooth Rectangle Account Display Capsule */}
        <button
          onClick={onOpenProfile}
          className="flex items-center space-x-2.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 hover:border-white/30 transition-all duration-300 group cursor-pointer shadow-lg active:scale-95"
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
          <div className="flex flex-col items-start text-left min-w-0 pr-1">
            <span className="font-manrope font-extrabold text-xs sm:text-sm text-white tracking-tight leading-none group-hover:text-emerald-400 transition-colors truncate max-w-[100px] sm:max-w-[120px]">
              {displayName}
            </span>
            <span className="font-mono font-bold text-[9px] sm:text-[10px] text-white/50 tracking-wider mt-0.5">
              Lvl {level} • {totalXp.toLocaleString()} XP
            </span>
          </div>
        </button>

        {/* Settings Gear Icon Button */}
        <button
          onClick={() => setIsSettingsOpen(true)}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 hover:border-white/30 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 group cursor-pointer shadow-lg active:scale-95 shrink-0"
          title="Workspace Settings"
        >
          <Settings className="w-4 h-4 sm:w-4.5 sm:h-4.5 group-hover:rotate-180 transition-transform duration-700 ease-in-out text-white/90" />
        </button>
      </div>

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </>
  );
}

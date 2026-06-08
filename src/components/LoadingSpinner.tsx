"use client";

import { cn } from "@/lib/utils";
import styles from "./LoadingSpinner.module.css";

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center bg-[#020308] min-h-screen w-full select-none overflow-hidden", className)}>
      <div className={styles.wrapper}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.shadow}></div>
        <div className={styles.shadow}></div>
        <div className={styles.shadow}></div>
      </div>
    </div>
  );
}

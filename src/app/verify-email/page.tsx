"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { auth } from "@/lib/firebase";
import { sendEmailVerification, signOut } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, LogOut, CheckCircle2, RotateCw } from "lucide-react";

export default function VerifyEmailPage() {
  const { currentUser, loading } = useAuth();
  const router = useRouter();
  const [resendCooldown, setResendCooldown] = useState(0);
  const [isResending, setIsResending] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [isVerified, setIsVerified] = useState(false);

  // Check verification state periodically
  useEffect(() => {
    if (loading) return;
    if (!currentUser) {
      router.push("/");
      return;
    }

    if (currentUser.emailVerified) {
      setIsVerified(true);
      const timer = setTimeout(() => {
        router.push("/onboarding");
      }, 2000);
      return () => clearTimeout(timer);
    }

    // Poll the user's auth state by reloading the user object every 3 seconds
    const interval = setInterval(async () => {
      try {
        await currentUser.reload();
        if (currentUser.emailVerified) {
          setIsVerified(true);
          clearInterval(interval);
          setTimeout(() => {
            router.push("/onboarding");
          }, 2000);
        }
      } catch (err) {
        console.error("Error checking verification state:", err);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentUser, loading, router]);

  // Handle resend cooldown countdown
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setTimeout(() => {
      setResendCooldown((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [resendCooldown]);

  const handleResend = async () => {
    if (!currentUser || resendCooldown > 0 || isResending) return;

    try {
      setIsResending(true);
      setMessage(null);
      await sendEmailVerification(currentUser);
      setMessage({ type: "success", text: "Verification email resent successfully!" });
      setResendCooldown(60); // 60 seconds cooldown
    } catch (err: any) {
      console.error("Resend error:", err);
      setMessage({
        type: "error",
        text: err?.message || "Failed to resend verification email. Please try again.",
      });
    } finally {
      setIsResending(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020308]">
        <div className="flex flex-col items-center space-y-4">
          <RotateCw className="w-12 h-12 text-medical-teal animate-spin" />
          <p className="text-white/60 font-manrope">Loading account info...</p>
        </div>
      </div>
    );
  }

  if (!currentUser) return null;

  return (
    <div className="min-h-screen bg-[#020308] text-white flex items-center justify-center p-6 relative overflow-hidden font-inter select-none">
      {/* Decorative Interactive Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-medical-teal/15 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/15 blur-[140px] pointer-events-none z-0" />

      {/* Premium Glassmorphic Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md bg-white/[0.01] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-2xl shadow-2xl flex flex-col items-center text-center"
      >
        <AnimatePresence mode="wait">
          {!isVerified ? (
            <motion.div
              key="verifying"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center w-full"
            >
              {/* Pulse Animated Mail Circle */}
              <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-medical-teal/20 rounded-full blur-md"
                />
                <div className="w-20 h-20 rounded-full bg-medical-teal/10 border border-medical-teal/30 flex items-center justify-center shadow-[0_0_20px_rgba(32,201,151,0.2)]">
                  <Mail className="w-10 h-10 text-medical-teal" />
                </div>
              </div>

              <h1 className="text-3xl font-bold font-manrope tracking-tight mb-4 text-white">
                Authorize Your Email
              </h1>
              
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
                We've sent a verification link to <br />
                <span className="text-medical-teal font-medium select-text">{currentUser.email}</span>.<br />
                Click the link in your email to activate your account and start learning.
              </p>

              {/* Status Indicator */}
              <div className="flex items-center space-x-2 bg-white/5 border border-white/5 px-4 py-2.5 rounded-full mb-8">
                <RotateCw className="w-4 h-4 text-medical-teal/80 animate-spin" />
                <span className="text-xs text-white/50 font-medium tracking-wide uppercase">
                  Waiting for verification...
                </span>
              </div>

              {/* Feedback Message */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-xs p-3.5 rounded-xl border w-full mb-6 ${
                    message.type === "success"
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                      : "bg-rose-500/10 border-rose-500/20 text-rose-400"
                  }`}
                >
                  {message.text}
                </motion.div>
              )}

              {/* Action Buttons */}
              <div className="w-full space-y-4">
                <button
                  onClick={handleResend}
                  disabled={resendCooldown > 0 || isResending}
                  className="w-full py-4 px-6 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/90 disabled:bg-white/10 disabled:text-white/40 transition-all duration-300 shadow-lg shadow-white/5 flex items-center justify-center gap-2 group"
                >
                  {isResending ? (
                    <RotateCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <span>
                        {resendCooldown > 0
                          ? `Resend Email in ${resendCooldown}s`
                          : "Resend Verification Email"}
                      </span>
                      {resendCooldown === 0 && (
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      )}
                    </>
                  )}
                </button>

                <button
                  onClick={handleSignOut}
                  className="w-full py-4 px-6 rounded-xl bg-transparent hover:bg-white/5 border border-white/10 hover:border-white/20 text-white/60 hover:text-white font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Use different email / Sign Out</span>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="verified"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center w-full py-6"
            >
              <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.25, opacity: [0, 0.4, 0] }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute inset-0 bg-emerald-500/30 rounded-full blur-md"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                </motion.div>
              </div>

              <h1 className="text-3xl font-bold font-manrope tracking-tight mb-4 text-white">
                Email Authorized!
              </h1>
              
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
                Your email has been verified successfully. <br />
                We are setting up your workspace...
              </p>

              <RotateCw className="w-5 h-5 text-emerald-400 animate-spin mt-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

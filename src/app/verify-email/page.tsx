"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, LogOut, CheckCircle2, RotateCw } from "lucide-react";

export default function VerifyEmailPage() {
  const { currentUser, loading } = useAuth();
  const router = useRouter();

  const [otp, setOtp] = useState<string[]>(Array(5).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [resendCooldown, setResendCooldown] = useState(0);
  const [isResending, setIsResending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [isVerified, setIsVerified] = useState(false);

  // Redirect if user is not logged in or already verified
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
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentUser, loading, router]);

  // Handle resend cooldown countdown
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setTimeout(() => {
      setResendCooldown((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [resendCooldown]);

  // Auto-focus first input on mount
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [currentUser]);

  const handleChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return; // Only allow numbers

    const newOtp = [...otp];
    // Take only the last character entered
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Auto-focus next input if a digit is entered
    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        // If current input is empty, focus previous input and clear it
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputRefs.current[index - 1]?.focus();
      } else {
        // Clear current input
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();
    if (isNaN(Number(pastedData))) return; // Only allow numeric pastes

    const pastedDigits = pastedData.substring(0, 5).split("");
    const newOtp = [...otp];
    
    pastedDigits.forEach((digit, idx) => {
      if (idx < 5) {
        newOtp[idx] = digit;
      }
    });
    setOtp(newOtp);

    // Focus last filled input or the 5th input
    const focusIndex = Math.min(pastedDigits.length, 4);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleVerify = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const code = otp.join("");
    if (code.length < 5 || !currentUser || isVerifying) return;

    try {
      setIsVerifying(true);
      setMessage(null);

      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid: currentUser.uid, code }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Verification failed");
      }

      // Successful verification
      setIsVerified(true);
      
      // Reload current user to sync client-side auth state
      await currentUser.reload();

      setTimeout(() => {
        router.push("/onboarding");
      }, 1500);
    } catch (err: any) {
      console.error("Verification error:", err);
      setMessage({
        type: "error",
        text: err?.message || "Invalid verification code. Please try again.",
      });
      // Clear inputs and refocus first box on error
      setOtp(Array(5).fill(""));
      inputRefs.current[0]?.focus();
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResend = async () => {
    if (!currentUser || resendCooldown > 0 || isResending) return;

    try {
      setIsResending(true);
      setMessage(null);

      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid: currentUser.uid, email: currentUser.email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to resend code");

      setMessage({ type: "success", text: "Verification code resent successfully!" });
      setResendCooldown(60);
      setOtp(Array(5).fill(""));
      inputRefs.current[0]?.focus();
    } catch (err: any) {
      console.error("Resend error:", err);
      setMessage({
        type: "error",
        text: err?.message || "Failed to resend code. Please try again.",
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

  const isCodeComplete = otp.join("").length === 5;

  return (
    <div className="min-h-screen bg-[#020308] text-white flex items-center justify-center p-6 relative overflow-hidden font-inter select-none">
      {/* Decorative Glow Background */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-medical-teal/15 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/15 blur-[140px] pointer-events-none z-0" />

      {/* Main Container Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md bg-white/[0.01] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-2xl shadow-2xl flex flex-col items-center text-center"
      >
        <AnimatePresence mode="wait">
          {!isVerified ? (
            <motion.div
              key="otp-form"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center w-full"
            >
              {/* Icon Header */}
              <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-medical-teal/20 rounded-full blur-md"
                />
                <div className="w-16 h-16 rounded-full bg-medical-teal/10 border border-medical-teal/30 flex items-center justify-center shadow-[0_0_15px_rgba(32,201,151,0.15)]">
                  <Mail className="w-8 h-8 text-medical-teal" />
                </div>
              </div>

              <h1 className="text-2xl font-bold font-manrope tracking-tight mb-3 text-white">
                Enter Verification Code
              </h1>
              
              <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-8">
                We've sent a 5-digit verification code to <br />
                <span className="text-medical-teal font-medium select-text">{currentUser.email}</span>.<br />
                Please enter the code below to authorize your account.
              </p>

              {/* OTP Form Inputs */}
              <form onSubmit={handleVerify} className="w-full flex flex-col items-center">
                <div className="flex justify-center gap-3.5 mb-8">
                  {otp.map((digit, idx) => (
                    <input
                      key={idx}
                      ref={(el) => { inputRefs.current[idx] = el; }}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(e.target.value, idx)}
                      onKeyDown={(e) => handleKeyDown(e, idx)}
                      onPaste={idx === 0 ? handlePaste : undefined}
                      className="w-12 h-14 bg-white/[0.02] border border-white/10 focus:border-medical-teal rounded-xl text-center text-2xl font-bold font-manrope text-white focus:outline-none transition-all duration-200 focus:shadow-[0_0_15px_rgba(32,201,151,0.25)]"
                    />
                  ))}
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

                {/* Verification Actions */}
                <div className="w-full space-y-4">
                  <button
                    type="submit"
                    disabled={!isCodeComplete || isVerifying}
                    className="w-full py-4 px-6 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/90 disabled:bg-white/10 disabled:text-white/40 transition-all duration-300 shadow-lg shadow-white/5 flex items-center justify-center gap-2 group"
                  >
                    {isVerifying ? (
                      <RotateCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span>Verify Code</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <div className="flex justify-between items-center w-full text-xs px-1 pt-2">
                    <button
                      type="button"
                      onClick={handleResend}
                      disabled={resendCooldown > 0 || isResending}
                      className="text-medical-teal font-medium hover:underline disabled:text-white/30 disabled:no-underline transition-all duration-200"
                    >
                      {isResending ? (
                        <span className="flex items-center gap-1.5"><RotateCw className="w-3 h-3 animate-spin" /> Resending...</span>
                      ) : resendCooldown > 0 ? (
                        `Resend code in ${resendCooldown}s`
                      ) : (
                        "Resend Code"
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleSignOut}
                      className="text-white/50 hover:text-white font-medium flex items-center gap-1 transition-colors duration-200"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="verified"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center w-full py-6"
            >
              <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.2, opacity: [0, 0.35, 0] }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute inset-0 bg-emerald-500/20 rounded-full blur-md"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 220, damping: 14 }}
                  className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                >
                  <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                </motion.div>
              </div>

              <h1 className="text-2xl font-bold font-manrope tracking-tight mb-3 text-white">
                Code Verified!
              </h1>
              
              <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-4">
                Your email has been authorized. <br />
                Preparing your onboarding experience...
              </p>

              <RotateCw className="w-4 h-4 text-emerald-400 animate-spin mt-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

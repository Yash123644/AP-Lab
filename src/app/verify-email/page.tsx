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
    
    // Give Firebase a small window to resolve the auth state on tab focus/refresh
    const timeout = setTimeout(() => {
      if (!auth.currentUser) {
        router.push("/");
      }
    }, 1500);

    if (currentUser && currentUser.emailVerified) {
      setIsVerified(true);
      const timer = setTimeout(() => {
        router.push("/onboarding");
      }, 1500);
      return () => clearTimeout(timer);
    }

    return () => clearTimeout(timeout);
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
      <div className="min-h-screen flex items-center justify-center bg-[#050508]">
        <div className="flex flex-col items-center space-y-4">
          <RotateCw className="w-8 h-8 text-white/40 animate-spin" />
          <p className="text-white/40 font-manrope text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  if (!currentUser) return null;

  const isCodeComplete = otp.join("").length === 5;

  return (
    <div className="min-h-screen bg-[#050508] text-white flex items-center justify-center p-6 font-inter select-none">
      <div className="w-full max-w-sm border border-white/10 rounded-2xl p-8 bg-transparent flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!isVerified ? (
            <motion.div
              key="otp-form"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center w-full"
            >
              <h1 className="text-2xl font-bold font-manrope tracking-tight mb-3 text-white">
                Verify your email
              </h1>
              
              <p className="text-white/50 text-sm leading-relaxed mb-10 text-center text-balance">
                Enter the 5-digit code sent to <br />
                <span className="text-white font-medium select-text">{currentUser.email}</span>
              </p>

              {/* OTP Form Inputs */}
              <form onSubmit={handleVerify} className="w-full flex flex-col items-center">
                <div className="flex justify-center gap-4 mb-10">
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
                      className="w-12 h-14 bg-transparent border-b-2 border-white/10 focus:border-white text-center text-3xl font-light font-manrope text-white focus:outline-none transition-colors duration-150"
                    />
                  ))}
                </div>

                {/* Feedback Message */}
                {message && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-xs p-3.5 rounded-lg border w-full mb-6 text-center ${
                      message.type === "success"
                        ? "bg-emerald-500/5 border-emerald-500/10 text-emerald-400"
                        : "bg-rose-500/5 border-rose-500/10 text-rose-400"
                    }`}
                  >
                    {message.text}
                  </motion.div>
                )}

                {/* Verification Actions */}
                <div className="w-full space-y-5">
                  <button
                    type="submit"
                    disabled={!isCodeComplete || isVerifying}
                    className="w-full py-4 px-6 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 disabled:bg-white/10 disabled:text-white/30 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    {isVerifying ? (
                      <RotateCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <span>Verify Code</span>
                    )}
                  </button>

                  <div className="flex justify-between items-center w-full text-xs text-neutral-500 px-1 pt-2">
                    <button
                      type="button"
                      onClick={handleResend}
                      disabled={resendCooldown > 0 || isResending}
                      className="hover:text-white disabled:hover:text-neutral-500 transition-colors duration-200"
                    >
                      {isResending ? (
                        <span className="flex items-center gap-1.5"><RotateCw className="w-3 h-3 animate-spin" /> Resending...</span>
                      ) : resendCooldown > 0 ? (
                        `Resend in ${resendCooldown}s`
                      ) : (
                        "Resend Code"
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleSignOut}
                      className="hover:text-white flex items-center gap-1 transition-colors duration-200"
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
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center w-full py-6"
            >
              <CheckCircle2 className="w-12 h-12 text-white mb-6" />

              <h1 className="text-2xl font-bold font-manrope tracking-tight mb-2 text-white">
                Verified
              </h1>
              
              <p className="text-white/50 text-sm leading-relaxed text-center mb-6">
                Taking you to onboarding...
              </p>

              <RotateCw className="w-4 h-4 text-white/30 animate-spin" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

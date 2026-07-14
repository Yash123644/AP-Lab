"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";
import { X, AlertCircle, ArrowRight, Eye, EyeOff } from "lucide-react";
import { 
  signInWithPopup, 
  signInWithRedirect,
  AuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  signInWithCustomToken
} from "firebase/auth";
import { auth, googleProvider, githubProvider, microsoftProvider } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useUI } from "@/context/UIContext";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";

export function AuthModal() {
  const { isAuthModalOpen: isOpen, closeAuthModal: onClose, authView } = useUI();
  const router = useRouter();
  const { currentUser, loading: authLoading } = useAuth();

  useEffect(() => {
    if (!authLoading && currentUser && isOpen) {
      onClose();
      router.push("/dashboard");
    }
  }, [currentUser, authLoading, isOpen, onClose, router]);

  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [shouldShake, setShouldShake] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSignUp(authView === "signup");
    }
  }, [isOpen, authView]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    mouseX.set(x);
    mouseY.set(y);

    setTrail((prev) => {
      const newTrail = [...prev, { x, y, id: Math.random() }];
      if (newTrail.length > 20) {
        return newTrail.slice(newTrail.length - 20);
      }
      return newTrail;
    });
  };

  const handleMouseLeave = () => {
    setTrail([]);
  };

  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.06), transparent 80%)`;

  const createLoadingRescue = (onRescue: () => void) => {
    let rescueTimer: NodeJS.Timeout;
    let interactionTimeout: NodeJS.Timeout;
    let isCleanedUp = false;

    const reset = () => {
      if (isCleanedUp) return;
      onRescue();
      cleanup();
    };

    const handleFocus = () => {
      setTimeout(reset, 800);
    };

    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        setTimeout(reset, 800);
      }
    };

    window.addEventListener("focus", handleFocus);
    window.addEventListener("visibilitychange", handleVisibility);
    
    interactionTimeout = setTimeout(() => {
      window.addEventListener("click", reset, { once: true });
      window.addEventListener("mousemove", reset, { once: true });
      window.addEventListener("keydown", reset, { once: true });
    }, 2000);

    rescueTimer = setTimeout(reset, 15000);

    const cleanup = () => {
      isCleanedUp = true;
      clearTimeout(rescueTimer);
      clearTimeout(interactionTimeout);
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("click", reset);
      window.removeEventListener("mousemove", reset);
      window.removeEventListener("keydown", reset);
    };

    return cleanup;
  };

  const handleOAuth = async (provider: AuthProvider) => {
    let cleanupRescue = () => {};
    try {
      setError(null);
      setLoading(true);

      cleanupRescue = createLoadingRescue(() => setLoading(false));

      await setPersistence(auth, browserLocalPersistence);
      
      const result = await signInWithPopup(auth, provider);
      cleanupRescue();
      if (result?.user) {
        onClose();
        router.push("/dashboard");
      }
    } catch (err) {
      console.error("Firebase OAuth Error:", err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An error occurred during sign in.");
      }
      cleanupRescue();
      setLoading(false);
    }
  };

  const handleTwitterSignIn = async () => {
    let cleanupRescue = () => {};
    try {
      setError(null);
      setLoading(true);

      cleanupRescue = createLoadingRescue(() => setLoading(false));

      const width = 600;
      const height = 600;
      const left = window.screen.width / 2 - width / 2;
      const top = window.screen.height / 2 - height / 2;

      const popup = window.open(
        "/api/auth/twitter/login",
        "twitter-oauth",
        `width=${width},height=${height},left=${left},top=${top},status=no,resizable=yes,scrollbars=yes`
      );

      if (!popup) {
        setError("Failed to open sign-in popup. Please check your popup blocker settings.");
        setLoading(false);
        cleanupRescue();
        return;
      }

      const handleMessage = async (event: MessageEvent) => {
        if (event.origin !== window.location.origin) return;

        if (event.data?.type === "twitter-auth-success") {
          window.removeEventListener("message", handleMessage);
          cleanupRescue();
          try {
            const { token } = event.data;
            await setPersistence(auth, browserLocalPersistence);
            await signInWithCustomToken(auth, token);
            onClose();
            router.push("/dashboard");
          } catch (err: any) {
            console.error("Firebase Custom Auth Error:", err);
            setError(err.message || "Failed to sign in with custom token.");
            setLoading(false);
          }
        } else if (event.data?.type === "twitter-auth-error") {
          window.removeEventListener("message", handleMessage);
          cleanupRescue();
          setError(event.data.error || "An error occurred during sign in with X.");
          setLoading(false);
        }
      };

      window.addEventListener("message", handleMessage);

      const checkPopupClosed = setInterval(() => {
        if (popup.closed) {
          clearInterval(checkPopupClosed);
          window.removeEventListener("message", handleMessage);
          cleanupRescue();
          setLoading(false);
        }
      }, 1000);

    } catch (err: any) {
      console.error("Twitter Signin Setup Error:", err);
      setError("An error occurred during sign in setup.");
      cleanupRescue();
      setLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(null);
      setLoading(true);
      await setPersistence(auth, browserLocalPersistence);
      if (isSignUp) {
        // Enforce length, uppercase and digit constraints
        const isLengthValid = password.length >= 6;
        const hasUpper = /[A-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        if (!isLengthValid || !hasUpper || !hasNumber) {
          setError("Password must be at least 6 characters, contain an uppercase letter, and a number.");
          setShouldShake(true);
          setTimeout(() => setShouldShake(false), 500);
          setLoading(false);
          return;
        }
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      onClose();
      router.push("/dashboard");
    } catch (err) {
      console.error("Firebase Email Auth Error:", err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Invalid email or password.");
      }
      setShouldShake(true);
      setTimeout(() => setShouldShake(false), 500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[420px] rounded-[2.5rem] bg-[#0A0A0A]/95 backdrop-blur-2xl border border-white/10 p-8 shadow-2xl pointer-events-auto overflow-hidden group/modal"
            >
              {/* Pixel grid cursor trail */}
              {trail.map((point, index) => {
                const ratio = index / trail.length;
                const size = Math.max(2, Math.round(8 * ratio));
                const opacity = ratio * 0.8;
                return (
                  <div
                    key={point.id}
                    className="absolute bg-white pointer-events-none rounded-none"
                    style={{
                      left: point.x,
                      top: point.y,
                      width: `${size}px`,
                      height: `${size}px`,
                      opacity: opacity,
                      transform: "translate(-50%, -50%)",
                      zIndex: 0,
                    }}
                  />
                );
              })}

              {/* Glow effect matching the image */}
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-white/30 hover:text-white transition-colors rounded-full hover:bg-white/5 z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10 flex flex-col items-center mt-4">
                <h2 className="text-[28px] font-semibold text-white mb-2 tracking-tight">
                  {isSignUp ? "Create account" : "Welcome back"}
                </h2>
                <p className="text-[15px] text-white/50 mb-8">
                  {isSignUp ? "Sign up for a new account" : "Sign in to your account"}
                </p>

                {/* Error Banner (Hidden from UI per user request, logged to console) */}

                <form onSubmit={handleEmailAuth} className="w-full flex flex-col space-y-3 mb-8">
                  <div className={cn(
                    "relative flex items-center bg-[#141414] border border-white/5 hover:border-white/10 focus-within:border-white/20 transition-colors rounded-[2rem] px-5 py-2.5 h-[64px]",
                    shouldShake && "shake-error"
                  )}>
                    <div className="flex flex-col flex-1 justify-center">
                      <span className="text-[10px] text-white/30 font-semibold uppercase tracking-wider">Email</span>
                      <input
                        type="email"
                        placeholder="vladderkach@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-transparent text-white text-[15px] focus:outline-none placeholder:text-white/20 mt-0.5"
                      />
                    </div>
                  </div>
                  
                  <div className={cn(
                    "relative flex items-center bg-[#141414] border border-white/5 hover:border-white/10 focus-within:border-white/20 transition-colors rounded-[2rem] pl-5 pr-2 py-2.5 h-[64px]",
                    shouldShake && "shake-error"
                  )}>
                    <div className="flex flex-col flex-1 justify-center">
                      <span className="text-[10px] text-white/30 font-semibold uppercase tracking-wider">Password</span>
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full bg-transparent text-white text-[15px] focus:outline-none placeholder:text-white/20 mt-0.5"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-white/40 hover:text-white/70 transition-colors focus:outline-none p-1.5"
                    >
                      {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="ml-3 shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-[#00ffb3] to-[#00d0ff] flex items-center justify-center text-black hover:opacity-90 hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 shadow-[0_0_20px_rgba(0,255,179,0.2)]"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                  {isSignUp && (
                    <div className="mt-3.5 space-y-1.5 text-left px-4">
                      <div className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full transition-colors ${password.length >= 6 ? "bg-[#00ffb3]" : "bg-white/10"}`} />
                        <span className={`text-[11px] font-semibold transition-colors ${password.length >= 6 ? "text-[#00ffb3]" : "text-white/30"}`}>At least 6 characters</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full transition-colors ${/[A-Z]/.test(password) ? "bg-[#00ffb3]" : "bg-white/10"}`} />
                        <span className={`text-[11px] font-semibold transition-colors ${/[A-Z]/.test(password) ? "text-[#00ffb3]" : "text-white/30"}`}>At least one uppercase letter</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full transition-colors ${/\d/.test(password) ? "bg-[#00ffb3]" : "bg-white/10"}`} />
                        <span className={`text-[11px] font-semibold transition-colors ${/\d/.test(password) ? "text-[#00ffb3]" : "text-white/30"}`}>At least one number</span>
                      </div>
                    </div>
                  )}
                </form>

                <div className="w-full flex items-center space-x-4 mb-8">
                  <div className="flex-1 h-px bg-white/5" />
                  <span className="text-[10px] text-white/30 font-semibold tracking-widest uppercase">Or</span>
                  <div className="flex-1 h-px bg-white/5" />
                </div>

                <div className="w-full space-y-3">
                  {/* Google Sign In */}
                  <button
                    type="button"
                    onClick={() => handleOAuth(googleProvider)}
                    disabled={loading}
                    className="w-full flex items-center justify-between px-6 py-[18px] bg-white/5 hover:bg-white/10 border border-white/25 hover:border-white/40 rounded-[2rem] transition-all group disabled:opacity-50"
                  >
                    <div className="flex items-center space-x-4">
                      <svg className="w-[18px] h-[18px] opacity-85 group-hover:opacity-100 transition-all duration-300" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                      <span className="text-[14px] font-medium text-white/90 group-hover:text-white transition-colors">Continue with Google</span>
                    </div>
                    <ArrowRight className="w-[18px] h-[18px] text-white/40 group-hover:text-white/70 transition-colors" />
                  </button>

                  {/* GitHub Sign In */}
                  <button
                    type="button"
                    onClick={() => handleOAuth(githubProvider)}
                    disabled={loading}
                    className="w-full flex items-center justify-between px-6 py-[18px] bg-white/5 hover:bg-white/10 border border-white/25 hover:border-white/40 rounded-[2rem] transition-all group disabled:opacity-50"
                  >
                    <div className="flex items-center space-x-4">
                      <svg className="w-[18px] h-[18px] text-white/90 group-hover:text-white opacity-85 group-hover:opacity-100 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span className="text-[14px] font-medium text-white/90 group-hover:text-white transition-colors">Continue with GitHub</span>
                    </div>
                    <ArrowRight className="w-[18px] h-[18px] text-white/40 group-hover:text-white/70 transition-colors" />
                  </button>

                  {/* Microsoft Sign In */}
                  <button
                    type="button"
                    onClick={() => handleOAuth(microsoftProvider)}
                    disabled={loading}
                    className="w-full flex items-center justify-between px-6 py-[18px] bg-white/5 hover:bg-white/10 border border-white/25 hover:border-white/40 rounded-[2rem] transition-all group disabled:opacity-50"
                  >
                    <div className="flex items-center space-x-4">
                      <svg className="w-[18px] h-[18px] opacity-85 group-hover:opacity-100 transition-all duration-300" viewBox="0 0 23 23">
                        <rect x="0" y="0" width="11" height="11" fill="#F25022"/>
                        <rect x="12" y="0" width="11" height="11" fill="#7FBA00"/>
                        <rect x="0" y="12" width="11" height="11" fill="#00A4EF"/>
                        <rect x="12" y="12" width="11" height="11" fill="#FFB900"/>
                      </svg>
                      <span className="text-[14px] font-medium text-white/90 group-hover:text-white transition-colors">Continue with Microsoft</span>
                    </div>
                    <ArrowRight className="w-[18px] h-[18px] text-white/40 group-hover:text-white/70 transition-colors" />
                  </button>
                </div>

                <div className="mt-10 text-center w-full">
                  <span className="text-[13px] text-white/40">
                    {isSignUp ? "Already have an account? " : "Don't have an account? "}
                  </span>
                  <button
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-[13px] font-semibold text-[#00ffb3] hover:text-[#00d0ff] transition-colors"
                  >
                    {isSignUp ? "Sign in" : "Sign up"}
                  </button>
                </div>

                {isSignUp && (
                  <p className="mt-4 text-[12px] text-white/40 text-center leading-relaxed max-w-[320px]">
                    By signing up, you agree to our{" "}
                    <Link href="/terms" target="_blank" className="font-semibold text-white/90 hover:text-white underline transition-colors">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" target="_blank" className="font-semibold text-white/90 hover:text-white underline transition-colors">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                )}

              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}


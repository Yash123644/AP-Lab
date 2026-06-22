"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { AlertCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { 
  signInWithPopup, 
  AuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  signInWithCustomToken
} from "firebase/auth";
import { auth, googleProvider, githubProvider } from "@/lib/firebase";
import { RotatingPulse3D } from "@/components/RotatingPulse3D";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number; createdAt: number }[]>([]);

  useEffect(() => {
    const view = searchParams.get("view");
    setIsSignUp(view === "signup");
  }, [searchParams]);

  // High-performance trail decay: continuously age and fade out points in the background
  useEffect(() => {
    let animFrameId: number;
    const updateTrail = () => {
      const now = Date.now();
      setTrail((prev) => {
        const activePoints = prev.filter((pt) => now - pt.createdAt < 600);
        if (activePoints.length === prev.length) return prev;
        return activePoints;
      });
      animFrameId = requestAnimationFrame(updateTrail);
    };
    animFrameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animFrameId);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    mouseX.set(x);
    mouseY.set(y);

    const now = Date.now();
    setTrail((prev) => {
      const activePoints = prev.filter((pt) => now - pt.createdAt < 600);
      return [...activePoints, { x, y, id: Math.random(), createdAt: now }];
    });
  };

  const handleMouseLeave = () => {
    setTrail([]);
  };

  // Black and white theme background glow (soft white glow)
  const backgroundGlow = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.035), transparent 80%)`;

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
      await signInWithPopup(auth, provider);

      cleanupRescue();
      router.push("/dashboard");
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
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      router.push("/dashboard");
    } catch (err) {
      console.error("Firebase Email Auth Error:", err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Invalid email or password.");
      }
      setLoading(false);
    }
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen bg-black text-white overflow-hidden relative select-none flex items-center justify-center w-full"
    >
      {/* Background Interactive Glow */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{ background: backgroundGlow }}
      />

      {/* Render Pixel Trail with smooth timestamp-based aging and decay */}
      {trail.map((point) => {
        const age = Date.now() - point.createdAt;
        const lifeRatio = Math.max(0, 1 - age / 600); // 1 at birth, fades to 0 at 600ms
        const size = Math.max(2, Math.round(8 * lifeRatio));
        const opacity = lifeRatio * 0.8;
        return (
          <div
            key={point.id}
            className="absolute bg-white pointer-events-none rounded-none z-50"
            style={{
              left: point.x,
              top: point.y,
              width: `${size}px`,
              height: `${size}px`,
              opacity: opacity,
              transform: "translate(-50%, -50%)",
            }}
          />
        );
      })}

      {/* Back Arrow Navigation */}
      <div className="absolute top-12 left-12 z-30">
        <Link 
          href="/" 
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/40 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300 group"
          title="Back to home"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Centered Symmetric Grid for spacing logo and form evenly */}
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full max-w-[1200px] px-6 md:px-12 z-20 relative items-center">
        {/* Left Column: 3D Pulse Logo (fully transparent background) */}
        <div className="hidden lg:flex lg:col-span-6 flex-col justify-center items-center p-6 relative overflow-hidden">
          {/* Soft background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-white/5 rounded-full blur-[80px] pointer-events-none" />
          
          {/* 3D Rotating EKG Pulse Wave */}
          <div className="w-full flex items-center justify-center">
            <RotatingPulse3D />
          </div>
        </div>

        {/* Right Column: Form Container (fully transparent background, symmetric and centered) */}
        <div className="lg:col-span-6 flex flex-col justify-center items-center p-6 md:p-12 relative w-full">
          <div className="w-full max-w-[400px] mx-auto">
            {/* Headings */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
                {isSignUp ? "Sign Up Account" : "Sign In to Account"}
              </h1>
              <p className="text-white/50 text-sm">
                {isSignUp ? "Enter your personal data to create your account." : "Enter your credentials to access your account."}
              </p>
            </div>

            {/* Error Banner */}
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-start space-x-3 text-red-400">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            {/* Social Logins */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {/* Google */}
              <button
                type="button"
                onClick={() => handleOAuth(googleProvider)}
                disabled={loading}
                className="flex items-center justify-center py-3 bg-[#111111] hover:bg-[#1a1a1a] border border-white/10 hover:border-white/20 rounded-xl transition-all group disabled:opacity-50"
                title="Continue with Google"
              >
                {/* Grayscale on default, full colors on hover */}
                <svg className="w-[18px] h-[18px] grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </button>
              
              {/* GitHub */}
              <button
                type="button"
                onClick={() => handleOAuth(githubProvider)}
                disabled={loading}
                className="flex items-center justify-center py-3 bg-[#111111] hover:bg-[#1a1a1a] border border-white/10 hover:border-white/20 rounded-xl transition-all group disabled:opacity-50"
                title="Continue with GitHub"
              >
                <svg className="w-[18px] h-[18px] text-white/50 group-hover:text-white opacity-50 group-hover:opacity-100 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </button>

              {/* X */}
              <button
                type="button"
                onClick={handleTwitterSignIn}
                disabled={loading}
                className="flex items-center justify-center py-3 bg-[#111111] hover:bg-[#1a1a1a] border border-white/10 hover:border-white/20 rounded-xl transition-all group disabled:opacity-50"
                title="Continue with X"
              >
                <svg className="w-[18px] h-[18px] text-white/50 group-hover:text-white opacity-50 group-hover:opacity-100 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
                </svg>
              </button>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-[10px] text-white/30 font-semibold tracking-widest uppercase">Or</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Form */}
            <form onSubmit={handleEmailAuth} className="space-y-4">
              {isSignUp && (
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-white/70 uppercase tracking-wide">Name</label>
                  <input
                    type="text"
                    placeholder="eg. John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#111111] border border-white/10 hover:border-white/20 focus:border-white/50 rounded-xl px-4 py-3 text-white focus:outline-none transition-all text-sm placeholder:text-white/20"
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <label className="text-xs font-semibold text-white/70 uppercase tracking-wide">Email</label>
                <input
                  type="email"
                  placeholder="eg. john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#111111] border border-white/10 hover:border-white/20 focus:border-white/50 rounded-xl px-4 py-3 text-white focus:outline-none transition-all text-sm placeholder:text-white/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-white/70 uppercase tracking-wide">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-[#111111] border border-white/10 hover:border-white/20 focus:border-white/50 rounded-xl px-4 py-3 text-white focus:outline-none transition-all text-sm placeholder:text-white/20"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black font-semibold rounded-xl py-3 mt-4 hover:bg-white/90 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <span>{isSignUp ? "Sign Up" : "Sign In"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Toggle */}
            <div className="mt-8 text-center text-sm text-white/40">
              {isSignUp ? "Already have an account? " : "Don't have an account? "}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="font-semibold text-white hover:underline transition-all"
              >
                {isSignUp ? "Log in" : "Sign up"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

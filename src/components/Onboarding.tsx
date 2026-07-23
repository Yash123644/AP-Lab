"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, Search, Upload, User, Check, Book, 
  GraduationCap, Trophy, FileText, ChevronRight, ChevronLeft,
  Dna, Beaker, Atom, History, Brain, BookOpen, Sigma, BarChart3, Binary
} from "lucide-react";
import { useProgress } from "@/context/ProgressContext";
import { updateProfile } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";

interface OnboardingProps {
  onComplete: () => void;
  userEmail?: string;
  userId?: string;
}

// Brand SVG logo definitions matching the uploaded image
const FriendsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const SchoolIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" className={props.className}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
  </svg>
);

const YouTubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" className={props.className}>
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837z" fill="#FF0000" />
    <polygon points="9.545 15.568 15.818 12 9.545 8.432 9.545 15.568" fill="#FFFFFF" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" className={props.className}>
    <defs>
      <radialGradient id="ig-grad" cx="30%" cy="107%" r="130%" fx="30%" fy="107%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect width="24" height="24" rx="5" fill="url(#ig-grad)" />
    <rect x="5" y="5" width="14" height="14" rx="3.5" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
    <circle cx="16.5" cy="7.5" r="0.75" fill="#FFFFFF" />
  </svg>
);

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <img 
    src="/images/onboarding/tiktok.png" 
    alt="TikTok" 
    className={`${props.className || ""} object-contain rounded-lg`} 
  />
);

const RedditIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <img 
    src="/images/onboarding/reddit.png" 
    alt="Reddit" 
    className={`${props.className || ""} object-contain rounded-lg`} 
  />
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" className={props.className}>
    <circle cx="12" cy="12" r="11" fill="#5865F2" />
    <path 
      d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.864-.6083 1.2495a18.2578 18.2578 0 0 0-5.4877 0 12.6407 12.6407 0 0 0-.617-1.2495.077.077 0 0 0-.0785-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1971.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.873.8914.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.06 0 0 0-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0951 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1756 1.0951 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" 
      fill="#FFFFFF" 
      transform="translate(12, 12) scale(0.6) translate(-12, -12)"
    />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" className={props.className}>
    <rect width="24" height="24" rx="4" fill="#0077B5" />
    <path d="M6.5 21.5h-4v-13h4v13zm-2-14.75A2.25 2.25 0 1 1 6.75 4.5 2.25 2.25 0 0 1 4.5 6.75zm17 14.75h-4v-7c0-1.85-.75-2.5-2-2.5-1.4 0-2.1.9-2.1 2.5v7h-4v-13h4v1.85c.6-1 1.6-1.85 3.35-1.85 2.5 0 4.75 1.7 4.75 5.5v7.5z" fill="#FFFFFF" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" className={props.className}>
    <circle cx="12" cy="12" r="12" fill="#1DA1F2" />
    <path d="M18.2 8.5c-.5.2-1 .3-1.5.4.5-.3 1-.8 1.2-1.4-.5.3-1 .5-1.6.6-.5-.5-1.1-.8-1.9-.8-1.4 0-2.6 1.2-2.6 2.6 0 .2 0 .4.1.6-2.1-.1-4-1.1-5.3-2.7-.2.4-.3.9-.3 1.4 0 .9.5 1.7 1.2 2.2-.4 0-.8-.1-1.2-.3v.1c0 1.2.9 2.2 2 2.5-.2.1-.5.1-.7.1-.2 0-.3 0-.5-.1.3 1 1.3 1.7 2.4 1.7-.9.7-2 1.1-3.2 1.1-.2 0-.4 0-.6-.1 1.1.7 2.5 1.1 3.9 1.1 4.7 0 7.3-3.9 7.3-7.3v-.3c.5-.4.9-.9 1.2-1.4z" fill="#FFFFFF" />
  </svg>
);

const ChatGPTIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <div className={`${props.className || ""} flex items-center justify-center bg-white rounded-full overflow-hidden p-0`}>
    <img 
      src="/images/onboarding/chatgpt.png" 
      alt="ChatGPT" 
      className="w-full h-full object-cover scale-[1.1]" 
    />
  </div>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" className={props.className}>
    <circle cx="12" cy="12" r="11" fill="#25D366" />
    <path 
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" 
      fill="#FFFFFF" 
      transform="translate(12, 12) scale(0.6) translate(-12, -12)"
    />
  </svg>
);

const reviews = [
  { id: 1, name: "Sophia M.", role: "AP Bio Student", text: "The Live Diagnostics showed exactly where I was failing. Got a 5!", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
  { id: 2, name: "Daniel K.", role: "AP Chem Student", text: "Socratic AI is literally a 24/7 tutor. Unbelievable platform.", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80" },
  { id: 3, name: "Emily R.", role: "AP Calc Student", text: "I struggled with integrals until the Neural Recall system stepped in.", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80" },
  { id: 4, name: "Liam T.", role: "AP Physics Student", text: "The mock exams are exactly like the real thing. Highly recommend.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
  { id: 5, name: "Ava L.", role: "AP Lang Student", text: "Beautiful UI. Studying actually feels engaging now instead of a chore.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80" },
  { id: 6, name: "Noah W.", role: "AP Euro Student", text: "My teacher recommended this, and my DBQ scores skyrocketed.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" },
  { id: 7, name: "Mia S.", role: "AP Psych Student", text: "The spaced repetition algorithm is absolute magic. Never forgetting vocab again.", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80" },
  { id: 8, name: "Ethan H.", role: "AP US History", text: "Best $0 I've ever spent. The fact that this is free is insane.", avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80" }
];

// referral list - restricted to exactly 6 rows (12 items) to stop cutoffs
const referralSources = [
  { id: "friends", title: "Friends or Family", desc: "Personal Recommendation", icon: FriendsIcon },
  { id: "school", title: "Teacher or School", desc: "Personal Recommendation", icon: SchoolIcon },
  { id: "google", title: "Google", desc: "Search Engine", icon: GoogleIcon },
  { id: "youtube", title: "YouTube", desc: "Video Streaming", icon: YouTubeIcon },
  { id: "instagram", title: "Instagram", desc: "Social Media", icon: InstagramIcon },
  { id: "tiktok", title: "TikTok", desc: "Social Media", icon: TikTokIcon },
  { id: "reddit", title: "Reddit", desc: "Social Media", icon: RedditIcon },
  { id: "discord", title: "Discord", desc: "Social Media", icon: DiscordIcon },
  { id: "linkedin", title: "LinkedIn", desc: "Social Media", icon: LinkedInIcon },
  { id: "twitter", title: "Twitter", desc: "Social Media", icon: TwitterIcon },
  { id: "chatgpt", title: "ChatGPT", desc: "AI", icon: ChatGPTIcon },
  { id: "whatsapp", title: "WhatsApp", desc: "Social Media", icon: WhatsAppIcon }
];

const intents = [
  { id: "general", title: "General learning", desc: "Improve overall understanding of AP concepts", icon: Book },
  { id: "exams", title: "AP Exams", desc: "Prepare for upcoming College Board exams", icon: GraduationCap },
  { id: "comps", title: "Competitions", desc: "Prep for school or local olympiad tests", icon: Trophy },
  { id: "notes", title: "Notes", desc: "Access review sheets and summarized guides", icon: FileText }
];

const classes = [
  { name: "AP Biology", slug: "ap-biology", category: "STEM & Sciences" },
  { name: "AP Chemistry", slug: "ap-chemistry", category: "STEM & Sciences" },
  { name: "AP Physics C", slug: "ap-physics-c", category: "STEM & Sciences" },
  { name: "AP US History", slug: "ap-ush", category: "Humanities & Arts" },
  { name: "AP Psychology", slug: "ap-psych", category: "Humanities & Arts" },
  { name: "AP English Language", slug: "ap-eng-lang", category: "Humanities & Arts" },
  { name: "AP Calculus BC", slug: "ap-calc-bc", category: "Mathematical Logic" },
  { name: "AP Statistics", slug: "ap-stats", category: "Mathematical Logic" },
  { name: "AP Comp Sci A", slug: "ap-csa", category: "Mathematical Logic" }
];

// Mapping to match exact colors and icons of subjects from the dashboard
const classStylesMap: Record<string, { color: string, glow: string, bg: string, icon: React.ComponentType<any> }> = {
  "ap-biology": { color: "text-teal-400", glow: "border-teal-500/20 bg-teal-950/20", bg: "bg-teal-500", icon: Dna },
  "ap-chemistry": { color: "text-teal-400", glow: "border-teal-500/20 bg-teal-950/20", bg: "bg-teal-500", icon: Beaker },
  "ap-physics-c": { color: "text-teal-400", glow: "border-teal-500/20 bg-teal-950/20", bg: "bg-teal-500", icon: Atom },
  "ap-ush": { color: "text-purple-400", glow: "border-purple-500/20 bg-purple-950/20", bg: "bg-purple-500", icon: History },
  "ap-psych": { color: "text-purple-400", glow: "border-purple-500/20 bg-purple-950/20", bg: "bg-purple-500", icon: Brain },
  "ap-eng-lang": { color: "text-purple-400", glow: "border-purple-500/20 bg-purple-950/20", bg: "bg-purple-500", icon: BookOpen },
  "ap-calc-bc": { color: "text-emerald-400", glow: "border-emerald-500/20 bg-emerald-950/20", bg: "bg-emerald-500", icon: Sigma },
  "ap-stats": { color: "text-emerald-400", glow: "border-emerald-500/20 bg-emerald-950/20", bg: "bg-emerald-500", icon: BarChart3 },
  "ap-csa": { color: "text-emerald-400", glow: "border-emerald-500/20 bg-emerald-950/20", bg: "bg-emerald-500", icon: Binary },
};

export function Onboarding({ onComplete, userEmail, userId }: OnboardingProps) {
  const [step, setStep] = useState(1);
  const totalSteps = 8;
  const { progress } = useProgress();

  // State values for responses
  const [gradYear, setGradYear] = useState<number | null>(null);
  const [referredBy, setReferredBy] = useState("");
  const [goalScore, setGoalScore] = useState(5);
  const [selectedIntents, setSelectedIntents] = useState<string[]>([]);
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const [classQuery, setClassQuery] = useState("");
  const [username, setUsername] = useState(auth.currentUser?.displayName || "");
  const [photoDataUrl, setPhotoDataUrl] = useState<string | null>(auth.currentUser?.photoURL || null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (auth.currentUser) {
      if (auth.currentUser.displayName && !username) {
        setUsername(auth.currentUser.displayName);
      }
      if (auth.currentUser.photoURL && !photoDataUrl) {
        setPhotoDataUrl(auth.currentUser.photoURL);
      }
    }
  }, [auth.currentUser, username, photoDataUrl]);

  // Marquee Position & Hover Refs for glitch-free loop
  const marqueeRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef(0.8);
  const xRef = useRef(0);
  const [marqueeHovered, setMarqueeHovered] = useState(false);

  useEffect(() => {
    speedRef.current = marqueeHovered ? 0.15 : 0.8;
  }, [marqueeHovered]);

  useEffect(() => {
    let animationFrameId: number;
    const updateMarquee = () => {
      if (marqueeRef.current) {
        xRef.current -= speedRef.current;
        const halfWidth = marqueeRef.current.scrollWidth / 2;
        if (Math.abs(xRef.current) >= halfWidth) {
          xRef.current = 0;
        }
        marqueeRef.current.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
      }
      animationFrameId = requestAnimationFrame(updateMarquee);
    };
    animationFrameId = requestAnimationFrame(updateMarquee);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Dynamic grade calculation from graduation year (assuming current year is 2026)
  const calculateGradeInfo = (year: number) => {
    const yearsToGrad = year - 2026;
    if (yearsToGrad <= 0) return { grade: "Graduated / College Student", age: "18+ years old" };
    if (yearsToGrad === 1) return { grade: "12th Grade (Senior)", age: "17–18 years old" };
    if (yearsToGrad === 2) return { grade: "11th Grade (Junior)", age: "16–17 years old" };
    if (yearsToGrad === 3) return { grade: "10th Grade (Sophomore)", age: "15–16 years old" };
    if (yearsToGrad === 4) return { grade: "9th Grade (Freshman)", age: "14–15 years old" };
    return { grade: `${12 - (year - 2027)}th Grade`, age: `${18 - (year - 2027)}–${19 - (year - 2027)} years old` };
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleIntentToggle = (id: string) => {
    setSelectedIntents(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleClassToggle = (slug: string) => {
    setSelectedClasses(prev => 
      prev.includes(slug) ? prev.filter(x => x !== slug) : [...prev, slug]
    );
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const MAX_WIDTH = 128;
          const MAX_HEIGHT = 128;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const compressed = canvas.toDataURL("image/jpeg", 0.7);
            setPhotoDataUrl(compressed);
          }
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    setSaving(true);
    const activeUser = auth.currentUser;
    const finalUsername = username.trim() || activeUser?.displayName || "AP Scholar";
    const uid = userId || activeUser?.uid;

    try {
      // 1. Update Firebase Auth Profile
      if (activeUser) {
        await updateProfile(activeUser, {
          displayName: finalUsername,
          photoURL: photoDataUrl || activeUser.photoURL || ""
        }).catch(err => console.error("Firebase auth update profile error:", err));
      }
    } catch (e) {}

    // 2. Save Onboarding progress to Firestore Progress Document under correct 'userProgress' collection
    if (uid) {
      const docRef = doc(db, "userProgress", uid);
      const updatedProgress = {
        ...progress,
        uid,
        email: userEmail || activeUser?.email || "",
        displayName: finalUsername,
        photoURL: photoDataUrl || activeUser?.photoURL || "",
        isOnboarded: true,
        graduationYear: gradYear,
        referredBy: referredBy,
        goalScore,
        usageIntents: selectedIntents,
        selectedClasses
      };

      // Write to local storage for zero-latency recovery
      try {
        localStorage.setItem(`ap-lab-progress-${uid}`, JSON.stringify(updatedProgress));
      } catch (e) {}

      // Write to firestore collection 'userProgress' (non-blocking fallback)
      try {
        await setDoc(docRef, updatedProgress, { merge: true });
      } catch (e) {
        console.error("Firestore write permission block/error:", e);
      }
    }

    // 3. Unconditionally trigger redirect via callback
    setSaving(false);
    try {
      onComplete();
    } catch (err) {
      console.error("onComplete error, falling back to hard redirect:", err);
    }
    
    // Fallback hard redirect to guarantee transition
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 50);
  };

  const filteredClasses = classes.filter(c => 
    c.name.toLowerCase().includes(classQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[100] bg-black text-white flex flex-col font-manrope selection:bg-emerald-500/30 selection:text-white">
      
      {/* Thicker Progress Bar with circular pill shape layout centered at the top */}
      <div className="w-full bg-[#030303]/40 py-4 px-6 md:px-12 flex items-center justify-between border-b border-white/5 shrink-0 z-20">
        
        {/* Back arrow to the left */}
        <div className="w-10 flex justify-start">
          {step > 1 ? (
            <button 
              onClick={handleBack} 
              className="text-white/50 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/5 focus:outline-none shrink-0"
              title="Go back to previous step"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          ) : (
            <div className="w-9 shrink-0" />
          )}
        </div>

        {/* Circular pill-ended thicker progress bar in the center */}
        <div className="flex-1 max-w-3xl h-4 bg-neutral-900 border border-white/10 rounded-full overflow-hidden p-[2px] mx-4">
          <motion.div 
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-blue-500" 
            animate={{ width: `${(step / totalSteps) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Step count text to the right */}
        <div className="w-24 text-right select-none shrink-0">
          <span className="text-xs font-semibold text-neutral-500 font-mono">Step {step} of {totalSteps}</span>
        </div>

      </div>

      {/* Steps Content Area */}
      <div data-lenis-prevent className="flex-1 overflow-y-auto w-full px-6 py-10 md:px-12">
        <div className="min-h-full max-w-5xl mx-auto w-full flex flex-col items-center">
          <div className="flex-grow" />
          <div className="w-full flex flex-col items-center justify-center py-4 shrink-0">
            <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full flex flex-col items-center text-center space-y-10"
            >
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">What others say about us</h1>
                <p className="text-neutral-400 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
                  Real feedback from students studying for exams and tracking their scores.
                </p>
              </div>

              {/* Glitch-Free Reviews Marquee */}
              <div className="relative w-full overflow-hidden py-4 flex flex-col space-y-4">
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <div 
                  className="flex w-max overflow-hidden"
                  onMouseEnter={() => setMarqueeHovered(true)}
                  onMouseLeave={() => setMarqueeHovered(false)}
                >
                  <div 
                    ref={marqueeRef}
                    className="flex space-x-6 pr-6 will-change-transform"
                  >
                    {[...reviews, ...reviews].map((review, i) => (
                      <div key={i} className="shrink-0 w-[300px] md:w-[380px] bg-neutral-900/60 border border-white/5 rounded-3xl p-6 text-left flex flex-col justify-between">
                        {/* Yellow stars */}
                        <div className="flex space-x-1 mb-3">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-[14px] h-[14px] fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-neutral-300 text-sm leading-relaxed mb-6 italic select-none">
                          &ldquo;{review.text}&rdquo;
                        </p>
                        <div className="flex items-center space-x-3">
                          <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20 shrink-0 bg-neutral-800">
                            <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-white">{review.name}</span>
                            <span className="text-[10px] text-neutral-500">{review.role}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                onClick={handleNext}
                className="bg-white text-black font-semibold rounded-full px-10 py-4 hover:bg-neutral-200 transition-all flex items-center space-x-2 text-lg hover:scale-105"
              >
                <span>Get Started</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-xl flex flex-col space-y-8"
            >
              <div className="space-y-3 text-center">
                <h1 className="text-3xl font-extrabold tracking-tight">Select your Graduation Year</h1>
                <p className="text-neutral-400 text-sm">We will approximate your grade level and age groups automatically.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033].map((year) => (
                  <button
                    key={year}
                    onClick={() => setGradYear(year)}
                    className={`p-5 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-center space-y-1 ${
                      gradYear === year 
                        ? "border-emerald-500 bg-emerald-950/20 shadow-[0_0_15px_rgba(16,185,129,0.15)] text-white" 
                        : "border-white/10 bg-neutral-900/40 text-neutral-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <span className="text-xl font-bold font-mono">{year}</span>
                    <span className="text-[10px] uppercase tracking-wider opacity-60">Class of {year}</span>
                  </button>
                ))}
              </div>

              {gradYear && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-neutral-900/60 border border-white/5 rounded-2xl p-6 text-center space-y-2"
                >
                  <div className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Estimated Grade & Age</div>
                  <div className="text-2xl font-bold">{calculateGradeInfo(gradYear).grade}</div>
                  <div className="text-sm text-neutral-400">{calculateGradeInfo(gradYear).age}</div>
                </motion.div>
              )}

              <button 
                onClick={handleNext} 
                disabled={!gradYear}
                className="w-full bg-white text-black rounded-full py-4 hover:bg-neutral-200 transition-all font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 text-lg"
              >
                <span>Continue</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-3xl flex flex-col space-y-8"
            >
              <div className="space-y-3 text-center">
                <h1 className="text-3xl font-extrabold tracking-tight">How did you hear about us?</h1>
                <p className="text-neutral-400 text-sm">Select the source that first led you to AP Lab.</p>
              </div>

              {/* Exact 6-row grid, no nested scrollbar to prevent cutoffs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-2xl mx-auto">
                {referralSources.map((source) => {
                  const BrandIcon = source.icon;
                  const isSelected = referredBy === source.id;
                  return (
                    <button
                      key={source.id}
                      onClick={() => setReferredBy(source.id)}
                      className={`p-4 rounded-xl border flex items-center justify-between text-left transition-all duration-300 ${
                        isSelected 
                          ? "border-emerald-500 bg-emerald-950/20 text-white" 
                          : "border-white/5 bg-neutral-900/40 text-neutral-300 hover:border-white/15"
                      }`}
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${isSelected ? "bg-white/10" : "bg-white/5"}`}>
                          <BrandIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-sm font-bold">{source.title}</div>
                          <div className="text-[10px] text-neutral-500 uppercase tracking-wider">{source.desc}</div>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${isSelected ? "border-emerald-500 bg-emerald-500 text-black" : "border-white/20"}`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <button 
                onClick={handleNext} 
                disabled={!referredBy}
                className="w-full bg-white text-black rounded-full py-4 hover:bg-neutral-200 transition-all font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 text-lg"
              >
                <span>Continue</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-xl flex flex-col items-center space-y-8"
            >
              <div className="space-y-3 text-center">
                <h1 className="text-3xl font-extrabold tracking-tight">What is your Goal AP Score?</h1>
                <p className="text-neutral-400 text-sm">Slide to select your target score on the AP Exam (1 - 5).</p>
              </div>

              {/* Exact cloned College Board AP score card mock-up */}
              <div className="bg-white text-black rounded-2xl w-full max-w-sm overflow-hidden border border-neutral-200 shadow-2xl flex flex-col items-center pb-6">
                {/* Header */}
                <div className="w-full bg-[#2f78b4] py-6 text-center text-white relative overflow-hidden">
                  <div className="absolute inset-0 opacity-15 pointer-events-none">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="30" cy="20" r="8" fill="white" />
                      <circle cx="20" cy="35" r="5" fill="white" />
                      <circle cx="45" cy="25" r="5" fill="white" />
                      <line x1="30" y1="20" x2="20" y2="35" stroke="white" strokeWidth="2" />
                      <line x1="30" y1="20" x2="45" y2="25" stroke="white" strokeWidth="2" />
                      <circle cx="280" cy="40" r="10" fill="white" />
                      <circle cx="295" cy="20" r="6" fill="white" />
                      <circle cx="265" cy="30" r="6" fill="white" />
                      <line x1="280" y1="40" x2="295" y2="20" stroke="white" strokeWidth="2" />
                      <line x1="280" y1="40" x2="265" y2="30" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold font-manrope">AP Psychology</span>
                </div>

                {/* YOUR SCORE text */}
                <div className="text-[11px] uppercase font-bold tracking-widest text-neutral-500 mt-6 mb-2">
                  YOUR SCORE
                </div>

                {/* Arc and score */}
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      stroke="#e5e7eb" 
                      strokeWidth="6" 
                      fill="none" 
                      strokeDasharray="251" 
                      strokeDashoffset="63"
                      strokeLinecap="round"
                      className="origin-center rotate-[45deg]"
                    />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      stroke="#22c55e" 
                      strokeWidth="6" 
                      fill="none" 
                      strokeDasharray="251" 
                      strokeDashoffset={251 - (251 - 63) * (goalScore / 5)}
                      strokeLinecap="round"
                      className="origin-center rotate-[45deg] transition-all duration-300"
                    />
                  </svg>
                  <span className="text-7xl font-extrabold text-black font-sans select-none">{goalScore}</span>
                </div>

                {/* Cloned Detailed University Skyline outline drawing */}
                <div className="mt-4 mb-4 flex justify-center">
                  <svg className="w-56 h-18 text-neutral-400" viewBox="0 0 220 70" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="10" y1="65" x2="210" y2="65" stroke="currentColor" strokeWidth="1.5" />

                    {/* 1. Left flat building */}
                    <rect x="25" y="35" width="20" height="30" fill="none" />
                    <rect x="29" y="39" width="4" height="6" />
                    <rect x="37" y="39" width="4" height="6" />
                    <rect x="29" y="49" width="4" height="6" />
                    <rect x="37" y="49" width="4" height="6" />
                    <rect x="29" y="57" width="4" height="6" />
                    <rect x="37" y="57" width="4" height="6" />

                    {/* 2. Dome building */}
                    <rect x="50" y="45" width="26" height="20" fill="none" />
                    <path d="M50 45 C 50 35, 76 35, 76 45 Z" fill="none" />
                    <circle cx="63" cy="38" r="2.5" />
                    <rect x="59" y="52" width="8" height="13" rx="3" />

                    {/* 3. Center building (triangle roof, columns) */}
                    <rect x="82" y="27" width="38" height="38" fill="none" />
                    <polygon points="82,27 101,17 120,27" />
                    <line x1="90" y1="27" x2="90" y2="65" />
                    <line x1="98" y1="27" x2="98" y2="65" />
                    <line x1="104" y1="27" x2="104" y2="65" />
                    <line x1="112" y1="27" x2="112" y2="65" />
                    <rect x="97" y="48" width="8" height="17" />

                    {/* 4. Clock tower / Steeple spire building */}
                    <rect x="126" y="38" width="24" height="27" fill="none" />
                    <rect x="133" y="16" width="10" height="22" fill="none" />
                    <polygon points="133,16 138,4 143,16" />
                    <circle cx="138" cy="24" r="2.5" />
                    <rect x="134" y="46" width="8" height="19" rx="3" />

                    {/* 5. Right flat building */}
                    <rect x="156" y="35" width="20" height="30" fill="none" />
                    <rect x="160" y="39" width="4" height="6" />
                    <rect x="168" y="39" width="4" height="6" />
                    <rect x="160" y="49" width="4" height="6" />
                    <rect x="168" y="49" width="4" height="6" />
                    <rect x="160" y="57" width="4" height="6" />
                    <rect x="168" y="57" width="4" height="6" />
                  </svg>
                </div>

                <p className="text-center text-xs text-neutral-600 px-8 leading-relaxed mb-5 select-none font-medium">
                  Most U.S. colleges accept your score for credit and placement.
                </p>

                <button type="button" className="border border-neutral-800 text-neutral-800 px-7 py-2 rounded-full text-xs font-bold hover:bg-neutral-50 transition-all select-none">
                  Find College Credit
                </button>
                <span className="text-[10px] text-neutral-400 mt-3 hover:underline cursor-pointer select-none">
                  About your score
                </span>
              </div>

              {/* Slider Input */}
              <div className="space-y-4 px-4 w-full max-w-md">
                <div className="flex items-center justify-between text-xs text-neutral-500 font-bold uppercase tracking-wider">
                  <span>1 (Lowest)</span>
                  <span>5 (Highest)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={goalScore}
                  onChange={(e) => setGoalScore(parseInt(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none"
                />
              </div>

              <button 
                onClick={handleNext} 
                className="w-full max-w-md bg-white text-black rounded-full py-4 hover:bg-neutral-200 transition-all font-semibold flex items-center justify-center space-x-2 text-lg"
              >
                <span>Continue</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-2xl flex flex-col space-y-8"
            >
              <div className="space-y-3 text-center">
                <h1 className="text-3xl font-extrabold tracking-tight">How are you using AP Lab?</h1>
                <p className="text-neutral-400 text-sm">Select all target usage intentions (select multiple if applicable).</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {intents.map((intent) => {
                  const IconComp = intent.icon;
                  const isSelected = selectedIntents.includes(intent.id);
                  return (
                    <button
                      key={intent.id}
                      onClick={() => handleIntentToggle(intent.id)}
                      className={`p-6 rounded-2xl border text-left flex flex-col space-y-4 transition-all duration-300 hover:border-white/15 relative overflow-hidden ${
                        isSelected 
                          ? "border-emerald-500 bg-emerald-950/20 text-white" 
                          : "border-white/5 bg-neutral-900/40 text-neutral-300"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? "bg-emerald-500/10 text-emerald-400" : "bg-white/5 text-neutral-400"}`}>
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? "border-emerald-500 bg-emerald-500 text-black" : "border-white/20"}`}>
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-base">{intent.title}</div>
                        <div className="text-xs text-neutral-500 mt-1 leading-relaxed">{intent.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <button 
                onClick={handleNext} 
                disabled={selectedIntents.length === 0}
                className="w-full bg-white text-black rounded-full py-4 hover:bg-neutral-200 transition-all font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 text-lg"
              >
                <span>Continue</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {step === 6 && (
            <motion.div
              key="step6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-2xl flex flex-col space-y-6"
            >
              <div className="space-y-3 text-center">
                <h1 className="text-3xl font-extrabold tracking-tight">Select classes you are taking</h1>
                <p className="text-neutral-400 text-sm">Choose from the 9 AP courses we currently support.</p>
              </div>

              {/* Search Bar */}
              <div className="relative flex items-center bg-[#141414] border border-white/10 focus-within:border-emerald-500/50 transition-colors rounded-xl px-5 h-[56px]">
                <Search className="w-5 h-5 text-neutral-500 mr-3" />
                <input
                  type="text"
                  placeholder="Search classes..."
                  value={classQuery}
                  onChange={(e) => setClassQuery(e.target.value)}
                  className="w-full bg-transparent text-white focus:outline-none placeholder:text-neutral-600 text-sm font-medium"
                />
              </div>

              {/* Classes Grid with matching dashboard color and icon */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 max-h-[320px] overflow-y-auto custom-scrollbar pr-2">
                {filteredClasses.map((item) => {
                  const isSelected = selectedClasses.includes(item.slug);
                  const style = classStylesMap[item.slug] || { color: "text-neutral-400", glow: "border-white/5 bg-neutral-900/40", bg: "bg-neutral-500", icon: Book };
                  const IconComp = style.icon;
                  
                  return (
                    <button
                      key={item.slug}
                      onClick={() => handleClassToggle(item.slug)}
                      className={`p-4 rounded-xl border text-left flex flex-col justify-between h-[110px] transition-all duration-300 ${
                        isSelected 
                          ? `${style.glow} border-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.1)]` 
                          : "border-white/5 bg-neutral-900/40 text-neutral-300 hover:border-white/15"
                      }`}
                    >
                      <div className="flex justify-between items-start w-full">
                        <span className="text-[9px] uppercase tracking-wider font-mono opacity-50">{item.category}</span>
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${isSelected ? `${style.bg} text-black` : `bg-white/5 ${style.color}`}`}>
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <div className="font-bold text-sm leading-tight">{item.name}</div>
                    </button>
                  );
                })}
              </div>

              <button 
                onClick={handleNext} 
                disabled={selectedClasses.length === 0}
                className="w-full bg-white text-black rounded-full py-4 hover:bg-neutral-200 transition-all font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 text-lg"
              >
                <span>Continue</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {step === 7 && (
            <motion.div
              key="step7"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-md flex flex-col space-y-8"
            >
              <div className="space-y-3 text-center">
                <h1 className="text-3xl font-extrabold tracking-tight">Set up your profile</h1>
                <p className="text-neutral-400 text-sm">Choose a display name and upload a profile picture.</p>
              </div>

              {/* Profile Avatar Selection */}
              <div className="flex flex-col items-center space-y-4">
                <div className="relative group">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-emerald-500/40 flex items-center justify-center bg-neutral-900 relative shadow-[0_0_25px_rgba(16,185,129,0.2)]">
                    <img 
                      src={photoDataUrl || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80"} 
                      alt="Avatar" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <label className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black flex items-center justify-center cursor-pointer shadow-lg transition-all border border-black hover:scale-105">
                    <Upload className="w-4 h-4" />
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                </div>

                {/* Miscellaneous Avatar Presets */}
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 font-bold">Select Miscellaneous Avatar</span>
                  <div className="flex items-center space-x-2.5">
                    {[
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=250&auto=format&fit=crop&q=80",
                      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=250&auto=format&fit=crop&q=80",
                      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=250&auto=format&fit=crop&q=80",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=250&auto=format&fit=crop&q=80",
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=250&auto=format&fit=crop&q=80",
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=250&auto=format&fit=crop&q=80"
                    ].map((imgUrl, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setPhotoDataUrl(imgUrl)}
                        className={`w-9 h-9 rounded-full overflow-hidden border-2 transition-all hover:scale-110 ${
                          photoDataUrl === imgUrl ? "border-emerald-400 scale-110 shadow-[0_0_10px_rgba(16,185,129,0.5)]" : "border-white/10 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img src={imgUrl} alt={`Avatar Preset ${i + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Display Name Input */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-bold text-neutral-400">Display Name</label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 text-sm transition-all placeholder:text-neutral-600 font-semibold"
                />
              </div>

              <button 
                onClick={handleNext} 
                disabled={!username.trim()}
                className="w-full bg-white text-black rounded-full py-4 hover:bg-neutral-200 transition-all font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 text-lg"
              >
                <span>Continue</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {step === 8 && (
            <motion.div
              key="step8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-md flex flex-col items-center text-center space-y-8"
            >
              {/* Premium Animated Green Check Circle */}
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/20 flex items-center justify-center text-emerald-400 relative">
                <svg className="w-12 h-12" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <circle className="stroke-emerald-500/30" cx="26" cy="26" r="23" />
                  <path 
                    className="stroke-emerald-400 animate-draw-check" 
                    d="M14 27l7.5 7.5L38 18" 
                    strokeDasharray="100"
                    strokeDashoffset="100"
                    style={{
                      animation: "draw-check 0.8s cubic-bezier(0.65, 0, 0.45, 1) forwards 0.2s"
                    }}
                  />
                </svg>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl font-extrabold tracking-tight">You are all set!</h1>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mx-auto">
                  Your customized workspace is ready. Click the button below to claim your study dashboard.
                </p>
              </div>

              <div className="w-full bg-neutral-900/40 border border-white/5 rounded-2xl p-5 text-left space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-neutral-500">Graduation Year:</span>
                  <span className="font-bold text-neutral-300">{gradYear}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-neutral-500">Goal AP Score:</span>
                  <span className="font-bold text-emerald-400">{goalScore}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-neutral-500">Target Classes:</span>
                  <span className="font-bold text-neutral-300">{selectedClasses.length} selected</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-neutral-500">Username:</span>
                  <span className="font-bold text-neutral-300">{username}</span>
                </div>
              </div>

              <div className="flex flex-col space-y-3 w-full">
                <button 
                  onClick={handleSubmit} 
                  disabled={saving}
                  className="w-full bg-white text-black font-semibold rounded-full py-4 hover:bg-neutral-200 transition-all flex items-center justify-center space-x-2 text-base disabled:opacity-50"
                >
                  {saving ? (
                    <span>Saving details...</span>
                  ) : (
                    <>
                      <span>Enter Dashboard</span>
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
          </div>
          <div className="flex-grow" />
        </div>
      </div>
    </div>
  );
}

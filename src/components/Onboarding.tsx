"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, Search, Upload, User, Check, Book, 
  GraduationCap, Trophy, FileText, ChevronRight, Activity, ChevronLeft,
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
  <svg viewBox="0 0 24 24" fill="currentColor" className={props.className}>
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.07-2.88-.53-4.08-1.37-.1.49-.13.99-.13 1.49-.01 2.3-.65 4.67-2.07 6.49-1.63 2.1-4.22 3.32-6.85 3.39-2.92.1-5.91-1.1-7.7-3.41C-.18 14.28-.4 10.66.97 7.74c1.23-2.61 3.97-4.47 6.9-4.66.02 1.34.01 2.69.01 4.03-1.68.08-3.41.97-4.14 2.51-.83 1.74-.43 4.03.99 5.3 1.39 1.25 3.57 1.38 5.09.31.94-.65 1.5-1.74 1.54-2.88.02-3.46.01-6.91.01-10.37.03-.66.07-1.33.16-1.96z" />
  </svg>
);

const RedditIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" className={props.className}>
    <circle cx="12" cy="12" r="12" fill="#FF4500" />
    <path d="M18.89 10.34a1.76 1.76 0 0 0-2.95-1.34 9.07 9.07 0 0 0-4.06-1.27l.86-2.73 2.37.5a1.27 1.27 0 1 0 1.25-1.07 1.28 1.28 0 0 0-1.23 1l-2.61-.55a.32.32 0 0 0-.37.24l-.94 3a9.07 9.07 0 0 0-4.07 1.27 1.76 1.76 0 0 0-2.95 1.34c0 .6.3 1.13.76 1.48a6.57 6.57 0 0 0-.04.74c0 3.19 3.52 5.78 7.84 5.78s7.84-2.59 7.84-5.78c0-.25-.01-.5-.04-.74a1.73 1.73 0 0 0 .76-1.48zM8.33 11.6a1.01 1.01 0 1 1 1 1 1 1 0 0 1-1-1zm6.94 3.63c-1 .96-2.86.96-3.85 0a.33.33 0 0 1 0-.46.32.32 0 0 1 .45 0c.74.72 2.22.72 2.95 0a.32.32 0 0 1 .45.46zm-.64-2.63a1.01 1.01 0 1 1 1-1 1 1 0 0 1-1 1z" fill="#FFFFFF" />
  </svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" className={props.className}>
    <circle cx="12" cy="12" r="12" fill="#5865F2" />
    <path d="M16.92 8.35a7.34 7.34 0 0 0-2.67-1 .06.06 0 0 0-.07.03 5.09 5.09 0 0 0-.23.49 6.78 6.78 0 0 0-3.9 0 4.63 4.63 0 0 0-.24-.49.06.06 0 0 0-.07-.03 7.34 7.34 0 0 0-2.67 1 .05.05 0 0 0-.03.02 7.55 7.55 0 0 0-1.28 5 .06.06 0 0 0 .04.04 7.42 7.42 0 0 0 2.28.7.06.06 0 0 0 .07-.02 5.09 5.09 0 0 0 .47-.76.06.06 0 0 0-.03-.08c-.73-.28-1.4-.61-2-.99a.06.06 0 0 1 0-.1 3.51 3.51 0 0 0 .16-.13.06.06 0 0 1 .07 0c1.47.67 3.07.67 4.52 0a.06.06 0 0 1 .07 0c.05.04.1.09.16.13a.06.06 0 0 1 0 .1c-.63.38-1.3.71-2.03.99a.06.06 0 0 0-.03.08c.18.3.34.61.47.76a.06.06 0 0 0 .07.02 7.42 7.42 0 0 0 2.28-.7.06.06 0 0 0 .04-.04c.48-2 .08-3.77-1.28-5a.05.05 0 0 0-.03-.02zm-5.74 3.73a.87.87 0 1 1 .86-.87.86.86 0 0 1-.86.87zm3.64 0a.87.87 0 1 1 .86-.87.87.87 0 0 1-.86.87z" fill="#FFFFFF" />
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
    <rect width="24" height="24" rx="4" fill="#1DA1F2" />
    <path d="M20.25 7.5a6.5 6.5 0 0 1-1.88.52c.67-.4 1.18-1.04 1.42-1.8a6.5 6.5 0 0 1-2.08.8 3.28 3.28 0 0 0-5.58 3c-2.73-.14-5.15-1.45-6.77-3.43a3.28 3.28 0 0 0 1.02 4.38A3.25 3.25 0 0 1 5 10.57v.04a3.28 3.28 0 0 0 2.63 3.21 3.28 3.28 0 0 1-1.48.06A3.29 3.29 0 0 0 9.2 16.2c-2.4 1.88-5.43 2.44-8.2 2.12a9.28 9.28 0 0 0 5.03 1.47c6.04 0 9.34-5 9.34-9.33q0-.22-.01-.43A6.68 6.68 0 0 0 20.25 7.5z" fill="#FFFFFF" />
  </svg>
);

const ChatGPTIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" className={props.className}>
    <circle cx="12" cy="12" r="12" fill="#10a37f" />
    <path d="M16.5 10.3c.3-.2.5-.5.6-.9.1-.3.1-.7 0-1-.1-.3-.3-.6-.6-.8s-.6-.3-1-.3h-2.1c-.2-.5-.5-1-.9-1.3-.4-.3-.9-.5-1.4-.5s-1 .2-1.4.5c-.4.3-.7.8-.9 1.3H7.1c-.4 0-.7.1-1 .3s-.5.5-.6.8c-.1.3-.1.7 0 1 .1.3.3.6.6.8.3.2.5.5.6.9.1.3.1.7 0 1-.1.3-.3.6-.6.8s-.6.3-1 .3h2.1c.2.5.5 1 .9 1.3.4.3.9.5 1.4.5s1-.2 1.4-.5c.4-.3.7-.8.9-1.3h2.1c.4 0 .7-.1 1-.3s.5-.5.6-.8c.1-.3.1-.7 0-1-.1-.3-.3-.6-.6-.8z" fill="#FFFFFF" />
  </svg>
);

const WeChatIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" className={props.className}>
    <circle cx="12" cy="12" r="12" fill="#07C160" />
    <path d="M10.8 7.2c-2.3 0-4.2 1.5-4.2 3.4 0 1 .9 1.9 2.5 2.5l-.6 1.8 2.1-1.1c.4.1.8.2 1.2.2 2.3 0 4.2-1.5 4.2-3.4s-1.9-3.4-4.2-3.4zm4.8 4.8c1.7 0 3-1.1 3-2.5s-1.3-2.5-3-2.5-3 1.1-3 2.5 1.3 2.5 3 2.5z" fill="#FFFFFF" />
  </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" className={props.className}>
    <circle cx="12" cy="12" r="12" fill="#25D366" />
    <path d="M16.75 15.3c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1-.15.17-.3.2-.56.06-.26-.13-1.1-.4-2.1-1.3-.77-.7-1.3-1.55-1.45-1.8-.15-.26-.02-.4.1-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45s-.58-1.4-.8-1.9c-.2-.5-.45-.4-.6-.4h-.5c-.17 0-.45.06-.7.33-.24.27-.92.9-.92 2.2s.95 2.55 1.08 2.7c.13.17 1.87 2.85 4.54 4 .64.27 1.14.44 1.53.56.64.2 1.23.17 1.7.1.5-.07 1.54-.63 1.76-1.24.22-.6.22-1.13.15-1.24-.07-.11-.26-.24-.5-.37z" fill="#FFFFFF" />
  </svg>
);

const AoPSIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" className={props.className}>
    <circle cx="12" cy="12" r="12" fill="#009FDF" />
    <path d="M12 5.5l5.5 3.2v6.4l-5.5 3.2-5.5-3.2v-6.4z" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
  </svg>
);

const OtherIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const reviews = [
  { id: 1, name: "Sophia M.", role: "AP Bio Student", text: "The Live Diagnostics showed exactly where I was failing. Got a 5!" },
  { id: 2, name: "Daniel K.", role: "AP Chem Student", text: "Socratic AI is literally a 24/7 tutor. Unbelievable platform." },
  { id: 3, name: "Emily R.", role: "AP Calc Student", text: "I struggled with integrals until the Neural Recall system stepped in." },
  { id: 4, name: "Liam T.", role: "AP Physics Student", text: "The mock exams are exactly like the real thing. Highly recommend." },
  { id: 5, name: "Ava L.", role: "AP Lang Student", text: "Beautiful UI. Studying actually feels engaging now instead of a chore." },
  { id: 6, name: "Noah W.", role: "AP Euro Student", text: "My teacher recommended this, and my DBQ scores skyrocketed." },
  { id: 7, name: "Mia S.", role: "AP Psych Student", text: "The spaced repetition algorithm is absolute magic. Never forgetting vocab again." },
  { id: 8, name: "Ethan H.", role: "AP US History", text: "Best $0 I've ever spent. The fact that this is free is insane." }
];

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
  { id: "wechat", title: "WeChat", desc: "Social Media", icon: WeChatIcon },
  { id: "whatsapp", title: "WhatsApp", desc: "Social Media", icon: WhatsAppIcon },
  { id: "aops", title: "AoPS", desc: "Forum", icon: AoPSIcon },
  { id: "other", title: "Other", desc: "Other (Specify Below)", icon: OtherIcon }
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
  { name: "AP English Lang", slug: "ap-eng-lang", category: "Humanities & Arts" },
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
  const [otherReferral, setOtherReferral] = useState("");
  const [goalScore, setGoalScore] = useState(5);
  const [selectedIntents, setSelectedIntents] = useState<string[]>([]);
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const [classQuery, setClassQuery] = useState("");
  const [username, setUsername] = useState("");
  const [photoDataUrl, setPhotoDataUrl] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

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
      reader.onloadend = () => {
        setPhotoDataUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    setSaving(true);
    try {
      const activeUser = auth.currentUser;
      const finalUsername = username.trim() || activeUser?.displayName || "AP Scholar";

      // 1. Update Firebase Auth Profile
      if (activeUser) {
        await updateProfile(activeUser, {
          displayName: finalUsername,
          photoURL: photoDataUrl || activeUser.photoURL || ""
        });
      }

      // 2. Save Onboarding progress to Firestore Progress Document under correct 'userProgress' collection
      const uid = userId || activeUser?.uid;
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
          referredBy: referredBy === "other" ? `other: ${otherReferral}` : referredBy,
          goalScore,
          usageIntents: selectedIntents,
          selectedClasses
        };

        // Write to local storage for zero-latency recovery
        localStorage.setItem(`ap-lab-progress-${uid}`, JSON.stringify(updatedProgress));

        // Write to firestore collection 'userProgress'
        await setDoc(docRef, updatedProgress, { merge: true });
      }

      // 3. Complete and hide onboarding view
      onComplete();
    } catch (e) {
      console.error("Onboarding submission error:", e);
    } finally {
      setSaving(false);
    }
  };

  const filteredClasses = classes.filter(c => 
    c.name.toLowerCase().includes(classQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[100] bg-black text-white flex flex-col font-manrope selection:bg-emerald-500/30 selection:text-white">
      
      {/* Top Header Section with exact non-pulsating Navbar Logo */}
      <div className="w-full bg-[#030303] pt-6 pb-4 px-6 md:px-12 flex flex-col space-y-4 z-20 border-b border-white/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="font-manrope font-bold text-white tracking-tight">AP Lab</span>
          </div>
          <span className="text-xs font-semibold text-neutral-500">Step {step} of {totalSteps}</span>
        </div>

        {/* Dynamic Progress Track with Back Arrow and green/blue gradient */}
        <div className="flex items-center w-full max-w-5xl mx-auto">
          {step > 1 ? (
            <button 
              onClick={handleBack} 
              className="text-white/50 hover:text-white transition-colors mr-4 p-1.5 rounded-full hover:bg-white/5 focus:outline-none shrink-0"
              title="Go back to previous step"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          ) : (
            <div className="w-9 mr-4 shrink-0" />
          )}
          
          <div className="flex-1 h-3 bg-neutral-900 border border-white/10 rounded-full overflow-hidden p-[2px]">
            <motion.div 
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-blue-500" 
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Steps Content Area */}
      <div className="flex-1 overflow-y-auto px-6 py-10 md:px-12 flex flex-col items-center justify-center max-w-5xl mx-auto w-full">
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

              {/* Reviews Marquee */}
              <div className="relative w-full overflow-hidden py-4 flex flex-col space-y-4">
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <div className="flex w-max space-x-6">
                  <motion.div 
                    className="flex space-x-6"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  >
                    {[...reviews, ...reviews].map((review, i) => (
                      <div key={i} className="shrink-0 w-[300px] md:w-[380px] bg-neutral-900/60 border border-white/5 rounded-3xl p-6 text-left flex flex-col justify-between">
                        <div className="flex space-x-1 mb-3">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-[14px] h-[14px] fill-emerald-400 text-emerald-400" />
                          ))}
                        </div>
                        <p className="text-neutral-300 text-sm leading-relaxed mb-6 italic">
                          &ldquo;{review.text}&rdquo;
                        </p>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-sm">
                            {review.name[0]}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-white">{review.name}</span>
                            <span className="text-[10px] text-neutral-500">{review.role}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 max-h-[380px] overflow-y-auto custom-scrollbar pr-2">
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

              {referredBy === "other" && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-2"
                >
                  <label className="text-xs uppercase tracking-wider font-bold text-neutral-400">Please Specify:</label>
                  <input
                    type="text"
                    placeholder="Other source"
                    value={otherReferral}
                    onChange={(e) => setOtherReferral(e.target.value)}
                    className="w-full bg-neutral-900/80 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 text-sm transition-all placeholder:text-neutral-600"
                  />
                </motion.div>
              )}

              <button 
                onClick={handleNext} 
                disabled={!referredBy || (referredBy === "other" && !otherReferral.trim())}
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
                  <span className="text-xl font-bold font-manrope">AP Chemistry</span>
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

                {/* University Skyline Outline SVG */}
                <div className="mt-4 mb-4 flex justify-center">
                  <svg className="w-48 h-16 text-neutral-300" viewBox="0 0 200 60" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="20" y="25" width="20" height="35" />
                    <rect x="25" y="30" width="4" height="6" />
                    <rect x="31" y="30" width="4" height="6" />
                    <rect x="25" y="42" width="4" height="6" />
                    <rect x="31" y="42" width="4" height="6" />
                    <rect x="50" y="30" width="30" height="30" />
                    <path d="M50 30 C 50 15, 80 15, 80 30 Z" />
                    <line x1="65" y1="15" x2="65" y2="5" />
                    <rect x="62" y="38" width="6" height="12" rx="3" />
                    <rect x="90" y="10" width="20" height="50" />
                    <polygon points="90,10 100,0 110,10" />
                    <circle cx="100" cy="22" r="4" strokeWidth="1" />
                    <rect x="98" y="35" width="4" height="25" />
                    <rect x="120" y="25" width="25" height="35" />
                    <path d="M120 25 C 120 18, 145 18, 145 25 Z" />
                    <rect x="126" y="32" width="4" height="6" />
                    <rect x="134" y="32" width="4" height="6" />
                    <rect x="155" y="30" width="25" height="30" />
                    <rect x="160" y="36" width="5" height="6" />
                    <rect x="170" y="36" width="5" height="6" />
                    <line x1="10" y1="60" x2="190" y2="60" strokeWidth="2" />
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
                  <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-dashed border-white/20 flex items-center justify-center bg-neutral-900 relative">
                    {photoDataUrl ? (
                      <img src={photoDataUrl} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-10 h-10 text-neutral-600" />
                    )}
                  </div>
                  <label className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black flex items-center justify-center cursor-pointer shadow-lg transition-all border border-black hover:scale-105">
                    <Upload className="w-4 h-4" />
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500">Avatar Image</span>
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
    </div>
  );
}

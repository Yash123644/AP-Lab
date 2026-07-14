"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, Search, Upload, User, Check, Book, 
  GraduationCap, Trophy, FileText, ChevronRight, Sparkles,
  Users, School, Globe, MessageCircle, 
  TrendingUp, Bot, PhoneCall
} from "lucide-react";
import { useProgress } from "@/context/ProgressContext";
import { updateProfile } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";

const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

interface OnboardingProps {
  onComplete: () => void;
  userEmail?: string;
  userId?: string;
}

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
  { id: "friends", title: "Friends or Family", desc: "Personal Recommendation", icon: Users },
  { id: "school", title: "Teacher or School", desc: "Personal Recommendation", icon: School },
  { id: "google", title: "Google", desc: "Search Engine", icon: Globe },
  { id: "youtube", title: "YouTube", desc: "Video Streaming", icon: Youtube },
  { id: "instagram", title: "Instagram", desc: "Social Media", icon: Instagram },
  { id: "tiktok", title: "TikTok", desc: "Social Media", icon: MessageCircle },
  { id: "reddit", title: "Reddit", desc: "Social Media", icon: TrendingUp },
  { id: "discord", title: "Discord", desc: "Social Media", icon: MessageCircle },
  { id: "linkedin", title: "LinkedIn", desc: "Social Media", icon: Globe },
  { id: "twitter", title: "Twitter", desc: "Social Media", icon: Twitter },
  { id: "chatgpt", title: "ChatGPT", desc: "AI", icon: Bot },
  { id: "wechat", title: "WeChat", desc: "Social Media", icon: MessageCircle },
  { id: "whatsapp", title: "WhatsApp", desc: "Social Media", icon: PhoneCall },
  { id: "aops", title: "AoPS", desc: "Forum", icon: School },
  { id: "other", title: "Other", desc: "Other (Specify Below)", icon: Globe }
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

      // 2. Save Onboarding progress to Firestore Progress Document
      const uid = userId || activeUser?.uid;
      if (uid) {
        const docRef = doc(db, "users", uid);
        await setDoc(docRef, {
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
        }, { merge: true });
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
      {/* Progress Bar Header */}
      <div className="w-full bg-neutral-900/50 backdrop-blur-md pt-6 pb-4 px-6 md:px-12 flex flex-col space-y-3 z-20 border-b border-white/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
            <span className="text-sm font-bold tracking-wider uppercase text-neutral-400">AP Lab Onboarding</span>
          </div>
          <span className="text-xs font-semibold text-neutral-500">Step {step} of {totalSteps}</span>
        </div>
        <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500" 
            animate={{ width: `${(step / totalSteps) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Steps Content Area */}
      <div className="flex-1 overflow-y-auto px-6 py-12 md:px-12 flex flex-col items-center justify-center max-w-5xl mx-auto w-full">
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

              <div className="flex space-x-4">
                <button onClick={handleBack} className="flex-1 bg-neutral-900 border border-white/10 rounded-full py-4 text-neutral-300 hover:bg-neutral-800 transition-all font-semibold">
                  Back
                </button>
                <button 
                  onClick={handleNext} 
                  disabled={!gradYear}
                  className="flex-[2] bg-white text-black rounded-full py-4 hover:bg-neutral-200 transition-all font-semibold flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <span>Continue</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-2xl flex flex-col space-y-8"
            >
              <div className="space-y-3 text-center">
                <h1 className="text-3xl font-extrabold tracking-tight">How did you hear about us?</h1>
                <p className="text-neutral-400 text-sm">Select the source that first led you to AP Lab.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 max-h-[350px] overflow-y-auto custom-scrollbar pr-2">
                {referralSources.map((source) => {
                  const IconComp = source.icon;
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
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isSelected ? "bg-emerald-500/10 text-emerald-400" : "bg-white/5 text-neutral-400"}`}>
                          <IconComp className="w-5 h-5" />
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

              <div className="flex space-x-4">
                <button onClick={handleBack} className="flex-1 bg-neutral-900 border border-white/10 rounded-full py-4 text-neutral-300 hover:bg-neutral-800 transition-all font-semibold">
                  Back
                </button>
                <button 
                  onClick={handleNext} 
                  disabled={!referredBy || (referredBy === "other" && !otherReferral.trim())}
                  className="flex-[2] bg-white text-black rounded-full py-4 hover:bg-neutral-200 transition-all font-semibold flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <span>Continue</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-xl flex flex-col space-y-10"
            >
              <div className="space-y-3 text-center">
                <h1 className="text-3xl font-extrabold tracking-tight">What is your Goal AP Score?</h1>
                <p className="text-neutral-400 text-sm">Slide to select your target score on the AP Exam (1 - 5).</p>
              </div>

              {/* Large Score Indicator */}
              <div className="flex flex-col items-center justify-center py-6">
                <div 
                  className="w-40 h-40 rounded-full border border-emerald-500/30 flex flex-col items-center justify-center relative shadow-[0_0_50px_rgba(16,185,129,0.15)] bg-neutral-950"
                >
                  <div className="absolute -inset-2 rounded-full border border-dashed border-emerald-500/20 animate-spin-slow" />
                  <span className="text-[80px] font-black leading-none text-emerald-400 font-mono tracking-tighter">{goalScore}</span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 mt-1">Goal Score</span>
                </div>
              </div>

              {/* Slider Input */}
              <div className="space-y-4 px-4">
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

              <div className="flex space-x-4">
                <button onClick={handleBack} className="flex-1 bg-neutral-900 border border-white/10 rounded-full py-4 text-neutral-300 hover:bg-neutral-800 transition-all font-semibold">
                  Back
                </button>
                <button 
                  onClick={handleNext} 
                  className="flex-[2] bg-white text-black rounded-full py-4 hover:bg-neutral-200 transition-all font-semibold flex items-center justify-center space-x-2"
                >
                  <span>Continue</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
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

              <div className="flex space-x-4">
                <button onClick={handleBack} className="flex-1 bg-neutral-900 border border-white/10 rounded-full py-4 text-neutral-300 hover:bg-neutral-800 transition-all font-semibold">
                  Back
                </button>
                <button 
                  onClick={handleNext} 
                  disabled={selectedIntents.length === 0}
                  className="flex-[2] bg-white text-black rounded-full py-4 hover:bg-neutral-200 transition-all font-semibold flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <span>Continue</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
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

              {/* Classes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
                {filteredClasses.map((item) => {
                  const isSelected = selectedClasses.includes(item.slug);
                  return (
                    <button
                      key={item.slug}
                      onClick={() => handleClassToggle(item.slug)}
                      className={`p-4 rounded-xl border text-left flex flex-col justify-between h-[110px] transition-all duration-300 ${
                        isSelected 
                          ? "border-emerald-500 bg-emerald-950/20 text-white" 
                          : "border-white/5 bg-neutral-900/40 text-neutral-300 hover:border-white/15"
                      }`}
                    >
                      <div className="flex justify-between items-start w-full">
                        <span className="text-[9px] uppercase tracking-wider font-mono opacity-50">{item.category}</span>
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${isSelected ? "border-emerald-500 bg-emerald-500 text-black" : "border-white/20"}`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                      <div className="font-bold text-sm leading-tight">{item.name}</div>
                    </button>
                  );
                })}
              </div>

              <div className="flex space-x-4">
                <button onClick={handleBack} className="flex-1 bg-neutral-900 border border-white/10 rounded-full py-4 text-neutral-300 hover:bg-neutral-800 transition-all font-semibold">
                  Back
                </button>
                <button 
                  onClick={handleNext} 
                  disabled={selectedClasses.length === 0}
                  className="flex-[2] bg-white text-black rounded-full py-4 hover:bg-neutral-200 transition-all font-semibold flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <span>Continue</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
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

              <div className="flex space-x-4">
                <button onClick={handleBack} className="flex-1 bg-neutral-900 border border-white/10 rounded-full py-4 text-neutral-300 hover:bg-neutral-800 transition-all font-semibold">
                  Back
                </button>
                <button 
                  onClick={handleNext} 
                  disabled={!username.trim()}
                  className="flex-[2] bg-white text-black rounded-full py-4 hover:bg-neutral-200 transition-all font-semibold flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <span>Continue</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
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
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Sparkles className="w-8 h-8 animate-pulse" />
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
                <button onClick={handleBack} disabled={saving} className="w-full bg-neutral-900 border border-white/10 rounded-full py-3.5 text-neutral-400 hover:bg-neutral-800 transition-all text-sm font-semibold disabled:opacity-50">
                  Back
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

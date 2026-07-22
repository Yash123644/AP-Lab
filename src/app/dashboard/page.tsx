"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LogOut, Microscope, Library, Calculator, 
  Search, Dna, Beaker, Atom, History, Brain, BookOpen, Sigma, BarChart3, Binary,
  ChevronRight, Activity, Star, User, Mail, X, BarChart2, Upload,
  Folder, Eye, Trophy, Video, FileText, Layers, Clock, ArrowUpRight
} from "lucide-react";
import { LevelBadge } from "@/components/LevelBadge";
import { LevelLeaderboard } from "@/components/LevelLeaderboard";
import { PixelCourseBackground } from "@/components/PixelCourseBackground";
import { auth, db } from "@/lib/firebase";
import { signOut, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { cn } from "@/lib/utils";
import { useProgress } from "@/context/ProgressContext";
import { courseRegistry } from "@/lib/courses/course-registry";
import { ReviewModal } from "@/components/ReviewModal";
import { Onboarding } from "@/components/Onboarding";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { getLevelForXp, getXpThresholdForLevel } from "@/lib/xpProgression";
import { DashboardContextMenu } from "@/components/DashboardContextMenu";
import { FloatingXPOperations } from "@/components/FloatingXPOperations";


const folders = [
  {
    title: "STEM & Sciences",
    icon: Microscope,
    color: "text-medical-teal",
    bgGlow: "bg-medical-teal",
    accent: "#0088ff",
    bgGradient: "from-[#0088ff] to-[#0044cc]",
    classes: [
      { name: "AP Biology", slug: "ap-biology", icon: Dna },
      { name: "AP Chemistry", slug: "ap-chemistry", icon: Beaker },
      { name: "AP Physics C", slug: "ap-physics-c", icon: Atom }
    ]
  },
  {
    title: "Humanities & Arts",
    icon: Library,
    color: "text-primary-purple",
    bgGlow: "bg-primary-purple",
    accent: "#a484d7",
    bgGradient: "from-[#8b5cf6] to-[#5b21b6]",
    classes: [
      { name: "AP US History", slug: "ap-ush", icon: History },
      { name: "AP Psychology", slug: "ap-psych", icon: Brain },
      { name: "AP English Language", slug: "ap-eng-lang", icon: BookOpen }
    ]
  },
  {
    title: "Mathematical Logic",
    icon: Calculator,
    color: "text-emerald-400",
    bgGlow: "bg-emerald-400",
    accent: "#34d399",
    bgGradient: "from-[#10b981] to-[#047857]",
    classes: [
      { name: "AP Calculus BC", slug: "ap-calc-bc", icon: Sigma },
      { name: "AP Statistics", slug: "ap-stats", icon: BarChart3 },
      { name: "AP Comp Sci A", slug: "ap-csa", icon: Binary }
    ]
  },
];

function SearchBar({ onSelect }: { onSelect: (slug: string) => void }) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  
  const allClassList = folders.flatMap(f => f.classes.map(c => ({ ...c, category: f.title, color: f.color })));
  const filtered = query === "" ? [] : allClassList.filter(c => 
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-3xl mb-24 z-[60] group">
      <style>{`
        @keyframes float-dust {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.1; }
          50% { transform: translateY(-4px) translateX(12px); opacity: 0.7; }
          100% { transform: translateY(0px) translateX(24px); opacity: 0.1; }
        }
        .dust-mote {
          animation: float-dust 4s infinite ease-in-out;
        }
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .gradient-cycle-effect {
          background: linear-gradient(90deg, #1d4ed8, #2563eb, #3b82f6, #60a5fa, #3b82f6, #2563eb, #1d4ed8);
          background-size: 200% auto;
          animation: gradient-flow 6s linear infinite;
        }
      `}</style>
      
      {/* Smooth Cycling Ambient Glow */}
      <div 
        className="absolute -inset-[12px] rounded-full blur-[24px] opacity-70 pointer-events-none z-0 gradient-cycle-effect"
      />

      {/* Cycling Outer Border (thick premium gradient ring) */}
      <div 
        className="absolute -inset-[6px] rounded-full pointer-events-none z-10 gradient-cycle-effect shadow-[0_12px_40px_rgba(37,99,235,0.3),_inset_0_1px_3px_rgba(255,255,255,0.2)]"
      />

      {/* Search Bar Container */}
      <div className="relative bg-[#050508]/95 rounded-full flex items-center p-1 backdrop-blur-3xl border border-white/10 z-20">
        <div className="flex-1 flex items-center px-6 relative overflow-hidden">
          <Search className="w-5 h-5 text-white/80 mr-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
          <div className="relative flex-1 flex items-center">
            <input
              type="text"
              placeholder="Search for an AP Course..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsOpen(true);
              }}
              onFocus={() => {
                setIsOpen(true);
              }}
              onBlur={() => {
                setTimeout(() => {
                  setIsOpen(false);
                }, 200);
              }}
              className="w-full bg-transparent py-4.5 text-white placeholder-white/20 focus:outline-none text-xl font-manrope font-medium"
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && filtered.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full mt-3 w-full bg-[#0a0a0f]/90 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[70]"
          >
            {filtered.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  onSelect(item.slug);
                  setQuery("");
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-none group text-left"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <item.icon className={cn("w-5 h-5", item.color)} />
                  </div>
                  <div>
                    <div className="text-white font-medium">{item.name}</div>
                    <div className="text-white/30 text-xs uppercase tracking-widest">{item.category}</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FolderCard({ title, icon: Icon, color, bgGlow, classes, accent, progressData, bgGradient }: typeof folders[0] & { progressData: Record<string, number> }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div 
      className="relative w-full h-[260px] select-none group"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Authentic macOS Top Folder Tab Notch */}
      <div 
        className="absolute -top-[14px] left-4 h-6 w-32 rounded-t-[14px] rounded-tr-[18px] border-t border-x border-white/20 transition-all duration-300 z-0"
        style={{ 
          background: isHovered 
            ? `linear-gradient(to right, ${accent}dd, ${accent}aa)`
            : `linear-gradient(to right, ${accent}99, ${accent}55)`,
          borderColor: isHovered ? `${accent}60` : "rgba(255,255,255,0.15)"
        }}
      />

      {/* Main Folder Back Body Base */}
      <div className="absolute inset-0 rounded-b-[24px] rounded-tr-[24px] rounded-tl-[4px] border border-white/15 bg-gradient-to-b from-[#121522] via-[#090b14] to-[#04050a] p-4 flex flex-col justify-center shadow-2xl overflow-hidden z-10">
        {/* Inside Folder Accent Glow */}
        <div 
          className="absolute inset-0 opacity-15 blur-3xl pointer-events-none -z-10"
          style={{ backgroundColor: accent }}
        />

        {/* Clickable Class Subject Cards inside folder */}
        <div className="flex flex-col space-y-2.5 z-10 pt-2">
          {classes.map((subject) => {
            const progressPercent = Math.round(progressData[subject.slug] || 0);
            const isCompleted = progressPercent === 100;
            return (
              <Link 
                key={subject.name}
                href={`/dashboard/${subject.slug}`}
                className={cn(
                  "flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300 group/item w-full relative overflow-hidden shadow-sm",
                  isCompleted && "border-amber-500/40 bg-amber-500/[0.04] shadow-[0_0_15px_rgba(245,158,11,0.12)]"
                )}
              >
                {isCompleted && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl z-0">
                    <div className="absolute inset-0 animate-shimmer-gold" />
                  </div>
                )}

                <div className="flex items-center flex-1 mr-3 overflow-hidden relative z-10">
                  <subject.icon 
                    className="w-4 h-4 text-white/70 group-hover/item:text-white transition-colors shrink-0" 
                    style={{ color: isCompleted ? "#fbbf24" : accent }} 
                  />
                  <div className="flex-1 flex flex-col items-start ml-3 min-w-0">
                    <span className={cn(
                      "text-xs font-manrope font-bold text-white/90 group-hover/item:text-white transition-colors truncate w-full text-left",
                      isCompleted && "text-yellow-400 group-hover/item:text-yellow-300 font-extrabold"
                    )}>
                      {subject.name}
                    </span>
                    <div className={cn(
                      "w-full h-1 bg-white/10 rounded-full mt-1.5 overflow-hidden",
                      isCompleted && "bg-yellow-500/20"
                    )}>
                      <div 
                        className="h-full rounded-full transition-all duration-500"
                        style={{ 
                          width: `${progressPercent}%`,
                          backgroundColor: isCompleted ? "#fbbf24" : accent 
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 shrink-0 relative z-10">
                  <span className={cn(
                    "text-[10px] font-mono font-bold text-white/50 group-hover/item:text-white transition-colors",
                    isCompleted && "text-yellow-400 font-extrabold group-hover/item:text-yellow-300"
                  )}>
                    {progressPercent}%
                  </span>
                  <ChevronRight className={cn(
                    "w-3.5 h-3.5 text-white/30 group-hover/item:text-white transition-colors",
                    isCompleted && "text-yellow-400 group-hover/item:text-yellow-300"
                  )} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 3D Folding Front Glass Cover Flap */}
      <motion.div
        className="absolute inset-0 rounded-[24px] border border-white/20 backdrop-blur-2xl flex flex-col items-center justify-center p-6 z-30 pointer-events-none shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
        style={{ 
          transformOrigin: "bottom center",
          background: `linear-gradient(135deg, ${accent}30 0%, ${accent}10 40%, rgba(8, 10, 18, 0.95) 100%)`,
          boxShadow: isHovered ? `0 25px 50px -10px ${accent}35` : `0 10px 30px -10px rgba(0,0,0,0.8)`
        }}
        animate={{ 
          rotateX: (isHovered || isMobile) ? -75 : 0,
          scaleY: (isHovered || isMobile) ? 0.94 : 1,
          y: (isHovered || isMobile) ? 22 : 0,
          opacity: (isHovered || isMobile) ? 0.88 : 1
        }}
        transition={{ type: "spring", stiffness: 140, damping: 17 }}
      >
        {/* Glossy glass reflection sheen */}
        <div className="absolute inset-0 rounded-[24px] bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-50 pointer-events-none" />

        {/* Front Cover Contents */}
        <div className="flex flex-col items-center justify-center space-y-3 relative z-10">
          <div 
            className="w-14 h-14 rounded-2xl bg-white/10 border flex items-center justify-center shadow-2xl backdrop-blur-md"
            style={{ borderColor: `${accent}50` }}
          >
            <Icon className="w-7 h-7 text-white drop-shadow-md" style={{ color: accent }} />
          </div>
          <h3 className="text-xl font-manrope font-extrabold text-white tracking-tight text-center drop-shadow-md">
            {title}
          </h3>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/60 bg-black/40 border border-white/10 px-3 py-1 rounded-full shadow-inner">
            {classes.length} Courses Inside
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function getLevelName(lvl: number): string {
  if (lvl === 100) return "Grandmaster";
  if (lvl >= 90) return "Ascendant";
  if (lvl >= 70) return "Elite";
  if (lvl >= 50) return "Master";
  if (lvl >= 30) return "Expert";
  if (lvl >= 10) return "Scholar";
  return "Apprentice";
}

export default function Dashboard() {
  const { currentUser, loading: authLoading } = useAuth();
  const { progress, loading: progressLoading } = useProgress();
  const router = useRouter();
  const [showSignOutConfirm, setShowSignOutConfirm] = useState(false);
  const [showAccountPopup, setShowAccountPopup] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [onboardCompleted, setOnboardCompleted] = useState(false);
  const avatarInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && currentUser) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = async () => {
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
            const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.7);

            // Save immediately to LocalStorage
            const progressRef = doc(db, "userProgress", currentUser.uid);
            const updated = {
              ...progress,
              photoURL: compressedDataUrl
            };
            try {
              localStorage.setItem(`ap-lab-progress-${currentUser.uid}`, JSON.stringify(updated));
            } catch (err) {}

            // Save to Firestore
            try {
              await setDoc(progressRef, { photoURL: compressedDataUrl }, { merge: true });
            } catch (err) {
              console.error("Error updating avatar in Firestore:", err);
            }

            // Update Auth profile
            try {
              await updateProfile(currentUser, { photoURL: compressedDataUrl });
            } catch (err) {}
          }
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!authLoading) {
      if (!currentUser) {
        router.push("/");
      } else if (!currentUser.emailVerified) {
        router.push("/verify-email");
      }
    }
  }, [currentUser, authLoading, router]);

  if (authLoading || progressLoading || !currentUser || !currentUser.emailVerified) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-deep-navy">
        <LoadingSpinner />
      </div>
    );
  }

  if (progress && !progress.isOnboarded && !onboardCompleted) {
    router.push("/onboarding");
    return (
      <div className="min-h-screen flex items-center justify-center bg-deep-navy">
        <LoadingSpinner />
      </div>
    );
  }

  const [dashboardTab, setDashboardTab] = useState<"courses" | "previews" | "leaderboard">("courses");

  const coursePreviewsData = [
    {
      name: "AP Biology",
      slug: "ap-biology",
      category: "Life Sciences",
      videos: 48,
      articles: 36,
      topics: 12,
      subtopics: 42,
      estTime: "32 Hours",
      questions: "850+ Items",
      difficulty: "Advanced",
      color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400"
    },
    {
      name: "AP Chemistry",
      slug: "ap-chemistry",
      category: "Physical Sciences",
      videos: 52,
      articles: 40,
      topics: 14,
      subtopics: 48,
      estTime: "38 Hours",
      questions: "920+ Items",
      difficulty: "Expert",
      color: "border-cyan-500/30 bg-cyan-500/5 text-cyan-400"
    },
    {
      name: "AP Environmental Science",
      slug: "ap-environmental-science",
      category: "Life Sciences",
      videos: 32,
      articles: 28,
      topics: 9,
      subtopics: 30,
      estTime: "22 Hours",
      questions: "640+ Items",
      difficulty: "Intermediate",
      color: "border-green-500/30 bg-green-500/5 text-green-400"
    },
    {
      name: "AP Calculus BC",
      slug: "ap-calculus-bc",
      category: "Mathematics",
      videos: 60,
      articles: 45,
      topics: 15,
      subtopics: 54,
      estTime: "42 Hours",
      questions: "1,050+ Items",
      difficulty: "Expert",
      color: "border-amber-500/30 bg-amber-500/5 text-amber-400"
    },
    {
      name: "AP Statistics",
      slug: "ap-statistics",
      category: "Mathematics",
      videos: 38,
      articles: 30,
      topics: 10,
      subtopics: 34,
      estTime: "25 Hours",
      questions: "720+ Items",
      difficulty: "Intermediate",
      color: "border-pink-500/30 bg-pink-500/5 text-pink-400"
    },
    {
      name: "AP Computer Science A",
      slug: "ap-computer-science-a",
      category: "Technology",
      videos: 42,
      articles: 34,
      topics: 11,
      subtopics: 38,
      estTime: "28 Hours",
      questions: "800+ Items",
      difficulty: "Advanced",
      color: "border-blue-500/30 bg-blue-500/5 text-blue-400"
    },
    {
      name: "AP Psychology",
      slug: "ap-psychology",
      category: "Social Sciences",
      videos: 36,
      articles: 30,
      topics: 9,
      subtopics: 32,
      estTime: "24 Hours",
      questions: "680+ Items",
      difficulty: "Intermediate",
      color: "border-rose-500/30 bg-rose-500/5 text-rose-400"
    },
    {
      name: "AP Macroeconomics",
      slug: "ap-macroeconomics",
      category: "Social Sciences",
      videos: 28,
      articles: 24,
      topics: 7,
      subtopics: 24,
      estTime: "18 Hours",
      questions: "520+ Items",
      difficulty: "Intermediate",
      color: "border-teal-500/30 bg-teal-500/5 text-teal-400"
    },
    {
      name: "AP US History",
      slug: "ap-us-history",
      category: "History & Social",
      videos: 56,
      articles: 48,
      topics: 14,
      subtopics: 50,
      estTime: "40 Hours",
      questions: "980+ Items",
      difficulty: "Advanced",
      color: "border-red-500/30 bg-red-500/5 text-red-400"
    }
  ];

  const handleSignOut = () => {
    setShowSignOutConfirm(true);
  };

  const handleSearchSelect = (slug: string) => {
    router.push(`/dashboard/${slug}`);
  };

  const firstName = currentUser?.displayName?.split(' ')[0] || 'Scholar';

  const totalAnswered = progress.totalQuestionsAnswered || 0;
  const totalCorrect = progress.totalQuestionsCorrect || 0;
  const accuracyRate = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  
  const xp = progress.xp || 0;
  const level = getLevelForXp(xp);
  const currentLevelThreshold = getXpThresholdForLevel(level);
  const nextLevelThreshold = getXpThresholdForLevel(level + 1);
  const xpNeededForNext = nextLevelThreshold - currentLevelThreshold;
  const xpInCurrentLevel = xp - currentLevelThreshold;
  const progressPercent = Math.min(100, Math.max(0, (xpInCurrentLevel / xpNeededForNext) * 100));

  // Calculate Progress for each class
  const calculateCourseProgress = (slug: string) => {
    const course = courseRegistry[slug];
    if (!course) return 0;

    let totalTopics = 0;
    let completedInCourse = 0;

    course.units.forEach(unit => {
      unit.topics.forEach(topic => {
        totalTopics++;
        if (progress.completedTopics.includes(`${course.masteryPrefix}-${topic.id}`)) {
          completedInCourse++;
        }
      });
    });

    if (totalTopics === 0) return 0;
    return (completedInCourse / totalTopics) * 100;
  };

  const classProgressMap: Record<string, number> = {};
  folders.forEach(folder => {
    folder.classes.forEach(cls => {
      classProgressMap[cls.slug] = calculateCourseProgress(cls.slug);
    });
  });

  return (
    <div className="min-h-screen flex flex-col relative z-0 overflow-x-hidden transition-colors duration-500 selection:bg-primary-purple selection:text-white">
      
      {/* Static Background with White/Light-Grey Dot Matrix Pattern & Minimalist Connected Icons */}
      <PixelCourseBackground />

      {/* Volumetric Vignette Overlay (Clear Top for Maximum Icon Visibility) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[#03040a]/60 pointer-events-none" />
      
      {/* Floating Navbar Pill */}
      <nav className={cn(
        "fixed left-1/2 -translate-x-1/2 w-[95%] max-w-6xl rounded-full px-6 md:px-8 flex items-center justify-between z-50 transition-all duration-500 ease-in-out",
        isScrolled 
          ? "top-4 py-3 bg-black/35 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] shadow-inner" 
          : "top-6 py-4 bg-black/95 border border-white/15 shadow-2xl"
      )}>
        <Link href="/" className="flex items-center space-x-2.5 cursor-pointer group">
          <Activity className="w-5 h-5 text-white group-hover:text-white/80 transition-colors" />
          <span className="font-manrope font-bold text-white tracking-tight hidden sm:block">AP Lab</span>
        </Link>

        {/* Centered Dashboard Text */}
        <div className="absolute left-1/2 -translate-x-1/2 font-cabin font-bold text-white/50 tracking-widest uppercase text-sm pointer-events-none">
          Dashboard
        </div>

        <div className="flex items-center space-x-3 sm:space-x-4">
          <Link
            href="/dashboard/progress"
            className="w-10 h-10 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300"
            title="View Progress Analytics"
          >
            <BarChart2 className="w-4.5 h-4.5 text-white/80" />
          </Link>
          <button
            onClick={() => setIsReviewModalOpen(true)}
            className="w-10 h-10 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300"
            title="Write a Review"
          >
            <Star className="w-4.5 h-4.5 text-white/80" />
          </button>
          <button
            onClick={() => setShowAccountPopup(true)}
            className="flex items-center space-x-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 text-white hover:bg-white/10 transition-all"
          >
            <User className="w-4 h-4 text-white/80" />
            <span className="text-xs font-manrope font-bold uppercase tracking-widest hidden sm:block">Account</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 pt-40 pb-24 px-6 md:px-12 z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-12 flex flex-col items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-3 w-fit mx-auto"
          >
            <span className="text-sm md:text-base uppercase tracking-[0.3em] font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              WELCOME BACK, {firstName.toUpperCase()}
            </span>
            <LevelBadge level={level} className="normal-case tracking-normal shrink-0 translate-y-[1px]" />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-inter text-white/50 text-sm md:text-base max-w-lg mx-auto leading-relaxed mt-1"
          >
            Navigate your folders or search for a course below.
          </motion.p>
        </div>

        {/* Search Bar */}
        <SearchBar onSelect={handleSearchSelect} />

        {/* View Mode Segmented Tab Selector */}
        <div className="flex items-center justify-center p-1.5 rounded-full bg-[#0c0d12]/90 border border-white/10 mt-4 sm:mt-5 mb-8 shadow-2xl backdrop-blur-xl gap-1.5 sm:gap-2 select-none z-10">
          <button
            onClick={() => setDashboardTab("courses")}
            className={cn(
              "flex items-center space-x-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-manrope font-bold text-xs sm:text-sm transition-all duration-300",
              dashboardTab === "courses"
                ? "bg-white text-black shadow-lg scale-[1.02]"
                : "text-white/60 hover:text-white hover:bg-white/5"
            )}
          >
            <Folder className="w-4 h-4" />
            <span>Courses</span>
          </button>

          <button
            onClick={() => setDashboardTab("previews")}
            className={cn(
              "flex items-center space-x-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-manrope font-bold text-xs sm:text-sm transition-all duration-300",
              dashboardTab === "previews"
                ? "bg-white text-black shadow-lg scale-[1.02]"
                : "text-white/60 hover:text-white hover:bg-white/5"
            )}
          >
            <Eye className="w-4 h-4" />
            <span>Previews</span>
          </button>

          <button
            onClick={() => setDashboardTab("leaderboard")}
            className={cn(
              "flex items-center space-x-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-manrope font-bold text-xs sm:text-sm transition-all duration-300",
              dashboardTab === "leaderboard"
                ? "bg-white text-black shadow-lg scale-[1.02]"
                : "text-white/60 hover:text-white hover:bg-white/5"
            )}
          >
            <Trophy className="w-4 h-4" />
            <span>Leaderboard</span>
          </button>
        </div>

        {/* Tab 1: Universal Wings Bento Grid - 3D Folders Grid */}
        {dashboardTab === "courses" && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl mt-12 mb-36"
          >
            {folders.map((folder) => (
              <FolderCard 
                key={folder.title} 
                {...folder} 
                progressData={classProgressMap}
              />
            ))}
          </motion.div>
        )}

        {/* Tab 2: Course Statistics Previews Grid */}
        {dashboardTab === "previews" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mt-8 mb-36"
          >
            {coursePreviewsData.map((course) => (
              <div 
                key={course.slug}
                className={cn(
                  "bg-[#08090e]/90 border rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 shadow-xl backdrop-blur-md",
                  course.color
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                      {course.category}
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/10 text-white/90">
                      {course.difficulty}
                    </span>
                  </div>

                  <h3 className="font-manrope font-extrabold text-2xl text-white mb-6 tracking-tight">
                    {course.name}
                  </h3>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-3 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <Video className="w-4 h-4 text-white/80" />
                      </div>
                      <div>
                        <div className="font-manrope font-bold text-white text-sm">{course.videos}</div>
                        <div className="font-mono text-[9px] text-white/40 uppercase">Videos</div>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/5 rounded-2xl p-3 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <FileText className="w-4 h-4 text-white/80" />
                      </div>
                      <div>
                        <div className="font-manrope font-bold text-white text-sm">{course.articles}</div>
                        <div className="font-mono text-[9px] text-white/40 uppercase">Articles</div>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/5 rounded-2xl p-3 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <Layers className="w-4 h-4 text-white/80" />
                      </div>
                      <div>
                        <div className="font-manrope font-bold text-white text-sm">{course.topics} / {course.subtopics}</div>
                        <div className="font-mono text-[9px] text-white/40 uppercase">Topics / Subs</div>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/5 rounded-2xl p-3 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4 text-white/80" />
                      </div>
                      <div>
                        <div className="font-manrope font-bold text-white text-sm">{course.estTime}</div>
                        <div className="font-mono text-[9px] text-white/40 uppercase">Est. Duration</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href={`/dashboard/${course.slug}`}>
                  <button className="w-full py-3 rounded-2xl bg-white/10 hover:bg-white text-white hover:text-black font-manrope font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 border border-white/10">
                    <span>Enter Course</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 3: Level Leaderboard Section */}
        {dashboardTab === "leaderboard" && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-4xl mt-8 mb-36"
          >
            <LevelLeaderboard />
          </motion.div>
        )}

      </main>

      {/* Sign Out Confirmation Modal */}
      <AnimatePresence>
        {showSignOutConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="liquid-glass-strong w-full max-w-sm p-6 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent pointer-events-none" />
              
              {/* Circular Warning Icon */}
              <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-4 relative z-10">
                <LogOut className="w-5 h-5 text-red-400" />
              </div>

              <h3 className="font-manrope font-bold text-lg text-white text-center mb-6 px-2 relative z-10">
                Are you sure you want to sign out?
              </h3>
              
              <div className="flex items-center space-x-3 w-full relative z-10">
                <button
                  onClick={() => setShowSignOutConfirm(false)}
                  className="flex-1 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={async () => {
                    try {
                      await signOut(auth);
                      window.location.href = "/";
                    } catch (error) {
                      console.error("Error signing out:", error);
                    }
                  }}
                  className="flex-1 py-2.5 rounded-full bg-red-500 text-white text-sm font-semibold hover:bg-red-600 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_4px_12px_rgba(239,68,68,0.2)]"
                >
                  Sign Out
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <ReviewModal 
        isOpen={isReviewModalOpen} 
        onClose={() => setIsReviewModalOpen(false)} 
      />

      {/* Account Profile Stats Modal */}
      <AnimatePresence>
        {showAccountPopup && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[100] flex items-center justify-center p-4"
            onClick={() => setShowAccountPopup(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-full max-w-lg bg-[#07080e]/95 border border-white/10 rounded-[32px] overflow-hidden relative shadow-[0_0_80px_rgba(0,0,0,0.8)] backdrop-blur-3xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow effect */}
              <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-[100px] opacity-35 bg-cyan-500" />
              
              {/* Close button */}
              <button 
                onClick={() => setShowAccountPopup(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10 text-white/40 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Profile info */}
              <div className="flex items-center space-x-4 mb-8">
                <div 
                  className="relative group cursor-pointer shrink-0" 
                  onClick={() => avatarInputRef.current?.click()}
                  title="Click to change profile picture"
                >
                  {progress?.photoURL || currentUser?.photoURL ? (
                    <img
                      src={progress?.photoURL || currentUser?.photoURL || ""}
                      alt={progress?.displayName || currentUser?.displayName || "Avatar"}
                      className="w-14 h-14 rounded-2xl object-cover border border-white/15 group-hover:opacity-75 transition-opacity"
                    />
                  ) : (
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center font-instrument text-2xl font-bold text-black shadow-lg bg-gradient-to-br from-cyan-400 to-white group-hover:opacity-75 transition-opacity"
                    >
                      {firstName.charAt(0).toUpperCase()}
                    </div>
                  )}
                  {/* Hover upload icon overlay */}
                  <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Upload className="w-4 h-4 text-white" />
                  </div>
                  {/* Hidden input element */}
                  <input 
                    type="file" 
                    ref={avatarInputRef} 
                    onChange={handleAvatarChange} 
                    accept="image/*" 
                    className="hidden" 
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <h3 className="font-instrument text-2xl text-white font-medium">
                      {currentUser?.displayName || "AP Scholar"}
                    </h3>
                    <LevelBadge level={level} />
                  </div>
                  <div className="flex items-center space-x-2 text-white/50 text-xs">
                    <Mail className="w-3.5 h-3.5" />
                    <span>{currentUser?.email || "anonymous@theaplab.org"}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Header */}
                <div className="border-b border-white/5 pb-4">
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-white/40 uppercase">Academic Portal Stats</span>
                </div>

                {/* Level / XP Progress Section */}
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 space-y-4">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">LEVEL PROGRESS</span>
                      <span className="text-white font-bold text-lg">Level {level}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-white/40 text-xs">{xpInCurrentLevel} / {xpNeededForNext} XP</span>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500" style={{ width: `${progressPercent}%` }} />
                  </div>
                  <div className="text-center text-[10px] text-white/30 tracking-wider">
                    Total XP Earned: <span className="text-white font-bold">{xp.toLocaleString()} XP</span>
                  </div>
                </div>

                {/* Core metrics grid */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-28">
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest font-semibold leading-tight">Questions Answered</span>
                    <div className="font-instrument text-3xl font-bold text-white mt-2">
                      {totalAnswered}
                    </div>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-28">
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest font-semibold leading-tight">Correct Answers</span>
                    <div className="font-instrument text-3xl font-bold text-white mt-2">
                      {totalCorrect}
                    </div>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-28">
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest font-semibold leading-tight">Accuracy Rate</span>
                    <div className="font-instrument text-3xl font-bold text-white mt-2">
                      {accuracyRate}%
                    </div>
                  </div>
                </div>

                {/* Quick actions / Sign Out inside the Account statistics */}
                <div className="pt-4 border-t border-white/5 flex justify-end space-x-3">
                  <button
                    onClick={() => {
                      setShowAccountPopup(false);
                      setShowSignOutConfirm(true);
                    }}
                    className="flex items-center space-x-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer text-white font-semibold text-xs uppercase tracking-widest"
                  >
                    <LogOut className="w-3.5 h-3.5 text-white/70" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <DashboardContextMenu onOpenProfile={() => setShowAccountPopup(true)} />
      <FloatingXPOperations />
    </div>
  );
}

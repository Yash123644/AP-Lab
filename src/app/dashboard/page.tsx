"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LogOut, Microscope, Library, Calculator, 
  Search, Dna, Beaker, Atom, History, Brain, BookOpen, Sigma, BarChart3, Binary,
  ChevronRight, Activity, Star, User, Mail, X
} from "lucide-react";
import { LevelBadge } from "@/components/LevelBadge";
import { LevelLeaderboard } from "@/components/LevelLeaderboard";
import MuxPlayer from "@mux/mux-player-react";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { cn } from "@/lib/utils";
import { useProgress } from "@/context/ProgressContext";
import { courseRegistry } from "@/lib/courses/course-registry";
import { ReviewModal } from "@/components/ReviewModal";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { getLevelForXp, getXpThresholdForLevel } from "@/lib/xpProgression";


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
      { name: "AP English Lang", slug: "ap-eng-lang", icon: BookOpen }
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
  const [isFocused, setIsFocused] = useState(false);
  const [cursorOffset, setCursorOffset] = useState(0);
  const measureRef = useRef<HTMLSpanElement>(null);
  
  const allClassList = folders.flatMap(f => f.classes.map(c => ({ ...c, category: f.title })));
  const filtered = query === "" ? [] : allClassList.filter(c => 
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (measureRef.current) {
      setCursorOffset(measureRef.current.offsetWidth);
    }
  }, [query]);

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
            {/* Hidden span for text measurement */}
            <span ref={measureRef} className="absolute invisible whitespace-pre text-xl font-manrope font-medium">
              {query}
            </span>

            {/* Custom glowing caret and monochrome light ray */}
            {isFocused && (
              <div 
                className="absolute pointer-events-none h-6 flex items-center transition-all duration-75"
                style={{ left: `${cursorOffset}px` }}
              >
                {/* Glowing Caret */}
                <div className="w-[2px] h-6 bg-white shadow-[0_0_10px_rgba(255,255,255,1),0_0_20px_rgba(255,255,255,0.8)]" />
                
                {/* Volumetric Light Ray */}
                <div 
                  className="h-12 opacity-80 blur-md pointer-events-none"
                  style={{
                    width: "350px",
                    background: "linear-gradient(90deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.01) 50%, transparent 100%)",
                    transformOrigin: "left center",
                    transform: "skewX(-20deg) translateY(-2px)",
                  }}
                />

                {/* Floating monochrome dust particles */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-48 h-10 overflow-hidden pointer-events-none opacity-60">
                  <div className="absolute w-[2px] h-[2px] bg-white rounded-full dust-mote" style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
                  <div className="absolute w-[1px] h-[1px] bg-white rounded-full dust-mote" style={{ top: '65%', left: '35%', animationDelay: '1.2s' }} />
                  <div className="absolute w-[2px] h-[2px] bg-white rounded-full dust-mote" style={{ top: '45%', left: '55%', animationDelay: '0.6s' }} />
                  <div className="absolute w-[1.5px] h-[1.5px] bg-white rounded-full dust-mote" style={{ top: '80%', left: '75%', animationDelay: '2.4s' }} />
                </div>
              </div>
            )}

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
                setIsFocused(true);
              }}
              onBlur={() => {
                setTimeout(() => {
                  setIsOpen(false);
                  setIsFocused(false);
                }, 200);
              }}
              style={{ caretColor: "transparent" }}
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
                    <item.icon className="w-5 h-5 text-primary-purple" />
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
      className="relative w-full h-[250px] transition-all duration-500 ease-out select-none group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: (isHovered && !isMobile) ? "translateY(-6px)" : "translateY(0px)"
      }}
    >
      {/* Folder Notch Tab (sloped top notch tab) */}
      <div 
        className="absolute -top-[10px] left-6 h-5 w-24 rounded-t-[10px] transition-all duration-500 z-0"
        style={{ 
          background: isHovered 
            ? `linear-gradient(to right, ${accent}, ${accent}dd)` 
            : `linear-gradient(to right, ${accent}dd, ${accent}aa)`
        }}
      />

      {/* Colored Back Flap (Background card) */}
      <div 
        className={cn(
          "absolute inset-0 rounded-[20px] bg-gradient-to-br p-[1.5px] shadow-2xl transition-all duration-500 z-10",
          bgGradient
        )}
        style={{
          boxShadow: isHovered 
            ? `0 20px 40px -10px ${accent}25` 
            : `0 10px 30px -15px rgba(0,0,0,0.7)`
        }}
      >
        {/* Inner solid flap background */}
        <div className="w-full h-full rounded-[19px] bg-[#09090f]/95 flex flex-col justify-center relative overflow-hidden">
          
          {/* Accent glow inside the folder */}
          <div 
            className="absolute inset-0 opacity-10 blur-2xl pointer-events-none -z-10"
            style={{ backgroundColor: accent }}
          />

          {/* Reveal area container with overflow-hidden */}
          <div className="relative w-full h-full overflow-hidden">
            {/* Clickable classes inside (fully visible when cover slides down) */}
            <div className="absolute inset-0 flex flex-col justify-center space-y-2.5 p-5 z-10">
              {classes.map((subject) => {
                const progressPercent = Math.round(progressData[subject.slug] || 0);
                const isCompleted = progressPercent === 100;
                return (
                  <Link 
                    key={subject.name}
                    href={`/dashboard/${subject.slug}`}
                    className={cn(
                      "flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/10 transition-all duration-300 group/item w-full relative overflow-hidden",
                      isCompleted && "border-amber-500/35 bg-amber-500/[0.02] shadow-[0_0_12px_rgba(245,158,11,0.08)]"
                    )}
                  >
                    {isCompleted && (
                      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl z-0">
                        {/* Beautiful golden animated shimmer overlay */}
                        <div className="absolute inset-0 animate-shimmer-gold" />
                      </div>
                    )}
 
                    <div className="flex items-center flex-1 mr-4 overflow-hidden relative z-10">
                      <subject.icon 
                        className="w-4 h-4 text-white/70 group-hover/item:text-white transition-colors shrink-0" 
                        style={{ color: isCompleted ? "#fbbf24" : accent }} 
                      />
                      <div className="flex-1 flex flex-col items-start ml-3 min-w-0">
                        <span className={cn(
                          "text-xs font-manrope font-semibold text-white/80 group-hover/item:text-white transition-colors truncate w-full text-left",
                          isCompleted && "text-yellow-400 group-hover/item:text-yellow-300 font-extrabold"
                        )}>
                          {subject.name}
                        </span>
                        {/* Premium micro progress bar */}
                        <div className={cn(
                          "w-full h-0.5 bg-white/10 rounded-full mt-1.5 overflow-hidden",
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
                        "text-[10px] font-mono font-medium text-white/40 group-hover/item:text-white/70 transition-colors flex items-center gap-1",
                        isCompleted && "text-yellow-400 font-bold group-hover/item:text-yellow-300"
                      )}>
                        {progressPercent}%
                      </span>
                      <ChevronRight className={cn(
                        "w-3.5 h-3.5 text-white/20 group-hover/item:text-white/60 transition-colors",
                        isCompleted && "text-yellow-400/50 group-hover/item:text-yellow-400"
                      )} />
                    </div>
                  </Link>
                );
              })}
            </div>

            <motion.div
              className="absolute inset-0 z-20 bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-[19px] shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] flex flex-col items-center justify-center p-6"
              animate={{ y: (isHovered || isMobile) ? "105%" : "0%" }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            >
              {/* Glossy glass reflection gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.06] rounded-[19px] pointer-events-none" />
              
              {/* Cover Contents */}
              <div className="flex flex-col items-center justify-center space-y-3 pointer-events-none">
                <div 
                  className="w-12 h-12 rounded-xl bg-white/[0.04] border flex items-center justify-center shadow-inner"
                  style={{ borderColor: `${accent}30` }}
                >
                  <Icon className="w-6 h-6" style={{ color: accent }} />
                </div>
                <h3 className="text-lg font-manrope font-bold text-white tracking-tight text-center">{title}</h3>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const { currentUser, loading: authLoading } = useAuth();
  const { progress, loading: progressLoading } = useProgress();
  const router = useRouter();
  const [showSignOutConfirm, setShowSignOutConfirm] = useState(false);
  const [showAccountPopup, setShowAccountPopup] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!authLoading && !currentUser) {
      router.push("/");
    }
  }, [currentUser, authLoading, router]);

  if (authLoading || progressLoading || !currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-deep-navy">
        <LoadingSpinner />
      </div>
    );
  }

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
      
      {/* Video Background */}
      <div className="absolute inset-0 -z-20 w-full h-full overflow-hidden pointer-events-none bg-[#020308]">
        <div
          className={cn(
            "w-full h-full transition-opacity duration-1000 ease-out",
            videoLoaded ? "opacity-100" : "opacity-0"
          )}
        >
          <MuxPlayer
            playbackId="4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc"
            autoPlay="muted"
            loop
            muted
            playsInline
            onPlaying={() => setVideoLoaded(true)}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            style={{ 
              position: "absolute", 
              top: 0, 
              left: 0, 
              width: "100%", 
              height: "100%", 
              "--media-object-fit": "cover",
              opacity: 0.38 
            } as any}
          />
        </div>
      </div>

      {/* Volumetric Dark Vignette Overlay & Backdrop Blur */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#020308]/90 via-transparent to-[#020308] backdrop-blur-[2.5px] pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_30%,#020308_95%)] pointer-events-none" />
      
      {/* Floating Navbar Pill */}
      <nav className={cn(
        "fixed left-1/2 -translate-x-1/2 w-[95%] max-w-6xl rounded-full px-6 md:px-8 flex items-center justify-between z-50 transition-all duration-500 ease-in-out",
        isScrolled 
          ? "top-4 py-3 bg-black/35 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] shadow-inner" 
          : "top-6 py-4 bg-black/95 border border-white/15 shadow-2xl"
      )}>
        <Link href="/" className="flex items-center space-x-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all duration-300">
            <Activity className="w-5 h-5 text-white animate-pulse" />
          </div>
          <span className="font-manrope font-bold text-white tracking-tight hidden sm:block">AP Lab</span>
        </Link>

        <div className="font-cabin font-bold text-white/50 tracking-widest uppercase text-sm">
          Dashboard
        </div>

        <div className="flex items-center space-x-3 sm:space-x-4">
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
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm md:text-base uppercase tracking-[0.3em] font-bold flex items-center justify-center gap-3 mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent w-fit mx-auto"
          >
            <span>WELCOME BACK, {firstName.toUpperCase()}</span>
            <LevelBadge level={level} className="normal-case tracking-normal shrink-0" />
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-inter font-extrabold text-white text-3xl md:text-5xl tracking-tight mb-4"
          >
            Included Workspace
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="font-inter text-white/50 text-sm md:text-base max-w-lg mx-auto leading-relaxed"
          >
            Navigate your folders or initiate a new study module below.
          </motion.p>
        </div>

        {/* Search Bar */}
        <SearchBar onSelect={handleSearchSelect} />

        {/* Universal Wings Bento Grid - 3D Folders Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl mt-24 mb-48"
        >
          {folders.map((folder) => (
            <FolderCard 
              key={folder.title} 
              {...folder} 
              progressData={classProgressMap}
            />
          ))}
        </motion.div>

        {/* Level Leaderboard Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-4xl"
        >
          <LevelLeaderboard />
        </motion.div>

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
          <div className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-full max-w-lg bg-[#07080e]/95 border border-white/10 rounded-[32px] overflow-hidden relative shadow-[0_0_80px_rgba(0,0,0,0.8)] backdrop-blur-3xl p-8"
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
                {currentUser?.photoURL ? (
                  <img
                    src={currentUser.photoURL}
                    alt={currentUser.displayName || "Avatar"}
                    className="w-14 h-14 rounded-2xl object-cover border border-white/15"
                  />
                ) : (
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-instrument text-2xl font-bold text-black shadow-lg bg-gradient-to-br from-cyan-400 to-white"
                  >
                    {firstName.charAt(0).toUpperCase()}
                  </div>
                )}
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
    </div>
  );
}

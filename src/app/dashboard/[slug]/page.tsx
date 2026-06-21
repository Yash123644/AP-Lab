"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  ChevronDown, 
  Play, 
  FileText, 
  CheckCircle2, 
  ArrowLeft,
  Trophy,
  Brain,
  AlertCircle,
  Activity
} from "lucide-react";
import Link from "next/link";
import { courseRegistry, CourseUnit, CourseTopic } from "@/lib/courses/course-registry";
import { cn } from "@/lib/utils";
import { useProgress } from "@/context/ProgressContext";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import confetti from "canvas-confetti";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import { MockExam } from "@/components/MockExam";
import { AIAssistantDrawer } from "@/components/AIAssistantDrawer";
import { SelectionAIPopover } from "@/components/SelectionAIPopover";
import { VocabularyPopover } from "@/components/VocabularyPopover";
import { DiagramContainer } from "@/components/DiagramContainer";

function MagneticButton({ children, className, onClick, disabled, accentColor }: { children: React.ReactNode, className?: string, onClick?: () => void, disabled?: boolean, accentColor: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || disabled) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      disabled={disabled}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative group focus:outline-none focus:ring-2",
        className
      )}
      style={{
        // @ts-ignore
        "--tw-ring-color": `${accentColor}80`
      }}
    >
      <div 
        className="absolute inset-0 rounded-2xl blur-xl transition-all duration-300 pointer-events-none" 
        style={{
          backgroundColor: `${accentColor}10`
        }}
      />
      {children}
    </motion.button>
  );
}

function getUnitWatermark(unitId: number) {
  switch (unitId) {
    case 1:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <circle cx="12" cy="12" r="3" />
          <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(-30 12 12)" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <circle cx="6" cy="12" r="2.5" />
          <circle cx="18" cy="12" r="2.5" />
          <circle cx="12" cy="6" r="3.5" />
          <line x1="7.7" y1="10.3" x2="10.3" y2="7.7" />
          <line x1="16.3" y1="10.3" x2="13.7" y2="7.7" />
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <circle cx="5" cy="8" r="2" />
          <circle cx="19" cy="8" r="2" />
          <circle cx="12" cy="16" r="2" />
          <line x1="7" y1="9" x2="10" y2="14" strokeDasharray="2 2" />
          <line x1="17" y1="9" x2="14" y2="14" strokeDasharray="2 2" />
        </svg>
      );
    case 4:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M6 3v3m12-3v3M6 21h12a2 2 0 002-2V8H4v11a2 2 0 002 2z" />
          <circle cx="9" cy="12" r="1" />
          <circle cx="15" cy="15" r="1" />
          <circle cx="12" cy="18" r="1" />
        </svg>
      );
    case 5:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <circle cx="12" cy="13" r="8" />
          <path d="M12 5V2m-3 0h6m-3 7v4l3 2" />
        </svg>
      );
    case 6:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3.5-.72 1.5-1.5 2-1.5 3.5A2.5 2.5 0 0011 14.5zM12 2c0 0 7 4 7 11a7 7 0 11-14 0c0-7 7-11 7-11z" />
        </svg>
      );
    case 7:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M4 9h16M20 9l-4-4M4 15h16M4 15l4 4" />
        </svg>
      );
    case 8:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM7 7h10M7 12h10M7 17h5" />
        </svg>
      );
    case 9:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <rect x="6" y="7" width="12" height="12" rx="2" />
          <path d="M9 7V5h2v2M13 7V5h2v2M9 13h6" />
        </svg>
      );
    default:
      return null;
  }
}

function getInsightLabel(slug: string) {
  if (slug === "ap-biology") return "Biological Insight";
  if (slug === "ap-chemistry") return "Chemical Insight";
  if (slug.includes("physics")) return "Physical Insight";
  if (slug === "ap-ush") return "Historical Insight";
  if (slug === "ap-psych") return "Psychological Insight";
  if (slug === "ap-eng-lang") return "Rhetorical Insight";
  if (slug === "ap-calc-bc") return "Mathematical Insight";
  if (slug === "ap-stats") return "Statistical Insight";
  if (slug === "ap-csa") return "Computational Insight";
  return "Academic Insight";
}

const getCourseNameFromSlug = (slug: string) => {
  const map: Record<string, string> = {
    "ap-physics-1": "AP Physics 1",
    "ap-world-history": "AP World History",
    "ap-macroeconomics": "AP Macroeconomics",
    "ap-environmental": "AP Environmental",
    "ap-physics-c": "AP Physics C",
    "ap-calc-bc": "AP Calculus BC",
    "ap-stats": "AP Statistics",
    "ap-csa": "AP Computer Science A",
    "ap-ush": "AP US History",
    "ap-psych": "AP Psychology",
    "ap-eng-lang": "AP English Language",
  };
  return map[slug] || slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
};

function UpcomingCourseFallback({ slug }: { slug: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNotify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setEmail("");
  };

  const courseName = getCourseNameFromSlug(slug);

  return (
    <div className="min-h-screen bg-[#020308] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-medical-teal/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary-purple/10 blur-[150px] rounded-full pointer-events-none z-0" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      <div className="max-w-2xl w-full text-center relative z-10 space-y-8 flex flex-col items-center">
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
        >
          <span className="w-2 h-2 rounded-full bg-medical-teal animate-pulse" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-medical-teal">Workspace Curation Loop</span>
        </motion.div>

        {/* Clean Image Container with Glass Effects */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 80 }}
          className="relative group w-64 h-64 md:w-80 md:h-80 rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.01] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center"
        >
          {/* Volumetric light ray overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08] pointer-events-none z-10" />
          
          <motion.img 
            src="/images/course_upcoming.png" 
            alt="Course In Curation" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Course Info */}
        <div className="space-y-4 max-w-lg">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl font-instrument text-white tracking-tight leading-tight"
          >
            {courseName} is under development
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-inter text-white/50 text-sm md:text-base leading-relaxed"
          >
            We are curating high-yield pre-med modules, clinical correlations, and interactive diagnostic simulation labs for this course. Be the first to build here.
          </motion.p>
        </div>

        {/* Notify Me Form */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-md"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-medical-teal/10 border border-medical-teal/30 rounded-2xl p-4 text-center text-medical-teal font-medium text-sm shadow-[0_0_20px_rgba(0,242,255,0.05)]"
              >
                ✓ We'll notify you the moment this course becomes available.
              </motion.div>
            ) : (
              <form onSubmit={handleNotify} className="flex gap-2 p-1 bg-white/[0.02] border border-white/10 rounded-2xl focus-within:border-medical-teal/50 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                <input 
                  type="email"
                  required
                  placeholder="Enter email for early access..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent border-none text-white focus:outline-none px-4 py-3 text-sm placeholder:text-white/20"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 rounded-xl bg-medical-teal text-black font-semibold text-xs tracking-wider uppercase hover:brightness-110 active:scale-98 transition-all flex items-center gap-1.5"
                >
                  {isSubmitting ? "Syncing..." : "Notify Me"}
                </button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-4"
        >
          <Link 
            href="/dashboard" 
            className="inline-flex items-center space-x-2 text-white/40 hover:text-white font-mono text-[10px] uppercase tracking-widest transition-colors group"
          >
            <span>← Return to Command Center</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function APDynamicCoursePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const course = courseRegistry[slug];
  
  const { progress, completeTopic } = useProgress();
  
  const [activeUnit, setActiveUnit] = useState<number>(1);
  const [activeTopic, setActiveTopic] = useState<CourseTopic | null>(null);
  const [activeTab, setActiveTab] = useState<"video" | "article" | "practice">("video");
  const [expandedUnits, setExpandedUnits] = useState<number[]>([1]);
  const [showExam, setShowExam] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [assistantQuery, setAssistantQuery] = useState("");
  const [topicInteracted, setTopicInteracted] = useState(false);
  const [tabInteracted, setTabInteracted] = useState(false);

  // Safely initialize active topic
  useEffect(() => {
    if (course && course.units.length > 0 && course.units[0].topics.length > 0) {
      setActiveTopic(course.units[0].topics[0]);
      setActiveUnit(course.units[0].id);
    }
  }, [course]);

  if (!course) {
    return <UpcomingCourseFallback slug={slug} />;
  }

  const toggleUnit = (id: number) => {
    setExpandedUnits(prev => 
      prev.includes(id) ? prev.filter(u => u !== id) : [...prev, id]
    );
  };

  const masteryKey = `${course.masteryPrefix}-${activeTopic?.id}`;
  const masteryScore = progress.masteryScores[masteryKey] || 0;

  return (
    <div 
      className="min-h-screen bg-deep-navy flex flex-col relative z-0 selection:bg-white selection:text-black"
      style={{
        // @ts-ignore
        "--theme-accent": course.accentColor,
        "--theme-accent-border": `${course.accentColor}4d`
      }}
    >
      {/* Inject custom variables for page accent coloring */}
      <style>{`
        .subject-accent-text { color: ${course.accentColor}; }
        .subject-accent-bg { background-color: ${course.accentColor}; }
        .subject-accent-border { border-color: ${course.accentColor}33; }
        .subject-accent-border-hover:hover { border-color: ${course.accentColor}66; }
        .subject-accent-bg-glow { background-color: ${course.accentColor}15; }
        .subject-accent-selection::selection {
          background-color: ${course.accentColor};
          color: #000000;
        }
      `}</style>

      {showExam && (
        <MockExam 
          units={course.units} 
          subjectName={course.name} 
          accentColor={course.accentColor}
          onClose={() => setShowExam(false)} 
        />
      )}
      
      <AIAssistantDrawer 
        course={course.slug} 
        isOpen={isAssistantOpen} 
        onClose={() => setIsAssistantOpen(false)} 
        initialQuery={assistantQuery} 
      />
      
      <SelectionAIPopover onAsk={(text) => {
        setAssistantQuery(text);
        setIsAssistantOpen(true);
      }} />

      {/* Floating AP Lab Logo AI Toggle */}
      <div className="fixed bottom-8 right-8 z-[80]">
        <button
          onClick={() => setIsAssistantOpen(true)}
          className="w-16 h-16 rounded-full flex items-center justify-center liquid-glass border border-white/20 shadow-[0_10px_40px_rgba(255,255,255,0.15)] hover:scale-105 transition-all group"
          style={{
            boxShadow: `0 10px 40px ${course.accentColor}33`
          }}
        >
          <Activity className="w-8 h-8 text-white group-hover:text-white transition-colors drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
        </button>
      </div>
      
      {/* Glow Background */}
      <div className="fixed top-0 left-0 right-0 h-screen pointer-events-none -z-10">
        <div 
          className="absolute top-[10%] left-[5%] w-[40%] h-[40%] blur-[120px] rounded-full opacity-60"
          style={{ backgroundColor: `${course.accentColor}10` }}
        />
        <div 
          className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] blur-[120px] rounded-full opacity-40"
          style={{ backgroundColor: `${course.accentColor}08` }}
        />
      </div>

      {/* Header */}
      <header className="h-16 border-b border-white/5 backdrop-blur-xl bg-black/20 flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/50 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="h-4 w-[1px] bg-white/10" />
          <h1 className="font-instrument text-xl text-white tracking-tight">
            {course.name} <span className="text-white/40 font-inter text-sm ml-2">Quantitative Mastery</span>
          </h1>
        </div>
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => setShowExam(true)}
            className="flex items-center space-x-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 text-white hover:bg-white/10 transition-all"
            style={{
              borderColor: `${course.accentColor}33`
            }}
          >
            <Trophy className="w-4 h-4 text-white/80" />
            <span className="text-xs font-manrope font-bold uppercase tracking-widest">Mock Exam</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className="w-80 border-r border-white/5 bg-black/10 flex flex-col hidden lg:flex">
          <div className="flex-1 overflow-y-auto scrollbar-hide p-4 space-y-2">
            {course.units.map((unit) => (
              <div key={unit.id} className="space-y-1">
                <button
                  onClick={() => toggleUnit(unit.id)}
                  className={cn(
                    "w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 relative overflow-hidden group",
                    activeUnit === unit.id ? "bg-white/5" : "hover:bg-white/5"
                  )}
                >
                  <div className="flex flex-col items-start text-left relative z-10">
                    <span className="text-[10px] font-manrope font-black uppercase tracking-widest mb-1 subject-accent-text">
                      Unit {unit.id} • {unit.masteryWeight}
                    </span>
                    <span className={cn(
                      "text-sm font-medium leading-tight",
                      activeUnit === unit.id ? "text-white" : "text-white/60"
                    )}>
                      {unit.title}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 relative z-10">
                    {expandedUnits.includes(unit.id) ? (
                      <ChevronDown className="w-4 h-4 text-white/40" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-white/40" />
                    )}
                  </div>

                  {/* Unit Watermark Background decoration */}
                  <div 
                    className="absolute right-3 -bottom-1.5 w-14 h-14 opacity-[0.05] group-hover:opacity-[0.10] transition-opacity duration-300 pointer-events-none select-none z-0"
                    style={{ color: course.accentColor }}
                  >
                    {getUnitWatermark(unit.id)}
                  </div>

                  {/* Unit Background Image (Specific to AP Chemistry) */}
                  {slug === "ap-chemistry" && (
                    <div className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-300 pointer-events-none z-0">
                      <img 
                        src={`/images/chemistry/units/unit${unit.id}.png`} 
                        alt="" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/50 to-transparent" />
                    </div>
                  )}
                </button>

                <AnimatePresence>
                  {expandedUnits.includes(unit.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-3"
                    >
                      <div className="border-l border-white/5 ml-2 mt-1 space-y-1">
                        {unit.topics.map((topic) => (
                          <button
                            key={topic.id}
                            onClick={() => {
                              setActiveTopic(topic);
                              setActiveUnit(unit.id);
                              setTopicInteracted(true);
                            }}
                            className={cn(
                              "w-full text-left p-3 pl-6 text-xs transition-colors rounded-r-lg relative",
                              activeTopic?.id === topic.id 
                                ? "bg-white/5 text-white" 
                                : "text-white/40 hover:text-white/60 hover:bg-white/5"
                            )}
                            style={{
                              color: activeTopic?.id === topic.id ? course.accentColor : undefined
                            }}
                          >
                            {activeTopic?.id === topic.id && (
                              <motion.div 
                                layoutId={topicInteracted ? "activeTopicDynamic" : undefined}
                                className="absolute left-0 top-0 bottom-0 w-[2px] subject-accent-bg"
                              />
                            )}
                            <div className="flex items-center justify-between w-full">
                              <div className="flex items-center">
                                <span className="font-manrope font-bold mr-2">{topic.id}</span>
                                {topic.title}
                              </div>
                              {progress.completedTopics.includes(`${course.masteryPrefix}-${topic.id}`) && (
                                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 ml-2 subject-accent-text" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-white/5">
            <button 
              onClick={() => setShowExam(true)}
              className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              style={{
                borderColor: `${course.accentColor}33`
              }}
            >
              <div className="flex items-center space-x-3">
                <Trophy className="w-5 h-5 subject-accent-text" />
                <span className="text-sm font-bold text-white uppercase tracking-widest">Mock Exam</span>
              </div>
              <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white" />
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto scroll-smooth">
          {activeTopic ? (
            <div className="max-w-5xl mx-auto p-6 md:p-12 space-y-8">
              {/* Breadcrumbs */}
              <div className="flex items-center space-x-2 text-[10px] font-manrope font-black text-white/30 uppercase tracking-[0.2em]">
                <span>{course.name}</span>
                <ChevronRight className="w-3 h-3" />
                <span className="text-white/50">Unit {activeUnit}</span>
                <ChevronRight className="w-3 h-3" />
                <span className="subject-accent-text">Topic {activeTopic.id}</span>
              </div>

              {/* Title & Mastery */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                  <h2 className="font-instrument text-4xl md:text-5xl text-white tracking-tight">
                    {activeTopic.title}
                  </h2>
                  <p className="font-inter text-white/50 max-w-2xl">
                    {activeTopic.description}
                  </p>
                </div>
                <div className="w-full md:w-64 space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-manrope font-black text-white/40 uppercase tracking-widest">Topic Mastery</span>
                    <span className="text-lg font-instrument italic subject-accent-text">
                      {masteryScore}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${masteryScore}%` }}
                      className="h-full subject-accent-bg"
                      style={{
                        boxShadow: `0 0 15px ${course.accentColor}4d`
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Tab System */}
              <div className="flex items-center space-x-1 p-1 bg-black/20 backdrop-blur-md rounded-2xl w-fit border border-white/5">
                {[
                  { id: "video", label: "Video", icon: Play },
                  { id: "article", label: "Article", icon: FileText },
                  { id: "practice", label: "Practice", icon: Brain }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id as any);
                      setTabInteracted(true);
                    }}
                    className={cn(
                      "flex items-center space-x-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all relative",
                      activeTab === tab.id ? "text-white" : "text-white/40 hover:text-white/60"
                    )}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId={tabInteracted ? "activeTabDynamic" : undefined}
                        className="absolute inset-0 bg-white/5 border border-white/10 shadow-xl rounded-xl"
                      />
                    )}
                    <tab.icon className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                  {activeTab === "video" && (
                    <motion.div
                      key={activeTopic.id + "_video"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="relative aspect-video w-full liquid-glass-strong rounded-[32px] overflow-hidden border border-white/10"
                    >
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube-nocookie.com/embed/${activeTopic.youtubeId}?rel=0&modestbranding=1&autohide=1&showinfo=0`}
                        title={activeTopic.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </motion.div>
                  )}

                  {activeTab === "article" && (
                    <motion.div
                      key={activeTopic.id + "_article"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-8"
                    >
                      {activeTopic.article.split("##").map((section, idx) => {
                        if (!section.trim()) return null;
                        const isFirst = idx === 0;
                        const fullSection = isFirst ? section : `## ${section}`;
                        const isExample = fullSection.toLowerCase().includes("example problem") || fullSection.toLowerCase().includes("example");
                        
                        return (
                          <div 
                            key={idx}
                            className={cn(
                              "liquid-glass-strong rounded-[32px] p-8 md:p-12 border transition-all duration-500",
                              isExample 
                                ? "bg-white/[0.02] border-white/20 shadow-xl" 
                                : "bg-white/5 border-white/10"
                            )}
                            style={isExample ? {
                              borderColor: `${course.accentColor}40`,
                              boxShadow: `0 0 50px ${course.accentColor}10`
                            } : undefined}
                          >
                            <div className="prose prose-invert max-w-none prose-headings:font-instrument prose-headings:font-normal prose-h1:text-4xl prose-h2:text-2xl prose-p:font-inter prose-p:text-white/70 prose-p:leading-relaxed">
                              <ReactMarkdown 
                                remarkPlugins={[remarkMath]} 
                                rehypePlugins={[rehypeKatex, rehypeRaw]}
                                components={{
                                  // Custom vocab component handler in react-markdown
                                  // @ts-ignore
                                  vocab: ({ node, children, ...props }) => {
                                    const term = (props as any).term || "";
                                    const definition = (props as any).definition || "";
                                    return (
                                      <VocabularyPopover 
                                        term={term} 
                                        definition={definition}
                                        accentColor={course.accentColor}
                                        accentColorBorder={`${course.accentColor}4d`}
                                      >
                                        {children}
                                      </VocabularyPopover>
                                    );
                                  }
                                } as any}
                              >
                                {fullSection}
                              </ReactMarkdown>
                            </div>
                          </div>
                        );
                      })}
                      
                      {/* Visual Aids - Dynamic Rendering based on Topic Image */}
                      {activeTopic.image && (
                        <DiagramContainer 
                          title={activeTopic.title}
                          alt={activeTopic.title}
                          src={activeTopic.image}
                          caption={activeTopic.description}
                          accentColor={course.accentColor}
                          insightLabel={getInsightLabel(slug)}
                        />
                      )}
                    </motion.div>
                  )}

                  {activeTab === "practice" && (
                    <motion.div
                      key={activeTopic.id + "_practice"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      <PracticeSystem 
                        topicId={activeTopic.id}
                        masteryKey={masteryKey}
                        questions={activeTopic.questions} 
                        accentColor={course.accentColor}
                        onComplete={(score) => completeTopic(masteryKey, score)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center text-white/40">Loading workspace...</div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

interface PracticeProps {
  topicId: string;
  masteryKey: string;
  questions: any[];
  accentColor: string;
  onComplete: (score: number) => void;
}

function PracticeSystem({ topicId, masteryKey, questions, accentColor, onComplete }: PracticeProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setShowHint(false);
  }, [topicId]);

  if (!questions || questions.length === 0) {
    return (
      <div className="liquid-glass-strong rounded-[32px] p-12 text-center border border-white/10">
        <Brain className="w-12 h-12 text-white/20 mx-auto mb-4" />
        <p className="text-white/40">No practice questions available for this topic yet.</p>
      </div>
    );
  }

  const question = questions[currentIdx];

  const handleCheck = () => {
    if (selectedOption === null) return;
    
    const correct = selectedOption === question.correctIndex;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: [accentColor, "#ffffff"]
      });
      
      if (currentIdx + 1 === questions.length) {
        onComplete(100);
      }
    }
  };

  const nextQuestion = () => {
    setCurrentIdx((prev) => (prev + 1) % questions.length);
    setSelectedOption(null);
    setShowFeedback(false);
    setShowHint(false);
  };

  return (
    <div className="liquid-glass-strong rounded-[32px] p-8 md:p-12 border border-white/10 space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="font-instrument text-3xl text-white">Check Understanding</h3>
          <p className="text-xs font-manrope font-bold uppercase tracking-[0.2em] subject-accent-text">Question {currentIdx + 1} of {questions.length}</p>
        </div>
        <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center">
          <span className="text-xs font-bold text-white/40">{Math.round(((currentIdx) / questions.length) * 100)}%</span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-xl text-white/90 leading-relaxed font-inter">
          {question.text.split('$').map((part: string, i: number) => (
            i % 2 === 0 ? part : <InlineMath key={i}>{part}</InlineMath>
          ))}
        </div>

        <div className="grid gap-3">
          {question.options.map((option: string, idx: number) => (
            <button
              key={idx}
              onClick={() => !showFeedback && setSelectedOption(idx)}
              className={cn(
                "w-full text-left p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden",
                selectedOption === idx 
                  ? "text-white" 
                  : "bg-white/5 border-white/5 text-white/60 hover:border-white/20 hover:bg-white/10",
                showFeedback && idx === question.correctIndex && "border-green-500 bg-green-500/20 text-white",
                showFeedback && selectedOption === idx && idx !== question.correctIndex && "border-red-500 bg-red-500/20 text-white"
              )}
              style={{
                borderColor: selectedOption === idx && !showFeedback ? accentColor : undefined,
                backgroundColor: selectedOption === idx && !showFeedback ? `${accentColor}15` : undefined
              }}
            >
              <div className="flex items-center space-x-4">
                <div 
                  className={cn(
                    "w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold border transition-colors",
                    selectedOption === idx ? "text-black border-transparent" : "border-white/10 text-white/40"
                  )}
                  style={{
                    backgroundColor: selectedOption === idx && !showFeedback ? accentColor : undefined
                  }}
                >
                  {String.fromCharCode(65 + idx)}
                </div>
                <span>
                  {option.split('$').map((part, i) => (
                    i % 2 === 0 ? part : <InlineMath key={i}>{part}</InlineMath>
                  ))}
                </span>
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "p-6 rounded-2xl border",
                isCorrect ? "bg-green-500/10 border-green-500/30" : "bg-red-500/10 border-red-500/30"
              )}
            >
              <div className="flex items-start space-x-4">
                <div className={cn(
                  "p-2 rounded-xl shrink-0",
                  isCorrect ? "bg-green-500/20" : "bg-red-500/20"
                )}>
                  {isCorrect ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <Brain className="w-5 h-5 text-red-400" />}
                </div>
                <div className="space-y-1">
                  <h4 className={cn("font-bold text-sm", isCorrect ? "text-green-400" : "text-red-400")}>
                    {isCorrect ? "Excellent!" : "Not quite right"}
                  </h4>
                  <div className="text-sm text-white/60 leading-relaxed font-inter">
                    {question.explanation.split('$').map((part: string, i: number) => (
                      i % 2 === 0 ? part : <InlineMath key={i}>{part}</InlineMath>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {showHint && !showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-2xl bg-white/5 border text-white"
              style={{
                borderColor: `${accentColor}33`,
                backgroundColor: `${accentColor}08`
              }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <AlertCircle className="w-4 h-4" style={{ color: accentColor }} />
                <span className="font-bold text-sm uppercase tracking-widest" style={{ color: accentColor }}>Mastery Hint</span>
              </div>
              <p className="text-sm text-white/70">{question.hint || "Recall key properties discussed in the article tab."}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between items-center pt-4">
          <button 
            onClick={() => setShowHint(!showHint)}
            className="text-xs font-manrope font-black text-white/40 hover:text-white uppercase tracking-widest transition-colors"
          >
            {showHint ? "Hide Hint" : "Show Hint"}
          </button>
          
          <div className="flex space-x-4">
            {!showFeedback ? (
              <MagneticButton
                onClick={handleCheck}
                disabled={selectedOption === null}
                accentColor={accentColor}
                className="liquid-glass-strong px-12 py-4 rounded-2xl text-white font-manrope font-black uppercase tracking-widest text-xs disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <span className="flex items-center space-x-2 relative z-10">
                  <span>Check Answer</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </MagneticButton>
            ) : (
              <MagneticButton
                onClick={() => {
                  if (currentIdx + 1 === questions.length) {
                    onComplete(100);
                  }
                  nextQuestion();
                }}
                accentColor={accentColor}
                className="bg-white/10 px-12 py-4 rounded-2xl text-white font-manrope font-black uppercase tracking-widest text-xs"
              >
                <span className="flex items-center space-x-2 relative z-10">
                  <span>{currentIdx + 1 === questions.length ? "Finish Practice" : "Next Question"}</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </MagneticButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

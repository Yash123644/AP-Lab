"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Timer, AlertCircle, CheckCircle2, ChevronRight, Trophy, BarChart3, RotateCcw, Brain, Calculator } from "lucide-react";
import { CourseUnit, CourseQuestion } from "@/lib/courses/course-registry";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";
import { InlineMath } from "react-katex";
import { useProgress } from "@/context/ProgressContext";
import { DesmosCalculatorModal } from "./DesmosCalculatorModal";

interface Props {
  units: CourseUnit[];
  subjectName: string;
  accentColor: string; // Hex color
  onClose: () => void;
}

export function MockExam({ units, subjectName, accentColor, onClose }: Props) {
  const { recordMockExamAttempt } = useProgress();
  const [gameState, setGameState] = useState<"lobby" | "exam" | "results">("lobby");
  const [questions, setQuestions] = useState<CourseQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 minutes
  const [isPaused, setIsPaused] = useState(false);
  const [isCalcOpen, setIsCalcOpen] = useState(false);

  // Initialize Exam
  const startExam = useCallback(() => {
    const allQuestions: CourseQuestion[] = units.flatMap(u => u.topics.flatMap(t => {
      return t.questions.length >= 10 ? t.questions.slice(5, 10) : t.questions;
    }));
    // Shuffle and pick up to 60 questions
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 60));
    setGameState("exam");
    setTimeLeft(90 * 60);
    setUserAnswers({});
    setCurrentIndex(0);
  }, [units]);

  // Timer Logic
  useEffect(() => {
    if (gameState !== "exam" || isPaused) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          setGameState("results");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, isPaused]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleFinish = () => {
    setGameState("results");
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: [accentColor, "#ffffff"]
    });
    recordMockExamAttempt(correctCount, questions.length);
  };

  const calculateUnitPerformance = () => {
    const perf: Record<number, { correct: number, total: number, title: string }> = {};
    
    // Initialize all course units in order
    units.forEach(u => {
      perf[u.id] = {
        correct: 0,
        total: 0,
        title: u.title
      };
    });

    questions.forEach((q, idx) => {
      if (perf[q.unitId]) {
        perf[q.unitId].total++;
        if (userAnswers[idx] === q.correctIndex) {
          perf[q.unitId].correct++;
        }
      }
    });

    return Object.values(perf);
  };

  const scorePercentage = questions.length > 0 
    ? Math.round((Object.keys(userAnswers).filter(k => userAnswers[parseInt(k)] === questions[parseInt(k)].correctIndex).length / questions.length) * 100) 
    : 0;

  const correctCount = Object.keys(userAnswers).filter(k => userAnswers[parseInt(k)] === questions[parseInt(k)].correctIndex).length;

  return (
    <div className="fixed inset-0 z-[100] bg-[#02050D]/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8">
      {/* Inject custom variables for accent coloring */}
      <style>{`
        .exam-accent-text { color: ${accentColor}; }
        .exam-accent-bg { background-color: ${accentColor}; }
        .exam-accent-border { border-color: ${accentColor}40; }
        .exam-accent-glow { box-shadow: 0 0 25px ${accentColor}33; }
        .exam-accent-bg-glow { background-color: ${accentColor}15; }
        .exam-accent-ring:focus { --tw-ring-color: ${accentColor}80; }
      `}</style>

      <AnimatePresence mode="wait">
        {gameState === "lobby" && (
          <motion.div
            key="lobby"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="liquid-glass-strong max-w-2xl w-full p-12 text-center space-y-8"
          >
            <div className="w-20 h-20 exam-accent-bg-glow rounded-full flex items-center justify-center mx-auto border exam-accent-border">
              <Trophy className="w-10 h-10 exam-accent-text" />
            </div>
            <div className="space-y-4">
              <h2 className="font-instrument text-5xl text-white">{subjectName} Mock Exam</h2>
              <p className="text-white/60">Simulate a full Section I experience. {questions.length || 60} questions, 90 minutes. Test your mastery across all units.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-2xl font-bold text-white">60</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">Questions</div>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-2xl font-bold text-white">90</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">Minutes</div>
              </div>
            </div>
            <div className="flex flex-col space-y-3 pt-4">
              <button 
                onClick={startExam}
                className="w-full exam-accent-bg hover:opacity-90 text-black font-manrope font-black py-4 rounded-2xl transition-all exam-accent-glow"
              >
                START EXAM
              </button>
              <button onClick={onClose} className="text-white/40 hover:text-white transition-colors text-sm font-medium">Cancel</button>
            </div>
          </motion.div>
        )}

        {gameState === "exam" && (
          <motion.div
            key="exam"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-full max-w-6xl flex flex-col space-y-6"
          >
            {/* Exam Header */}
            <div className="flex items-center justify-between bg-black/20 p-6 rounded-[32px] border border-white/5 backdrop-blur-md">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-white/40">
                  <span className="text-xs font-manrope font-black uppercase tracking-widest">Question</span>
                  <span className="text-lg font-bold text-white">{currentIndex + 1}/{questions.length}</span>
                </div>
                <div className="h-8 w-[1px] bg-white/10" />
                <div className={cn(
                  "flex items-center space-x-2 px-4 py-2 rounded-full border transition-colors",
                  timeLeft < 300 ? "bg-red-500/10 border-red-500/30 text-red-400" : "bg-white/5 border-white/10 text-white"
                )}>
                  <Timer className="w-4 h-4" />
                  <span className="font-mono font-bold text-lg">{formatTime(timeLeft)}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {/biology|chemistry|physics|calculus|stats|statistics|comp sci/i.test(subjectName) && (
                  <button
                    onClick={() => setIsCalcOpen(!isCalcOpen)}
                    className="w-11 h-11 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/35 text-emerald-400 flex items-center justify-center transition-all shadow-md active:scale-95 group"
                    title="Open Desmos Graphing Calculator"
                  >
                    <Calculator className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                )}
                <button 
                  onClick={handleFinish}
                  className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-bold transition-all"
                >
                  Submit Exam
                </button>
              </div>
            </div>

            <DesmosCalculatorModal isOpen={isCalcOpen} onClose={() => setIsCalcOpen(false)} />

            {/* Question Body */}
            <div className="flex-1 grid lg:grid-cols-12 gap-8 overflow-hidden">
              {/* Main Column */}
              <div className="lg:col-span-8 flex flex-col space-y-6 overflow-y-auto pr-2 scrollbar-hide">
                <div className="liquid-glass-strong p-8 md:p-12 rounded-[40px] border border-white/10">
                  <div className="text-[10px] font-manrope font-black exam-accent-text uppercase tracking-[0.3em] mb-6">
                    {units.find(u => u.id === questions[currentIndex]?.unitId)?.title || "General Question"}
                  </div>
                  <p className="text-2xl text-white/90 leading-relaxed font-inter mb-12">
                    {questions[currentIndex]?.text.split('$').map((part, i) => (
                      i % 2 === 0 ? part : <InlineMath key={i}>{part}</InlineMath>
                    ))}
                  </p>
                  
                  <div className="grid gap-4">
                    {questions[currentIndex]?.options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => setUserAnswers(prev => ({ ...prev, [currentIndex]: idx }))}
                        className={cn(
                          "w-full text-left p-6 rounded-2xl border transition-all duration-300 group",
                          userAnswers[currentIndex] === idx 
                            ? "exam-accent-bg-glow exam-accent-border text-white" 
                            : "bg-white/5 border-white/5 text-white/60 hover:bg-white/10 hover:border-white/20"
                        )}
                      >
                        <div className="flex items-center space-x-6">
                          <div className={cn(
                            "w-8 h-8 rounded-lg flex items-center justify-center font-bold border transition-colors",
                            userAnswers[currentIndex] === idx ? "exam-accent-bg text-black border-white/20" : "border-white/10 text-white/40 group-hover:border-white/20"
                          )}>
                            {String.fromCharCode(65 + idx)}
                          </div>
                          <span className="text-lg">
                            {option.split('$').map((part, i) => (
                              i % 2 === 0 ? part : <InlineMath key={i}>{part}</InlineMath>
                            ))}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pb-8">
                  <button 
                    disabled={currentIndex === 0}
                    onClick={() => setCurrentIndex(prev => prev - 1)}
                    className="p-4 rounded-2xl bg-white/5 text-white disabled:opacity-20 transition-all border border-white/5 hover:bg-white/10"
                  >
                    <ChevronRight className="w-6 h-6 rotate-180" />
                  </button>
                  <div className="flex flex-col items-center space-y-1.5 min-w-[240px]">
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full exam-accent-bg"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                    <span className="text-[10px] font-mono text-white/40 tracking-wider">
                      Question {currentIndex + 1} of {questions.length}
                    </span>
                  </div>
                  {currentIndex === questions.length - 1 ? (
                    <button 
                      onClick={handleFinish} 
                      className="exam-accent-bg px-8 py-4 rounded-2xl text-black font-bold exam-accent-glow"
                    >
                      Finish
                    </button>
                  ) : (
                    <button 
                      onClick={() => setCurrentIndex(prev => prev + 1)}
                      className="p-4 rounded-2xl exam-accent-bg text-black transition-all exam-accent-glow hover:scale-105 active:scale-95"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  )}
                </div>
              </div>

              {/* Status Sidebar */}
              <div className="lg:col-span-4 hidden lg:block">
                <div className="liquid-glass-strong h-full rounded-[40px] border border-white/10 p-8 flex flex-col">
                  <h3 className="font-instrument text-2xl text-white mb-6">Question Map</h3>
                  <div className="grid grid-cols-6 gap-2 no-scrollbar">
                    {questions.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={cn(
                          "aspect-square rounded-xl flex items-center justify-center text-sm font-bold border transition-all",
                          idx === currentIndex 
                            ? "exam-accent-bg border-white/40 text-black ring-2 ring-white/20" 
                            : (userAnswers[idx] !== undefined ? "bg-white/20 border-white/20 text-white" : "bg-white/5 border-white/5 text-white/20 hover:border-white/20")
                        )}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>
                  <div className="mt-auto pt-6 space-y-4">
                    <div className="flex items-center space-x-2 text-white/40 text-xs">
                      <AlertCircle className="w-4 h-4" />
                      <span>Unanswered questions scored as 0.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {gameState === "results" && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-5xl liquid-glass-strong rounded-[48px] border border-white/10 p-12 pb-24 overflow-y-auto max-h-[90vh] no-scrollbar"
          >
            <div className="text-center space-y-4 mb-16">
              <div className="inline-flex items-center space-x-2 exam-accent-bg-glow px-4 py-2 rounded-full border exam-accent-border exam-accent-text text-sm font-bold mb-4">
                <CheckCircle2 className="w-4 h-4" />
                <span>EXAM COMPLETED</span>
              </div>
              <h2 className="font-instrument text-6xl text-white">Performance Report</h2>
              <div className="flex items-center justify-center space-x-8 mt-8">
                <div className="text-center">
                  <div className="text-5xl font-black text-white">{scorePercentage}%</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest mt-2">Overall Score</div>
                </div>
                <div className="h-16 w-[1px] bg-white/10" />
                <div className="text-center">
                  <div className="text-5xl font-black text-white">{correctCount}/{questions.length}</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest mt-2">Correct Answers</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="font-instrument text-3xl text-white flex items-center space-x-3">
                  <BarChart3 className="w-6 h-6 exam-accent-text" />
                  <span>Unit Mastery</span>
                </h3>
                <div className="space-y-3 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                  {calculateUnitPerformance().map((p, idx) => (
                    <div key={idx} className="space-y-2 p-3 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex justify-between items-end">
                        <span className="text-xs font-medium text-white/70">{p.title}</span>
                        <span className="text-xs font-bold text-white">
                          {p.total > 0 ? Math.round((p.correct / p.total) * 100) : 0}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${p.total > 0 ? (p.correct / p.total) * 100 : 0}%` }}
                          className="h-full exam-accent-bg"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-8 rounded-3xl exam-accent-bg-glow border exam-accent-border">
                  <h4 className="text-white font-bold mb-4 flex items-center space-x-2">
                    <Brain className="w-5 h-5 exam-accent-text" />
                    <span>Learning Insight</span>
                  </h4>
                  <p className="text-white/70 leading-relaxed font-inter">
                    Your understanding of this subject shows solid core competencies. To reach the elite 5-score threshold on the actual College Board exam, keep reviewing topics under your lower-performing units in the sidebar.
                  </p>
                </div>
                <div className="flex space-x-4">
                  <button onClick={startExam} className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center space-x-2">
                    <RotateCcw className="w-5 h-5" />
                    <span>Retake Exam</span>
                  </button>
                  <button onClick={onClose} className="flex-1 exam-accent-bg text-black font-bold py-4 rounded-2xl exam-accent-glow">
                    Exit Report
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

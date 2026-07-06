"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, AlertCircle, ArrowUp, Activity } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { courseRegistry } from "@/lib/courses/course-registry";
import { useProgress } from "@/context/ProgressContext";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const getCourseDisplayName = (slug: string) => {
  if (slug === "ap-biology" || slug === "biology") return "Biology";
  if (slug === "ap-chemistry" || slug === "chemistry") return "Chemistry";
  if (slug === "ap-physics-c") return "Physics C";
  if (slug === "ap-ush") return "US History";
  if (slug === "ap-psych") return "Psychology";
  if (slug === "ap-eng-lang") return "English Lang";
  if (slug === "ap-calc-bc") return "Calculus BC";
  if (slug === "ap-stats") return "Statistics";
  if (slug === "ap-csa") return "Computer Science A";
  return slug;
};

export function AIAssistantDrawer({ 
  course, 
  isOpen, 
  onClose,
  initialQuery
}: { 
  course: string, 
  isOpen: boolean, 
  onClose: () => void,
  initialQuery?: string 
}) {
  // Resolve course registry details for custom theme coloring
  let registrySlug = course;
  if (registrySlug === "biology") registrySlug = "ap-biology";
  if (registrySlug === "chemistry") registrySlug = "ap-chemistry";
  const courseData = courseRegistry[registrySlug];
  const accentColor = courseData?.accentColor || "#8b5cf6"; // Default violet/purple

  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: `Hi! I'm your AP Lab AI Tutor. I can answer up to 5 questions about your ${getCourseDisplayName(course)} curriculum today. How can I help?` }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { progress, recordTutorMessage } = useProgress();

  // Resolve count from context (synced to Firestore/LocalStorage)
  const todayStr = new Date().toLocaleDateString('en-CA');
  const userMessageCount = progress.dailyTutorMessagesDate === todayStr 
    ? (progress.dailyTutorMessagesCount || 0) 
    : 0;
  const isLimitReached = userMessageCount >= 5;

  const suggestions = [
    { label: "🔍 Explain concept", text: "Can you explain the key concepts of this topic in detail?" },
    { label: "📝 Quiz me", text: "Can you give me a practice question with options to test my understanding?" },
    { label: "💡 Key Terms", text: "What are the most important vocabulary terms I need to know for this topic?" }
  ];

  const handleSuggestionClick = (text: string) => {
    setInput(text);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (initialQuery && isOpen) {
      setInput(`Regarding this text: "${initialQuery}"\n\n`);
    }
  }, [initialQuery, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || isLimitReached) return;

    const userMessage = input.trim();
    setInput("");
    
    const newMessages: Message[] = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      await recordTutorMessage();

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: newMessages.slice(1), // Exclude initial greeting
          course
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch response");
      }

      setMessages(prev => [...prev, { role: "assistant", content: data.text }]);
    } catch (error: any) {
      console.error(error);
      let errorMsg = `**Error:** ${error.message}. Please try again later.`;
      if (error.message.includes("API Key") || error.message.includes("configured") || error.message.includes("placeholder")) {
        errorMsg = `### ⚠️ Gemini API Key Not Configured\n\nIt looks like your Gemini API Key is missing or using the placeholder value.\n\n**To fix this:**\n1. Open \`.env.local\` in your workspace.\n2. Add your real API key under \`GEMINI_API_KEY\`.\n3. **Restart** your Next.js development server.`;
      }
      setMessages(prev => [...prev, { role: "assistant", content: errorMsg }]);
    } finally {
      setIsLoading(false);
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#05060c]/90 border-l border-white/10 z-[100] flex flex-col shadow-[0_0_80px_rgba(0,0,0,0.8)] backdrop-blur-3xl"
          >
            {/* Header */}
            <div className="h-20 border-b border-white/5 flex items-center justify-between px-6 bg-white/[0.01]">
              <div className="flex items-center space-x-3.5">
                <div 
                  className="w-10 h-10 rounded-full bg-white/[0.02] border flex items-center justify-center relative overflow-hidden group shadow-inner"
                  style={{ borderColor: `${accentColor}30` }}
                >
                  <div 
                    className="absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20"
                    style={{ backgroundColor: accentColor }}
                  />
                  <Activity className="w-5 h-5 relative z-10 animate-pulse" style={{ color: accentColor }} />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-instrument text-lg text-white font-medium">AI Tutor</h3>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" title="Active" />
                  </div>
                  <p className="text-xs text-white/40 mt-0.5">
                    {getCourseDisplayName(course)} • {userMessageCount}/5 messages • Powered by Gemini
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-white"
                  title="Close panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Messages (Clean i-Message layout) */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scroll-smooth select-text no-scrollbar">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "user" ? (
                    /* User Message Bubble */
                    <div className="max-w-[78%] flex flex-col items-end">
                      <div 
                        className="rounded-[20px] rounded-br-[4px] px-5 py-2.5 text-sm font-inter leading-relaxed text-white w-full overflow-hidden break-words whitespace-normal"
                        style={{
                          backgroundColor: accentColor,
                        }}
                      >
                        <div className="prose prose-invert prose-sm max-w-none text-white break-words select-text">
                          {msg.content}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* AI Assistant Message Bubble */
                    <div className="max-w-[82%] flex flex-col items-start">
                      <div className="rounded-[20px] rounded-bl-[4px] px-5 py-2.5 text-sm font-inter leading-relaxed text-white/95 bg-[#242429] w-full overflow-hidden break-words whitespace-normal">
                        <div className="prose prose-invert prose-sm max-w-none leading-relaxed select-text break-words whitespace-normal">
                          <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                            {msg.content}
                          </ReactMarkdown>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[82%] flex flex-col items-start">
                    <div className="rounded-[20px] rounded-bl-[4px] bg-[#242429] p-4 flex space-x-1.5 items-center">
                      <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: accentColor, animationDelay: "0s" }} />
                      <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: accentColor, animationDelay: "0.15s" }} />
                      <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: accentColor, animationDelay: "0.3s" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input & Quick suggestions */}
            <div className="p-5 border-t border-white/5 bg-[#030408]/90 backdrop-blur-md">
              {isLimitReached ? (
                <div 
                  className="bg-amber-500/5 border rounded-2xl p-4 flex flex-col items-center justify-center text-center space-y-2.5 backdrop-blur-md"
                  style={{ borderColor: `${accentColor}30` }}
                >
                  <AlertCircle className="w-5 h-5 text-amber-500/80" />
                  <p className="text-xs font-inter text-white/70 leading-relaxed">
                    Message limit reached (5/5). Close the drawer or review the resources to continue studying!
                  </p>
                </div>
              ) : (
                <div className="flex flex-col">
                  {/* Clickable Quick Suggestions */}
                  <div className="flex gap-2 mb-4 overflow-x-auto pb-1.5 select-none scrollbar-none">
                    {suggestions.map((s, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSuggestionClick(s.text)}
                        className="shrink-0 text-[10px] px-3.5 py-2 rounded-full bg-white/[0.03] border border-white/5 text-white/70 hover:text-white transition-all font-manrope font-semibold"
                        style={{
                          borderColor: `${accentColor}15`
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = `${accentColor}50`;
                          e.currentTarget.style.backgroundColor = `${accentColor}12`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = `${accentColor}15`;
                          e.currentTarget.style.backgroundColor = `rgba(255,255,255,0.03)`;
                        }}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="relative flex items-center bg-[#1c1c1f] rounded-full border border-white/5 px-4 py-1.5 w-full">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask a curriculum question..."
                      className="w-full bg-transparent border-none focus:outline-none text-sm text-white placeholder-white/25 pr-10 font-inter py-1"
                      style={{
                        caretColor: accentColor
                      }}
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || isLoading}
                      className="w-7 h-7 flex items-center justify-center rounded-full text-white disabled:opacity-20 transition-all hover:scale-105 active:scale-95 absolute right-2"
                      style={{
                        backgroundColor: accentColor,
                      }}
                    >
                      <ArrowUp className="w-4 h-4 text-black stroke-[3px]" />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, Send, Sparkles, AlertCircle, Bot, User, RotateCcw, Settings } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { courseRegistry } from "@/lib/courses/course-registry";

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
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [tempKey, setTempKey] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTempKey(localStorage.getItem("gemini_api_key") || "");
    }
  }, []);

  const handleSaveKey = () => {
    localStorage.setItem("gemini_api_key", tempKey.trim());
    setIsSettingsOpen(false);
  };

  const handleClearKey = () => {
    localStorage.removeItem("gemini_api_key");
    setTempKey("");
    setIsSettingsOpen(false);
  };
  
  // Count user messages to enforce limit
  const userMessageCount = messages.filter(m => m.role === "user").length;
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

    const clientKey = typeof window !== "undefined" ? localStorage.getItem("gemini_api_key") : null;
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          ...(clientKey ? { "x-gemini-key": clientKey } : {})
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
        errorMsg = `### ⚠️ Gemini API Key Not Configured\n\nIt looks like your Gemini API Key is missing or using the placeholder value.\n\n**To fix this:**\n1. Open [\`.env.local\`](file:///${process.cwd()}/.env.local) in your workspace.\n2. Find the line: \`GEMINI_API_KEY=your_gemini_api_key_here\`\n3. Replace \`your_gemini_api_key_here\` with your real API key from Google AI Studio.\n4. **Restart** your Next.js development server (\`npm run dev\`) in your terminal for the changes to take effect.\n\n*Alternatively*, click the **settings gear** in the top-right corner of this chat panel and paste your key directly!`;
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
                  className="w-10 h-10 rounded-xl bg-white/[0.02] border flex items-center justify-center relative overflow-hidden group shadow-inner"
                  style={{ borderColor: `${accentColor}30` }}
                >
                  <div 
                    className="absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20"
                    style={{ backgroundColor: accentColor }}
                  />
                  <Sparkles className="w-5 h-5 relative z-10" style={{ color: accentColor }} />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-instrument text-lg text-white font-medium">AI Tutor</h3>
                    <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-[9px] text-green-400 font-bold uppercase tracking-wider select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span>Active</span>
                    </div>
                  </div>
                  <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest mt-1">
                    {getCourseDisplayName(course)} Study Session
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-white"
                  title="Tutor Settings"
                >
                  <Settings className="w-5 h-5" />
                </button>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-white"
                  title="Close panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Settings Pane */}
            {isSettingsOpen && (
              <div className="bg-white/[0.02] border-b border-white/10 p-5 space-y-3.5 backdrop-blur-md">
                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs font-semibold text-white/70 uppercase tracking-wide">Gemini API Key Fallback</label>
                  <p className="text-[11px] text-white/40">
                    If your `.env.local` API key is not configured, paste your Gemini API Key here. It will be stored securely in your browser's local storage.
                  </p>
                </div>
                <div className="flex space-x-2">
                  <input
                    type="password"
                    placeholder="AIzaSy..."
                    value={tempKey}
                    onChange={(e) => setTempKey(e.target.value)}
                    className="flex-1 bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-white/50 rounded-xl px-4 py-2.5 text-white focus:outline-none transition-all text-xs placeholder:text-white/20"
                  />
                  <button
                    onClick={handleSaveKey}
                    className="bg-white text-black font-semibold text-xs rounded-xl px-4 py-2.5 hover:bg-white/90 transition-all"
                  >
                    Save
                  </button>
                </div>
                {tempKey && (
                  <button
                    onClick={handleClearKey}
                    className="text-[10px] text-red-400/80 hover:text-red-400 font-medium transition-colors mt-1 animate-pulse"
                  >
                    Clear custom key
                  </button>
                )}
              </div>
            )}

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth select-text no-scrollbar">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "user" ? (
                    /* User Message Bubble */
                    <div className="flex flex-col items-end space-y-1.5 max-w-[85%]">
                      <div 
                        className="rounded-2xl rounded-tr-none p-4 text-sm font-inter leading-relaxed text-white/90 shadow-lg border bg-white/[0.03]"
                        style={{
                          borderColor: `${accentColor}25`,
                          boxShadow: `0 8px 32px 0 ${accentColor}08`
                        }}
                      >
                        <div className="prose prose-invert prose-sm max-w-none">
                          {msg.content}
                        </div>
                      </div>
                      <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest mr-1">You</span>
                    </div>
                  ) : (
                    /* AI Assistant Message Bubble */
                    <div className="flex flex-col items-start space-y-1.5 max-w-[85%]">
                      <div 
                        className="rounded-2xl rounded-tl-none p-4 text-sm font-inter leading-relaxed text-white/80 border bg-white/[0.01]"
                        style={{
                          borderColor: `rgba(255, 255, 255, 0.05)`
                        }}
                      >
                        <div className="prose prose-invert prose-sm max-w-none leading-relaxed select-text">
                          <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                            {msg.content}
                          </ReactMarkdown>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest ml-1">AI Tutor</span>
                    </div>
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex flex-col items-start space-y-1.5 max-w-[85%]">
                    <div className="rounded-2xl rounded-tl-none border border-white/5 bg-white/[0.01] p-4 flex space-x-1.5 items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/30 animate-pulse" style={{ backgroundColor: accentColor }} />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/30 animate-pulse" style={{ backgroundColor: accentColor, animationDelay: "0.15s" }} />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/30 animate-pulse" style={{ backgroundColor: accentColor, animationDelay: "0.3s" }} />
                    </div>
                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest ml-1">Thinking</span>
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

                  <form onSubmit={handleSubmit} className="relative">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask a curriculum question..."
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 pr-12 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:border-white/20 focus:ring-white/20 transition-all font-inter"
                      style={{
                        caretColor: accentColor
                      }}
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || isLoading}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-lg text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg hover:scale-105 active:scale-95"
                      style={{
                        backgroundColor: accentColor,
                        boxShadow: `0 4px 14px ${accentColor}40`
                      }}
                    >
                      <Send className="w-4.5 h-4.5 text-black font-black" />
                    </button>
                  </form>
                </div>
              )}
              <div className="mt-4 flex justify-between px-1">
                <span className="text-[9px] font-mono text-white/20 uppercase tracking-wider">
                  Gemini 2.5 Flash
                </span>
                <span className="text-[9px] font-mono text-white/30 uppercase tracking-wider">
                  {userMessageCount} / 5 Questions
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

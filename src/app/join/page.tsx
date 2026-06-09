"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LogoFieldBackground } from "@/components/LogoFieldBackground";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Code2, Sparkles, BookOpen } from "lucide-react";

type TabType = "academic" | "developer" | "designer";

const tabDetails = {
  academic: {
    title: "Academic Content Creator",
    description: "Author premium study guides, curate unit review questions, and design clinical correlations to connect theoretical concepts directly to real-world medical practice.",
    skills: ["Scored a 4 or 5 on the relevant AP Exam", "Clear, engaging, and structured explanation skills", "Passionate about education and mentoring"],
    badge: "AP Content",
    hex: "#00f2ff", // medical-teal
    bgHex: "rgba(0, 242, 255, 0.04)",
    borderHex: "rgba(0, 242, 255, 0.25)",
    defaultSubject: "AP Chemistry",
    defaultRole: "Resource Creator / Writer"
  },
  developer: {
    title: "Platform & Tool Engineer",
    description: "Write production React/TypeScript code, build interactive 3D simulations (WebGL/Three.js), and construct high-performance learning dashboard utilities.",
    skills: ["Proficiency in React / TypeScript", "Familiarity with Next.js & TailwindCSS", "Interest in 3D graphics or data analytics"],
    badge: "Core Platform",
    hex: "#7b39fc", // primary-purple
    bgHex: "rgba(123, 57, 252, 0.04)",
    borderHex: "rgba(123, 57, 252, 0.25)",
    defaultSubject: "Core Codebase / Infrastructure",
    defaultRole: "Developer / Coder"
  },
  designer: {
    title: "UI/UX & Asset Designer",
    description: "Create sleek visual layouts, design intuitive vector diagrams, develop branding guides, and design promotional/community visual assets.",
    skills: ["Proficiency in Figma or Adobe Illustrator", "Strong visual portfolio showcasing modern UI elements", "Expertise in vector illustration and branding"],
    badge: "Visual Brand",
    hex: "#ec4899", // pink
    bgHex: "rgba(236, 72, 153, 0.04)",
    borderHex: "rgba(236, 72, 153, 0.25)",
    defaultSubject: "Visual Design / Branding",
    defaultRole: "Graphic Designer / Illustrator"
  }
};

export default function JoinPage() {
  const [selectedTab, setSelectedTab] = useState<TabType>("academic");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "AP Chemistry",
    role: "Resource Creator / Writer",
    experience: "",
    contribution: ""
  });

  const handleTabChange = (tab: TabType) => {
    setSelectedTab(tab);
    setFormData(prev => ({
      ...prev,
      subject: tabDetails[tab].defaultSubject,
      role: tabDetails[tab].defaultRole
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Join Request Submitted:", formData);
    
    setLoading(false);
    setSuccess(true);
    
    // Reset success state after a few seconds
    setTimeout(() => {
      setSuccess(false);
      setFormData({
        name: "",
        email: "",
        subject: tabDetails[selectedTab].defaultSubject,
        role: tabDetails[selectedTab].defaultRole,
        experience: "",
        contribution: ""
      });
    }, 4000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  const apClasses = [
    "AP Chemistry",
    "AP Biology",
    "AP Physics 1",
    "AP Calculus BC",
    "AP Statistics",
    "AP Computer Science",
    "AP World History",
    "AP US History",
    "AP Psychology",
    "AP Lang",
    "AP Macroeconomics",
    "AP Environmental",
    "Core Codebase / Infrastructure",
    "Visual Design / Branding",
    "Other / Multi-subject"
  ];

  const roles = [
    "Resource Creator / Writer",
    "Developer / Coder",
    "Graphic Designer / Illustrator",
    "Beta Tester / Quality Reviewer",
    "Community Moderator"
  ];

  const activeTabInfo = tabDetails[selectedTab];

  return (
    <main className="relative z-0 min-h-screen selection:bg-medical-teal selection:text-white flex flex-col overflow-hidden bg-[#020202]">
      
      {/* Canvas Logo Field Background */}
      <LogoFieldBackground color={activeTabInfo.hex} opacity={0.22} speedX={0.25} speedY={0.12} />

      {/* Radial Gradient Mask for Vignette Effect */}
      <div className="absolute inset-0 -z-20 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#02050d]/50 to-[#020202]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,2,2,0.85)_100%)]" />
      </div>

      <Navbar />
      
      <div className="flex-1 flex items-center pt-32 pb-24 px-6 md:px-[120px] relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-stretch items-start"
        >
          
          {/* Left Column: Interactive Dept Switcher & Timeline */}
          <div className="flex flex-col text-left space-y-5 lg:h-full">
            <div className="space-y-2">
              <motion.h1 variants={itemVariants} className="font-instrument text-5xl md:text-7xl text-white">
                Join the lab
              </motion.h1>
              <motion.p variants={itemVariants} className="font-inter text-lg text-white/60 max-w-md">
                AP Lab is built by students, for students. Select your area of interest to explore active roles and auto-fill your application.
              </motion.p>
            </div>

            {/* Switcher Tabs */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-2 bg-white/[0.02] border border-white/5 p-1 rounded-xl">
              {(Object.keys(tabDetails) as TabType[]).map((tab) => {
                const isActive = selectedTab === tab;
                const info = tabDetails[tab];
                return (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className="flex flex-col items-center justify-center py-2 px-1.5 rounded-lg transition-all duration-300 relative overflow-hidden"
                    style={{
                      backgroundColor: isActive ? info.bgHex : "transparent",
                      border: isActive ? `1px solid ${info.borderHex}` : "1px solid transparent",
                      boxShadow: isActive ? `0 0 15px ${info.bgHex}` : "none",
                    }}
                  >
                    {tab === "academic" && <BookOpen className="w-5 h-5 mb-1.5 transition-colors" style={{ color: isActive ? info.hex : "rgba(255,255,255,0.4)" }} />}
                    {tab === "developer" && <Code2 className="w-5 h-5 mb-1.5 transition-colors" style={{ color: isActive ? info.hex : "rgba(255,255,255,0.4)" }} />}
                    {tab === "designer" && <Sparkles className="w-5 h-5 mb-1.5 transition-colors" style={{ color: isActive ? info.hex : "rgba(255,255,255,0.4)" }} />}
                    
                    <span 
                      className="font-manrope font-bold text-xs uppercase tracking-wider transition-colors"
                      style={{ color: isActive ? "#ffffff" : "rgba(255,255,255,0.5)" }}
                    >
                      {tab}
                    </span>
                  </button>
                );
              })}
            </motion.div>

            {/* Responsive Grid for the Two Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:flex-grow">
              {/* Tab Details Box */}
              <motion.div 
                variants={itemVariants}
                className="liquid-glass rounded-2xl p-4 relative min-h-[160px] flex flex-col"
                style={{ borderColor: activeTabInfo.borderHex }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedTab}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col justify-between flex-grow h-full space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span 
                          className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10"
                          style={{ color: activeTabInfo.hex }}
                        >
                          {activeTabInfo.badge}
                        </span>
                      </div>
                      
                      <h3 className="font-manrope font-bold text-white text-lg leading-tight">{activeTabInfo.title}</h3>
                      <p className="font-inter text-[13px] text-white/70 leading-normal">{activeTabInfo.description}</p>
                    </div>
                    
                    <div className="space-y-1.5 pt-1">
                      <h4 className="font-cabin text-[10px] font-bold text-white/50 uppercase tracking-wider">Ideal Experience</h4>
                      <ul className="space-y-2">
                        {activeTabInfo.skills.map((skill, i) => (
                          <li key={i} className="font-inter text-[11px] text-white/60 flex items-start">
                            <span className="mr-1.5" style={{ color: activeTabInfo.hex }}>•</span>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Contribution Timeline Flow */}
              <motion.div 
                variants={itemVariants} 
                className="liquid-glass rounded-2xl p-4 relative overflow-hidden flex flex-col"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-medical-teal/5 blur-[50px] rounded-full pointer-events-none" />
                
                <h3 className="font-cabin font-bold text-white text-xs tracking-wider uppercase mb-4 flex items-center gap-2 relative z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-medical-teal animate-pulse" />
                  The Contribution Loop
                </h3>
                
                <div className="flex flex-col justify-between flex-grow relative z-10 gap-3">
                  {/* Step 1 */}
                  <div className="group relative rounded-xl p-2.5 bg-white/[0.01] border border-white/5 hover:bg-white/[0.04] hover:border-medical-teal/30 transition-all duration-300 flex-grow flex flex-col justify-center">
                    <div className="flex items-start space-x-3">
                      <div className="w-7 h-7 rounded-lg bg-medical-teal/10 border border-medical-teal/20 flex items-center justify-center font-mono text-[10px] font-bold text-medical-teal shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-[0_0_10px_rgba(0,242,255,0.05)]">
                        01
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-manrope font-bold text-white text-[13px] tracking-wide">Submit Proposal</h4>
                        <p className="font-inter text-white/50 text-[11px] leading-snug">Fill out your profile and course credentials in the application form.</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="group relative rounded-xl p-2.5 bg-white/[0.01] border border-white/5 hover:bg-white/[0.04] hover:border-primary-purple/30 transition-all duration-300 flex-grow flex flex-col justify-center">
                    <div className="flex items-start space-x-3">
                      <div className="w-7 h-7 rounded-lg bg-primary-purple/10 border border-primary-purple/20 flex items-center justify-center font-mono text-[10px] font-bold text-primary-purple shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-[0_0_10px_rgba(123,57,252,0.05)]">
                        02
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-manrope font-bold text-white text-[13px] tracking-wide">Align on Discord</h4>
                        <p className="font-inter text-white/50 text-[11px] leading-snug">We review details together and invite you to our private builder channels.</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="group relative rounded-xl p-2.5 bg-white/[0.01] border border-white/5 hover:bg-white/[0.04] hover:border-pink-500/30 transition-all duration-300 flex-grow flex flex-col justify-center">
                    <div className="flex items-start space-x-3">
                      <div className="w-7 h-7 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center font-mono text-[10px] font-bold text-pink-400 shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-[0_0_10px_rgba(236,72,153,0.05)]">
                        03
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-manrope font-bold text-white text-[13px] tracking-wide">Deploy & Ship</h4>
                        <p className="font-inter text-white/50 text-[11px] leading-snug">Collaborate directly on lessons or tooling, and see your work published!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Interactive Join Form & Discord Section */}
          <div className="flex flex-col space-y-6 w-full">
            <motion.div variants={itemVariants} className="liquid-glass-strong rounded-[32px] p-8 md:p-10 relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="font-cabin text-sm font-bold text-white/70 tracking-wide">Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#02050D]/60 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-medical-teal focus:ring-1 focus:ring-medical-teal transition-all placeholder:text-white/20"
                      placeholder="Jane Doe"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="font-cabin text-sm font-bold text-white/70 tracking-wide">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#02050D]/60 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-medical-teal focus:ring-1 focus:ring-medical-teal transition-all placeholder:text-white/20"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Subject Selection */}
                  <div className="space-y-2">
                    <label className="font-cabin text-sm font-bold text-white/70 tracking-wide">Subject of Interest</label>
                    <div className="relative">
                      <select 
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full bg-[#02050D]/60 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-medical-teal focus:ring-1 focus:ring-medical-teal transition-all appearance-none"
                      >
                        {apClasses.map((subj) => (
                          <option key={subj} value={subj}>{subj}</option>
                        ))}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  {/* Role Selection */}
                  <div className="space-y-2">
                    <label className="font-cabin text-sm font-bold text-white/70 tracking-wide">Contribution Role</label>
                    <div className="relative">
                      <select 
                        value={formData.role}
                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                        className="w-full bg-[#02050D]/60 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-medical-teal focus:ring-1 focus:ring-medical-teal transition-all appearance-none"
                      >
                        {roles.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What can you add */}
                <div className="space-y-2">
                  <label className="font-cabin text-sm font-bold text-white/70 tracking-wide">What can you add or contribute?</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.contribution}
                    onChange={(e) => setFormData({...formData, contribution: e.target.value})}
                    className="w-full bg-[#02050D]/60 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-medical-teal focus:ring-1 focus:ring-medical-teal transition-all placeholder:text-white/20 resize-none font-sans"
                    placeholder="Notes, study guides, interactive code, diagrams, animations, or questions..."
                  />
                </div>

                {/* Experience / Link */}
                <div className="space-y-2">
                  <label className="font-cabin text-sm font-bold text-white/70 tracking-wide">Prior Experience / Link (optional)</label>
                  <input 
                    type="text" 
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    className="w-full bg-[#02050D]/60 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-medical-teal focus:ring-1 focus:ring-medical-teal transition-all placeholder:text-white/20"
                    placeholder="e.g. GitHub link, portfolio, or past projects..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <AnimatePresence mode="wait">
                    {success ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="w-full bg-medical-teal/20 border border-medical-teal/50 rounded-xl py-4 flex items-center justify-center space-x-2 text-medical-teal font-bold"
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Application Submitted!</span>
                      </motion.div>
                    ) : (
                      <motion.button
                        key="submit"
                        type="submit"
                        disabled={loading}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="w-full bg-primary-purple hover:brightness-110 transition-all rounded-xl py-4 flex items-center justify-center space-x-2 text-white font-bold disabled:opacity-50 shadow-[0_0_20px_rgba(123,57,252,0.3)]"
                        style={{
                          backgroundColor: activeTabInfo.hex,
                          boxShadow: `0 0 20px ${activeTabInfo.hex}40`
                        }}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <span>Join Team</span>
                        )}
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>

              </form>
            </motion.div>

            {/* Discord Promo Card */}
            <motion.div 
              variants={itemVariants}
              className="liquid-glass rounded-3xl p-6 relative overflow-hidden border border-white/5 flex items-center justify-between group hover:border-[#7289da]/30 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7289da]/5 blur-[50px] rounded-full pointer-events-none" />
              <div className="space-y-1 relative z-10 text-left">
                <h4 className="font-manrope font-bold text-white text-sm tracking-wide">Join our Discord</h4>
                <p className="font-inter text-white/50 text-xs leading-relaxed max-w-sm">Connect with us on Discord to further discuss contributions and meet the team.</p>
              </div>
              <div className="relative z-10 flex-shrink-0">
                <a 
                  href="https://discord.com/invite/dUSaevPETd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="discord-invite-btn"
                >
                  <div className="discord-invite-bg"></div>
                  <div className="discord-invite-svg-container">
                    {/* Discord Icon */}
                    <svg className="w-5 h-5 text-white" viewBox="0 0 127.14 96.36" fill="currentColor">
                      <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.1,46,96,53,91.08,65.69,84.69,65.69Z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
          
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}

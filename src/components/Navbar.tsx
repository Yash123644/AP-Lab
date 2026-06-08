"use client";

import { useState, useEffect } from "react";
import { Menu, X, Activity } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { AuthModal } from "@/components/AuthModal";
import { useAuth } from "@/context/AuthContext";
import { useUI } from "@/context/UIContext";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentUser } = useAuth();
  const { openAuthModal } = useUI();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Impact", href: "/community-impact" },
    { name: "Join", href: "/join" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full px-6 md:px-[120px] transition-all duration-500 flex items-center justify-between",
        isScrolled 
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg" 
          : "bg-transparent border-b border-transparent py-6"
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all duration-300">
            <Activity className="w-5 h-5 text-white animate-pulse" />
          </div>
          <span className="font-manrope font-bold text-white tracking-tight text-lg">AP Lab</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href}
                href={link.href} 
                className={cn(
                  "relative font-manrope font-semibold text-[13px] tracking-wide transition-all duration-300",
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                )}
              >
                <span>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-6">
          {currentUser ? (
            <Link href="/dashboard">
              <button className="bg-white text-black font-manrope font-semibold text-[13px] px-5 py-2.5 rounded-full hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_12px_rgba(255,255,255,0.1)]">
                Dashboard
              </button>
            </Link>
          ) : (
            <>
              <button 
                onClick={() => openAuthModal("signin")}
                className="font-manrope font-semibold text-[13px] text-white/60 hover:text-white transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => openAuthModal("signup")}
                className="bg-white text-black font-manrope font-semibold text-[13px] px-5 py-2.5 rounded-full hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_12px_rgba(255,255,255,0.1)]"
              >
                Get Started
              </button>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex flex-col p-6"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col space-y-8 mt-12 items-center">
              <Link href="/" className="font-manrope font-semibold text-2xl text-white" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="font-manrope font-semibold text-2xl text-white" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-4 w-full pt-8">
                {currentUser ? (
                  <Link 
                    href="/dashboard" 
                    className="font-manrope font-semibold text-lg text-white text-center hover:opacity-80"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Go to Dashboard
                  </Link>
                ) : (
                  <>
                    <button 
                      onClick={() => {
                        openAuthModal("signin");
                        setIsMobileMenuOpen(false);
                      }}
                      className="liquid-glass rounded-[8px] px-5 py-4 text-white font-manrope font-semibold text-lg w-full hover:bg-white/10"
                    >
                      Sign In
                    </button>
                    <button 
                      onClick={() => {
                        openAuthModal("signup");
                        setIsMobileMenuOpen(false);
                      }}
                      className="bg-white text-black rounded-[8px] px-5 py-4 font-manrope font-semibold text-lg w-full hover:bg-white/90"
                    >
                      Get Started
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AuthModal />
    </>
  );
}

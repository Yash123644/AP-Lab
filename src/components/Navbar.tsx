"use client";

import { useState, useEffect } from "react";
import { Menu, X, Activity, Globe, Users, Mail, LayoutDashboard, LogIn } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { useUI } from "@/context/UIContext";
import { cn } from "@/lib/utils";

interface NavLinkItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
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

  const navLinks: NavLinkItem[] = [
    { name: "Impact", href: "/community-impact", icon: Globe },
    { name: "Join", href: "/join", icon: Users },
    { name: "Contact Us", href: "/contact", icon: Mail },
  ];

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-[120px] transition-all duration-300 flex items-center justify-between",
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl border-b border-black/10 py-3 shadow-md text-black" 
          : "bg-white/90 backdrop-blur-md border-b border-black/5 py-4 text-black"
      )}>
        {/* Left Container: Logo */}
        <div className="flex-1 flex justify-start">
          <Link 
            href="/" 
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:text-black/70 transition-colors" />
            <span className="font-manrope font-bold text-black tracking-tight text-base sm:text-lg">AP Lab</span>
          </Link>
        </div>

        {/* Center Container: Desktop Navigation Links with Hover & Active Icons */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const isHovered = hoveredHref === link.href;
            const showIcon = isActive || isHovered;
            const Icon = link.icon;

            return (
              <Link 
                key={link.href}
                href={link.href} 
                onMouseEnter={() => setHoveredHref(link.href)}
                onMouseLeave={() => setHoveredHref(null)}
                className={cn(
                  "relative font-manrope font-semibold text-[13px] tracking-wide transition-all duration-200 flex items-center px-3.5 py-1.5 rounded-full select-none",
                  isActive ? "text-black bg-black/5 font-bold" : "text-neutral-700 hover:text-black hover:bg-black/5"
                )}
              >
                <AnimatePresence initial={false}>
                  {showIcon && (
                    <motion.span
                      initial={{ opacity: 0, width: 0, marginRight: 0 }}
                      animate={{ opacity: 1, width: "auto", marginRight: 6 }}
                      exit={{ opacity: 0, width: 0, marginRight: 0 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="inline-flex items-center shrink-0 overflow-hidden"
                    >
                      <Icon className="w-3.5 h-3.5 text-black shrink-0" />
                    </motion.span>
                  )}
                </AnimatePresence>
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Right Container: Action Button (Dashboard / Sign In) */}
        <div className="flex-1 flex justify-end items-center">
          <div className="hidden md:flex items-center space-x-6">
            {currentUser ? (
              <Link 
                href="/dashboard"
                onMouseEnter={() => setHoveredHref("/dashboard")}
                onMouseLeave={() => setHoveredHref(null)}
              >
                <button className={cn(
                  "font-manrope font-semibold text-[13px] transition-all duration-200 flex items-center px-5 py-2.5 rounded-full bg-black text-white hover:bg-black/85 shadow-sm active:scale-95",
                  (pathname === "/dashboard" || hoveredHref === "/dashboard") && "ring-2 ring-black/20"
                )}>
                  <AnimatePresence initial={false}>
                    {(pathname === "/dashboard" || hoveredHref === "/dashboard") && (
                      <motion.span
                        initial={{ opacity: 0, width: 0, marginRight: 0 }}
                        animate={{ opacity: 1, width: "auto", marginRight: 6 }}
                        exit={{ opacity: 0, width: 0, marginRight: 0 }}
                        transition={{ duration: 0.18 }}
                        className="inline-flex items-center shrink-0 overflow-hidden"
                      >
                        <LayoutDashboard className="w-3.5 h-3.5 text-white shrink-0" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <span>Dashboard</span>
                </button>
              </Link>
            ) : (
              <button
                onClick={() => openAuthModal("signin")}
                onMouseEnter={() => setHoveredHref("signin")}
                onMouseLeave={() => setHoveredHref(null)}
                className="font-manrope font-semibold text-[13px] transition-all duration-200 flex items-center px-5 py-2.5 rounded-full bg-black text-white hover:bg-black/85 shadow-sm active:scale-95"
              >
                <AnimatePresence initial={false}>
                  {hoveredHref === "signin" && (
                    <motion.span
                      initial={{ opacity: 0, width: 0, marginRight: 0 }}
                      animate={{ opacity: 1, width: "auto", marginRight: 6 }}
                      exit={{ opacity: 0, width: 0, marginRight: 0 }}
                      transition={{ duration: 0.18 }}
                      className="inline-flex items-center shrink-0 overflow-hidden"
                    >
                      <LogIn className="w-3.5 h-3.5 text-white shrink-0" />
                    </motion.span>
                  )}
                </AnimatePresence>
                <span>Sign In</span>
              </button>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="md:hidden text-black p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white text-black flex flex-col p-6"
          >
            <div className="flex justify-between items-center pb-4 border-b border-black/10">
              <div className="flex items-center space-x-2">
                <Activity className="w-6 h-6 text-black" />
                <span className="font-manrope font-bold text-lg text-black">AP Lab</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-black p-2">
                <X className="w-7 h-7" />
              </button>
            </div>
            <div className="flex flex-col space-y-6 mt-8 items-start">
              <Link 
                href="/" 
                className="font-manrope font-semibold text-xl text-black flex items-center space-x-3" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Home</span>
              </Link>
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className="font-manrope font-semibold text-xl text-neutral-800 flex items-center space-x-3" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5 text-black" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
              {currentUser ? (
                <Link 
                  href="/dashboard"
                  className="font-manrope font-semibold text-xl text-black flex items-center space-x-3 pt-4 border-t border-black/10 w-full" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <LayoutDashboard className="w-5 h-5 text-black" />
                  <span>Dashboard</span>
                </Link>
              ) : (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openAuthModal("signin");
                  }}
                  className="font-manrope font-semibold text-xl text-black flex items-center space-x-3 pt-4 border-t border-black/10 w-full text-left"
                >
                  <LogIn className="w-5 h-5 text-black" />
                  <span>Sign In</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

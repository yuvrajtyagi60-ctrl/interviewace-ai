"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Brain, Mic, FileText, Code2, Menu, X, User, LogIn, LayoutDashboard } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "AI Assistant", href: "/assistant" },
    { name: "Voice Interview", href: "/voice-interview" },
    { name: "Mock Interview", href: "/mock-interview" },
    { name: "Resume Analyzer", href: "/resume-analyzer" },
    { name: "Coding Practice", href: "/coding" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Pricing", href: "/#pricing" },
  ];

  const isAppPage = pathname !== "/" && pathname !== "/login" && pathname !== "/signup";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isAppPage
          ? "bg-[#090d16]/80 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-sky-500 to-emerald-400 p-0.5 shadow-glow group-hover:scale-105 transition-transform duration-300">
            <div className="h-full w-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
              <Brain className="h-5 w-5 text-indigo-400 group-hover:text-sky-400 transition-colors" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight text-white flex items-center gap-1.5">
              InterviewAce <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">AI</span>
            </span>
            <span className="text-[10px] text-slate-400 -mt-1 font-medium tracking-wider">PRACTICE. IMPROVE. GET HIRED.</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                pathname === link.href
                  ? "bg-indigo-600/30 text-indigo-300 border border-indigo-500/30"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <LayoutDashboard className="h-4 w-4 text-indigo-400" />
            Dashboard
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all"
          >
            <LogIn className="h-3.5 w-3.5" />
            Login
          </Link>
          <Link
            href="/signup"
            className="flex items-center gap-2 text-xs font-semibold text-white px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 shadow-glow transition-all duration-300 hover:scale-[1.02]"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            Start Free
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0c1220] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 mt-3 animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5 rounded-lg"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="/dashboard"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-sm font-medium text-slate-200 py-2.5 rounded-lg bg-white/5 border border-white/10"
            >
              <LayoutDashboard className="h-4 w-4 text-indigo-400" />
              Go to Dashboard
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-sm font-semibold text-white py-2.5 rounded-lg bg-indigo-600"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

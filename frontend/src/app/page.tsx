"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Sparkles,
  Bot,
  Mic,
  FileSearch,
  Code2,
  Building2,
  BarChart3,
  Brain,
  ShieldCheck,
  Zap,
  Target,
  Volume2,
  Activity,
  CheckCircle2,
  Play,
  ArrowRight,
  ChevronRight,
  Award,
  Star,
  Users,
} from "lucide-react";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<"technical" | "voice" | "resume" | "coding">("technical");

  const featureCards = [
    {
      icon: Bot,
      title: "AI Interview Assistant",
      desc: "ChatGPT-like conversational AI trained on DSA, OS, DBMS, Networks, System Design, and Behavioral topics.",
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      badge: "ChatGPT-like",
    },
    {
      icon: Mic,
      title: "Voice-to-Voice Interview",
      desc: "Speak directly with an AI Recruiter avatar in real-time with automatic speech recognition and speech output.",
      color: "text-sky-400",
      bg: "bg-sky-500/10",
      badge: "Real-time Voice",
    },
    {
      icon: FileSearch,
      title: "Resume Analyzer",
      desc: "Upload PDF resume to extract skills, project details, ATS match score, and generate custom targeted questions.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      badge: "PDF Upload",
    },
    {
      icon: Code2,
      title: "Coding Interview IDE",
      desc: "Integrated Monaco code editor supporting Python, Java, C++, JS with automated test cases & complexity analysis.",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      badge: "Monaco IDE",
    },
    {
      icon: Building2,
      title: "Company-wise Questions",
      desc: "Curated technical & HR questions asked in Google, Amazon, Microsoft, Infosys, TCS, Wipro, and Accenture.",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      badge: "Tier 1 & Service",
    },
    {
      icon: BarChart3,
      title: "Progress Dashboard",
      desc: "Track skill radars, learning streaks, daily interview goals, and weak topic analytics over time.",
      color: "text-rose-400",
      bg: "bg-rose-500/10",
      badge: "Analytics",
    },
    {
      icon: Brain,
      title: "AI Feedback Engine",
      desc: "Receive immediate scores for Technical Accuracy, Communication, Confidence, and STAR framework adherence.",
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      badge: "Comprehensive",
    },
    {
      icon: Target,
      title: "Gap Analysis",
      desc: "AI pinpoints missing technical concepts and generates a 4-week tailored step-by-step study roadmap.",
      color: "text-teal-400",
      bg: "bg-teal-500/10",
      badge: "Personalized",
    },
    {
      icon: Star,
      title: "STAR Evaluation",
      desc: "Instant breakdown checking if your behavioral answers hit Situation, Task, Action, and Result markers.",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      badge: "HR Framework",
    },
    {
      icon: Volume2,
      title: "Speech Analysis",
      desc: "Measures Words Per Minute (WPM), hesitation pauses, filler words ('um', 'like'), and fluency rates.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      badge: "Audio Intelligence",
    },
    {
      icon: Activity,
      title: "Tone Detection",
      desc: "Acoustic & semantic tone mapping for Professionalism, Positivity, Stress Index, and Speaker Confidence.",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      badge: "Tone Sensor",
    },
    {
      icon: Award,
      title: "Personalized Study Plan",
      desc: "Dynamic daily task list tailored to target company interviews, weaknesses, and graduation deadlines.",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      badge: "Smart Plan",
    },
  ];

  const companies = ["Google", "Amazon", "Microsoft", "Infosys", "TCS", "Wipro", "Accenture"];

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col selection:bg-indigo-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-hero-glow">
        {/* Glow Effects background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Badge pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-8 animate-pulse">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>Next-Gen Placement Interview Preparation Platform</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.15]">
            Your Personal <span className="text-gradient">AI Interview Coach</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Prepare for Technical, HR, and Coding Interviews with AI-powered mock interviews, resume analysis, and real-time feedback.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-white font-bold text-sm shadow-glow transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2.5"
            >
              <Sparkles className="h-4 w-4 text-amber-300" />
              Start Free
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/assistant"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Bot className="h-4 w-4 text-indigo-400" />
              Try AI Assistant
            </Link>

            <Link
              href="/voice-interview"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-900/50 font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Play className="h-4 w-4 fill-indigo-400 text-indigo-400" />
              Watch Demo
            </Link>
          </div>

          {/* Company Logos marquee bar */}
          <div className="mt-16 pt-10 border-t border-white/5 max-w-4xl mx-auto">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Cracking placements at top product & service companies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-300 font-bold text-sm sm:text-base">
              {companies.map((c) => (
                <div
                  key={c}
                  className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all cursor-pointer flex items-center gap-2"
                >
                  <Building2 className="h-4 w-4 text-indigo-400" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Demo Preview Frame */}
          <div className="mt-16 max-w-5xl mx-auto glass-panel rounded-2xl p-4 sm:p-6 border border-white/15 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-rose-500"></div>
                <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                <span className="ml-2 font-mono text-slate-400 text-[11px]">interviewace-ai // interactive-demo</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab("technical")}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                    activeTab === "technical" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Technical AI
                </button>
                <button
                  onClick={() => setActiveTab("voice")}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                    activeTab === "voice" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Voice Mode
                </button>
                <button
                  onClick={() => setActiveTab("resume")}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                    activeTab === "resume" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Resume ATS
                </button>
                <button
                  onClick={() => setActiveTab("coding")}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                    activeTab === "coding" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Monaco IDE
                </button>
              </div>
            </div>

            {/* Interactive Preview Content */}
            <div className="bg-[#0b101d] rounded-xl p-5 text-left font-sans space-y-4 border border-white/5">
              {activeTab === "technical" && (
                <div className="space-y-3 animate-in fade-in">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center shrink-0">
                      <Bot className="h-4 w-4 text-indigo-400" />
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 text-xs text-slate-200 max-w-xl border border-white/5">
                      <span className="font-semibold text-indigo-300 block mb-1">Interviewer (Google Mock):</span>
                      Can you explain how a Hash Table handles collisions, and what is the difference between Chaining and Open Addressing?
                    </div>
                  </div>
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-indigo-600/20 rounded-xl p-3 text-xs text-slate-200 max-w-xl border border-indigo-500/30">
                      <span className="font-semibold text-sky-300 block mb-1 font-sans">You:</span>
                      Chaining uses a linked list at each bucket array index. Open addressing searches for an empty slot using linear or quadratic probing...
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-300">
                    <span className="flex items-center gap-2 font-semibold">
                      <CheckCircle2 className="h-4 w-4" /> AI STAR Evaluation: 92/100
                    </span>
                    <span className="text-[11px] bg-emerald-500/20 px-2 py-0.5 rounded font-mono">Time Complexity O(1) mentioned</span>
                  </div>
                </div>
              )}

              {activeTab === "voice" && (
                <div className="space-y-4 animate-in fade-in text-center py-6">
                  <div className="flex justify-center items-center gap-1.5 h-12">
                    <div className="w-1.5 bg-indigo-500 h-4 animate-wave rounded-full"></div>
                    <div className="w-1.5 bg-sky-400 h-10 animate-wave rounded-full [animation-delay:0.2s]"></div>
                    <div className="w-1.5 bg-emerald-400 h-8 animate-wave rounded-full [animation-delay:0.4s]"></div>
                    <div className="w-1.5 bg-amber-400 h-12 animate-wave rounded-full [animation-delay:0.1s]"></div>
                    <div className="w-1.5 bg-indigo-500 h-6 animate-wave rounded-full [animation-delay:0.3s]"></div>
                  </div>
                  <p className="text-xs text-slate-300 font-medium">Listening... Speaking Pace: <span className="text-emerald-400 font-bold">138 WPM (Optimal)</span></p>
                </div>
              )}

              {activeTab === "resume" && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs animate-in fade-in">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-400 block text-[11px]">ATS Score</span>
                    <span className="text-xl font-bold text-emerald-400">89%</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-400 block text-[11px]">Parsed Skills</span>
                    <span className="font-semibold text-slate-200">React, Node.js, Python, PostgreSQL, AWS</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-400 block text-[11px]">Target Questions</span>
                    <span className="font-semibold text-indigo-300">5 Custom Questions Generated</span>
                  </div>
                </div>
              )}

              {activeTab === "coding" && (
                <div className="font-mono text-xs text-slate-300 bg-slate-950 p-3 rounded-xl space-y-1 animate-in fade-in">
                  <div className="text-indigo-400">def twoSum(nums: List[int], target: int) -&gt; List[int]:</div>
                  <div className="pl-4 text-slate-400">seen = &#123;&#125;</div>
                  <div className="pl-4 text-slate-400">for i, num in enumerate(nums):</div>
                  <div className="pl-8 text-emerald-400">if target - num in seen: return [seen[target - num], i]</div>
                  <div className="pl-8 text-slate-400">seen[num] = i</div>
                  <div className="mt-2 text-emerald-400 font-bold">✓ Test Cases Passed (3/3) - 42ms (Beats 96%)</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section id="features" className="py-24 bg-[#070b13] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">
              Comprehensive Interview Suite
            </h2>
            <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Everything You Need to Ace Your Placement Interviews
            </p>
            <p className="mt-4 text-sm sm:text-base text-slate-400">
              Designed specifically for engineering and CS undergraduates aiming for top tier product and service software roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl ${f.bg} border border-white/10`}>
                        <Icon className={`h-6 w-6 ${f.color}`} />
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                        {f.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">{f.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                    <span>Explore Feature</span>
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[#090d16] relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">
              Simple Transparent Pricing
            </h2>
            <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Invest in Your Placement Career
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Start with free tier. Upgrade for unlimited voice interviews and resume ATS scans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free */}
            <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between border-white/10">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase">Starter</span>
                <h3 className="text-3xl font-extrabold text-white mt-2">$0 <span className="text-xs text-slate-400 font-normal">/ forever</span></h3>
                <p className="text-xs text-slate-400 mt-2">Perfect for exploring interview questions.</p>
                <ul className="mt-6 space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-400 shrink-0" /> 5 AI Assistant Questions / day</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-400 shrink-0" /> 1 Mock Technical Interview</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-400 shrink-0" /> Basic Resume Parser</li>
                </ul>
              </div>
              <Link href="/signup" className="mt-8 btn-secondary text-center block text-xs">
                Get Started Free
              </Link>
            </div>

            {/* Pro Student (Featured) */}
            <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between border-indigo-500/50 shadow-glow relative bg-indigo-950/20">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-sky-400 text-white text-[10px] font-bold uppercase">
                Most Popular
              </div>
              <div>
                <span className="text-xs font-bold text-indigo-300 uppercase">Pro Student</span>
                <h3 className="text-3xl font-extrabold text-white mt-2">$12 <span className="text-xs text-slate-400 font-normal">/ month</span></h3>
                <p className="text-xs text-slate-400 mt-2">Full placement interview preparation toolkit.</p>
                <ul className="mt-6 space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> Unlimited AI Assistant & Code IDE</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> Unlimited Voice-to-Voice Interviews</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> Full STAR & Tone Analysis</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> PDF Resume ATS Breakdown</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> 4-Week Tailored Study Roadmap</li>
                </ul>
              </div>
              <Link href="/signup" className="mt-8 btn-primary text-center block text-xs">
                Start Pro 7-Day Trial
              </Link>
            </div>

            {/* Campus / College License */}
            <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between border-white/10">
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase">College Batch</span>
                <h3 className="text-3xl font-extrabold text-white mt-2">Custom</h3>
                <p className="text-xs text-slate-400 mt-2">For TPO placement cells & colleges.</p>
                <ul className="mt-6 space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" /> Bulk Student Accounts</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" /> Placement Cell Admin Dashboard</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" /> Batch Performance Analytics</li>
                </ul>
              </div>
              <Link href="/signup" className="mt-8 btn-secondary text-center block text-xs">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

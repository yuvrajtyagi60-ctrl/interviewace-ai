"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import {
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Volume2,
  Activity,
  Award,
  Star,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function FeedbackPage() {
  const [collapsed, setCollapsed] = useState(false);

  const scores = [
    { label: "Overall Rating", score: 88, color: "text-emerald-400", bg: "bg-emerald-500/20" },
    { label: "Technical Accuracy", score: 92, color: "text-indigo-400", bg: "bg-indigo-500/20" },
    { label: "Communication Rate", score: 85, color: "text-sky-400", bg: "bg-sky-500/20" },
    { label: "Confidence Tone", score: 89, color: "text-purple-400", bg: "bg-purple-500/20" },
    { label: "STAR Method", score: 84, color: "text-amber-400", bg: "bg-amber-500/20" },
    { label: "Coding IDE Score", score: 95, color: "text-teal-400", bg: "bg-teal-500/20" },
  ];

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col">
      <Navbar />

      <div className="flex flex-1 pt-[65px]">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

        <main
          className={`flex-1 p-4 sm:p-6 lg:p-8 transition-all duration-300 ${
            collapsed ? "ml-20" : "ml-64"
          }`}
        >
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Header */}
            <div className="glass-panel p-6 rounded-2xl border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
                  <BarChart3 className="h-6 w-6 text-indigo-400" />
                  AI Mock Interview Performance Scorecard
                </h1>
                <p className="text-xs text-slate-400">
                  Comprehensive multi-dimensional evaluation report from your recent interview simulation.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" /> Placement Ready (88%)
                </span>
              </div>
            </div>

            {/* Scorecard Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {scores.map((s) => (
                <div key={s.label} className="glass-panel p-4 rounded-xl border-white/10 text-center space-y-2">
                  <span className="text-[10px] text-slate-400 block font-semibold uppercase">{s.label}</span>
                  <span className={`text-2xl sm:text-3xl font-extrabold ${s.color}`}>{s.score}</span>
                  <span className="text-[10px] text-slate-400 block">/ 100</span>
                </div>
              ))}
            </div>

            {/* Strengths & Weaknesses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Strengths */}
              <div className="glass-panel p-6 rounded-2xl border-emerald-500/30 bg-emerald-950/10 space-y-4">
                <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Key Strengths
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                    <span><strong>Technical Precision:</strong> Stated edge cases and Floyd's cycle detection logic accurately.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                    <span><strong>Optimal Code:</strong> Written Two Sum solution achieved O(N) linear time complexity with single pass.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                    <span><strong>Speech Tempo:</strong> Maintained an optimal pace of 138 WPM with steady cadence.</span>
                  </li>
                </ul>
              </div>

              {/* Weaknesses */}
              <div className="glass-panel p-6 rounded-2xl border-amber-500/30 bg-amber-950/10 space-y-4">
                <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" /> Areas for Improvement
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                    <span><strong>Quantified Results:</strong> Add specific percentage metrics to your STAR Result section.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                    <span><strong>Filler Reduction:</strong> Reduce filler words like "um" and "basically" during pauses.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Speech & Tone Detailed Sensor */}
            <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-4">
              <h3 className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-2">
                <Activity className="h-4 w-4 text-sky-400" /> Speech & Tone Sensor Breakdown
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-400 block text-[10px]">Speaking Pace</span>
                  <span className="text-sm font-bold text-sky-400">138 WPM (Optimal)</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-400 block text-[10px]">Filler Words Count</span>
                  <span className="text-sm font-bold text-amber-400">2 ("um", "basically")</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-400 block text-[10px]">Stress Index</span>
                  <span className="text-sm font-bold text-emerald-400">18% (Low Stress)</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-400 block text-[10px]">Professionalism</span>
                  <span className="text-sm font-bold text-purple-400">92 / 100</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

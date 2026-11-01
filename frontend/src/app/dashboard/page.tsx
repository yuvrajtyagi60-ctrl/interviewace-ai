"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import {
  Sparkles,
  Flame,
  Target,
  Trophy,
  Mic,
  Bot,
  FileSearch,
  Code2,
  Brain,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowUpRight,
  TrendingUp,
  BarChart3,
  Building2,
  Calendar,
} from "lucide-react";

export default function DashboardPage() {
  const [collapsed, setCollapsed] = useState(false);

  const recentInterviews = [
    {
      id: 1,
      type: "Technical - DSA & System Design",
      company: "Google",
      score: 92,
      date: "Today, 2:15 PM",
      status: "Completed",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    },
    {
      id: 2,
      type: "HR & STAR Behavioral",
      company: "Amazon",
      score: 86,
      date: "Yesterday",
      status: "Completed",
      badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    },
    {
      id: 3,
      type: "Monaco Coding Round",
      company: "Microsoft",
      score: 95,
      date: "Aug 02, 2026",
      status: "Completed",
      badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/30",
    },
    {
      id: 4,
      type: "Service Tech Round",
      company: "TCS / Infosys",
      score: 78,
      date: "Jul 30, 2026",
      status: "Needs Improvement",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    },
  ];

  const skillMetrics = [
    { label: "Technical DSA", value: 92, color: "bg-indigo-500" },
    { label: "Communication", value: 85, color: "bg-sky-400" },
    { label: "Confidence & Tone", value: 88, color: "bg-emerald-400" },
    { label: "STAR Framework", value: 84, color: "bg-amber-400" },
    { label: "Monaco Code Execution", value: 95, color: "bg-purple-400" },
    { label: "System Design", value: 76, color: "bg-rose-400" },
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
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-panel p-6 rounded-2xl border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="space-y-1 relative z-10">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Welcome back, Yuvraj!</h1>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Placement Season Ready
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Target Role: <span className="text-slate-200 font-semibold">Software Development Engineer (SDE-1)</span> • Target Companies: <span className="text-indigo-300 font-semibold">Google, Amazon, Microsoft</span>
                </p>
              </div>

              {/* Learning streak and goal counters */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl">
                  <Flame className="h-5 w-5 text-amber-400 fill-amber-400 animate-pulse" />
                  <div>
                    <span className="text-xs font-bold text-white block">7 Day Streak</span>
                    <span className="text-[10px] text-slate-400">Daily practice streak</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 bg-indigo-600/20 border border-indigo-500/30 px-4 py-2.5 rounded-xl">
                  <Trophy className="h-5 w-5 text-amber-300" />
                  <div>
                    <span className="text-xs font-bold text-indigo-300 block">Rank #14</span>
                    <span className="text-[10px] text-slate-400">College Leaderboard</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Link
                href="/voice-interview"
                className="glass-panel glass-panel-hover p-4 rounded-xl flex items-center gap-3 border-indigo-500/30 group"
              >
                <div className="p-3 rounded-lg bg-sky-500/20 text-sky-400 group-hover:scale-110 transition-transform">
                  <Mic className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Voice Interview</h4>
                  <p className="text-[10px] text-slate-400">Talk to AI Recruiter</p>
                </div>
              </Link>

              <Link
                href="/mock-interview"
                className="glass-panel glass-panel-hover p-4 rounded-xl flex items-center gap-3 border-indigo-500/30 group"
              >
                <div className="p-3 rounded-lg bg-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform">
                  <Brain className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Mock Interview</h4>
                  <p className="text-[10px] text-slate-400">Google / Amazon round</p>
                </div>
              </Link>

              <Link
                href="/resume-analyzer"
                className="glass-panel glass-panel-hover p-4 rounded-xl flex items-center gap-3 border-indigo-500/30 group"
              >
                <div className="p-3 rounded-lg bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                  <FileSearch className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Resume ATS</h4>
                  <p className="text-[10px] text-slate-400">Scan & generate Qs</p>
                </div>
              </Link>

              <Link
                href="/coding"
                className="glass-panel glass-panel-hover p-4 rounded-xl flex items-center gap-3 border-indigo-500/30 group"
              >
                <div className="p-3 rounded-lg bg-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Monaco IDE</h4>
                  <p className="text-[10px] text-slate-400">DSA coding practice</p>
                </div>
              </Link>
            </div>

            {/* Metrics Overview Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Overall Score & Radar Breakdown */}
              <div className="lg:col-span-2 glass-panel p-6 rounded-2xl border-white/10 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-indigo-400" />
                      Interview Skill Readiness Index
                    </h3>
                    <p className="text-xs text-slate-400">Multi-dimensional evaluation across 6 key placement metrics.</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-extrabold text-gradient">88%</span>
                    <span className="text-[10px] text-emerald-400 block font-semibold">+6% vs last week</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {skillMetrics.map((sm) => (
                    <div key={sm.label} className="space-y-1">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-slate-300">{sm.label}</span>
                        <span className="text-slate-200 font-bold">{sm.value}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                        <div
                          className={`h-full ${sm.color} rounded-full transition-all duration-500`}
                          style={{ width: `${sm.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weak Topics & Recommended Actions */}
              <div className="space-y-6">
                {/* Resume Status Card */}
                <div className="glass-panel p-5 rounded-2xl border-emerald-500/30 bg-emerald-950/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                      <FileSearch className="h-4 w-4" /> Resume Status
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                      ATS Verified
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-extrabold text-white">89%</span>
                    <p className="text-xs text-slate-300">High match for SDE-1 roles. 14 core tech keywords parsed.</p>
                  </div>
                </div>

                {/* Weak Topics Box */}
                <div className="glass-panel p-5 rounded-2xl border-amber-500/30 bg-amber-950/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                    <AlertCircle className="h-4 w-4" /> Focus Areas Identified by AI
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center justify-between bg-white/5 p-2 rounded-lg">
                      <span>Dynamic Programming (DP)</span>
                      <span className="text-amber-400 font-bold">Score 68%</span>
                    </li>
                    <li className="flex items-center justify-between bg-white/5 p-2 rounded-lg">
                      <span>Redundant Filler Words in HR</span>
                      <span className="text-amber-400 font-bold">4.2 / min</span>
                    </li>
                  </ul>
                  <Link
                    href="/roadmap"
                    className="text-xs font-semibold text-amber-300 hover:underline flex items-center gap-1 pt-1"
                  >
                    View Personalized 4-Week Study Plan <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Recent Interviews Table */}
            <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white">Recent Mock Interviews</h3>
                  <p className="text-xs text-slate-400">Detailed feedback breakdown and transcripts.</p>
                </div>
                <Link href="/feedback" className="text-xs text-indigo-400 font-semibold hover:underline">
                  View Full Analytics
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-white/5 text-slate-400 uppercase text-[10px] tracking-wider border-b border-white/10">
                    <tr>
                      <th className="py-3 px-4">Interview Type</th>
                      <th className="py-3 px-4">Target Company</th>
                      <th className="py-3 px-4">AI Score</th>
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {recentInterviews.map((item) => (
                      <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-white">{item.type}</td>
                        <td className="py-3.5 px-4">
                          <span className="flex items-center gap-1.5">
                            <Building2 className="h-3.5 w-3.5 text-indigo-400" />
                            {item.company}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold border ${item.badgeColor}`}>
                            {item.score} / 100
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-400">{item.date}</td>
                        <td className="py-3.5 px-4 text-right">
                          <Link
                            href="/feedback"
                            className="text-indigo-400 hover:text-indigo-300 font-semibold hover:underline"
                          >
                            Review Feedback →
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

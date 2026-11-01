"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import {
  User,
  Award,
  Trophy,
  FileText,
  Building2,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export default function ProfilePage() {
  const [collapsed, setCollapsed] = useState(false);

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
          <div className="max-w-5xl mx-auto space-y-6">
            {/* User Profile Card */}
            <div className="glass-panel p-8 rounded-2xl border-white/10 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden">
              <div className="h-24 w-24 rounded-2xl bg-gradient-to-tr from-indigo-600 via-sky-400 to-emerald-400 p-1 shadow-glow shrink-0">
                <div className="h-full w-full bg-[#0b101d] rounded-[14px] flex items-center justify-center font-extrabold text-white text-2xl">
                  YT
                </div>
              </div>

              <div className="space-y-1 text-center sm:text-left flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <h1 className="text-2xl font-extrabold text-white">Yuvraj Tyagi</h1>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold w-fit mx-auto sm:mx-0">
                    SDE-1 Candidate
                  </span>
                </div>
                <p className="text-xs text-slate-400">Computer Science & Engineering • Class of 2026</p>
                <p className="text-xs text-indigo-300">yuvraj.student@interviewace.ai</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Leaderboard Rank</span>
                <span className="text-2xl font-extrabold text-amber-300 flex items-center justify-center gap-1">
                  <Trophy className="h-5 w-5" /> #14
                </span>
                <span className="text-[10px] text-emerald-400 block font-semibold">Top 3% in Campus</span>
              </div>
            </div>

            {/* Achievements & Certificates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-4">
                <h3 className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-2">
                  <Award className="h-4 w-4 text-amber-300" /> Platform Badges & Certifications
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white block">Google SDE Technical Certified</span>
                      <span className="text-[10px] text-slate-400">Scored 92/100 on Mock Technical Round</span>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white block">STAR Framework Master</span>
                      <span className="text-[10px] text-slate-400">Completed 10 HR Behavioral Simulations</span>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  </div>
                </div>
              </div>

              {/* Active Resume */}
              <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-4">
                <h3 className="text-xs font-bold text-sky-300 uppercase tracking-wider flex items-center gap-2">
                  <FileText className="h-4 w-4" /> Active Resume File
                </h3>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-white block">Yuvraj_Tyagi_SDE_Resume.pdf</span>
                    <span className="text-[10px] text-slate-400">Uploaded today • ATS Score 89%</span>
                  </div>
                  <button className="text-indigo-400 hover:underline font-semibold text-xs flex items-center gap-1">
                    View <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

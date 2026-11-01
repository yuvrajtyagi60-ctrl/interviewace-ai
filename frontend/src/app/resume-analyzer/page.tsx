"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import {
  FileSearch,
  UploadCloud,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Award,
  Layers,
  ArrowRight,
  Code2,
} from "lucide-react";

export default function ResumeAnalyzerPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [isUploaded, setIsUploaded] = useState(true);
  const [fileName, setFileName] = useState("Yuvraj_Tyagi_SDE_Resume.pdf");

  const parsedSkills = ["React", "Next.js", "Node.js", "Python", "FastAPI", "PostgreSQL", "Data Structures", "Docker", "AWS"];
  const parsedProjects = [
    "AI InterviewAce Platform - Next.js & FastAPI monorepo with Monaco IDE and Voice synthesis",
    "Distributed Key-Value Store - Raft consensus protocol in Python",
  ];

  const generatedQuestions = [
    {
      q: "In your project 'AI InterviewAce Platform', how did you handle state management between the Monaco Editor and code execution backend?",
      category: "Project Deep Dive",
    },
    {
      q: "You listed PostgreSQL on your resume. How do you optimize slow query execution plans using EXPLAIN ANALYZE?",
      category: "Database Tech",
    },
    {
      q: "Explain how FastAPI async def path operations differ from standard sync def endpoints in Python.",
      category: "Backend Framework",
    },
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
                  <FileSearch className="h-6 w-6 text-emerald-400" />
                  AI Resume Analyzer & Question Generator
                </h1>
                <p className="text-xs text-slate-400">
                  Upload your resume PDF to extract key technical skills, projects, ATS match rate, and targeted questions.
                </p>
              </div>

              {isUploaded && (
                <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 px-3.5 py-1.5 rounded-xl text-emerald-300 text-xs font-bold">
                  <CheckCircle2 className="h-4 w-4" /> ATS Match: 89%
                </div>
              )}
            </div>

            {/* Upload Zone */}
            <div className="glass-panel p-8 rounded-2xl border-dashed border-2 border-white/20 hover:border-indigo-500/50 text-center transition-all cursor-pointer space-y-3 bg-white/[0.01]">
              <div className="h-14 w-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 mx-auto flex items-center justify-center text-indigo-400">
                <UploadCloud className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Drag & drop your Resume PDF here</h3>
                <p className="text-xs text-slate-400 mt-1">Supports PDF format up to 10MB</p>
              </div>
              <div className="pt-2">
                <span className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white inline-block">
                  Browse File
                </span>
              </div>
            </div>

            {/* Resume Breakdown & Generated Questions */}
            {isUploaded && (
              <div className="space-y-6">
                {/* Extracted Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Skills */}
                  <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-3">
                    <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Code2 className="h-4 w-4" /> Parsed Tech Stack ({parsedSkills.length})
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {parsedSkills.map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-200">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="md:col-span-2 glass-panel p-6 rounded-2xl border-white/10 space-y-3">
                    <h4 className="text-xs font-bold text-sky-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="h-4 w-4" /> Extracted Projects
                    </h4>
                    <div className="space-y-2 text-xs">
                      {parsedProjects.map((p, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                          {p}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* AI Tailored Questions */}
                <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-amber-400" />
                      AI Questions Generated Specifically for Your Resume
                    </h3>
                    <span className="text-xs text-indigo-300 font-semibold">3 Custom Questions</span>
                  </div>

                  <div className="space-y-3">
                    {generatedQuestions.map((q, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 hover:border-indigo-500/30 transition-all">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                            {q.category}
                          </span>
                          <span className="text-[10px] text-slate-400">High Recruiter Probability</span>
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-white">{q.q}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

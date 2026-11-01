"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { evaluateSTARAnswer } from "@/lib/aiEngine";
import {
  BrainCircuit,
  Building2,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Send,
  RefreshCw,
  Star,
  Award,
  Layers,
} from "lucide-react";

export default function MockInterviewPage() {
  const [collapsed, setCollapsed] = useState(false);

  // Setup options
  const [interviewType, setInterviewType] = useState<"Technical" | "HR" | "Behavioral" | "Coding">("Technical");
  const [company, setCompany] = useState("Google");
  const [difficulty, setDifficulty] = useState<"Easy" | "Medium" | "Hard">("Medium");

  // State
  const [isGenerated, setIsGenerated] = useState(true);
  const [userAnswer, setUserAnswer] = useState("");
  const [evaluation, setEvaluation] = useState<ReturnType<typeof evaluateSTARAnswer> | null>(null);

  const sampleQuestions: Record<string, string[]> = {
    Google: [
      "Design a Rate Limiter microservice for an API gateway handling 100k requests/sec.",
      "How do you implement a Trie data structure for fast autocomplete in search engines?",
      "Tell me about a time you led a complex technical project under tight deadlines.",
    ],
    Amazon: [
      "Explain Amazon's Leadership Principle 'Bias for Action' with a personal coding project example.",
      "Given an array of integers representing stock prices, find maximum profit with at most 2 transactions.",
      "How would you handle a distributed transaction failure in DynamoDB?",
    ],
    Microsoft: [
      "How does C# / Java garbage collection work under the hood?",
      "Write a function to serialize and deserialize a Binary Tree.",
      "Explain the difference between Process and Thread context switching.",
    ],
    TCS: [
      "Explain Object Oriented Programming (OOP) concepts with real-world examples.",
      "What is the difference between Primary Key, Unique Key, and Foreign Key in DBMS?",
      "Write a Python script to reverse a string without using built-in methods.",
    ],
  };

  const currentQuestions = sampleQuestions[company] || sampleQuestions["Google"];
  const activeQuestion = currentQuestions[0];

  const handleEvaluate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAnswer.trim()) return;
    const result = evaluateSTARAnswer(userAnswer);
    setEvaluation(result);
  };

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
                  <BrainCircuit className="h-6 w-6 text-indigo-400" />
                  Dynamic Mock Interview Generator
                </h1>
                <p className="text-xs text-slate-400">
                  Select interview type, target company, and difficulty level for custom AI evaluation.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold">
                  {company} • {interviewType} • {difficulty}
                </span>
              </div>
            </div>

            {/* Selection Setup Bar */}
            <div className="glass-panel p-6 rounded-2xl border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Type */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Interview Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(["Technical", "HR", "Behavioral", "Coding"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setInterviewType(t)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all border ${
                        interviewType === t
                          ? "bg-indigo-600 border-indigo-500 text-white shadow-glow"
                          : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Target Company
                </label>
                <select
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-xl glass-input text-xs font-medium text-white"
                >
                  <option value="Google">Google</option>
                  <option value="Amazon">Amazon</option>
                  <option value="Microsoft">Microsoft</option>
                  <option value="Infosys">Infosys</option>
                  <option value="TCS">TCS / Tata Consultancy</option>
                  <option value="Wipro">Wipro</option>
                  <option value="Accenture">Accenture</option>
                </select>
              </div>

              {/* Difficulty */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Difficulty Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["Easy", "Medium", "Hard"] as const).map((d) => (
                    <button
                      key={d}
                      onClick={() => setDifficulty(d)}
                      className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all border ${
                        difficulty === d
                          ? "bg-sky-600 border-sky-500 text-white shadow-glow"
                          : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Generated Question Box */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4" /> AI Generated Interview Question
                </span>
                <span className="text-xs text-slate-400 font-mono">Q1 of 3</span>
              </div>

              <div className="text-base sm:text-lg font-semibold text-white leading-relaxed">
                "{activeQuestion}"
              </div>

              {/* Answer Input Form */}
              <form onSubmit={handleEvaluate} className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Type your response using the STAR Framework:</span>
                    <span className="text-indigo-300 font-mono text-[11px]">S = Situation | T = Task | A = Action | R = Result</span>
                  </div>
                  <textarea
                    rows={6}
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="During my semester capstone project, our system needed to handle... I implemented... As a result..."
                    className="w-full p-4 rounded-xl glass-input text-xs sm:text-sm resize-none focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setUserAnswer("In my final year capstone project, I noticed our API latency was over 3 seconds. My task was to optimize the database query execution time. I created compound indexes on high-frequency foreign keys and added Redis caching. As a result, latency dropped by 80% to 280ms.")}
                    className="text-xs text-indigo-400 font-semibold hover:underline"
                  >
                    Paste Sample STAR Answer
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-white font-bold text-xs shadow-glow flex items-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Submit Answer for AI Evaluation
                  </button>
                </div>
              </form>

              {/* Evaluation Results Card */}
              {evaluation && (
                <div className="mt-8 pt-6 border-t border-white/10 space-y-4 animate-in fade-in">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/40">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-indigo-600/30 flex items-center justify-center text-indigo-400 font-bold text-lg">
                        {evaluation.totalScore}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Overall STAR Framework Score</h4>
                        <p className="text-[11px] text-slate-300">{evaluation.feedback}</p>
                      </div>
                    </div>
                  </div>

                  {/* Breakdown pill grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[10px] text-slate-400 block uppercase">Situation</span>
                      <span className="text-sm font-bold text-emerald-400">{evaluation.breakdown.situation.score}/25</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[10px] text-slate-400 block uppercase">Task</span>
                      <span className="text-sm font-bold text-emerald-400">{evaluation.breakdown.task.score}/25</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[10px] text-slate-400 block uppercase">Action</span>
                      <span className="text-sm font-bold text-emerald-400">{evaluation.breakdown.action.score}/25</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[10px] text-slate-400 block uppercase">Result</span>
                      <span className="text-sm font-bold text-emerald-400">{evaluation.breakdown.result.score}/25</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

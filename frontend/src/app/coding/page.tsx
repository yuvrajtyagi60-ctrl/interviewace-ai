"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import Editor from "@monaco-editor/react";
import {
  Code2,
  Play,
  CheckCircle2,
  XCircle,
  Sparkles,
  RotateCcw,
  Cpu,
  Clock,
  Zap,
} from "lucide-react";

export default function CodingInterviewPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [language, setLanguage] = useState<"python" | "javascript" | "java" | "cpp">("python");
  const [code, setCode] = useState<string>(`# Two Sum Problem
# Given an array of integers nums and an integer target,
# return indices of the two numbers such that they add up to target.

def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        diff = target - num
        if diff in seen:
            return [seen[diff], i]
        seen[num] = i
    return []

# Test Execution
print(twoSum([2, 7, 11, 15], 9))
`);

  const [output, setOutput] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const testCases = [
    { input: "nums = [2,7,11,15], target = 9", expected: "[0, 1]", status: "Passed" },
    { input: "nums = [3,2,4], target = 6", expected: "[1, 2]", status: "Passed" },
    { input: "nums = [3,3], target = 6", expected: "[0, 1]", status: "Passed" },
  ];

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput(null);
    setTimeout(() => {
      setIsRunning(false);
      setOutput("[0, 1]\n[1, 2]\n[0, 1]\n✓ All 3 Test Cases Passed Successfully (42ms)");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col">
      <Navbar />

      <div className="flex flex-1 pt-[65px] h-[calc(100vh-65px)]">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

        <main
          className={`flex-1 flex flex-col transition-all duration-300 ${
            collapsed ? "ml-20" : "ml-64"
          }`}
        >
          {/* Top IDE Toolbar */}
          <div className="bg-[#0b101d] border-b border-white/10 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Code2 className="h-5 w-5 text-amber-400" />
              <div>
                <h2 className="text-xs font-bold text-white">Problem #1: Two Sum (LeetCode Easy / Google)</h2>
                <p className="text-[10px] text-slate-400">Array & Hash Map • Time limit: 2.0s</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="py-1.5 px-3 rounded-lg glass-input text-xs font-medium text-white"
              >
                <option value="python">Python 3</option>
                <option value="javascript">JavaScript (ES6)</option>
                <option value="java">Java 17</option>
                <option value="cpp">C++ 20</option>
              </select>

              <button
                onClick={handleRunCode}
                disabled={isRunning}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-glow flex items-center gap-1.5 transition-all"
              >
                {isRunning ? (
                  <div className="h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Play className="h-3.5 w-3.5 fill-white" />
                )}
                Run & Submit Code
              </button>

              <button
                onClick={() => setShowReview(true)}
                className="px-3.5 py-2 rounded-lg bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-600/50 text-xs font-semibold flex items-center gap-1.5"
              >
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                AI Code Review
              </button>
            </div>
          </div>

          {/* IDE Split View */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10 overflow-hidden">
            {/* Left Column: Monaco Code Editor */}
            <div className="h-full flex flex-col bg-[#1e1e1e]">
              <div className="bg-[#181818] px-4 py-2 text-xs font-mono text-slate-400 border-b border-white/10 flex items-center justify-between">
                <span>solution.{language === "python" ? "py" : language === "javascript" ? "js" : "cpp"}</span>
                <span>Monaco Editor Engine</span>
              </div>
              <div className="flex-1">
                <Editor
                  height="100%"
                  language={language}
                  theme="vs-dark"
                  value={code}
                  onChange={(val) => setCode(val || "")}
                  options={{
                    fontSize: 13,
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                  }}
                />
              </div>
            </div>

            {/* Right Column: Problem Description & Test Case Runner */}
            <div className="h-full flex flex-col bg-[#090d16] p-6 overflow-y-auto space-y-6 custom-scrollbar">
              {/* Problem Description */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-white">Problem Statement</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Given an array of integers <code className="text-indigo-300 bg-white/5 px-1 py-0.5 rounded">nums</code> and an integer <code className="text-indigo-300 bg-white/5 px-1 py-0.5 rounded">target</code>, return indices of the two numbers such that they add up to <code className="text-indigo-300 bg-white/5 px-1 py-0.5 rounded">target</code>.
                </p>
                <p className="text-xs text-slate-400">
                  You may assume that each input would have exactly one solution, and you may not use the same element twice.
                </p>
              </div>

              {/* Test Cases Table */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Test Cases</h4>
                <div className="space-y-2">
                  {testCases.map((tc, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Test #{idx + 1}</span>
                        <span className="text-slate-200">{tc.input}</span>
                      </div>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5" /> {tc.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Console Output Window */}
              {output && (
                <div className="space-y-2 animate-in fade-in">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <TerminalIcon className="h-4 w-4" /> Execution Console Output
                  </h4>
                  <pre className="p-4 rounded-xl bg-black border border-white/10 text-xs font-mono text-emerald-300 leading-relaxed whitespace-pre-wrap">
                    {output}
                  </pre>
                </div>
              )}

              {/* AI Code Review Modal Card */}
              {showReview && (
                <div className="p-5 rounded-2xl glass-panel border-indigo-500/40 space-y-3 animate-in fade-in">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                      <Sparkles className="h-4 w-4 text-amber-300" /> AI Complexity & Quality Analysis
                    </span>
                    <button onClick={() => setShowReview(false)} className="text-slate-400 hover:text-white text-xs">
                      Close
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[10px] text-slate-400 block">Time Complexity</span>
                      <span className="text-sm font-bold text-emerald-400">O(N) - Optimal</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[10px] text-slate-400 block">Space Complexity</span>
                      <span className="text-sm font-bold text-sky-400">O(N) Hash Map</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Great solution! Your single-pass hash map implementation achieves optimal O(N) time complexity instead of brute force O(N²).
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function TerminalIcon(props: any) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

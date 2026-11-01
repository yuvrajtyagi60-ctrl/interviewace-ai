"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import {
  Map,
  CheckCircle2,
  Circle,
  Calendar,
  Sparkles,
  ArrowRight,
  BookOpen,
  Target,
  Code2,
} from "lucide-react";

export default function RoadmapPage() {
  const [collapsed, setCollapsed] = useState(false);

  const roadmapWeeks = [
    {
      week: "Week 1",
      title: "Data Structures & Core Algorithms",
      desc: "Arrays, Hash Maps, Linked Lists, Two Pointers, and Binary Search.",
      status: "Completed",
      tasks: [
        { name: "Floyd's Cycle Detection & Reverse Linked List", done: true },
        { name: "Two Sum & 3Sum hash map patterns", done: true },
        { name: "Binary Search on Rotated Sorted Array", done: true },
      ],
    },
    {
      week: "Week 2",
      title: "Advanced DSA & Dynamic Programming",
      desc: "Trees, Graphs (DFS/BFS), 1D/2D Dynamic Programming.",
      status: "In Progress",
      tasks: [
        { name: "Binary Tree Level Order Traversal & LCA", done: true },
        { name: "0/1 Knapsack & Coin Change DP problems", done: false },
        { name: "Dijkstra's Shortest Path algorithm", done: false },
      ],
    },
    {
      week: "Week 3",
      title: "CS Fundamentals & System Design",
      desc: "DBMS, SQL Join queries, Operating Systems, Computer Networks.",
      status: "Upcoming",
      tasks: [
        { name: "ACID properties & SQL HAVING vs WHERE queries", done: false },
        { name: "Deadlock 4 Coffman conditions & Banker's Algorithm", done: false },
        { name: "Rate Limiter & Load Balancer system design", done: false },
      ],
    },
    {
      week: "Week 4",
      title: "HR Behavioral & Final Placement Mocks",
      desc: "STAR Framework drills, Voice modulation, Company-specific mocks.",
      status: "Upcoming",
      tasks: [
        { name: "Prepare 5 STAR stories for Amazon Leadership Principles", done: false },
        { name: "Full 45-minute Voice-to-Voice AI Recruiter Mock Interview", done: false },
      ],
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
                  <Map className="h-6 w-6 text-teal-400" />
                  AI Personalized Study Roadmap & Gap Analysis
                </h1>
                <p className="text-xs text-slate-400">
                  Custom 4-week preparation plan generated from your resume scan and mock interview results.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold">
                  Progress: 45% Complete
                </span>
              </div>
            </div>

            {/* Weeks Timeline */}
            <div className="space-y-6">
              {roadmapWeeks.map((rw, i) => (
                <div key={rw.week} className="glass-panel p-6 rounded-2xl border-white/10 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="h-8 w-8 rounded-xl bg-indigo-600/30 text-indigo-400 font-bold text-xs flex items-center justify-center border border-indigo-500/40">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-white flex items-center gap-2">
                          {rw.week}: {rw.title}
                        </h3>
                        <p className="text-xs text-slate-400">{rw.desc}</p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-bold border ${
                        rw.status === "Completed"
                          ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                          : rw.status === "In Progress"
                          ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                          : "bg-white/5 text-slate-400 border-white/10"
                      }`}
                    >
                      {rw.status}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {rw.tasks.map((t, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 text-xs text-slate-200">
                        {t.done ? (
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                        ) : (
                          <Circle className="h-4 w-4 text-slate-400 shrink-0" />
                        )}
                        <span className={t.done ? "line-through text-slate-400" : "font-medium"}>{t.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

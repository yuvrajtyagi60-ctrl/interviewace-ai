"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import {
  ShieldCheck,
  Users,
  BrainCircuit,
  FileSearch,
  Building2,
  BarChart3,
  Plus,
  Trash2,
  Edit3,
} from "lucide-react";

export default function AdminPanelPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<"students" | "questions" | "companies" | "analytics">("students");

  const adminStats = [
    { label: "Total Registered Candidates", val: "1,420", icon: Users, color: "text-indigo-400" },
    { label: "Mock Interviews Conducted", val: "8,940", icon: BrainCircuit, color: "text-sky-400" },
    { label: "Resume ATS Scans", val: "3,150", icon: FileSearch, color: "text-emerald-400" },
    { label: "Target Companies", val: "24", icon: Building2, color: "text-amber-400" },
  ];

  const studentList = [
    { id: 1, name: "Yuvraj Tyagi", email: "yuvraj@college.edu", score: 88, status: "Active" },
    { id: 2, name: "Ananya Sharma", email: "ananya@college.edu", score: 94, status: "Active" },
    { id: 3, name: "Rohan Gupta", email: "rohan@college.edu", score: 79, status: "Active" },
    { id: 4, name: "Priya Patel", email: "priya@college.edu", score: 91, status: "Active" },
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
                  <ShieldCheck className="h-6 w-6 text-indigo-400" />
                  InterviewAce Admin Control Panel
                </h1>
                <p className="text-xs text-slate-400">
                  Manage placement cell students, question repository, company templates, and platform analytics.
                </p>
              </div>

              <span className="px-3.5 py-1.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold">
                Admin Privilege Active
              </span>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {adminStats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="glass-panel p-5 rounded-2xl border-white/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">{s.label}</span>
                      <Icon className={`h-4 w-4 ${s.color}`} />
                    </div>
                    <span className="text-2xl font-extrabold text-white block">{s.val}</span>
                  </div>
                );
              })}
            </div>

            {/* Admin Management Section */}
            <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-4">
              {/* Tab selector */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab("students")}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      activeTab === "students" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Manage Students
                  </button>
                  <button
                    onClick={() => setActiveTab("questions")}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      activeTab === "questions" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Question Bank
                  </button>
                  <button
                    onClick={() => setActiveTab("companies")}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      activeTab === "companies" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Companies
                  </button>
                </div>

                <button className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-glow">
                  <Plus className="h-4 w-4" /> Add Item
                </button>
              </div>

              {/* Student Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-white/5 text-slate-400 uppercase text-[10px] tracking-wider border-b border-white/10">
                    <tr>
                      <th className="py-3 px-4">Student Name</th>
                      <th className="py-3 px-4">Email</th>
                      <th className="py-3 px-4">AI Score Average</th>
                      <th className="py-3 px-4">Account Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {studentList.map((st) => (
                      <tr key={st.id} className="hover:bg-white/[0.02]">
                        <td className="py-3.5 px-4 font-bold text-white">{st.name}</td>
                        <td className="py-3.5 px-4 text-slate-400">{st.email}</td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30 text-[11px]">
                            {st.score} %
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-emerald-400 font-semibold">{st.status}</td>
                        <td className="py-3.5 px-4 text-right space-x-2">
                          <button className="p-1 rounded text-slate-400 hover:text-white">
                            <Edit3 className="h-4 w-4" />
                          </button>
                          <button className="p-1 rounded text-slate-400 hover:text-rose-400">
                            <Trash2 className="h-4 w-4" />
                          </button>
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

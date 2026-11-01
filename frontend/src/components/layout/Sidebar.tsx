"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Bot,
  Mic,
  BrainCircuit,
  FileSearch,
  Code2,
  BarChart3,
  Map,
  User,
  ShieldCheck,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";

export function Sidebar({ collapsed, setCollapsed }: { collapsed?: boolean; setCollapsed?: (v: boolean) => void }) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "AI Assistant", href: "/assistant", icon: Bot, badge: "ChatGPT" },
    { name: "Voice Interview", href: "/voice-interview", icon: Mic, badge: "Live" },
    { name: "Mock Interview", href: "/mock-interview", icon: BrainCircuit },
    { name: "Resume Analyzer", href: "/resume-analyzer", icon: FileSearch },
    { name: "Coding Practice", href: "/coding", icon: Code2, badge: "IDE" },
    { name: "AI Feedback", href: "/feedback", icon: BarChart3 },
    { name: "Study Roadmap", href: "/roadmap", icon: Map },
    { name: "Profile", href: "/profile", icon: User },
    { name: "Admin Panel", href: "/admin", icon: ShieldCheck },
  ];

  return (
    <aside
      className={`fixed left-0 top-[65px] bottom-0 z-40 bg-[#0c1220]/90 backdrop-blur-xl border-r border-white/10 flex flex-col transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Upper Navigation List */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1.5 custom-scrollbar">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all group ${
                isActive
                  ? "bg-gradient-to-r from-indigo-600/30 to-sky-500/20 text-white border border-indigo-500/40 shadow-glow"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
              }`}
              title={collapsed ? item.name : undefined}
            >
              <Icon
                className={`h-4 w-4 shrink-0 transition-colors ${
                  isActive ? "text-indigo-400" : "text-slate-400 group-hover:text-slate-200"
                }`}
              />
              {!collapsed && (
                <div className="flex items-center justify-between flex-1 overflow-hidden">
                  <span className="truncate">{item.name}</span>
                  {item.badge && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30">
                      {item.badge}
                    </span>
                  )}
                </div>
              )}
            </Link>
          );
        })}
      </div>

      {/* Footer Profile & Collapse Toggle */}
      <div className="p-3 border-t border-white/10 bg-black/20 space-y-2">
        {!collapsed && (
          <div className="flex items-center gap-3 p-2 rounded-xl bg-white/5 border border-white/10">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center font-bold text-white text-xs">
              YT
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-xs font-semibold text-white truncate">Yuvraj Tyagi</span>
              <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Pro Student
              </span>
            </div>
          </div>
        )}

        <button
          onClick={() => setCollapsed && setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center gap-2 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-xs"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          {!collapsed && <span>Collapse Sidebar</span>}
        </button>
      </div>
    </aside>
  );
}

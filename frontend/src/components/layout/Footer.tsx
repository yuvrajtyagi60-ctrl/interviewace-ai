import React from "react";
import Link from "next/link";
import { Brain, Sparkles, Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#060911] border-t border-white/10 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-400 p-0.5 shadow-glow">
                <div className="h-full w-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
                  <Brain className="h-4 w-4 text-indigo-400" />
                </div>
              </div>
              <span className="font-bold text-lg text-white">InterviewAce AI</span>
            </Link>
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              AI-powered interview coach for college placement candidates. Prepare for Technical, HR, and Coding rounds with real-time feedback, STAR evaluation, and voice analytics.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Features</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/assistant" className="hover:text-indigo-400 transition-colors">AI Assistant</Link></li>
              <li><Link href="/voice-interview" className="hover:text-indigo-400 transition-colors">Voice Interview</Link></li>
              <li><Link href="/mock-interview" className="hover:text-indigo-400 transition-colors">Mock Interview Generator</Link></li>
              <li><Link href="/resume-analyzer" className="hover:text-indigo-400 transition-colors">Resume Parser & Questions</Link></li>
              <li><Link href="/coding" className="hover:text-indigo-400 transition-colors">Monaco Code IDE</Link></li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Topics Covered</h4>
            <ul className="space-y-2.5 text-xs">
              <li><span className="text-slate-400">DSA & Algorithms</span></li>
              <li><span className="text-slate-400">DBMS & SQL</span></li>
              <li><span className="text-slate-400">Operating Systems</span></li>
              <li><span className="text-slate-400">Computer Networks</span></li>
              <li><span className="text-slate-400">System Design & OOP</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Target Companies</h4>
            <ul className="space-y-2.5 text-xs">
              <li><span className="text-slate-400">Google & Amazon</span></li>
              <li><span className="text-slate-400">Microsoft & Meta</span></li>
              <li><span className="text-slate-400">Infosys & TCS</span></li>
              <li><span className="text-slate-400">Wipro & Accenture</span></li>
              <li><Link href="/admin" className="text-indigo-400 hover:underline">Admin Portal</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} InterviewAce AI Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-200">Privacy Policy</a>
            <a href="#" className="hover:text-slate-200">Terms of Service</a>
            <a href="#" className="hover:text-slate-200">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

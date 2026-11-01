"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { getAIAnswer } from "@/lib/aiEngine";
import {
  Bot,
  Send,
  Sparkles,
  Copy,
  RotateCcw,
  Trash2,
  Search,
  Code2,
  Check,
  Plus,
  BookOpen,
  MessageSquare,
} from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

export default function AssistantPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      text: "Hello Yuvraj! I am your **AI Interview Assistant**. Ask me any question on **DSA, DBMS, Operating Systems, Computer Networks, System Design, SQL, Web Development, Machine Learning, or HR Behavioral Questions**.",
      timestamp: "Just now",
    },
  ]);
  const [inputPrompt, setInputPrompt] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const suggestedPrompts = [
    { label: "DSA", query: "Explain Floyd's cycle detection algorithm for linked lists with Python code." },
    { label: "DBMS", query: "What is the difference between WHERE and HAVING clause in SQL?" },
    { label: "OS", query: "Explain Deadlock conditions and Banker's algorithm in OS." },
    { label: "Networks", query: "What happens when you type google.com in a browser?" },
    { label: "HR / STAR", query: "How do I answer 'Tell me about a time you faced a tough technical bug'?" },
    { label: "React & Web", query: "Explain React Virtual DOM and how reconciliation works." },
  ];

  const handleSend = (textToSend?: string) => {
    const promptText = textToSend || inputPrompt;
    if (!promptText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: promptText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputPrompt("");
    setIsTyping(true);

    setTimeout(() => {
      const aiReplyText = getAIAnswer(promptText);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: Date.now().toString(),
        sender: "ai",
        text: "Conversation reset. What interview topic shall we cover next?",
        timestamp: "Just now",
      },
    ]);
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
          {/* Top Bar Header */}
          <div className="bg-[#0b101d] border-b border-white/10 px-6 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white flex items-center gap-2">
                  AI Interview Assistant <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">GPT-4o / Claude Engine</span>
                </h2>
                <p className="text-[11px] text-slate-400">Ask any Technical, CS Fundamentals, or Behavioral question</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleClearHistory}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-rose-400 text-xs font-medium flex items-center gap-1.5 transition-colors"
                title="Clear Chat"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Clear Chat
              </button>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 custom-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-4 max-w-4xl ${
                  msg.sender === "user" ? "ml-auto flex-row-reverse" : ""
                }`}
              >
                {/* Avatar */}
                <div
                  className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 ${
                    msg.sender === "user"
                      ? "bg-gradient-to-tr from-indigo-500 to-sky-400 font-bold text-white text-xs"
                      : "bg-indigo-600/30 border border-indigo-500/40 text-indigo-400"
                  }`}
                >
                  {msg.sender === "user" ? "YT" : <Bot className="h-5 w-5" />}
                </div>

                {/* Message Box */}
                <div
                  className={`flex flex-col space-y-1 max-w-2xl ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-glow"
                        : "glass-panel border-white/10 text-slate-200"
                    }`}
                  >
                    <div className="whitespace-pre-wrap font-sans space-y-2">{msg.text}</div>
                  </div>

                  {/* Actions for AI Message */}
                  {msg.sender === "ai" && (
                    <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
                      <span>{msg.timestamp}</span>
                      <button
                        onClick={() => handleCopy(msg.text, msg.id)}
                        className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white flex items-center gap-1"
                      >
                        {copiedId === msg.id ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                        {copiedId === msg.id ? "Copied" : "Copy"}
                      </button>
                      <button
                        onClick={() => handleSend("Explain with another example")}
                        className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-indigo-300 flex items-center gap-1"
                      >
                        <RotateCcw className="h-3 w-3" />
                        Regenerate
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <div className="h-8 w-8 rounded-xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-indigo-400" />
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 px-4 py-2 rounded-xl">
                  <span className="h-2 w-2 rounded-full bg-indigo-400 animate-bounce"></span>
                  <span className="h-2 w-2 rounded-full bg-sky-400 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]"></span>
                  <span className="ml-2 font-mono text-[11px]">Generating structured response...</span>
                </div>
              </div>
            )}
          </div>

          {/* Prompt Suggestion Chips */}
          <div className="px-6 py-2 bg-[#0b101d]/60 border-t border-white/5 overflow-x-auto flex gap-2 no-scrollbar">
            {suggestedPrompts.map((sp) => (
              <button
                key={sp.label}
                onClick={() => handleSend(sp.query)}
                className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-indigo-600/20 border border-white/10 hover:border-indigo-500/40 text-[11px] text-slate-300 hover:text-indigo-300 whitespace-nowrap transition-colors flex items-center gap-1.5 shrink-0"
              >
                <Sparkles className="h-3 w-3 text-indigo-400" />
                <span className="font-semibold">{sp.label}:</span> {sp.query.slice(0, 32)}...
              </button>
            ))}
          </div>

          {/* Bottom Input Field */}
          <div className="p-4 bg-[#0b101d] border-t border-white/10">
            <div className="max-w-4xl mx-auto relative flex items-center">
              <textarea
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                rows={1}
                placeholder="Ask any interview question (e.g. Explain Binary Search Tree insertion or STAR method)..."
                className="w-full pl-4 pr-12 py-3.5 rounded-xl glass-input text-xs sm:text-sm resize-none focus:outline-none"
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputPrompt.trim()}
                className="absolute right-2 p-2 rounded-lg bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-white disabled:opacity-40 transition-all"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="text-[10px] text-slate-400 text-center mt-2">
              InterviewAce AI answers are calibrated for Google, Amazon, Microsoft, and placement criteria. Press Enter to send.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

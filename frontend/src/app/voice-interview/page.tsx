"use client";

import React, { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { analyzeSpeechMetrics } from "@/lib/aiEngine";
import {
  Mic,
  MicOff,
  Square,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  Bot,
  User,
  Clock,
  CheckCircle2,
  AlertCircle,
  Activity,
  BarChart3,
} from "lucide-react";

export default function VoiceInterviewPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [aiSpeaking, setAiSpeaking] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [transcript, setTranscript] = useState(
    "Hello! I am candidate Yuvraj. I am excited to interview for the SDE-1 software engineering position today."
  );

  const questions = [
    "Welcome Yuvraj! Let's start with your background. Can you walk me through a technical project where you implemented a complex algorithm?",
    "That sounds interesting! How did you optimize the time complexity and handle edge cases when scaling up?",
    "Great! Now let's switch to HR: Tell me about a situation where you had a conflict with a team member and how you resolved it.",
  ];

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording && !isPaused) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording, isPaused]);

  const handleStartInterview = () => {
    setIsRecording(true);
    setAiSpeaking(true);

    // Speak first question
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(questions[0]);
      utterance.rate = 1.0;
      utterance.onend = () => setAiSpeaking(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setAiSpeaking(false), 3000);
    }
  };

  const handleNextQuestion = () => {
    const nextIdx = (currentQuestionIndex + 1) % questions.length;
    setCurrentQuestionIndex(nextIdx);
    setAiSpeaking(true);

    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(questions[nextIdx]);
      utterance.rate = 1.0;
      utterance.onend = () => setAiSpeaking(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setAiSpeaking(false), 3000);
    }
  };

  const handleStopInterview = () => {
    setIsRecording(false);
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setAiSpeaking(false);
  };

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const metrics = analyzeSpeechMetrics(Math.max(timerSeconds, 30), transcript);

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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-panel p-6 rounded-2xl border-white/10">
              <div className="space-y-1">
                <h1 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
                  <Mic className="h-6 w-6 text-sky-400" />
                  Voice-to-Voice AI Recruiter Interview
                </h1>
                <p className="text-xs text-slate-400">
                  Real-time audio interaction with instant WPM, filler word detection, and tone analysis.
                </p>
              </div>

              {/* Status timer pill */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-black/40 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono">
                  <Clock className="h-4 w-4 text-indigo-400" />
                  <span>{formatTimer(timerSeconds)}</span>
                </div>
                {isRecording && (
                  <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold flex items-center gap-1.5 animate-pulse">
                    <span className="h-2 w-2 rounded-full bg-emerald-400"></span> Live Session
                  </span>
                )}
              </div>
            </div>

            {/* Recruiter Avatar & Wave visualizer card */}
            <div className="glass-panel p-8 rounded-2xl border-white/10 text-center space-y-6 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* Avatar State */}
              <div className="relative inline-block">
                <div
                  className={`h-24 w-24 rounded-full mx-auto flex items-center justify-center p-1 transition-all duration-500 ${
                    aiSpeaking
                      ? "bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400 shadow-glow animate-pulse"
                      : "bg-white/10 border border-white/20"
                  }`}
                >
                  <div className="h-full w-full bg-[#0b101d] rounded-full flex items-center justify-center">
                    <Bot className={`h-10 w-10 ${aiSpeaking ? "text-indigo-400" : "text-slate-400"}`} />
                  </div>
                </div>
                {aiSpeaking && (
                  <span className="absolute bottom-0 right-0 px-2 py-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-bold">
                    Speaking...
                  </span>
                )}
              </div>

              {/* Recruiter Question display */}
              <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 p-4 rounded-xl text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                <span className="text-indigo-300 font-bold block text-[11px] uppercase tracking-wider mb-1">
                  AI Recruiter (Question {currentQuestionIndex + 1} of {questions.length}):
                </span>
                "{questions[currentQuestionIndex]}"
              </div>

              {/* Live Wave Animation Bars */}
              <div className="flex justify-center items-center gap-1.5 h-16">
                {[40, 70, 30, 90, 50, 80, 25, 95, 60, 45, 85, 35].map((h, i) => (
                  <div
                    key={i}
                    className={`w-1.5 rounded-full transition-all duration-300 ${
                      isRecording && !isPaused
                        ? "bg-gradient-to-t from-indigo-600 to-sky-400 animate-wave"
                        : "bg-white/10 h-3"
                    }`}
                    style={{
                      height: isRecording && !isPaused ? `${h}%` : "12px",
                      animationDelay: `${(i % 5) * 0.15}s`,
                    }}
                  ></div>
                ))}
              </div>

              {/* Audio Controls */}
              <div className="flex items-center justify-center gap-4 pt-2">
                {!isRecording ? (
                  <button
                    onClick={handleStartInterview}
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-white font-bold text-xs shadow-glow flex items-center gap-2 transition-all hover:scale-105"
                  >
                    <Mic className="h-4 w-4" />
                    Start Voice Interview
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => setIsPaused(!isPaused)}
                      className="p-3 rounded-xl bg-white/10 border border-white/15 text-slate-200 hover:text-white text-xs font-semibold flex items-center gap-2"
                    >
                      {isPaused ? <Play className="h-4 w-4 text-emerald-400" /> : <Pause className="h-4 w-4 text-amber-400" />}
                      {isPaused ? "Resume" : "Pause"}
                    </button>

                    <button
                      onClick={handleNextQuestion}
                      className="px-4 py-3 rounded-xl bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 text-xs font-semibold hover:bg-indigo-600/50"
                    >
                      Next Question →
                    </button>

                    <button
                      onClick={handleStopInterview}
                      className="px-6 py-3 rounded-xl bg-rose-600/80 hover:bg-rose-600 text-white text-xs font-bold flex items-center gap-2 shadow-lg"
                    >
                      <Square className="h-4 w-4 fill-white" />
                      End Interview
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Real-time Voice Analytics Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Speaking Pace */}
              <div className="glass-panel p-5 rounded-2xl border-white/10 space-y-2">
                <span className="text-xs font-bold text-slate-400 block uppercase">Speaking Pace (WPM)</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-extrabold text-sky-400">{metrics.wpm} WPM</span>
                  <span className="text-[11px] text-emerald-400 font-semibold">{metrics.wpmStatus}</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-sky-400 w-3/4 rounded-full"></div>
                </div>
              </div>

              {/* Filler Words */}
              <div className="glass-panel p-5 rounded-2xl border-white/10 space-y-2">
                <span className="text-xs font-bold text-slate-400 block uppercase">Filler Word Detection</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-extrabold text-amber-400">{metrics.fillerCount} Detected</span>
                  <span className="text-[11px] text-slate-400 font-mono">"um", "like"</span>
                </div>
                <p className="text-[11px] text-slate-400">Low filler count increases confidence score by +12%.</p>
              </div>

              {/* Confidence & Tone */}
              <div className="glass-panel p-5 rounded-2xl border-white/10 space-y-2">
                <span className="text-xs font-bold text-slate-400 block uppercase">Tone Confidence</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-extrabold text-emerald-400">{metrics.confidenceScore}%</span>
                  <span className="text-[11px] text-emerald-400 font-semibold">Professional & Positive</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 w-4/5 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

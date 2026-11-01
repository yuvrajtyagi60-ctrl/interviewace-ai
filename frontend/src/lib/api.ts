/**
 * InterviewAce AI Frontend API Client
 * Connects the Next.js UI to the FastAPI Backend
 */

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

function getAuthHeader(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const token = localStorage.getItem("interviewace_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// ------------------- AUTH -------------------

export interface UserResponse {
  id: number;
  full_name: string;
  email: string;
  college?: string;
  target_role: string;
  created_at: string;
}

export interface TokenResponse {
  access_token: string;
  token_type: string;
  user: UserResponse;
}

export async function loginUser(email: string, password: string): Promise<TokenResponse> {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({ detail: "Login failed" }));
    throw new Error(errorData.detail || "Invalid credentials");
  }

  const data: TokenResponse = await res.json();
  if (typeof window !== "undefined") {
    localStorage.setItem("interviewace_token", data.access_token);
    localStorage.setItem("interviewace_user", JSON.stringify(data.user));
  }
  return data;
}

export async function signupUser(full_name: string, email: string, password: string, college?: string): Promise<TokenResponse> {
  const res = await fetch(`${API_BASE}/api/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ full_name, email, password, college }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({ detail: "Signup failed" }));
    throw new Error(errorData.detail || "Registration failed");
  }

  const data: TokenResponse = await res.json();
  if (typeof window !== "undefined") {
    localStorage.setItem("interviewace_token", data.access_token);
    localStorage.setItem("interviewace_user", JSON.stringify(data.user));
  }
  return data;
}

// ------------------- INTERVIEWS -------------------

export interface SessionResponse {
  session_id: number;
  company: string;
  type: string;
  difficulty: string;
  questions: string[];
}

export interface StarAnalysis {
  situation: string;
  action: string;
  result: string;
}

export interface EvaluationResponse {
  question: string;
  session_id: number;
  total_score: number;
  technical_score: number;
  communication_score: number;
  star_analysis: StarAnalysis;
  feedback: string;
  key_strengths?: string[];
  improvement_tips?: string[];
}

export async function generateInterviewSession(company: string, interview_type: string, difficulty: string): Promise<SessionResponse> {
  const res = await fetch(`${API_BASE}/api/interviews/generate-session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    },
    body: JSON.stringify({ company, interview_type, difficulty }),
  });

  if (!res.ok) throw new Error("Failed to generate interview session");
  return res.json();
}

export async function evaluateAnswer(session_id: number, question: string, answer: string): Promise<EvaluationResponse> {
  const res = await fetch(`${API_BASE}/api/interviews/evaluate-answer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    },
    body: JSON.stringify({ session_id, question, answer }),
  });

  if (!res.ok) throw new Error("Failed to evaluate answer");
  return res.json();
}

// ------------------- CODING -------------------

export interface CodeReviewResponse {
  status: string;
  output: string;
  time_complexity: string;
  space_complexity: string;
  ai_review: string;
  suggestions?: string[];
}

export async function executeCode(language: string, code: string, problem_id?: string): Promise<CodeReviewResponse> {
  const res = await fetch(`${API_BASE}/api/coding/execute`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    },
    body: JSON.stringify({ language, code, problem_id }),
  });

  if (!res.ok) throw new Error("Code execution failed");
  return res.json();
}

// ------------------- RESUME -------------------

export interface ResumeAnalysisResponse {
  filename: string;
  ats_score: number;
  skills: string[];
  projects: string[];
  tailored_questions: string[];
  summary?: string;
}

export async function uploadAndAnalyzeResume(file: File): Promise<ResumeAnalysisResponse> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_BASE}/api/resume/analyze`, {
    method: "POST",
    headers: {
      ...getAuthHeader(),
    },
    body: formData,
  });

  if (!res.ok) throw new Error("Failed to analyze resume");
  return res.json();
}

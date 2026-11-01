# InterviewAce AI - Practice. Improve. Get Hired.

Production-ready AI interview preparation platform for college students preparing for technical, HR, and coding placement interviews. Inspired by ChatGPT, Perplexity, Notion, and Linear.

## 🚀 Features

- 🤖 **AI Assistant**: ChatGPT-like conversational assistant with markdown code rendering covering DSA, DBMS, OS, Networks, OOP, SQL, Web Dev, ML, and HR questions.
- 🎙️ **Voice-to-Voice Interview**: Real-time microphone audio visualizer, live transcript, AI recruiter avatar, and Text-to-Speech audio output.
- 🎯 **Dynamic Mock Interview Generator**: Custom question generation tailored by Company (Google, Amazon, Microsoft, TCS, Infosys, Wipro, Accenture) and Difficulty.
- 📄 **Resume ATS Analyzer**: PDF parser extracting skills, projects, ATS match score, and generating custom resume-specific interview questions.
- 💻 **Monaco Coding IDE**: Multi-language code editor (Python, Java, C++, JavaScript) with test case execution and AI complexity analysis.
- 📊 **AI Performance Feedback & STAR Evaluation**: Scores for Technical accuracy, Communication, Confidence, STAR framework, and Speech/Tone analysis.
- 🗺️ **Personalized Study Roadmap**: 4-week step-by-step preparation plan targeting student weak topics.
- 👤 **Student Dashboard & Profile**: Leaderboards, learning streaks, daily goals, and achievements.
- 🛡️ **Admin Panel**: Management portal for students, questions, companies, and analytics.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons, Monaco Editor.
- **Backend**: FastAPI (Python), SQLAlchemy, Pydantic, JWT Authentication.
- **Database**: SQLite / PostgreSQL.
- **Containerization**: Docker & Docker Compose.

---

## 🚦 Quick Start Guide

### 1. Install & Run Frontend
```bash
cd frontend
cmd /c npm install
cmd /c npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Run Backend (Optional standalone)
```bash
cd backend
pip install -r requirements.txt
python app/main.py
```
Backend API docs available at [http://localhost:8000/docs](http://localhost:8000/docs).

---

## 🐳 Docker Deployment
```bash
docker-compose up --build
```

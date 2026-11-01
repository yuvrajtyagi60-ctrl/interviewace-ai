import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine, Base
from app.routers import auth_router, interview_router, resume_router, coding_router

# Create DB tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="InterviewAce AI Backend API",
    description="Production-grade AI Interview Prep API with JWT auth, STAR framework evaluation, Resume parsing, and Monaco execution runner.",
    version="1.0.0"
)

# Enable CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Routers
app.include_router(auth_router.router, prefix="/api/auth", tags=["Auth"])
app.include_router(interview_router.router, prefix="/api/interviews", tags=["Interviews"])
app.include_router(resume_router.router, prefix="/api/resume", tags=["Resume"])
app.include_router(coding_router.router, prefix="/api/coding", tags=["Coding"])

@app.get("/")
def read_root():
    return {
        "status": "online",
        "service": "InterviewAce AI Engine Backend",
        "docs": "/docs",
        "tagline": "Practice. Improve. Get Hired."
    }

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)

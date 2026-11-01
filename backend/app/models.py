from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Text, Boolean
from sqlalchemy.orm import relationship
from datetime import datetime
from app.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    college = Column(String, nullable=True)
    target_role = Column(String, default="SDE-1")
    created_at = Column(DateTime, default=datetime.utcnow)

    interviews = relationship("InterviewSession", back_populates="user")
    resumes = relationship("Resume", back_populates="user")

class InterviewSession(Base):
    __tablename__ = "interview_sessions"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    company = Column(String)
    interview_type = Column(String)  # Technical, HR, Behavioral, Coding
    difficulty = Column(String)
    overall_score = Column(Float, default=0.0)
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="interviews")
    evaluations = relationship("QuestionEvaluation", back_populates="session")

class QuestionEvaluation(Base):
    __tablename__ = "question_evaluations"

    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(Integer, ForeignKey("interview_sessions.id"))
    question_text = Column(Text)
    user_answer = Column(Text)
    star_score = Column(Float)
    technical_score = Column(Float)
    ai_feedback = Column(Text)

    session = relationship("InterviewSession", back_populates="evaluations")

class Resume(Base):
    __tablename__ = "resumes"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    filename = Column(String)
    ats_score = Column(Float)
    parsed_skills = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="resumes")

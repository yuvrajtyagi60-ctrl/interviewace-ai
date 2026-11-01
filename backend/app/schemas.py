from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

class UserCreate(BaseModel):
    full_name: str
    email: EmailStr
    password: str
    college: Optional[str] = None

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: int
    full_name: str
    email: str
    college: Optional[str]
    target_role: str
    created_at: datetime

    class Config:
        from_attributes = True

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserResponse

class InterviewRequest(BaseModel):
    company: str
    interview_type: str
    difficulty: str

class AnswerSubmission(BaseModel):
    session_id: int
    question: str
    answer: str

class CodeExecutionRequest(BaseModel):
    language: str
    code: str
    problem_id: Optional[str] = "two-sum"

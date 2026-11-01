from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas import InterviewRequest, AnswerSubmission
from app.ai_service import generate_interview_questions, evaluate_interview_answer

router = APIRouter()

@router.post("/generate-session")
def generate_interview_session(req: InterviewRequest):
    questions = generate_interview_questions(
        company=req.company,
        interview_type=req.interview_type,
        difficulty=req.difficulty
    )
    return {
        "session_id": 101,
        "company": req.company,
        "type": req.interview_type,
        "difficulty": req.difficulty,
        "questions": questions
    }

@router.post("/evaluate-answer")
def evaluate_answer(sub: AnswerSubmission):
    eval_result = evaluate_interview_answer(
        question=sub.question,
        answer=sub.answer
    )
    return {
        "question": sub.question,
        "session_id": sub.session_id,
        **eval_result
    }

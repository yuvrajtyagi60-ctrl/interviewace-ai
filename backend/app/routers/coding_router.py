from fastapi import APIRouter
from app.schemas import CodeExecutionRequest
from app.ai_service import review_code_submission

router = APIRouter()

@router.post("/execute")
def execute_code(req: CodeExecutionRequest):
    review = review_code_submission(
        language=req.language,
        code=req.code,
        problem_id=req.problem_id or "two-sum"
    )
    return review

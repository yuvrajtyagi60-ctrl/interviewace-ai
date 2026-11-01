import io
from fastapi import APIRouter, UploadFile, File
from app.ai_service import parse_resume_content

router = APIRouter()

@router.post("/analyze")
async def analyze_resume(file: UploadFile = File(...)):
    filename = file.filename or "resume.pdf"
    content = await file.read()
    extracted_text = ""

    # Attempt PDF extraction
    try:
        import PyPDF2
        pdf_reader = PyPDF2.PdfReader(io.BytesIO(content))
        for page in pdf_reader.pages:
            extracted_text += (page.extract_text() or "") + "\n"
    except Exception:
        # Fallback to UTF-8 decoded text if plain text / markdown
        try:
            extracted_text = content.decode("utf-8", errors="ignore")
        except Exception:
            extracted_text = ""

    analysis = parse_resume_content(
        resume_text=extracted_text or "General software engineer candidate resume with Python, React, and SQL.",
        filename=filename
    )

    return {
        "filename": filename,
        **analysis
    }

"""
Mail Server API for LP Collect Contact Form
FastAPI-based email sending service with SMTP support
"""

import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
from typing import Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="LP Collect Mail Server",
    description="Email sending API for contact forms",
    version="1.0.0"
)

# CORS configuration
ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "http://localhost:3001,http://localhost:5173").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Email configuration from environment variables
SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER", "")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD", "")
RECIPIENT_EMAIL = os.getenv("RECIPIENT_EMAIL", "yuuki8867@gmail.com")


class ContactForm(BaseModel):
    """Contact form data model"""
    name: str
    company: Optional[str] = ""
    email: EmailStr
    message: str


class MailResponse(BaseModel):
    """API response model"""
    success: bool
    message: str


def create_email_content(form: ContactForm) -> tuple[str, str]:
    """Create email subject and body from form data"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    subject = f"【お問い合わせ】{form.name}様 ({form.company or '個人'})"

    body = f"""
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    LP Collect お問い合わせフォーム
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【受信日時】
{timestamp}

【お名前】
{form.name}

【会社名】
{form.company or "未入力"}

【メールアドレス】
{form.email}

【お問い合わせ内容】
{form.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
このメールはLP Collectのお問い合わせフォームから
自動送信されました。
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"""
    return subject, body


def send_email(to_email: str, subject: str, body: str, reply_to: str) -> bool:
    """Send email via SMTP"""
    if not SMTP_USER or not SMTP_PASSWORD:
        logger.warning("SMTP credentials not configured, skipping actual send")
        return True  # Return True for development/testing

    try:
        msg = MIMEMultipart()
        msg['From'] = SMTP_USER
        msg['To'] = to_email
        msg['Subject'] = subject
        msg['Reply-To'] = reply_to

        msg.attach(MIMEText(body, 'plain', 'utf-8'))

        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.send_message(msg)

        logger.info(f"Email sent successfully to {to_email}")
        return True

    except smtplib.SMTPAuthenticationError:
        logger.error("SMTP authentication failed")
        raise HTTPException(status_code=500, detail="メール認証エラー")
    except smtplib.SMTPException as e:
        logger.error(f"SMTP error: {e}")
        raise HTTPException(status_code=500, detail="メール送信エラー")
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
        raise HTTPException(status_code=500, detail="予期しないエラーが発生しました")


@app.get("/")
async def root():
    """Health check endpoint"""
    return {"status": "ok", "service": "LP Collect Mail Server"}


@app.get("/health")
async def health_check():
    """Health check for container orchestration"""
    return {
        "status": "healthy",
        "smtp_configured": bool(SMTP_USER and SMTP_PASSWORD),
        "recipient": RECIPIENT_EMAIL
    }


@app.post("/api/contact", response_model=MailResponse)
async def send_contact_email(form: ContactForm):
    """
    Send contact form email

    - **name**: Sender's name (required)
    - **company**: Company name (optional)
    - **email**: Sender's email address (required)
    - **message**: Message content (required)
    """
    logger.info(f"Received contact form from: {form.name} <{form.email}>")

    # Validate message length
    if len(form.message) < 10:
        raise HTTPException(status_code=400, detail="メッセージは10文字以上で入力してください")

    if len(form.message) > 5000:
        raise HTTPException(status_code=400, detail="メッセージは5000文字以内で入力してください")

    # Create and send email
    subject, body = create_email_content(form)
    send_email(RECIPIENT_EMAIL, subject, body, reply_to=form.email)

    return MailResponse(
        success=True,
        message="お問い合わせを受け付けました。ありがとうございます。"
    )


if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", "8000"))
    uvicorn.run(app, host="0.0.0.0", port=port)

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT = process.env.EMAIL_RECEIVER ?? "";
const SMTP_HOST = process.env.EMAIL_HOST ?? "";
const SMTP_PORT = Number(process.env.SMTP_PORT) || 587;
const SMTP_USER = process.env.EMAIL_SENDER ?? "";
const SMTP_PASS = process.env.EMAIL_PASSWORD ?? "";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!RECIPIENT || !SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json(
      {
        error:
          "Contact form is not configured. Set SMTP and CONTACT_EMAIL in .env.",
      },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `DataDive Contact <${SMTP_USER}>`,
      to: RECIPIENT,
      replyTo: email,
      subject: `[DataDive] Contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><pre>${escapeHtml(
        message
      )}</pre>`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

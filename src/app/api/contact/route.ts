import { NextResponse } from "next/server";
import { db } from "@/lib/db";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body ?? {};

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof email !== "string" ||
      !email.trim() ||
      typeof message !== "string" ||
      !message.trim()
    ) {
      return NextResponse.json(
        { ok: false, error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!EMAIL_RE.test(email.trim())) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const trimmedSubject =
      typeof subject === "string" && subject.trim()
        ? subject.trim().slice(0, 200)
        : "(No subject)";

    const created = await db.contactMessage.create({
      data: {
        name: name.trim().slice(0, 120),
        email: email.trim().slice(0, 160),
        subject: trimmedSubject,
        message: message.trim().slice(0, 5000),
      },
      select: { id: true, createdAt: true },
    });

    return NextResponse.json({
      ok: true,
      id: created.id,
      createdAt: created.createdAt,
    });
  } catch (err) {
    console.error("[/api/contact] error", err);
    return NextResponse.json(
      { ok: false, error: "Unable to send message right now. Please try again." },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, service: "contact" });
}

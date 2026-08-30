import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // 1. Server-side validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // 2. Anti-abuse validation (length checks)
    if (name.length > 100 || email.length > 100 || message.length > 5000) {
      return NextResponse.json(
        { error: "Payload exceeds acceptable limits" },
        { status: 400 }
      );
    }

    // 3. Verify environment variables are present
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !toEmail) {
      console.error("[Contact API] Missing Resend credentials in environment");
      return NextResponse.json(
        { error: "Email service configuration is missing" },
        { status: 500 }
      );
    }

    // 4. Send email via Resend API
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: toEmail,
        subject: `New Portfolio Message from ${name.trim()}`,
        html: `
          <p>You have received a new contact form submission from your portfolio:</p>
          <hr />
          <p><strong>Name:</strong> ${name.trim()}</p>
          <p><strong>Email:</strong> ${email.trim()}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message.trim()}</p>
        `,
      }),
    });

    if (res.ok) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      const errorData = await res.json();
      console.error("[Contact API] Resend API responded with error:", errorData);
      return NextResponse.json(
        { error: "Failed to send email through provider" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("[Contact API] Unexpected server error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

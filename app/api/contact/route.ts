import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: {
          name: process.env.BREVO_SENDER_NAME || "TheoComplex",
          email: process.env.BREVO_SENDER_EMAIL,
        },
        to: [
          {
            email: process.env.BREVO_RECEIVER_EMAIL,
            name: "TheoComplex",
          },
        ],
        replyTo: {
          email,
          name,
        },
        subject: `TheoComplex Contact: ${subject}`,
        htmlContent: `
          <h2>New message from TheoComplex website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${String(message).replace(/\n/g, "<br />")}</p>
        `,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Brevo error:", errorText);

      return NextResponse.json(
        { error: "Brevo failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
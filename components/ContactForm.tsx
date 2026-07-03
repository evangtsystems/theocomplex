"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  setStatus("loading");

  const form = e.currentTarget;
  const formData = new FormData(form);

  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    setStatus("success");
    form.reset();
  } else {
    setStatus("error");
  }
}

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <input name="name" placeholder="Your Name" required style={inputStyle} />

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        required
        style={inputStyle}
      />

      <input name="subject" placeholder="Subject" required style={inputStyle} />

      <textarea
        name="message"
        placeholder="Your Message"
        rows={7}
        required
        style={{
          ...inputStyle,
          resize: "vertical",
        }}
      />

      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          background: "#c9a56a",
          color: "white",
          border: "none",
          padding: "16px",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          fontWeight: 700,
          letterSpacing: "1px",
          textTransform: "uppercase",
          borderRadius: "5px",
          opacity: status === "loading" ? 0.7 : 1,
        }}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p style={{ color: "#2f7d32" }}>
          Thank you. Your message has been sent successfully.
        </p>
      )}

      {status === "error" && (
        <p style={{ color: "#b00020" }}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "15px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  fontSize: "1rem",
  outline: "none",
  background: "#fafafa",
};
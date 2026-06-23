"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        right: "20px",
        maxWidth: "700px",
        margin: "0 auto",
        background: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        zIndex: 9999,
      }}
    >
      <h4
        style={{
          marginBottom: "10px",
          color: "#1b1b1b",
        }}
      >
        🍪 Cookie Preferences
      </h4>

      <p
        style={{
          fontSize: "0.9rem",
          lineHeight: 1.6,
          color: "#555",
          marginBottom: "20px",
        }}
      >
        We use cookies to improve your browsing experience and analyze website
        traffic.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <button
          onClick={acceptCookies}
          style={{
            background: "#c9a56a",
            color: "white",
            border: "none",
            padding: "12px 20px",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Accept All
        </button>

        <button
          onClick={rejectCookies}
          style={{
            background: "#eee",
            color: "#111",
            border: "none",
            padding: "12px 20px",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Reject
        </button>

        <Link
          href="/cookies"
          style={{
            padding: "12px 20px",
            textDecoration: "none",
            color: "#111",
          }}
        >
          Cookie Policy
        </Link>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";

export default function AdminPage() {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  async function upload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setUploading(true);
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (result.success) {
        setMessage("✅ Upload completed successfully!");
      } else {
        setMessage(`❌ ${result.error}`);
      }
    } catch {
      setMessage("❌ Upload failed.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f4ef",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          background: "white",
          padding: 30,
          borderRadius: 12,
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            marginTop: 0,
            marginBottom: 25,
            textAlign: "center",
          }}
        >
          Lifestyle Image Upload
        </h1>

        <form onSubmit={upload}>
          <input
            name="password"
            type="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: 12,
              marginBottom: 18,
            }}
          />

          <select
            name="slot"
            style={{
              width: "100%",
              padding: 12,
              marginBottom: 18,
            }}
          >
            <option value="lifestyle-1">Lifestyle 1</option>
            <option value="lifestyle-2">Lifestyle 2</option>
            <option value="lifestyle-3">Lifestyle 3</option>
            <option value="lifestyle-4">Lifestyle 4</option>
          </select>

          <input
            type="file"
            name="file"
            accept="image/*"
            required
            style={{
              width: "100%",
              marginBottom: 24,
            }}
          />

          <button
            type="submit"
            disabled={uploading}
            style={{
              width: "100%",
              padding: 14,
              border: "none",
              borderRadius: 8,
              background: uploading ? "#999" : "#222",
              color: "white",
              cursor: uploading ? "not-allowed" : "pointer",
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            {uploading ? "Uploading..." : "Upload Image"}
          </button>
        </form>

        {uploading && (
          <p
            style={{
              marginTop: 18,
              textAlign: "center",
              color: "#666",
            }}
          >
            ⏳ Processing image... Please wait.
          </p>
        )}

        {message && (
          <p
            style={{
              marginTop: 18,
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
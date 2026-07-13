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
    const fileInput = form.elements.namedItem("file") as HTMLInputElement;
    let file = fileInput.files?.[0];

    if (!file) {
      setMessage("❌ No image selected.");
      setUploading(false);
      return;
    }

    try {
      const isHeic =
        file.type === "image/heic" ||
        file.type === "image/heif" ||
        /\.hei[cf]$/i.test(file.name);

      if (isHeic) {
        setMessage("⏳ Converting iPhone image...");

        const { default: heic2any } = await import("heic2any");

        const converted = await heic2any({
          blob: file,
          toType: "image/jpeg",
          quality: 0.9,
        });

        const convertedBlob = Array.isArray(converted)
          ? converted[0]
          : converted;

        const convertedName = file.name.replace(/\.hei[cf]$/i, ".jpg");

        file = new File([convertedBlob], convertedName, {
          type: "image/jpeg",
        });
      }

      const data = new FormData(form);
      data.set("file", file);

      setMessage("⏳ Uploading image...");

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: data,
      });

      const responseText = await res.text();

      let result: {
        success?: boolean;
        error?: string;
        details?: string;
      } = {};

      try {
        result = JSON.parse(responseText);
      } catch {
        // The response may be HTML or plain text.
      }

      if (res.ok && result.success) {
        setMessage("✅ Upload completed successfully!");
        form.reset();
      } else {
        const errorMessage =
          result.details ||
          result.error ||
          `Upload failed with status ${res.status}`;

        setMessage(`❌ ${errorMessage}`);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown upload error";

      setMessage(`❌ Upload failed: ${errorMessage}`);
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
            required
            style={{
              width: "100%",
              padding: 12,
              marginBottom: 18,
              boxSizing: "border-box",
            }}
          />

          <select
            name="slot"
            required
            defaultValue="lifestyle-1"
            style={{
              width: "100%",
              padding: 12,
              marginBottom: 18,
              boxSizing: "border-box",
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
            accept="image/*,.heic,.heif"
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
            {uploading ? "Processing..." : "Upload Image"}
          </button>
        </form>

        {message && (
          <p
            style={{
              marginTop: 18,
              marginBottom: 0,
              textAlign: "center",
              fontWeight: 600,
              lineHeight: 1.5,
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
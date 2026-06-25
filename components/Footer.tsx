"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 900);

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <footer
      style={{
        background: "#0f1216",
        color: "white",
        padding: isMobile ? "50px 24px" : "70px 8%",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "2fr 1fr 1fr 1fr",
          gap: isMobile ? "40px" : "50px",
        }}
      >
        <div>
          <Image
  src="/images/logo.png"
  alt="Corfu Escapes"
  width={180}
  height={70}
  style={{
    width: isMobile ? "150px" : "180px",
    height: "auto",
    marginBottom: "20px",
  }}
/>

          <p
            style={{
              lineHeight: 1.8,
              opacity: 0.8,
              maxWidth: "320px",
            }}
          >
            Three unique apartments in the heart of Corfu.
            Designed for comfort, made for memories.
          </p>
        </div>

        <div>
          <h4 style={{ marginBottom: "15px" }}>Quick Links</h4>

          <p><Link href="/apartments">Apartments</Link></p>
          <p><Link href="/gallery">Gallery</Link></p>
          <p><Link href="/location">Location</Link></p>
          <p><Link href="/contact">Contact</Link></p>
        </div>

        <div>
          <h4 style={{ marginBottom: "15px" }}>Information</h4>

          <p><Link href="/about">About</Link></p>
          <p><Link href="/house-rules">House Rules</Link></p>
          <p><Link href="/privacy-policy">Privacy Policy</Link></p>
          <p><Link href="/cookies">Cookie Policy</Link></p>
        </div>

        <div>
          <h4 style={{ marginBottom: "15px" }}>Contact</h4>

          <p>+30 123 456 7890</p>
          <p>info@theocomplex.com</p>
          <p>Corfu, Greece</p>
        </div>
      </div>

      <div
        style={{
          marginTop: "50px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: "25px",
          opacity: 0.7,
          fontSize: "0.85rem",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        © {new Date().getFullYear()} Corfu Escapes.
        All rights reserved.
      </div>
    </footer>
  );
}
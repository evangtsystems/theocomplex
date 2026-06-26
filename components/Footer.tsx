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
  src="/images/logo.webp"
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

          <p>+30 6992758885</p>
          <p>info@theocomplex.com</p>
          <p>Corfu, Greece</p>
        </div>
      </div>

      <div
  style={{
    marginTop: "55px",
    paddingTop: "28px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    justifyContent: "flex-start",
    position: "relative",
    alignItems: "center",
    flexDirection: isMobile ? "column" : "row",
    gap: "20px",
  }}
>
  <div
    style={{
      fontSize: "0.85rem",
      opacity: 0.7,
      textAlign: isMobile ? "center" : "left",
    }}
  >
    © {new Date().getFullYear()} THEO COMPLEX. All rights reserved.
  </div>

  <div
  style={{
    position: isMobile ? "static" : "absolute",
    left: isMobile ? undefined : "50%",
    transform: isMobile ? undefined : "translateX(-50%)",
    textAlign: "center",
  }}
>
    <p
      style={{
        margin: "0 0 8px 0",
        fontSize: "0.72rem",
        letterSpacing: "2px",
        color: "rgba(255,255,255,.55)",
      }}
    >
      DESIGNED &amp; HOSTED BY
    </p>

    <a
      href="https://gtsystems.gr"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://gtsystems.gr/gtswh.gif"
        alt="GT Systems"
        style={{
          width: "180px",
          maxWidth: "100%",
        }}
      />
    </a>
  </div>
</div>
    </footer>
  );
}
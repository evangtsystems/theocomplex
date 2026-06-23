"use client";

import { useEffect, useState } from "react";

const experiences = [
  { title: "Boat Trips", image: "/images/experience-1.jpg", icon: "⛵" },
  { title: "Local Cuisine", image: "/images/experience-2.jpg", icon: "🍽️" },
  { title: "Hiking Trails", image: "/images/experience-3.jpg", icon: "⛰️" },
  { title: "Wine & Culture", image: "/images/experience-4.jpg", icon: "🍷" },
  { title: "Hidden Gems", image: "/images/experience-5.jpg", icon: "📍" },
];

export default function ExperienceSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 900);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section
      style={{
        background: "#f7f4ef",
        padding: isMobile ? "60px 24px" : "75px 8%",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "260px 1fr",
        gap: isMobile ? "40px" : "60px",
        alignItems: "end",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div>
        <p
          style={{
            fontSize: "0.72rem",
            textTransform: "uppercase",
            fontWeight: 700,
            letterSpacing: "1.5px",
            marginBottom: "22px",
          }}
        >
          Experience Corfu
        </p>

        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: isMobile ? "2.2rem" : "2.7rem",
            lineHeight: 1.08,
            fontWeight: 400,
            margin: 0,
            color: "#1b1b1b",
          }}
        >
          Beyond
          <br />
          the Ordinary
        </h2>

        <p
          style={{
            marginTop: "24px",
            lineHeight: 1.8,
            color: "#333",
            fontSize: "0.95rem",
            maxWidth: isMobile ? "100%" : "260px",
          }}
        >
          From crystal-clear waters to charming villages and authentic flavors,
          Corfu offers experiences that stay with you forever.
        </p>

        <a
          href="/experience"
          style={{
            display: "inline-block",
            marginTop: "25px",
            color: "#111",
            textDecoration: "none",
            textTransform: "uppercase",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "1.5px",
          }}
        >
          Explore Experiences →
        </a>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(5, 1fr)",
          gap: isMobile ? "22px" : "12px",
          width: "100%",
        }}
      >
        {experiences.map((item) => (
          <div key={item.title}>
            <div
              style={{
                textAlign: isMobile ? "left" : "center",
                marginBottom: "12px",
                color: "#222",
                display: isMobile ? "flex" : "block",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div style={{ fontSize: "1.4rem" }}>{item.icon}</div>
              <div
                style={{
                  fontSize: isMobile ? "0.95rem" : "0.75rem",
                  fontWeight: 600,
                }}
              >
                {item.title}
              </div>
            </div>

            <div
              style={{
                height: isMobile ? "240px" : "210px",
                borderRadius: "6px",
                overflow: "hidden",
                backgroundImage: `url('${item.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
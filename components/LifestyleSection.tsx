"use client";

import { useEffect, useState } from "react";

const cards = [
  {
    title: "Peaceful Mornings",
    image: "/uploads/lifestyle/lifestyle-1.webp",
  },
  {
    title: "Nature Escape",
    image: "/uploads/lifestyle/lifestyle-2.webp",
  },
  {
    title: "Golden Sunsets",
    image: "/uploads/lifestyle/lifestyle-3.webp",
  },
  {
    title: "Hidden Beaches",
    image: "/uploads/lifestyle/lifestyle-4.webp",
  },
];

export default function LifestyleSection() {
 const [mobile, setMobile] = useState(false);
const [version, setVersion] = useState("");

useEffect(() => {
  setVersion(String(Date.now()));

  const check = () => setMobile(window.innerWidth < 900);
  check();
  window.addEventListener("resize", check);
  return () => window.removeEventListener("resize", check);
}, []);

  return (
    <section
      style={{
        background: "#f7f4ef",
        padding: mobile ? "60px 24px" : "70px 8%",
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "260px 1fr",
        gap: mobile ? "40px" : "60px",
        alignItems: "center",
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
          The Corfu Feeling
        </p>

        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: mobile ? "2.1rem" : "2.7rem",
            lineHeight: 1.08,
            fontWeight: 400,
            margin: 0,
            color: "#1b1b1b",
          }}
        >
          Slow mornings.
          <br />
          Golden sunsets.
          <br />
          Pure freedom.
        </h2>

        <p
          style={{
            marginTop: "28px",
            lineHeight: 1.8,
            color: "#333",
            fontSize: "0.95rem",
          }}
        >
          Wake up to the sound of nature, enjoy your coffee with a view and let
          Corfu’s beauty slow down time.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: mobile
            ? "repeat(2,1fr)"
            : "repeat(4,1fr)",
          gap: "8px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              height: mobile ? "220px" : "360px",
              position: "relative",
              borderRadius: "4px",
              overflow: "hidden",
            backgroundImage: `url('${card.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.05))",
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: "18px",
                width: "100%",
                textAlign: "center",
                color: "white",
                fontSize: mobile ? "0.72rem" : "0.8rem",
              }}
            >
              {card.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
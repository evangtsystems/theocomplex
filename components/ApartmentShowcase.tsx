"use client";

import { useEffect, useState } from "react";

const apartments = [
  {
    name: "Apartment One",
    image: "/images/apartment-1.jpg",
    guests: "Up to 4 Guests",
    description:
      "A peaceful retreat with elegant interiors and beautiful outdoor spaces.",
  },
  {
    name: "Apartment Two",
    image: "/images/apartment-2.jpg",
    guests: "Up to 6 Guests",
    description:
      "Perfect for families seeking comfort, privacy and memorable moments.",
  },
  {
    name: "Apartment Three",
    image: "/images/apartment-3.jpg",
    guests: "Up to 8 Guests",
    description:
      "Spacious luxury accommodation designed for unforgettable holidays.",
  },
];

export default function ApartmentShowcase() {
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
        background: "#fff",
        padding: isMobile ? "60px 24px" : "90px 8%",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          marginBottom: "50px",
        }}
      >
        <p
          style={{
            fontSize: "0.72rem",
            textTransform: "uppercase",
            fontWeight: 700,
            letterSpacing: "1.5px",
            marginBottom: "20px",
          }}
        >
          Our Collection
        </p>

        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: isMobile ? "2.2rem" : "3.5rem",
            fontWeight: 400,
            lineHeight: 1.05,
            margin: 0,
            color: "#1b1b1b",
          }}
        >
          Three Apartments
          <br />
          Designed For You
        </h2>

        <p
          style={{
            marginTop: "25px",
            lineHeight: 1.8,
            color: "#555",
            maxWidth: "550px",
          }}
        >
          Discover three unique stays carefully designed to offer comfort,
          elegance and unforgettable moments in Corfu.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: "30px",
        }}
      >
        {apartments.map((apartment) => (
          <div
            key={apartment.name}
            style={{
              background: "#fff",
            }}
          >
            <div
              style={{
                height: isMobile ? "320px" : "420px",
                borderRadius: "6px",
                overflow: "hidden",
                marginBottom: "25px",
                backgroundImage: `url('${apartment.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                color: "#9c8c75",
                marginBottom: "10px",
              }}
            >
              {apartment.guests}
            </div>

            <h3
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "1.9rem",
                fontWeight: 400,
                marginBottom: "15px",
                color: "#1b1b1b",
              }}
            >
              {apartment.name}
            </h3>

            <p
              style={{
                lineHeight: 1.8,
                color: "#555",
                marginBottom: "20px",
              }}
            >
              {apartment.description}
            </p>

            <a
              href="/apartments"
              style={{
                textDecoration: "none",
                color: "#111",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Explore Apartment →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
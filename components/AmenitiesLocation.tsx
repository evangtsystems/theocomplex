"use client";

import { useEffect, useState } from "react";

const amenities = [
  "Swimming Pool",
  "Free WiFi",
  "Free Parking",
  "Air Conditioning",
  "Close to Beach",
  "Self Check-in",
];

const distances = [
  ["Glyfada Beach", "5 min drive"],
  ["Pelekas Village", "10 min drive"],
  ["Corfu Town", "15 min drive"],
  ["Corfu Airport", "20 min drive"],
];

export default function AmenitiesLocation() {
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
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1.1fr 0.8fr",
        minHeight: "360px",
        color: "white",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: isMobile ? "55px 24px" : "70px 8%",
          background:
            "linear-gradient(rgba(25,31,24,0.88), rgba(25,31,24,0.88)), url('/images/amenities-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "1.5px",
          }}
        >
          AMENITIES
        </p>

        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: isMobile ? "2rem" : "2.4rem",
            lineHeight: 1.15,
            fontWeight: 400,
            marginBottom: "34px",
          }}
        >
          Everything You Need
          <br />
          for a Perfect Stay
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
            gap: isMobile ? "20px 16px" : "22px",
          }}
        >
          {amenities.map((item) => (
            <div key={item} style={{ fontSize: "0.88rem", lineHeight: 1.4 }}>
              <div style={{ fontSize: "1.4rem", marginBottom: "6px" }}>✦</div>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          padding: isMobile ? "55px 24px" : "70px 8%",
          background:
            "linear-gradient(rgba(20,33,34,0.75), rgba(20,33,34,0.75)), url('/images/location-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "1.5px",
          }}
        >
          PERFECT LOCATION
        </p>

        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: isMobile ? "2rem" : "2.4rem",
            lineHeight: 1.15,
            fontWeight: 400,
          }}
        >
          Close to Everything,
          <br />
          Far from Ordinary
        </h2>

        <p
          style={{
            maxWidth: "420px",
            lineHeight: 1.8,
            fontSize: "0.95rem",
            marginTop: "22px",
          }}
        >
          Located in a peaceful area, just minutes from beautiful beaches,
          traditional villages and Corfu Town.
        </p>

        <a
          href="/location"
          style={{
            display: "inline-block",
            marginTop: "18px",
            color: "white",
            textDecoration: "none",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "1.5px",
          }}
        >
          VIEW LOCATION →
        </a>
      </div>

      <div
        style={{
          background: "#eee7dd",
          color: "#1b1b1b",
          padding: isMobile ? "45px 24px" : "70px 45px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "22px",
        }}
      >
        {distances.map(([place, time]) => (
          <div
            key={place}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "18px",
              borderBottom: "1px solid rgba(0,0,0,0.12)",
              paddingBottom: "14px",
              fontSize: isMobile ? "0.88rem" : "0.9rem",
            }}
          >
            <strong>{place}</strong>
            <span style={{ whiteSpace: "nowrap" }}>{time}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
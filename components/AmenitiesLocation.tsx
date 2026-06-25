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
  ["Marathias Beach", "3–5 min drive"],
  ["Local Tavernas", "3–5 min drive"],
  ["Lake Korission", "20 min drive"],
  ["Lefkimmi Port", "20–25 min drive"],
  ["Corfu Airport", "40–45 min drive"],
  ["Corfu Town", "45–50 min drive"],
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
        gridTemplateColumns: isMobile ? "1fr" : "2.1fr 0.8fr",
        height: isMobile ? "auto" : "920px",
        color: "white",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          backgroundImage: "url('/images/marathias-beach.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#18211d",
        }}
      >
        <div
          style={{
            padding: isMobile ? "55px 24px" : "70px 8%",
            background: isMobile
  ? "linear-gradient(rgba(54,50,24,0.90), rgba(54,50,24,0.90))"
  : "linear-gradient(90deg, rgba(56,53,24,0.96) 0%, rgba(56,53,24,0.82) 55%, rgba(56,53,24,0.48) 100%)",
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
                <div
                  style={{
                    fontSize: "1.4rem",
                    marginBottom: "6px",
                    color: "#d6b46d",
                  }}
                >
                  ✦
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            padding: isMobile ? "55px 24px" : "70px 8%",
            background: isMobile
  ? "linear-gradient(rgba(12,39,55,0.92), rgba(12,39,55,0.92))"
  : "linear-gradient(90deg, rgba(12,39,55,0.48) 0%, rgba(12,39,55,0.78) 45%, rgba(12,39,55,0.96) 100%)",
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
              color: "rgba(255,255,255,0.9)",
            }}
          >
            Located in peaceful Marathias, Theo Complex places you close to
            South Corfu’s beaches, local tavernas, Corfu Town and the airport —
            while still feeling quiet, relaxed and away from the crowds.
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
              borderBottom: "1px solid rgba(255,255,255,0.55)",
              paddingBottom: "6px",
            }}
          >
            VIEW LOCATION →
          </a>
        </div>
      </div>

   <div
  style={{
    background: "#efe8dc",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: isMobile ? "35px 24px" : "45px 38px",
  }}
>
  <>
  <div style={{ marginBottom: "25px" }}>
    {distances.slice(0, 3).map(([place, time]) => (
      <div
        key={place}
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(0,0,0,0.12)",
          padding: "12px 0",
          fontSize: "0.9rem",
        }}
      >
       <strong
  style={{
    color: "#000",
    fontWeight: 700,
  }}
>
  {place}
</strong>
        <span
  style={{
    whiteSpace: "nowrap",
    color: "#1b1b1b",
    fontWeight: 600,
  }}
>
  {time}
</span>
      </div>
    ))}
  </div>

  <img
    src="/images/corfu-map.png"
    alt="Corfu Map"
    style={{
      width: "100%",
      display: "block",
      marginBottom: "25px",
    }}
  />

  <div>
    {distances.slice(3).map(([place, time]) => (
      <div
        key={place}
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(0,0,0,0.12)",
          padding: "12px 0",
          fontSize: "0.9rem",
        }}
      >
        <strong
  style={{
    color: "#000",
    fontWeight: 700,
  }}
>
  {place}
</strong>
        <span
  style={{
    whiteSpace: "nowrap",
    color: "#1b1b1b",
    fontWeight: 600,
  }}
>
  {time}
</span>
      </div>
    ))}
  </div>
</>
</div>
    </section>
  );
}
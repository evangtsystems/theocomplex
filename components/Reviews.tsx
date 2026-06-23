"use client";

import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Sarah J.",
    image: "/images/review-1.jpg",
    text: "Absolutely stunning place! Everything was perfect.",
  },
  {
    name: "James T.",
    image: "/images/review-2.jpg",
    text: "We loved every moment. The apartments are beautiful and so well designed.",
  },
  {
    name: "Maria K.",
    image: "/images/review-3.jpg",
    text: "The best stay in Corfu. Can't wait to come back next summer!",
  },
];

export default function Reviews() {
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
        padding: isMobile ? "60px 24px" : "80px 8%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? "20px" : "0",
          marginBottom: "40px",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "0.72rem",
              letterSpacing: "1.5px",
              fontWeight: 700,
            }}
          >
            GUEST REVIEWS
          </p>

          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: isMobile ? "2.2rem" : "3rem",
              fontWeight: 400,
              marginTop: "12px",
              lineHeight: 1.1,
              color: "#1b1b1b",
            }}
          >
            What Our Guests Say
          </h2>
        </div>

        <div
          style={{
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "1px",
          }}
        >
          VIEW ALL REVIEWS →
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)",
          gap: "25px",
        }}
      >
        {reviews.map((review) => (
          <div
            key={review.name}
            style={{
              background: "white",
              padding: isMobile ? "25px" : "35px",
              borderRadius: "6px",
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 5px 15px rgba(0,0,0,0.03)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginBottom: "20px",
              }}
            >
              <img
                src={review.image}
                alt={review.name}
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  color: "#c9a56a",
                  fontSize: "1rem",
                }}
              >
                ★★★★★
              </div>
            </div>

            <p
              style={{
                lineHeight: 1.8,
                marginBottom: "15px",
                color: "#444",
                fontSize: "0.95rem",
              }}
            >
              "{review.text}"
            </p>

            <strong
              style={{
                color: "#1b1b1b",
              }}
            >
              {review.name}
            </strong>
          </div>
        ))}
      </div>
    </section>
  );
}
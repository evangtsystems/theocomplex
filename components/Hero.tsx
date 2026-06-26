"use client";

import { useState } from "react";
import Header from "./Header";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section
        style={{
          position: "relative",
          height: "100vh",
          minHeight: "760px",
          backgroundImage: "url('/images/hero-landscape.png')",
          backgroundSize: "92%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#F7F4EF",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "4%",
            right: "4%",
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.10) 45%, rgba(0,0,0,0.18) 100%)",
          }}
        />

        <Header />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            alignItems: "center",
            paddingLeft: "13%",
            color: "white",
          }}
        >
          <div style={{ maxWidth: "620px" }}>
            <p
              style={{
                fontSize: "0.8rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              Not just a stay.
            </p>

            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(3.8rem, 6vw, 6.8rem)",
                lineHeight: "0.98",
                fontWeight: 400,
                margin: 0,
              }}
            >
              An Experience
              <br />
              to Remember.
            </h1>

            <p
              style={{
                fontSize: "1.25rem",
                lineHeight: 1.55,
                marginTop: "28px",
                marginBottom: "36px",
              }}
            >
              Three unique apartments.
              <br />
              Endless memories in Corfu.
            </p>

            <button
              onClick={() => setShowVideo(true)}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,.18)";
                e.currentTarget.style.borderColor =
                  "rgba(255,255,255,.55)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,.10)";
                e.currentTarget.style.borderColor =
                  "rgba(255,255,255,.28)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "18px",

                padding: "12px 28px",

                borderRadius: "999px",

                background: "rgba(255,255,255,.10)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",

                border: "1px solid rgba(255,255,255,.28)",

                boxShadow: "0 10px 35px rgba(0,0,0,.18)",

                color: "white",
                cursor: "pointer",

                textTransform: "uppercase",
                fontSize: ".78rem",
                letterSpacing: "2.5px",
                fontWeight: 700,

                transition: "all .35s ease",
              }}
            >
              <span
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,.75)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  flexShrink: 0,
                }}
              >
                ▶
              </span>

              WATCH THE FILM
            </button>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: "42px",
            bottom: "110px",
            zIndex: 3,
            color: "white",
            writingMode: "vertical-rl",
            fontSize: "0.7rem",
            letterSpacing: "3px",
            textTransform: "uppercase",
            opacity: 0.8,
          }}
        >
          Scroll
        </div>
      </section>

      {showVideo && (
        <div
          onClick={() => setShowVideo(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.88)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px",
          }}
        >
          <button
            onClick={() => setShowVideo(false)}
            style={{
              position: "absolute",
              top: "28px",
              right: "32px",
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "2.2rem",
              cursor: "pointer",
            }}
          >
            ×
          </button>

          <video
            src="/videos/theo-complex-film-web.mp4"
            controls
            autoPlay
            playsInline
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(100%,1100px)",
              maxHeight: "82vh",
              borderRadius: "18px",
              background: "black",
              boxShadow: "0 30px 90px rgba(0,0,0,.55)",
            }}
          />
        </div>
      )}
    </>
  );
}
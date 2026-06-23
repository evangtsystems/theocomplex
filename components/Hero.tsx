import Link from "next/link";
import Header from "./Header";


export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "760px",
        backgroundImage: "url('/images/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.45) 100%)",
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
              marginBottom: "32px",
            }}
          >
            Three unique apartments.
            <br />
            Endless memories in Corfu.
          </p>

          <Link
            href="/apartments"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              color: "white",
              textDecoration: "none",
              textTransform: "uppercase",
              fontSize: "0.75rem",
              letterSpacing: "2px",
              fontWeight: 700,
            }}
          >
            <span
              style={{
                width: "46px",
                height: "46px",
                border: "1px solid rgba(255,255,255,0.7)",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ▶
            </span>
            Watch the film
          </Link>
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
  );
}
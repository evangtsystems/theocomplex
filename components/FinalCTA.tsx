import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      style={{
        position: "relative",
        height: "420px",
        backgroundImage: "url('/images/cta-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          paddingLeft: "8%",
          color: "white",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "4rem",
              fontWeight: 400,
              marginBottom: "20px",
            }}
          >
            Your Corfu Escape Awaits
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              marginBottom: "35px",
            }}
          >
            Book your stay and create memories
            <br />
            that will last a lifetime.
          </p>

          <Link
            href="/contact"
            style={{
              display: "inline-block",
              background: "#c9a56a",
              color: "white",
              textDecoration: "none",
              padding: "18px 35px",
              borderRadius: "4px",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            CHECK AVAILABILITY
          </Link>
        </div>
      </div>
    </section>
  );
}
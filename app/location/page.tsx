import Header from "@/components/Header";
import Footer from "@/components/Footer";

const locations = [
  {
    name: "Villa Theo",
    lat: "39.4273063",
    lng: "19.9957696",
  },
  {
    name: "Theo Apartment",
    lat: "39.4272542",
    lng: "19.9957417",
  },
  {
    name: "Theo Two-Bedroom Apartment with Loft",
    lat: "39.4272183",
    lng: "19.9955022",
  },
];

export default function LocationPage() {
  const centerLat = "39.4272542";
  const centerLng = "19.9957417";

  return (
    <>
      <div style={{ position: "relative", background: "#0f1216", height: "100px" }}>
        <Header />
      </div>

      <main style={{ background: "#f7f4ef", minHeight: "100vh" }}>
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "1.5px" }}>
              LOCATION
            </p>

            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2.6rem, 6vw, 5rem)",
                fontWeight: 400,
                color: "#1b1b1b",
                marginBottom: "25px",
              }}
            >
              One Peaceful Location,
              <br />
              Three Unique Stays
            </h1>

            <p
              style={{
                maxWidth: "720px",
                lineHeight: 1.8,
                color: "#555",
                marginBottom: "45px",
              }}
            >
              Villa Theo, Theo Apartment, and Theo Two-Bedroom Apartment with
              Loft are located in the same building area, offering easy access
              to nearby beaches, local restaurants, and Corfu’s beautiful
              scenery.
            </p>

            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                height: "520px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
                marginBottom: "40px",
              }}
            >
              <iframe
                src={`https://www.google.com/maps?q=${centerLat},${centerLng}&hl=en&z=18&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "20px",
              }}
            >
              {locations.map((location) => (
                <a
                  key={location.name}
                  href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "white",
                    padding: "26px",
                    borderRadius: "8px",
                    border: "1px solid rgba(0,0,0,0.08)",
                    textDecoration: "none",
                    color: "#1b1b1b",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "1.5rem",
                      fontWeight: 400,
                      marginBottom: "10px",
                    }}
                  >
                    {location.name}
                  </h3>

                  <p style={{ color: "#555", margin: 0 }}>
                    Open in Google Maps →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
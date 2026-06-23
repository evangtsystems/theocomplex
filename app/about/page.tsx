import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <div
        style={{
          position: "relative",
          background: "#0f1216",
          height: "100px",
        }}
      >
        <Header />
      </div>

      <main
        style={{
          background: "#f7f4ef",
          minHeight: "100vh",
          padding: "80px 24px",
        }}
      >
        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#8d6b3f",
              marginBottom: "15px",
            }}
          >
            ABOUT US
          </p>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.8rem,6vw,5rem)",
              fontWeight: 400,
              color: "#1b1b1b",
              marginBottom: "35px",
            }}
          >
            Welcome to
            <br />
            Theo Apartments
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: "60px",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="/images/logo.png"
                alt="Theo Apartments"
                style={{
                  width: "100%",
                  maxWidth: "420px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>

            <div>
              <p
                style={{
                  lineHeight: 1.9,
                  color: "#555",
                  fontSize: "1.05rem",
                  marginBottom: "25px",
                }}
              >
                Theo Apartments is a collection of three carefully designed
                holiday accommodations located in one of Corfu's most peaceful
                areas.
              </p>

              <p
                style={{
                  lineHeight: 1.9,
                  color: "#555",
                  fontSize: "1.05rem",
                  marginBottom: "25px",
                }}
              >
                Whether you choose the spacious Villa Theo, the stylish
                Two-Bedroom Apartment with Loft, or the charming Apartment with
                Balcony, every stay has been designed to provide comfort,
                privacy, and an authentic Corfu experience.
              </p>

              <p
                style={{
                  lineHeight: 1.9,
                  color: "#555",
                  fontSize: "1.05rem",
                }}
              >
                Just minutes from beautiful beaches, traditional villages and
                Corfu Town, Theo Apartments offers the perfect balance between
                relaxation and exploration. We look forward to welcoming you and
                helping you create unforgettable memories on our beautiful
                island.
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: "90px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "25px",
            }}
          >
            {[
              ["3", "Unique Apartments"],
              ["10+", "Years of Hospitality"],
              ["5★", "Guest Experience"],
              ["Corfu", "Prime Location"],
            ].map(([number, text]) => (
              <div
                key={text}
                style={{
                  background: "white",
                  padding: "35px",
                  textAlign: "center",
                  borderRadius: "8px",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "3rem",
                    color: "#c9a56a",
                    marginBottom: "12px",
                  }}
                >
                  {number}
                </div>

                <div
                  style={{
                    color: "#555",
                    fontSize: "0.95rem",
                  }}
                >
                  {text}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
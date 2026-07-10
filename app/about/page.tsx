"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useComponentTranslations } from "@/i18n/useComponentTranslations";

export default function AboutPage() {
  const t = useComponentTranslations("aboutPage");

  const stats = [
  ["3", t.uniqueApartments],
  ["10+", t.yearsOfHospitality],
  ["5★", t.guestExperience],
  [t.corfu, t.primeLocation],
];

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
            {t.aboutUs}
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
            {t.welcomeTo}
            <br />
            {t.theoApartments}
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
                src="/images/villateo.webp"
               alt={t.imageAlt}
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
               {t.introParagraph}
              </p>

              <p
                style={{
                  lineHeight: 1.9,
                  color: "#555",
                  fontSize: "1.05rem",
                  marginBottom: "25px",
                }}
              >
                {t.apartmentsParagraph}
              </p>

              <p
                style={{
                  lineHeight: 1.9,
                  color: "#555",
                  fontSize: "1.05rem",
                }}
              >
                {t.locationParagraph}
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
            {stats.map(([number, text]) => (
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
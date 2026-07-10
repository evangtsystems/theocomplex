"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { useComponentTranslations } from "@/i18n/useComponentTranslations";
export default function ContactPage() {

  const t = useComponentTranslations("contactPage");
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
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
            gap: "70px",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "2px",
                color: "#8d6b3f",
                textTransform: "uppercase",
              }}
            >
              {t.contactUs}
            </p>

            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(3rem,6vw,5rem)",
                fontWeight: 400,
                marginTop: "15px",
                marginBottom: "30px",
                color: "#1b1b1b",
              }}
            >
              {t.headingLine1}
              <br />
              {t.headingLine2}
              <br />
              {t.headingLine3}
            </h1>

            <p
              style={{
                color: "#555",
                lineHeight: 1.9,
                fontSize: "1.05rem",
                marginBottom: "40px",
              }}
            >
              {t.introText}
            </p>

            <div style={{ lineHeight: 2.2 }}>
              <div>
                <strong>{t.email}</strong>
                <br />
                info@theocomplex.com
              </div>

              <br />

              <div>
                <strong>{t.location}</strong>
                <br />
                {t.corfuGreece}
              </div>

              <br />

              <div>
                <strong>{t.responseTime}</strong>
                <br />
                {t.usuallyWithin24Hours}
              </div>
            </div>
          </div>

          <div
            style={{
              background: "white",
              padding: "40px",
              borderRadius: "10px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
            }}
          >
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "15px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  fontSize: "1rem",
  outline: "none",
  background: "#fafafa",
};
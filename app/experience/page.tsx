"use client";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useComponentTranslations } from "@/i18n/useComponentTranslations";






export default function ExperiencePage() {

  

  const t = useComponentTranslations("experiencePage");

  const experiences = [
  {
    title: t.waterTitle,
    kicker: t.waterKicker,
    text: t.waterText,
    image: "/images/boattripl.webp",
  },
  {
    title: t.cuisineTitle,
    kicker: t.cuisineKicker,
    text: t.cuisineText,
    image: "/images/rouvelasdish.webp",
  },
  {
    title: t.hikingTitle,
    kicker: t.hikingKicker,
    text: t.hikingText,
    image: "/images/hikingtrails.webp",
  },
  {
    title: t.beachesTitle,
    kicker: t.beachesKicker,
    text: t.beachesText,
    image: "/images/aigordis.webp",
  },
  {
    title: t.wineTitle,
    kicker: t.wineKicker,
    text: t.wineText,
    image: "/images/theocomplexwinel.webp",
  },
];

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const check = () => setIsMobile(window.innerWidth <= 900);
  check();
  window.addEventListener("resize", check);
  return () => window.removeEventListener("resize", check);
}, []);
  return (
    <>
      <Header />

      <main style={{ background: "#f7f4ef", color: "#171717" }}>
        <section
          style={{
            minHeight: "72vh",
            padding: isMobile ? "130px 24px 70px" : "170px 8% 90px",
            background:
              "linear-gradient(90deg, rgba(0,0,0,.55), rgba(0,0,0,.18)), url('/images/aigordis.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ maxWidth: "760px" }}>
            <p
              style={{
                textTransform: "uppercase",
                letterSpacing: "3px",
                fontSize: ".78rem",
                fontWeight: 700,
                marginBottom: "22px",
              }}
            >
              {t.heroEyebrow}
            </p>

            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: isMobile ? "3.2rem" : "clamp(3.8rem, 7vw, 7rem)",
                lineHeight: ".95",
                fontWeight: 400,
                margin: 0,
              }}
            >
             {t.heroLine1}
<br />
{t.heroLine2}
            </h1>

            <p
              style={{
                marginTop: "30px",
                fontSize: "1.25rem",
                lineHeight: 1.7,
                maxWidth: "580px",
              }}
            >
              {t.heroText}
            </p>
          </div>
        </section>

        <section style={{ padding: isMobile ? "60px 24px" : "90px 8%" }}>
          {experiences.map((item, index) => {
            const reverse = index % 2 === 1;

            return (
              <div
                key={item.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
gap: isMobile ? "28px" : "70px",
marginBottom: isMobile ? "70px" : "110px",
                }}
              >
                <div style={{ order: isMobile ? 1 : reverse ? 2 : 1 }}>
                  <p
                    style={{
                      textTransform: "uppercase",
                      letterSpacing: "2.5px",
                      fontSize: ".72rem",
                      fontWeight: 700,
                      color: "#8a6a3f",
                      marginBottom: "18px",
                    }}
                  >
                    {item.kicker}
                  </p>

                  <h2
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "clamp(2.5rem, 4vw, 4.3rem)",
                      lineHeight: 1,
                      fontWeight: 400,
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </h2>

                  <p
                    style={{
                      marginTop: "26px",
                      fontSize: "1.05rem",
                      lineHeight: 1.85,
                      color: "#333",
                      maxWidth: "520px",
                    }}
                  >
                    {item.text}
                  </p>
                </div>

                <div
                  style={{
                    order: isMobile ? 2 : reverse ? 1 : 2,
                    height: isMobile ? "300px" : "520px",
                    borderRadius: "18px",
                    overflow: "hidden",
                    backgroundImage: `url('${item.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxShadow: "0 28px 70px rgba(0,0,0,.16)",
                  }}
                />
              </div>
            );
          })}
        </section>

        <section
          style={{
           margin: isMobile ? "0 24px 70px" : "0 8% 100px",
padding: isMobile ? "55px 24px" : "80px 8%",
            background: "#11151a",
            color: "white",
            textAlign: "center",
            borderRadius: "22px",
          }}
        >
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "3px",
              fontSize: ".75rem",
              color: "#c9a56a",
              fontWeight: 700,
            }}
          >
            {t.ctaEyebrow}
          </p>

          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.8rem, 5vw, 5rem)",
              fontWeight: 400,
              margin: "18px 0 24px",
            }}
          >
            {t.ctaTitle}
          </h2>

          <p
            style={{
              maxWidth: "660px",
              margin: "0 auto 34px",
              lineHeight: 1.8,
              opacity: 0.82,
              fontSize: "1.05rem",
            }}
          >
            {t.ctaText}
          </p>

          <Link
            href="/apartments"
            style={{
              display: "inline-block",
              background: "#c9a56a",
              color: "white",
              textDecoration: "none",
              padding: "16px 30px",
              borderRadius: "999px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: ".75rem",
              fontWeight: 700,
            }}
          >
            {t.ctaButton}
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
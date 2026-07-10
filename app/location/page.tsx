"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useComponentTranslations } from "@/i18n/useComponentTranslations";



export default function LocationPage() {

  const t = useComponentTranslations("locationPage");

  const locations = [
  {
    name: t.villaTheo,
    query: "39.4273063,19.9957696",
    mapsUrl:
      "https://www.google.com/maps/place/Villa+Theo/@39.4272638,19.9957461,55m/data=!3m1!1e3!4m15!1m5!3m4!2zMznCsDI1JzM4LjMiTiAxOcKwNTknNDQuOCJF!8m2!3d39.4273063!4d19.9957696!3m8!1s0x135c996a43164677:0x9a589f78910d86dc!5m2!4m1!1i2!8m2!3d39.4273063!4d19.9957696!16s%2Fg%2F11pz6mdz0v",
  },
  {
    name: t.theoApartment,
    query: "39.4272542,19.9957417",
    mapsUrl:
      "https://www.google.com/maps/place/Theo+apartment/@39.4271839,19.9955716,55m/data=!3m1!1e3!4m12!1m5!3m4!2zMznCsDI1JzM4LjEiTiAxOcKwNTknNDQuNyJF!8m2!3d39.4272542!4d19.9957417!3m5!1s0x135c990059471b47:0xf0ed7be58288e600!8m2!3d39.4272542!4d19.9957417!16s%2Fg%2F11y32mdwnk?entry=ttu&g_ep=EgoyMDI2MDYyOC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: t.theoTwoBedroomApartment,
    query: "Theo Two-Bedroom Apartment with Loft, Corfu",
    mapsUrl:
      "https://www.google.com/maps/place/Theo+Two-Bedroom+Apartment+with+Loft/@39.4272625,19.9957258,55m/data=!3m1!1e3!4m6!3m5!1s0x135c99007225d3a9:0x5c2578808c806e06!8m2!3d39.4272183!4d19.9955022!16s%2Fg%2F11yv_qpxc1?entry=ttu&g_ep=EgoyMDI2MDYyOC4wIKXMDSoASAFQAw%3D%3D",
  },
];
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <>
      <div style={{ position: "relative", background: "#0f1216", height: "100px" }}>
        <Header />
      </div>

      <main style={{ background: "#f7f4ef", minHeight: "100vh" }}>
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "1.5px" }}>
              {t.locationEyebrow}
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
              {t.headingLine1}
<br />
{t.headingLine2}
            </h1>

            <p
              style={{
                maxWidth: "720px",
                lineHeight: 1.8,
                color: "#555",
                marginBottom: "45px",
              }}
            >
              {t.description}
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
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  selectedLocation.query
                )}&hl=en&z=19&output=embed`}
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
                <button
                  key={location.name}
                  onClick={() => {
                    setSelectedLocation(location);
                    window.open(
                      location.mapsUrl,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                  style={{
                    background:
                      selectedLocation.name === location.name ? "#efe6d8" : "white",
                    padding: "26px",
                    borderRadius: "8px",
                    border: "1px solid rgba(0,0,0,0.08)",
                    color: "#1b1b1b",
                    cursor: "pointer",
                    textAlign: "left",
                    font: "inherit",
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
                    {t.showOnMap}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
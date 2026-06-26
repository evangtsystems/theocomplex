import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const experiences = [
  {
    title: "Life on the Water",
    kicker: "Boat Trips",
    text: "Explore Corfu from the sea. Swim in crystal-clear waters, discover quiet bays, and enjoy the Ionian coastline from a completely different perspective.",
    image: "/images/boattripl.png",
  },
  {
    title: "Authentic Greek Cuisine",
    kicker: "Local Flavours",
    text: "Fresh seafood, traditional dishes, local olive oil and warm Greek hospitality. Corfu is full of flavours that turn simple moments into memories.",
    image: "/images/rouvelasdish.png",
  },
  {
    title: "Hiking Through Nature",
    kicker: "Trails & Views",
    text: "Walk through olive groves, coastal paths, old villages and scenic viewpoints. The island rewards those who slow down and explore.",
    image: "/images/hikingtrails.webp",
  },
  {
    title: "Hidden Beaches & Coves",
    kicker: "Hidden Gems",
    text: "Beyond the famous beaches, Corfu hides peaceful coves, quiet corners and unforgettable views waiting to be discovered.",
    image: "/images/aigordis.jpg",
  },
  {
    title: "Wine, Culture & Sunset Moments",
    kicker: "Island Evenings",
    text: "Golden skies, village walks, local wine and relaxed summer evenings. Some moments in Corfu stay with you long after you leave.",
    image: "/images/theocomplexwinel.png",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <Header />

      <main style={{ background: "#f7f4ef", color: "#171717" }}>
        <section
          style={{
            minHeight: "72vh",
            padding: "170px 8% 90px",
            background:
              "linear-gradient(90deg, rgba(0,0,0,.55), rgba(0,0,0,.18)), url('/images/aigordis.jpg')",
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
              Experience Corfu
            </p>

            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(3.8rem, 7vw, 7rem)",
                lineHeight: ".95",
                fontWeight: 400,
                margin: 0,
              }}
            >
              Beyond
              <br />
              the Ordinary.
            </h1>

            <p
              style={{
                marginTop: "30px",
                fontSize: "1.25rem",
                lineHeight: 1.7,
                maxWidth: "580px",
              }}
            >
              Golden beaches, hidden coves, mountain trails, authentic flavors
              and unforgettable sunsets. Every day in Corfu offers a new story.
            </p>
          </div>
        </section>

        <section style={{ padding: "90px 8%" }}>
          {experiences.map((item, index) => {
            const reverse = index % 2 === 1;

            return (
              <div
                key={item.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "70px",
                  alignItems: "center",
                  marginBottom: "110px",
                }}
              >
                <div style={{ order: reverse ? 2 : 1 }}>
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
                    order: reverse ? 1 : 2,
                    height: "520px",
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
            margin: "0 8% 100px",
            padding: "80px 8%",
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
            Your Corfu Story Starts Here
          </p>

          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.8rem, 5vw, 5rem)",
              fontWeight: 400,
              margin: "18px 0 24px",
            }}
          >
            Stay close to everything.
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
            Whether you seek relaxation, adventure, culture or unforgettable
            moments by the sea, Theo Complex places you at the heart of Corfu.
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
            Explore Apartments
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
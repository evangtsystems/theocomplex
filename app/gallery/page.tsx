import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import discoverData from "@/public/discoverData.json";

const sections = [
  { title: "Outdoor Living", images: discoverData.outdoor },
  { title: "Kitchens", images: discoverData.kitchens },
  { title: "Bedrooms", images: discoverData.bedrooms },
  { title: "Bathrooms", images: discoverData.bathrooms },
  { title: "Living Spaces", images: discoverData.livingSpaces },
  { title: "Nearby Beach", images: discoverData.beach },
];

function ImageGrid({ images }: { images: string[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "16px",
      }}
    >
      {images.slice(0, 8).map((src, index) => (
        <div
          key={src}
          style={{
            position: "relative",
            height: index === 0 ? "360px" : "260px",
            borderRadius: "8px",
            overflow: "hidden",
            background: "#ddd",
          }}
        >
          <Image
            src={src}
            alt="Theo Collection"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
}

export default function GalleryPage() {
  const heroImage = discoverData.featured[0];

  return (
    <>
      <div style={{ position: "relative", background: "#0f1216", height: "100px" }}>
        <Header />
      </div>

      <main style={{ background: "#f7f4ef", minHeight: "100vh" }}>
        <section
          style={{
            position: "relative",
            minHeight: "520px",
            display: "flex",
            alignItems: "center",
            padding: "80px 24px",
            color: "white",
            overflow: "hidden",
          }}
        >
          {heroImage && (
            <Image
              src={heroImage}
              alt="Theo Collection"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          )}

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
              maxWidth: "1100px",
              margin: "0 auto",
              width: "100%",
            }}
          >
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "2px" }}>
              DISCOVER
            </p>

            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                fontWeight: 400,
                lineHeight: 1,
                margin: "20px 0",
              }}
            >
              The Theo Collection
            </h1>

            <p style={{ maxWidth: "560px", lineHeight: 1.8 }}>
              A curated visual journey through our three unique stays in Corfu.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "1.5px" }}>
              FEATURED MOMENTS
            </p>

            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 400,
                color: "#1b1b1b",
                marginBottom: "35px",
              }}
            >
              Every corner has a story.
            </h2>

            <ImageGrid images={discoverData.featured.slice(0, 12)} />
          </div>
        </section>

        {sections.map((section) => {
          if (!section.images.length) return null;

          return (
            <section key={section.title} style={{ padding: "20px 24px 80px" }}>
              <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <h2
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                    fontWeight: 400,
                    color: "#1b1b1b",
                    marginBottom: "30px",
                  }}
                >
                  {section.title}
                </h2>

                <ImageGrid images={section.images} />
              </div>
            </section>
          );
        })}

        <section
          style={{
            background: "#0f1216",
            color: "white",
            padding: "80px 24px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              fontWeight: 400,
              marginBottom: "20px",
            }}
          >
            Ready for your Corfu escape?
          </h2>

          <Link
            href="/contact"
            style={{
              display: "inline-block",
              marginTop: "20px",
              background: "#c9a56a",
              color: "white",
              padding: "16px 34px",
              textDecoration: "none",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            BOOK YOUR STAY
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
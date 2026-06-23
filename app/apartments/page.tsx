import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import imageData from "@/public/imageData.json";

export default function ApartmentsPage() {
  const apartments = [
    {
      title: imageData["villa-theo"].title,
      href: "/apartments/apartment-one",
      image: imageData["villa-theo"].allImages[0],
      description:
        "A spacious villa ideal for families and groups, with multiple rooms, outdoor areas, and easy access to the beach.",
    },
    {
      title: imageData["theo-two-bedroom-apartment-with-loft"].title,
      href: "/apartments/apartment-two",
      image: imageData["theo-two-bedroom-apartment-with-loft"].allImages[0],
      description:
        "A comfortable two-bedroom apartment with a loft, designed for relaxed stays and beautiful holiday moments.",
    },
    {
      title: imageData["theo-apartment-with-balcony"].title,
      href: "/apartments/apartment-three",
      image: imageData["theo-apartment-with-balcony"].allImages[0],
      description:
        "A charming apartment with balcony, perfect for couples or small families looking for comfort and calm.",
    },
  ];

  return (
    <>
      <div style={{ position: "relative", background: "#0f1216", height: "100px" }}>
        <Header />
      </div>

      <main style={{ background: "#f7f4ef", minHeight: "100vh", padding: "80px 24px" }}>
        <section style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "1.5px" }}>
            OUR COLLECTION
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
            Three Apartments Designed For You
          </h1>

          <p
            style={{
              maxWidth: "680px",
              lineHeight: 1.8,
              color: "#555",
              marginBottom: "50px",
            }}
          >
            Explore our three unique stays in Corfu, each designed to offer
            comfort, privacy and memorable island moments.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            {apartments.map((apartment) => (
              <Link
                key={apartment.href}
                href={apartment.href}
                style={{
                  textDecoration: "none",
                  color: "#1b1b1b",
                  background: "white",
                  borderRadius: "8px",
                  overflow: "hidden",
                  display: "block",
                }}
              >
                <div style={{ position: "relative", height: "340px" }}>
                  <Image
                    src={apartment.image}
                    alt={apartment.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div style={{ padding: "26px" }}>
                  <h2
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "1.8rem",
                      fontWeight: 400,
                      marginBottom: "15px",
                    }}
                  >
                    {apartment.title}
                  </h2>

                  <p style={{ lineHeight: 1.7, color: "#555", marginBottom: "20px" }}>
                    {apartment.description}
                  </p>

                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      letterSpacing: "1.2px",
                    }}
                  >
                    VIEW APARTMENT →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
"use client";

import Image from "next/image";

type CategoryData = {
  title: string;
  images: string[];
};

type ApartmentGalleryProps = {
  title: string;
  categories: Record<string, CategoryData>;
};

export default function ApartmentGallery({
  title,
  categories,
}: ApartmentGalleryProps) {
  return (
    <main style={{ background: "#f7f4ef", minHeight: "100vh" }}>
      <section style={{ padding: "120px 24px 60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            Gallery
          </p>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.6rem, 6vw, 5rem)",
              fontWeight: 400,
              color: "#1b1b1b",
              marginBottom: "20px",
            }}
          >
            {title}
          </h1>
        </div>
      </section>

      {Object.entries(categories).map(([key, category]) => {
        if (!category.images.length) return null;

        return (
          <section key={key} style={{ padding: "0 24px 70px" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 400,
                  color: "#1b1b1b",
                  marginBottom: "25px",
                }}
              >
                {category.title}
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "16px",
                }}
              >
                {category.images.map((src, index) => (
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
                      alt={`${title} - ${category.title} ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
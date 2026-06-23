const cards = [
  {
    title: "Peaceful Mornings",
    image: "/images/lifestyle-1.jpg",
  },
  {
    title: "Pool Life",
    image: "/images/lifestyle-2.jpg",
  },
  {
    title: "Golden Sunsets",
    image: "/images/lifestyle-3.jpg",
  },
  {
    title: "Hidden Beaches",
    image: "/images/lifestyle-4.jpg",
  },
];

export default function LifestyleSection() {
  return (
    <section
      style={{
        background: "#f7f4ef",
        padding: "70px 8%",
        display: "grid",
        gridTemplateColumns: "260px 1fr",
        gap: "60px",
        alignItems: "center",
      }}
    >
      <div>
        <p
          style={{
            fontSize: "0.72rem",
            textTransform: "uppercase",
            fontWeight: 700,
            letterSpacing: "1.5px",
            marginBottom: "22px",
          }}
        >
          The Corfu Feeling
        </p>

        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "2.7rem",
            lineHeight: 1.08,
            fontWeight: 400,
            margin: 0,
            color: "#1b1b1b",
          }}
        >
          Slow mornings.
          <br />
          Golden sunsets.
          <br />
          Pure freedom.
        </h2>

        <p
          style={{
            marginTop: "28px",
            lineHeight: 1.8,
            color: "#333",
            fontSize: "0.95rem",
          }}
        >
          Wake up to the sound of nature, enjoy your coffee with a view and let
          Corfu’s beauty slow down time.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "6px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              height: "360px",
              position: "relative",
              borderRadius: "4px",
              overflow: "hidden",
              backgroundImage: `url('${card.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.05))",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "18px",
                width: "100%",
                textAlign: "center",
                color: "white",
                fontSize: "0.8rem",
              }}
            >
              {card.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
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
              Contact Us
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
              We'd Love
              <br />
              to Hear
              <br />
              From You
            </h1>

            <p
              style={{
                color: "#555",
                lineHeight: 1.9,
                fontSize: "1.05rem",
                marginBottom: "40px",
              }}
            >
              Whether you have a question about one of our apartments,
              availability, or your upcoming stay in Corfu, we're always happy
              to help.
            </p>

            <div style={{ lineHeight: 2.2 }}>
              <div>
                <strong>Email</strong>
                <br />
                info@theocomplex.com
              </div>

              <br />

              <div>
                <strong>Location</strong>
                <br />
                Corfu, Greece
              </div>

              <br />

              <div>
                <strong>Response Time</strong>
                <br />
                Usually within 24 hours
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
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <input
                placeholder="Your Name"
                style={inputStyle}
              />

              <input
                type="email"
                placeholder="Email Address"
                style={inputStyle}
              />

              <input
                placeholder="Subject"
                style={inputStyle}
              />

              <textarea
                placeholder="Your Message"
                rows={7}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                }}
              />

              <button
                type="submit"
                style={{
                  background: "#c9a56a",
                  color: "white",
                  border: "none",
                  padding: "16px",
                  cursor: "pointer",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  borderRadius: "5px",
                  transition: ".25s",
                }}
              >
                Send Message
              </button>
            </form>
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
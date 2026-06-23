import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
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
            maxWidth: "900px",
            margin: "0 auto",
            color: "#1b1b1b",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "1.5px",
            }}
          >
            LEGAL INFORMATION
          </p>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              fontWeight: 400,
              marginBottom: "30px",
            }}
          >
            Privacy Policy
          </h1>

          <p style={{ lineHeight: 1.8 }}>
            This Privacy Policy explains how Corfu Escapes collects, uses, and
            protects your personal information when you use our website or
            contact us regarding accommodation inquiries.
          </p>

          <h2 style={{ marginTop: "40px" }}>Information We Collect</h2>

          <p style={{ lineHeight: 1.8 }}>
            We may collect your name, email address, phone number, travel dates,
            number of guests, and any message you send through our contact or
            booking inquiry forms.
          </p>

          <h2 style={{ marginTop: "40px" }}>How We Use Your Information</h2>

          <p style={{ lineHeight: 1.8 }}>
            We use your information only to respond to inquiries, manage booking
            requests, provide customer support, and improve our services.
          </p>

          <h2 style={{ marginTop: "40px" }}>Cookies</h2>

          <p style={{ lineHeight: 1.8 }}>
            Our website may use cookies to improve browsing experience, analyze
            website traffic, and remember basic preferences.
          </p>

          <h2 style={{ marginTop: "40px" }}>Data Sharing</h2>

          <p style={{ lineHeight: 1.8 }}>
            We do not sell your personal data. We may share information only
            when required to process your request, comply with legal
            obligations, or protect our business.
          </p>

          <h2 style={{ marginTop: "40px" }}>Data Security</h2>

          <p style={{ lineHeight: 1.8 }}>
            We take reasonable technical and organizational measures to protect
            your personal data from unauthorized access, misuse, or loss.
          </p>

          <h2 style={{ marginTop: "40px" }}>Your Rights</h2>

          <p style={{ lineHeight: 1.8 }}>
            You may request access, correction, or deletion of your personal
            data by contacting us.
          </p>

          <h2 style={{ marginTop: "40px" }}>Contact</h2>

          <p style={{ lineHeight: 1.8 }}>
            For privacy-related questions, contact us at:
            <strong> info@corfuescapes.com</strong>
          </p>

          <p
            style={{
              marginTop: "40px",
              fontSize: "0.9rem",
              opacity: 0.7,
            }}
          >
            Last updated: 2026
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
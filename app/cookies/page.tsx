
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function CookiesPage() {
  return (

    <>
  <div style={{ position: "relative", background: "#0f1216", height: "100px" }}>
    <Header />
  </div>
    <main style={{ background: "#f7f4ef", minHeight: "100vh", padding: "120px 24px 80px" }}>
      <section style={{ maxWidth: "900px", margin: "0 auto", color: "#1b1b1b" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "1.5px" }}>
          LEGAL INFORMATION
        </p>

        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 400 }}>
          Cookie Policy
        </h1>

        <p style={{ lineHeight: 1.8 }}>
          This Cookie Policy explains how Corfu Escapes may use cookies and similar technologies on this website.
        </p>

        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. They help websites function properly and improve user experience.
        </p>

        <h2>Types of Cookies We May Use</h2>
        <p>
          We may use essential cookies, analytics cookies, and preference cookies.
        </p>

        <h2>Essential Cookies</h2>
        <p>
          These cookies are necessary for the website to function correctly.
        </p>

        <h2>Analytics Cookies</h2>
        <p>
          These cookies help us understand how visitors use the website so we can improve content and performance.
        </p>

        <h2>Managing Cookies</h2>
        <p>
          You can control or delete cookies through your browser settings. Some parts of the website may not work properly if cookies are disabled.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about cookies, contact us at: <strong>info@corfuescapes.com</strong>
        </p>

        <p style={{ marginTop: "40px", fontSize: "0.9rem", opacity: 0.7 }}>
          Last updated: 2026
        </p>
      </section>
    </main>

    <Footer />
</>
  );
}
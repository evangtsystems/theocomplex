"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useComponentTranslations } from "@/i18n/useComponentTranslations";

export default function Footer() {
  const t = useComponentTranslations("footer");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 900);

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <footer
      style={{
        background: "#0f1216",
        color: "white",
        padding: isMobile ? "50px 24px" : "70px 8%",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "2fr 1fr 1fr 1fr",
          gap: isMobile ? "40px" : "50px",
        }}
      >
        <div>
         <Image
  src="/images/villateo.webp"
  alt="Corfu Escapes"
  width={180}
  height={70}
  className="logo"
 style={{
  width: isMobile ? "170px" : "210px",
  height: "auto",
  marginBottom: "20px",
  filter:
    "drop-shadow(0 0 18px rgba(255,255,255,.95)) drop-shadow(0 0 40px rgba(255,255,255,.75))",
}}
/>

          <p
            style={{
              lineHeight: 1.8,
              opacity: 0.8,
              maxWidth: "320px",
            }}
          >
           {t.descriptionLine1}
<br />
{t.descriptionLine2}
          </p>
        </div>

        <div>
          <h4 style={{ marginBottom: "15px" }}>{t.quickLinks}</h4>

          <p><Link href="/apartments">{t.apartments}</Link></p>
          <p><Link href="/gallery">{t.gallery}</Link></p>
          <p><Link href="/location">{t.location}</Link></p>
          <p><Link href="/contact">{t.contact}</Link></p>
        </div>

        <div>
          <h4 style={{ marginBottom: "15px" }}>{t.information}</h4>

          <p><Link href="/about">{t.about}</Link></p>
          <p><Link href="/house-rules">{t.houseRules}</Link></p>
          <p><Link href="/privacy-policy">{t.privacyPolicy}</Link></p>
          <p><Link href="/cookies">{t.cookiePolicy}</Link></p>
        </div>

        <div>
          <h4 style={{ marginBottom: "15px" }}>{t.contact}</h4>

          <p>+30 6992758885</p>
           <p>+30 6993113239</p>
          <p>info@theocomplex.com</p>
          <p>{t.corfuGreece}</p>
        </div>
      </div>

      <div
  style={{
    marginTop: "55px",
    paddingTop: "28px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    justifyContent: "flex-start",
    position: "relative",
    alignItems: "center",
    flexDirection: isMobile ? "column" : "row",
    gap: "20px",
  }}
>
  <div
    style={{
      fontSize: "0.85rem",
      opacity: 0.7,
      textAlign: isMobile ? "center" : "left",
    }}
  >
    © {new Date().getFullYear()} {t.allRightsReserved}
  </div>

  <div
  style={{
    position: isMobile ? "static" : "absolute",
    left: isMobile ? undefined : "50%",
    transform: isMobile ? undefined : "translateX(-50%)",
    textAlign: "center",
  }}
>
    <p
      style={{
        margin: "0 0 8px 0",
        fontSize: "0.72rem",
        letterSpacing: "2px",
        color: "rgba(255,255,255,.55)",
      }}
    >
      {t.designedHostedBy}
    </p>

    <a
      href="https://gtsystems.gr"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://gtsystems.gr/gtswh.gif"
        alt="GT Systems"
        style={{
          width: "180px",
          maxWidth: "100%",
        }}
      />
    </a>
  </div>
</div>
    </footer>
  );
}
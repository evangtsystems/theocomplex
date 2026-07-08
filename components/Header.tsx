"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageProvider";

export default function Header() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const links = [
    ["Apartments", "/apartments"],
    ["Experience", "/experience"],
    ["Location", "/location"],
    ["Gallery", "/gallery"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];

  const translatedLabels: Record<string, string> = {
    Apartments: lang === "el" ? "Διαμερίσματα" : "Apartments",
    Experience: lang === "el" ? "Εμπειρία" : "Experience",
    Location: lang === "el" ? "Τοποθεσία" : "Location",
    Gallery: "Gallery",
    About: lang === "el" ? "Σχετικά" : "About",
    Contact: lang === "el" ? "Επικοινωνία" : "Contact",
  };

  return (
    <header className="site-header">
      <Link href="/" className="logo">
        <Image
          src="/images/villateo.webp"
          alt="Villa Theo"
          width={300}
          height={269}
          priority
          className="header-logo"
        />
      </Link>

      {!isMobile && (
        <>
          <nav className="desktop-nav">
            {links.map(([label, href]) => (
              <Link key={label} href={href}>
                {translatedLabels[label]}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="book-btn">
            {lang === "el" ? "Κράτηση" : "Book Your Stay"}
          </Link>

          <div className="desktop-lang-switcher">
  <button onClick={() => setLang("en")}>EN</button>
  <span>/</span>
  <button onClick={() => setLang("el")}>EL</button>
</div>
        </>
      )}

      {isMobile && (
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      )}

      {isMobile && open && (
        <nav className="mobile-nav">
          {links.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}>
              {translatedLabels[label]}
            </Link>
          ))}

          <div className="mobile-lang-switcher">
            <button onClick={() => setLang("en")}>EN</button>
            <button onClick={() => setLang("el")}>EL</button>
          </div>
        </nav>
      )}
    </header>
  );
}
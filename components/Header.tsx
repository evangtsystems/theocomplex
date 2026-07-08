"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import { useComponentTranslations } from "@/i18n/useComponentTranslations";

export default function Header() {
  const { lang, setLang } = useLang();
  const t = useComponentTranslations("header");
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const links = [
  { label: t.apartments, href: "/apartments" },
  { label: t.experience, href: "/experience" },
  { label: t.location, href: "/location" },
  { label: t.gallery, href: "/gallery" },
  { label: t.about, href: "/about" },
  { label: t.contact, href: "/contact" },
];

  

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
           {links.map((link) => (
  <Link key={link.href} href={link.href}>
    {link.label}
  </Link>
))}
          </nav>

          <Link href="/contact" className="book-btn">
           {t.bookYourStay}
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
          {links.map((link) => (
  <Link
    key={link.href}
    href={link.href}
    onClick={() => setOpen(false)}
  >
    {link.label}
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
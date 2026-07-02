"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Apartments", "/apartments"],
    ["Experience", "/experience"],
    ["Location", "/location"],
    ["Gallery", "/gallery"],
    ["About", "/about"],
    ["Contact", "/contact"],
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

      <nav className="desktop-nav">
        {links.map(([label, href]) => (
          <Link key={label} href={href}>
            {label}
          </Link>
        ))}
      </nav>

      <Link href="/contact" className="book-btn">
        Book Your Stay
      </Link>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {open && (
        <nav className="mobile-nav">
          {links.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
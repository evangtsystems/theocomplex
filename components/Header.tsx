import Link from "next/link";
import Image from "next/image";

export default function Header() {
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
    src="/images/logo.webp"
    alt="Corfu Escapes"
    width={190}
    height={70}
    priority
    style={{
      width: "190px",
      height: "auto",
    }}
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

      <button className="menu-btn">☰</button>
    </header>
  );
}
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
     <Link
  href="/"
  className="logo"
  style={{
    position: "relative",
    top: "-20px",
    left: "-40px",
  }}
>
  <Image
  src="/images/villateo.png"
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

      <button className="menu-btn">☰</button>
    </header>
  );
}
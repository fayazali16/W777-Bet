"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/blog/w777-game-download/", label: "Download" },
  { href: "/blog/w777-bet-signup/", label: "Sign Up" },
  { href: "/blog/w777bet-game-deposit/", label: "Deposit" },
  { href: "/blog/w777bet-game-withdraw/", label: "Withdraw" },
  { href: "/blog/", label: "Blogs" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((o) => !o), []);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <Image
            src="/assets/images/w777-header-brand.webp"
            alt="W777 Bet Information Hub"
            width={440}
            height={80}
            fetchPriority="low"
            decoding="async"
            sizes="(max-width: 520px) 200px, (max-width: 900px) 240px, 220px"
            className="brand-image"
          />
          <span className="sr-only">W777 Bet Information Hub</span>
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={toggle}
        >
          Menu
        </button>
        <nav id="site-nav" aria-label="Primary">
          <ul className={`nav-list${open ? " is-open" : ""}`}>
            {nav.map(({ href, label }) => {
              const isHome = href === "/";
              const normalized = href.replace(/\/$/, "");
              const current = isHome
                ? pathname === "/" || pathname === ""
                : pathname === href ||
                  pathname === normalized ||
                  pathname.startsWith(`${normalized}/`);
              return (
                <li key={href}>
                  <Link href={href} aria-current={current ? "page" : undefined} onClick={() => setOpen(false)}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid footer-grid--wide">
        <div>
          <Link href="/" aria-label="W777 Bet home" className="footer-brand-link">
            <Image
              src="/assets/images/w777-footer-brand.webp"
              alt="W777 Bet"
              width={440}
              height={80}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 520px) 180px, 200px"
              className="footer-brand-image"
            />
          </Link>
        </div>
        <div>
          <h2>Pages</h2>
          <ul>
            <li>
              <Link href="/about-us/">About us</Link>
            </li>
            <li>
              <Link href="/contact/">Contact us</Link>
            </li>
            <li>
              <Link href="/blog/">Blog</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Explore</h2>
          <ul>
            <li>
              <Link href="/guide/">Platform guide</Link>
            </li>
            <li>
              <Link href="/faq/">FAQ</Link>
            </li>
            <li>
              <Link href="/responsible-gambling/">Responsible gambling</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Legal</h2>
          <ul>
            <li>
              <Link href="/disclaimer/">Disclaimer</Link>
            </li>
            <li>
              <Link href="/privacy-policy/">Privacy policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap legal-note">
        <p className="legal-home">
          <span aria-hidden>© 2026 </span>
          <span>W777 Bet</span>
        </p>
        <p>
          18+ only where permitted by law. Gambling can be addictive. If you or someone you know
          needs help, use the resources on our responsible gambling page.
        </p>
      </div>
    </footer>
  );
}

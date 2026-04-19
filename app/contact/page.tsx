import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { OG_DEFAULT_PATH } from "@/lib/seo-media";
import { getSiteUrl, SITE_NAME } from "@/lib/site";
import { ContactForm } from "./ContactForm";

const path = "/contact/";

const pageDescription =
  "Contact the W777 Bet Information Hub editorial team. Send questions about the site or suggest corrections. We do not operate betting services or handle player accounts.";

export const metadata: Metadata = {
  title: "Contact Us",
  description: pageDescription,
  robots: { index: false, follow: true },
  alternates: {
    canonical: `${getSiteUrl()}${path}`,
  },
  openGraph: {
    title: `Contact us | ${SITE_NAME}`,
    description: "Reach the editorial team via the contact form. Not for wagering or account support.",
    url: `${getSiteUrl()}${path}`,
    siteName: SITE_NAME,
    images: [
      {
        url: `${getSiteUrl()}${OG_DEFAULT_PATH}`,
        width: 1200,
        height: 630,
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact us | ${SITE_NAME}`,
    description: "Editorial contact only — not for wagering or account support.",
    images: [`${getSiteUrl()}${OG_DEFAULT_PATH}`],
  },
};

export default function ContactPage() {
  const base = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${base}/contact/#page`,
        url: `${base}/contact/`,
        name: "Contact us",
        description: pageDescription,
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "Contact", item: `${base}/contact/` },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd as unknown as Record<string, unknown>} />
      <main id="main" className="wrap blog-post-wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link> / Contact us
        </nav>
        <article className="prose page-article blog-article">
          <h1>Contact us</h1>
          <p>
            Use this form for questions about this <strong>informational website</strong>, typo
            reports, or licensing corrections. We are <strong>not</strong> a gambling operator and
            cannot help with logins, balances, bonuses, or disputes—contact your platform’s official
            support or regulator for those issues.
          </p>
          <ContactForm />
        </article>
      </main>
    </>
  );
}

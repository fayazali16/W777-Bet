import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { FaqAccordion } from "./FaqAccordion";
import { faqPageJsonLd } from "@/lib/jsonld";
import { OG_DEFAULT_PATH } from "@/lib/seo-media";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

const path = "/faq/";

export const metadata: Metadata = {
  title: "FAQ: W777 Bet, Online Betting Platforms & Safety | Structured Answers",
  description:
    "Frequently asked questions about W777 Bet as a search topic, online betting platforms, licensing, bonuses, payments, legality, and responsible gambling—with FAQ schema for search.",
  alternates: {
    canonical: `${getSiteUrl()}${path}`,
  },
  openGraph: {
    title: `FAQ | ${SITE_NAME}`,
    description: "Twelve+ structured Q&As on platforms, licensing, bonuses, and safety.",
    url: `${getSiteUrl()}${path}`,
    images: [
      {
        url: `${getSiteUrl()}${OG_DEFAULT_PATH}`,
        width: 1200,
        height: 630,
        alt: "W777 Bet Information Hub",
        type: "image/webp",
      },
    ],
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `FAQ | ${SITE_NAME}`,
    description: "Structured answers for search and assistants.",
    images: [`${getSiteUrl()}${OG_DEFAULT_PATH}`],
  },
};

export default function FaqPage() {
  const base = getSiteUrl();

  return (
    <>
      <JsonLd data={faqPageJsonLd(base) as unknown as Record<string, unknown>} />
      <main id="main" className="wrap blog-post-wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link> / FAQ
        </nav>

        <article className="prose page-article blog-article">
          <h1>Frequently asked questions about W777 Bet and online betting platforms</h1>
          <p className="section-sub">
            These Q&amp;As use <code>FAQPage</code> JSON-LD to support rich results and answer-style
            extraction. Expand any item below; the same text exists in structured data for crawlers.
          </p>

          <FaqAccordion />
        </article>
      </main>
    </>
  );
}

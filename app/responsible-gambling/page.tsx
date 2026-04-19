import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { responsiblePageJsonLd } from "@/lib/jsonld";
import { OG_DEFAULT_PATH } from "@/lib/seo-media";
import { getSiteUrl, LAST_MODIFIED, SITE_NAME } from "@/lib/site";

const path = "/responsible-gambling/";

export const metadata: Metadata = {
  title: "Responsible Gambling | W777 Bet Information Hub — Help, Self-Checks & Resources",
  description:
    "Responsible gambling: warning signs, budgeting, self-exclusion, cooling-off, and where to find confidential support. Independent resource—not a substitute for professional advice.",
  alternates: {
    canonical: `${getSiteUrl()}${path}`,
  },
  openGraph: {
    title: "Responsible gambling resources",
    description: "Warning signs, practical limits, and pathways to help for problem gambling.",
    url: `${getSiteUrl()}${path}`,
    images: [
      {
        url: `${getSiteUrl()}${OG_DEFAULT_PATH}`,
        width: 1200,
        height: 630,
        alt: "W777 Bet Information Hub — responsible gambling resources",
        type: "image/webp",
      },
    ],
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: "Responsible gambling",
    description: "Self-checks, limits, and support pathways.",
    images: [`${getSiteUrl()}${OG_DEFAULT_PATH}`],
  },
};

export default function ResponsibleGamblingPage() {
  const base = getSiteUrl();

  return (
    <>
      <JsonLd data={responsiblePageJsonLd(base) as unknown as Record<string, unknown>} />
      <main id="main" className="wrap blog-post-wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link> / Responsible gambling
        </nav>

        <article className="prose page-article blog-article">
          <h1>Responsible gambling: practical limits and where to get help</h1>
          <div className="meta-bar">
            <span>
              Last updated: <time dateTime={LAST_MODIFIED}>April 19, 2026</time>
            </span>
          </div>

          <p>
            <strong>Key point:</strong> Betting products are designed for entertainment. When they
            affect finances, relationships, or mental health, structured help works—delaying usually
            increases harm.
          </p>

          <h2>Warning signs to take seriously</h2>
          <ul className="check-list">
            <li>Chasing losses or borrowing to gamble.</li>
            <li>Hiding activity from people you trust.</li>
            <li>Neglecting sleep, work, or care responsibilities.</li>
            <li>Feeling irritable or anxious when trying to cut down.</li>
          </ul>

          <h2>Tools many regulated sites offer</h2>
          <p>
            Deposit caps, loss limits, session timers, reality checks, cooling-off periods, and
            self-exclusion are standard in many jurisdictions. Use them proactively—not only after
            problems appear.
          </p>

          <h2>How to find authoritative help</h2>
          <p>
            Search for your <strong>national or state gambling helpline</strong> or council on
            problem gambling. These organizations provide free, confidential guidance and can route
            you to treatment networks. Examples of global directories include:
          </p>
          <ul className="check-list">
            <li>
              <a href="https://www.begambleaware.org/" rel="noopener noreferrer">
                BeGambleAware
              </a>{" "}
              (UK information hub)
            </li>
            <li>
              <a href="https://www.ncpgambling.org/" rel="noopener noreferrer">
                National Council on Problem Gambling
              </a>{" "}
              (U.S. resources)
            </li>
            <li>
              <a href="https://www.gamblersanonymous.org/" rel="noopener noreferrer">
                Gamblers Anonymous
              </a>{" "}
              (peer support fellowship)
            </li>
          </ul>
          <p>
            Replace or supplement these with <em>local</em> services verified for your region—helpline
            numbers change, and the best resource is the one you can actually call today.
          </p>

          <h2>For crisis situations</h2>
          <p>
            If you or someone else is in immediate danger, contact local emergency services. For
            suicidal thoughts, use your country’s suicide prevention hotline or text line.
          </p>

          <p>
            <a href="#main" className="btn btn-ghost">
              ↑ Back to top of this page
            </a>
          </p>
        </article>
      </main>
    </>
  );
}

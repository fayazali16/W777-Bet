import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { OG_DEFAULT_PATH } from "@/lib/seo-media";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

const path = "/disclaimer/";

const pageDescription =
  "Disclaimer: no wagering services, no financial advice, no guarantee of accuracy; use official regulators for legal status. 18+ where permitted.";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: pageDescription,
  robots: { index: false, follow: true },
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: {
    title: `Disclaimer | ${SITE_NAME}`,
    description: pageDescription,
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
    title: `Disclaimer | ${SITE_NAME}`,
    description: pageDescription,
    images: [`${getSiteUrl()}${OG_DEFAULT_PATH}`],
  },
};

export default function DisclaimerPage() {
  const base = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${base}/disclaimer/#page`,
        url: `${base}/disclaimer/`,
        name: "Disclaimer",
        description: pageDescription,
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "Disclaimer", item: `${base}/disclaimer/` },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd as unknown as Record<string, unknown>} />
      <main id="main" className="wrap blog-post-wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link> / Disclaimer
        </nav>
        <article className="prose page-article blog-article">
          <h1>Disclaimer</h1>
          <p>
            <strong>General information only.</strong> Content on this website is for education and
            general discussion. It is not legal, financial, tax, or medical advice. Laws for online
            betting vary by country, state, and locality; consult qualified professionals and
            official government or regulator sources before you act.
          </p>
          <p>
            <strong>No operator relationship.</strong> We do not run gambling products, process
            payments for players, or act on behalf of any brand mentioned. Trademarks belong to their
            respective owners; mention of a name does not imply endorsement.
          </p>
          <p>
            <strong>No warranty.</strong> We aim for accuracy and clear dates, but information may
            become outdated or contain errors. Use the site at your own risk.
          </p>
          <p>
            <strong>Age and legality.</strong> Betting is restricted to adults where it is lawful.
            If you are not legally permitted to view this content where you are, you must leave.
          </p>
          <p>
            <strong>Responsible gambling.</strong> Gambling can be harmful. If you need help, use the
            Responsible gambling link under Explore in the site footer.
          </p>
        </article>
      </main>
    </>
  );
}

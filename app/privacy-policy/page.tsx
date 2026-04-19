import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { OG_DEFAULT_PATH } from "@/lib/seo-media";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

const path = "/privacy-policy/";

const pageDescription =
  "Privacy policy for W777 Bet Information Hub: what data this static informational site may process, cookies, analytics placeholders, and your choices.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: pageDescription,
  robots: { index: false, follow: true },
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: {
    title: `Privacy policy | ${SITE_NAME}`,
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
    title: `Privacy policy | ${SITE_NAME}`,
    description: pageDescription,
    images: [`${getSiteUrl()}${OG_DEFAULT_PATH}`],
  },
};

export default function PrivacyPolicyPage() {
  const base = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${base}/privacy-policy/#page`,
        url: `${base}/privacy-policy/`,
        name: "Privacy policy",
        description: pageDescription,
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Privacy policy",
            item: `${base}/privacy-policy/`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd as unknown as Record<string, unknown>} />
      <main id="main" className="wrap blog-post-wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link> / Privacy policy
        </nav>
        <article className="prose page-article blog-article">
          <h1>Privacy policy</h1>
          <p>
            This policy describes how the <strong>W777 Bet Information Hub</strong> website may
            handle information. This is a general template for a static Next.js site; adapt it with
            your legal counsel before production use.
          </p>
          <h2>Information we collect</h2>
          <p>
            If you use only the public pages, we may not intentionally collect personal data on the
            server. If you submit the contact form (linked under Pages in the site footer), we process the
            fields you send for the purpose of responding. In the stock configuration, messages are
            not emailed automatically—you must connect an email provider or ticketing system in code.
          </p>
          <h2>Hosting and logs</h2>
          <p>
            Your host (for example Vercel, Netlify, or another provider) may log IP addresses,
            timestamps, and URLs for security and reliability. Review your host’s privacy policy.
          </p>
          <h2>Cookies and analytics</h2>
          <p>
            This template does not require cookies for core reading. If you add analytics or ads,
            disclose the vendor, purpose, retention, and how users can opt out where required by law.
          </p>
          <h2>Retention</h2>
          <p>
            Retention periods depend on how you implement contact handling. Define them explicitly
            when you connect storage or email.
          </p>
          <h2>Your rights</h2>
          <p>
            Depending on your region (for example UK/EU GDPR, US state laws), you may have rights to
            access, correct, delete, or restrict processing of personal data. Provide a contact
            method for privacy requests when you operate commercially.
          </p>
          <h2>Children</h2>
          <p>
            This site discusses adult-only topics. It is not directed at children.
          </p>
          <h2>Changes</h2>
          <p>
            We may update this policy. The effective date should be revised when content changes
            materially.
          </p>
        </article>
      </main>
    </>
  );
}

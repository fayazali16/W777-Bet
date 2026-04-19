import type { Metadata } from "next";
import { HomeLongform, HOME_HERO_BRAND_SRC } from "@/components/home/HomeLongform";
import { JsonLd } from "@/components/JsonLd";
import { homePageJsonLd } from "@/lib/jsonld";
import { getSiteUrl } from "@/lib/site";

const META_TITLE = "W777 Bet Download – Play W777Bet Game on Android";
const META_DESCRIPTION =
  "Download the latest W777 Bet for Android and play classic W777Bet Game card games online. Free download, real rewards, and daily bonuses.";

const KEYWORDS = [
  "W777 Bet",
  "W777Bet Game APK download",
  "W777 Bet for Android",
  "W777Bet Game game",
  "W777 Bet real money",
  "W777 Bet card game",
  "W777Bet Game rules",
  "W777 Bet online",
];

export const metadata: Metadata = {
  alternates: {
    canonical: `${getSiteUrl()}/`,
  },
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: KEYWORDS,
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [
      {
        url: HOME_HERO_BRAND_SRC,
        width: 512,
        height: 512,
        alt: "W777 Bet logo — W777Bet Game APK for Android, online card game",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [HOME_HERO_BRAND_SRC],
  },
};

export default function HomePage() {
  const base = getSiteUrl();

  return (
    <>
      <JsonLd data={homePageJsonLd(base) as unknown as Record<string, unknown>} />
      <main id="main">
        <HomeLongform />
      </main>
    </>
  );
}

import { faqItems } from "./faq-data";
import { homeFaqItems } from "./home-faq-data";
import { homeScreenshots } from "./home-screenshots";
import {
  ABOUT_US_FEATURE_PATH,
  HOME_HERO_BRAND_SRC,
  OG_DEFAULT_PATH,
  ORG_LOGO_WEBP_PATH,
} from "./seo-media";
import { LAST_MODIFIED } from "./site";

/** Base URL with no trailing slash */
export function homePageJsonLd(base: string) {
  const faqMainEntity = homeFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));
  const screenshotMainEntity = homeScreenshots.map((image, index) => ({
    "@type": "ImageObject",
    "@id": `${base}/#screenshot-${image.id}`,
    name: image.name,
    description: image.description,
    contentUrl: `${base}${image.src}`,
    url: `${base}${image.src}`,
    width: image.width,
    height: image.height,
    caption: image.alt,
    representativeOfPage: index === 0,
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: "W777 Bet Information Hub",
        url: `${base}/`,
        logo: {
          "@type": "ImageObject",
          "@id": `${base}/#logo`,
          url: `${base}${ORG_LOGO_WEBP_PATH}`,
          width: 192,
          height: 192,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: `${base}/`,
        name: "W777 Bet Information Hub",
        description:
          "Download the latest W777 Bet for Android and play classic W777Bet Game card games online. Free download, real rewards, and daily bonuses.",
        publisher: { "@id": `${base}/#organization` },
        inLanguage: "en-US",
        copyrightHolder: { "@id": `${base}/#organization` },
      },
      {
        "@type": "ItemList",
        "@id": `${base}/#sitenav`,
        name: "Primary navigation",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: 6,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", url: `${base}/` },
          { "@type": "ListItem", position: 2, name: "Download", url: `${base}/blog/w777-game-download/` },
          { "@type": "ListItem", position: 3, name: "Sign Up", url: `${base}/blog/w777-bet-signup/` },
          { "@type": "ListItem", position: 4, name: "Deposit", url: `${base}/blog/w777bet-game-deposit/` },
          { "@type": "ListItem", position: 5, name: "Withdraw", url: `${base}/blog/w777bet-game-withdraw/` },
          { "@type": "ListItem", position: 6, name: "Blogs", url: `${base}/blog/` },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${base}/#webpage`,
        url: `${base}/`,
        name: "W777 Bet Download – Play W777Bet Game on Android",
        isPartOf: { "@id": `${base}/#website` },
        about: {
          "@type": "Thing",
          name: "W777 Bet",
          description:
            "W777 Bet Android APK and W777Bet Game — three-card Pakistani card game, download, rules, and online play.",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${base}${HOME_HERO_BRAND_SRC}`,
          width: 512,
          height: 512,
          caption: "W777 Bet — W777Bet Game APK download for Android",
        },
        dateModified: LAST_MODIFIED,
        inLanguage: "en-US",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#speakable-summary", "#quick-answer"],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${base}/#faq`,
        mainEntity: faqMainEntity,
      },
      {
        "@type": "ImageGallery",
        "@id": `${base}/#screenshots`,
        name: "W777 Bet Game Screenshots",
        about: { "@type": "Thing", name: "W777 Bet" },
        url: `${base}/#screenshots-gallery`,
        hasPart: screenshotMainEntity,
      },
    ],
  };
}

export function guidePageJsonLd(base: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: "W777 Bet Information Hub",
        url: `${base}/`,
        logo: {
          "@type": "ImageObject",
          url: `${base}${ORG_LOGO_WEBP_PATH}`,
          width: 192,
          height: 192,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: `${base}/`,
        name: "W777 Bet Information Hub",
        publisher: { "@id": `${base}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${base}/guide/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Platform guide",
            item: `${base}/guide/`,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${base}/guide/#webpage`,
        url: `${base}/guide/`,
        name: "How to evaluate an online betting platform",
        isPartOf: { "@id": `${base}/#website` },
        dateModified: LAST_MODIFIED,
        inLanguage: "en-US",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${base}${OG_DEFAULT_PATH}`,
          width: 1200,
          height: 630,
        },
      },
      {
        "@type": "Article",
        "@id": `${base}/guide/#article`,
        headline: "How to evaluate an online betting platform",
        description:
          "Educational framework for licensing, bonuses, security, and payments on digital betting sites.",
        author: { "@id": `${base}/#organization` },
        publisher: { "@id": `${base}/#organization` },
        dateModified: LAST_MODIFIED,
        mainEntityOfPage: { "@id": `${base}/guide/#webpage` },
        image: `${base}${OG_DEFAULT_PATH}`,
        inLanguage: "en-US",
        about: {
          "@type": "Thing",
          name: "Online gambling operator due diligence",
        },
      },
      {
        "@type": "HowTo",
        "@id": `${base}/guide/#howto`,
        name: "Evaluate an online betting platform",
        description:
          "Seven-step checklist to assess legality, licensing, bonuses, security, payments, support, and risk signals.",
        totalTime: "PT8M",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Confirm jurisdiction",
            text: "Before creating an account, confirm whether remote betting is permitted for you under current local law.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Verify the license",
            text: "Copy the license number from the operator footer and confirm it in the regulator’s public register.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Read bonus terms",
            text: "Extract wagering requirements, game weighting, time limits, and max bet rules before accepting an offer.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Check security basics",
            text: "Expect HTTPS, a clear privacy policy, optional two-factor authentication, and transparent KYC steps.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Review payments",
            text: "Compare withdrawal timelines, fees, limits, and reasons delays may occur.",
          },
          {
            "@type": "HowToStep",
            position: 6,
            name: "Assess support and disputes",
            text: "Confirm whether ADR or regulator escalation exists for account and balance disputes.",
          },
          {
            "@type": "HowToStep",
            position: 7,
            name: "Watch for red flags",
            text: "Opaque ownership, anonymous-only payments, guaranteed-profit claims, or pressure to deposit quickly are high-risk patterns.",
          },
        ],
      },
    ],
  };
}

export function faqPageJsonLd(base: string) {
  const mainEntity = faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: "W777 Bet Information Hub",
        url: `${base}/`,
        logo: {
          "@type": "ImageObject",
          url: `${base}${ORG_LOGO_WEBP_PATH}`,
          width: 192,
          height: 192,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: `${base}/`,
        name: "W777 Bet Information Hub",
        publisher: { "@id": `${base}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${base}/faq/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "FAQ", item: `${base}/faq/` },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${base}/faq/#webpage`,
        url: `${base}/faq/`,
        name: "FAQ: W777 Bet and online betting platforms",
        isPartOf: { "@id": `${base}/#website` },
        dateModified: LAST_MODIFIED,
        inLanguage: "en-US",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${base}${OG_DEFAULT_PATH}`,
          width: 1200,
          height: 630,
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#faq-list-title"],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${base}/faq/#faq`,
        mainEntity,
      },
    ],
  };
}

export function responsiblePageJsonLd(base: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: "W777 Bet Information Hub",
        url: `${base}/`,
        logo: {
          "@type": "ImageObject",
          url: `${base}${ORG_LOGO_WEBP_PATH}`,
          width: 192,
          height: 192,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: `${base}/`,
        name: "W777 Bet Information Hub",
        publisher: { "@id": `${base}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${base}/responsible-gambling/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Responsible gambling",
            item: `${base}/responsible-gambling/`,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${base}/responsible-gambling/#webpage`,
        url: `${base}/responsible-gambling/`,
        name: "Responsible gambling: help and resources",
        description:
          "Warning signs, budgeting, self-exclusion, and support resources for problem gambling.",
        isPartOf: { "@id": `${base}/#website` },
        dateModified: LAST_MODIFIED,
        inLanguage: "en-US",
        about: {
          "@type": "Thing",
          name: "Responsible gambling",
          description: "Risk-aware play, self-exclusion tools, and pathways to professional support.",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${base}${OG_DEFAULT_PATH}`,
          width: 1200,
          height: 630,
        },
      },
      {
        "@type": "ItemList",
        "@id": `${base}/responsible-gambling/#help-directories`,
        name: "Example international help directories (verify locally)",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "BeGambleAware",
            url: "https://www.begambleaware.org/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "National Council on Problem Gambling",
            url: "https://www.ncpgambling.org/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Gamblers Anonymous",
            url: "https://www.gamblersanonymous.org/",
          },
        ],
      },
    ],
  };
}

const ABOUT_PAGE_TITLE = "About Us – W777Bet Game Pakistan Platform";
const ABOUT_PAGE_DESCRIPTION =
  "About Us – Learn more about W777Bet Game, our mission, platform features, and commitment to providing a smooth gaming experience in Pakistan.";

export function aboutPageJsonLd(base: string) {
  const pageUrl = `${base}/about-us/`;
  const featureUrl = `${base}${ABOUT_US_FEATURE_PATH}`;
  const featureImage = {
    "@type": "ImageObject" as const,
    url: featureUrl,
    width: 1024,
    height: 576,
    caption: ABOUT_PAGE_TITLE,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: "W777 Bet Information Hub",
        url: `${base}/`,
        logo: {
          "@type": "ImageObject",
          "@id": `${base}/#logo`,
          url: `${base}${ORG_LOGO_WEBP_PATH}`,
          width: 192,
          height: 192,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: `${base}/`,
        name: "W777 Bet Information Hub",
        publisher: { "@id": `${base}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "AboutPage",
        "@id": `${pageUrl}#about`,
        url: pageUrl,
        name: ABOUT_PAGE_TITLE,
        description: ABOUT_PAGE_DESCRIPTION,
        inLanguage: "en-US",
        isPartOf: { "@id": `${base}/#website` },
        image: [featureUrl],
        primaryImageOfPage: featureImage,
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: ABOUT_PAGE_TITLE,
        description: ABOUT_PAGE_DESCRIPTION,
        isPartOf: { "@id": `${base}/#website` },
        primaryImageOfPage: featureImage,
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "About Us", item: pageUrl },
        ],
      },
    ],
  };
}

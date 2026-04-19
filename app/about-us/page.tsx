import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { aboutPageJsonLd } from "@/lib/jsonld";
import { ABOUT_US_FEATURE_PATH } from "@/lib/seo-media";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

const path = "/about-us/";

const META_TITLE = "About Us – W777Bet Game Pakistan Platform";
const META_DESCRIPTION =
  "About Us – Learn more about W777Bet Game, our mission, platform features, and commitment to providing a smooth gaming experience in Pakistan.";

const FEATURE_IMAGE_URL = `${getSiteUrl()}${ABOUT_US_FEATURE_PATH}`;

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  keywords: ["About Us", "W777Bet Game", "Pakistan", "W777BetGame.com.pk"],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: `${getSiteUrl()}${path}`,
    siteName: SITE_NAME,
    images: [
      {
        url: FEATURE_IMAGE_URL,
        width: 1024,
        height: 576,
        alt: "About Us – W777Bet Game Pakistan Platform feature image",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [FEATURE_IMAGE_URL],
  },
};

export default function AboutUsPage() {
  const base = getSiteUrl();

  return (
    <>
      <JsonLd data={aboutPageJsonLd(base) as unknown as Record<string, unknown>} />
      <main id="main" className="wrap blog-post-wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link> / About Us
        </nav>
        <article className="prose page-article blog-article">
          <h1>About Us – W777Bet Game Platform</h1>
          <p>
            Welcome to W777BetGame.com.pk, your trusted destination for online gaming information and guides in
            Pakistan. This About Us page gives you a clear understanding of who we are, what we offer, and why
            thousands of users rely on our platform for accurate and updated content.
          </p>
          <p>
            We are dedicated to providing users with helpful guides related to <strong>W777Bet Game</strong>,
            including download tutorials, signup steps, deposit methods, and withdrawal processes. Our goal is to
            simplify everything so that users can easily understand and access the platform without confusion.
          </p>
          <p>
            For step-by-step help, read our{" "}
            <Link href="/blog/w777-game-download/">W777 Game Download APK guide</Link>,{" "}
            <Link href="/blog/w777-bet-signup/">W777 Bet signup tutorial</Link>,{" "}
            <Link href="/blog/w777bet-game-deposit/">deposit methods article</Link>, and{" "}
            <Link href="/blog/w777bet-game-withdraw/">withdraw walkthrough</Link>. For rules, safety, and
            tables, use the <strong>Home</strong> link in the breadcrumb or site header.
          </p>

          <h2>Our Mission</h2>
          <p>
            At <strong>W777Bet Game</strong>, our mission is to deliver clear, reliable, and user-friendly content
            for players in Pakistan. Through this About Us section, we aim to show our commitment to transparency,
            accuracy, and user satisfaction.
          </p>
          <p>We focus on:</p>
          <ul>
            <li>Providing step-by-step guides for beginners</li>
            <li>Sharing updated information about features and processes</li>
            <li>Making complex procedures simple and easy to follow</li>
            <li>Ensuring users get a smooth and hassle-free experience</li>
          </ul>

          <h2>What We Offer</h2>
          <p>This About Us page highlights the core services we provide to our users:</p>
          <ol>
            <li>
              <strong>Download Guides</strong>
              <p>
                We provide complete instructions to help users safely download and install the app on their devices.
              </p>
            </li>
            <li>
              <strong>Signup Tutorials</strong>
              <p>Our platform offers easy-to-follow registration guides for new users.</p>
            </li>
            <li>
              <strong>Deposit and Withdrawal Guides</strong>
              <p>We explain how users can manage their funds with simple steps and useful tips.</p>
            </li>
            <li>
              <strong>Latest Updates</strong>
              <p>We keep our content updated so users always have access to the latest information.</p>
            </li>
          </ol>

          <h2>Why Choose Us?</h2>
          <p>
            There are many platforms online, but this About Us section explains why W777BetGame.com.pk stands out:
          </p>
          <ul>
            <li>Simple and easy-to-understand content</li>
            <li>Regular updates and accurate information</li>
            <li>Designed specifically for Pakistani users</li>
            <li>Focus on user experience and clarity</li>
          </ul>
          <p>
            We believe that providing high-quality information builds trust and long-term relationships with our
            audience.
          </p>

          <h2>Our Commitment to Users</h2>
          <p>Through this About Us page, we want to ensure our users that we are committed to:</p>
          <ul>
            <li>Delivering authentic and helpful content</li>
            <li>Maintaining user privacy and safety</li>
            <li>Continuously improving our website</li>
            <li>Providing a smooth browsing experience</li>
          </ul>
          <p>
            Our team works consistently to make sure all guides and information remain clear, relevant, and easy to
            follow.
          </p>

          <h2>Disclaimer</h2>
          <p>
            W777BetGame.com.pk is an informational platform. We do not directly operate any games or financial
            services. Users are advised to verify details and use official applications or websites when accessing any
            services.
          </p>

          <h2>Conclusion</h2>
          <p>
            This About Us page reflects our vision to become a reliable source of information for{" "}
            <strong>W777Bet Game</strong> users in Pakistan. We aim to simplify the user journey by offering clear
            guides, updated content, and a user-friendly experience.
          </p>
          <p>Thank you for visiting W777BetGame.com.pk and trusting us as your go-to resource.</p>
        </article>
      </main>
    </>
  );
}

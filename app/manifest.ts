import type { MetadataRoute } from "next";
import { SITE_NAME, THEME_COLOR } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "W777 Info",
    description:
      "Independent informational resource on W777 Bet and online betting platform topics.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0c1117",
    theme_color: THEME_COLOR,
    icons: [
      {
        src: "/assets/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/assets/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}

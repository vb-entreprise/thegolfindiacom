import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${siteConfig.name} - Experience World-Class Golf Tours Across Asia`,
  description: "Experience world-class golf tours and tournaments across Asia's most beautiful destinations. Championship courses, luxury accommodations, and unforgettable cultural experiences.",
  keywords: [
    "golf tours",
    "golf vacations",
    "golf packages",
    "luxury golf",
    "golf destinations",
    "golf holidays",
    "golf travel",
    "Asia golf tours",
    "golf tournaments",
    "The Golf India",
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} - Experience World-Class Golf Tours Across Asia`,
    description: "Experience world-class golf tours and tournaments across Asia's most beautiful destinations. Championship courses, luxury accommodations, and unforgettable cultural experiences.",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Experience World-Class Golf Tours Across Asia`,
    description: "Experience world-class golf tours and tournaments across Asia's most beautiful destinations. Championship courses, luxury accommodations, and unforgettable cultural experiences.",
    creator: "@thegolfindia",
  },
}; 
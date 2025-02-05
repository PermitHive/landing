import { Metadata } from "next";

const APP_NAME = "PermitHive";
const APP_DESCRIPTION =
  "Streamline your permitting process with PermitHive - The intelligent platform that simplifies permit applications, tracking, and management for construction and development projects.";

export const siteConfig = {
  name: APP_NAME,
  description: APP_DESCRIPTION,
  url: "https://permithive.com",
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  authors: [{ name: "PermitHive Team" }],
  generator: "Next.js",
  keywords: [
    "permit management",
    "construction permits",
    "building permits",
    "permit tracking",
    "permit application",
    "construction management",
    "development permits",
    "permit automation",
    "permit workflow",
    "regulatory compliance",
  ],
  creator: "PermitHive",
  publisher: "PermitHive",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: APP_NAME,
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: APP_DESCRIPTION,
    creator: "@permithive",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

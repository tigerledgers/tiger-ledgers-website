import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { WebSiteSchema } from "@/components/seo/WebSiteSchema";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Tiger Ledgers — Strategic Financial Leadership",
    template: "%s | Tiger Ledgers",
  },
  description:
    "Accounting, tax, fractional CFO, and AI-enabled finance operations for small businesses, eCommerce, freelancers, and SaaS startups in USA & India.",
  metadataBase: new URL("https://tigerledgers.com"),
  keywords: [
    "fractional CFO",
    "accounting services",
    "tax filing",
    "small business accounting",
    "eCommerce accounting",
    "SaaS startup finance",
    "freelancer accounting",
    "financial leadership",
    "AI-enabled finance",
    "financial operations",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tigerledgers.com",
    siteName: "Tiger Ledgers",
    title: "Tiger Ledgers — Strategic Financial Leadership",
    description:
      "Accounting, tax, fractional CFO, and AI-enabled finance operations for growing businesses. Serving USA & India.",
    images: [
      {
        url: "/assets/hero-3.avif",
        width: 1200,
        height: 630,
        alt: "Tiger Ledgers — Strategic Financial Leadership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tigerledgers",
    creator: "@tigerledgers",
    title: "Tiger Ledgers — Strategic Financial Leadership",
    description:
      "Accounting, tax, fractional CFO, and AI-enabled finance operations for growing businesses.",
    images: ["/assets/hero-3.avif"],
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
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>
        <OrganizationSchema />
        <WebSiteSchema />
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}

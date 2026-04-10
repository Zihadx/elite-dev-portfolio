import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";

import {
  AmbientGlow,
  CustomCursor,
  FloatingNav,
  NoiseOverlay,
  PageLoader,
} from "@/components/layout";
import { site } from "@/data";

import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    "Full-stack developer",
    "Next.js",
    "TypeScript",
    "React",
    "Portfolio",
    "Software engineer",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    url: siteUrl,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#06060f" },
    { media: "(prefers-color-scheme: light)", color: "#06060f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: siteUrl,
    sameAs: [site.social.github, site.social.linkedin, site.social.twitter],
  };

  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-[100dvh] font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="fixed left-4 top-4 z-[220] -translate-y-24 rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white opacity-0 transition focus:translate-y-0 focus:opacity-100"
        >
          Skip to content
        </a>
        <PageLoader />
        <NoiseOverlay />
        <AmbientGlow />
        <CustomCursor />
        <FloatingNav />
        {children}
      </body>
    </html>
  );
}

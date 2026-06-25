import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { profile } from "@/lib/data";
import { siteUrl } from "@/lib/site";

const GA_ID = "G-H2VZKMQVSQ";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s · ${profile.name}`,
  },
  description: profile.metaDescription,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  keywords: [
    "Nodirbek Sharipov",
    "Nodir Sharipov",
    "Lead Full-Stack Engineer",
    "Senior Software Engineer",
    "React Native developer",
    "Next.js developer",
    "Node.js engineer",
    "TypeScript",
    "mobile app developer",
    "Uzbekistan software engineer",
    "Tashkent developer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title,
    description: profile.metaDescription,
    siteName: profile.name,
    locale: "en_US",
    firstName: "Nodirbek",
    lastName: "Sharipov",
    username: "nodir_dev",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.metaDescription,
    creator: "@nodir_dev",
    site: "@nodir_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#0b0a09",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} antialiased`}
    >
      <body className="grain min-h-dvh">{children}</body>
      <GoogleAnalytics gaId={GA_ID} />
    </html>
  );
}

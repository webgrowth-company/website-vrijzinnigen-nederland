import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const TITLE =
  "Vrijzinnigen Nederland, ruimte voor zingeving, verbinding en vrij denken";
const DESCRIPTION = SITE.description;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: TITLE,
    template: "%s | Vrijzinnigen Nederland",
  },
  description: DESCRIPTION,
  keywords: [
    "Vrijzinnigen Nederland",
    "vrijzinnig",
    "zingeving",
    "religieus humanisme",
    "vrijzinnig geloof",
    "levensbeschouwing",
    "ontmoeting en inspiratie",
    "vrij denken",
    "vrijzinnige gemeente",
    "bezinning",
  ],
  alternates: { canonical: "/" },
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  applicationName: SITE.name,
  category: "society",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf6ef" },
    { media: "(prefers-color-scheme: dark)", color: "#221f1c" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}

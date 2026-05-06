import type { Metadata } from "next";
import { Fraunces, Cormorant_Garamond, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forum Coffee — We. Talk. Coffee.",
  description:
    "A neighbourhood specialty café on Broadway, Chippendale. Slow-pulled espresso, morning pastries from local bakers, and lunches built for the long table.",
  openGraph: {
    title: "Forum Coffee — We. Talk. Coffee.",
    description:
      "A neighbourhood specialty café on Broadway, Chippendale, Sydney.",
    url: "https://forumcoffee.com.au",
    siteName: "Forum Coffee",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${cormorant.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

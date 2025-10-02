import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NeoBoss Concepts | Innovative Tech, Design & Digital Solutions",
    template: "%s | NeoBoss Concepts",
  },
  description:
    "NeoBoss Concepts is a forward-thinking tech and design hub delivering creative solutions in software development, digital media, branding, and business innovation.",
  keywords: [
    "NeoBoss",
    "NeoBoss Concepts",
    "tech solutions",
    "software development",
    "branding",
    "digital design",
    "startup studio",
    "Kenya",
    "Africa",
  ],
  openGraph: {
    title: "NeoBoss Concepts | Tech & Creative Hub",
    description:
      "Innovative software, branding, and digital solutions by NeoBoss Concepts.",
    url: "https://neobossconcepts.com",
    siteName: "NeoBoss Concepts",
    images: [
      {
        url: "https://neobossconcepts.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "NeoBoss Concepts Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeoBoss Concepts | Tech & Creative Hub",
    description:
      "Innovative software, branding, and digital solutions by NeoBoss Concepts.",
    images: ["https://neobossconcepts.com/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

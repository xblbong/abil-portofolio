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
  title: "Sabilah Mudrikah | Frontend Developer",
  description:
    "Portofolio profesional Sabilah Mudrikah, ahli dalam React, Next.js, dan 3D Web Development.",
  keywords: [
    "Sabilah Mudrikah",
    "Frontend Developer",
    "Next.js Developer",
    "Web Developer Indonesia",
  ],

  openGraph: {
    title: "Sabilah Mudrikah | Frontend Developer",
    description:
      "Portofolio profesional Sabilah Mudrikah, ahli dalam React, Next.js, dan 3D Web Development.",
    url: "https://domain-kamu.com",
    siteName: "Sabilah Mudrikah Portfolio",
    images: [
      {
        url: "https://domain-kamu.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sabilah Mudrikah Portfolio",
      },
    ],
    locale: "id_ID",
    type: "website",
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

import type { Metadata } from "next";
import "./globals.css";
import PageLoader from "../components/ui/PageLoader";
import Providers from "../components/providers/Providers";
import { Roboto } from "next/font/google";

const googleSans = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-google-sans",
  display: "swap",
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
    url: "https://abil-portofolio-six.vercel.app/",
    siteName: "Sabilah Mudrikah Portfolio",
    images: [
      {
        url: "/image/me.JPG",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S8BZSHMF1Y"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S8BZSHMF1Y');
            `,
          }}
        />
      </head>
      <body className={`${googleSans.variable} antialiased`}>
        <Providers>
          <PageLoader minDuration={1000} />
          {children}
        </Providers>
      </body>
    </html>
  );
}

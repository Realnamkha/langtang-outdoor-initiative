import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Langtang Outdoor Initiative",
  description:
    "Langtang Outdoor Initiative (LOI) — locally led trekking, expeditions, cultural tours, and adventures in the Langtang Valley, Nepal.",
  metadataBase: new URL("https://www.langtangoutdoorinitiative.com"),
  openGraph: {
    title: "Langtang Outdoor Initiative",
    description:
      "Locally led trekking, expeditions, and cultural tours in Langtang Valley, Nepal.",
    url: "https://www.langtangoutdoorinitiative.com",
    siteName: "Langtang Outdoor Initiative",
    images: [
      {
        url: "/logo_final.jpg",
        width: 800,
        height: 800,
        alt: "Langtang Outdoor Initiative Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  interactiveWidget: "resizes-content",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Langtang Outdoor Initiative",
  url: "https://www.langtangoutdoorinitiative.com",
  logo: "https://www.langtangoutdoorinitiative.com/logo_final.jpg",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+977-9843023847",
    contactType: "customer service",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Langtang",
    addressCountry: "NP",
  },
  sameAs: ["https://wa.me/+9779761662049"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

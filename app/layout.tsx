import type { Metadata } from "next";
import { Poppins, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n-context";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Familia Pușcaș - Legume Proaspete din Ocolis | Fresh Vegetables",
  description: "Legume proaspete direct de la producător din Ocolis, Maramureș. Roșii, ardei, vânăte și multe altele. | Fresh vegetables directly from the producer in Ocolis, Maramureș.",
  keywords: "legume, Ocolis, Maramureș, Baia Mare, roșii, ardei, vânăte, Familia Pușcaș, fresh vegetables, tomatoes, peppers",
  authors: [{ name: "Familia Pușcaș" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Familia Pușcaș - Legume Proaspete din Ocolis",
    description: "Legume proaspete direct de la producător din Ocolis, Maramureș",
    url: "https://legumeocolis.ro",
    siteName: "Familia Pușcaș",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Legume proaspete Familia Pușcaș",
      },
    ],
    locale: "ro_RO",
    type: "website",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${poppins.variable} ${schibstedGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}

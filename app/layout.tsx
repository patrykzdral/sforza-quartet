import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

const baseUrl = 'https://sforza-quartet.pl';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Kwartet smyczkowy - Wrocław - Sforza Quartet",
    template: "%s | Sforza Quartet",
  },
  description: "Profesjonalny kwartet smyczkowy z Wrocławia oferujący ekskluzywną oprawę muzyczną ślubów, bankietów, koncertów i imprez okolicznościowych.",
  keywords: [
    "kwartet smyczkowy",
    "kwartet smyczkowy Wrocław",
    "muzyka na ślub",
    "oprawa muzyczna wesela",
    "kwartet na bankiet",
    "muzyka klasyczna Wrocław",
    "Sforza Quartet",
  ],
  authors: [{ name: "Sforza Quartet" }],
  creator: "Sforza Quartet",
  publisher: "Sforza Quartet",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: baseUrl,
  },
  manifest: '/manifest.json',
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: baseUrl,
    siteName: "Sforza Quartet",
    title: "Kwartet smyczkowy - Wrocław - Sforza Quartet",
    description: "Profesjonalny kwartet smyczkowy z Wrocławia oferujący ekskluzywną oprawę muzyczną ślubów, bankietów, koncertów i imprez okolicznościowych.",
    images: [
      {
        url: '/images/quartet.svg',
        width: 1200,
        height: 630,
        alt: 'Sforza Quartet - Profesjonalny kwartet smyczkowy z Wrocławia',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${playfair.variable} ${lato.variable} antialiased bg-black text-white selection:bg-gold-500 selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}

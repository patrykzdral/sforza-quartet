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

export const metadata: Metadata = {
  title: "Sforza Quartet | Kwartet smyczkowy",
  description: "Profesjonalny kwartet smyczkowy oferujący ekskluzywną oprawę muzyczną ślubów, bankietów i imprez okolicznościowych.",
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

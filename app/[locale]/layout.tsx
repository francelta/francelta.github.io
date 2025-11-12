import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "../globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Fran Carrasco - Portafolio",
  description: "Portafolio de desarrollo impulsado por IA",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${GeistMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}

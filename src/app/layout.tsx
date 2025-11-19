import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BRAND } from "@/lib/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRAND.fullName}`,
  description:
    "Luxury makeup and hair services at Tinas Makeover. Book now for premium glam experiences.",
  metadataBase: new URL("https://tinasmakeover.com"),
  openGraph: {
    title: BRAND.fullName,
    description:
      "Luxury makeup and hair services with expert stylists. View our gallery and book via WhatsApp.",
    url: "https://tinasmakeover.com",
    siteName: BRAND.name,
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
        className={`${montserrat.variable} ${playfair.variable} font-sans antialiased bg-background text-ink flex min-h-screen flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

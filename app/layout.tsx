import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // Updated font import
import "./globals.css";
import { Navigation } from "@/components/Layout/Navigation";
import { Footer } from "@/components/Layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] }); // Initialize Plus Jakarta Sans

export const metadata: Metadata = {
  title: "Credstone",
  description: " Your Real Housing Solution",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' }
    ],
  },
  openGraph: {
    title: "Credstone",
    description: "Your Real Housing Solution 🚀",
    images: [{
      url: 'http://audujoshua.vercel.app/og-image.png',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Credstone",
    description: "Your Real Housing Solution 🚀",
    images: ['http://audujoshua.vercel.app/og-image.png'],
  },
  
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navigation />
      <body className={plusJakartaSans.className}>{children}</body> {/* Updated to use Plus Jakarta Sans */}
      <Footer />
    </html>
  );
}

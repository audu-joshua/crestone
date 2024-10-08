import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // Updated font import
import "./globals.css";
import { Navigation } from "@/components/Layout/Navigation";
import { Footer } from "@/components/Layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] }); // Initialize Plus Jakarta Sans

export const metadata: Metadata = {
  title: "Credstone",
  description: "Generated by create next app",
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

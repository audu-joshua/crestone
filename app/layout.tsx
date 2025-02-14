import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/context/AuthContext"

const inter = Inter({ subsets: ["latin"] })

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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <AuthProvider>
        {children}
      </AuthProvider>
        </body>
    </html>
  )
}


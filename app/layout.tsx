import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "DCYPHERNET | Digital Solutions & AI Business Automation",
  description:
    "Premium digital solutions and AI business automation. We design systems that grow businesses through automation, web development, and strategic consulting.",
  keywords: ["AI automation", "business automation", "web development", "digital solutions", "branding", "DCYPHERNET"],
  authors: [{ name: "DCYPHERNET" }],
  openGraph: {
    title: "DCYPHERNET | Digital Solutions & AI Business Automation",
    description: "Premium digital solutions and AI business automation. We design systems that grow businesses.",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#4B1E78",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        <div className="noise-overlay" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

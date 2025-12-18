import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Tântalo — Curadoria Bibliográfica Premium",
  description:
    "A primeira plataforma de curadoria bibliográfica que transforma leitura em conhecimento permanente através do método Zettelkasten",
  generator: "v0.app",
  keywords: ["curadoria bibliográfica", "zettelkasten", "leitura", "conhecimento", "transformação intelectual"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  themeColor: "#2C2C2C",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

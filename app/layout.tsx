import type { Metadata } from 'next'
import { Cormorant_Garamond } from "next/font/google"
import './globals.css'

export const metadata: Metadata = {
  title: 'ANKUR',
  description: 'Created by OS',
  generator: 'Next.js',
  applicationName: 'ANKUR',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.variable} font-cormorant`}>{children}</body>
    </html>
  )
}

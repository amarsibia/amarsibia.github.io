import type React from "react"
import "./globals.css"
import { Manrope } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Manrope({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL('https://amarsibia.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': 'https://amarsibia.com',
    },
  },
  title: "Amar Sibia - Engineering Leader & Tech Innovator",
  description: "Personal website of Amar Sibia, Head of Engineering at Openr. Experienced in software architecture, team leadership, and technical innovation.",
  keywords: ["Engineering Leader", "Tech Innovator", "Software Architecture", "Team Leadership", "Technical Innovation", "Amar Sibia"],
  openGraph: {
    title: "Amar Sibia - Engineering Leader & Tech Innovator",
    description: "Personal website of Amar Sibia, Head of Engineering at Openr",
    type: "website",
    locale: "en_US",
    siteName: "Amar Sibia",
    url: 'https://amarsibia.com',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    title: "Amar Sibia - Engineering Leader & Tech Innovator",
    description: "Personal website of Amar Sibia, Head of Engineering at Openr",
    site: '@amarsibia', // Add your Twitter handle if you have one
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
  verification: {
    google: "verification_token", // Add your Google Search Console verification token
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
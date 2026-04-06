import type React from "react"
import "./globals.css"
import { Manrope } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

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
  description: "Personal website of Amar Sibia, Head of Engineering at Openr. 17 years building and leading engineering teams. Fractional CTO for seed-stage founders.",
  keywords: ["Engineering Leader", "Tech Innovator", "Software Architecture", "Team Leadership", "Technical Innovation", "Amar Sibia", "Head of Engineering", "Fractional CTO"],
  authors: [{ name: "Amar Sibia", url: "https://amarsibia.com" }],
  openGraph: {
    title: "Amar Sibia - Engineering Leader & Tech Innovator",
    description: "17 years building and leading engineering teams. Head of Engineering at Openr. Fractional CTO for seed-stage founders.",
    type: "website",
    locale: "en_US",
    siteName: "Amar Sibia",
    url: 'https://amarsibia.com',
    images: [
      {
        url: '/images/profile.webp',
        width: 800,
        height: 800,
        alt: 'Amar Sibia - Engineering Leader',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amar Sibia - Engineering Leader & Tech Innovator",
    description: "17 years building and leading engineering teams. Head of Engineering at Openr. Fractional CTO for seed-stage founders.",
    images: ['/images/profile.webp'],
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
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Amar Sibia",
  "url": "https://amarsibia.com",
  "image": "https://amarsibia.com/images/profile.webp",
  "sameAs": [
    "https://www.linkedin.com/in/amarsibia/",
    "https://amarsibia.substack.com",
  ],
  "jobTitle": "Head of Engineering",
  "worksFor": {
    "@type": "Organization",
    "name": "Openr",
  },
  "description": "Engineering leader with 17 years of experience building and leading teams across startups and global enterprises. Head of Engineering at Openr, Fractional CTO for seed-stage founders.",
  "knowsAbout": [
    "Software Architecture",
    "Engineering Leadership",
    "Team Building",
    "Technical Innovation",
    "Digital Transformation",
  ],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Amar Sibia",
  "url": "https://amarsibia.com",
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:rounded focus:shadow-lg"
          >
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
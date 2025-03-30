import type { Metadata, Viewport } from "next";
import { Geist as GeistSans, Geist_Mono as GeistMono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Script from 'next/script';

const geistSans = GeistSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = GeistMono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "FM Agency | Design. Strategy. Growth.",
    template: "%s | FM Agency"
  },
  description: "Sydney-based creative and digital agency specializing in web design, digital marketing, branding, and creator services.",
  keywords: ["web design", "digital marketing", "branding", "SEO", "Sydney", "creative agency", "YouTube growth", "social media"],
  metadataBase: new URL("https://fm-agency.net"),
  openGraph: {
    title: "FM Agency | Design. Strategy. Growth.",
    description: "Sydney-based creative and digital agency specializing in web design, digital marketing, branding, and creator services.",
    url: "https://fm-agency.net",
    siteName: "FM Agency",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FM Agency | Design. Strategy. Growth.",
    description: "Sydney-based creative and digital agency specializing in web design, digital marketing, branding, and creator services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary flex flex-col min-h-screen`}
      >
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'FM Agency',
              url: 'https://fm-agency.net',
              logo: 'https://fm-agency.net/logo.png',
              description: 'Sydney-based creative and digital agency specializing in web design, digital marketing, branding, and creator services.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Sydney',
                addressRegion: 'NSW',
                addressCountry: 'AU'
              },
              email: 'admin@fm-agency.net',
              telephone: '',
              sameAs: [
                'https://www.facebook.com/profile.php?id=61560581825288',
                'https://www.instagram.com/fmagencyofficial/',
                'https://www.linkedin.com/company/fm-agency1/'
              ],
              priceRange: '$$',
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday'
                ],
                opens: '09:00',
                closes: '17:00'
              },
              makesOffer: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Web Design',
                    description: 'Professional web design services for businesses of all sizes.'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Digital Marketing',
                    description: 'Comprehensive digital marketing services including SEO, SEM, and social media marketing.'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Branding',
                    description: 'Complete branding solutions including logo design, brand identity, and brand strategy.'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Creator Services',
                    description: 'Specialized services for content creators including YouTube growth strategies and content optimization.'
                  }
                }
              ]
            })
          }}
        />
        <div className="flex-grow bg-primary">
          {/* No spacer is added here, we'll add it directly to the other page components */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

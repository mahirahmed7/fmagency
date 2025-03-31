import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import { Suspense } from 'react';
import ClientLayout from '../components/ClientLayout';
import { Metadata, Viewport } from 'next';
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000'
};

export const metadata: Metadata = {
  title: 'FM Agency | Creative Digital Agency Sydney',
  description: 'FM Agency is Sydney\'s premium creative and digital agency specializing in web design, digital marketing, branding, and creator services.',
  keywords: 'digital agency, web design, digital marketing, branding, Sydney, creative agency',
  authors: [{ name: 'FM Agency' }],
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16' },
      { url: '/favicon-32x32.png', sizes: '32x32' },
      { url: '/android-chrome-192x192.png', sizes: '192x192' },
      { url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ],
    shortcut: ['/favicon-32x32.png']
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link
          rel="preload"
          href="/images/logos/logonew.png"
          as="image"
          type="image/png"
        />
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com" 
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous" 
        />
      </head>
      <body className="bg-primary text-white">
        <Suspense fallback={<LoadingScreen />}>
          <ClientLayout>
            {children}
          </ClientLayout>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}

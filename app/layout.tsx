import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import { Suspense } from 'react';
import ClientLayout from '../components/ClientLayout';
import { Metadata } from 'next';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  title: 'FM Agency | Creative Digital Agency Sydney',
  description: 'FM Agency is Sydney\'s premium creative and digital agency specializing in web design, digital marketing, branding, and creator services.',
  keywords: 'digital agency, web design, digital marketing, branding, Sydney, creative agency',
  authors: [{ name: 'FM Agency' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#111827',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-32x32.png'
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
      </body>
    </html>
  );
}

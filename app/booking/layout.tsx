import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000'
};

export const metadata: Metadata = {
  title: 'Book a Call | FM Agency',
  description: 'Schedule a free consultation call with FM Agency to discuss your project needs.',
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 
import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Book a Call | FM Agency',
  description: 'Schedule a free consultation call with FM Agency to discuss your project needs.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#111827',
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 
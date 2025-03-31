import { Metadata } from 'next';

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
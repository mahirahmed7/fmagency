import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'FM Agency | Design. Strategy. Growth.',
  description: 'Sydney-based creative and digital agency specializing in web design, digital marketing, branding, and creator services.',
  keywords: ['web design', 'digital marketing', 'branding', 'Sydney', 'creative agency', 'YouTube growth'],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-primary flex-grow pt-20">
        <Hero />
        <ServicesSection />
        <TestimonialsSection />
        <ContactCTA />
        
        {/* Connector to footer - ensures smooth transition */}
        <div className="bg-primary h-8"></div>
      </main>
    </>
  );
}

'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  index: number;
}

const ServiceCard = ({ title, description, icon, link, index }: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`tech-card opacity-0 ${
        isVisible ? 'animate-slide-up opacity-100' : ''
      }`}
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 text-secondary">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-text-light mb-6">{description}</p>
      <Link 
        href={link}
        className="inline-flex items-center font-medium text-secondary hover:text-secondary/80 transition-all duration-300"
      >
        Learn More
        <svg
          className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </Link>
    </div>
  );
};

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const services = [
    {
      title: 'Web Design & Development',
      description: 'Clean, responsive websites that convert visitors into customers. Built with performance and SEO in mind.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: '/services#web',
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic SEO, paid ads, and conversion funnels that drive targeted traffic and generate real results.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      link: '/services#digital',
    },
    {
      title: 'Branding & Strategy',
      description: 'Compelling brand identities that tell your story and connect with your audience on a deeper level.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      link: '/services#branding',
    },
    {
      title: 'Creator Services',
      description: 'YouTube channel growth, content strategy, and social media support to build your digital presence.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      link: '/services#creators',
    },
  ];

  return (
    <section ref={sectionRef} className="section py-20 bg-primary relative overflow-hidden">
      {/* Circuit Background */}
      <div className="absolute inset-0 w-full h-full opacity-5">
        <div className="absolute inset-0 bg-circuit-pattern bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-6 text-white ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}
          >
            Our <span className="glow-text-cyan">Services</span>
          </h2>
          <p 
            className={`text-lg text-text-light ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            We offer a complete range of creative and digital services to help your business stand out, connect with customers, and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              index={index}
            />
          ))}
        </div>

        <div className={`text-center mt-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <Link href="/services" className="btn btn-secondary">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 
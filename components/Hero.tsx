'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
      style={{ 
        '--mouse-x': '0.5', 
        '--mouse-y': '0.5',
      } as React.CSSProperties}
    >
      {/* Circuit Background */}
      <div className="absolute inset-0 w-full h-full opacity-10">
        <div className="absolute inset-0 bg-circuit-pattern bg-repeat opacity-20"></div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute left-0 top-0 bg-gradient-radial from-secondary/20 to-transparent" 
          style={{ 
            transform: 'translate(calc(var(--mouse-x) * 40px - 20px), calc(var(--mouse-y) * 40px - 20px))',
            width: '60%',
            height: '60%',
            borderRadius: '50%',
            filter: 'blur(120px)',
            opacity: '0.6',
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div 
          className="absolute right-0 bottom-0 bg-gradient-radial from-accent/20 to-transparent" 
          style={{ 
            transform: 'translate(calc((1 - var(--mouse-x)) * 40px - 20px), calc((1 - var(--mouse-y)) * 40px - 20px))',
            width: '60%',
            height: '60%',
            borderRadius: '50%',
            filter: 'blur(120px)',
            opacity: '0.5',
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block">
              Where <span className="glow-text-cyan">Ideas</span> Become <span className="glow-text-red">Impact</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-light max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Sydney's premium creative and digital agency specializing in web design, digital marketing, branding, and creator services.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <Link href="/contact" className="btn btn-primary text-center sm:text-left">
              Start Your Project
            </Link>
            <Link href="/portfolio" className="btn btn-secondary text-center sm:text-left">
              View Our Work
            </Link>
          </div>

          <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <div className="w-auto mx-auto">
              <Image
                src="/images/logos/logonew.png"
                alt="FM Agency"
                width={240}
                height={80}
                className="mx-auto animate-pulse-slow"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center animate-bounce slow text-center">
        <p className="text-sm mb-2 text-text-light">Scroll to explore</p>
        <svg 
          className="w-5 h-5 text-secondary" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero; 
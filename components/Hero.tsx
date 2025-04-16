'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseMoveThrottleRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        if (entries && entries.length > 0 && entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: '50px'
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || mouseMoveThrottleRef.current) return;

      mouseMoveThrottleRef.current = setTimeout(() => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = heroRef.current!.getBoundingClientRect();
        
        const x = (clientX - left) / width;
        const y = (clientY - top) / height;
        
        setMousePosition({ x, y });
        mouseMoveThrottleRef.current = null;
      }, 50); // Throttle to 50ms
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      observer.disconnect();
      document.removeEventListener('mousemove', handleMouseMove);
      if (mouseMoveThrottleRef.current) {
        clearTimeout(mouseMoveThrottleRef.current);
        mouseMoveThrottleRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary will-change-transform"
    >
      {/* Circuit Background */}
      <div className="absolute inset-0 w-full h-full opacity-10">
        <div className="absolute inset-0 bg-circuit-pattern bg-repeat opacity-20"></div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute left-0 top-0 bg-gradient-radial from-secondary/20 to-transparent will-change-transform" 
          style={{ 
            transform: `translate(calc(${mousePosition.x} * 40px - 20px), calc(${mousePosition.y} * 40px - 20px))`,
            width: '60%',
            height: '60%',
            borderRadius: '50%',
            filter: 'blur(120px)',
            opacity: '0.6',
            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
        <div 
          className="absolute right-0 bottom-0 bg-gradient-radial from-accent/20 to-transparent will-change-transform" 
          style={{ 
            transform: `translate(calc((1 - ${mousePosition.x}) * 40px - 20px), calc((1 - ${mousePosition.y}) * 40px - 20px))`,
            width: '60%',
            height: '60%',
            borderRadius: '50%',
            filter: 'blur(120px)',
            opacity: '0.5',
            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 reveal-on-scroll ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <span className="inline-block">
              Where <span className="glow-text-cyan">Ideas</span> Become <span className="glow-text-red">Impact</span>
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-text-light max-w-3xl mx-auto mb-10 reveal-on-scroll ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            Sydney's premium creative and digital agency specializing in web design, digital marketing, branding, and creator services.
          </p>
          
          <div className={`flex flex-col sm:flex-row justify-center gap-4 mt-12 reveal-on-scroll ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
            <Link href="/contact" className="btn btn-primary text-center sm:text-left">
              Start Your Project
            </Link>
            <Link href="/portfolio" className="btn btn-secondary text-center sm:text-left">
              View Our Work
            </Link>
          </div>

          <div className={`mt-16 reveal-on-scroll ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.7s' }}>
            <div className="w-auto mx-auto">
              <Image
                src="/images/logos/WordArtW.png"
                alt="FM Agency Values"
                width={600}
                height={600}
                className="mx-auto animate-pulse-slow"
                priority
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Scroll Indicator */}
      <div className={`absolute bottom-10 left-0 right-0 flex flex-col items-center animate-bounce slow text-center reveal-on-scroll ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.9s' }}>
        <p className="text-sm mb-2 text-text-light">Scroll to explore</p>
        <svg 
          className="w-5 h-5 text-secondary" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
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
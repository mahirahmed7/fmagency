'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

const ContactCTA = () => {
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
      { threshold: 0.2 }
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

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary overflow-hidden">
        {/* Circuit Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-circuit-pattern bg-repeat opacity-10"></div>
        </div>

        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-secondary/30 blur-[100px]"></div>
          <div className="absolute top-[60%] left-[60%] w-[30%] h-[30%] rounded-full bg-accent/30 blur-[80px]"></div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 
            className={`text-3xl md:text-5xl font-bold mb-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}
          >
            Let's Build Something <span className="glow-text-cyan">Great</span> Together
          </h2>
          
          <p 
            className={`text-lg md:text-xl text-text-light mb-10 max-w-2xl mx-auto ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            Ready to elevate your brand, create an impactful digital presence, and drive real business results? We're here to make it happen.
          </p>
          
          <div className={`flex flex-col sm:flex-row justify-center gap-5 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <Link 
              href="/contact" 
              className="btn bg-secondary text-white hover:bg-secondary/90 shadow-[0_0_15px_rgba(6,182,212,0.5)] transform hover:scale-105 transition-all"
            >
              Book a Free Strategy Call
            </Link>
            
            <Link 
              href="/services" 
              className="btn bg-transparent backdrop-blur-sm text-white border border-secondary/30 hover:border-secondary/80 hover:bg-secondary/10 transform hover:scale-105 transition-all"
            >
              Explore Our Services
            </Link>
          </div>
          
          <p 
            className={`mt-8 text-text-light text-sm ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
          >
            No pressure. Just a friendly conversation about your goals and how we might help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA; 
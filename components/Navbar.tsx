'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/80 backdrop-blur-md shadow-[0_5px_15px_rgba(0,0,0,0.3)] py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/images/logos/logonew.png" 
              alt="FM Agency" 
              width={120} 
              height={40} 
              priority
              className="transition-all duration-300 hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <Link href="/" className="text-white hover:text-secondary transition-all duration-300">
              Home
            </Link>
            <Link href="/services" className="text-white hover:text-secondary transition-all duration-300">
              Services
            </Link>
            <Link href="/portfolio" className="text-white hover:text-secondary transition-all duration-300">
              Portfolio
            </Link>
            <Link href="/about" className="text-white hover:text-secondary transition-all duration-300">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-secondary transition-all duration-300">
              Contact
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <Link href="/contact" className="btn btn-primary">
              Start Your Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2 rounded-lg hover:bg-secondary/10 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`fixed inset-0 w-full h-full ${isOpen ? 'z-[60] visible' : 'invisible'} transition-all duration-500`} 
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        {/* Overlay with grid background */}
        <div 
          className={`fixed inset-0 bg-[#0A0A0A]/95 backdrop-blur-md transition-all duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        >
          {/* Grid Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0" 
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(6, 182, 212, 0.5) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(6, 182, 212, 0.5) 1px, transparent 1px)
                `,
                backgroundSize: '15px 15px',
                animation: 'gridFloat 15s linear infinite',
                opacity: 0.2
              }}
            />
            {/* Animated Gradient Background */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.4), rgba(10, 10, 10, 0.1))',
                filter: 'blur(100px)',
                animation: 'gradientMove 15s ease infinite',
                transform: 'translateZ(0)'
              }}
            />
          </div>
        </div>
        
        {/* Menu Panel */}
        <div 
          className={`fixed inset-0 w-full overflow-hidden bg-[#0A0A0A]/95 backdrop-blur-2xl shadow-2xl transform transition-all duration-500 ease-out ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div className="flex flex-col h-full relative z-10 max-w-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-secondary/20">
              <Link href="/" className="relative">
                <Image 
                  src="/images/logos/logonew.png" 
                  alt="FM Agency" 
                  width={80} 
                  height={80} 
                  priority
                  className="transition-all duration-300 hover:opacity-80"
                />
                <span className="absolute -inset-2 bg-secondary/10 blur-xl rounded-lg"></span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-lg hover:bg-secondary/10 transition-all duration-300 text-secondary hover:scale-110 relative group"
                aria-label="Close menu"
              >
                <svg className="w-8 h-8 transform transition-transform duration-300 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="absolute inset-0 bg-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col p-6 space-y-6 overflow-y-auto">
              {[
                { href: "/", text: "Home" },
                { href: "/about", text: "About" },
                { href: "/services", text: "Services" },
                { href: "/portfolio", text: "Portfolio" },
                { href: "/contact", text: "Contact" }
              ].map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-medium text-white hover:text-secondary transition-all duration-300 transform hover:translate-x-2 relative group"
                  onClick={() => setIsOpen(false)}
                  style={{
                    animation: `fadeSlideIn 0.5s ease forwards ${index * 0.1}s`,
                    opacity: 0,
                    transform: 'translateX(-20px)',
                    willChange: 'transform, opacity'
                  }}
                >
                  {link.text}
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full opacity-50 group-hover:opacity-100"></span>
                </Link>
              ))}
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-secondary/20">
              <Link
                href="/booking"
                className="block w-full text-center py-4 px-6 bg-secondary text-white rounded-lg transition-all duration-300 transform hover:scale-[0.98] hover:bg-secondary/90 relative group"
                onClick={() => setIsOpen(false)}
                style={{
                  animation: 'fadeSlideUp 0.5s ease forwards 0.5s',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  willChange: 'transform, opacity'
                }}
              >
                <span className="relative z-10">Book a Call</span>
                <span className="absolute inset-0 bg-white/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Add keyframes for animations */}
      <style jsx global>{`
        @keyframes gridFloat {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-5px) scale(1.02);
            opacity: 0.3;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.2;
          }
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        body.menu-open {
          overflow: hidden;
          position: fixed;
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar; 
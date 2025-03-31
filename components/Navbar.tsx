'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/80 backdrop-blur-md shadow-[0_5px_15px_rgba(0,0,0,0.3)] py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
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
          <div className="hidden md:flex space-x-8">
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
          <div className="hidden md:block">
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

      {/* Mobile Menu */}
      <div 
        className={`block md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
        } bg-primary-light border-t border-secondary/20`}
      >
        <div className="container mx-auto flex flex-col space-y-4 px-4">
          <Link 
            href="/" 
            className="text-white hover:text-secondary py-3 px-4 rounded-lg hover:bg-secondary/10 transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className="text-white hover:text-secondary py-3 px-4 rounded-lg hover:bg-secondary/10 transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="/portfolio" 
            className="text-white hover:text-secondary py-3 px-4 rounded-lg hover:bg-secondary/10 transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link 
            href="/about" 
            className="text-white hover:text-secondary py-3 px-4 rounded-lg hover:bg-secondary/10 transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="text-white hover:text-secondary py-3 px-4 rounded-lg hover:bg-secondary/10 transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link 
            href="/contact" 
            className="btn btn-primary w-full justify-center mt-4"
            onClick={() => setIsOpen(false)}
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
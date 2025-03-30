'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
}

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = [
    {
      quote: "FM Agency transformed our online presence completely. Their web design and SEO strategy increased our organic traffic by 200% in just three months.",
      name: "Sarah Johnson",
      title: "Marketing Director",
      company: "Horizon Tech",
      image: "/images/testimonials/testimonial-1.svg"
    },
    {
      quote: "Working with FM Agency on our YouTube channel strategy was game-changing. They helped us grow from 5K to 100K subscribers in just a year.",
      name: "Michael Roberts",
      title: "Content Creator",
      company: "TechTalk",
      image: "/images/testimonials/testimonial-2.svg"
    },
    {
      quote: "The brand identity FM Agency created for us perfectly captures our vision. Their creative approach and attention to detail exceeded our expectations.",
      name: "Emily Nguyen",
      title: "CEO",
      company: "Bloom Beauty",
      image: "/images/testimonials/testimonial-3.svg"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
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

  useEffect(() => {
    if (autoplay && isVisible) {
      intervalRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay, isVisible]);

  return (
    <section ref={sectionRef} className="section py-20 bg-primary-light relative overflow-hidden">
      {/* Circuit Background */}
      <div className="absolute inset-0 w-full h-full opacity-5">
        <div className="absolute inset-0 bg-circuit-pattern bg-repeat"></div>
      </div>
      
      {/* Glow Effects */}
      <div className="absolute right-0 top-0 w-1/3 h-1/2 bg-secondary/5 rounded-full filter blur-[120px] translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-accent/5 rounded-full filter blur-[120px] -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-white ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            What Our <span className="glow-text-cyan">Clients</span> Say
          </h2>
          <p className={`text-lg text-text-light ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            We're proud to have helped businesses across Sydney and beyond achieve remarkable results.
          </p>
        </div>

        <div className={`relative max-w-4xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          {/* Testimonial Slider */}
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="tech-card border-secondary/30 p-8 md:p-10">
                    <svg className="w-12 h-12 text-secondary/30 mb-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-lg md:text-xl mb-8 italic text-text-light">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 bg-primary">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-text-light">{testimonial.title}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm shadow-[0_0_10px_rgba(0,0,0,0.3)] border border-secondary/20 flex items-center justify-center z-10 transition-all hover:scale-110 hover:border-secondary/50 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-6 w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm shadow-[0_0_10px_rgba(0,0,0,0.3)] border border-secondary/20 flex items-center justify-center z-10 transition-all hover:scale-110 hover:border-secondary/50 focus:outline-none"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-secondary w-6 shadow-[0_0_10px_rgba(6,182,212,0.5)]' 
                    : 'bg-secondary/20'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 
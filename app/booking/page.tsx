'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { FaCalendarAlt, FaClock, FaVideo } from 'react-icons/fa';

const CALENDLY_URL = 'https://calendly.com/admin-fm-agency/30min';

export default function BookingPage() {
  useEffect(() => {
    // Cleanup any existing Calendly scripts on mount
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (existingScript) {
      document.body.removeChild(existingScript);
    }
  }, []);

  return (
    <div className="min-h-screen bg-primary pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Book Your Free <span className="glow-text-cyan">Strategy Call</span>
          </h1>
          
          <p className="text-lg text-text-light text-center mb-12 max-w-2xl mx-auto">
            Let's discuss your project and explore how we can help you achieve your goals. Choose a convenient time for a 30-minute consultation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="tech-card text-center p-6">
              <div className="w-12 h-12 mx-auto bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <FaCalendarAlt className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-text-light">Choose a time that works best for your schedule</p>
            </div>

            <div className="tech-card text-center p-6">
              <div className="w-12 h-12 mx-auto bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <FaClock className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">30-Minute Session</h3>
              <p className="text-text-light">Focused discussion about your project needs</p>
            </div>

            <div className="tech-card text-center p-6">
              <div className="w-12 h-12 mx-auto bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <FaVideo className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Call</h3>
              <p className="text-text-light">Face-to-face conversation via Google Meet</p>
            </div>
          </div>

          <div className="tech-card p-4 md:p-8">
            <div 
              className="calendly-inline-widget" 
              data-url={CALENDLY_URL}
              style={{
                position: 'relative',
                minWidth: '320px',
                height: '700px',
              }}
            />
          </div>
        </div>
      </div>

      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="afterInteractive"
      />

      <Script id="calendly-analytics" strategy="afterInteractive">
        {`
          window.addEventListener('calendly:event-scheduled', function(e) {
            console.log('Calendly event scheduled:', e.detail);
          });
          window.addEventListener('calendly:date-and-time-selected', function(e) {
            console.log('Calendly date and time selected:', e.detail);
          });
          window.addEventListener('calendly:profile-page-viewed', function(e) {
            console.log('Calendly profile page viewed:', e.detail);
          });
        `}
      </Script>
    </div>
  );
} 
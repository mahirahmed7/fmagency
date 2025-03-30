import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { FaCalendarAlt, FaClock, FaVideo } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Book a Call | FM Agency',
  description: 'Schedule a free 30-minute consultation with our team to discuss your project and goals.',
};

export default function BookingPage() {
  const CALENDLY_URL = 'https://calendly.com/admin-fm-agency/30min';

  return (
    <>
      <Navbar />
      <main className="bg-primary pt-36 pb-0">
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full opacity-10">
            <div className="absolute inset-0 bg-circuit-pattern bg-repeat opacity-20"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Book a <span className="glow-text-cyan">Strategy Call</span>
              </h1>
              <p className="text-xl text-text-light max-w-3xl mx-auto mb-8">
                Schedule a free 30-minute consultation with our team to discuss your project and how we can help you achieve your goals.
              </p>
              
              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                <div className="tech-card p-6 text-center">
                  <FaCalendarAlt className="text-3xl text-cyan-400 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
                  <p className="text-text-light">Choose a time that works best for you</p>
                </div>
                <div className="tech-card p-6 text-center">
                  <FaClock className="text-3xl text-cyan-400 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">30-Minute Session</h3>
                  <p className="text-text-light">Quick but comprehensive consultation</p>
                </div>
                <div className="tech-card p-6 text-center">
                  <FaVideo className="text-3xl text-cyan-400 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">Video Call</h3>
                  <p className="text-text-light">Meet face-to-face from anywhere</p>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="tech-card p-8 flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-6 text-center">Select Your Preferred Time</h2>
                {/* Calendly inline widget begin */}
                <div className="calendly-inline-widget w-full flex justify-center" data-url={CALENDLY_URL} style={{ minWidth: '320px', height: '800px' }} />
                <Script
                  type="text/javascript"
                  src="https://assets.calendly.com/assets/external/widget.js"
                  async
                />
                {/* Calendly inline widget end */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Calendly Event Tracking */}
      <Script
        id="calendly-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', function() {
              Calendly.initInlineWidget({
                url: '${CALENDLY_URL}',
                parentElement: document.querySelector('.calendly-inline-widget'),
                prefill: {},
                utm: {
                  utmSource: 'website',
                  utmMedium: 'booking_page',
                  utmCampaign: 'strategy_call'
                }
              });

              // Track when someone views the scheduling page
              Calendly.addEventListener('calendly.event_scheduled', function(e) {
                // You can send this event to your analytics service
                console.log('Event scheduled:', e.data.payload);
              });

              // Track when someone views available times
              Calendly.addEventListener('calendly.date_and_time_selected', function(e) {
                console.log('Date and time selected:', e.data.payload);
              });

              // Track when someone views the scheduling page
              Calendly.addEventListener('calendly.profile_page_viewed', function(e) {
                console.log('Profile page viewed:', e.data.payload);
              });
            });
          `
        }}
      />
    </>
  );
} 
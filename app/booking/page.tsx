import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Book a Call | FM Agency',
  description: 'Schedule a free 30-minute consultation with our team to discuss your project and goals.',
};

export default function BookingPage() {
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
              <p className="text-xl text-text-light max-w-3xl mx-auto">
                Schedule a free 30-minute consultation with our team to discuss your project and how we can help you achieve your goals.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="tech-card">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2 text-white">Select a Date & Time</h2>
                  <p className="text-text-light">Choose a date and time that works best for you to discuss your project with our team.</p>
                </div>
                
                <div className="flex flex-col lg:flex-row gap-10 mb-12">
                  <div className="w-full lg:w-7/12">
                    <div className="bg-primary-light/50 border border-secondary/20 rounded-lg p-6">
                      <div className="flex justify-between items-center mb-6">
                        <button className="text-secondary hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <h3 className="text-xl font-semibold text-white">June 2024</h3>
                        <button className="text-secondary hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-7 gap-1 text-center mb-4">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                          <div key={index} className="text-sm font-medium text-text-light py-2">
                            {day}
                          </div>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-7 gap-1 text-center">
                        {Array.from({ length: 30 }, (_, i) => {
                          const dayNumber = i + 1;
                          const isToday = dayNumber === 15;
                          const isAvailable = [16, 17, 18, 19, 22, 23, 24, 25, 29, 30].includes(dayNumber);
                          const isPast = dayNumber < 15;
                          
                          return (
                            <div 
                              key={i} 
                              className={`py-3 mx-1 rounded-md text-sm font-medium
                                ${isToday ? 'bg-secondary text-white' : ''}
                                ${isAvailable && !isToday ? 'bg-primary-light border border-secondary/30 text-white cursor-pointer hover:border-secondary transition-colors' : ''}
                                ${!isAvailable && !isToday && !isPast ? 'text-text-light/50' : ''}
                                ${isPast ? 'text-text-light/30' : ''}
                              `}
                            >
                              {dayNumber}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-5/12">
                    <h3 className="text-xl font-semibold text-white mb-4">Available Times</h3>
                    <p className="text-text-light mb-6">June 22, 2024</p>
                    
                    <div className="space-y-2">
                      {['10:00 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM'].map((time, index) => (
                        <div 
                          key={index}
                          className="py-3 px-4 border border-secondary/30 rounded-lg text-white hover:border-secondary cursor-pointer transition-colors flex items-center"
                        >
                          <svg className="w-5 h-5 mr-3 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {time} - 30 min
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-secondary/20 pt-8">
                  <h2 className="text-2xl font-bold mb-6 text-white">Your Information</h2>
                  
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first-name" className="block text-text-light mb-2">First Name</label>
                      <input 
                        type="text" 
                        id="first-name" 
                        className="w-full px-4 py-3 bg-primary border border-secondary/30 rounded-lg focus:outline-none focus:border-secondary text-white"
                        placeholder="Your first name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="last-name" className="block text-text-light mb-2">Last Name</label>
                      <input 
                        type="text" 
                        id="last-name" 
                        className="w-full px-4 py-3 bg-primary border border-secondary/30 rounded-lg focus:outline-none focus:border-secondary text-white"
                        placeholder="Your last name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-text-light mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 bg-primary border border-secondary/30 rounded-lg focus:outline-none focus:border-secondary text-white"
                        placeholder="Your email address"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-text-light mb-2">Phone (optional)</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 bg-primary border border-secondary/30 rounded-lg focus:outline-none focus:border-secondary text-white"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="company" className="block text-text-light mb-2">Company/Organization (optional)</label>
                      <input 
                        type="text" 
                        id="company" 
                        className="w-full px-4 py-3 bg-primary border border-secondary/30 rounded-lg focus:outline-none focus:border-secondary text-white"
                        placeholder="Your company or organization"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="project-details" className="block text-text-light mb-2">Project Details</label>
                      <textarea 
                        id="project-details" 
                        rows={4}
                        className="w-full px-4 py-3 bg-primary border border-secondary/30 rounded-lg focus:outline-none focus:border-secondary text-white resize-none"
                        placeholder="Tell us a bit about your project and what you're looking to achieve"
                      ></textarea>
                    </div>
                    
                    <div className="md:col-span-2">
                      <button 
                        type="submit"
                        className="btn btn-primary"
                      >
                        Confirm Booking
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 
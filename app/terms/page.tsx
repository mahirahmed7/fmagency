import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | FM Agency',
  description: 'Read about FM Agency\'s terms of service and usage agreements.',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-primary pt-36 pb-0">
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full opacity-10">
            <div className="absolute inset-0 bg-circuit-pattern bg-repeat opacity-20"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                Terms of <span className="glow-text-cyan">Service</span>
              </h1>
            </div>
            
            <div className="tech-card">
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-text-light mb-8">
                  Last Updated: June 1, 2024
                </p>
                
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the services provided by FM Agency ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
                
                <h2>2. Description of Services</h2>
                <p>
                  FM Agency provides various digital and creative services, including but not limited to web design and development, digital marketing, branding, and creator services. The specific deliverables, timelines, and payment terms for each project will be outlined in a separate agreement or statement of work.
                </p>
                
                <h2>3. Client Responsibilities</h2>
                <p>
                  As a client, you agree to:
                </p>
                <ul>
                  <li>Provide accurate and complete information necessary for the completion of the project</li>
                  <li>Review and provide feedback on deliverables in a timely manner</li>
                  <li>Pay all fees as agreed upon in the project agreement</li>
                  <li>Obtain any necessary third-party permissions or licenses for materials provided to us</li>
                </ul>
                
                <h2>4. Intellectual Property</h2>
                <p>
                  Upon full payment of all fees, you will own the final deliverables specifically created for your project, except for:
                </p>
                <ul>
                  <li>Third-party materials, which remain subject to their original licenses</li>
                  <li>Our pre-existing tools, code, or materials that we may use in the creation of your project</li>
                  <li>Open source components, which remain subject to their original licenses</li>
                </ul>
                <p>
                  We reserve the right to display and link to your completed project as part of our portfolio and to write about the project for promotional purposes, unless specifically prohibited in writing.
                </p>
                
                <h2>5. Payment Terms</h2>
                <p>
                  Payment terms are specified in your project agreement. Generally, we require:
                </p>
                <ul>
                  <li>A non-refundable deposit before work begins</li>
                  <li>Payment milestones throughout the project</li>
                  <li>Final payment before the release of final deliverables</li>
                </ul>
                <p>
                  Late payments may incur additional fees and/or delay project completion.
                </p>
                
                <h2>6. Project Changes and Cancellation</h2>
                <p>
                  Any changes to the project scope must be agreed upon in writing and may affect the timeline and cost. If you cancel a project after work has begun, you will be responsible for payment for all work completed up to the cancellation date, as well as any non-refundable expenses incurred.
                </p>
                
                <h2>7. Limitation of Liability</h2>
                <p>
                  FM Agency is not liable for any indirect, consequential, or incidental damages arising from the use of our services. Our total liability for any claim arising from our services will not exceed the amount paid by you for the specific project in question.
                </p>
                
                <h2>8. Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless FM Agency from any claims, damages, liabilities, costs, or expenses arising from your use of our services or your breach of these Terms of Service.
                </p>
                
                <h2>9. Confidentiality</h2>
                <p>
                  We will maintain the confidentiality of any proprietary information shared during the course of our work together. This obligation survives the termination of our agreement but does not apply to information that is publicly available, already known to us, or independently developed.
                </p>
                
                <h2>10. Governing Law</h2>
                <p>
                  These Terms of Service are governed by the laws of New South Wales, Australia. Any dispute arising from these terms will be resolved in the courts of Sydney, Australia.
                </p>
                
                <h2>11. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to our website. Your continued use of our services after such changes constitutes your acceptance of the new terms.
                </p>
                
                <h2>12. Contact Us</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p>
                  Email: <a href="mailto:legal@fm-agency.net" className="text-secondary hover:underline">legal@fm-agency.net</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 
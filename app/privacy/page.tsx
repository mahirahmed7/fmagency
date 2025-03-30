import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | FM Agency',
  description: 'Read about FM Agency\'s privacy policy and how we handle your data.',
};

export default function PrivacyPage() {
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
                Privacy <span className="glow-text-cyan">Policy</span>
              </h1>
            </div>
            
            <div className="tech-card">
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-text-light mb-8">
                  Last Updated: June 1, 2024
                </p>
                
                <h2>1. Introduction</h2>
                <p>
                  Welcome to FM Agency ("we," "our," or "us"). We are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                
                <h2>2. Information We Collect</h2>
                <p>
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul>
                  <li>Contact us through our website</li>
                  <li>Register for our newsletter</li>
                  <li>Submit a form to inquire about our services</li>
                  <li>Book a consultation</li>
                </ul>
                <p>
                  The personal information we collect may include:
                </p>
                <ul>
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name</li>
                  <li>Project details</li>
                </ul>
                
                <h2>3. How We Use Your Information</h2>
                <p>
                  We may use your information for the following purposes:
                </p>
                <ul>
                  <li>To provide and maintain our services</li>
                  <li>To respond to your inquiries and fulfill your requests</li>
                  <li>To send you promotional materials, newsletters, and other communications</li>
                  <li>To improve our website and services</li>
                  <li>To analyze usage patterns and trends</li>
                  <li>To protect against, identify, and prevent fraud and other unlawful activity</li>
                </ul>
                
                <h2>4. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
                
                <h2>5. Third-Party Service Providers</h2>
                <p>
                  We may share your information with third-party service providers to:
                </p>
                <ul>
                  <li>Assist us in operating our website</li>
                  <li>Conduct business-related functions on our behalf</li>
                  <li>Provide services to us</li>
                  <li>Assist us in analyzing how our website and services are used</li>
                </ul>
                <p>
                  These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>
                
                <h2>6. Data Security</h2>
                <p>
                  We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
                </p>
                
                <h2>7. Your Rights</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul>
                  <li>The right to access the personal information we have about you</li>
                  <li>The right to request that we correct any inaccurate personal information</li>
                  <li>The right to request that we delete your personal information</li>
                  <li>The right to withdraw consent at any time</li>
                </ul>
                
                <h2>8. Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
                
                <h2>9. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p>
                  Email: <a href="mailto:privacy@fm-agency.net" className="text-secondary hover:underline">privacy@fm-agency.net</a>
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
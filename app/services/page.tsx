import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Services | FM Agency',
  description: 'Explore our full range of services including web design, digital marketing, branding, and creator services.',
};

const ServiceSection = ({ id, title, description, features, image, reverse = false, ctaLink = "/contact" }: {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  reverse?: boolean;
  ctaLink?: string;
}) => (
  <section id={id} className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 w-full h-full opacity-5">
      <div className="absolute inset-0 bg-circuit-pattern bg-repeat"></div>
    </div>
    
    {/* Glow Effects */}
    <div className={`absolute ${reverse ? 'right-0' : 'left-0'} top-1/4 w-1/3 h-1/3 bg-secondary/10 rounded-full filter blur-[100px]`}></div>
    
    <div className="container relative z-10">
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {title.split(' ').map((word, i) => 
              i === 0 ? <span key={i} className="glow-text-cyan">{word} </span> : word + ' '
            )}
          </h2>
          <p className="text-lg text-text-light mb-8">{description}</p>
          
          <ul className="space-y-4 mb-10">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1 mr-3">
                  <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-text-light">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Link href={ctaLink} className="btn btn-primary">
            Get Started
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative tech-card overflow-hidden group">
            <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Image 
              src={image}
              alt={title}
              width={600}
              height={400}
              className="rounded-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function ServicesPage() {
  const services = [
    {
      id: "web",
      title: "Web Design & Development",
      description: "We create stunning, responsive websites that not only look great but also convert visitors into customers. Our web solutions are built with the latest technologies and optimized for performance and SEO.",
      image: "/images/services/web-design.jpeg",
      features: [
        "Custom website design and development",
        "E-commerce solutions with seamless checkout experiences",
        "Responsive designs that work on all devices",
        "Fast loading times and optimized performance",
        "SEO-friendly structure and implementation",
        "Content management systems that are easy to update"
      ]
    },
    {
      id: "digital",
      title: "Digital Marketing",
      description: "Drive traffic, generate leads, and increase conversions with our comprehensive digital marketing strategies. We'll help you reach your target audience through the right channels at the right time.",
      image: "/images/services/digital-marketing.svg",
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) advertising campaigns",
        "Social media marketing and management",
        "Email marketing campaigns that convert",
        "Content marketing strategy and implementation",
        "Analytics and reporting to track ROI"
      ],
      reverse: true
    },
    {
      id: "branding",
      title: "Branding & Strategy",
      description: "Build a powerful brand identity that resonates with your audience and sets you apart from competitors. We'll help you define your brand's voice, visual identity, and positioning in the market.",
      image: "/images/services/branding.svg",
      features: [
        "Brand identity development",
        "Logo design and visual identity systems",
        "Brand messaging and voice guidelines",
        "Marketing collateral design",
        "Brand strategy and positioning",
        "Rebranding and brand refreshes"
      ]
    },
    {
      id: "creators",
      title: "Creator Services",
      description: "For YouTubers, streamers, and content creators, we offer specialized services to help grow your audience, improve your content quality, and monetize your platform more effectively.",
      image: "/images/services/creator-services.svg",
      features: [
        "YouTube channel optimization and growth strategies",
        "Video editing and post-production",
        "Thumbnail design and channel art",
        "Content strategy development",
        "Monetization strategy and sponsor outreach",
        "Cross-platform promotion tactics"
      ],
      reverse: true
    }
  ];

  return (
    <>
      <Navbar />
      <main className="bg-primary pt-36 pb-0">
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full opacity-10">
            <div className="absolute inset-0 bg-circuit-pattern bg-repeat opacity-20"></div>
          </div>
          
          <div className="container relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="glow-text-cyan">Services</span>
            </h1>
            <p className="text-xl text-text-light max-w-3xl mx-auto mb-12">
              We offer a comprehensive range of creative and digital services to help your business stand out, connect with customers, and drive growth.
            </p>
          </div>
        </section>

        {services.map(service => (
          <ServiceSection
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            features={service.features}
            image={service.image}
            reverse={service.reverse}
          />
        ))}

        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-light"></div>
          
          <div className="container relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="glow-text-cyan">Elevate</span> Your Brand?
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto mb-10">
              Let's discuss how our services can help your business reach its full potential.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Book a Free Consultation
            </Link>
          </div>
        </section>
        
        {/* Connector to footer - ensures smooth transition */}
        <div className="bg-primary h-8"></div>
      </main>
    </>
  );
} 
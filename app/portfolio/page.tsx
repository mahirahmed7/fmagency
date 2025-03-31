import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Portfolio | FM Agency',
  description: 'Our successful projects showcase our expertise in web design, digital marketing, branding, and creator services.',
};

interface PortfolioItemProps {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const PortfolioItem = ({ title, category, description, image, link, tags }: PortfolioItemProps) => (
  <div className="tech-card h-full flex flex-col group">
    <div className="relative overflow-hidden rounded-t-xl mb-6">
      <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300"></div>
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-light/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
      <Link href={link} target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/80">
        Visit Site
      </Link>
    </div>
    <div className="flex-1 flex flex-col">
      <div className="text-secondary text-sm mb-2">{category}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-text-light mb-4 flex-1">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default function PortfolioPage() {
  const portfolioItems: PortfolioItemProps[] = [
    {
      title: "UTS Bangladeshi Society",
      category: "Web Design & Development",
      description: "A vibrant website for the UTS Bangladeshi Society, showcasing their events, culture, and community activities.",
      image: "/images/portfolio/utsbdsoc.png",
      link: "https://utsbdsoc.com",
      tags: ["Web Design", "Custom WordPress", "Community", "Mobile Responsive"]
    },
    {
      title: "Cassowary Centerpoint",
      category: "Web Design & Development",
      description: "A modern website for a business center in Australia, featuring an elegant design and seamless user experience.",
      image: "/images/portfolio/cassowary.png",
      link: "https://cassowarycentrepoint.com",
      tags: ["Web Design", "E-commerce", "Business", "SEO Optimized"]
    },
    {
      title: "Liam Saad Farabi",
      category: "Creator Services",
      description: "YouTube channel growth strategy and content optimization for tech creator Liam Saad Farabi, resulting in increased subscribers and engagement.",
      image: "/images/portfolio/youtube.png",
      link: "https://www.youtube.com/@liamsaadfarabi",
      tags: ["YouTube Growth", "Content Strategy", "Video Production", "Channel Optimization"]
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
              Our <span className="glow-text-cyan">Portfolio</span>
            </h1>
            <p className="text-xl text-text-light max-w-3xl mx-auto mb-12">
              Explore our successful projects and see how we've helped businesses and creators achieve their goals through creative digital solutions.
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="absolute inset-0 w-full h-full opacity-5">
            <div className="absolute inset-0 bg-circuit-pattern bg-repeat"></div>
          </div>
          
          {/* Glow Effects */}
          <div className="absolute left-0 top-1/4 w-1/3 h-1/3 bg-secondary/10 rounded-full filter blur-[120px]"></div>
          <div className="absolute right-0 bottom-1/4 w-1/3 h-1/3 bg-accent/10 rounded-full filter blur-[120px]"></div>
          
          <div className="container relative z-10">
            <div className="flex flex-wrap justify-center gap-8">
              {portfolioItems.map((item, index) => (
                <div key={index} className="w-full md:w-[30%] max-w-md">
                  <PortfolioItem
                    title={item.title}
                    category={item.category}
                    description={item.description}
                    image={item.image}
                    link={item.link}
                    tags={item.tags}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 mt-20 relative overflow-hidden mb-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-light"></div>
          
          <div className="container relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Your <span className="glow-text-cyan">Success Story</span>?
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto mb-10">
              Let's discuss how we can help your business achieve similar results with our expertise in design, marketing, and strategy.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Start Your Project
            </Link>
          </div>
        </section>
        
        {/* Connector to footer - ensures smooth transition */}
        <div className="bg-primary h-8"></div>
      </main>
    </>
  );
} 
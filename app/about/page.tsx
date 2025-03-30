import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'About Us | FM Agency',
  description: 'Learn more about FM Agency, our founders, our mission, and our approach to helping businesses grow online.',
};

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedIn?: string;
}

const TeamMember = ({ name, role, bio, image, linkedIn }: TeamMemberProps) => (
  <div className="tech-card h-full flex flex-col p-6">
    <div className="mb-6 rounded-xl overflow-hidden relative group">
      <Image
        src={image}
        alt={name}
        width={400}
        height={400}
        className="w-full object-cover aspect-square"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-light/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
        {linkedIn && (
          <a 
            href={linkedIn} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-secondary text-white p-3 rounded-full hover:bg-white hover:text-secondary transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        )}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
      <p className="text-secondary mb-4">{role}</p>
      <p className="text-text-light">{bio}</p>
    </div>
  </div>
);

const ValuesCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="tech-card h-full flex flex-col">
    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 text-secondary">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <p className="text-text-light">{description}</p>
  </div>
);

export default function AboutPage() {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Mahir Ahmed",
      role: "Co-Founder & Technical Director",
      bio: "With a background in design and digital marketing, Mahir leads our technical team with a passion for innovative solutions that drive real results. He has helped numerous businesses build effective digital strategies.",
      image: "/images/team/mahir.png",
      linkedIn: "https://www.linkedin.com/in/mahir-ahmedd/"
    },
    {
      name: "Farhan Shafiq",
      role: "Co-Founder & Creative Director",
      bio: "Farhan brings extensive creative expertise to FM Agency, specializing in web development and digital infrastructure. His analytical approach ensures our clients receive solutions that are both creative and technically sound.",
      image: "/images/team/farhan.png",
      linkedIn: "https://www.linkedin.com/in/farhan-shafiq-19108b26b/"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="bg-primary pt-36 pb-20">
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full opacity-10">
            <div className="absolute inset-0 bg-circuit-pattern bg-repeat opacity-20"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  About <span className="glow-text-cyan">FM Agency</span>
                </h1>
                <p className="text-xl text-text-light mb-6">
                  We're a Sydney-based creative and digital agency dedicated to helping businesses achieve their online potential.
                </p>
                <p className="text-text-light mb-6">
                  Founded by digital marketing enthusiasts Mahir Ahmed and Farhan Shafiq, FM Agency was born from a shared passion for innovation and a commitment to excellence. We saw a gap in the market for an agency that truly understands the unique challenges faced by businesses and creators in today's rapidly evolving digital landscape.
                </p>
                <p className="text-text-light mb-8">
                  Our mission is simple: to help our clients succeed online by combining cutting-edge technology with creative strategy. We believe in building long-term partnerships, not just completing projects.
                </p>
                <Link href="/contact" className="btn btn-primary">
                  Get In Touch
                </Link>
              </div>
              <div className="w-full md:w-1/2">
                <Image 
                  src="/images/about/team.svg"
                  alt="About FM Agency"
                  width={600}
                  height={400}
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full opacity-5">
            <div className="absolute inset-0 bg-circuit-pattern bg-repeat"></div>
          </div>
          
          {/* Glow Effects */}
          <div className="absolute left-0 top-1/4 w-1/3 h-1/3 bg-secondary/10 rounded-full filter blur-[120px]"></div>
          
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="glow-text-cyan">Values</span>
              </h2>
              <p className="text-xl text-text-light max-w-3xl mx-auto">
                These core principles guide everything we do and define how we approach our work and client relationships.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ValuesCard
                icon={
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                }
                title="Innovation"
                description="We constantly explore new technologies and creative approaches to deliver cutting-edge solutions that keep our clients ahead of the competition."
              />
              <ValuesCard
                icon={
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                }
                title="Partnership"
                description="We see ourselves as an extension of your team, working collaboratively to understand your unique challenges and develop tailored solutions that drive real results."
              />
              <ValuesCard
                icon={
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                }
                title="Excellence"
                description="We're committed to delivering exceptional quality in everything we do, from the code we write to the designs we create and the strategies we develop."
              />
              <ValuesCard
                icon={
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="Efficiency"
                description="We value your time and resources, focusing on streamlined processes and solutions that deliver maximum impact with minimum waste."
              />
              <ValuesCard
                icon={
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                }
                title="Client-Focused"
                description="Your success is our success. We measure our achievements by the results we generate for our clients and the relationships we build along the way."
              />
              <ValuesCard
                icon={
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                }
                title="Integrity"
                description="We believe in transparency, honesty, and doing what's right. We'll always provide straightforward advice and realistic expectations about what we can achieve."
              />
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full opacity-5">
            <div className="absolute inset-0 bg-circuit-pattern bg-repeat"></div>
          </div>
          
          {/* Glow Effects */}
          <div className="absolute right-0 bottom-1/4 w-1/3 h-1/3 bg-accent/10 rounded-full filter blur-[120px]"></div>
          
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet Our <span className="glow-text-cyan">Team</span>
              </h2>
              <p className="text-xl text-text-light max-w-3xl mx-auto">
                The talented individuals behind FM Agency's success, bringing together a perfect blend of technical expertise and creative vision.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  image={member.image}
                  linkedIn={member.linkedIn}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 mt-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-light"></div>
          
          <div className="container relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="glow-text-cyan">Work</span> With Us?
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto mb-10">
              Let's discuss how our team can help your business achieve its goals through creative digital solutions.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>
    </>
  );
} 
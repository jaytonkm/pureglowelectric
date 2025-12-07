import type { Metadata } from "next";
import { HeroSection } from "@/components/ui/hero-section-5";
import Component from "@/components/ui/stacking-card";
import { ContactCard } from "@/components/ui/contact-card";
import { ContactForm } from "@/components/ui/contact-form";
import { Footer } from "@/components/ui/footer";
import FAQs from "@/components/ui/faqs-component";
import { MailIcon, PhoneIcon, MapPinIcon, Instagram } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "PureGlow Electric | Calgary Electrician & Lighting Specialists",
  description: "Professional electrical services in Calgary. Specializing in residential & commercial lighting, electrical maintenance, and permanent Christmas lights. Licensed & certified. Call (587) 917-2238",
};

const projects = [
  {
    title: 'Permanent Christmas Lights',
    description:
      'Permanent Christmas lights are durable, energy-efficient LED systems installed along your roofline, eliminating yearly setup and takedown. They enhance safety by removing ladder use and offer customizable colors for holidays and events year-round.',
    link: '/permanent-christmas-lights.jpg.webp',
    color: '#5196fd',
  },
  {
    title: 'Comprehensive Lighting Overhaul',
    description:
      'Transform your property with complete interior and exterior lighting replacement. We deliver custom, energy-efficient solutions from assessment to installation—all in one turnkey project.',
    link: '/JaytonWorking.webp',
    color: '#8f89ff',
  },
  {
    title: 'General Electrical Maintenance',
    description:
      'Keep your property running safely with inspections, preventative care, and prompt repairs to catch problems before they become emergencies. We also handle electrical odd jobs—from outlets and switches to troubleshooting lights and panel upgrades.',
    link: '/PotlightsWorker.webp',
    color: '#13006c',
  },
  {
    title: 'Commercial & Residential Services',
    description:
      'We provide comprehensive electrical services for both commercial and residential properties. From new construction wiring and electrical panel upgrades to commercial installations and home renovations, our expert team delivers reliable, code-compliant solutions tailored to your specific needs.',
    link: '/CorporateWorker.webp',
    color: '#ed649e',
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <HeroSection />
      <div id="services" style={{scrollMarginTop: '100px'}}>
        <Component projects={projects} />
      </div>
      <FAQs />
      <div id="get-in-touch" className="mx-auto max-w-5xl px-4 py-12 md:py-16" style={{scrollMarginTop: '100px'}}>
        <ContactCard
          title="Get in touch"
          description="If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day."
          contactInfo={[
            {
              icon: MailIcon,
              label: 'Email',
              value: 'contact@pureglowelectric.com',
            },
            {
              icon: MapPinIcon,
              label: 'Address',
              value: 'Calgary, AB, Canada',
              className: 'md:col-span-2 md:col-start-1 lg:col-span-3 lg:col-start-1',
            },
            {
              icon: PhoneIcon,
              label: 'Phone',
              value: '(587) 917 2238',
            }
          ]}
        >
          <ContactForm
            mailto="contact@pureglowelectric.com"
            subject="New inquiry from PureGlow Electric homepage"
          />
        </ContactCard>
      </div>
      <Footer
        logo={
          <Image
            src="/PureGlowLogo1.png"
            alt="PureGlow Electric logo"
            width={360}
            height={180}
            className="h-10 w-auto"
          />
        }
        brandName="PureGlow Electric"
        socialLinks={[
          {
            icon: <Instagram className="h-5 w-5" />,
            href: "https://instagram.com/pureglowelectric",
            label: "Instagram",
          },
        ]}
        mainLinks={[]}
        legalLinks={[]}
        copyright={{
          text: "© 2025 PureGlow Electric",
          license: "All rights reserved",
        }}
      />
    </div>
  );
}

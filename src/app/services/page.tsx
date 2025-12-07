import type { Metadata } from "next";
import Component from "@/components/ui/stacking-card";
import { Footer } from "@/components/ui/footer";
import { Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Electrical Services Calgary | Lighting & Maintenance | PureGlow",
  description: "Commercial & residential electrical services in Calgary: lighting installation, lighting control systems, preventative maintenance, permanent Christmas lights. Licensed electricians. (587) 917-2238",
  alternates: {
    canonical: "https://pureglowelectric.com/services",
  },
  openGraph: {
    type: "website",
    url: "https://pureglowelectric.com/services",
    title: "Electrical Services Calgary | Lighting & Maintenance | PureGlow",
    description: "Commercial & residential electrical services in Calgary: lighting installation, lighting control systems, preventative maintenance, permanent Christmas lights.",
    images: [
      {
        url: "https://pureglowelectric.com/images/pureglow-og-image.jpg",
      },
    ],
    locale: "en_CA",
    siteName: "PureGlow Electric",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Services Calgary | Lighting & Maintenance | PureGlow",
    description: "Commercial & residential electrical services in Calgary: lighting installation, lighting control systems, preventative maintenance, permanent Christmas lights.",
    images: ["https://pureglowelectric.com/images/pureglow-twitter-card.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://pureglowelectric.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://pureglowelectric.com/services"
    }
  ]
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

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="space-y-8">
        {/* Navigation back to home */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/PureGlowLogo1.png"
                alt="PureGlow Electric logo"
                width={180}
                height={90}
                className="h-8 w-auto"
              />
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-sm font-medium text-primary">
                Services
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Electrical Services</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional electrical services for residential and commercial properties in Calgary. 
              Licensed, certified, and committed to excellence.
            </p>
          </div>
        </section>

        {/* Services Cards */}
        <Component projects={projects} />

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us today for a free consultation and quote.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>

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
          mainLinks={[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/contact", label: "Contact" },
          ]}
          legalLinks={[]}
          copyright={{
            text: "© 2025 PureGlow Electric",
            license: "All rights reserved",
          }}
        />
      </div>
    </>
  );
}

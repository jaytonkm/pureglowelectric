import type { Metadata } from "next";
import { ContactCard } from "@/components/ui/contact-card";
import { ContactForm } from "@/components/ui/contact-form";
import { Footer } from "@/components/ui/footer";
import { MailIcon, PhoneIcon, MapPinIcon, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Contact PureGlow Electric | Calgary Electrician | (587) 917-2238",
  description: "Contact PureGlow Electric for professional electrical services in Calgary. Call (587) 917-2238 or email jayton@pureglowelectric.com. Serving all of Calgary 7am-7pm daily.",
  alternates: {
    canonical: "https://pureglowelectric.com/contact",
  },
  openGraph: {
    type: "website",
    url: "https://pureglowelectric.com/contact",
    title: "Contact PureGlow Electric | Calgary Electrician | (587) 917-2238",
    description: "Contact PureGlow Electric for professional electrical services in Calgary. Call (587) 917-2238 or email jayton@pureglowelectric.com.",
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
    title: "Contact PureGlow Electric | Calgary Electrician | (587) 917-2238",
    description: "Contact PureGlow Electric for professional electrical services in Calgary. Call (587) 917-2238 or email jayton@pureglowelectric.com.",
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
      "name": "Contact",
      "item": "https://pureglowelectric.com/contact"
    }
  ]
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="space-y-8">
        {/* Navigation */}
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
              <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-sm font-medium text-primary">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your project? Get in touch with our team for a free consultation and quote.
              We&apos;re available 7 days a week, 7am to 7pm.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <div className="mx-auto max-w-5xl px-4 py-8 md:py-12">
          <ContactCard
            title="Get in touch"
            description="If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day."
            contactInfo={[
              {
                icon: MailIcon,
                label: 'Email',
                value: 'jayton@pureglowelectric.com',
              },
              {
                icon: PhoneIcon,
                label: 'Phone',
                value: '(587) 917-2238',
              },
              {
                icon: MapPinIcon,
                label: 'Service Area',
                value: 'Calgary & Surrounding Areas, AB',
                className: 'md:col-span-2 md:col-start-1 lg:col-span-3 lg:col-start-1',
              },
            ]}
          >
            <ContactForm
              mailto="jayton@pureglowelectric.com"
              subject="New inquiry from PureGlow Electric contact page"
            />
          </ContactCard>
        </div>

        {/* Additional Info */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-semibold text-lg mb-2">Hours of Operation</h3>
                <p className="text-muted-foreground">Monday - Sunday</p>
                <p className="text-muted-foreground">7:00 AM - 7:00 PM</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <a href="tel:+15879172238" className="text-primary hover:underline">
                  (587) 917-2238
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <a href="mailto:jayton@pureglowelectric.com" className="text-primary hover:underline">
                  jayton@pureglowelectric.com
                </a>
              </div>
            </div>
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




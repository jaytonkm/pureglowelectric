import type { Metadata } from "next";
import { Noto_Serif_TC } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-msung-hk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PureGlow Electric | Calgary Electrician & Lighting Specialists",
  description: "Professional electrical services in Calgary. Specializing in residential & commercial lighting, electrical maintenance, and permanent Christmas lights. Licensed & certified. Call (587) 917-2238",
  icons: {
    icon: "/PureGlowFavicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://pureglowelectric.com/",
  },
  openGraph: {
    type: "website",
    url: "https://pureglowelectric.com/",
    title: "PureGlow Electric | Calgary Electrician & Lighting Specialists",
    description: "Professional electrical services in Calgary. Specializing in residential & commercial lighting, electrical maintenance, and permanent Christmas lights.",
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
    title: "PureGlow Electric | Calgary Electrician & Lighting Specialists",
    description: "Professional electrical services in Calgary. Specializing in residential & commercial lighting, electrical maintenance, and permanent Christmas lights.",
    images: ["https://pureglowelectric.com/images/pureglow-twitter-card.jpg"],
  },
  other: {
    "geo.region": "CA-AB",
    "geo.placename": "Calgary",
    "geo.position": "51.0447;-114.0719",
    "ICBM": "51.0447, -114.0719",
  },
};

// JSON-LD Schema Markup
const electricianSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "name": "PureGlow Electric",
  "image": "https://pureglowelectric.com/images/pureglow-logo.jpg",
  "@id": "https://pureglowelectric.com",
  "url": "https://pureglowelectric.com",
  "telephone": "+15879172238",
  "email": "jayton@pureglowelectric.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Calgary",
    "addressRegion": "AB",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.0447,
    "longitude": -114.0719
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "07:00",
      "closes": "19:00"
    }
  ],
  "sameAs": [],
  "founder": {
    "@type": "Person",
    "name": "Jayton"
  },
  "foundingDate": "2024",
  "areaServed": {
    "@type": "City",
    "name": "Calgary"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Electrical Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Electrical Services",
          "description": "Professional residential electrical installations, repairs, and upgrades"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Electrical Services",
          "description": "Commercial electrical installations and maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lighting Installation",
          "description": "Indoor and outdoor lighting design and installation, including lighting control systems"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Electrical Maintenance",
          "description": "Preventative electrical maintenance and safety inspections"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Permanent Christmas Lights",
          "description": "Year-round programmable LED holiday lighting installation"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "1"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What areas of Calgary do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PureGlow Electric serves all areas of Calgary and surrounding communities. We provide residential and commercial electrical services throughout the city."
      }
    },
    {
      "@type": "Question",
      "name": "Are your electricians licensed and certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all PureGlow Electric electricians are fully licensed, certified with ESA and CSA, and insured to provide safe, code-compliant electrical work."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer permanent Christmas lights installation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in permanent Christmas lights installation with year-round programmable LED lighting systems that can be customized for any holiday or occasion."
      }
    },
    {
      "@type": "Question",
      "name": "What are your hours of operation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PureGlow Electric is available 7 days a week from 7am to 7pm. Contact us at (587) 917-2238 for service requests and quotes."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(electricianSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body
        className={`${notoSerifTC.variable} ${notoSerifTC.className} antialiased bg-background text-foreground`}
      >
        {children}
        
        {/* Google Analytics */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}

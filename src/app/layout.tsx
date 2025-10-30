import type { Metadata, Viewport } from "next";
import "./styles/fonts.scss";
import "./globals.css";
import Navigation from "./components/navigation";
import ScrollProgressCircle from "./components/ScrollProgressCircle/ScrollProgressCircle";
import Footer from "./components/Footer/footer";
import ClientLayout from "./components/ClientLayout";
import InitialLoaderWrapper from "./components/global-ui/InitialLoaderWrapper/InitialLoaderWrapper";
import { GoogleAnalytics } from '@next/third-parties/google';
import { GA_MEASUREMENT_ID } from "../lib/analytics";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Dadaji Villa | Luxury Mountain Homestay in Panchgani, Maharashtra",
    template: "%s | Dadaji Villa - Luxury Homestay Panchgani"
  },
  description:
    "Book your stay at Dadaji Villa — a serene mountain homestay in Panchgani with breathtaking valley views, cozy interiors, and warm hospitality. Perfect for families and friends seeking a peaceful retreat in Maharashtra's hill country.",
  keywords: [
    "Dadaji Villa",
    "Panchgani homestay",
    "luxury villa Panchgani", 
    "mountain homestay Maharashtra",
    "Mahabaleshwar accommodation",
    "hill station stay",
    "valley view villa",
    "family vacation rental",
    "weekend getaway Panchgani",
    "private villa booking",
    "Dadaji Villa Khinger Road",
    "homestay near Mahabaleshwar",
    "Panchgani hotel alternative",
    "mountain retreat Maharashtra",
    "luxury accommodation Panchgani"
  ],
  authors: [{ name: "Dadaji Villa Team", url: "https://dadajivilla.com" }],
  creator: "Dadaji Villa",
  publisher: "Dadaji Villa",
  metadataBase: new URL("https://dadajivilla.com"),
  alternates: {
    canonical: "https://dadajivilla.com",
  },
  openGraph: {
    type: "website",
    url: "https://dadajivilla.com",
    title: "Dadaji Villa | Luxury Mountain Homestay in Panchgani",
    description:
      "Experience peace and comfort at Dadaji Villa, Panchgani. Perfect for family getaways and nature lovers.",
    siteName: "Dadaji Villa",
    images: [
      {
        url: "/aboutimg.jpg",
        width: 1200,
        height: 630,
        alt: "Dadaji Villa - Panchgani Homestay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dadaji Villa | Panchgani Mountain Homestay",
    description:
      "Your perfect escape in Panchgani — Dadaji Villa offers a peaceful homestay with scenic valley views and modern comfort.",
    images: ["/aboutimg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon-dadaji.ico",
    shortcut: "/favicon-dadaji.ico",
    apple: "/favicon-dadaji.ico",
  },
  verification: {
    google: "your-google-search-console-verification-code", // Replace with actual code
    // bing: "your-bing-verification-code", // Add if you use Bing
  },
  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <meta name="theme-color" content="#91765a" />
        <meta name="msapplication-TileColor" content="#91765a" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="antialiased">
        <InitialLoaderWrapper>
          {/* <ClientLayout> */}
            <Navigation />
            {children}
            <ScrollProgressCircle />
            <Footer />
          {/* </ClientLayout> */}
        </InitialLoaderWrapper>
        
        {/* Google Analytics */}
        {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}

        {/* Enhanced JSON-LD Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Dadaji Villa",
              alternateName: ["Dadaji Villa Panchgani", "Dadaji Villa Homestay"],
              image: [
                "https://dadajivilla.com/aboutimg.jpg",
                "https://dadajivilla.com/dadaji-villa/dadaji-villa-img-1.jpg",
                "https://dadajivilla.com/common/hero-img.jpg"
              ],
              description:
                "Luxury mountain homestay in Panchgani offering two unique accommodations: Dadaji Villa (4-bedroom) and Dadaji Cottage (2-bedroom) with breathtaking valley views and modern amenities.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Dadaji Villa, Khinger Rd, Panchgani",
                addressLocality: "Panchgani",
                addressRegion: "Maharashtra", 
                postalCode: "412805",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "17.905126",
                longitude: "73.817086"
              },
              telephone: "+917045228951",
              email: "dadajivilla@gmail.com",
              url: "https://dadajivilla.com",
              sameAs: [
                "https://www.facebook.com/dadajivilla",
                "https://www.instagram.com/dadajivilla/", 
                "https://x.com/dadajivilla"
              ],
              priceRange: "₹4000-₹12000",
              currenciesAccepted: "INR",
              paymentAccepted: ["Cash", "Credit Card", "UPI", "Bank Transfer"],
              starRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5"
              },
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Valley Views" },
                { "@type": "LocationFeatureSpecification", name: "Private Terrace" },
                { "@type": "LocationFeatureSpecification", name: "Free WiFi" },
                { "@type": "LocationFeatureSpecification", name: "Kitchen Facilities" },
                { "@type": "LocationFeatureSpecification", name: "Parking" },
                { "@type": "LocationFeatureSpecification", name: "Pet Friendly" }
              ],
              checkInTime: "14:00",
              checkOutTime: "11:00",
              numberOfRooms: "6",
              maximumAttendeeCapacity: "40",
              smokingPolicy: "https://dadajivilla.com/smoking-policy"
            }),
          }}
        />
      </body>
    </html>
  );
}

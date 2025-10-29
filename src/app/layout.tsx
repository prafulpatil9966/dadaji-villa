import type { Metadata } from "next";
import "./styles/fonts.scss";
import "./globals.css";
import Navigation from "./components/navigation";
import ScrollProgressCircle from "./components/ScrollProgressCircle/ScrollProgressCircle";
import Footer from "./components/Footer/footer";
import ClientLayout from "./components/ClientLayout";
import InitialLoaderWrapper from "./components/global-ui/InitialLoaderWrapper/InitialLoaderWrapper";

export const metadata: Metadata = {
  title: "Dadaji Villa | Luxury Mountain Homestay in Panchgani, Maharashtra",
  description:
    "Book your stay at Dadaji Villa — a serene mountain homestay in Panchgani with breathtaking valley views, cozy interiors, and warm hospitality. Perfect for families and friends.",
  keywords: [
    "Dadaji Villa",
    "Panchgani stay",
    "Mountain homestay",
    "Luxury villa in Panchgani",
    "Hotels near Mahabaleshwar",
    "Family vacation villa",
    "Dadaji Villa booking",
    "Hill view homestay Maharashtra",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <InitialLoaderWrapper>
          {/* <ClientLayout> */}
            <Navigation />
            {children}
            <ScrollProgressCircle />
            <Footer />
          {/* </ClientLayout> */}
        </InitialLoaderWrapper>

        {/* JSON-LD Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Dadaji Villa",
              image: "https://dadajivilla.com/aboutimg.jpg",
              description:
                "Luxury mountain homestay in Panchgani with 4 bedrooms, private terrace, and valley views.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Dadaji Villa, Khinger Rd, Panchgani",
                addressLocality: "Mahabaleshwar",
                addressRegion: "Maharashtra",
                postalCode: "412805",
                addressCountry: "IN",
              },
              telephone: "+917045228951",
              url: "https://dadajivilla.com",
              priceRange: "₹4000",
            }),
          }}
        />
      </body>
    </html>
  );
}

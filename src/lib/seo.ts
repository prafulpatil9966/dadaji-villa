import { Metadata } from 'next';

// Base URL for your website
export const siteUrl = 'https://dadajivilla.com';

// Default metadata that applies to all pages
export const defaultMetadata: Partial<Metadata> = {
  metadataBase: new URL(siteUrl),
  keywords: [
    'Dadaji Villa',
    'Panchgani homestay',
    'luxury villa Panchgani', 
    'mountain homestay Maharashtra',
    'Mahabaleshwar accommodation',
    'hill station stay',
    'valley view villa',
    'family vacation rental',
    'weekend getaway Panchgani',
    'private villa booking',
  ],
  authors: [{ name: 'Dadaji Villa Team', url: siteUrl }],
  creator: 'Dadaji Villa',
  publisher: 'Dadaji Villa',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon-dadaji.ico',
    apple: '/favicon-dadaji.ico',
  },
  category: 'travel',
};

// Page-specific metadata
export const pageMetadata = {
  about: {
    title: 'About Us | Dadaji Villa - Your Home Away From Home in Panchgani',
    description: 'Discover the story behind Dadaji Villa, a luxury mountain homestay in Panchgani. Learn about our commitment to providing exceptional hospitality, comfortable accommodation, and unforgettable experiences in the heart of Maharashtra\'s hill country.',
  },
  
  contact: {
    title: 'Contact Us | Book Your Stay at Dadaji Villa Panchgani',
    description: 'Get in touch with Dadaji Villa for bookings, inquiries, or more information. Call us at 7045228951 or fill out our contact form for instant booking assistance in Panchgani.',
  },
  
  dadajiVilla: {
    title: 'Dadaji Villa Room | 4-Bedroom Luxury Villa with Valley Views',
    description: 'Book the spacious Dadaji Villa room featuring 4 bedrooms, modern amenities, private terrace with stunning valley views, and accommodation for up to 16 guests in Panchgani.',
  },
  
  dadajiCottage: {
    title: 'Dadaji Cottage | Cozy 2-Bedroom Mountain Retreat in Panchgani',
    description: 'Experience intimate comfort at Dadaji Cottage, a charming 2-bedroom accommodation perfect for couples and small families. Enjoy mountain views and peaceful surroundings.',
  },
  
  menu: {
    title: 'Menu | Delicious Local & International Cuisine at Dadaji Villa',
    description: 'Explore our carefully curated menu featuring authentic Maharashtrian cuisine and international dishes. All meals prepared with fresh, local ingredients.',
  },
  
  faq: {
    title: 'FAQ | Frequently Asked Questions about Dadaji Villa Homestay',
    description: 'Find answers to common questions about booking, amenities, check-in/out times, cancellation policies, and more at Dadaji Villa, Panchgani.',
  },
};

// Function to generate complete metadata for any page
export function generatePageMetadata(pageKey: keyof typeof pageMetadata): Metadata {
  const pageData = pageMetadata[pageKey];
  
  return {
    ...defaultMetadata,
    title: pageData.title,
    description: pageData.description,
    openGraph: {
      type: 'website',
      siteName: 'Dadaji Villa',
      title: pageData.title,
      description: pageData.description,
      url: `${siteUrl}/${pageKey === 'about' ? 'about' : pageKey}`,
      images: [
        {
          url: '/aboutimg.jpg',
          width: 1200,
          height: 630,
          alt: pageData.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageData.title,
      description: pageData.description,
      images: ['/aboutimg.jpg'],
    },
    alternates: {
      canonical: `${siteUrl}/${pageKey === 'about' ? 'about' : pageKey}`,
    },
  };
}
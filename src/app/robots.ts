import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/users-data/',
          '*.json',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/', 
          '/users-data/',
        ],
      },
    ],
    sitemap: 'https://dadajivilla.com/sitemap.xml',
    host: 'https://dadajivilla.com',
  }
}
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://jubanaturalhair.com'),
  title: {
    default: 'Juba Natural Hair | Guia Completo para Cabelos Cacheados nos EUA',
    template: '%s | Juba Natural Hair',
  },
  description: 'O método brasileiro definitivo para cuidar de cabelos cacheados e crespos nos Estados Unidos. Rotinas personalizadas, produtos acessíveis e protocolos para clima norte-americano.',
  keywords: [
    'cabelo cacheado EUA',
    'cabelo crespo Estados Unidos',
    'cuidar cabelo cacheado',
    'produtos cabelo cacheado America',
    'brasileira cabelo cacheado',
    'cronograma capilar',
    'método curly girl',
    'finalização cachos',
    'transição capilar',
    'cabelo natural EUA',
  ],
  authors: [{ name: 'Monik Santos' }],
  creator: 'Juba Natural Hair',
  publisher: 'Juba Natural Hair',
  category: 'Beauty & Personal Care',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://jubanaturalhair.com',
    siteName: 'Juba Natural Hair',
    title: 'Juba Natural Hair | Guia Completo para Cabelos Cacheados nos EUA',
    description: 'O método brasileiro definitivo para cuidar de cabelos cacheados e crespos nos Estados Unidos. Transforme seus cachos com rotinas personalizadas.',
    images: [
      {
        url: 'https://jubanaturalhair.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Juba Natural Hair - Guia para Cabelos Cacheados',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jubanaturalhair',
    creator: '@moniksantos',
    title: 'Juba Natural Hair | Guia para Cabelos Cacheados nos EUA',
    description: 'O método brasileiro definitivo para cuidar de cabelos cacheados e crespos nos Estados Unidos.',
    images: ['https://jubanaturalhair.com/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://jubanaturalhair.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport = {
  themeColor: '#813223',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Juba Natural Hair',
    description: 'O método brasileiro definitivo para cuidar de cabelos cacheados e crespos nos Estados Unidos',
    url: 'https://jubanaturalhair.com',
    inLanguage: 'pt-BR',
    publisher: {
      '@type': 'Organization',
      name: 'Juba Natural Hair',
      logo: {
        '@type': 'ImageObject',
        url: 'https://jubanaturalhair.com/images/logo.png',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://jubanaturalhair.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Juba Natural Hair - Guia Completo',
    description: 'Guia completo para cuidar de cabelos cacheados e crespos nos Estados Unidos',
    brand: {
      '@type': 'Brand',
      name: 'Juba Natural Hair',
    },
    offers: {
      '@type': 'Offer',
      price: '47',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://jubanaturalhair.com',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '50',
    },
  };

  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pay.hotmart.com" />
        <Script
          id="schema-org-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="schema-org-product"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

import { Inter } from 'next/font/google';
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
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Juba Natural Hair - Guia para Cabelos Cacheados',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juba Natural Hair | Guia para Cabelos Cacheados nos EUA',
    description: 'O método brasileiro definitivo para cuidar de cabelos cacheados e crespos nos Estados Unidos.',
    images: ['/images/og-image.jpg'],
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
};

export const viewport = {
  themeColor: '#813223',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

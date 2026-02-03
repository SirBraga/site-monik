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
  keywords: ['cabelo cacheado EUA', 'cabelo crespo Estados Unidos', 'cuidar cabelo cacheado', 'produtos cabelo cacheado America', 'cronograma capilar', 'método curly girl', 'finalização cachos', 'transição capilar'],
  authors: [{ name: 'Monik Santos' }],
  creator: 'Monik Santos',
  publisher: 'Juba Natural Hair',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://jubanaturalhair.com',
    title: 'Juba Natural Hair | Guia Completo para Cabelos Cacheados nos EUA',
    description: 'O método brasileiro definitivo para cuidar de cabelos cacheados e crespos nos Estados Unidos.',
    siteName: 'Juba Natural Hair',
    images: [
      {
        url: '/images/og-image.png',
        width: 1613,
        height: 859,
        alt: 'Juba Natural Hair - Guia para Cabelos Cacheados nos EUA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juba Natural Hair | Guia Completo para Cabelos Cacheados nos EUA',
    description: 'O método brasileiro definitivo para cuidar de cabelos cacheados e crespos nos Estados Unidos.',
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

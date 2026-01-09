export default function manifest() {
  return {
    name: 'Juba Natural Hair - Guia Completo para Cabelos Cacheados',
    short_name: 'Juba Natural Hair',
    description: 'O método brasileiro definitivo para cuidar de cabelos cacheados e crespos nos Estados Unidos',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFF8F0',
    theme_color: '#813223',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    categories: ['beauty', 'lifestyle', 'education'],
    lang: 'pt-BR',
  };
}

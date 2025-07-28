import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vanderson Cangaty - Desenvolvedor Front End',
    short_name: 'Cangaty Portfolio',
    description: 'Portfólio profissional de Vanderson Cangaty, desenvolvedor Front End especializado em React, TypeScript e tecnologias modernas.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#00d4ff',
    orientation: 'portrait-primary',
    categories: ['portfolio', 'developer', 'technology'],
    lang: 'pt-BR',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    screenshots: [
      {
        src: '/screenshot-wide.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide'
      },
      {
        src: '/screenshot-narrow.png',
        sizes: '720x1280',
        type: 'image/png',
        form_factor: 'narrow'
      }
    ]
  };
}


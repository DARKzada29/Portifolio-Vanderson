/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações de produção
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },

  // Otimizações de imagem
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compressão
  compress: true,

  // Headers de segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
          },
        ],
      },
    ];
  },

  // Redirecionamentos
  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/projetos',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/sobre',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contato',
        permanent: true,
      },
    ];
  },

  // Configurações de build
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,

  // Configurações de bundle
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Otimizações de bundle
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': require('path').resolve(__dirname, 'src'),
      };
    }

    return config;
  },

  // Configurações de output
  output: 'standalone',
  
  // Configurações de TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },

  // Configurações de ESLint
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;


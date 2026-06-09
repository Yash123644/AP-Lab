/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: false, // Use native OS file watching instead of polling
        aggregateTimeout: 2000, // delay rebuilds to bundle multiple updates
        ignored: ['**/node_modules', '**/.next'], // avoid watching large directories
      };
    }
    return config;
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.redd.it' },
      { protocol: 'https', hostname: 'preview.redd.it' },
      { protocol: 'https', hostname: 'pbs.twimg.com' },
      { protocol: 'https', hostname: 'blog.push.fm' },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/__/auth/:path*',
        destination: 'https://ap-lab-be321.firebaseapp.com/__/auth/:path*',
      },
    ];
  },
};

export default nextConfig;

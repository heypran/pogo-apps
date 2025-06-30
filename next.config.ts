import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/pogo-apps',
  assetPrefix: '/pogo-apps/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enables React strict mode
  swcMinify: true, // Uses SWC for minifying the JavaScript
  images: {
    domains: [
      'flowbite.com',
      'via.placeholder.com',
      'isomorphic-furyroad.s3.amazonaws.com', // Add the new image domain here
    ],
  },
};

export default nextConfig;

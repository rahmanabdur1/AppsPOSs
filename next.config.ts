import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enables React strict mode
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flowbite.com", // Allow images from flowbite.com
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com", // Allow images from via.placeholder.com
      },
      {
        protocol: "https",
        hostname: "isomorphic-furyroad.s3.amazonaws.com", // Allow images from this Amazon S3 bucket
      },
     
    ],
  },
};

export default nextConfig;

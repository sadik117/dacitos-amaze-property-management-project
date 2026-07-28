/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.amazepms.com',
        pathname: '/assets/**',
      },
    ],
  },
};

export default nextConfig;

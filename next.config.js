/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'nextjs-dashboard-orcin-eta.vercel.app',
            port: '',
            pathname: '/customers/**',
          },
        ],
      },
};

module.exports = nextConfig;
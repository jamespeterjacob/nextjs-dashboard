/** @type {import('next').NextConfig} */
const nextConfig = {
    //output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nextjs-dashboard-orcin-eta.vercel.app',
                port: '',
                pathname: '/dashboard/customers/**',
            },
        ],
    },
};

export default nextConfig

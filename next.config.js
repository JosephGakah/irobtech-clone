/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'irobtechnologies.com',
          port: '',
          pathname: '/team/**',
        },
      ],
    },
  }

module.exports = nextConfig

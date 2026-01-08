import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure trailing slashes are handled consistently
  trailingSlash: false,

  // Redirect www to non-www to prevent duplicate content issues
  async redirects() {
    return [
      // Redirect www to non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.sforza-quartet.pl',
          },
        ],
        destination: 'https://sforza-quartet.pl/:path*',
        permanent: true,
      },
    ];
  },

  // Add security and SEO headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

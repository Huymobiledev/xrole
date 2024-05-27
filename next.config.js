/** @type {import('next').NextConfig} */
const { routes } = require('./src/routes');

const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  async rewrites() {
    return routes;
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
      {
        source: "/receiver",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOW-FROM=https://audinsights.app",
          },
          {
            key: "Content-Security-Policy",
            value: `frame-ancestors 'self' https://audinsights.app`,
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: [
      "secure.gravatar.com",
      "lh3.googleusercontent.com",
      "ss-media-dev.s3.ap-southeast-1.amazonaws.com",
      "ss-media-stag.s3.ap-southeast-1.amazonaws.com",
      "ss-media.s3.ap-southeast-1.amazonaws.com",
      "media-dev.singsing.net",
      "media-dev.carbonasean.net",
      "*",
    ],
  },

  webpack5: true,
  experimental: {
    esmExternals: "loose",
    scrollRestoration: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  transpilePackages: ["@mui/x-charts"],
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "en",
    localeDetection: false,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "strapi.ecurepair.nl",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
    ],
  },
  i18n: {
    locales: ["nl"],
    defaultLocale: "nl",
  },
  staticPageGenerationTimeout: 300,
};

module.exports = nextConfig;

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
    ],
  },
  i18n: {
    locales: ["nl"],
    defaultLocale: "nl",
  },
};

module.exports = nextConfig;

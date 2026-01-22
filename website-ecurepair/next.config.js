/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/sitemaps/products/:id(\\d+)\\.xml",
        destination: "/sitemaps/products/:id",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/mercedes-contactsloten",
        destination: "/mercedes-contactslot-reparatie",
        permanent: true,
      },
      {
        source: "/mercedes-contactsloten/",
        destination: "/mercedes-contactslot-reparatie",
        permanent: true,
      },
      {
        source: "/mechatronics",
        destination: "/mechatronic-reparatie",
        permanent: true,
      },
      {
        source: "/mechatronics/",
        destination: "/mechatronic-reparatie",
        permanent: true,
      },
    ];
  },
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

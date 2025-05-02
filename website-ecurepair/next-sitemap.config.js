/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.ecurepair.nl",
  generateRobotsTxt: true,
  additionalPaths: async (config) => {
    const paths = [];
    try {
      const response = await fetch(
        "https://strapi.ecurepair.nl/api/products?pagination[pageSize]=99999&fields=onderdeelnummer"
      );
      const { data } = await response.json();
      data.forEach((item) => {
        paths.push({
          loc: "/onderdelen/" + encodeURIComponent(item.onderdeelnummer),
          changefreq: config.changefreq,
          priority: config.priority,
        });
      });
    } catch (error) {
      console.error("Error fetching additional paths:", error);
    }
    return paths;
  },
};

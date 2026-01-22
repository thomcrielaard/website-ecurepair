const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://ecurepair.nl"
).replace(/\/$/, "");
const API_URL = (
  process.env.NEXT_PUBLIC_API_URL || "https://strapi.ecurepair.nl"
).replace(/\/$/, "");

const PRODUCTS_PER_SITEMAP = 10000;

export async function GET() {
  // cheap request to read total count
  const res = await fetch(
    `${API_URL}/api/products?pagination[pageSize]=1&pagination[page]=1&fields[0]=id`,
    { next: { revalidate: 3600 } },
  );

  if (!res.ok) {
    return new Response("Failed to build sitemap index", { status: 500 });
  }

  const json = await res.json();
  const total = json?.meta?.pagination?.total ?? 0;
  const chunks = Math.max(1, Math.ceil(total / PRODUCTS_PER_SITEMAP));

  const sitemapUrls = [
    `${SITE_URL}/sitemaps/static.xml`,
    ...Array.from(
      { length: chunks },
      (_, i) => `${SITE_URL}/sitemaps/products/${i + 1}.xml`,
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map((loc) => `  <sitemap><loc>${loc}</loc></sitemap>`).join("\n")}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

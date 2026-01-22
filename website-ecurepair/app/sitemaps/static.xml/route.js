const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://ecurepair.nl"
).replace(/\/$/, "");
const API_URL = (
  process.env.NEXT_PUBLIC_API_URL || "https://strapi.ecurepair.nl"
).replace(/\/$/, "");

const PRIORITY_HIGH = 0.9;
const PRIORITY_MID = 0.6;

function u(path) {
  return `${SITE_URL}${path}`;
}

export async function GET() {
  const now = new Date().toISOString();

  const staticUrls = [
    { loc: u("/"), priority: 1.0, changefreq: "daily" },

    { loc: u("/contact"), priority: PRIORITY_HIGH, changefreq: "weekly" },
    { loc: u("/overons"), priority: PRIORITY_HIGH, changefreq: "weekly" },

    { loc: u("/dsg-reparatie"), priority: PRIORITY_HIGH, changefreq: "weekly" },
    { loc: u("/dsg-revisie"), priority: PRIORITY_HIGH, changefreq: "weekly" },
    { loc: u("/ecu-reparatie"), priority: PRIORITY_HIGH, changefreq: "weekly" },
    { loc: u("/ecu-revisie"), priority: PRIORITY_HIGH, changefreq: "weekly" },
    { loc: u("/ecu-testen"), priority: PRIORITY_HIGH, changefreq: "weekly" },
    {
      loc: u("/mechatronic-reparatie"),
      priority: PRIORITY_HIGH,
      changefreq: "weekly",
    },
    {
      loc: u("/mercedes-contactslot-reparatie"),
      priority: PRIORITY_HIGH,
      changefreq: "weekly",
    },

    { loc: u("/nieuws"), priority: 0.7, changefreq: "daily" },
  ];

  const newsRes = await fetch(
    `${API_URL}/api/nieuwsberichts?pagination[pageSize]=100&pagination[page]=1&sort=id:desc&fields[0]=titel&fields[1]=updatedAt`,
    { next: { revalidate: 3600 } },
  );

  if (!newsRes.ok) {
    return new Response("Failed to fetch nieuwsberichts", { status: 500 });
  }

  const newsJson = await newsRes.json();
  const news = newsJson?.data ?? [];

  const newsUrls = news
    .map((it) => {
      // supports both flattened and Strapi v4 { attributes }
      const titel = it.titel ?? it.attributes?.titel;
      const updatedAt = it.updatedAt ?? it.attributes?.updatedAt;
      if (!titel) return null;

      return {
        loc: `${SITE_URL}/nieuws/${encodeURIComponent(titel)}`,
        lastmod: updatedAt ? new Date(updatedAt).toISOString() : now,
        changefreq: "weekly",
        priority: PRIORITY_MID,
      };
    })
    .filter(Boolean);

  const urls = [
    ...staticUrls.map((x) => ({ ...x, lastmod: now })),
    ...newsUrls,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (x) => `  <url>
    <loc>${x.loc}</loc>
    <lastmod>${x.lastmod}</lastmod>
    <changefreq>${x.changefreq}</changefreq>
    <priority>${x.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

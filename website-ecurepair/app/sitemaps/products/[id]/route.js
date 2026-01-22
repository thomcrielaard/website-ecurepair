const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://ecurepair.nl"
).replace(/\/$/, "");
const API_URL = (
  process.env.NEXT_PUBLIC_API_URL || "https://strapi.ecurepair.nl"
).replace(/\/$/, "");

// product URLs per sitemap chunk
const PRODUCTS_PER_SITEMAP = 10000;

// MUST match your listing page size (you use pageSize=8)
const ONDERDELEN_PER_PAGE = 8;

const PRIORITY_PRODUCT = 0.2; // low
const PRIORITY_PAGINA = 0.7; // higher than products

export async function GET(_req, ctx) {
  // Next 16: treat params as potentially async
  const params = await ctx.params;
  const id = Number(params.id);

  if (!Number.isFinite(id) || id < 1) {
    return new Response("Not found", { status: 404 });
  }

  // Fetch this chunk of products from Strapi
  const qs = new URLSearchParams();
  qs.set("pagination[page]", String(id));
  qs.set("pagination[pageSize]", String(PRODUCTS_PER_SITEMAP));
  qs.append("fields[0]", "onderdeelnummer");
  qs.append("fields[1]", "updatedAt");

  const res = await fetch(`${API_URL}/api/products?${qs.toString()}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return new Response("Failed to fetch products", { status: 500 });
  }

  const json = await res.json();

  const pageCount = json?.meta?.pagination?.pageCount ?? 1;
  const totalProducts = json?.meta?.pagination?.total ?? 0;

  if (id > pageCount) {
    return new Response("Not found", { status: 404 });
  }

  const items = json?.data ?? [];
  const now = new Date().toISOString();

  // Compute how many onderdelen listing pages exist
  const totalPaginaPages = Math.max(
    1,
    Math.ceil(totalProducts / ONDERDELEN_PER_PAGE),
  );

  // Spread listing pages across sitemap chunks (same number of chunks as products)
  const pagesPerChunk = Math.ceil(totalPaginaPages / pageCount);
  const startPage = (id - 1) * pagesPerChunk + 1;
  const endPage = Math.min(id * pagesPerChunk, totalPaginaPages);

  // Build XML entries for /onderdelen/pagina/{n}
  const paginaEntries = [];
  for (let p = startPage; p <= endPage; p++) {
    paginaEntries.push(`  <url>
    <loc>${SITE_URL}/onderdelen/pagina/${p}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${PRIORITY_PAGINA}</priority>
  </url>`);
  }

  // Build XML entries for /onderdelen/{onderdeelnummer}
  const productEntries = items
    .map((it) => {
      const nr = it.onderdeelnummer ?? it.attributes?.onderdeelnummer;
      const updatedAt = it.updatedAt ?? it.attributes?.updatedAt;
      if (!nr) return "";

      const loc = `${SITE_URL}/onderdelen/${encodeURIComponent(nr)}`;
      const lastmod = updatedAt ? new Date(updatedAt).toISOString() : now;

      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${PRIORITY_PRODUCT}</priority>
  </url>`;
    })
    .filter(Boolean)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paginaEntries.join("\n")}
${productEntries ? "\n" + productEntries : ""}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

// app/onderdelen/[number]/page.js
import { notFound } from "next/navigation";

import Container from "@/components/containers/Container";
import ProductHero from "@/components/modules/ProductHero";
import ItemCards from "@/components/modules/ItemCards";
import Title from "@/components/text/Title";
import ProductDescription from "@/components/modules/ProductDescription";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Cache page + fetches (ISR). Adjust as you like.
export const revalidate = 300;

// Decode once or twice to kill %2520 -> %20 -> " "
function normalizeOnderdeelnummer(value) {
  let v = String(value);

  // up to 2 passes is enough for the %2520 case
  for (let i = 0; i < 2; i++) {
    if (!/%[0-9A-Fa-f]{2}/.test(v)) break;
    try {
      const decoded = decodeURIComponent(v);
      if (decoded === v) break;
      v = decoded;
    } catch {
      break;
    }
  }

  return v;
}

function buildProductUrl(onderdeelnummer) {
  const params = new URLSearchParams();

  params.set("filters[onderdeelnummer][$eq]", onderdeelnummer);

  params.append("fields[0]", "onderdeelnummer");
  params.append("fields[1]", "samenvatting");
  params.append("fields[2]", "omschrijving");
  params.append("fields[3]", "autos");
  params.append("fields[4]", "fouten");

  params.append("populate[merks][fields][0]", "naam");
  params.append("populate[merks][fields][1]", "documentId");

  params.append("populate[onderdeel][fields][0]", "naam");
  params.append("populate[onderdeel][fields][1]", "documentId");
  params.append(
    "populate[onderdeel][populate][afbeeldingen][fields][0]",
    "url",
  );

  params.append("populate[afbeelding][fields][0]", "url");

  params.set("pagination[pageSize]", "1");

  return `${API_URL}/api/products?${params.toString()}`;
}

async function getProduct(rawNumber) {
  const onderdeelnummer = normalizeOnderdeelnummer(rawNumber);
  const url = buildProductUrl(onderdeelnummer);

  const res = await fetch(url, { next: { revalidate } });
  if (!res.ok) throw new Error(`Failed fetching main product: ${res.status}`);

  const json = await res.json();
  const productData = json.data?.[0];
  if (!productData) return null;

  return {
    id: productData.id,
    onderdeelnummer: productData.onderdeelnummer,
    samenvatting: productData.samenvatting,
    omschrijving: productData.omschrijving,
    autos: productData.autos ?? [],
    fouten: productData.fouten ?? [],
    merks: (productData.merks ?? []).map((m) => ({
      id: m.id,
      documentId: m.documentId,
      naam: m.naam,
    })),
    onderdeel: productData.onderdeel
      ? {
          id: productData.onderdeel.id,
          naam: productData.onderdeel.naam,
          documentId: productData.onderdeel.documentId,
          afbeeldingen: productData.onderdeel.afbeeldingen ?? [],
        }
      : null,
    afbeelding: productData.afbeelding ?? null,
  };
}

async function getSimilarProducts(productId, mainImageUrl) {
  const url = `${API_URL}/api/products/${productId}/similar?max=36`;

  const res = await fetch(url, { next: { revalidate } });
  if (!res.ok)
    throw new Error(`Failed fetching similar products: ${res.status}`);

  const json = await res.json();
  return (json.data ?? []).map((p) => ({
    id: p.id,
    onderdeelnummer: p.onderdeelnummer,
    samenvatting: p.samenvatting,
    afbeelding: { url: mainImageUrl },
  }));
}

export async function generateMetadata({ params }) {
  const { number } = await params;

  const product = await getProduct(number);
  if (!product) return {};

  return {
    title: `${product.onderdeelnummer} – Reparatie en Revisie`,
    description: product.omschrijving,
    alternates: {
      canonical: `https://ecurepair.nl/onderdelen/${encodeURIComponent(
        product.onderdeelnummer,
      )}`,
    },
  };
}

export default async function OnderdeelPage({ params }) {
  const { number } = await params;

  const product = await getProduct(number);
  if (!product) notFound();

  const mainImageUrl =
    product.afbeelding?.url ??
    product.onderdeel?.afbeeldingen?.[0]?.url ??
    "/uploads/no_image_available_260ccf02f5.png";

  const similarProducts = await getSimilarProducts(product.id, mainImageUrl);

  return (
    <>
      <Container>
        <ProductHero product={product} />
        <ProductDescription product={product} />
      </Container>

      <Container>
        <Title text="VERGELIJKBARE PRODUCTEN" size="md" align="left" />
        <ItemCards items={similarProducts} itemsPerPage={4} square similar />
      </Container>
    </>
  );
}

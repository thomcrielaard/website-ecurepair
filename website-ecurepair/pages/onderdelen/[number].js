import * as React from "react";
import { API_URL } from "../_app";
import Axios from "axios";
import Head from "next/head";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import Container from "@/components/containers/Container";
import Product from "@/components/modules/Product";
import ProductAttributes from "@/components/modules/ProductAttributes";
import ProductHero from "@/components/modules/ProductHero";
import ItemCards from "@/components/modules/ItemCards";
import Title from "@/components/text/Title";
import ProductDescription from "@/components/modules/ProductDescription";

function Onderdeel({ product, similarProducts }) {
  return (
    <>
      <Head>
        <title>{`${product.onderdeelnummer} \u2013 Reparatie en Revisie`}</title>
        <meta name="description" content={product.omschrijving} />
        <link
          rel="canonical"
          href={`https://ecurepair.nl/onderdelen/${encodeURIComponent(
            product.onderdeelnummer
          )}`}
        />
      </Head>

      <Navbar />

      <Container>
        <ProductHero product={product} />
        <ProductDescription product={product} />
      </Container>

      <Container>
        <Title text="VERGELIJKBARE PRODUCTEN" size="md" align="left" />
        <ItemCards items={similarProducts} itemsPerPage={4} square similar />
      </Container>

      <Footer />
    </>
  );
}

// Use getServerSideProps for dynamic rendering
export async function getServerSideProps(context) {
  const number = context.params.number;

  //
  // 1) Fetch main product with minimal fields
  //
  const url =
    `${API_URL}/api/products` +
    `?filters[onderdeelnummer][$eq]=${encodeURIComponent(number)}` +
    `&fields[0]=onderdeelnummer` +
    `&fields[1]=samenvatting` +
    `&fields[2]=omschrijving` +
    `&fields[3]=autos` +
    `&fields[4]=fouten` +
    `&populate[merks][fields][0]=naam` +
    `&populate[merks][fields][1]=documentId` +
    `&populate[onderdeel][fields][0]=naam` +
    `&populate[onderdeel][fields][1]=documentId` +
    `&populate[onderdeel][populate][afbeeldingen][fields][0]=url` +
    `&populate[afbeelding][fields][0]=url` +
    `&pagination[pageSize]=1`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed fetching main product: ${res.status}`);
  }

  const json = await res.json();
  const productData = json.data?.[0];

  if (!productData) {
    return { notFound: true };
  }

  //
  // 2) Assemble the main product object in a clean format
  //
  const product = {
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

  //
  // 3) Determine the canonical main image to reuse for similar products
  //
  const mainImageUrl =
    product.afbeelding?.url ??
    product.onderdeel?.afbeeldingen?.[0]?.url ??
    "/uploads/no_image_available_260ccf02f5.png";

  //
  // 4) Fetch similar products via Strapi endpoint
  //
  const simUrl = `${API_URL}/api/products/${product.id}/similar?max=36`;
  const simRes = await fetch(simUrl);

  if (!simRes.ok) {
    throw new Error(`Failed fetching similar products: ${simRes.status}`);
  }

  const simJson = await simRes.json();

  //
  // 5) Map similar products, reusing the SAME image you selected above
  //
  const similarProducts = (simJson.data ?? []).map((p) => ({
    id: p.id,
    onderdeelnummer: p.onderdeelnummer,
    samenvatting: p.samenvatting,
    afbeelding: {
      url: mainImageUrl, // reuse the canonical image you computed
    },
  }));

  console.log(simUrl);

  //
  // 6) Return props
  //
  return {
    props: {
      product,
      similarProducts,
    },
  };
}

export default Onderdeel;

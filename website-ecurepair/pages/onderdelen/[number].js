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

function Error({ product, similarProducts }) {
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
  const { data } = await Axios.get(
    `${API_URL}/api/products?filters[onderdeelnummer][$eq]=${context.params.number}&populate[afbeelding][fields][0]=url&populate[onderdeel][populate][afbeeldingen][fields][0]=url&populate[merks][fields][0]=id&populate[merks][fields][1]=naam`
  );

  const product = data.data[0];

  const { data: similarProductsData } = await Axios.get(
    `${API_URL}/api/products?${product.merks
      .map(
        (merk, index) =>
          `filters[merks][documentId][$in][${index}]=${merk.documentId}`
      )
      .join("&")}&filters[onderdeel][documentId][$eq]=${
      product.onderdeel.documentId
    }&pagination[pageSize]=500&populate[afbeelding][fields][0]=url&populate[onderdeel][populate][afbeeldingen][fields][0]=url`
  );

  const similarProducts = similarProductsData.data;

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
      similarProducts,
    },
  };
}

export default Error;

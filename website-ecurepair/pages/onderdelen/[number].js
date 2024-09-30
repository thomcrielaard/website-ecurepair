import * as React from "react";
import { API_URL } from "../_app";
import Axios from "axios";
import Head from "next/head";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import Container from "@/components/containers/Container";
import Product from "@/components/modules/Product";
import ProductAttributes from "@/components/modules/ProductAttributes";

function Error({ product }) {
  return (
    <>
      <Head>
        <title>{`${product.onderdeelnummer} \u2013 Reparatie en Revisie`}</title>
        <meta name="description" content={product.omschrijving} />
      </Head>

      <Navbar />

      <Container>
        <Product product={product} />
        <ProductAttributes errors={product.fouten} cars={product.autos} />
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

  console.log(product);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}

export default Error;

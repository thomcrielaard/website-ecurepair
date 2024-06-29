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
        <title>{`${product.attributes.onderdeelnummer} \u2013 Reparatie en Revisie`}</title>
        <meta name="description" content={product.attributes.omschrijving} />
      </Head>

      <Navbar />

      <Container>
        <Product product={product.attributes} />
        <ProductAttributes
          errors={product.attributes.fouten}
          cars={product.attributes.autos}
        />
      </Container>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await Axios.get(
    `${API_URL}/api/products?fields=onderdeelnummer`
  );

  const paths = data.data.map((product) => {
    return {
      params: { number: `${product.attributes.onderdeelnummer}` },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { data } = await Axios.get(
    `${API_URL}/api/products?filters[onderdeelnummer][$eq]=${context.params.number}&populate=merks,onderdeel,afbeelding,onderdeel.afbeeldingen`
  );

  const product = data.data[0];

  return {
    props: {
      product,
    },
    revalidate: 10,
  };
}

export default Error;

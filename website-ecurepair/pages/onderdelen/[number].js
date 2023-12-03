import * as React from "react";
import { API_URL } from "../_app";
import Axios from "axios";
import Head from "next/head";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/containers/Container";
import Product from "@/components/modules/Product";

function Error({ product }) {
  return (
    <>
      <Head>
        <title>{`ECU Repair \u2013 Onderdeel ${product.attributes.onderdeelnummer}`}</title>
        <meta name="description" content={product.attributes.omschrijving} />
      </Head>

      <Navbar />

      <Container>
        <Product product={product.attributes} />
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
    `${API_URL}/api/products?filters[onderdeelnummer][$eq]=${context.params.number}&populate=merks,onderdeel,afbeelding`
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

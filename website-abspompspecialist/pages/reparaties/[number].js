import * as React from "react";
import { API_URL } from "../_app";
import Axios from "axios";
import Head from "next/head";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/containers/Container";
import AbsDescription from "@/components/modules/AbsDescription";

function Error({ absModule, discount }) {
  return (
    <>
      <Head>
        <title>{`ABS Pomp Specialist \u2013 ABS Module ${absModule.attributes.onderdeelnummer}`}</title>
        <meta name="description" content={absModule.attributes.omschrijving} />
      </Head>

      <Navbar />

      <Container>
        <AbsDescription abs={absModule.attributes} discount={discount} />
      </Container>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await Axios.get(
    `${API_URL}/api/abs-modules?fields=onderdeelnummer`
  );

  const paths = data.data.map((module) => {
    return {
      params: { number: `${module.attributes.onderdeelnummer}` },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { data: discountData } = await Axios.get(`${API_URL}/api/korting`);

  const discount = discountData.data.attributes;

  const { data } = await Axios.get(
    `${API_URL}/api/abs-modules?filters[onderdeelnummer][$eq]=${context.params.number}&populate=merk.foutcodes.foutomschrijving,type.afbeelding`
  );

  const absModule = data.data[0];

  return {
    props: {
      absModule,
      discount,
    },
  };
}

export default Error;

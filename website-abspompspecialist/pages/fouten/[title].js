import * as React from "react";
import { API_URL } from "../_app";
import Axios from "axios";
import Head from "next/head";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ErrorDescription from "@/components/modules/ErrorDescription";
import Container from "@/components/containers/Container";

function Error({ error }) {
  return (
    <>
      <Head>
        <title>{`ABS Pomp Specialist \u2013 ${error.attributes.titel}`}</title>
        <meta name="description" content={error.attributes.omschrijving} />
      </Head>

      <Navbar />

      <Container>
        <ErrorDescription error={error.attributes} />
      </Container>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await Axios.get(`${API_URL}/api/foutomschrijvings`);

  const paths = data.data.map((description) => {
    return {
      params: { title: `${description.attributes.titel}` },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { data } = await Axios.get(
    `${API_URL}/api/foutomschrijvings?filters[titel][$eq]=${context.params.title}&populate=afbeelding,foutcodes`
  );

  const error = data.data[0];

  return {
    props: {
      error,
    },
  };
}

export default Error;

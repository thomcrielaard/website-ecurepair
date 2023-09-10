import * as React from "react";
import { API_URL } from "../_app";
import Axios from "axios";
import Head from "next/head";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import NewsItem from "@/components/modules/NewsItem";
import Container from "@/components/containers/Container";

function Item({ item }) {
  return (
    <>
      <Head>
        <title>{`ABS Pomp Specialist \u2013 ${item.attributes.titel}`}</title>
        <meta name="description" content={item.attributes.samenvatting} />
      </Head>

      <Navbar />

      <Container>
        <NewsItem item={item.attributes} />
      </Container>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await Axios.get(`${API_URL}/api/nieuwsberichts`);

  const paths = data.data.map((nieuwsbericht) => {
    return {
      params: { title: `${nieuwsbericht.attributes.titel}` },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { data } = await Axios.get(
    `${API_URL}/api/nieuwsberichts?filters[titel][$eq]=${context.params.title}&populate=bericht,bericht.afbeelding`
  );

  const item = data.data[0];

  return {
    props: {
      item,
    },
    revalidate: 10,
  };
}

export default Item;

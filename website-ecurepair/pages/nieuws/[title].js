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
        <title>{`ECU Repair \u2013 ${item.titel}`}</title>
        <meta name="description" content={item.samenvatting} />
      </Head>

      <Navbar />

      <Container>
        <NewsItem item={item} />
      </Container>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await Axios.get(`${API_URL}/api/nieuwsberichts`);

  const paths = data.data.map((nieuwsbericht) => {
    return {
      params: { title: `${nieuwsbericht.titel}` },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { data } = await Axios.get(
    `${API_URL}/api/nieuwsberichts?filters[titel][$eq]=${context.params.title}&populate[0]=bericht&populate[1]=bericht.afbeelding`
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

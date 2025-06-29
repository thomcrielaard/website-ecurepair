import React from "react";
import Head from "next/head";
import Axios from "axios";
import { useRouter } from "next/router";
import { API_URL } from "../_app";

import Container from "@/components/containers/Container";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Searchbar from "@/components/modules/Searchbar";
import ItemCards from "@/components/modules/ItemCards";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";
import Button from "@/components/modules/Button";
import Colors from "@/styles/Colors";

export default function Nieuwsberichten({ items }) {
  return (
    <>
      <Head>
        <title>ECU Repair &#8211; Nieuwsberichten</title>
        <meta
          name="description"
          content="Volg het laatste nieuws en updates van ECU Repair. Blijf op de hoogte van trends in auto-elektronica en onze recente projecten en innovaties."
        />
      </Head>

      <Navbar />

      <Container>
        <Title text="NIEUWS & UPDATES" size="lg" align="center" underline h1 />
        <Text
          align="center"
          text="Duik dieper in de fascinerende wereld van auto-elektronica. Van handige tips tot het laatste nieuws, lees hier onze nieuwste artikelen en blijf geïnformeerd."
          slim
        />
        <ItemCards items={items} />
      </Container>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // Get all nieuwsberichten
  const { data: newsData } = await Axios.get(
    `${API_URL}/api/nieuwsberichts?populate[omslagfoto][fields][0]=url&sort=id:desc`
  );

  const items = newsData.data;

  return {
    props: {
      items,
    },
    revalidate: 10,
  };
}

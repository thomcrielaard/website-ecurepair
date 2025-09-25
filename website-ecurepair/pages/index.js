import React from "react";
import Head from "next/head";
import Axios from "axios";
import { API_URL } from "./_app";

import Container from "@/components/containers/Container";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Searchbar from "@/components/modules/Searchbar";
import BigBanner from "@/components/modules/BigBanner";
import ItemCards from "@/components/modules/ItemCards";
import ParallexBanner from "@/components/modules/ParallexBanner";
import Cards from "@/components/modules/Cards";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";

import Banner from "@/assets/img/parallex.jpg";

export default function Home({ products, searchbar, news }) {
  return (
    <>
      <Head>
        <title>ECU Repair &#8211; Home</title>
        <meta
          name="description"
          content="ECU Repair: specialist in ECU, DSG, mechatronics, Mercedes contactsloten en tellerklok reparaties. Hoogwaardige service & deskundige oplossingen voor uw auto."
        />
      </Head>

      <Navbar transparent />

      <BigBanner searchbarData={searchbar} />

      <Cards />

      <Container id="search">
        <Title text="ONZE ONDERDELEN" size="lg" align="center" />
        <Text
          text="Zoek en vind de essentiële auto-onderdelen die u nodig hebt. Onze uitgebreide catalogus biedt betrouwbare oplossingen voor uw specifieke behoeften. Betrouwbaarheid gegarandeerd."
          align="center"
          slim
        />
        <Searchbar searchbarData={searchbar} showButton />
        <ItemCards
          items={products}
          buttonText="ALLE ONDERDELEN"
          buttonLink="/onderdelen/pagina/1"
          square
          button
          short
        />
      </Container>

      <ParallexBanner
        image={Banner}
        title={"WAT WIJ DOEN"}
        text={
          "Bij ECU Repair staan we voor toonaangevende expertise in auto-onderdeel reparaties. Of het nu gaat om ECU's, tellerklokken, mechatronics of Mercedes contactsloten, ons team van deskundige monteurs heeft de ervaring en kennis om u te helpen. Onze klantgerichte benadering garandeert tevredenheid bij elke service."
        }
        buttonText={"MEER OVER ONS"}
        buttonLink={"/overons"}
      />

      <Container style={{ marginTop: "4rem" }}>
        <Title text="NIEUWS & UPDATES" size="lg" align="center" underline />
        <Text
          align="center"
          text="Duik dieper in de fascinerende wereld van auto-elektronica. Van handige tips tot het laatste nieuws, lees hier onze nieuwste artikelen en blijf geïnformeerd."
          slim
        />
        <ItemCards
          items={news}
          buttonText="ALLE BERICHTEN"
          buttonLink="/nieuws"
          short
        />
      </Container>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // Get first four products
  const { data: productsData } = await Axios.get(
    `${API_URL}/api/products?fields[0]=onderdeelnummer&fields[1]=samenvatting&populate[onderdeel][populate][afbeeldingen][fields][0]=url&pagination[pageSize]=4`
  );
  const products = productsData.data;

  // Get searchbar data
  const { data: searchbar } = await Axios.get(`${API_URL}/api/searchbar`);
  searchbar.sort((a, b) => a.naam.localeCompare(b.naam));
  searchbar.forEach((item) => {
    item.onderdeels.sort((a, b) => a.naam.localeCompare(b.naam));
  });

  // Get all nieuwsberichten
  const { data: newsData } = await Axios.get(
    `${API_URL}/api/nieuwsberichts?populate[omslagfoto][fields][0]=url&sort=id:desc&pagination[pageSize]=4`
  );

  const news = newsData.data;

  return {
    props: {
      searchbar,
      products,
      news,
    },
    revalidate: 10,
  };
}

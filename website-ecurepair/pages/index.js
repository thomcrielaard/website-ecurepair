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

import shuffleArray from "@/services/ShuffleArray";

import Banner from "@/assets/img/parallex.jpg";

export default function Home({ products, merkPart, news }) {
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

      <BigBanner MP={merkPart} />

      <Cards />

      <Container id="search">
        <Title text="ONZE ONDERDELEN" size="lg" align="center" />
        <Text
          text="Zoek en vind de essentiële auto-onderdelen die u nodig hebt. Onze uitgebreide catalogus biedt betrouwbare oplossingen voor uw specifieke behoeften. Betrouwbaarheid gegarandeerd."
          align="center"
          slim
        />
        <Searchbar MP={merkPart} showButton />
        <ItemCards
          items={products}
          buttonText="ALLE ONDERDELEN"
          buttonLink="/onderdelen"
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
  // Get all products
  const { data: productsData } = await Axios.get(
    `${API_URL}/api/products?populate=afbeelding`
  );

  const allProducts = productsData.data;

  const products = shuffleArray(allProducts);

  // Get all brands, models and types
  const res = await Axios.get(
    `${API_URL}/api/merks?populate=products.onderdeel&sort[0]=naam:asc`
  );
  const merksData = res.data.data; // navigate to the 'data' field in the response

  const merkPart = merksData.map((merk) => {
    // Get array of parts
    const parts = merk.attributes.products.data
      .map((part) => ({
        id: part.attributes.onderdeel.data.id,
        naam: part.attributes.onderdeel.data.attributes.naam,
      }))
      // Remove duplicates based on 'naam' property
      .filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.naam === value.naam)
      );

    // Deconstruct merk attributes, exclude parts and return with parts and merk id
    const { onderdeels, ...otherAttributes } = merk.attributes;
    return { id: merk.id, ...otherAttributes, parts };
  });

  // Get all nieuwsberichten
  const { data: newsData } = await Axios.get(
    `${API_URL}/api/nieuwsberichts?populate=omslagfoto&sort=id:desc`
  );

  const news = newsData.data;

  return {
    props: {
      merkPart,
      products,
      news,
    },
    revalidate: 10,
  };
}

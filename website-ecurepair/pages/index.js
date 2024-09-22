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

export default function Home({ products, searchbarData, news }) {
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

      <BigBanner searchbarData={searchbarData} />

      <Cards />

      <Container id="search">
        <Title text="ONZE ONDERDELEN" size="lg" align="center" />
        <Text
          text="Zoek en vind de essentiële auto-onderdelen die u nodig hebt. Onze uitgebreide catalogus biedt betrouwbare oplossingen voor uw specifieke behoeften. Betrouwbaarheid gegarandeerd."
          align="center"
          slim
        />
        <Searchbar searchbarData={searchbarData} showButton />
        <ItemCards
          items={products}
          buttonText="ALLE ONDERDELEN"
          buttonLink="/onderdelen"
          square
          button
          short
        />
      </Container>

      {/* <ParallexBanner
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
      </Container> */}

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // Get all products
  const { data: productsData } = await Axios.get(
    `${API_URL}/api/products?populate=afbeelding,subonderdeel.onderdeel.afbeeldingen`
  );

  const allProducts = productsData.data.map((product) => ({
    id: product.id,
    onderdeelnummer: product.attributes.onderdeelnummer,
    samenvatting: product.attributes.samenvatting,
    afbeelding: product.attributes.afbeelding.data
      ? product.attributes.afbeelding.data.attributes.url
      : product.attributes.subonderdeel.onderdeel.data.attributes.afbeeldingen
          .data[0].attributes.url,
  }));

  const products = shuffleArray(allProducts);

  // Get all brands, parts and subparts
  const brands = await Axios.get(
    `${API_URL}/api/merks?populate=products.subonderdeel.onderdeel&sort[0]=naam:asc`
  );
  const searchbarData = brands.data.data.map((merk) => {
    const onderdelen = merk.attributes.products.data.reduce(
      (partAcc, product) => {
        const onderdeelData =
          product.attributes.subonderdeel.data.attributes.onderdeel.data;
        const onderdeelId = onderdeelData.id;
        const onderdeelNaam = onderdeelData.attributes.naam;

        const subonderdeel = {
          id: product.attributes.subonderdeel.data.id,
          naam: product.attributes.subonderdeel.data.attributes.naam,
        };

        let onderdeel = partAcc.find((o) => o.id === onderdeelId);

        if (!onderdeel) {
          onderdeel = {
            id: onderdeelId,
            naam: onderdeelNaam,
            subonderdelen: [],
          };
          partAcc.push(onderdeel);
        }

        if (
          !onderdeel.subonderdelen.some((sub) => sub.id === subonderdeel.id)
        ) {
          onderdeel.subonderdelen.push(subonderdeel);
        }

        return partAcc;
      },
      []
    );

    return {
      id: merk.id,
      naam: merk.attributes.naam,
      onderdelen: onderdelen,
    };
  });

  // Get all nieuwsberichten
  const { data: newsData } = await Axios.get(
    `${API_URL}/api/nieuwsberichts?populate=omslagfoto&sort=id:desc`
  );

  const news = newsData.data.map((item) => ({
    id: item.id,
  }));

  return {
    props: {
      searchbarData,
      products,
      news,
    },
    revalidate: 10,
  };
}

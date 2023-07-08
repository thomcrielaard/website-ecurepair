import React from "react";
import Head from "next/head";
import Axios from "axios";
import { API_URL } from "./../_app";

import UseDimensions from "@/services/UseDimensions";

import Container from "@/components/containers/Container";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Searchbar from "@/components/modules/Searchbar";
import BigBanner from "@/components/modules/BigBanner";
import ProductCards from "@/components/modules/ProductCards";
import ParallexBanner from "@/components/modules/ParallexBanner";
import ErrorCodes from "@/components/modules/ErrorCodes";
import Cards from "@/components/modules/Cards";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";

import Product1 from "@/assets/img/abs.jpg";
import Product2 from "@/assets/img/airbag.jpg";
import shuffleArray from "@/services/ShuffleArray";

export default function Reparaties({ modules }) {
  const size = UseDimensions();

  return (
    <>
      <Head>
        <title>ABS Pomp Specialist &#8211; Reparaties</title>
        <meta
          name="description"
          content="ABS Pomp Specialist is een toonaangevende expert op het gebied van ABS pomp reparatie en revisie. Wij bieden een snelle, efficiënte en hoogwaardige service voor al uw ABS gerelateerde problemen. Ons team van ervaren monteurs staat altijd klaar om u te helpen. Uw veiligheid en tevredenheid zijn onze topprioriteiten."
        />
      </Head>

      <Navbar />

      <Container id="search">
        <Title text="VIND JOUW MODEL" size="lg" align="center" />
        <Text
          text="Zoek uw specifieke ABS pomp model op onze website. Voer eenvoudig het onderdeelnummer van uw ABS pomp in of zoek op uw model auto en ontdek de reparatiekosten. Wij bieden reparaties voor diverse automerken en modellen."
          align="center"
          slim
        />
        <Searchbar />
        <ProductCards items={modules} square price />
      </Container>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const { data: modulesData } = await Axios.get(
    `${API_URL}/api/abs-modules?populate=afbeelding&sort[0]=id:desc`
  );

  const modules = modulesData.data;

  return {
    props: {
      modules,
    },
  };
}

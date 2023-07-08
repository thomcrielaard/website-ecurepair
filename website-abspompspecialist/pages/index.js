import React from "react";
import Head from "next/head";
import Axios from "axios";
import { API_URL } from "./_app";

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

export default function Home({ brands, modules }) {
  const size = UseDimensions();

  return (
    <>
      <Head>
        <title>ABS Pomp Specialist &#8211; Home</title>
        <meta
          name="description"
          content="ABS Pomp Specialist is een toonaangevende expert op het gebied van ABS pomp reparatie en revisie. Wij bieden een snelle, efficiënte en hoogwaardige service voor al uw ABS gerelateerde problemen. Ons team van ervaren monteurs staat altijd klaar om u te helpen. Uw veiligheid en tevredenheid zijn onze topprioriteiten."
        />
      </Head>

      <Navbar transparent />

      <BigBanner />

      <Cards />

      <Container id="search">
        <Title text="VIND JOUW MODEL" size="lg" align="center" />
        <Text
          text="Zoek uw specifieke ABS pomp model op onze website. Voer eenvoudig het onderdeelnummer van uw ABS pomp in of zoek op uw model auto en ontdek de reparatiekosten. Wij bieden reparaties voor diverse automerken en modellen."
          align="center"
          slim
        />
        <Searchbar />
        <ProductCards
          items={modules}
          buttonText="ALLE MODELLEN"
          buttonLink="#"
          square
          button
          price
          short
        />
      </Container>

      <ParallexBanner />

      <Container style={{ marginTop: "4rem" }}>
        <Title
          text="VEELVOORKOMENDE FOUTEN"
          size="lg"
          align="center"
          underline
        />
        <Text
          align="center"
          text="Ontdek de meest voorkomende ABS pomp fouten voor verschillende automerken. Selecteer uw merk en krijg een overzicht van veelvoorkomende problemen. Klik op een probleem voor een uitgebreide beschrijving en mogelijke oplossingen."
          slim
        />
        <ErrorCodes codes={brands} />
      </Container>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const { data: brandsData } = await Axios.get(
    `${API_URL}/api/merks?&populate=foutomschrijvings.afbeelding`
  );

  // This will give you an array of all the merks
  const allBrands = brandsData.data;

  // Now, filter the merks that have at least one foutomschrijvings with homepagina = true
  let brands = allBrands.filter((brand) => {
    // foutomschrijvings is an array, so we can use the some() method
    return brand.attributes.foutomschrijvings.data.some(
      (foutomschrijvings) => foutomschrijvings.attributes.homepagina === true
    );
  });

  // Now, update foutomschrijvings for each brand so it only contains foutomschrijvings with homepagina = true
  brands = brands.map((brand) => {
    const filteredFoutomschrijvings =
      brand.attributes.foutomschrijvings.data.filter(
        (foutomschrijvings) => foutomschrijvings.attributes.homepagina === true
      );

    // Shuffle the foutomschrijvings array
    const shuffledFoutomschrijvings = shuffleArray(filteredFoutomschrijvings);

    // Replace the foutomschrijvings data with the shuffled and filtered foutomschrijvings
    brand.attributes.foutomschrijvings.data = shuffledFoutomschrijvings;

    return brand;
  });

  const { data: modulesData } = await Axios.get(
    `${API_URL}/api/abs-modules?populate=afbeelding`
  );

  const allModules = modulesData.data;

  const modules = shuffleArray(allModules);

  return {
    props: {
      brands,
      modules,
    },
  };
}

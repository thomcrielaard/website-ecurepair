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

import shuffleArray from "@/services/ShuffleArray";

export default function Home({
  popularBrands,
  modules,
  merkType,
  types,
  discount,
}) {
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

      <BigBanner MT={merkType} types={types} showButton />

      <Cards />

      <Container id="search">
        <Title text="VIND JOUW MODEL" size="lg" align="center" />
        <Text
          text="Zoek uw specifieke ABS pomp model op onze website. Voer eenvoudig het onderdeelnummer van uw ABS pomp in of zoek op uw model auto en ontdek de reparatiekosten. Wij bieden reparaties voor diverse automerken en modellen."
          align="center"
          slim
        />
        <Searchbar MT={merkType} types={types} showButton />
        <ProductCards
          items={modules}
          buttonText="ALLE MODELLEN"
          buttonLink="/reparaties"
          discount={discount}
          square
          button
          price
          short
        />
      </Container>

      <ParallexBanner />

      <Container style={{ marginTop: "4rem" }}>
        <Title
          text="VEEL VOORKOMENDE FOUTEN"
          size="lg"
          align="center"
          underline
        />
        <Text
          align="center"
          text="Ontdek de meest voorkomende ABS pomp fouten voor verschillende automerken. Selecteer uw merk en krijg een overzicht van veelvoorkomende problemen. Klik op een probleem voor een uitgebreide beschrijving en mogelijke oplossingen."
          slim
        />
        <ErrorCodes codes={popularBrands} />
      </Container>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const { data: discountData } = await Axios.get(`${API_URL}/api/korting`);

  const discount = discountData.data.attributes;

  // Get all foutomschrijvings
  const { data: brandsData } = await Axios.get(
    `${API_URL}/api/merks?&populate=foutcodes.foutomschrijving.afbeelding&sort=naam`
  );
  const allBrands = brandsData.data; // navigate to the 'data' field in the response

  const popularBrands = allBrands
    .map((brand) => {
      // Get array of types
      const foutomschrijvings = brand.attributes.foutcodes.data
        .filter(
          (code) =>
            code.attributes.foutomschrijving.data &&
            code.attributes.foutomschrijving.data.attributes.homepagina
        ) // filter out if foutomschrijving does not exist
        .map((code) => ({
          id: code.attributes.foutomschrijving.data.id,
          attributes: code.attributes.foutomschrijving.data.attributes,
        }))
        // Remove duplicates based on 'title' property
        .filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.id === value.id)
        );

      if (!foutomschrijvings.length) {
        return null;
      }

      // Deconstruct merk attributes, exclude abs_modules and return with types and merk id
      const { foutcodes, ...otherAttributes } = brand.attributes;
      return { id: brand.id, ...otherAttributes, foutomschrijvings };
    })
    .filter(Boolean);

  // Get all ABS modules
  const { data: modulesData } = await Axios.get(
    `${API_URL}/api/abs-modules?populate=type.afbeelding`
  );

  const allModules = modulesData.data;

  const modules = shuffleArray(allModules);

  // Get all brands, models and types
  const res = await Axios.get(
    `${API_URL}/api/merks?populate=abs_modules,abs_modules.type&sort[0]=naam:asc`
  );
  const merksData = res.data.data; // navigate to the 'data' field in the response

  const merkType = merksData.map((merk) => {
    // Get array of types
    const types = merk.attributes.abs_modules.data
      .map((module) => ({
        id: module.attributes.type.data.id,
        naam: module.attributes.type.data.attributes.naam,
      }))
      // Remove duplicates based on 'naam' property
      .filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.naam === value.naam)
      );

    // Deconstruct merk attributes, exclude abs_modules and return with types and merk id
    const { abs_modules, ...otherAttributes } = merk.attributes;
    return { id: merk.id, ...otherAttributes, types };
  });

  return {
    props: {
      popularBrands,
      modules,
      merkType,
      discount,
    },
  };
}

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
import RepairForm from "@/components/modules/RepairForm";
import Colors from "@/styles/Colors";

export default function Home({ popularBrands, modules, merkModelType }) {
  const size = UseDimensions();

  return (
    <>
      <Head>
        <title>ABS Pomp Specialist &#8211; Reparatieformulier</title>
        <meta
          name="description"
          content="ABS Pomp Specialist is een toonaangevende expert op het gebied van ABS pomp reparatie en revisie. Wij bieden een snelle, efficiënte en hoogwaardige service voor al uw ABS gerelateerde problemen. Ons team van ervaren monteurs staat altijd klaar om u te helpen. Uw veiligheid en tevredenheid zijn onze topprioriteiten."
        />
      </Head>

      <div style={{ backgroundColor: `${Colors.GRAY}F5` }}>
        <Navbar />

        <Container>
          <RepairForm />
        </Container>

        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Get all foutomschrijvings
  const { data: brandsData } = await Axios.get(
    `${API_URL}/api/merks?&populate=foutomschrijvings.afbeelding,models`
  );

  // This will give you an array of all the merks
  const allBrands = brandsData.data;

  // Now, filter the merks that have at least one foutomschrijvings with homepagina = true
  let popularBrands = allBrands.filter((brand) => {
    // foutomschrijvings is an array, so we can use the some() method
    return brand.attributes.foutomschrijvings.data.some(
      (foutomschrijvings) => foutomschrijvings.attributes.homepagina === true
    );
  });

  // Now, update foutomschrijvings for each brand so it only contains foutomschrijvings with homepagina = true
  popularBrands = popularBrands.map((brand) => {
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

  // Get all ABS modules
  const { data: modulesData } = await Axios.get(
    `${API_URL}/api/abs-modules?populate=afbeelding`
  );

  const allModules = modulesData.data;

  const modules = shuffleArray(allModules);

  // Get all brands, models and types
  const { data: merks } = await Axios.get(`${API_URL}/api/merks`);

  const merkModelType = await Promise.all(
    merks.data.map(async (merk) => {
      const { data: models } = await Axios.get(
        `${API_URL}/api/models?filters[merk][id]=${merk.id}`
      );

      const modelsData = await Promise.all(
        models.data.map(async (model) => {
          const { data: types } = await Axios.get(
            `${API_URL}/api/types?filters[model][id]=${model.id}`
          );

          return {
            ...model,
            attributes: {
              ...model.attributes,
              types: types.data,
            },
          };
        })
      );

      return {
        ...merk,
        attributes: {
          ...merk.attributes,
          models: modelsData,
        },
      };
    })
  );

  return {
    props: {
      popularBrands,
      modules,
      merkModelType,
    },
  };
}

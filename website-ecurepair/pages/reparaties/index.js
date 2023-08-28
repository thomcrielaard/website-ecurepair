import React from "react";
import Head from "next/head";
import Axios from "axios";
import { useRouter } from "next/router";
import { API_URL } from "./../_app";

import Container from "@/components/containers/Container";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Searchbar from "@/components/modules/Searchbar";
import ProductCards from "@/components/modules/ProductCards";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";
import Button from "@/components/modules/Button";
import Colors from "@/styles/Colors";

const filterModules = (modules, text, merk, type) => {
  const filteredModules = modules.filter((item) => {
    const { omschrijving, samenvatting, onderdeelnummer } = item.attributes;

    if (type && type != "DEFAULT" && item.attributes.type.data.id != type)
      return false;
    else if (merk && merk != "DEFAULT" && item.attributes.merk.data.id != merk)
      return false;

    // Filter based on search text
    if (
      !text ||
      omschrijving.includes(text) ||
      samenvatting.includes(text) ||
      onderdeelnummer.includes(
        text?.split(" ").join("").split("-").join("").split(".").join("")
      )
    ) {
      return true;
    }

    return false;
  });

  return filteredModules;
};

export default function Reparaties({ modules, merkType, discount }) {
  const router = useRouter();

  const searchText = router.query.onderdeel;
  const searchMerk = router.query.merk;
  const searchType = router.query.type;

  const [filteredModules, setFilteredModules] = React.useState(
    filterModules(modules, searchText, searchMerk, searchType)
  );

  const updateModules = (text, merk, type) =>
    setFilteredModules(filterModules(modules, text, merk, type));

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
        <Searchbar
          MT={merkType}
          text={searchText}
          merk={searchMerk}
          type={searchType}
          updateModules={(text, merk, type) => updateModules(text, merk, type)}
        />
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Button
            text="REPARATIEFORMULIER"
            color={Colors.GRAY}
            borderColor={Colors.GRAY}
            hoverColor={Colors.RED}
            hoverBorderColor={Colors.RED}
            style={{ marginTop: 30 }}
            href="/reparatieformulier"
            target="_blank"
          />
        </div>
        <ProductCards
          items={filteredModules}
          discount={discount}
          square
          price
        />
      </Container>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const { data: discountData } = await Axios.get(`${API_URL}/api/korting`);

  const discount = discountData.data.attributes;

  const { data: modulesData } = await Axios.get(
    `${API_URL}/api/abs-modules?populate=type.afbeelding,merk&sort[0]=id:desc`
  );

  const modules = modulesData.data;

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
      modules,
      merkType,
      discount,
    },
  };
}

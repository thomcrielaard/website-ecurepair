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

const filterModules = (modules, text, merk, part) => {
  const filteredModules = modules.filter((item) => {
    let { omschrijving, samenvatting, onderdeelnummer } = item.attributes;
    omschrijving = omschrijving.toLowerCase();
    samenvatting = samenvatting.toLowerCase();
    onderdeelnummer = onderdeelnummer.toLowerCase();

    if (part && part != "DEFAULT" && item.attributes.onderdeel.data.id != part)
      return false;
    else if (
      merk &&
      merk != "DEFAULT" &&
      !item.attributes.merks.data.some((m) => m.id == merk)
    )
      return false;

    // Filter based on search text
    if (
      !text ||
      omschrijving.includes(text.toLowerCase()) ||
      samenvatting.includes(text.toLowerCase()) ||
      onderdeelnummer.includes(
        text
          ?.split(" ")
          .join("")
          .split("-")
          .join("")
          .split(".")
          .join("")
          .toLowerCase()
      )
    ) {
      return true;
    }

    return false;
  });

  return filteredModules;
};

export default function Onderdelen({
  products,
  merkPart,
  discount,
  initialParts,
}) {
  const router = useRouter();

  const searchText = router.query.onderdeel;
  const searchMerk = router.query.merk;
  const searchPart = router.query.part;

  const [filteredModules, setFilteredModules] = React.useState(
    filterModules(products, searchText, searchMerk, searchPart)
  );

  const updateModules = (text, merk, part) =>
    setFilteredModules(filterModules(products, text, merk, part));

  return (
    <>
      <Head>
        <title>ECU Repair &#8211; Onderdelen</title>
        <meta
          name="description"
          content="Zoek en vind snel de juiste auto-onderdelen bij ECU Repair. Filter op merk, onderdeelnummer of type en ontdek ons uitgebreide assortiment."
        />
      </Head>

      <Navbar />

      <Container id="search">
        <Title text="VIND JOUW MODEL" size="lg" align="center" />
        <Text
          text="Zoek en vind de essentiële auto-onderdelen die u nodig hebt. Onze uitgebreide catalogus biedt betrouwbare oplossingen voor uw specifieke behoeften. Betrouwbaarheid gegarandeerd."
          align="center"
          slim
        />
        <Searchbar
          MP={merkPart}
          initialParts={initialParts}
          text={searchText}
          merk={searchMerk}
          part={searchPart}
          updateModules={(text, merk, part) => updateModules(text, merk, part)}
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
        <ItemCards items={filteredModules} discount={discount} square price />
      </Container>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // Get discount
  const { data: discountData } = await Axios.get(`${API_URL}/api/korting`);

  const discount = discountData.data.attributes;

  // Get all products
  const { data: productsData } = await Axios.get(
    `${API_URL}/api/products?populate=afbeelding,onderdeel,merks`
  );

  const products = productsData.data;

  // Get all brands and parts
  const res = await Axios.get(
    `${API_URL}/api/merks?populate=products.onderdeel&sort[0]=naam:asc`
  );
  const merksData = res.data.data;

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

  // Get initial parts so part can be selected in dropdown
  const { data: initialPartsData } = await Axios.get(
    `${API_URL}/api/onderdeels`
  );

  const initialParts = initialPartsData.data.map((part) => {
    return { id: part.id, naam: part.attributes.naam };
  });

  return {
    props: {
      merkPart,
      products,
      discount,
      initialParts,
    },
    revalidate: 10,
  };
}

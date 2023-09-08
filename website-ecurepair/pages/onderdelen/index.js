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
    const { omschrijving, samenvatting, onderdeelnummer } = item.attributes;

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
  };
}

import React from "react";
import Head from "next/head";
import Axios from "axios";
import { useRouter } from "next/router";
import { API_URL } from "./../_app";

import UseDimensions from "@/services/UseDimensions";

import Container from "@/components/containers/Container";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Searchbar from "@/components/modules/Searchbar";
import ProductCards from "@/components/modules/ProductCards";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";
import Button from "@/components/modules/Button";
import Colors from "@/styles/Colors";

const filterModules = (modules, text, merk, model, type) => {
  const filteredModules = modules.filter((item) => {
    const { autotypes, omschrijving, samenvatting, onderdeelnummer } =
      item.attributes;

    if (
      type &&
      type != "DEFAULT" &&
      !autotypes.data.some((type_) => type_.id == type)
    )
      return false;
    else if (
      model &&
      model != "DEFAULT" &&
      !autotypes.data.some((type) => type.attributes.model.data.id == model)
    )
      return false;
    else if (
      merk &&
      merk != "DEFAULT" &&
      !autotypes.data.some(
        (type) => type.attributes.model.data.attributes.merk.data.id == merk
      )
    )
      return false;

    // Filter based on search text
    if (
      !text ||
      omschrijving.includes(text) ||
      samenvatting.includes(text) ||
      onderdeelnummer.includes(text?.split(" ").join("").split("-").join(""))
    ) {
      return true;
    }

    return false;
  });

  return filteredModules;
};

export default function Reparaties({ modules, merkModelType }) {
  const size = UseDimensions();
  const router = useRouter();

  const searchText = router.query.onderdeel;
  const searchMerk = router.query.merk;
  const searchModel = router.query.model;
  const searchType = router.query.type;

  const [filteredModules, setFilteredModules] = React.useState(
    filterModules(modules, searchText, searchMerk, searchModel, searchType)
  );

  const updateModules = (text, merk, model, type) =>
    setFilteredModules(filterModules(modules, text, merk, model, type));

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
          MMT={merkModelType}
          text={searchText}
          merk={searchMerk}
          model={searchModel}
          type={searchType}
          updateModules={(text, merk, model, type) =>
            updateModules(text, merk, model, type)
          }
        />
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Button
            text="Reparatieformulier"
            color={Colors.GRAY}
            borderColor={Colors.GRAY}
            hoverColor={Colors.RED}
            hoverBorderColor={Colors.RED}
            style={{ marginTop: 30 }}
            href="/reparatieformulier"
            target="_blank"
          />
        </div>
        <ProductCards items={filteredModules} square price />
      </Container>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const { data: modulesData } = await Axios.get(
    `${API_URL}/api/abs-modules?populate=afbeelding,autotypes,autotypes.model,autotypes.model.merk&sort[0]=id:desc`
  );

  const modules = modulesData.data;

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
      modules,
      merkModelType,
    },
  };
}

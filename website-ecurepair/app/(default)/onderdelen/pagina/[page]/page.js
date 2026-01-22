import React from "react";
import Axios from "axios";

import { API_URL } from "@/pages/_app";

import Colors from "@/styles/Colors";
import Container from "@/components/containers/Container";

import Searchbar from "@/components/modules/Searchbar";
import ItemCards from "@/components/modules/ItemCards";
import Button from "@/components/modules/Button";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";

export async function generateMetadata({ params }) {
  const { page } = await params;
  return {
    title: `ECU Repair \u2013 Onderdelen | Pagina ${page}`,
    description: `Zoek en vind snel de juiste auto-onderdelen bij ECU Repair. U bekijkt pagina ${page} van het overzicht.`,
  };
}

// Cache the searchbar data globally to ensure it only fetches once
let cachedSearchbarData = null;

// Function to fetch the searchbar data only once
async function getSearchbarData() {
  if (!cachedSearchbarData) {
    const { data } = await Axios.get(`${API_URL}/api/searchbar`);
    data.sort((a, b) => a.naam.localeCompare(b.naam));
    data.forEach((item) => {
      item.onderdeels.sort((a, b) => a.naam.localeCompare(b.naam));
    });
    cachedSearchbarData = data;
  }
  return cachedSearchbarData;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  // Fetch product pagination paths
  const { data } = await Axios.get(
    `${API_URL}/api/products?pagination[pageSize]=8&fields=onderdeelnummer`,
  );

  const paths = Array.from(
    { length: data.meta.pagination.pageCount },
    (_, index) => ({
      page: (index + 1).toString(),
    }),
  );

  return paths;
}

export default async function OnderdelenPage({ params }) {
  const { page } = await params;

  // Fetch the searchbar data once and reuse it
  const searchbar = await getSearchbarData();

  // Fetch products data
  const { data: productsData } = await Axios.get(
    `${API_URL}/api/products?fields[0]=onderdeelnummer&fields[1]=samenvatting&populate[afbeelding][fields][0]=url&populate[onderdeel][populate][afbeeldingen][fields][0]=url&pagination[pageSize]=8&pagination[page]=${page}`,
  );

  const products = productsData.data;
  const pagination = productsData.meta.pagination;

  return (
    <>
      <Container id="search">
        <Title text="VIND JOUW MODEL" size="lg" align="center" h1 />
        <Text
          text="Zoek en vind de essentiële auto-onderdelen die u nodig hebt. Onze uitgebreide catalogus biedt betrouwbare oplossingen voor uw specifieke behoeften. Betrouwbaarheid gegarandeerd."
          align="center"
          slim
        />
        <Searchbar searchbarData={searchbar} />
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
            href="https://www.reparatieformulier.nl/reparaties/nieuw?ref=ECUR"
            target="_blank"
          />
        </div>
        <ItemCards
          items={products}
          square
          pageCount={pagination.pageCount}
          page={pagination.page}
        />
      </Container>
    </>
  );
}

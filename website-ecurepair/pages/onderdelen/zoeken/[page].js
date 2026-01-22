import React from "react";
import Head from "next/head";
import Axios from "axios";
import { useRouter } from "next/router";
import { API_URL } from "../../_app";

import Container from "@/components/containers/Container";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Searchbar from "@/components/modules/Searchbar";
import ItemCards from "@/components/modules/ItemCards";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";
import Button from "@/components/modules/Button";
import Colors from "@/styles/Colors";

export default function Onderdelen({
  products,
  searchbar,
  initialParts,
  pagination,
}) {
  const router = useRouter();

  const searchText = router.query.onderdeel ?? "";
  const searchMerk = router.query.merk;
  const searchPart = router.query.part;

  return (
    <>
      <Head>
        <title>ECU Repair – Onderdelen</title>
        <meta
          name="description"
          content="Zoek en vind snel de juiste auto-onderdelen bij ECU Repair. Filter op merk, onderdeelnummer of type en ontdek ons uitgebreide assortiment."
        />
      </Head>

      <Navbar />

      <Container id="search">
        <Title text="VIND JOUW MODEL" size="lg" align="center" h1 />
        <Text
          text="Zoek en vind de essentiële auto-onderdelen die u nodig hebt. Onze uitgebreide catalogus biedt betrouwbare oplossingen voor uw specifieke behoeften. Betrouwbaarheid gegarandeerd."
          align="center"
          slim
        />
        <Searchbar
          searchbarData={searchbar}
          initialParts={initialParts}
          text={searchText}
          merk={searchMerk}
          part={searchPart}
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
            href="https://www.reparatieformulier.nl/reparaties/nieuw?ref=ECUR"
            target="_blank"
          />
        </div>
        <ItemCards
          items={products}
          square
          searchText={searchText}
          searchMerk={searchMerk}
          searchPart={searchPart}
          pageCount={pagination.pageCount}
          page={pagination.page}
          search
        />
      </Container>

      <Footer />
    </>
  );
}

// Use getServerSideProps for dynamic rendering
export async function getServerSideProps(context) {
  const { onderdeel = "", merk = "", part = "", page = 1 } = context.query;

  // Get searched products
  const { data: productsData } = await Axios.get(
    `${API_URL}/api/products/search?tekst=${onderdeel}&merk=${merk}&onderdeel=${part}&pagination[page]=${page}&pagination[pageSize]=8`,
  );

  const products = productsData.data;
  const pagination = productsData.meta.pagination;

  // Get searchbar data
  const { data: searchbar } = await Axios.get(`${API_URL}/api/searchbar`);
  searchbar.sort((a, b) => a.naam.localeCompare(b.naam));
  searchbar.forEach((item) => {
    item.onderdeels.sort((a, b) => a.naam.localeCompare(b.naam));
  });

  let initialParts = [];
  if (merk) {
    initialParts = searchbar.find((item) => item.id == merk).onderdeels;
  }

  return {
    props: {
      searchbar,
      initialParts,
      products,
      pagination,
    },
  };
}

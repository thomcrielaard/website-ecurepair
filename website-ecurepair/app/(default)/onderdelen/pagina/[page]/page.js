import React from "react";
import Axios from "axios";
import { notFound } from "next/navigation";

import { API_URL } from "@/pages/_app";

import Colors from "@/styles/Colors";
import Container from "@/components/containers/Container";

import Searchbar from "@/components/modules/Searchbar";
import ItemCards from "@/components/modules/ItemCards";
import Button from "@/components/modules/Button";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";

// ISR: cache each page for 1 hour (adjust as you like)
export const revalidate = 3600;

// Cache the searchbar data globally to ensure it only fetches once per server instance
let cachedSearchbarData = null;

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

export async function generateMetadata({ params }) {
  const { page } = params;

  return {
    title: `ECU Repair – Onderdelen | Pagina ${page}`,
    description: `Zoek en vind snel de juiste auto-onderdelen bij ECU Repair. U bekijkt pagina ${page} van het overzicht.`,
  };
}

export default async function OnderdelenPage({ params }) {
  const page = Number(params.page);

  // basic validation
  if (!Number.isFinite(page) || page < 1) {
    notFound();
  }

  // Fetch the searchbar data once and reuse it
  const searchbar = await getSearchbarData();

  try {
    // Stable sort is IMPORTANT, otherwise pagination "moves"
    // If you prefer onderdeelnummer sorting:
    // sort[0]=onderdeelnummer:asc&sort[1]=id:asc
    const url =
      `${API_URL}/api/products` +
      `?fields[0]=onderdeelnummer` +
      `&fields[1]=samenvatting` +
      `&populate[afbeelding][fields][0]=url` +
      `&populate[onderdeel][populate][afbeeldingen][fields][0]=url` +
      `&pagination[pageSize]=8` +
      `&pagination[page]=${page}` +
      `&sort[0]=id:asc`;

    const { data: productsData } = await Axios.get(url);

    const products = productsData.data ?? [];
    const pagination = productsData.meta?.pagination;

    // If user requests page beyond pageCount, 404 it
    if (!pagination || page > pagination.pageCount) {
      notFound();
    }

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
  } catch (err) {
    // During build/export Strapi may throw 500/401 when overloaded.
    // We do NOT want that to crash the app; treat it as not found temporarily.
    notFound();
  }
}

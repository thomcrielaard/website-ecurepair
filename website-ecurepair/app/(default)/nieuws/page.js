// app/nieuws/page.js
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/containers/Container";

import ItemCards from "@/components/modules/ItemCards";
import Title from "@/components/text/Title";
import Text from "@/components/text/Text";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// ISR like your old page
export const revalidate = 10;

export const metadata = {
  title: "ECU Repair – Nieuwsberichten",
  description:
    "Volg het laatste nieuws en updates van ECU Repair. Blijf op de hoogte van trends in auto-elektronica en onze recente projecten en innovaties.",
};

async function getNewsItems() {
  const url =
    `${API_URL}/api/nieuwsberichts` +
    `?populate[omslagfoto][fields][0]=url` +
    `&sort=id:desc`;

  const res = await fetch(url, { next: { revalidate } });
  if (!res.ok) {
    throw new Error(`Failed fetching nieuwsberichts: ${res.status}`);
  }

  const json = await res.json();
  return json.data ?? [];
}

export default async function NieuwsberichtenPage() {
  const items = await getNewsItems();

  return (
    <Container>
      <Title text="NIEUWS & UPDATES" size="lg" align="center" underline h1 />
      <Text
        align="center"
        text="Duik dieper in de fascinerende wereld van auto-elektronica. Van handige tips tot het laatste nieuws, lees hier onze nieuwste artikelen en blijf geïnformeerd."
        slim
      />
      <ItemCards items={items} />
    </Container>
  );
}

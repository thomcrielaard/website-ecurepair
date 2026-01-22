// app/page.js
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/containers/Container";

import Searchbar from "@/components/modules/Searchbar";
import BigBanner from "@/components/modules/BigBanner";
import ItemCards from "@/components/modules/ItemCards";
import ParallexBanner from "@/components/modules/ParallexBanner";
import Cards from "@/components/modules/Cards";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";

import Banner from "@/assets/img/parallex.jpg";
import ServiceRevealCards from "@/components/modules/ServiceRevealCards";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// ISR like your old Home page
export const revalidate = 10;

export const metadata = {
  title: "ECU Repair – Home",
  description:
    "ECU Repair is specialist in testen, repareren en reviseren van auto-elektronica zoals ECU's, DSG, mechatronics, contactsloten en hybride accu's.",
};

async function getProducts() {
  const url =
    `${API_URL}/api/products` +
    `?fields[0]=onderdeelnummer` +
    `&fields[1]=samenvatting` +
    `&populate[onderdeel][populate][afbeeldingen][fields][0]=url` +
    `&pagination[pageSize]=4`;

  const res = await fetch(url, { next: { revalidate } });
  if (!res.ok) throw new Error(`Failed fetching products: ${res.status}`);

  const json = await res.json();
  return json.data ?? [];
}

async function getSearchbar() {
  const res = await fetch(`${API_URL}/api/searchbar`, { next: { revalidate } });
  if (!res.ok) throw new Error(`Failed fetching searchbar: ${res.status}`);

  const data = await res.json();

  // keep your existing sort logic
  data.sort((a, b) => a.naam.localeCompare(b.naam));
  data.forEach((item) => {
    item.onderdeels.sort((a, b) => a.naam.localeCompare(b.naam));
  });

  return data;
}

async function getNews() {
  const url =
    `${API_URL}/api/nieuwsberichts` +
    `?populate[omslagfoto][fields][0]=url` +
    `&sort=id:desc` +
    `&pagination[pageSize]=4`;

  const res = await fetch(url, { next: { revalidate } });
  if (!res.ok) throw new Error(`Failed fetching nieuwsberichts: ${res.status}`);

  const json = await res.json();
  return json.data ?? [];
}

export default async function HomePage() {
  const [products, searchbar, news] = await Promise.all([
    getProducts(),
    getSearchbar(),
    getNews(),
  ]);

  return (
    <>
      <Navbar transparent />

      <BigBanner searchbarData={searchbar} />

      <Cards />

      <Container>
        <Title text="Onze diensten" size="lg" align="center" underline />
        <Text align="center" className="mb-8" slim>
          Wij bij ECU Repair specialiseren ons in alles op het gebied van auto
          elektronica. Zo bieden wij full-service oplossingen voor{" "}
          <em>ECU&apos;s</em>, <em>DSG&apos;s</em>, <em>mechatronics</em>,{" "}
          <em>hybride accu&apos;s</em> en <em>Mercedes contactsloten</em>. Wij
          helpen garagebedrijven met reparaties, revisies en tests voor al deze
          onderdelen. Wij begrijpen dat jouw klant niet zit te wachten op
          onnodige kosten en lange wachttijden. Daarom bieden wij snelle,
          betrouwbare en betaalbare oplossingen op maat. Benieuwd naar wat wij
          voor jou kunnen betekenen? Lees dan verder!
        </Text>

        <ServiceRevealCards
          includeIds={[
            "dsg-revisie",
            "ecu-reparatie",
            "ecu-testen",
            "ecu-revisie",
            "mercedes-contactslot-reparatie",
            "mechatronic-reparatie",
          ]}
        />
      </Container>

      <Container id="search">
        <Title text="ONZE ONDERDELEN" size="lg" align="center" />
        <Text
          text="Zoek en vind de essentiële auto-onderdelen die u nodig hebt. Onze uitgebreide catalogus biedt betrouwbare oplossingen voor uw specifieke behoeften. Betrouwbaarheid gegarandeerd."
          align="center"
          className="mb-4"
          slim
        />
        <Searchbar searchbarData={searchbar} showButton />
        <ItemCards
          items={products}
          buttonText="ALLE ONDERDELEN"
          buttonLink="/onderdelen/pagina/1"
          square
          button
          short
        />
      </Container>

      <ParallexBanner
        image={Banner}
        title={"WAT WIJ DOEN"}
        buttonText={"MEER OVER ONS"}
        buttonLink={"/overons"}
      >
        Wij testen en herstellen auto-elektronica op componentniveau. Dat
        betekent: onderdelen los van het voertuig onderzoeken, signalen en
        communicatie controleren en vaststellen of reparatie of revisie de beste
        oplossing is. Als het mogelijk is, repareren we gericht en vervangen we
        zo min mogelijk componenten. Verder leveren we advies over bekende
        problemen en mogelijke revisies. Zo weet je vooraf waar je aan toe bent
        en kun je je klant beter informeren.
      </ParallexBanner>

      <Container style={{ marginTop: "4rem" }}>
        <Title text="NIEUWS & UPDATES" size="lg" align="center" underline />
        <Text
          align="center"
          text="Duik dieper in de fascinerende wereld van auto-elektronica. Van handige tips tot het laatste nieuws, lees hier onze nieuwste artikelen en blijf geïnformeerd."
          slim
        />
        <ItemCards
          items={news}
          buttonText="ALLE BERICHTEN"
          buttonLink="/nieuws"
          short
        />
      </Container>

      <Footer />
    </>
  );
}

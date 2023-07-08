import Image from "next/image";
import Head from "next/head";
import Axios from "axios";

import { API_URL } from "./_app";

import UseDimensions from "@/services/UseDimensions";

import Container from "@/components/containers/Container";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";

import ErrorCodesOverview from "@/components/modules/ErrorCodesOverview";

function Foutcodes({ brands }) {
  const size = UseDimensions();

  return (
    <>
      <Head>
        <title>ABS Pomp Specialist &#8211; Foutcodes</title>
        <meta
          name="description"
          content="Ontdek de meest voorkomende ABS pomp fouten voor verschillende automerken. Selecteer uw merk en krijg een overzicht van veelvoorkomende problemen. Klik op een probleem voor een uitgebreide beschrijving en mogelijke oplossingen."
        />
      </Head>

      <Navbar />

      <Container>
        <Title text="ALLE FOUTCODES" size="lg" align="center" />
        <Text
          align="center"
          text="Ontdek de meest voorkomende ABS pomp foutcodes voor verschillende automerken. Kijk bij uw merk en krijg een overzicht van veelvoorkomende foutcodes. Klik op een foutcode voor een uitgebreide beschrijving en mogelijke oplossingen."
          slim
        />
        <div style={{ height: 20 }} />
        <ErrorCodesOverview brands={brands.data} />
      </Container>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const data = await Axios.get(
    `${API_URL}/api/merks?sort[0]=naam&populate=deep,3`
  );

  const brands = data.data;

  return {
    props: {
      brands,
    },
  };
}

export default Foutcodes;

import Image from "next/image";
import Head from "next/head";

import { API_URL } from "./_app";

import UseDimensions from "@/services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";
import Colors from "@/styles/Colors";

import Container from "@/components/containers/Container";
import SideContainer from "@/components/containers/SideContainer";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import IconBar from "@/components/modules/IconBar";
import ExpandableCards from "@/components/modules/ExpandableCards";
import Button from "@/components/modules/Button";
import ContactInfo from "@/components/modules/ContactInfo";
import ContactForm from "@/components/modules/ContactForm";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";

import Product1 from "@/assets/img/abs.jpg";
import tmp from "@/assets/img/about-repair.jpg";
import Product2 from "@/assets/img/airbag.jpg";
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
  const https = require("https");
  const httpsAgent = new https.Agent({ rejectUnauthorized: false });
  const res = await fetch(`${API_URL}/api/merks?sort[0]=naam&populate=deep,3`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
    agent: httpsAgent,
  });

  const brands = await res.json();

  return {
    props: {
      brands,
    },
  };
}

export default Foutcodes;

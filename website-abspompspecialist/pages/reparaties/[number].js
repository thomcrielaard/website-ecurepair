import * as React from "react";
import { API_URL } from "../_app";
import Axios from "axios";
import Head from "next/head";

import Colors from "../../styles/Colors";
import Breakpoints from "../../styles/Breakpoints";
import UseDimensions from "../../services/UseDimensions";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ErrorDescription from "@/components/modules/ErrorDescription";
import Container from "@/components/containers/Container";
import AbsDescription from "@/components/modules/AbsDescription";

function Error({ absModule }) {
  const size = UseDimensions();

  return (
    <>
      <Head>
        <title>
          ABS Pomp Specialist &#8211; {absModule.attributes.onderdeelnummer}
        </title>
        <meta
          name="description"
          content="Ontdek de meest voorkomende ABS pomp fouten voor verschillende automerken. Selecteer uw merk en krijg een overzicht van veelvoorkomende problemen. Klik op een probleem voor een uitgebreide beschrijving en mogelijke oplossingen."
        />
      </Head>

      <Navbar />

      <Container>
        <AbsDescription abs={absModule.attributes} />
      </Container>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await Axios.get(`${API_URL}/api/abs-modules`);

  const paths = data.data.map((module) => {
    return {
      params: { number: `${module.onderdeelnummer}` },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { data } = await Axios.get(
    `${API_URL}/api/abs-modules?filters[onderdeelnummer][$eq]=${context.params.number}&populate=afbeelding,foutcodes,foutcodes.foutomschrijving,autotypes,autotypes.model,autotypes.model.merk`
  );

  const absModule = data.data[0];

  return {
    props: {
      absModule,
    },
  };
}

export default Error;

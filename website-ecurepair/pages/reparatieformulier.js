import React from "react";
import Head from "next/head";

import Container from "@/components/containers/Container";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import RepairForm from "@/components/modules/RepairForm";
import Colors from "@/styles/Colors";

export default function Reparatieformulier() {
  return (
    <>
      <Head>
        <title>ABS Pomp Specialist &#8211; Reparatieformulier</title>
        <meta
          name="description"
          content="ABS Pomp Specialist is een toonaangevende expert op het gebied van ABS pomp reparatie en revisie. Wij bieden een snelle, efficiënte en hoogwaardige service voor al uw ABS gerelateerde problemen. Ons team van ervaren monteurs staat altijd klaar om u te helpen. Uw veiligheid en tevredenheid zijn onze topprioriteiten."
        />
      </Head>

      <div style={{ backgroundColor: `${Colors.GRAY}F5` }}>
        <Navbar />

        <Container>
          <RepairForm />
        </Container>

        <Footer />
      </div>
    </>
  );
}
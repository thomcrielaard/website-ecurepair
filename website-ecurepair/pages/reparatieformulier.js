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
        <title>ECU Repair &#8211; Reparatieformulier</title>
        <meta
          name="description"
          content="Vul het Reparatieformulier in met uw autogegevens en beschrijf het probleem. Wij nemen spoedig contact op om uw auto-elektronica issue te adresseren."
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

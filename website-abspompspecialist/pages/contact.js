import Image from "next/image";
import Head from "next/head";

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

export default function Contact() {
  const size = UseDimensions();

  return (
    <>
      <Head>
        <title>ABS Pomp Specialist &#8211; Contact</title>
        <meta
          name="description"
          content="ABS Pomp Specialist is een toonaangevende expert op het gebied van ABS pomp reparatie en revisie. Wij bieden een snelle, efficiënte en hoogwaardige service voor al uw ABS gerelateerde problemen. Ons team van ervaren monteurs staat altijd klaar om u te helpen. Uw veiligheid en tevredenheid zijn onze topprioriteiten."
        />
      </Head>

      <Navbar />

      <Container
        innerStyle={{
          display: "flex",
          flexWrap: "wrap",
          gap: size.width < Breakpoints.sm ? "6rem" : 0,
        }}
      >
        <ContactInfo />
        <ContactForm />
      </Container>

      <Footer />
    </>
  );
}

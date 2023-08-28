import Head from "next/head";

import UseDimensions from "@/services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";

import Container from "@/components/containers/Container";

import styles from "@/styles/pages/contact.module.scss";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ContactInfo from "@/components/modules/ContactInfo";
import ContactForm from "@/components/modules/ContactForm";

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

      <Container innerClassName={styles.ContactFormContainer}>
        <ContactInfo />
        <ContactForm />
      </Container>

      <Footer />
    </>
  );
}

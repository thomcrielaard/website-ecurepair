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
        <title>ECU Repair &#8211; Contact</title>
        <meta
          name="description"
          content="Neem contact op met ECU Repair voor vragen over ECU, DSG, mechatronics, Mercedes contactsloten en tellerklok reparaties. Vind ons adres of stuur ons direct een bericht via het formulier."
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

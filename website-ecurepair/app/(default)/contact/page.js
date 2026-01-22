import Container from "@/components/containers/Container";

import styles from "@/styles/pages/contact.module.scss";

import ContactInfo from "@/components/modules/ContactInfo";
import ContactForm from "@/components/modules/ContactForm";

export function generateMetadata() {
  return {
    title: "ECU Repair – Contact",
    description:
      "Neem contact op met ECU Repair voor vragen over ECU, DSG, mechatronics, Mercedes contactsloten en tellerklok reparaties. Vind ons adres of stuur ons direct een bericht via het formulier.",
  };
}

export default function ContactPage() {
  return (
    <Container innerClassName={styles.ContactFormContainer}>
      <ContactInfo />
      <ContactForm />
    </Container>
  );
}

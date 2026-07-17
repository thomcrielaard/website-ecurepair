import Container from "@/components/containers/Container";

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
    <Container innerClassName="flex flex-wrap gap-24 md:gap-0">
      <ContactInfo />
      <ContactForm />
    </Container>
  );
}

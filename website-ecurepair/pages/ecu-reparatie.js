import Image from "next/image";
import Head from "next/head";

import styles from "@/styles/pages/overons.module.scss";

import Breakpoints from "@/styles/Breakpoints";
import Colors from "@/styles/Colors";

import Container from "@/components/containers/Container";
import SideContainer from "@/components/containers/SideContainer";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import IconBar from "@/components/modules/IconBar";
import ExpandableCards from "@/components/modules/ExpandableCards";
import Button from "@/components/modules/Button";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";

import ECU from "@/assets/img/ecu.webp";
import ECUBanner from "@/assets/img/about-ecu.jpg";
import ParallexBanner from "@/components/modules/ParallexBanner";

export default function EcuReparatie() {
  return (
    <>
      <Head>
        <title>ECU Repair &#8211; ECU reparatie</title>
        <meta
          name="description"
          content="Bij ABS Pomp Specialist zijn we trots op onze toewijding aan uitmuntendheid en klanttevredenheid. Als toonaangevende expert op het gebied van ABS pomp reparatie en revisie, hebben we een team van ervaren monteurs die altijd klaar staan om u te helpen."
        />
      </Head>

      <Navbar />

      <Container>
        <SideContainer
          reverse
          left={
            <>
              <Title
                text="DE ECU"
                className={styles.OverOnsTitleResponsive}
                containerClassName={styles.OverOnsTitleBarResponsive}
                size="lg"
                underline
              />
              <Text text="De Electronic Control Unit, beter bekend als de ECU, is het brein van de auto. Het reguleert en beheert talloze functies binnen uw voertuig, van brandstofinjectie tot uitlaatemissies. Deze ingewikkelde module is verantwoordelijk voor de efficiënte werking van bijna elk systeem van uw voertuig, zorgend voor optimale prestaties en een soepele rijervaring." />
              <Text text="Echter, net als elk geavanceerd elektronisch systeem, is de ECU ook vatbaar voor storingen en defecten. Wanneer er problemen optreden met de ECU, kunnen deze zich uiten in tal van manieren, van verminderde brandstofefficiëntie tot verminderde motorprestaties. Het tijdig herkennen van deze symptomen kan het verschil betekenen tussen een kleine reparatie en een dure vervanging." />
              <Text text="De moderne autowereld evolueert in een razendsnel tempo, en centraal in deze evolutie staat de ECU. Met de opkomst van geavanceerde technologieën en systemen, zoals adaptieve cruise control, geavanceerde rijstrookassistentie en automatisch parkeren, speelt de ECU een nog grotere rol in het waarborgen van zowel veiligheid als efficiëntie. Daarom is het essentieel om uw ECU in topconditie te houden en regelmatig te laten controleren door experts zoals ECU Repair." />
            </>
          }
          right={
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1/1",
              }}
            >
              <Image
                src={ECU}
                alt="ECU"
                style={{ objectFit: "cover" }}
                fill
                sizes={`(min-width: ${Breakpoints.sm}) 45vw, 100vw`}
                placeholder="blur"
                priority
              />
            </div>
          }
        />
      </Container>

      <ParallexBanner
        image={ECUBanner}
        title={"ECU DEFECT?"}
        text={
          "Als uw auto tekenen vertoont van mogelijke ECU-problemen, aarzel dan niet. Ons ervaren team staat klaar om elk ECU-probleem dat u tegenkomt aan te pakken. Van diagnose tot reparatie en vervanging, we begeleiden u bij elke stap."
        }
        buttonText={"CONTACT OPNEMEN"}
        buttonLink={"/contact"}
      />
      <Container>
        <Title text="ECU DIENSTEN" align="center" size="lg" underline />
        <SideContainer
          style={{ marginTop: 20 }}
          alignTop
          left={
            <>
              <Text text="Bij ECU Repair begrijpen we het kritieke belang van de Electronic Control Unit (ECU) in het functioneren van een voertuig. De ECU, als hart van de auto-elektronica, beïnvloedt vrijwel elke functie van uw voertuig, en een klein defect kan grote gevolgen hebben. Van startproblemen tot haperingen bij het intrappen van het gaspedaal, de ECU kan vaak de onderliggende oorzaak zijn." />
              <Text text="Het testen van ECU’s gebeurt bij ons met behulp van het geavanceerde ELTECH testplatform. Met dit state-of-the-art systeem simuleren we de werking van een ECU binnen een auto naadloos. Dankzij regelmatige updates blijft het platform altijd in lijn met de nieuwste technologieën, en de communicatie met de meest recente CAN, LIN en J1850 netwerkbussen verloopt vlekkeloos." />
            </>
          }
          right={
            <>
              <Text text="Mocht er sprake zijn van defecten of storingen, dan is het essentieel om snel en effectief te handelen. De ECU is opgebouwd uit diverse complexe componenten, zoals bondjes met printplaten. Deze ingewikkelde samenstelling maakt het gevoelig voor problemen. Bij ECU Repair bent u verzekerd van experts die u voorzien van grondige revisie- en reparatiediensten." />
              <Text text="Voor diegenen die een defecte ECU willen laten reviseren of repareren, bieden wij een breed scala aan diensten voor talloze merken en modellen. En mocht uw specifieke model er onverhoopt niet tussen zitten, wees gerust. Neem contact met ons op en we vinden samen een oplossing. Buiten ECU's beschikken we ook over expertise in andere auto-elektronica, zoals ABS Pompen, Brandstofpompen, en nog veel meer." />
            </>
          }
        />
      </Container>

      <Footer />
    </>
  );
}

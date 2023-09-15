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

import Mercedes from "@/assets/img/mercedes.png";
import MercedesBanner from "@/assets/img/mercedes-banner.jpg";
import ParallexBanner from "@/components/modules/ParallexBanner";

export default function MercedesContactsloten() {
  return (
    <>
      <Head>
        <title>ECU Repair &#8211; Mercedes Contactsloten</title>
        <meta
          name="description"
          content="Mercedes-Benz contactslot reparatie bij ECU Repair: Kwalitatieve service in defecte contactsloten, sleutelhapering & Electronic Steering Lock (ESL) problemen."
        />
      </Head>

      <Navbar />

      <Container>
        <SideContainer
          reverse
          left={
            <>
              <Title
                text="MERCEDES-BENZ"
                className={styles.OverOnsTitleResponsive}
                containerClassName={styles.OverOnsTitleBarResponsive}
                size="lg"
                underline
              />
              <Text text="Mercedes-Benz staat bekend om zijn precisie en verfijnde technologie, en het contactslot van deze voertuigen is geen uitzondering. Een goed functionerend contactslot is essentieel voor de algehele werking van uw auto. Als uw Mercedes-sleutel hapert, niet draait, of andere problemen vertoont, kan dit een teken zijn van een defect contactslot." />
              <Text text="Het team van ECU Repair is gespecialiseerd in de fijne kneepjes van Mercedes technologie. We hebben diepgaande kennis van de systemen en de complexiteit van hun contactsloten. Het herstellen van dit component vereist een grondig inzicht om ervoor te zorgen dat uw Mercedes-Benz weer naadloos functioneert." />
              <Text text="Het contactslot is meer dan alleen een slot; het is een integraal onderdeel van het elektronische ecosysteem van uw voertuig. Wanneer u problemen ondervindt, is snelle en effectieve service essentieel." />
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
                src={Mercedes}
                alt="Mercedes contactslot"
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
        image={MercedesBanner}
        title={"CONTACTSLOT DEFECT?"}
        text={
          "Is het contactslot van uw Mercedes-Benz aan het haperen of werkt het helemaal niet meer? Dergelijke problemen kunnen uw dagelijkse routine verstoren en voor stress zorgen. Maar maakt u zich geen zorgen, ons team van experts bij ECU Repair is er speciaal voor opgeleid om u hierbij te helpen."
        }
        buttonText={"CONTACT OPNEMEN"}
        buttonLink={"/contact"}
      />
      <Container>
        <Title text="SYMPTOMEN" align="center" size="lg" underline />
        <SideContainer
          style={{ marginTop: 20 }}
          alignTop
          left={
            <>
              <Text text="Als u moeite heeft met het starten van uw Mercedes-Benz, kan dit te wijten zijn aan een intern probleem binnen het contactslot of een elektronische storing. Het is cruciaal om dit snel te identificeren, omdat het negeren van dergelijke problemen verdere schade aan uw voertuig kan veroorzaken, wat leidt tot hogere reparatiekosten op de lange termijn." />
              <Text text="Problemen met het inbrengen of draaien van de sleutel in het contactslot zijn eveneens veelvoorkomende symptomen van een defect contactslot. Dit kan veroorzaakt worden door slijtage van het slot zelf, maar ook door problemen met de Electronic Steering Lock (ESL). Het niet tijdig aanpakken hiervan kan resulteren in een sleutel die vastzit of zelfs afbreekt in het slot." />
            </>
          }
          right={
            <>
              <Text text="Het contactslot van uw Mercedes-Benz is nauw verbonden met het centrale vergrendelingssysteem. Als u merkt dat de vergrendeling niet goed functioneert, of helemaal niet meer reageert, kan dit een teken zijn dat het contactslot defect is. Deze storing kan het risico op diefstal verhogen en kan de veiligheid van het voertuig in gevaar brengen." />
              <Text text="Moderne Mercedes-Benz voertuigen integreren elektronische chips in hun sleutels en contactsloten. Deze chips communiceren met elkaar om het voertuig te starten. Eventuele datacorruptie in deze chips, vaak door slijtage of waterschade, kan ertoe leiden dat uw auto niet meer start. Het is essentieel om regelmatige controles uit te voeren om zulke problemen tijdig op te sporen." />
            </>
          }
        />
      </Container>

      <Footer />
    </>
  );
}

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

import DSG from "@/assets/img/dsg.png";
import DSGBanner from "@/assets/img/dsg-banner.jpg";
import ParallexBanner from "@/components/modules/ParallexBanner";

export default function DsgReparatie() {
  return (
    <>
      <Head>
        <title>ECU Repair &#8211; DSG reparatie</title>
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
                text="DSG DIENSTEN"
                className={styles.OverOnsTitleResponsive}
                containerClassName={styles.OverOnsTitleBarResponsive}
                size="lg"
                underline
              />
              <Text text="ECU Repair is de expert in DSG revisie. Dagelijks behandelen wij zowel DSG-6 als DSG-7 modellen met een combinatie van vakmanschap en passie. Het revisieproces is grondig: na een uitgebreide diagnose wordt de DSG volledig ontmanteld, elk onderdeel geïnspecteerd en versleten componenten vervangen. Wanneer we de DSG opnieuw hebben opgebouwd, controleren we de werking zorgvuldig. Na onze revisie presteert uw DSG alsof het splinternieuw is, klaar voor honderdduizenden extra kilometers." />
              <Text text="Naast revisie biedt ECU Repair ook gespecialiseerde DSG reparatiediensten. Als uw DSG versnellingsbak problemen ondervindt, kunnen we met onze 15+ jaar ervaring in het veld, effectief de kern van het probleem identificeren. Door onze diepgaande kennis van DSG systemen, zowel DSG-6 als DSG-7, zijn we in staat om snel en effectief diagnose te stellen en probleemgebieden uit te sluiten. Dit betekent een snellere reparatie en kostenbesparingen voor u. Bovendien, als reparatie of revisie niet haalbaar is, adviseren we ook over vervangingsopties voor uw DSG." />
              <Text text="Wanneer reparatie of revisie niet haalbaar blijkt, staan wij klaar om uw DSG te vervangen. Met een ruim aanbod van nieuwe, tweedehandse en zelfs gereviseerde DSG automaten, zorgen we ervoor dat u snel weer de weg op kunt. Of het nu gaat om het vervangen door een identiek model of zelfs een upgrade naar een ander type, onze expertise garandeert een vlekkeloze service. Neem contact op voor de mogelijkheden en laat ons u begeleiden naar de beste keuze voor uw situatie." />
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
                src={DSG}
                alt="DSG"
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
        image={DSGBanner}
        title={"DSG PROBLEMEN?"}
        text={
          "Wacht niet tot het te laat is. Onze deskundigen met jarenlange ervaring staan klaar om uw DSG-problemen aan te pakken. Van revisies en reparaties tot vervanging, we adviseren en begeleiden u door het hele proces. Zorg voor een veilige, efficiënte en duurzame oplossing voor uw voertuig."
        }
        buttonText={"CONTACT OPNEMEN"}
        buttonLink={"/contact"}
      />
      <Container>
        <Title
          text="KENNIS, OPTIES EN MODELLEN"
          align="center"
          size="lg"
          underline
        />
        <SideContainer
          style={{ marginTop: 20 }}
          alignTop
          left={
            <>
              <Text text="Het Direct-Shift Gearbox (DSG) systeem heeft de autowereld veranderd met zijn geavanceerde technologie en naadloos schakelvermogen. Maar hoe herken je nu precies problemen met dit systeem? Symptomen zoals slecht schakelen bij hoge toeren, vertraging in acceleratie, ongewenste geluiden uit de versnellingsbak of voortijdig opschakelen kunnen wijzen op een defecte DSG. Wanneer u zulke tekenen opmerkt, is het van cruciaal belang om uw voertuig te laten controleren door experts om verdere schade of hoge reparatiekosten te voorkomen." />
              <Text text="De DSG bevat een uniek mechanisme. De versnellingsbak bevat twee afzonderlijke koppelingen en assen, wat zorgt voor dat naadloze schakelen waar chauffeurs zo van houden. De oneven versnellingen bevinden zich op de primaire as, terwijl de overige versnellingen en de achteruit op de secundaire as rusten. Dit design zorgt ervoor dat er onder belasting geschakeld kan worden, waardoor acceleraties vloeiender verlopen." />
            </>
          }
          right={
            <>
              <Text text="Er zijn verschillende bekende DSG varianten. Zo is er de droge koppeling die gekarakteriseerd wordt door een enkele koppelingsplaat die in het luchtledige draait. Aan de andere kant hebben we de natte koppeling, bestaande uit meerdere platen in een oliebad. Dankzij dit oliebad is er extra koeling beschikbaar, wat het mogelijk maakt om bij hogere koppels te schakelen. Dit maakt de natte koppeling ideaal voor zwaardere voertuigen en motoren die meer kracht vereisen." />
              <Text text="Tot slot is het fascinerend om te zien hoe breed het DSG-systeem is geadopteerd in de auto-industrie. Populaire automerken zoals Volkswagen, Audi, Seat en Skoda hebben verschillende modellen uitgerust met deze technologie. Of u nu achter het stuur zit van een Volkswagen Golf, Audi TT, Seat Ateca of Skoda Superb, u ervaart de voordelen en het comfort van de DSG-transmissie. Het is duidelijk dat de DSG, met zijn blend van technologie en prestatie, een blijvende impact heeft in de autowereld." />
            </>
          }
        />
      </Container>

      <Footer />
    </>
  );
}

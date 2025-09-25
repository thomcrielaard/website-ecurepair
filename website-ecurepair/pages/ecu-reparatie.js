import Image from "next/image";
import Head from "next/head";
import { API_URL } from "./_app";
import Axios from "axios";

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
import ECURepair from "@/assets/img/ecurepair.png";
import ECUBanner from "@/assets/img/about-ecu.jpg";
import ParallexBanner from "@/components/modules/ParallexBanner";
import ItemCards from "@/components/modules/ItemCards";

export default function EcuReparatie({ news }) {
  return (
    <>
      <Head>
        <title>
          ECU Reparatie &#8211; Reparatie, Revisie en Diagnose van de ECU
          &#8211; ECU reparatie
        </title>
        <meta
          name="description"
          content="ECU reparatie nodig? ECU Repair is specialist in diagnose, revisie en programmeren van ECU’s. Betrouwbare service voor garages en autobedrijven."
        />
      </Head>

      <Navbar />

      <Container>
        <SideContainer
          reverse
          left={
            <>
              <Title
                text="ECU Reparatie – Specialist in auto elektronica"
                className={styles.OverOnsTitleResponsive}
                containerClassName={styles.OverOnsTitleBarResponsive}
                size="lg"
                underline
                h1
              />
              <Text text="De <strong>Electronic Control Unit</strong>, kortweg <em>ECU</em>, is het brein achter bijna iedere moderne auto. Van brandstofinjectie tot motormanagement, van emissieregeling tot de koppeling met veiligheidssystemen – alles loopt via dit kleine maar cruciale kastje. En zoals dat met breinen gaat: als er iets misgaat, merk je dat meteen." />
              <br />
              <Title size="md" text="Wanneer de ECU hapert" />
              <Text text="Start de motor niet meer? Treedt er ineens een foutcode op in het dashboard? Of voelt de auto gewoon niet zoals het hoort – schokkerig, minder vermogen, hoger verbruik? Dat zijn klassieke signalen dat de <strong>ECU reparatie</strong> nodig heeft. Soms ligt de oorzaak in een klein elektronisch onderdeel of een los contact, soms in softwareproblemen die het motormanagement ontregelen." />
              <br />
              <Text text="Wat veel garagebedrijven zien, is dat het probleem niet altijd direct zichtbaar is. Storingen kunnen intermitterend zijn – de ene dag rijdt alles prima, de volgende dag is er paniek. Juist dan is een nauwkeurige diagnose onmisbaar." />
              <br />
              <Title size="md" text="Diagnose met de juiste apparatuur" />
              <Text text="Bij ECU Repair werken we met specialistische uitleesmiddel en bijbehorende software. Dit is geen doorsnee uitleesmiddel, maar een systeem dat de werking van een ECU volledig kan simuleren alsof hij in de auto zit. Daardoor kunnen we storingen reproduceren, foutcodes uitlezen en ook écht begrijpen waar de storing vandaan komt." />
              <br />
              <Text text="En het mooiste? Dankzij de ondersteuning van <strong>CAN</strong>, <strong>LIN</strong> en <strong>J1850</strong> netwerkbussen en regelmatige updates blijft de apparatuur altijd actueel. Of het nu gaat om een oudere Opel of de nieuwste Volkswagen met DSG, de diagnose verloopt soepel en betrouwbaar." />
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
        title={"ECU defect? Neem contact met ons op!"}
        text={
          "Heb je te maken met een <strong>defecte ECU</strong>? Wil je direct een ECU laten onderzoeken of reviseren? Bel of mail ons, of stuur de ECU op naar onze werkplaats. Samen zorgen we dat elke auto weer zonder zorgen de weg op kan."
        }
        buttonText={"CONTACT OPNEMEN"}
        buttonLink={"/contact"}
      />

      <Container>
        <SideContainer
          style={{ marginTop: 20 }}
          alignTop
          left={
            <>
              <Title text="Repareren, reviseren of vervangen" size="md" />
              <Text text="Niet elke ECU hoeft direct de prullenbak in. Integendeel: vaak is <em>revisie</em> een goed middel om kosten te besparen en tegelijk levensduur te verlengen. Denk aan het herstellen van gescheurde bondjes, het vervangen van verbrande transistoren of het herprogrammeren van <em>ECU software</em> die corrupt is geraakt. Onze service omvat:" />
              <ul className="text-lg list-disc list-inside mb-4">
                <li>
                  <strong>ECU Reparatie</strong> - Defecte componenten
                  herstellen
                </li>
                <li>
                  <strong>ECU Revisie</strong> - Revisie van complete ECU’s voor
                  langere levensduur
                </li>
                <li>
                  <strong>ECU Programmeren</strong> - Programmeren en opnieuw
                  inleren bij vervanging
                </li>
                <li>
                  <strong>ECU Klonen</strong> – Het overzetten van data naar een
                  nieuwe module
                </li>
              </ul>
              <Text text="Zo hoeft een garagebedrijf zijn klant niet direct een dure fabrieksvervanging aan te bieden, maar kan er gekozen worden voor een slimme en duurzame oplossing." />

              <br />
              <Title text="Kennis delen met garages" size="md" />
              <Text text="We weten dat garagebedrijven snelheid en duidelijkheid nodig hebben. Daarom leveren we niet alleen de technische oplossing, maar ook heldere informatie: wat is er gerepareerd, wat is er vervangen, welke stappen zijn gedaan? Dat geeft vertrouwen richting de eindklant." />
              <br />
              <Text text="Daarnaast zijn we bereikbaar voor overleg. Twijfel je of het probleem écht in de ECU zit, of toch in de bedrading of een sensor? Bel ons gewoon. Soms is een kort gesprek het middel dat onnodig zoekwerk bespaart." />
            </>
          }
          right={
            <>
              <Title text="Waarom kiezen voor een specialist?" size="md" />
              <Text text="Er zijn reparateurs en er zijn specialisten. Het verschil? De specialist verdiept zich dagelijks in ECU’s en aanverwante elektronica – van ABS pompen tot schakelrobots. Bij ons is dat geen bijzaak, maar de kern van wat we doen." />
              <br />
              <Text text="Samen met partnerbedrijven zoals ABS Pomp Specialist en Schakelrobot Specialist bieden we een breed netwerk van kennis. Zo kunnen we zelfs complexe storingen, waar meerdere modules elkaar beïnvloeden, snel doorgronden." />

              <br />
              <Title
                text="Extra mogelijkheden: klonen en programmeren"
                size="md"
              />
              <Text text="Soms is reparatie niet genoeg, bijvoorbeeld als de ECU fysiek onherstelbaar beschadigd is. In die gevallen is <strong>ECU klonen</strong> of <em>ECU programmeren</em> dé oplossing. Hierbij zetten we de software en voertuigdata over naar een andere module, zodat alle sleutels, instellingen en het motormanagement exact hetzelfde blijven. Voor de klant voelt het alsof er niets veranderd is – behalve dat de auto weer start en rijdt zoals het hoort." />
            </>
          }
        />
      </Container>

      <Container paddingVert="0" innerClassName="flex justify-center">
        <div className="w-full md:w-1/2 xl:w-1/3 max-w-2xl relative aspect-square">
          <Image
            src={ECURepair}
            alt="ECU Repair"
            style={{ objectFit: "cover" }}
            fill
            sizes={`(min-width: ${Breakpoints.sm}) 45vw, 100vw`}
            placeholder="blur"
            priority
          />
        </div>
      </Container>

      <Container>
        <Title
          text="Nieuws & ontwikkelingen"
          size="lg"
          align="center"
          underline
        />
        <Text
          text="De wereld van auto-elektronica staat nooit stil. Nieuwe storingen, veranderende software en steeds complexere systemen – er gebeurt altijd iets. Bij ECU Repair delen we daarom regelmatig nieuws en inzichten uit de praktijk. Denk aan trends die we in garages zien, handige tips voor diagnose of updates over nieuwe apparatuur en technieken. Benieuwd wat er speelt? Lees hieronder onze laatste nieuwsberichten en blijf op de hoogte van alles rond ECU reparatie en autodiagnose."
          align="center"
          slim
        />
        <ItemCards
          items={news}
          buttonText="Al ons nieuws"
          buttonLink="/nieuws"
          short
        />
      </Container>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // Get 4 nieuwsberichten
  const { data: newsData } = await Axios.get(
    `${API_URL}/api/nieuwsberichts?populate[omslagfoto][fields][0]=url&sort=id:desc&pagination[pageSize]=4`
  );

  const news = newsData.data;

  return {
    props: {
      news,
    },
    revalidate: 10,
  };
}

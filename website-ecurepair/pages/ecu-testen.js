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

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";

import ECU from "@/assets/img/ecu.webp";
import ECURepair from "@/assets/img/ecurepair.png";
import ECUBanner from "@/assets/img/about-ecu.jpg";
import ParallaxBanner from "@/components/modules/ParallexBanner";
import ItemCards from "@/components/modules/ItemCards";
import ServiceRevealCards from "@/components/modules/ServiceRevealCards";
import Link from "next/link";

export default function EcuRevisie() {
  return (
    <>
      <Head>
        <title>
          ECU Repair &#8211; ECU revisie bij terugkerende storingen en foutcodes
        </title>
        <meta
          name="description"
          content="ECU revisie bij structurele ECU problemen. Terugkerende foutcodes, noodloop of startproblemen? Vraag direct een ECU revisie aan bij ECU Repair."
        />
      </Head>

      <Navbar />

      <Container>
        <SideContainer
          reverse
          left={
            <>
              <Title size="lg" align="left" underline h1>
                ECU testen - Zekerheid over de staat van de ECU
              </Title>
              <Text align="left" className="mb-4">
                De ECU, oftewel de <em>Electronic Control Unit</em>, speelt een
                belangrijke rol binnen het motormanagement van de auto. Deze
                centrale computer verwerkt signalen, stuurt componenten aan en
                communiceert met andere systemen. Wanneer een voertuig klachten
                vertoont, foutcodes laat zien of zich onvoorspelbaar gedraagt
                kan dit liggen aan de ECU, maar dit is niet altijd zeker. Je
                kunt dan de <strong>ECU testen</strong> voor een duidelijk
                antwoord op die vraag. Dit geldt niet alleen bij een duidelijke
                storing, maar ook wanneer je wilt controleren of een ECU nog
                correct functioneert. Bij{" "}
                <Link href="/" className="!underline">
                  ECU Repair
                </Link>{" "}
                testen we ECU&apos;s los van het voertuig, zodat je zekerheid
                krijgt over de staat van het onderdeel voordat je verdere
                stappen zet.
              </Text>
              <Title size="sm">Wat betekent ECU testen precies?</Title>
              <Text align="left">
                ECU testen is een diagnose op de werkbank, los van het voertuig.
                Voor onze testen maken wij gebruik van het <em>ELTECH</em>{" "}
                testplatform. De ECU wordt aangesloten op de testopstelling.
                Deze biedt ondersteuning voor verschillende netwerkprotocollen
                zoals <strong>CAN</strong>, <strong>LIN</strong> en{" "}
                <strong>J1850</strong>, zodat zowel oudere als moderne systemen
                technisch inzichtelijk worden gemaakt. In de test worden onder
                andere de volgende aspecten gecontroleerd:
              </Text>
              <ul className="list-disc list-inside mb-2 text-lg">
                <li>Voeding en grondpotentiaal van de ECU</li>
                <li>Interne processorreacties en signaalverwerking</li>
                <li>Communicatie met andere modules via netwerkbussen</li>
                <li>Input- en outputwaarden van sensoren en actuatoren</li>
              </ul>
              <Text align="left" className="mb-4">
                Het resultaat is een gedetailleerde technische beoordeling over
                de staat van het systeem. Die informatie gebruiken we om te
                bepalen of de ECU goed is, of dat er aanleiding is voor verder
                onderzoek,{" "}
                <Link href="/ecu-reparatie" className="!underline">
                  ECU reparatie
                </Link>{" "}
                of{" "}
                <Link href="/ecu-revisie" className="!underline">
                  ECU revisie
                </Link>
                .
              </Text>
              <Title size="sm">Wanneer is een ECU test verstandig?</Title>
              <Text align="left">
                ECU testen is niet alleen verstandig als er duidelijk iets
                defect is. Een ECU test kan ingezet worden in verschillende
                situaties. Een aantal voorbeelden hiervan zijn:
              </Text>
              <ul className="list-disc list-inside mb-2 text-lg">
                <li>
                  <strong>Zekerheid</strong> - je wil bevestiging dat een ECU
                  nog correct functioneert
                </li>
                <li>
                  <strong>Foutcodes</strong> - er verschijnen foutcodes zonder
                  zichtbaar defect
                </li>
                <li>
                  <strong>Onregelmatige motor</strong> - motor reageert
                  onregelmatig zonder specifieke foutmelding
                </li>
                <li>
                  <strong>Hergebruik</strong> - na demontage uit een andere auto
                  wil je zeker zijn van de staat
                </li>
                <li>
                  <strong>Uitsluiting</strong> - je wil uitsluiten dat de ECU de
                  oorzaak is vóór vervolgwerk
                </li>
              </ul>
              <Text align="left">
                In al deze gevallen geeft het testen van de ECU een objectieve
                technische basis om vervolgkeuzes te maken. Garagebedrijven
                kunnen hiermee onnodige vervanging vermijden en de juiste
                reparaties bepalen.
              </Text>
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
                alt="ECU revisie"
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

      <ParallaxBanner
        image={ECUBanner}
        title="ECU laten testen? Meld hem nu aan!"
        buttonText={"Reparatieformulier"}
        buttonLink={"https://reparatieformulier.nl/reparaties/nieuw?ref=ECUR"}
        target="_blank"
      >
        Wil je controleren of een ECU nog correct functioneert, of twijfel je of
        de ECU de oorzaak is van een klacht? Via ons reparatieformulier kun je
        een ECU eenvoudig aanmelden voor ECU testen. Na beoordeling ontvang je
        duidelijke terugkoppeling over de staat van het onderdeel en mogelijke
        vervolgstappen.
      </ParallaxBanner>

      <Container>
        <SideContainer
          style={{ marginTop: 20 }}
          alignTop
          left={
            <>
              <Title size="md">ECU testen als onderdeel van diagnose</Title>
              <Text align="left" className="mb-4">
                ECU testen vormen een belangrijk onderdeel van een bredere
                diagnose. Soms lijkt een foutcode of klacht uit de
                OBD-communicatie te komen, maar ligt de oorzaak elders. Met een
                test op de werkbank elimineer je omgevingsvariabelen zoals
                bedrading, connectorfouten en sensorproblemen in het voertuig en
                focus je echt op de ECU zelf. Dat maakt ECU testen niet alleen
                geschikt bij klachten, maar ook vóór revisie of reparatie. Het
                kan namelijk aantonen dat de module technisch in orde is, wat
                betekent dat een reparatie of revisie niet nodig is. Mocht de
                ECU niet in orde zijn, geeft het ons een duidelijk beeld van
                welke functies of componenten reparatie nodig hebben.
              </Text>
              <Title size="md">Voorkom onnodige kosten</Title>
              <Text align="left" className="mb-4">
                Door eerst te kiezen voor <strong>ECU testen</strong> krijg je
                veel meer informatie over de module zelf. Daarmee voorkom je dat
                componenten onnodig worden vervangen en kun je een gerichte
                keuze maken voor reparatie of revisie. Dit werkt efficiënt,
                doelgericht en bespaart tijd in de werkplaats. Daarnaast
                bespaart het kosten voor de klant, die alleen betaalt voor wat
                echt nodig is.
              </Text>
              <Title size="md">Revisie als resultaat van een ECU test</Title>
              <Text align="left" className="mb-4">
                Tijdens ECU testen wordt niet alleen beoordeeld of de ECU op dit
                moment functioneert, maar ook in welke staat het onderdeel
                verkeert. Het komt regelmatig voor dat hierbij meerdere zwakke
                punten zichtbaar worden die nu nog werken, maar op korte termijn
                kunnen uitvallen. In zo&apos;n geval kan{" "}
                <Link href="/ecu-revisie" className="!underline">
                  ECU revisie
                </Link>{" "}
                een passende vervolgstap: door deze kwetsbare onderdelen direct
                mee te nemen, voorkom je nieuwe klachten en herhaalwerk. Omdat
                de ECU al op de werkbank ligt en de oorzaak duidelijk is, wordt
                revisie in deze fase vaak een stuk goedkoper dan het defect
                negeren en later alsnog repareren.
              </Text>{" "}
              <Title size="md">Kosten en prijsindicatie</Title>
              <Text align="left">
                De <strong>kosten</strong> van een ECU test hangen af van het
                type ECU en complexiteit van het systeem. Over het algemeen
                geldt dat een test vooraf inzicht geeft in het vervolgtraject en
                daarmee onverwachte kosten in de werkplaats kan besparen. Wil je
                een prijsindicatie of heb je specifieke vraagstukken, neem dan
                gerust contact met ons op via het{" "}
                <Link href="/contact" className="!underline">
                  contactformulier
                </Link>
                .
              </Text>
            </>
          }
          right={
            <>
              <Title size="md">Hoe verloopt een ECU test?</Title>
              <Text align="left" className="mb-2">
                Het testen van een ECU bij ECU Repair volgt bij ons een vaste
                route. Je kunt via ons{" "}
                <Link
                  href="https://reparatieformulier.nl/reparaties/nieuw?ref=ECUR"
                  target="_blank"
                  className="!underline"
                >
                  reparatieformulier
                </Link>{" "}
                precies zien in welke stap van het proces jouw ECU zich bevindt.
                Hieronder vind je een overzicht van de verschillende stappen
                binnen ons ECU testproces.
              </Text>
              <Title size="xs">Stap 1 - Test aanmelden</Title>
              <Text align="left" className="mb-2">
                Je meld de test online aan via ons{" "}
                <Link
                  href="https://reparatieformulier.nl/reparaties/nieuw?ref=ECUR"
                  target="_blank"
                  className="!underline"
                >
                  reparatieformulier
                </Link>{" "}
                en stuurt de module op of geeft hem af. Vermeld eventuele
                klachtinformatie en foutcodes bij de aanmelding. Na ontvangst
                bevestigen we dat de unit geregistreerd is.
              </Text>
              <Title size="xs">Stap 2 - ECU test en diagnose</Title>
              <Text align="left" className="mb-2">
                We testen de ECU op ons geavanceerde <strong>ELTECH</strong>{" "}
                testplatform. Hierbij controleren we <em>voeding</em>,{" "}
                <em>signaalverwerking</em>, <em>communicatie</em> en{" "}
                <em>interne functies</em>. Eventuele afwijkingen of defecten
                worden gedocumenteerd in een technische rapportage. Ons platform
                ondersteund doorgaans alle netwerkprotocollen, waaronder{" "}
                <strong>CAN</strong>, <strong>LIN</strong> en{" "}
                <strong>J1850</strong>.
              </Text>
              <Title size="xs">Stap 3 - Resultaat en retourzending</Title>
              <Text align="left" className="mb-4">
                Na afronding van de test ontvang je een duidelijke
                terugkoppeling over de staat van de ECU. Hierin staat of de ECU
                functioneert binnen specificaties, welke afwijkingen zijn
                gevonden en wat mogelijke vervolgstappen zijn. Is de unit in
                orde, dan sturen we hem retour of kun je hem op komen halen in
                onze werkplaats. Indien er aanleiding is voor verder onderzoek,{" "}
                <Link href="/ecu-reparatie" className="!underline">
                  reparatie
                </Link>{" "}
                of{" "}
                <Link href="/ecu-revisie" className="!underline">
                  revisie
                </Link>
                , bespreken we dit voordat we overgaan tot verdere stappen. Zo
                maak je geen onnodige of onverwachte kosten.
              </Text>{" "}
            </>
          }
        />
      </Container>

      <Container>
        <Title text="Overige diensten" size="lg" align="center" underline />
        <Text align="center" className="mb-8" slim>
          Naast ECU testen biedt ECU Repair ook andere services op het gebied
          van auto-elektronica, zoals ECU reparatie, ECU revisie en mechatronic
          diagnose. Zo kun je per situatie de meest passende service inzetten.
        </Text>
        <ServiceRevealCards
          includeIds={[
            "ecu-reparatie",
            "ecu-revisie",
            "dsg-revisie",
            "mechatronic-revisie",
          ]}
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

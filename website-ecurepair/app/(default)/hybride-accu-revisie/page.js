import Image from "next/image";
import Link from "next/link";

import Breakpoints from "@/styles/Breakpoints";

import Container from "@/components/containers/Container";
import SideContainer from "@/components/containers/SideContainer";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";

import ParallaxBanner from "@/components/modules/ParallexBanner";
import ServiceRevealCards from "@/components/modules/ServiceRevealCards";

import AccuReparatie from "@/assets/img//services/hybride-accu-reparatie.png";
import HybrideBanner from "@/assets/img/services/hybride-accu-banner.webp";

export function generateMetadata() {
  return {
    title: `ECU Repair \u2013 Hybride accu revisie voor hybride auto's`,
    description: `Hybride accu revisie bij storingen of slijtage. ECU Repair reviseert accupakketten voor hybride auto's na diagnose, als alternatief voor vervanging.`,
  };
}

export default function HybrideAccuRevisiePage() {
  return (
    <>
      <Container>
        <SideContainer
          reverse
          left={
            <>
              <Title size="lg" align="left" underline h1>
                Hybride accu revisie – grip op de levensduur van het accupakket
              </Title>
              <Text align="left" className="mb-2">
                <strong>Hybride accu revisie</strong> is bedoeld voor situaties
                waarin een hybride auto klachten vertoont die niet meer met een
                eenvoudige reparatie zijn op te lossen. Denk aan terugkerende
                storingen, vermogensverlies of foutcodes zoals{" "}
                <strong>P0A80</strong>. In plaats van directe vervanging van het
                volledige accupakket biedt revisie een technisch onderbouwde én
                vaak voordeligere oplossing.
              </Text>
              <Text align="left" className="mb-4">
                Bij ECU Repair voeren we hybride accu revisies uit voor
                uiteenlopende merken en modellen: van <em>Toyota Prius</em> en{" "}
                <em>Lexus</em> tot <em>Honda</em>, <em>Seat</em> en andere
                hybride auto's. Het uitgangspunt blijft hetzelfde: eerst meten
                en beoordelen, daarna pas beslissen welke aanpak past bij de
                praktijk.
              </Text>
              <Title size="sm">
                Wat verstaan we onder hybride accu revisie?
              </Title>
              <Text align="left" className="mb-4">
                Een hybride accupakket bestaat uit meerdere modules. Na verloop
                van tijd lopen sommige modules in capaciteit terug terwijl
                andere nog goed functioneren. Die onbalans veroorzaakt klachten
                in de aandrijving en zet het systeem onder extra spanning. Bij
                revisie beoordelen we het volledige accupakket en vervangen of
                herstellen we zwakke modules, zodat het pakket weer in balans
                is. Waar nodig gebruiken we refurbished modules of
                accu-oplossingen die passen bij merk en gebruik.
              </Text>
              <Title size="sm">Wanneer is revisie de juiste keuze?</Title>
              <Text align="left">
                Revisie komt vooral in beeld wanneer klachten blijven terugkomen
                of wanneer meerdere delen van het accupakket hun grens naderen.
                In de praktijk zien we revisies bij:
              </Text>
              <ul className="list-disc list-inside mb-2 text-lg">
                <li>
                  <strong>Foutcodes</strong> - zoals <strong>P0A80</strong> of
                  vergelijkbare meldingen
                </li>
                <li>
                  <strong>Vermogensverlies</strong> - teruglopend elektrisch
                  vermogen
                </li>
                <li>
                  <strong>Onbalans</strong> - ongelijkmatige spanningen tussen
                  modules
                </li>
                <li>
                  <strong>Kosten</strong> - hoge dealerindicatie voor vervanging
                </li>
                <li>
                  <strong>Twijfel</strong> - onzekerheid over batterijstatus bij
                  verkoop of inkoop
                </li>
              </ul>
              <Text align="left">
                In deze gevallen biedt hybride accu revisie een technisch
                verantwoorde keuze zonder direct naar volledige vervanging te
                schakelen.
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
                src={AccuReparatie}
                alt="Hybride accu revisie"
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
        image={HybrideBanner}
        title="Hybride accu revisie aanvragen"
        buttonText={"Reparatieformulier"}
        buttonLink={"https://reparatieformulier.nl/reparaties/nieuw?ref=ECUR"}
        target="_blank"
      >
        Twijfel je over de staat van een hybride accu of wil je het pakket laten
        beoordelen? Meld de accu aan via ons reparatieformulier en bespreek de
        mogelijkheden met een accu specialist.
      </ParallaxBanner>

      <Container>
        <SideContainer
          style={{ marginTop: 20 }}
          alignTop
          left={
            <>
              <Title size="md">Diagnose als basis voor revisie</Title>
              <Text align="left" className="mb-4">
                Elk accupakket wordt eerst op de werkvloer los getest. We meten
                spanningen, temperatuurgedrag en onderlinge verschillen tussen
                modules. Deze gegevens vormen de basis voor het vervolgtraject:
                soms volstaat een gerichte reparatie, soms is revisie
                noodzakelijk en soms leidt dat tot vervanging. Zo blijft het
                proces overzichtelijk en onderbouwd.
              </Text>
              <Title size="md">Reparatie, revisie of vervanging?</Title>
              <Text align="left" className="mb-4">
                Hybride accu revisie is een technisch verantwoorde keuze wanneer
                meerdere modules aan slijtage onderhevig zijn. We vervangen of
                herstellen zwakke onderdelen en maken waar mogelijk gebruik van
                refurbished modules. Alleen als het pakket technisch niet meer
                te herstellen is, adviseren we volledige vervanging. Zo sluiten
                we beter aan bij praktijkgebruik en voorkomen we onnodige
                kosten.
              </Text>
              <Title size="md">Kosten, prijs en garantie</Title>
              <Text align="left" className="mb-2">
                De <strong>kosten</strong> bedragen{" "}
                <strong>€450 exclusief BTW</strong>. Deze prijs kan veranderen,
                afhankelijk van het type accupakket, merk en omvang van de
                slijtage. In veel gevallen ligt de prijs lager dan bij volledige
                vervanging. Na diagnose kunnen we een duidelijke indicatie geven
                en soms direct beoordelen welke onderdelen aandacht krijgen. Op
                de gereviseerde onderdelen geven we garantie zodat je zekerheid
                hebt over het verdere gebruik.
              </Text>
              <Title size="xs">Duurzaamheid en hergebruik</Title>
              <Text align="left">
                Door gebruik te maken van refurbished modules en hergebruik van
                onderdelen verlengt revisie de levensduur van bestaande accu’s
                én draagt het bij aan het milieu. Milieubewuste keuzes zijn voor
                hybride bestuurders vaak net zo belangrijk als de prestaties van
                het voertuig.
              </Text>
            </>
          }
          right={
            <>
              <Title size="md">Hoe verloopt een hybride accu revisie?</Title>
              <Text align="left" className="mb-2">
                Een revisie is een zorgvuldig traject waarbij het volledige
                accupakket centraal staat. Omdat problemen binnen een hybride
                accu vaak geleidelijk ontstaan en niet altijd direct zichtbaar
                zijn in het voertuig, werken we met een vaste werkwijze. Die
                werkwijze brengt de technische staat, benodigde werkzaamheden en
                haalbaarheid van revisie vooraf helder in beeld.
              </Text>
              <Title size="xs">Stap 1 – Aanmelden en intake</Title>
              <Text align="left" className="mb-2">
                Meld de hybride accu aan via het{" "}
                <Link
                  href="https://reparatieformulier.nl/reparaties/nieuw?ref=ECUR"
                  target="_blank"
                  className="underline!"
                >
                  reparatieformulier
                </Link>
                . Voertuiggegevens, kilometerstand, klachten en foutcodes worden
                vastgelegd zodat het pakket direct in de juiste context wordt
                beoordeeld. Na ontvangst volgt een bevestiging en planning voor
                diagnose.
              </Text>
              <Title size="xs">Stap 2 – Uitgebreid testen en diagnose</Title>
              <Text align="left" className="mb-2">
                Het accupakket wordt los getest. Spanningen per module,
                capaciteitsverschillen en gedrag onder belasting worden in kaart
                gebracht. Deze diagnose laat zien of er sprake is van onbalans,
                slijtage of beginnende defecten die tot storingen kunnen leiden.
              </Text>
              <Title size="xs">Stap 3 – Revisie van het accupakket</Title>
              <Text align="left" className="mb-2">
                Op basis van meetresultaten bepalen we welke modules aandacht
                nodig hebben. Zwakke of afwijkende delen worden vervangen of
                hersteld, met waar nodig refurbished onderdelen die getest en
                passend zijn voor het voertuig. Het doel is niet alleen het
                oplossen van de klacht, maar ook het herstellen van stabiliteit
                binnen het pakket.
              </Text>
              <Title size="xs">Stap 4 – Opbouw en eindcontrole</Title>
              <Text align="left" className="mb-2">
                Na revisie wordt het accupakket opgebouwd en gecontroleerd op
                gelijkmatige spanningen en stabiliteit onder belasting. Deze
                stap voorkomt dat nieuwe onbalans ontstaat na installatie.
              </Text>
              <Title size="xs">Stap 5 – Terugkoppeling en retour</Title>
              <Text align="left">
                Je ontvangt een terugkoppeling over wat er is vervangen,
                hersteld en wat dit betekent voor de verwachte levensduur van
                het pakket. Ook volgt advies voor toekomstig gebruik. Daarna
                wordt de accu zorgvuldig verpakt en retour gestuurd of
                klaargelegd voor afhalen.
              </Text>
            </>
          }
        />
      </Container>

      <Container>
        <Title text="Overige diensten" size="lg" align="center" underline />
        <Text align="center" className="mb-8" slim>
          Naast hybride accu revisie ondersteunen wij garagebedrijven ook bij
          ECU testen, ECU reparatie en ECU revisie, zodat per voertuig een
          passende aanpak gekozen kan worden die past bij elektronica,
          aandrijving en gebruik.
        </Text>
        <ServiceRevealCards
          includeIds={[
            "dsg-revisie",
            "ecu-reparatie",
            "ecu-testen",
            "ecu-revisie",
            "hybride-accu-reparatie",
            "mercedes-contactslot-reparatie",
            "mercedes-contactslot-revisie",
            "mechatronic-reparatie",
            "mechatronic-revisie",
          ]}
        />
      </Container>
    </>
  );
}

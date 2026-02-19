import Image from "next/image";
import Link from "next/link";

import Breakpoints from "@/styles/Breakpoints";

import Container from "@/components/containers/Container";
import SideContainer from "@/components/containers/SideContainer";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";

import ParallaxBanner from "@/components/modules/ParallexBanner";
import ServiceRevealCards from "@/components/modules/ServiceRevealCards";

import Sleutels from "@/assets/img/mercedes.png";
import MercedesBanner from "@/assets/img/mercedes-banner.jpg";
import HybrideBanner from "@/assets/img/services/hybride-accu-banner.webp";

export function generateMetadata() {
  return {
    title: `ECU Repair \u2013 Hybride accu revisie voor hybride auto's`,
    description: `Hybride accu revisie bij storingen of slijtage. ECU Repair reviseert accupakketten voor hybride auto's na diagnose, als alternatief voor vervanging.`,
  };
}

export default function MercedesContactslotRevisiePage() {
  return (
    <>
      <Container>
        <SideContainer
          reverse
          left={
            <>
              <Title size="lg" align="left" underline h1>
                Mercedes contactslot revisie – herstel van start- en
                stuurslotproblemen
              </Title>
              <Text align="left" className="mb-4">
                Een <strong>Mercedes contactslot revisie</strong> is vaak de
                oplossing wanneer een Mercedes niet meer start, het contactslot
                niet reageert of de vergrendeling van het stuurslot weigert.
                Moderne Mercedes-modellen werken met een elektronisch systeem
                waarbij het contactslot, de Mercedes sleutel, de{" "}
                <strong>Electronic Steering Lock (ESL)</strong> en de
                motorsturing nauw samenwerken. Zodra één onderdeel afwijkend
                gedrag vertoont, ontstaat er direct een probleem. Bij ECU Repair
                richten we ons op gerichte revisie van het Mercedes contactslot.
                Geen standaard vervanging, maar technisch beoordelen, herstellen
                en testen. Dat scheelt kosten en voorkomt onnodige
                onderdelenwissel.
              </Text>
              <Title size="sm">Wat is het Mercedes contactslot precies?</Title>
              <Text align="left" className="mb-4">
                Het Mercedes contactslot – vaak aangeduid als{" "}
                <strong>EIS (Electronic Ignition Switch)</strong> – is meer dan
                een ouderwets mechanisch slot. Het is een elektronisch systeem
                dat communiceert met de sleutel, het stuurslot, de motor en
                andere modules in de auto. Pas wanneer deze communicatie correct
                verloopt, wordt starten mogelijk gemaakt. Wanneer het systeem
                een fout detecteert, blijft de sleutel soms steken, draait niet
                meer door of blijft het stuurslot vergrendeld. In dat geval is
                Mercedes contactslot revisie vaak een passende oplossing.
              </Text>
              <Title size="sm">
                Veelvoorkomende problemen bij Mercedes contactsloten
              </Title>
              <Text align="left">
                Problemen bij Mercedes contactsloten komen vaker voor dan je
                denkt. Het kan gaan om een simpele slijtage, maar vaak is er
                sprake van een storing aan de elekstronische componenten binnen
                het slot. Probmene die we vaak voor zien komen zijn:
              </Text>
              <ul className="list-disc list-inside mb-2 text-lg">
                <li>
                  <strong>Draaiproblemen</strong> - Sleutel draait niet of wordt
                  niet herkend
                </li>
                <li>
                  <strong>Vergrendeling</strong> - Stuurslot blijft vergrendeld
                </li>
                <li>
                  <strong>Contact</strong> - Geen contact bij insteken van de
                  Mercedes sleutel
                </li>
                <li>
                  <strong>Geen reactie</strong> - Startmotor reageert niet
                </li>
                <li>
                  <strong>Startproblemen</strong> - Intermitterende
                  startproblemen
                </li>
              </ul>
              <Text align="left">
                Deze klachten komen onder meer voor bij modellen zoals de
                <em>Mercedes Sprinter</em>, <em>Mercedes Vito</em> en andere
                bedrijfswagens. Ook bij generaties zoals de <em>W447</em> zien
                we vergelijkbare defecten in het Electronic Steering
                Lock-systeem. Een belangrijk punt: een storing in het
                contactslot betekent niet automatisch dat het hele systeem
                vervangen moet worden. Vaak is gerichte{" "}
                <Link
                  href="/mercedes-contactslot-reparatie"
                  className="underline!"
                >
                  contactslot reparatie
                </Link>{" "}
                of revisie technisch goed mogelijk.
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
                src={Sleutels}
                alt="Mercedes sleutels"
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
        image={MercedesBanner}
        title="Mercedes contactslot revisie inplannen?"
        buttonText={"Reparatieformulier"}
        buttonLink={"https://reparatieformulier.nl/reparaties/nieuw?ref=ECUR"}
        target="_blank"
      >
        Heb je een Mercedes die niet meer start of blijft het stuurslot
        vergrendeld? Wacht dan niet tot het probleem erger wordt en plan een
        afspraak via ons{" "}
        <Link
          href="https://reparatieformulier.nl/reparaties/nieuw?ref=ECUR"
          target="_blank"
          className="underline!"
        >
          reparatieformulier
        </Link>
        . Door het contactslot tijdig te laten beoordelen, voorkom je verdere
        uitval of onnodige vervanging van onderdelen. Wij kijken gericht naar de
        oorzaak en geven duidelijk advies over revisie of reparatie. Neem bij
        twijfel gerust contact met ons op om de situatie kort te bespreken.
      </ParallaxBanner>

      <Container>
        <SideContainer
          style={{ marginTop: 20 }}
          alignTop
          left={
            <>
              <Title size="md">Kosten, service en doorlooptijd</Title>
              <Text align="left" className="mb-2">
                De <strong>prijs</strong> van een Mercedes contactslot revisie
                bedraagt <strong>€250,- excl. BTW</strong>. De prijs kan worden
                beinvloed door het type voertuig en de aard van het probleem. Na
                diagnose kunnen we doorgaans snel een duidelijke indicatie geven
                van kosten en doorlooptijd. We werken met een vaste werkwijze en
                duidelijke terugkoppeling. Geen onduidelijk traject, maar
                overzicht in werkzaamheden en communicatie. Dat is prettig voor
                garagebedrijven én voor de eindklant. De doorlooptijd kan
                varieren afhankelijk van de complexiteit, maar we streven ernaar
                om binnen 5 werkdagen een duidelijk resultaat te leveren. Je
                kunt de voortgang altijd controleren via het reparatieformulier.
              </Text>
              <Title size="md">Voor welke modellen?</Title>
              <Text align="left">
                Wij voeren Mercedes contactslot revisie uit voor onder andere:
              </Text>
              <ul className="list-disc list-inside mb-2 text-lg">
                <li>
                  <strong>Mercedes Sprinter</strong>
                </li>
                <li>
                  <strong>Mercedes Vito</strong>
                </li>
                <li>Sprinter generaties met ESL-problemen</li>
                <li>Vito en W447 uitvoeringen</li>
                <li>Diverse andere Mercedes personen- en bedrijfswagens</li>
              </ul>
              <Text className="mb-4">
                Bij twijfel kun je altijd contact opnemen om te bespreken of
                revisie mogelijk is voor het betreffende model.
              </Text>
              <Title size="md">
                Stuurslot reparatie en aanverwante werkzaamheden
              </Title>
              <Text align="left" className="mb-2">
                Soms ligt het probleem niet uitsluitend in het contactslot, maar
                in het Electronic Steering Lock. In dat geval kan{" "}
                <Link
                  href="/mercedes-contactslot-reparatie"
                  className="underline!"
                >
                  stuurslot reparatie
                </Link>{" "}
                nodig zijn. Omdat deze systemen nauw samenwerken, beoordelen we
                altijd het geheel. Zo voorkom je dat een gereviseerd contactslot
                wordt teruggeplaatst terwijl het stuurslot nog een onderliggend
                probleem bevat.
              </Text>
            </>
          }
          right={
            <>
              <Title size="md">
                Hoe verloopt een Mercedes contactslot revisie?
              </Title>
              <Text align="left" className="mb-2">
                Een <strong>Mercedes contactslot revisie</strong> verloopt
                volgens een vaste werkwijze. Het contactslot werkt samen met de
                sleutel, het stuurslot en de motorsturing, dus afwijkingen in
                één onderdeel kunnen direct leiden tot startproblemen of een
                vergrendeld slot. Daarom beoordelen we het systeem eerst
                volledig om onnodige vervanging te voorkomen.
              </Text>
              <Title size="xs">Stap 1 – Aanmelden en intake</Title>
              <Text align="left" className="mb-2">
                Het contactslot wordt aangemeld via het{" "}
                <Link
                  href="https://reparatieformulier.nl/reparaties/nieuw?ref=ECUR"
                  target="_blank"
                  className="underline!"
                >
                  reparatieformulier
                </Link>
                . Voertuiggegevens en klachten worden genoteerd zodat we vanaf
                het begin weten om welk Mercedes-model het gaat en wat het
                exacte probleem is.
              </Text>
              <Title size="xs">Stap 2 – Diagnose en controle</Title>
              <Text align="left" className="mb-2">
                We testen het contactslot op interne werking en communicatie met
                de sleutel en het stuurslot. Daarbij controleren we de
                spanningsvoorziening, startvrijgave en vergrendeling om te zien
                of het defect in het contactslot of een aanverwant onderdeel
                zit.
              </Text>
              <Title size="xs">Stap 3 – Revisie van het contactslot</Title>
              <Text align="left" className="mb-2">
                Defecte of versleten componenten binnen het slot worden
                vervangen of hersteld. We richten ons op de interne elektronica
                en de aansturing van het Electronic Steering Lock om de
                oorspronkelijke werking te herstellen.
              </Text>
              <Title size="xs">Stap 4 – Testen na revisie</Title>
              <Text align="left" className="mb-2">
                Na revisie testen we opnieuw of sleutelherkenning, startvrijgave
                en vergrendeling weer correct functioneren. Pas bij een stabiel
                systeem geven we het contactslot vrij voor retour.
              </Text>
              <Title size="xs">Stap 5 – Terugkoppeling en verzending</Title>
              <Text align="left">
                Je ontvangt een duidelijke terugkoppeling over de uitgevoerde
                werkzaamheden en daarna wordt het onderdeel zorgvuldig verpakt
                en retour gestuurd of klaargelegd voor afhalen.
              </Text>
            </>
          }
        />
      </Container>

      <Container>
        <Title text="Overige diensten" size="lg" align="center" underline />
        <Text align="center" className="mb-8" slim>
          Naast Mercedes contactslot revisie ondersteunen wij bedrijven ook bij
          ECU reparatie, ECU revisie, DSG mechatronic revisie en hybride accu
          werkzaamheden. Zo kunnen elektronische en aandrijfsystemen als geheel
          worden beoordeeld.
        </Text>
        <ServiceRevealCards
          includeIds={[
            "dsg-revisie",
            "ecu-reparatie",
            "ecu-testen",
            "ecu-revisie",
            "hybride-accu-reparatie",
            "hybride-accu-revisie",
            "mercedes-contactslot-reparatie",
            "mechatronic-reparatie",
            "mechatronic-revisie",
          ]}
        />
      </Container>
    </>
  );
}

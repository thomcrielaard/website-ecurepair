import Image from "next/image";
import Link from "next/link";

import Breakpoints from "@/styles/Breakpoints";

import Container from "@/components/containers/Container";
import SideContainer from "@/components/containers/SideContainer";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";

import ParallaxBanner from "@/components/modules/ParallexBanner";
import ServiceRevealCards from "@/components/modules/ServiceRevealCards";

import ECU from "@/assets/img/ecu.webp";
import ECUBanner from "@/assets/img/about-ecu.jpg";

export function generateMetadata() {
  return {
    title:
      "ECU Repair \u2013 ECU revisie bij terugkerende storingen en foutcodes",
    description:
      "ECU revisie bij structurele ECU problemen. Terugkerende foutcodes, noodloop of startproblemen? Vraag direct een ECU revisie aan bij ECU Repair.",
  };
}

export default function EcuRevisiePage() {
  return (
    <>
      <Container>
        <SideContainer
          reverse
          left={
            <>
              <Title size="lg" align="left" underline h1>
                ECU Revisie - Jouw ECU weer als nieuw
              </Title>
              <Text align="left" className="mb-4">
                De <strong>ECU</strong>, ofwel de{" "}
                <em>Electronic Control Unit</em> is een cruciaal onderdeel in
                jouw auto. Dit computertje regelt namelijk allerlei functies,
                van emmissiecontrole tot motormanagement. Maar wat als je ECU
                storingen begint te vertonen? Er verschijnen bijvoorbeeld
                foutmeldingen bij het uitlezen, of de auto start niet meer goed
                op. In zulke gevallen is een <strong>ECU revisie</strong> vaak
                de oplossing. Een ECU revisie verhelpt terugkomende storingen,
                foutcodes die blijven hangen en verlaagt het risico op
                toekomstige problemen.
              </Text>
              <Title size="sm">Wat bedoelen we precies met ECU revisie?</Title>
              <Text align="left" className="mb-4">
                ECU revisie gaat verder dan een{" "}
                <Link href="/ecu-reparatie" className="!underline">
                  ECU reparatie
                </Link>
                . Bij een revisie kijken we namelijk verder dan alleen het
                defect. We controleren het hele systeem, bekijken bekende zwakke
                punten en vervangen onderdelen die slijtage beginnen te
                vertonen. Daarna testen we de ECU volledig, om er zeker van te
                zijn dat hij weer optimaal functioneert en er jaren tegenaan
                kan. Revisie wordt vooral ingezet bij terugkerende klachten,
                oudere voertuigen of ECU-types waarvan bekend is dat ze gevoelig
                zijn voor bepaalde defecten. Dat verschilt van ECU reparatie,
                waar we eigenlijk alleen naar één specifieke storing kijken, en
                die oplossen.
              </Text>
              <Title
                size="sm"
                text="Wanneer kies je voor revisie in plaats van reparatie?"
              />
              <Text align="left">
                Dit is een veelvoorkomende vraag, en terecht. Er is dan ook niet
                één eenvoudig antwoord. De keuze hangt af van verschillende
                factoren, waaronder leeftijd van de auto, en het budget van de
                eigenaar. Revisie is op korte termijn namelijk vaak duurder dan
                een reparatie. Over het algemeen is een ECU revisie aan te raden
                in de volgende situaties:
              </Text>
              <ul className="list-disc list-inside mb-2 text-lg">
                <li>
                  <strong>Terugkerende storing</strong> - de storing blijft
                  terugkomen na eerdere reparaties
                </li>
                <li>
                  <strong>Meerdere fouten</strong> - meerdere foutcodes tegelijk
                  aanwezig zijn
                </li>
                <li>
                  <strong>Herhalende noodloop</strong> - het voertuig in
                  noodloop blijft gaan
                </li>
                <li>
                  <strong>Structurele problemen</strong> - de ECU bekendstaat om
                  structurele problemen
                </li>
                <li>
                  <strong>Invloed van externe factoren</strong> - warmte,
                  leeftijd of belasting een rol speelt
                </li>
              </ul>
              <Text align="left">
                In zulke gevallen is een <em>reparatie</em> vaak{" "}
                <em>tijdelijk</em>. Revisie pakt het probleem aan bij de kern en
                voorkomt terugkerende reparaties. Dat scheelt tijd, discussie en
                uiteindelijk kosten.
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
        title="Terugkerende ECU problemen? Vraag een revisie aan!"
        buttonText={"Reparatieformulier"}
        buttonLink={"https://reparatieformulier.nl/reparaties/nieuw?ref=ECUR"}
        target="_blank"
      >
        Vertoont jouw ECU terugkerende storingen of foutcodes, of wil je er
        zeker van zijn dat hij nog jaren mee kan? Wij bij ECU Repair zijn
        gespecialiseerd in <strong>ECU revisies</strong> voor allerlei merken en
        modellen. Nu voertuigen steeds afhankelijker worden van elektronica, is
        het belangrijker dan ooit om ECU storingen tijdig en bij de bron aan te
        pakken. Plan nu een revisie in via ons reparatieformulier!
      </ParallaxBanner>

      <Container>
        <SideContainer
          style={{ marginTop: 20 }}
          alignTop
          left={
            <>
              <Title size="md">Wat zijn veelvoorkomende ECU problemen?</Title>
              <Text align="left" className="mb-2">
                ECU-problemen uiten zich lang niet altijd op één duidelijke
                manier. In de praktijk zien garagebedrijven vaak klachten die
                vaag beginnen en zich daarna blijven herhalen. Juist die
                terugkerende signalen wijzen erop dat er meer speelt binnen de
                Electronic Control Unit en het motormanagement van de auto.
                Hieronder zie je de meest voorkomende ECU-problemen waarvoor ECU
                revisie wordt ingezet.
              </Text>

              <Title size="xs" text="Terugkerende foutcodes" />
              <Text align="left" className="mb-2">
                Foutcodes die na wissen steeds opnieuw verschijnen, soms pas na
                enkele ritten. De oorzaak ligt dan meestal intern in de ECU,
                waardoor een losse reparatie geen blijvende oplossing biedt.
              </Text>

              <Title size="xs" text="Startproblemen of uitval" />
              <Text align="left" className="mb-2">
                De motor start slecht, helemaal niet, of valt direct weer uit.
                Mechanisch lijkt alles in orde, maar de aansturing vanuit de ECU
                wijkt af. Dit komt regelmatig voor bij interne storingen of
                software-gerelateerde problemen.
              </Text>

              <Title size="xs" text="Onverwachte noodloop" />
              <Text align="left" className="mb-2">
                Het voertuig schakelt zonder vast patroon over naar noodloop. Na
                herstart rijdt de auto tijdelijk normaal, waarna de klacht
                terugkomt. Dit type storing wordt vaak veroorzaakt door
                instabiele signalen of spanningsproblemen binnen de ECU.
              </Text>

              <Title size="xs" text="Communicatiefouten" />
              <Text align="left" className="mb-2">
                De ECU communiceert continu met andere modules, zoals ABS,
                transmissie en comfortsystemen. Wanneer die communicatie
                verstoord raakt, ontstaan foutmeldingen die lastig te herleiden
                zijn. Revisie richt zich hier op het herstellen van die interne
                samenwerking binnen het systeem.
              </Text>

              <Title size="xs" text="Warmte/spanningsklachten" />
              <Text align="left" className="mb-2">
                Sommige ECU&apos;s reageren gevoelig op temperatuur of
                spanningsschommelingen, bijvoorbeeld na een zwakke accu of bij
                warme motor. Deze klachten wijzen vaak op componenten die hun
                technische grens naderen.
              </Text>

              <Title size="xs" text="Bekende structurele defecten" />
              <Text align="left" className="mb-4">
                Bepaalde ECU-types staan bekend om specifieke zwakke punten,
                zoals soldeerverbindingen, voedingen of interne drivers. In die
                gevallen wordt revisie toegepast om deze onderdelen preventief
                aan te pakken.
              </Text>

              <Text align="left">
                Herken je één of meerdere van deze ECU-problemen, dan is revisie
                vaak de aangewezen stap om herhaling te voorkomen en de
                betrouwbaarheid van het voertuig te herstellen.
              </Text>
            </>
          }
          right={
            <>
              <Title size="md">Hoe verloopt een ECU revisie?</Title>
              <Text align="left" className="mb-2">
                Een ECU revisie volgt bij ons een vast en overzichtelijk proces.
                Door elke ECU stap voor stap te beoordelen en te behandelen,
                weten garagebedrijven precies waar ze aan toe zijn. Dat werkt
                prettig, zeker bij terugkerende storingen, foutcodes of een
                hardnekkig probleem binnen het motormanagement van de auto.
              </Text>
              <Title size="xs">Stap 1 - Revisie aanmelden</Title>
              <Text align="left" className="mb-2">
                Je meldt de revisie online aan via ons{" "}
                <Link
                  href="https://reparatieformulier.nl/reparaties/nieuw?ref=ECUR"
                  target="_blank"
                  className="!underline"
                >
                  reparatieformulier
                </Link>{" "}
                en stuurt de module op of geeft hem af. Ons systeem koppelt
                klachten, foutcodes en eventuele opmerkingen automatisch aan
                jouw revisie. Zodra het onderdeel binnen is krijg je een
                statusupdate via de mail.
              </Text>
              <Title size="xs">
                Stap 2 - Technische diagnose op de werkbank
              </Title>
              <Text align="left" className="mb-2">
                De ECU wordt los van het voertuig getest. We controleren
                voeding, communicatie en interne functies van het systeem. Deze
                diagnose geeft inzicht in de algehele staat van de ECU en laat
                zien of revisie technisch zinvol is, of dat een andere vorm van
                reparatie beter past.
              </Text>
              <Title size="xs">
                Stap 3 - Revisie van bekende zwakke punten
              </Title>
              <Text align="left" className="mb-2">
                Bij ECU revisie kijken we verder dan alleen de defecten.
                Componenten die gevoelig zijn voor slijtage of bekendstaan om
                structurele problemen worden vervangen of hersteld. Hierbij
                houden we rekening met het type auto, de toepassing en de
                gebruikte software binnen het motormanagement.
              </Text>
              <Title size="xs">Stap 4 - Testen en controle</Title>
              <Text align="left" className="mb-2">
                Na revisie wordt de ECU opnieuw getest onder realistische
                omstandigheden. We controleren of signalen correct worden
                verwerkt en of de unit stabiel functioneert binnen het systeem.
                Pas wanneer alles klopt, wordt de ECU teruggestuurd.
              </Text>
              <Title size="xs">Stap 5 - Terugkoppeling en verzending</Title>
              <Text align="left">
                Je ontvangt duidelijke terugkoppeling over de uitgevoerde ECU
                revisie. Daarna wordt de ECU zorgvuldig verpakt en retour
                gestuurd naar het opgegeven adres, of kun je hem weer ophalen
                bij onze werkplaats. De ECU is klaar voor montage en verder
                gebruik in het voertuig.
              </Text>
            </>
          }
        />
      </Container>

      <Container>
        <Title text="Overige diensten" size="lg" align="center" underline />
        <Text align="center" className="mb-8" slim>
          Naast ECU revisie bieden wij bij ECU Repair ook diverse andere
          diensten aan op het gebied van auto-elektronica. Denk hierbij aan
          gerichte reparaties, uitgebreide diagnoses en revisies van andere
          systemen. Hieronder vind je een overzicht van onze meest gevraagde
          diensten.
        </Text>
        <ServiceRevealCards
          includeIds={[
            "dsg-revisie",
            "ecu-reparatie",
            "ecu-testen",
            "hybride-accu-reparatie",
            "mercedes-contactslot-reparatie",
            "mechatronic-reparatie",
          ]}
        />
      </Container>
    </>
  );
}

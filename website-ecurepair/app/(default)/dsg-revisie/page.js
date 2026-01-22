import Image from "next/image";
import Link from "next/link";

import Breakpoints from "@/styles/Breakpoints";

import Container from "@/components/containers/Container";
import SideContainer from "@/components/containers/SideContainer";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";

import ParallaxBanner from "@/components/modules/ParallexBanner";
import ServiceRevealCards from "@/components/modules/ServiceRevealCards";

import DSG from "@/assets/img/dsg.png";
import DSGBanner from "@/assets/img/dsg-banner.jpg";

export function generateMetadata() {
  return {
    title: `ECU Repair \u2013 DSG revisie voor problemen en preventief onderhoud`,
    description: `Problemen met de DSG automaat of preventief reviseren? ECU Repair voert DSG revisies uit met diagnose, duidelijke kosten en heldere terugkoppeling.`,
  };
}

export default function DsgRevisiePage() {
  return (
    <>
      <Container>
        <SideContainer
          reverse
          left={
            <>
              <Title size="lg" align="left" underline h1>
                DSG Revisie - Herstel je DSG naar topconditie
              </Title>
              <Text align="left" className="mb-2">
                Een <strong>DSG revisie</strong> is handig als je wilt dat je{" "}
                <strong>versnellingsbak</strong> weer als nieuw functioneert.
                Dat kan zijn omdat er duidelijke problemen spelen, zoals{" "}
                <em>schokken</em>, een <em>slippende koppeling</em> of{" "}
                <em>foutcodes</em>. Het zou ook kunnen dat je als garagebedrijf
                preventief een revisie wilt laten uitvoeren, bijvoorbeeld bij
                hogere kilometerstanden of intensief gebruik. Dit voorkomt
                namelijk toekomstige problemen.
              </Text>
              <Text align="left" className="mb-4">
                De DSG automaat is een complex systeem met veel mechaniek,
                elektronica en hydrauliek. Wanneer onderdelen het einde van hun
                levensduur naderen, verandert de werking van de transmissie vaak
                geleidelijk. Met een DSG revisie wordt de basis van de
                versnellingsbak opnieuw beoordeeld en hersteld, zodat de
                aandrijving van de auto weer stabiel functioneert.
              </Text>
              <Title size="sm">Wat is een DSG versnellingsbak?</Title>
              <Text align="left" className="mb-4">
                DSG staat voor <strong>Direct-Shift Gearbox</strong>, of zoals
                onze Oosterse buren zeggen, de <em>Direktschaltgetriebe</em>.{" "}
                Het is een <strong>automatische versnellingsbak</strong> met
                twee koppelingen die om en om de volgende versnelling
                voorbereiden. Dit zorgt voor snelle schakelovergangen en een
                efficiënte aandrijving. De aansturing gebeurt elektronisch en
                hydraulisch, waarbij kleine afwijkingen grote invloed kunnen
                hebben op het schakelen. Door slijtage, vervuilde olie, een
                verouderd filter of interne afstelling kunnen klachten ontstaan.
                In dat geval is versnellingsbak revisie vaak nodig om verdere
                schade te voorkomen en de levensduur van de transmissie te
                verlengen.
              </Text>
              <Title
                size="sm"
                text="Wanneer is een DSG revisie aan te raden?"
              />
              <Text align="left">
                Een DSG revisie kan voor verschillende redenen worden ingezet.
                In de praktijk is dit vaak bij duidelijke klachten, maar dat is
                niet de enige reden. Je ziet vooral bij oudere auto&apos;s dat
                wanneer de versnellingsbak zijn beste tijd heeft gehad, een DSG
                revisie een enorm verschil maakt. Dit geldt zelfs als er nog
                geen storingen zijn. Hieronder vind je een overzicht van
                situaties waarin een DSG revisie aan te raden is:
              </Text>
              <ul className="list-disc list-inside mb-2 text-lg">
                <li>
                  <strong>Schakelstoringen</strong> - Schokkerig of onregelmatig
                  schakelen
                </li>
                <li>
                  <strong>Verouderde koppeling</strong> - Slippende koppeling of
                  trillingen
                </li>
                <li>
                  <strong>Terugkerende storingen</strong> - Terugkerende
                  meldingen na eerdere reparatie
                </li>
                <li>
                  <strong>Preventief onderhoud</strong> - Preventief bij hogere
                  kilometerstanden
                </li>
                <li>
                  <strong>Schakelen versoepelen</strong> - Op verzoek van de
                  klant, zonder actieve storing
                </li>
              </ul>
              <Text align="left">
                Een revisie hoeft dus niet te wachten tot de versnellingsbak
                uitvalt, dan sta je namelijk stil en moet de auto afgevoerd
                worden. Door tijdig in te grijpen blijft de transmissie
                betrouwbaar en voorspelbaar in gebruik.
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
                src={DSG}
                alt="DSG revisie"
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
        image={DSGBanner}
        title="Schakelproblemen? Plan nu een DSG revisie!"
        buttonText={"Reparatieformulier"}
        buttonLink={"https://reparatieformulier.nl/reparaties/nieuw?ref=ECUR"}
        target="_blank"
      >
        Wil je een DSG revisie laten uitvoeren vanwege klachten? Of twijfel je
        juist of je DSG nog goed functioneert, en wil je je klant graag
        zekerheid bieden? Via ons reparatieformulier kun je de revisie eenvoudig
        aanmelden.
      </ParallaxBanner>

      <Container>
        <SideContainer
          style={{ marginTop: 20 }}
          alignTop
          left={
            <>
              <Title size="md">Eerst controleren, dan pas reviseren</Title>
              <Text align="left" className="mb-4">
                Voorafgaand aan een DSG revisie voeren we altijd een diagnose
                uit. Deze <strong>DSG diagnose</strong> laat zien hoe de
                transmissie zich gedraagt en waar aandacht nodig is. Zo wordt
                duidelijk of revisie passend is, of dat een andere aanpak beter
                aansluit, zoals een reparatie of een complete vervanging. Dit
                wordt niet alleen gebruikt om een passend advies te geven, maar
                ook om de huidige staat van de DSG te beoordelen.
              </Text>
              <Title size="md">Revisie, reparatie of vervanging?</Title>
              <Text align="left" className="mb-4">
                Niet elke DSG komt automatisch uit op een volledige revisie.
                Soms blijkt tijdens de diagnose dat een gerichte{" "}
                <em>reparatie</em> volstaat, of dat <em>vervanging</em> in een
                specifiek geval de betere optie is. Door eerst te beoordelen wat
                er onder de motorkap speelt, wordt voorkomen dat er meer wordt
                gedaan dan nodig. Dat maakt het traject niet alleen
                overzichtelijk, maar vaak ook voordeliger op de lange termijn.
              </Text>
              <Title size="md">Kosten, prijs en doorlooptijd</Title>
              <Text align="left" className="mb-2">
                De <strong>prijs</strong> van DSG revisie hangt af van het type
                transmissie, de staat van de onderdelen en de benodigde
                werkzaamheden. Deze kosten kunnen uiteenlopen een aantal
                honderd, tot duizenden euro&apos;s. Ook de{" "}
                <strong>doorlooptijd</strong>
                verschilt per situatie, van een middagje werk tot meerdere
                dagen. Na diagnose kunnen we doorgaans een duidelijke indicatie
                geven van kosten en de benodigde tijd. Wil je dit vooraf
                bespreken of een afspraak maken, dan kun je eenvoudig{" "}
                <Link href="/contact" className="!underline">
                  contact opnemen
                </Link>
                .
              </Text>
              <Title size="xs">
                Transparantie vooraf: geen verrassingen achteraf
              </Title>
              <Text align="left">
                Bij DSG revisie is geen enkele situatie hetzelfde. Dit maakt het
                lastig, of eigenlijk onmogelijk, om een vaste prijs aan elke
                revisie te koppelen. Daarom werken we niet met vaste pakketten
                of standaardprijzen. Na de diagnose communiceren we duidelijk
                wat er aan de hand is, en welke opties er zijn. Zo weet je
                precies welke werkzaamheden nodig zijn, welke onderdelen worden
                aangepakt en wat dat betekent voor de kosten. Pas daarna wordt
                de revisie uitgevoerd. Zo voorkom je onverwachtse kosten en kun
                je richting je klant helder communiceren over prijs en aanpak.
              </Text>
            </>
          }
          right={
            <>
              <Title size="md">Hoe verloopt een DSG revisie?</Title>
              <Text align="left" className="mb-2">
                Een DSG revisie bestaat uit meerdere vaste stappen, waarbij de
                staat van de DSG versnellingsbak centraal staat. Door de
                transmissie te beoordelen en gericht te behandelen, ontstaat
                vooraf duidelijkheid over wat nodig is en wat niet. Dit zorgt
                voor een overzicht van de benodigde werkzaamheden, en geen
                overbodige kosten.
              </Text>
              <Title size="xs">Stap 1 - Revisie aanmelden</Title>
              <Text align="left" className="mb-2">
                De DSG revisie wordt online aangemeld via ons{" "}
                <Link
                  href="https://reparatieformulier.nl/reparaties/nieuw?ref=ECUR"
                  target="_blank"
                  className="!underline"
                >
                  reparatieformulier
                </Link>
                . Daarbij kunnen klachten, foutcodes en aanvullende opmerkingen
                worden meegegeven. Na ontvangst van de versnellingsbak wordt
                deze geregistreerd en ingepland voor beoordeling. Je ontvangt
                hiervan een bevestiging.
              </Text>
              <Title size="xs">Stap 2 - Inspectie en diagnose</Title>
              <Text align="left" className="mb-2">
                De transmissie wordt technisch beoordeeld. We kijken naar de
                algemene staat van de DSG, de werking van de koppeling en
                eventuele tekenen van slijtage. Deze stap geeft inzicht in welke
                onderdelen aandacht nodig hebben en of revisie passend is voor
                de situatie.
              </Text>
              <Title size="xs">Stap 3 - Uitvoering van de revisie</Title>
              <Text align="left" className="mb-2">
                Tijdens de revisie worden onderdelen die invloed hebben op het
                schakelen en de betrouwbaarheid vervangen of hersteld. Daarbij
                worden ook de olie en het filter vernieuwd, zodat de DSG weer
                kan functioneren op een schone basis. De werkzaamheden worden
                afgestemd op het type versnellingsbak en het gebruik in de auto.
              </Text>
              <Title size="xs">Stap 4 - Eindcontrole</Title>
              <Text align="left" className="mb-2">
                Na afronding van de revisie wordt de DSG gecontroleerd voordat
                deze wordt teruggestuurd. Zo wordt vastgesteld dat eventuele
                fouten ook daadwerkelijk zijn verholpen, en dat de transmissie
                correct functioneert. Hierna is hij klaar voor montage in het
                voertuig.
              </Text>
              <Title size="xs">Stap 5 - Terugkoppeling en retour</Title>
              <Text align="left">
                Na afloop ontvang je een duidelijke terugkoppeling over de
                uitgevoerde werkzaamheden. Van vervangen onderdelen, tot
                gerepareerde componenten en eventuele aanbevelingen. Vervolgens
                wordt de DSG zorgvuldig verpakt en retour gestuurd naar het
                opgegeven adres, of klaargelegd voor afhalen. De versnellingsbak
                is gereed voor verder gebruik.
              </Text>
            </>
          }
        />
      </Container>

      <Container>
        <Title text="Overige diensten" size="lg" align="center" underline />
        <Text align="center" className="mb-8" slim>
          Naast DSG revisie ondersteunen wij bedrijven ook bij andere
          werkzaamheden binnen auto-elektronica en aandrijfsystemen. Denk aan
          ECU reparatie, elektronische diagnose en revisies van aanverwante
          systemen. Zo kun je per voertuig bepalen welke service het beste past
          bij motor, transmissie en gebruik.
        </Text>
        <ServiceRevealCards
          includeIds={[
            "ecu-reparatie",
            "ecu-revisie",
            "ecu-testen",
            "mercedes-contactslot-reparatie",
            // "mechatronic-reparatie",
            // "mechatronic-revisie",
          ]}
        />
      </Container>
    </>
  );
}

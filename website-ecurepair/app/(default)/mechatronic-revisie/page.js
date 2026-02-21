import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/pages/overons.module.scss";

import Breakpoints from "@/styles/Breakpoints";

import Container from "@/components/containers/Container";
import SideContainer from "@/components/containers/SideContainer";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";

import Mechatronic from "@/assets/img/mechatronic.jpg";
import MechatronicBanner from "@/assets/img/mechatronic-banner.jpg";
import ParallexBanner from "@/components/modules/ParallexBanner";
import ServiceRevealCards from "@/components/modules/ServiceRevealCards";

export function generateMetadata() {
  return {
    title:
      "Mechatronic revisie voor €400,- \u2013 DSG transmissie mechatronic \u2013 ECU Repair",
    description:
      "Mechatronic revisie voor DSG transmissies bij schakelproblemen en storingen. ECU Repair reviseert DSG mechatronic units na diagnose en test.",
  };
}

export default function MechatronicsRevisiePage() {
  return (
    <>
      <Container>
        <SideContainer
          reverse
          left={
            <>
              <Title
                text="Mechatronic revisie – herstel van de kern van je DSG transmissie"
                className={styles.OverOnsTitleResponsive}
                containerClassName={styles.OverOnsTitleBarResponsive}
                size="lg"
                underline
                h1
              />
              <Text align="left" className="mb-2">
                Een <strong>mechatronic revisie</strong> is vaak de juiste stap
                wanneer een DSG mechatronic klachten veroorzaakt binnen de
                transmissie. Denk aan schokkerig schakelen, foutmeldingen, een
                vertraagde shift of problemen met de koppeling. De mechatronic
                is het brein én het hydraulisch hart van de DSG versnellingsbak.
                Wanneer daar iets misgaat, merk je dat direct tijdens het
                rijden.
              </Text>
              <Text className="mb-4">
                Bij ECU Repair richten we ons op gerichte{" "}
                <strong>revisie van mechatronic-units</strong>. Geen standaard
                vervanging, maar technisch beoordelen, herstellen en testen.
                Eerst weten wat er speelt, dan pas ingrijpen. Dat voorkomt
                onnodige kosten en geeft duidelijkheid vooraf.
              </Text>
              <Title text="Wat is een mechatronic precies?" size="md" />
              <Text align="left" className="mb-4">
                De mechatronic in een DSG transmissie combineert elektronica,
                hydrauliek en aansturing in één unit. Hij regelt welke
                versnelling wordt ingeschakeld, stuurt de koppelingen aan en
                bewaakt de samenwerking tussen motor en transmissie. Kleine
                afwijkingen in druk, sensoren of software kunnen al leiden tot
                merkbare klachten. Als er storingen in de mechatronic ontstaan,
                raakt het hele DSG systeem in de war. Daarom vraagt een
                mechatronic om een gerichte aanpak. Niet alleen mechanisch, maar
                ook elektronisch. Mocht er meer aan de hand zijn, is een{" "}
                <Link href="/dsg-revisie" className="underline!">
                  DSG revisie
                </Link>{" "}
                vaak een gepaste vervolgstap.
              </Text>
              <Title text="Wanneer is mechatronic revisie nodig?" size="md" />
              <Text align="left">
                <strong>Mechatronic problemen</strong> uiten zich niet altijd
                duidelijk of in een keer. Vaak begint het subtiel, en loopt het
                later uit tot een grote probleem. Veelvoorkomende signalen van
                een mechatronic die aan revisie toe is:
              </Text>
              <ul className="text-lg list-disc list-inside mb-4">
                <li>
                  <strong>Schokken</strong> - Schokkerig schakelen bij lage
                  snelheid
                </li>
                <li>
                  <strong>Onregelmatige shift</strong> - Onregelmatige shift
                  tussen versnellingen
                </li>
                <li>
                  <strong>Foutcodes</strong> - Foutcodes gerelateerd aan
                  transmissie of koppeling
                </li>
                <li>
                  <strong>Noodloop</strong> - Noodloop van de DSG
                  versnellingsbak
                </li>
                <li>
                  <strong>Vertraging</strong> - Vertraging bij het inschakelen
                  van D of R
                </li>
              </ul>
              <Text align="left">
                In deze situaties kan mechatronic revisie een passende oplossing
                zijn. Soms blijkt tijdens diagnose dat alleen een gerichte{" "}
                <Link href="/mechatronic-reparatie" className="underline!">
                  mechatronic reparatie
                </Link>{" "}
                nodig is, maar bij structurele slijtage of interne afwijkingen
                is revisie vaak duurzamer dan losse ingrepen.
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
                src={Mechatronic}
                alt="Mechatronic"
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
        image={MechatronicBanner}
        title={"Mechatronic revisie inplannen?"}
        buttonText={"CONTACT OPNEMEN"}
        buttonLink={"/contact"}
      >
        Heb je klachten aan een DSG transmissie of twijfel je over de staat van
        de mechatronic? Plan eenvoudig een afspraak via het{" "}
        <Link
          href="https://www.reparatieformulier.nl/reparaties/nieuw?ref=ECUR"
          target="_blank"
          className="underline!"
        >
          reparatieformulier
        </Link>{" "}
        of neem contact op met onze klantenservice voor overleg.
      </ParallexBanner>

      <Container>
        <SideContainer
          style={{ marginTop: 20 }}
          alignTop
          left={
            <>
              <Title text="Kosten, onderhoud en toekomst" size="md" />
              <Text align="left" className="mb-4">
                De <strong>prijs</strong> van een mechatronic revisie bedraagt{" "}
                <strong>€400,- excl. BTW</strong>. Hou er rekening mee dat de
                grootte van de ingreep de prijs kan beïnvloeden. Na diagnose
                kunnen we doorgaans snel duidelijkheid geven over kosten en
                doorlooptijd. Regelmatig onderhoud, zoals tijdig olie verversen
                van de DSG versnellingsbak, speelt ook een rol in de levensduur
                van de mechatronic. Schone olie vermindert slijtage en voorkomt
                vervuiling van hydraulische kanalen.
              </Text>
              <Title text="Revisie of vervanging?" size="md" />
              <Text align="left" className="mb-4">
                Niet iedere storing vraagt om volledige vervanging. Een nieuwe
                DSG mechatronic kan fors in prijs oplopen, terwijl revisie in
                veel gevallen een technisch verantwoorde en voordeligere
                oplossing biedt. Door gericht te reviseren in plaats van direct
                te vervangen, verleng je de levensduur van de transmissie en
                voorkom je onnodige kosten. Dat is vooral interessant bij
                voertuigen buiten garantie of bij klanten die waarde hechten aan
                duurzaamheid.
              </Text>
              <Title text="Eerst diagnose, dan revisie" size="md" />
              <Text align="left">
                Voordat we starten met revisie, voeren we altijd een{" "}
                <strong>technische beoordeling</strong> uit. De DSG mechatronic
                wordt getest op interne werking, hydraulische drukopbouw,
                sensoren en communicatie met de transmissie. Deze diagnose geeft
                inzicht in:
              </Text>
              <ul className="text-lg list-disc list-inside mb-4">
                <li>
                  <strong>Staat</strong> - De staat van interne onderdelen
                </li>
                <li>
                  <strong>Aansturing</strong> - De werking van de aansturing
                </li>
                <li>
                  <strong>Software</strong> - Eventuele software-afwijkingen
                </li>
                <li>
                  <strong>Slijtage</strong> - Slijtage van hydraulische
                  componenten
                </li>
              </ul>
              <Text align="left">
                Op basis daarvan bepalen we of revisie zinvol is, of dat een
                andere oplossing beter past — bijvoorbeeld vervanging van
                specifieke onderdelen of aanpassing van de software.
              </Text>
            </>
          }
          right={
            <>
              <Title size="md">Hoe verloopt een mechatronic revisie?</Title>
              <Text align="left" className="mb-2">
                Een <strong>mechatronic revisie</strong> vraagt om een
                gestructureerde aanpak, daarom hebben wij een vaste werkwijze
                hiervoor. We beoordelen de DSG mechatronic eerst volledig
                voordat er onderdelen worden vervangen. We kijken naar interne
                slijtage, drukopbouw, aansturing en software, zodat duidelijk
                wordt wat er echt speelt. Pas wanneer de oorzaak vaststaat,
                starten we met de revisie. Zo blijft het traject technisch
                onderbouwd en voorkom je onnodige vervanging.
              </Text>
              <Title size="xs">Stap 1 – Aanmelden en intake</Title>
              <Text align="left" className="mb-2">
                De mechatronic wordt aangemeld via het{" "}
                <Link
                  href="https://reparatieformulier.nl/reparaties/nieuw?ref=ECUR"
                  target="_blank"
                  className="underline!"
                >
                  reparatieformulier
                </Link>
                . Klachten, foutcodes en voertuiggegevens worden vastgelegd, en
                na ontvangst plannen we de unit in voor technische beoordeling.
              </Text>
              <Title size="xs">Stap 2 – Technische inspectie</Title>
              <Text align="left" className="mb-2">
                De unit wordt geopend en gecontroleerd op slijtage, vervuiling
                en afwijkingen in hydraulische kanalen. We beoordelen
                elektronische componenten, printplaten en sensoren om inzicht te
                krijgen in de kern van het probleem.
              </Text>
              <Title size="xs">Stap 3 – Revisie van interne onderdelen</Title>
              <Text align="left" className="mb-2">
                Defecte of versleten onderdelen worden vervangen. Denk aan
                kleppen, drukregelaars, sensoren of interne componenten. Indien
                nodig wordt de software gecontroleerd of aangepast voor een
                stabiele en betrouwbare werking.
              </Text>
              <Title size="xs">Stap 4 – Testen en controle</Title>
              <Text align="left" className="mb-2">
                Na revisie wordt de mechatronic getest om te controleren of de
                drukopbouw en aansturing correct functioneren. Pas wanneer de
                unit stabiel werkt, wordt hij vrijgegeven.
              </Text>
              <Title size="xs">Stap 5 – Terugkoppeling en retour</Title>
              <Text align="left">
                Je ontvangt duidelijke terugkoppeling over de uitgevoerde
                werkzaamheden. Daarna wordt de unit zorgvuldig verpakt en retour
                gestuurd of klaargelegd voor afhalen.
              </Text>
            </>
          }
        />
      </Container>

      <Container>
        <Title text="Overige diensten" size="lg" align="center" underline />
        <Text align="center" className="mb-8" slim>
          Naast mechatronic revisie ondersteunen wij bedrijven ook bij ECU
          reparatie, ECU revisie, DSG revisie en hybride accu werkzaamheden. Zo
          kunnen motor, transmissie en elektronische aansturing als geheel
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
            "mercedes-contactslot-revisie",
            "mechatronic-reparatie",
          ]}
        />
      </Container>
    </>
  );
}

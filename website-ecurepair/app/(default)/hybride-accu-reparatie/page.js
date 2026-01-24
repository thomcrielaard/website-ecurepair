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
    title: `ECU Repair \u2013 Hybride accu reparatie en accupakket herstel`,
    description: `ECU Repair is specialist in hybride accu reparatie, diagnose en herstel van accupakketten. Voor garages en ondernemers in de auto-industrie.`,
  };
}

export default function HybrideAccuReparatiePage() {
  return (
    <>
      <Container>
        <SideContainer
          reverse
          left={
            <>
              <Title size="lg" align="left" underline h1>
                Hybride accu reparatie – gericht herstel van het accupakket
              </Title>
              <Text align="left" className="mb-2">
                <strong>Hybride accu reparatie</strong> is een slimme oplossing
                wanneer een hybride auto <em>storingen</em> vertoont, maar
                volledige vervanging van het accupakket nog niet nodig is. In
                veel gevallen is het probleem terug te herleiden tot een beperkt
                aantal cellen of modules binnen de hybride accu. Door gericht te
                repareren blijft de auto inzetbaar, tegen aanzienlijk lagere
                kosten dan een complete vervanging.
              </Text>
              <Text align="left" className="mb-4">
                Bij ECU Repair richten we ons op het testen, beoordelen en
                herstellen van accupakketten uit hybride voertuigen. Denk aan
                modellen zoals de <em>Toyota Prius</em>, <em>Toyota Auris</em>,{" "}
                <em>Toyota Yaris</em>, <em>Lexus CT 200h</em> en vergelijkbare
                systemen van andere merken. Het uitgangspunt is altijd
                hetzelfde: eerst meten en beoordelen, daarna pas ingrijpen.
              </Text>
              <Title size="sm">Wat is een hybride accupakket?</Title>
              <Text align="left" className="mb-4">
                Een hybride accu pakket bestaat uit meerdere{" "}
                <strong>batterijmodules</strong> die samen de elektromotor
                ondersteunen. Dit pakket werkt nauw samen met de motor,
                vermogenselektronica en het managementsysteem van de auto. Na
                verloop van tijd kunnen individuele cellen in capaciteit
                teruglopen, wat leidt tot onbalans binnen het accupakket. Die
                onbalans veroorzaakt vaak een storing, vermogensverlies of
                foutmeldingen op het dashboard. Het complete pakket vervangen is
                dan niet altijd nodig. Met hybride accu reparatie wordt gekeken
                welke delen van het pakket daadwerkelijk aandacht nodig hebben.
              </Text>
              <Title size="sm">
                Wanneer is hybride accu reparatie geschikt?
              </Title>
              <Text align="left">
                Hybride accu reparatie wordt vaak ingezet bij duidelijke
                klachten. Bij een preventieve reparatie, of een controle is een{" "}
                <strong>hybride accu revisie</strong> vaak geschikter. In de
                praktijk zien we vooral hybride accu reparaties bij:
              </Text>
              <ul className="list-disc list-inside mb-2 text-lg">
                <li>
                  <strong>Waarschuwingslampje</strong> - Waarschuwingsmeldingen
                  van de batterij of hybride aandrijving
                </li>
                <li>
                  <strong>Vermogen</strong> - Verminderd elektrisch vermogen
                </li>
                <li>
                  <strong>Storingen</strong> - Terugkerende storingen zonder
                  mechanische oorzaak
                </li>
                <li>
                  <strong>Twijfel</strong> - Twijfel over de staat van het
                  accupakket bij inkoop of verkoop
                </li>
                <li>
                  <strong>Kosten</strong> - Hoge kostenindicatie vanuit dealer
                  voor volledige vervanging
                </li>
              </ul>
              <Text align="left">
                In deze situaties biedt reparatie een verantwoorde oplossing,
                zonder dat het complete pakket hoeft te worden vervangen.
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
                alt="Hybride accu reparatie"
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
        title="Vraag nu een hybride accu reparatie aan"
        buttonText={"Reparatieformulier"}
        buttonLink={"https://reparatieformulier.nl/reparaties/nieuw?ref=ECUR"}
        target="_blank"
      >
        Twijfel je over de staat van een hybride batterij of wil je een
        accupakket laten beoordelen? Meld de accu aan via ons reparatieformulier
        en bespreek de mogelijkheden met een accu specialist.
      </ParallaxBanner>

      <Container>
        <SideContainer
          style={{ marginTop: 20 }}
          alignTop
          left={
            <>
              <Title size="md">Eerst testen, dan beslissen</Title>
              <Text align="left" className="mb-4">
                Elke hybride accu die bij ons binnenkomt, wordt eerst getest.
                Deze diagnose laat zien hoe het accupakket zich gedraagt en waar
                eventuele <em>afwijkingen</em> zitten. Daarbij kijken we onder
                andere naar spanningsverschillen, capaciteit en
                temperatuurgedrag van individuele modules. Op basis van deze
                metingen wordt bepaald of accu reparatie, een{" "}
                <strong>gereviseerde accu</strong> of alsnog vervanging het
                meest passend is. Zo voorkom je onnodige ingrepen en blijft het
                traject overzichtelijk.
              </Text>
              <Title size="md">Repareren, reviseren of gewoon vervangen?</Title>
              <Text align="left" className="mb-4">
                Niet elk accuprobleem vraagt om dezelfde aanpak. Soms is het
                vervangen van enkele modules voldoende. In andere gevallen is
                een refurbished oplossing aantrekkelijker, waarbij een volledig
                getest en opgebouwd accupakket wordt geplaatst, of jouw eigen
                accupakket gereviseerd wordt. Door vooraf goed te meten en te
                beoordelen, kan per voertuig worden gekozen voor de aanpak die
                het beste past bij gebruik, levensduur en budget. Dat is vaak
                voordeliger dan direct kiezen voor een nieuw pakket via de
                dealer.
              </Text>
              <Title size="md">Kosten, prijs en doorlooptijd</Title>
              <Text align="left" className="mb-2">
                De prijs van hybride accu reparatie hangt af van het type
                voertuig, de omvang van het probleem en het gekozen traject. In
                veel gevallen liggen de kosten aanzienlijk lager dan volledige
                vervanging. De doorlooptijd varieert van enkele dagen tot langer
                bij complexere pakketten. Na diagnose kunnen we meestal snel
                aangeven wat de verwachte kosten en benodigde tijd zijn.
              </Text>
              <Title size="xs">Garantie, milieu en hergebruik</Title>
              <Text align="left">
                Bij hybride accu reparatie wordt hergebruik van onderdelen waar
                mogelijk toegepast. Dit verlengt de levensduur van bestaande
                systemen en draagt bij aan het <strong>milieu</strong>. Iets wat
                voor de hybride bestuurder baak belangrijk is. Afhankelijk van
                de uitgevoerde werkzaamheden wordt garantie gegeven op de
                gerepareerde delen.
              </Text>
            </>
          }
          right={
            <>
              <Title size="md">Hoe verloopt een hybride accu reparatie?</Title>
              <Text align="left" className="mb-2">
                Een hybride accu reparatie volgt bij ons een vast en
                overzichtelijk proces. Door het accupakket stap voor stap te
                testen, beoordelen en herstellen, ontstaat vooraf duidelijkheid
                over de technische staat en de benodigde werkzaamheden. Dat is
                belangrijk, omdat problemen binnen een hybride accu vaak
                geleidelijk ontstaan en niet altijd direct zichtbaar zijn in het
                voertuig. Door eerst te meten en daarna pas in te grijpen,
                worden onnodige kosten voorkomen.
              </Text>
              <Title size="xs">Stap 1 - Aanmelden en intake</Title>
              <Text align="left" className="mb-2">
                De hybride accu wordt aangemeld via het{" "}
                <Link
                  href="https://reparatieformulier.nl/reparaties/nieuw?ref=ECUR"
                  target="_blank"
                  className="!underline"
                >
                  reparatieformulier
                </Link>
                . Daarbij worden voertuiggegevens, klachten en eventuele
                foutcodes vastgelegd. Na ontvangst van het accupakket wordt deze
                geregistreerd en ingepland voor beoordeling. Je ontvangt een
                bevestiging zodra het pakket bij ons binnen is en het traject
                start.
              </Text>
              <Title size="xs">Stap 2 - Testen en diagnose</Title>
              <Text align="left" className="mb-2">
                Het accupakket wordt los van het voertuig getest. We brengen de
                staat van de batterij in kaart en meten spanningen, capaciteit
                en onderlinge verschillen tussen modules. Deze diagnose laat
                zien of het probleem zit in één of meerdere delen van het
                accupakket, en geeft inzicht in de algehele conditie van de
                hybride accu.
              </Text>
              <Title size="xs">
                Stap 3 - Reparatie of vervanging van modules
              </Title>
              <Text align="left" className="mb-2">
                Op basis van de testresultaten worden defecte of zwakke modules
                vervangen of hersteld. Hierbij wordt gericht gewerkt: alleen
                onderdelen die daadwerkelijk afwijken, worden aangepakt. Waar
                mogelijk maken we gebruik van getest of refurbished materiaal,
                zodat het accupakket weer stabiel functioneert zonder volledige
                vervanging.
              </Text>
              <Title size="xs">Stap 4 - Opbouw en controle</Title>
              <Text align="left" className="mb-2">
                Na reparatie wordt het accupakket opnieuw opgebouwd. Vervolgens
                controleren we of de spanningen weer in balans zijn en of het
                pakket zich stabiel gedraagt. Deze controle is belangrijk om te
                voorkomen dat nieuwe onbalans ontstaat na montage in het
                voertuig.
              </Text>
              <Title size="xs">Stap 5 - Terugkoppeling en retour</Title>
              <Text align="left">
                Na afronding ontvang je een duidelijke terugkoppeling over de
                uitgevoerde hybride accu reparatie. Daarbij geven we inzicht in
                wat er is vervangen, hersteld en wat dit betekent voor het
                verdere gebruik en de levensduur van het accupakket. Vervolgens
                wordt de accu zorgvuldig verpakt en retour gestuurd, of
                klaargelegd voor afhalen. Het accupakket is klaar voor montage
                en verder gebruik.
              </Text>
            </>
          }
        />
      </Container>

      <Container>
        <Title text="Overige diensten" size="lg" align="center" underline />
        <Text align="center" className="mb-8" slim>
          Naast hybride accu reparatie ondersteunen wij garagebedrijven ook bij
          ECU testen, DSG revisies en nog veel meer. Zo kan per voertuig een
          passende aanpak worden gekozen, afgestemd op elektronica, aandrijving
          en gebruik.
        </Text>
        <ServiceRevealCards
          includeIds={[
            "dsg-revisie",
            "ecu-reparatie",
            "ecu-testen",
            "ecu-revisie",
            "mercedes-contactslot-reparatie",
            "mechatronic-reparatie",
          ]}
        />
      </Container>
    </>
  );
}

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
import Reparatie from "@/assets/img/mercedes-contactslot-reparatie.png";
import MercedesSprinter from "@/assets/img/mercedes-sprinter.png";
import ECURepair from "@/assets/img/ecurepair.png";
import Link from "next/link";

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
                text="Mercedes contactslot reparatie – specialist in autosleutels en elektronica"
                className={styles.OverOnsTitleResponsive}
                containerClassName={styles.OverOnsTitleBarResponsive}
                size="lg"
                underline
                h1
              />
              <Text>
                Een Mercedes staat bekend om betrouwbaarheid en klasse. Maar
                zodra het <strong>contactslot</strong> begint te haperen, kan
                die luxe ineens omslaan in pure frustratie. De sleutel draait
                niet, de motor start niet, of erger nog: het stuurslot blokkeert
                volledig. Gelukkig hoeft dat niet het einde van de rit te
                betekenen. Bij ECU Repair zijn we gespecialiseerd in{" "}
                <strong>Mercedes contactslot reparatie</strong> – van diagnose
                tot vervanging en alles daartussen.
              </Text>
              <br />
              <Title text="Hoe herken je een defect contactslot?" size="md" />
              <Text>
                De klachten lopen uiteen. Soms merk je het meteen: de{" "}
                <strong>Mercedes sleutel</strong> gaat niet soepel in het slot,
                of draait maar half. Andere keren lijkt alles normaal, totdat de
                auto weigert te starten. Veelvoorkomende symptomen zijn:
              </Text>
              <ul className="text-lg list-disc list-inside mb-4">
                <li>
                  <strong>Startproblemen</strong> - Auto start niet zonder
                  duidelijke reden
                </li>
                <li>
                  <strong>Vastlopende sleutel</strong> - Een sleutel die
                  vastloopt of niet wil draaien
                </li>
                <li>
                  <strong>Stuurslot</strong> - Problemen met het stuurslot (
                  <em>Electronic Steering Lock</em>)
                </li>
                <li>
                  <strong>Dashboardproblemen</strong> - Het dashboard geeft geen
                  contact meer
                </li>
                <li>
                  <strong>Centrale vergrendeling</strong> - Centrale
                  vergrendeling die niet reageert
                </li>
              </ul>
              <Text>
                Bij modellen als de <strong>Mercedes Sprinter</strong>,{" "}
                <strong>Mercedes Vito</strong> en ook bij oudere types zoals de{" "}
                <strong>Mercedes W203</strong>, zien we deze storingen
                regelmatig terugkomen. Vaak ligt de oorzaak dieper in het
                elektronische contactslot (<em>EIS/ESL</em>), en niet bij de
                sleutel zelf.
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
                src={Mercedes}
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
        <SideContainer
          left={
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1/1",
              }}
            >
              <Image
                src={Reparatie}
                alt="Mercedes sleutels"
                style={{ objectFit: "cover" }}
                fill
                sizes={`(min-width: ${Breakpoints.sm}) 45vw, 100vw`}
                placeholder="blur"
                priority
              />
            </div>
          }
          right={
            <>
              <br />
              <Title
                text="Waarom reparatie in plaats van vervanging?"
                size="md"
              />

              <Text>
                Een compleet nieuw contactslot bij de dealer betekent meestal:
                wachten, hoge kosten en opnieuw inleren van sleutels. Reparatie
                of revisie is vaak het slimme alternatief. Het draait om drie
                punten:
              </Text>

              <ul className="text-lg list-decimal list-inside mb-4">
                <li>
                  <strong>Snelheid</strong>: we kunnen vaak dezelfde dag nog een
                  oplossing bieden.
                </li>
                <li>
                  <strong>Kostenbesparing</strong>: een reparatie is een fractie
                  van de prijs van vervanging.
                </li>
                <li>
                  <strong>Originaliteit behouden</strong>: jouw originele
                  sleutel en instellingen blijven intact.
                </li>
              </ul>

              <Text>
                En het mooiste? Met onze speciale apparatuur kunnen we het
                bestaande contactslot uitlezen, de inhoud van de chips
                veiligstellen en – indien nodig – naar een ander slot klonen. Zo
                werkt alles weer alsof het nooit defect is geweest.
              </Text>

              <br />

              <Title text="Onze werkwijze stap voor stap" size="md" />

              <ol className="text-lg list-decimal list-inside mb-4">
                <li>
                  Binnenkomst en registratie van het contactslot en de
                  autosleutel.
                </li>
                <li>
                  Uitgebreide diagnose met gespecialiseerde testapparatuur.
                </li>
                <li>
                  Herstel van defecte componenten of, indien nodig, stuurslot
                  reparatie.
                </li>
                <li>
                  Grondige eindtest – zodat we zeker weten dat alles
                  probleemloos functioneert.
                </li>
                <li>
                  Retour naar de garage of klant, klaar voor montage en gebruik.
                </li>
              </ol>

              <Text>
                Deze aanpak is gebaseerd op jarenlange ervaring met Mercedes
                elektronica. We werken dagelijks met allerlei modellen en hebben
                daardoor de kennis in huis om snel tot de kern van het probleem
                te komen.
              </Text>
            </>
          }
        />
      </Container>

      <ParallexBanner
        image={MercedesBanner}
        title={"Klaar om je Mercedes contactslot te laten repareren?"}
        text={
          "Of het nu gaat om een <strong>vastgelopen sleutel</strong>, een <strong>defect stuurslot</strong> of een <strong>elektronisch probleem</strong> in het contactslot: bij ECU Repair vinden we de oplossing. Neem vandaag nog contact met ons op en ontdek hoe snel jouw Mercedes weer probleemloos start."
        }
        buttonText={"CONTACT OPNEMEN"}
        buttonLink={"/contact"}
      />

      <Container>
        <SideContainer
          reverse
          left={
            <>
              <Title
                text="Mercedes Sprinter, Mercedes Vito en meer – ieder model zijn eigen uitdaging"
                size="md"
              />
              <Text>
                De <strong>Mercedes Sprinter</strong> staat bekend als
                werkpaard, vaak dagelijks ingezet voor transport en logistiek.
                Juist dan kan een stilgevallen voertuig door een{" "}
                <em>defect contactslot</em> enorme kosten en vertraging
                veroorzaken. Ook de <strong>Mercedes Vito</strong>, populair bij
                ondernemers, kampt regelmatig met vergelijkbare problemen. Of
                het nu gaat om een zakelijke bestelbus of een comfortabele
                sedan: wij begrijpen hoe belangrijk het is dat de auto snel weer
                startklaar is.
              </Text>
              <br />
              <Title text="Stuurslot en sleutelproblemen" size="md" />
              <Text>
                Niet altijd ligt de oorzaak in het <strong>contactslot</strong>{" "}
                zelf. Soms is het het <strong>stuurslot</strong> dat blokkeert,
                of een <em>elektronische storing</em> in de
                <strong>sleutelchip</strong>. Onze specialisten onderzoeken het
                volledige systeem – van autosleutel tot stuurmodule – zodat
                niets over het hoofd wordt gezien. Stuurslot reparatie is vaak
                prima mogelijk zonder complete vervanging.
              </Text>
            </>
          }
          right={
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/3",
              }}
            >
              <Image
                src={MercedesSprinter}
                alt="Mercedes Sprinter"
                style={{ objectFit: "cover" }}
                fill
                sizes={`(min-width: ${Breakpoints.sm}) 45vw, 100vw`}
                placeholder="blur"
                priority
              />
            </div>
          }
        />
        <SideContainer
          left={
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/3",
              }}
            >
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
          }
          right={
            <>
              <Title text="Service en afspraak maken" size="md" />
              <Text>
                We weten hoe frustrerend het is als een Mercedes ineens niet
                meer start. Daarom bieden we een flexibele service voor garages
                en ondernemers:
              </Text>
              <ul className="text-lg list-disc list-inside mb-4">
                <li>Snelle doorlooptijden</li>
                <li>Eerlijke uitleg van de kosten vóór we aan de slag gaan</li>
                <li>Ondersteuning per telefoon of mail bij twijfelgevallen</li>
                <li>
                  Mogelijkheid om het slot op te sturen of langs te brengen op
                  ons adres
                </li>
              </ul>
              <Text>
                Een afspraak maken is eenvoudig. Bel ons, mail ons of vul het{" "}
                <Link href="/reparatieformulier" className="!underline">
                  reparatieformulier
                </Link>{" "}
                in, dan zorgen we dat jouw klant snel weer op weg is.
              </Text>
              <br />
              <Title text="Waarom kiezen voor ECU Repair?" size="md" />
              <ul className="text-lg list-disc list-inside mb-4">
                <li>Gespecialiseerd in Mercedes contactslot reparatie</li>
                <li>Ervaring met modellen als Sprinter, Vito, W203 en meer</li>
                <li>Directe toegang tot professionele apparatuur</li>
                <li>
                  Samenwerking met partnerbedrijven zoals Schakelrobot
                  Specialist en ABS Pomp Specialist voor bredere autotechnische
                  ondersteuning
                </li>
                <li>
                  Een persoonlijke aanpak: korte lijnen, duidelijke communicatie
                  en een betrouwbare oplossing
                </li>
              </ul>
            </>
          }
        />
      </Container>

      <Footer />
    </>
  );
}

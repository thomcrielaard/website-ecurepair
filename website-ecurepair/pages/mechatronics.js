import Image from "next/image";
import Head from "next/head";

import styles from "@/styles/pages/overons.module.scss";

import Breakpoints from "@/styles/Breakpoints";

import Container from "@/components/containers/Container";
import SideContainer from "@/components/containers/SideContainer";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";

import Mechatronic from "@/assets/img/mechatronic.jpg";
import DSG from "@/assets/img/dsg.png";
import MechatronicBanner from "@/assets/img/mechatronic-banner.jpg";
import ECURepair from "@/assets/img/ecurepair.png";
import ParallexBanner from "@/components/modules/ParallexBanner";
import Link from "next/link";

export default function Mechatronics() {
  return (
    <>
      <Head>
        <title>ECU Repair &#8211; Mechatronics</title>
        <meta
          name="description"
          content="ECU Repair: Specialist in Mechatronic reparaties. Bij schakelproblemen, 'sleutel'-symbool of foutcodes P17BF/P189C, bieden wij snelle diagnose & oplossingen."
        />
      </Head>

      <Navbar />

      <Container>
        <SideContainer
          reverse
          left={
            <>
              <Title
                text="Mechatronic reparatie – specialist voor garagebedrijven"
                className={styles.OverOnsTitleResponsive}
                containerClassName={styles.OverOnsTitleBarResponsive}
                size="lg"
                underline
                h1
              />
              <Text>
                De mechatronic is het regelbrein van de automatische
                versnellingsbak. Vooral bij de{" "}
                <Link href="/dsg-reparatie" className="!underline">
                  DSG versnellingsbak
                </Link>{" "}
                van <em>Volkswagen</em>, <em>Audi</em>, <em>Seat</em> en{" "}
                <em>Skoda</em> is dit systeem berucht: zodra de mechatronic
                haperingen vertoont, volgen al snel schakelklachten, foutcodes
                of een auto die simpelweg weigert verder te rijden.
              </Text>
              <br />
              <Title text="Wat doet de mechatronic precies?" size="md" />
              <Text>
                Het systeem bestaat uit een combinatie van hydrauliek,
                elektronica en software. De{" "}
                <strong>Transmission Control Unit</strong> (<em>TCU</em>) stuurt
                de solenoids, actuatoren en de koppeling aan en werkt daarbij
                met olie onder hoge druk. Alles draait om timing – een fractie
                van een seconde te laat schakelen en de hele transmissie voelt
                onrustig of schokkerig. Klachten die wij vaak tegenkomen zijn:
              </Text>
              <ul className="text-lg list-disc list-inside mb-4">
                <li>
                  <strong>Mechatronics Foutcodes</strong> - Het opslaan van
                  foutcodes zoals <strong>P17BF</strong> of{" "}
                  <strong>P189C</strong>
                </li>
                <li>
                  <strong>Noodloop</strong> - Plots in noodloop gaan
                </li>
                <li>
                  <strong>Waarschuwingsicoon</strong> - Een sleutel- of
                  transmissiesymbool op het display
                </li>
                <li>
                  <strong>Schakelproblemen</strong> - Moeilijk opschakelen of
                  juist bonkend terugschakelen
                </li>
              </ul>
              <Text>
                Dat soort signalen zijn meestal de basis van een groter
                probleem: slijtage in de hydrauliek, een verouderde accumulator
                of vervuilde olie en filters.
              </Text>
              <br />
              <Title text="Diagnose – geen gokwerk" size="md" />
              <Text>
                Een <strong>mechatronic reparatie</strong> begint altijd bij een
                grondige
                <em>mechatronic diagnose</em>. Bij ECU Repair werken we met het
                specialistische diagnosesoftware, waarmee we de werking van een
                <em>TCU</em> en de <em>hydraulische componenten</em> exact
                kunnen simuleren. Dit gaat veel verder dan standaard uitlezen:
                we bootsen de omstandigheden na waarin de transmissie normaal
                gesproken functioneert. Zo kunnen we nauwkeurig zien of het
                probleem in de software zit, of juist in de hydraulische
                drukopbouw. En dat scheelt garagebedrijven kostbare tijd en
                onnodig onderdelen vervangen.
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
        title={"Klaar voor jouw mechatronic reparatie?"}
        text={
          "Wil je een mechatronic laten onderzoeken, repareren of reviseren? Maak een afspraak of vul het <a href='/reparatieformulier' class='!underline'>reparatieformulier</a> in en stuur de unit naar ons op, of neem contact op voor overleg. Dankzij onze kennis en ervaring weet je zeker dat je transmissie weer functioneert zoals het hoort – soepel, betrouwbaar en zonder verrassingen."
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
              <Title text="Reparatie, revisie of vervanging?" size="md" />
              <Text>
                Niet elk probleem vraagt om een complete vervanging. Soms is een
                gerichte reparatie voldoende, bijvoorbeeld het vervangen van
                defecte solenoids of een geblokkeerde accumulator.
              </Text>
              <ul className="text-lg list-disc list-inside mb-4">
                <li>
                  <strong>Reparatie</strong>: herstel van specifieke onderdelen,
                  snel en doelgericht
                </li>
                <li>
                  <strong>Revisie</strong>: volledige demontage, reinigen,
                  vervangen van slijtagegevoelige delen, testen en opnieuw
                  opbouwen
                </li>
                <li>
                  <strong>Vervanging</strong>: wanneer de mechatronic niet meer
                  economisch te herstellen is
                </li>
              </ul>
              <Text>
                En het mooiste? Dankzij <em>mechatronic klonen</em> kunnen we de
                originele software en instellingen eenvoudig overzetten naar een
                andere unit. Zo blijft het voertuig precies rijden zoals de
                klant gewend is, zonder gedoe met inleren of verlies van
                functies.
              </Text>
            </>
          }
          right={
            <>
              <Title text="Kosten en service" size="md" />
              <Text>
                De kosten van een mechatronic reparatie verschillen per type
                transmissie en klacht. Een eenvoudige reparatie is vaak een
                fractie van de prijs van een nieuwe unit. Een gereviseerde
                mechatronic is meestal het slimste middel: betrouwbaar, getest
                en aanzienlijk voordeliger dan vervanging bij de dealer.
              </Text>
              <br />
              <Text>
                We begrijpen dat garagebedrijven snel duidelijkheid nodig
                hebben. Daarom geven we na diagnose altijd een helder
                kostenoverzicht, zonder verrassingen achteraf.
              </Text>
            </>
          }
        />

        <SideContainer
          reverse
          left={
            <>
              <Title
                text="DSG mechatronic: veelvoorkomende storingen"
                size="md"
              />
              <Text>
                Vooral de{" "}
                <Link href="/dsg-reparatie" className="!underline">
                  DSG mechatronic
                </Link>{" "}
                vraagt veel aandacht. Bekende klachten: trillingen bij
                wegrijden, onverwachte slip in de koppeling of juist hard in de
                versnelling vallen. Vaak wordt er gedacht dat de hele
                transmissie defect is, terwijl het in de basis om de mechatronic
                draait.
              </Text>
              <ul className="text-lg list-disc list-inside mb-4">
                <li>Trillingen bij wegrijden</li>
                <li>Onverwachte slip van de koppeling</li>
                <li>Hard, bonkend of onregelmatig schakelen</li>
                <li>Waarschuwingslampjes of foutcodes</li>
              </ul>
              <Text>
                Regelmatig onderhoud – zoals tijdig verversen van olie en het
                vervangen van het filter – voorkomt een hoop ellende. Toch zien
                we dat dit punt vaak wordt overgeslagen. Het gevolg? Hoger
                risico op schakelklachten en uiteindelijk forse kosten.
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
                alt="DSG Mechatronic"
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
              <Title text="Waarom ECU Repair?" size="md" />
              <ul className="text-lg list-disc list-inside mb-4">
                <li>
                  Gespecialiseerd in elektronische transmissie-oplossingen
                </li>
                <li>
                  Ondersteuning voor vrijwel alle{" "}
                  <strong>DSG versnellingsbakken</strong>
                </li>
                <li>Directe kennisdeling en telefonisch overleg mogelijk</li>
                <li>Strenge testprocedures met moderne apparatuur</li>
                <li>
                  Samenwerking met partnerbedrijven zoals{" "}
                  <Link
                    href="https://schakelrobotspecialist.nl"
                    className="!underline"
                    target="_blank"
                  >
                    Schakelrobot Specialist
                  </Link>{" "}
                  en{" "}
                  <Link
                    href="https://abspompspecialist.nl"
                    className="!underline"
                    target="_blank"
                  >
                    ABS Pomp Specialist
                  </Link>
                </li>
              </ul>
              <Text text="Of het nu gaat om een Audi met schakelklachten of een Seat die compleet stilvalt, we zorgen dat jouw klant snel en veilig de weg weer op kan." />{" "}
            </>
          }
        />
      </Container>

      <Footer />
    </>
  );
}

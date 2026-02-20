import Image from "next/image";

import styles from "@/styles/pages/overons.module.scss";

import Breakpoints from "@/styles/Breakpoints";
import Colors from "@/styles/Colors";

import Container from "@/components/containers/Container";
import SideContainer from "@/components/containers/SideContainer";

import IconBar from "@/components/modules/IconBar";
import ExpandableCards from "@/components/modules/ExpandableCards";
import Button from "@/components/modules/Button";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";

import About from "@/assets/img/overons.png";
import AboutMechatronics from "@/assets/img/about-mechatronics.jpg";
import AboutECU from "@/assets/img/about-ecu.jpg";
import HybridePakket from "@/assets/img/services/hybride-accu-banner.webp";
import MercedesContactsloten from "@/assets/img/services/mercedes-contactslot-reparatie.jpeg";

import Link from "next/link";
import ServiceRevealCards from "@/components/modules/ServiceRevealCards";

export function generateMetadata() {
  return {
    title: "ECU Repair – Over ons",
    description:
      "ECU Repair: Experts in auto-elektronica sinds 2008. Gedreven door passie en expertise, leveren wij topkwaliteit reparaties en onderhoud voor uw voertuig. Ontdek ons verhaal.",
  };
}

export default function OverOnsPage() {
  return (
    <>
      <Container>
        <SideContainer
          reverse
          left={
            <>
              <Title
                text="Wie wij zijn"
                className={`${styles.OverOnsTitleResponsive} uppercase`}
                containerClassName={styles.OverOnsTitleBarResponsive}
                size="lg"
                underline
                h1
              />
              <Text className="mb-4">
                ECU Repair is ontstaan vanuit een simpele gedachte:{" "}
                <strong>auto-elektronica moet betrouwbaar zijn</strong>, en
                reparatie moet helder en voorspelbaar verlopen. Geen onnodige
                vervangingen, geen half werk. Gewoon duidelijke diagnose,
                technische onderbouwing en een oplossing die klopt. Wij werken
                dagelijks voor garagebedrijven en ondernemers in de automotive
                sector die zekerheid willen richting hun klant. Dat vraagt om
                kennis, maar ook om communicatie. Want wat heb je aan techniek
                als je niet weet waar je aan toe bent?
              </Text>
              <Text className="mb-4">
                In onze werkplaats draait het om meten, testen en analyseren.
                Modules worden los beoordeeld, niet op gevoel maar op data. We
                werken met gerichte tarieven, duidelijke terugkoppeling en een
                gestructureerde aanpak. Dat betekent dat je vooraf weet wat jouw
                ECU reparatie kost , wat een ECU test inhoudt of wat een DSG
                revisie betekent. Transparantie is bij ons geen marketingterm,
                maar dagelijkse praktijk.
              </Text>
              <Text>
                We zijn gespecialiseerd in complexe systemen waar mechaniek en
                elektronica samenkomen. Denk aan ECU&apos;s, DSG transmissies,
                mechatronics, hybride accupakketten en Mercedes contactsloten.
                Door jaren ervaring en constante ontwikkeling kennen we de
                zwakke punten van veelvoorkomende systemen. Die kennis delen we
                ook met onze partnerbedrijven zoals{" "}
                <Link
                  href="https://abspompspecialist.nl"
                  className="underline!"
                  target="_blank"
                >
                  ABS Pomp Specialist
                </Link>{" "}
                en{" "}
                <Link
                  href="https://opelecureparatie.nl"
                  className="underline!"
                  target="_blank"
                >
                  Opel ECU Reparatie
                </Link>
                . Uiteindelijk draait het om één ding: zorgen dat jouw klant
                weer verder kan, zonder gedoe.
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
                src={About}
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

      <Container>
        <IconBar />
      </Container>

      <Container>
        <SideContainer
          left={
            <>
              <Title
                text="Wat wij doen"
                className={`${styles.OverOnsTitleResponsive} uppercase`}
                containerClassName={styles.OverOnsTitleBarResponsive}
                size="lg"
                underline
              />
              <Text className="mb-4">
                Auto’s zijn in korte tijd veranderd van mechanische machines
                naar rijdende computers. Dat betekent dat problemen vaak niet
                zichtbaar zijn, maar zich schuilhouden in <em>modules</em>,{" "}
                <em>software</em> of <em>interne componenten</em>. Wij richten
                ons precies op dat deel van de techniek. Op het moment dat een
                versnellingsbak schokt, een hybride accu storing geeft of een
                contactslot weigert, begint ons werk. Wij analyseren, beoordelen
                en herstellen waar dat zinvol is.
              </Text>
              <Text>
                Wat ons onderscheidt, is dat we niet alleen{" "}
                <strong>repareren</strong>. We <strong>testen</strong>,{" "}
                <strong>reviseren</strong>, vergelijken en adviseren. Soms is
                een gerichte reparatie voldoende. Soms is revisie slimmer. En
                soms blijkt uit een diagnose dat een module technisch nog gezond
                is. Dat eerlijke onderscheid maakt het verschil in de praktijk.
                Geen overbodige vervanging, geen onnodige kosten — maar een
                passende oplossing per voertuig.
              </Text>
              <div className={styles.OverOnsButtonWrapper}>
                <Button
                  href="https://reparatieformulier.nl/reparaties/nieuw?ref=ECUR"
                  text="AFSPRAAK MAKEN"
                  color={Colors.WHITE}
                  hoverColor={Colors.RED}
                  borderColor={Colors.RED}
                  hoverBorderColor={Colors.RED}
                  backgroundColor={Colors.RED}
                  hoverBackgroundColor={Colors.WHITE}
                />
              </div>
            </>
          }
          right={
            <ExpandableCards
              cards={[
                {
                  title: "DSG en mechatronics",
                  text: (
                    <>
                      Binnen aandrijfsystemen werken wij veel aan{" "}
                      <Link href="/dsg-revisie" className="underline!">
                        DSG revisie
                      </Link>
                      ,{" "}
                      <Link
                        href="/mechatronic-reparatie"
                        className="underline!"
                      >
                        mechatronic reparatie
                      </Link>{" "}
                      en{" "}
                      <Link href="/mechatronic-revisie" className="underline!">
                        mechatronic revisie
                      </Link>
                      . Een DSG transmissie is technisch verfijnd, maar gevoelig
                      voor slijtage in koppelingen, hydrauliek en aansturing.
                      Bij klachten zoals schokken, foutcodes of onregelmatig
                      schakelen beoordelen wij of een volledige DSG revisie
                      nodig is. Mechatronic reparatie en mechatronic revisie
                      richten zich specifiek op de elektronische en hydraulische
                      aansturing van de versnellingsbak. Hier komen mechaniek en
                      software samen. Door gerichte diagnose bepalen we of
                      herstel mogelijk is of dat vervanging verstandiger is. Dat
                      voorkomt dat complete transmissies onnodig worden
                      gewisseld. In veel gevallen verlengen we zo de levensduur
                      van het systeem aanzienlijk.
                    </>
                  ),
                  img: AboutMechatronics,
                },
                {
                  title: "ECU Services",
                  text: (
                    <>
                      De <strong>ECU</strong> vormt het brein van de motor en
                      communiceert met vrijwel elk systeem in de auto. Wij
                      bieden{" "}
                      <Link href="/ecu-reparatie" className="underline!">
                        ECU reparatie
                      </Link>{" "}
                      en{" "}
                      <Link href="/ecu-revisie" className="underline!">
                        ECU revisie
                      </Link>{" "}
                      voor elk type auto. Wil jij weten of je ECU nog
                      betrouwbaar is? Dan kun je bij ons ook je{" "}
                      <Link href="/ecu-testen" className="underline!">
                        ECU testen
                      </Link>
                      . Bij een reparatie lossen we een concreet defect op. Bij
                      revisie kijken we breder en pakken we ook bekende zwakke
                      punten aan. ECU testen wordt vaak ingezet om vast te
                      stellen of een storing daadwerkelijk in de module zit. Dat
                      voorkomt onnodige vervanging. Veel garagebedrijven
                      gebruiken onze testservice om zekerheid te krijgen vóórdat
                      zij onderdelen bestellen. Uiteindelijk draait het om
                      duidelijkheid. Is de ECU defect, of ligt het probleem
                      ergens anders? Die vraag beantwoorden wij onderbouwd.
                    </>
                  ),
                  img: AboutECU,
                },
                {
                  title: "Hybride accupakketten",
                  text: (
                    <>
                      Hybride techniek vraagt om een andere benadering. Een
                      storing in een <strong>accupakket</strong> betekent niet
                      automatisch volledige vervanging. Wij voeren{" "}
                      <Link
                        href="/hybride-accu-reparatie"
                        className="underline!"
                      >
                        hybride accu reparatie
                      </Link>{" "}
                      en{" "}
                      <Link href="/hybride-accu-revisie" className="underline!">
                        hybride accu revisie
                      </Link>{" "}
                      uit. Daarbij beoordelen we het complete accupakket,
                      inclusief individuele modules en spanningsbalans. In veel
                      gevallen kan een gerichte revisie het systeem weer stabiel
                      maken. Dat scheelt aanzienlijk in kosten ten opzichte van
                      een nieuwe batterij via de dealer. We zien dit vaak bij
                      modellen zoals Toyota Prius, Lexus en vergelijkbare
                      hybride voertuigen. Door technisch inzicht en
                      praktijkervaring kunnen we gericht adviseren wat zinvol
                      is. Dat is beter voor het budget én voor het milieu.
                    </>
                  ),
                  img: HybridePakket,
                },
                {
                  title: "Mercedes contactsloten",
                  text: (
                    <>
                      Een <strong>Mercedes contactslot</strong> of{" "}
                      <strong>Electronic Steering Lock (ESL)</strong> kan voor
                      flinke problemen zorgen. De sleutel draait niet meer, de
                      vergrendeling blijft actief of de auto reageert niet. Wij
                      voeren{" "}
                      <Link
                        href="/mercedes-contactslot-reparatie"
                        className="underline!"
                      >
                        Mercedes contactslot reparatie
                      </Link>{" "}
                      en{" "}
                      <Link
                        href="/mercedes-contactslot-revisie"
                        className="underline!"
                      >
                        revisie
                      </Link>{" "}
                      uit. Daarbij beoordelen we het contactslot én het
                      stuurslot als systeem. Veel voorkomende klachten zien we
                      bij onder andere de Mercedes Sprinter en Vito. Door
                      gericht herstel voorkomen we complete vervanging van het
                      systeem. Dat bespaart tijd én kosten voor het
                      garagebedrijf. Onze aanpak is technisch onderbouwd en
                      praktisch uitvoerbaar. Uiteindelijk wil je gewoon dat de
                      auto start — en dat hij dat blijft doen.
                    </>
                  ),
                  img: MercedesContactsloten,
                },
              ]}
            />
          }
        />
      </Container>

      <Container>
        <Title
          text="Al onze diensten"
          size="lg"
          align="center"
          underline
          className="uppercase"
        />
        <Text align="center" className="mb-8" slim>
          Binnen ECU Repair bundelen we al onze diensten onder één dak, zodat je
          als garagebedrijf niet hoeft te schakelen tussen verschillende
          specialisten. Alles wordt technisch beoordeeld in onze eigen
          werkplaats, wat zorgt voor korte lijnen, heldere tarieven en
          duidelijke terugkoppeling. Bekijk hieronder ons actuele aanbod aan
          diensten.
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
            "mechatronic-revisie",
          ]}
        />
      </Container>
    </>
  );
}

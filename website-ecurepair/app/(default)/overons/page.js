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
import AboutECU from "@/assets/img/about-ecu.jpg";
import AboutTachometer from "@/assets/img/about-tachometer.jpg";
import AboutMechatronics from "@/assets/img/about-mechatronics.jpg";

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
                text="WIE WIJ ZIJN"
                className={styles.OverOnsTitleResponsive}
                containerClassName={styles.OverOnsTitleBarResponsive}
                size="lg"
                underline
                h1
              />
              <Text text="ECU Repair is ontstaan uit een passie voor autotechnologie en een drive om elk voertuig zo efficiënt mogelijk te laten functioneren. Al sinds onze oprichting hebben we ons gewijd aan het onderzoeken, diagnosticeren en repareren van geavanceerde auto-elektronica systemen. We hebben een team van toegewijde professionals die continu hun kennis bijspijkeren om aan de eisen van de zich snel ontwikkelende auto-industrie te voldoen." />
              <Text text="Ons hoofddoel is om eigenaars van voertuigen de zekerheid te bieden dat hun auto in de best mogelijke handen is. We begrijpen de complexiteit van moderne auto-elektronica en het belang van deze systemen voor de algehele prestaties van het voertuig. Daarom werken we er onophoudelijk aan om ervoor te zorgen dat elk systeem, van de ECU tot de tellerklok, nauwkeurig en effectief functioneert." />
              <Text text="De tevredenheid van onze klanten staat voorop. Door een combinatie van geavanceerde apparatuur, uitgebreide training en een klantgerichte aanpak, streven we ernaar om elke keer weer topkwaliteit te leveren." />
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
                text="WAT WIJ DOEN"
                className={styles.OverOnsTitleResponsive}
                containerClassName={styles.OverOnsTitleBarResponsive}
                size="lg"
                underline
              />
              <Text
                text="Bij ECU Repair is het onze missie om ervoor te zorgen dat uw auto vlekkeloos werkt. Met een gespecialiseerd team hebben we ons gericht op de technische aspecten van auto-elektronica, zodat u veilig en met vertrouwen de weg op kunt. Of u nu problemen heeft met uw ECU, tellerklok, mechatronics of Mercedes contactslot, wij staan klaar om u te helpen met geavanceerde oplossingen en ongeëvenaarde expertise."
                style={{ marginBottom: 20 }}
              />
              <div className={styles.OverOnsButtonWrapper}>
                <Button
                  href="/contact"
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
                  title: "ECU Diagnose",
                  text: "De Electronic Control Unit (ECU) is het brein van uw auto. Als deze niet optimaal werkt, kan dit leiden tot een verminderde prestatie en zelfs tot storingen. Een goed functionerende ECU is essentieel voor zaken als brandstofefficiëntie, motorprestaties en andere vitale functies van het voertuig. Wij bij ECU Repair begrijpen het belang van deze component en bieden een grondige diagnostiek en reparatieservice. We maken gebruik van geavanceerde technologieën en methoden om ervoor te zorgen dat uw ECU in perfecte staat verkeert en uw auto naar behoren presteert.",
                  img: AboutECU,
                },
                {
                  title: "Tellerklok Reparaties",
                  text: "Een defecte tellerklok kan niet alleen voor verwarring zorgen tijdens het rijden, maar ook essentiële informatie over uw voertuig verbergen. Van verlichtingsproblemen en incorrecte snelheidsweergaves tot andere elektronische storingen, een goed functionerende tellerklok is cruciaal voor een veilige rijervaring. Ons team van experts bij ECU Repair heeft jarenlange ervaring in het snel en efficiënt diagnosticeren en oplossen van deze problemen. Wij gebruiken de nieuwste technologieën en technieken om ervoor te zorgen dat u altijd een nauwkeurige en betrouwbare lezing van uw dashboard krijgt.",
                  img: AboutTachometer,
                },
                {
                  title: "Mechatronics Onderhoud",
                  text: "Mechatronics speelt een sleutelrol in de automatische transmissie van uw auto. Elk falen of defect binnen dit systeem kan resulteren in een minder soepel schakelgedrag en andere gerelateerde problemen. Bij ECU Repair nemen we geen genoegen met half werk. Ons team is gespecialiseerd in het uitvoeren van een grondige inspectie van mechatronic componenten. We identificeren de kern van het probleem en zorgen voor een efficiënte oplossing, zodat uw rijervaring altijd optimaal is. Met geavanceerde tools en een diepgaande kennis van auto-elektronica, streven we ernaar om de hoogste kwaliteit onderhoud en reparatie te bieden voor uw voertuig.",
                  img: AboutMechatronics,
                },
              ]}
            />
          }
        />
      </Container>

      <Container>
        <Title text="ONZE GESCHIEDENIS" align="center" size="lg" underline />
        <SideContainer
          style={{ marginTop: 20 }}
          alignTop
          left={
            <>
              <Text text="In 2008, tijdens de snelle ontwikkelingen in de auto-elektronica sector, werd ECU Repair geboren. Onze visie was helder: een rol spelen in de niche van auto-elektronica reparaties. Ons team bestond uit een handvol gepassioneerde professionals met een gedeelde ambitie: toonaangevend worden op het gebied van reparatie en onderhoud van motormanagementeenheden, ofwel ECU's. We zagen al snel het belang in van specialisatie in een industrie die steeds technischer en complexer werd." />
              <Text text="Naarmate de jaren verstreken, breidden we onze expertise uit. Het ging niet meer alleen om ECU's, maar ook om andere cruciale auto-elektronische onderdelen zoals tellerklokken, mechatronics en Mercedes contactsloten. Voortdurende training en het up-to-date blijven met de nieuwste technologische trends stonden centraal in onze groei. Onze technici werden niet alleen experts in hun vakgebied, maar ook consultants voor klanten die op zoek waren naar betrouwbaar advies in een gecompliceerd technisch landschap." />
            </>
          }
          right={
            <>
              <Text text="Wat ECU Repair echter onderscheidde van vele anderen, was niet alleen onze technische capaciteit, maar ook de relaties die we opbouwden. We waardeerden elke klant, groot of klein, en streefden ernaar om meer te bieden dan alleen reparatieservices. Eerlijkheid, transparantie en het bieden van duurzame oplossingen vormden de hoeksteen van onze klantrelaties. Onze reputatie groeide, grotendeels door mond-tot-mondreclame en positieve referenties van tevreden klanten." />
              <Text text="Terwijl we terugkijken op ons traject, zijn we trots op wat we hebben bereikt, maar we kijken ook enthousiast naar de toekomst. De auto-elektronica industrie blijft evolueren, en ECU Repair is vastbesloten om aan het roer van deze veranderingen te staan. We blijven investeren in technologie, opleiding en, het belangrijkste, onze klanten. Hierdoor verzekeren we ons van een plek aan de top in de komende jaren en blijven we de betrouwbare partner die onze klanten van ons verwachten." />
            </>
          }
        />
      </Container>
    </>
  );
}

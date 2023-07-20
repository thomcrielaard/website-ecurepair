import Image from "next/image";
import Head from "next/head";

import styles from "@/styles/pages/overons.module.scss";

import UseDimensions from "@/services/UseDimensions";
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

import About from "@/assets/img/overons.png";
import AboutRepair from "@/assets/img/about-repair.jpg";
import AboutDiagnostics from "@/assets/img/about-diagnostics.jpg";
import AboutRevision from "@/assets/img/about-revision.jpg";

export default function OverOns() {
  const size = UseDimensions();

  return (
    <>
      <Head>
        <title>ABS Pomp Specialist &#8211; Over ons</title>
        <meta
          name="description"
          content="Bij ABS Pomp Specialist zijn we trots op onze toewijding aan uitmuntendheid en klanttevredenheid. Als toonaangevende expert op het gebied van ABS pomp reparatie en revisie, hebben we een team van ervaren monteurs die altijd klaar staan om u te helpen."
        />
      </Head>

      <Navbar />

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
              />
              <Text text="Bij ABS Pomp Specialist zijn we trots op onze toewijding aan uitmuntendheid en klanttevredenheid. Als toonaangevende expert op het gebied van ABS pomp reparatie en revisie, hebben we een team van ervaren monteurs die altijd klaar staan om u te helpen." />
              <Text text="Onze missie is simpel: wij streven ernaar om u een snelle, efficiënte en hoogwaardige service te bieden voor al uw ABS gerelateerde problemen. Met onze diepgaande technische kennis en uitgebreide ervaring, zijn wij in staat om de hoogste kwaliteit van werk te leveren bij elke opdracht die we ondernemen." />
              <Text text="We begrijpen dat betrouwbaarheid van uw auto essentieel is, en dat is de reden waarom wij alles in het werk stellen om ervoor te zorgen dat uw voertuig veilig en effectief functioneert na onze interventie." />
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
                alt="ABS Pomp"
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
                text="Ons aanbod van diensten omvat een breed spectrum van ABS gerelateerde problemen. Van diagnose tot reparatie en revisie, wij zorgen ervoor dat uw ABS systeem perfect functioneert. Wij hebben de ervaring en de kennis om de meest uitdagende ABS problemen aan te pakken."
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
                  title: "ABS Pomp Reparatie",
                  text: "Het functioneren van een ABS pomp is cruciaal voor de veiligheid van uw voertuig. Een defect kan niet alleen uw veiligheid in gevaar brengen, maar kan ook leiden tot verdere schade aan uw auto. Ons team van ervaren monteurs, gewapend met de benodigde technische kennis, is uiterst bedreven in het diagnosticeren en repareren van dergelijke defecten. Met uiterste precisie en toewijding werken zij om uw ABS pomp te herstellen, en zo uw voertuig weer in topconditie te brengen, voor een zorgeloze en veilige rijervaring.",
                  img: AboutRepair,
                },
                {
                  title: "ABS Pomp Revisie",
                  text: "Er zijn situaties waarin een volledige revisie van uw ABS pomp de meest effectieve oplossing is om uw voertuig weer optimaal te laten functioneren. In dergelijke gevallen staan onze hoogopgeleide monteurs klaar met hun diepgaande expertise en de meest geavanceerde apparatuur. Ze zetten hun uitgebreide ervaring en diepgaande technische kennis in om de revisie van uw ABS pomp met de hoogste mate van precisie uit te voeren, en daarmee de veiligheid en betrouwbaarheid van uw voertuig te waarborgen.",
                  img: AboutRevision,
                },
                {
                  title: "ABS Storing Diagnose",
                  text: "Zijn er aanwijzingen van een ABS storing, maar blijft de oorzaak onduidelijk? Onze hooggekwalificeerde monteurs maken gebruik van state-of-the-art diagnose apparatuur om de onderliggende problemen op te sporen. We stellen een nauwkeurige diagnose en bieden een doelgerichte oplossing om uw ABS systeem weer vlekkeloos te laten functioneren.",
                  img: AboutDiagnostics,
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
              <Text text="Onze reis begon jaren geleden met een missie om de best mogelijke service te bieden voor ABS pomp reparatie en revisie. Door de jaren heen hebben we een schat aan ervaring opgedaan en hebben we ons stevig gevestigd als een van de leidende spelers in de branche." />
              <Text text="In 2008 werd ABS Pomp Specialist opgericht met als doel een gespecialiseerde service te bieden voor ABS pomp reparaties en revisies. Onze vastberadenheid om een superieure service te leveren heeft ons snel doen groeien en vandaag de dag zijn we trots op ons sterke team van gekwalificeerde monteurs en onze uitbreide klantenbasis. We streven ernaar om altijd de beste oplossingen te bieden en we werken continu aan het verbeteren en uitbreiden van onze diensten." />
              <Text text="In onze groei hebben we nooit het belang van de klant uit het oog verloren. Het centraal stellen van de klant, het respecteren van hun behoeften en het bieden van transparante en betrouwbare diensten is de kern van onze bedrijfsfilosofie. We streven ernaar om meer dan alleen een dienstverlener te zijn; we zijn een vertrouwde partner in uw voertuigveiligheid. Deze klantgerichte benadering heeft onze groei versterkt en ons geholpen duurzame relaties op te bouwen." />
            </>
          }
          right={
            <>
              <Text text="Naast onze technische expertise en onze uitstekende klantenservice, zijn innovatie en het voortdurend op de hoogte blijven van technologische ontwikkelingen altijd belangrijke pijlers van ons bedrijf geweest. In een wereld die snel evolueert, erkennen we het belang van het blijven investeren in de nieuwste technologieën en het continu opleiden van ons team. Dit stelt ons in staat om een breed scala aan diensten te bieden, van het diagnosticeren van ABS-storingen tot het repareren van ABS-pompen, en om problemen met de hoogst mogelijke efficiëntie aan te pakken. Dit verlangen om voorop te blijven lopen in de branche maakt deel uit van onze bedrijfscultuur en draagt in grote mate bij aan de kwaliteit en betrouwbaarheid van onze diensten." />
              <Text text="We hebben ons succes te danken aan onze niet aflatende inzet voor klanttevredenheid, onze technische expertise en ons streven naar uitmuntendheid. We zijn trots op de erkenning die we hebben ontvangen voor onze hoogwaardige diensten, maar we blijven niet stilstaan. We kijken uit naar vele jaren van verdere groei en succes, en we blijven ons inzetten om de beste ABS pomp reparatie- en revisiediensten in de branche te leveren." />
            </>
          }
        />
      </Container>

      <Footer />
    </>
  );
}

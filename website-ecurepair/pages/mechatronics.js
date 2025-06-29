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

import Mechatronic from "@/assets/img/mechatronic.jpg";
import MechatronicBanner from "@/assets/img/mechatronic-banner.jpg";
import ParallexBanner from "@/components/modules/ParallexBanner";

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
                text="MECHATRONIC REPARATIE"
                className={styles.OverOnsTitleResponsive}
                containerClassName={styles.OverOnsTitleBarResponsive}
                size="lg"
                underline
                h1
              />
              <Text text="In het hart van moderne automatische versnellingsbakken ligt de Mechatronic, een essentieel en complex systeem. Wanneer specifieke versnellingen weigeren, een 'sleutel'-symbool op uw display verschijnt, of als u bepaalde foutcodes zoals P17BF of P189C uitleest, kan dit een indicatie zijn dat uw Mechatronic problemen ondervindt." />
              <Text text="Als het regelbrein van de versnellingsbak is de Mechatronic verantwoordelijk voor het juiste schakelproces. Het systeem omvat diverse solenoids, actuatoren en sensoren, die allemaal nauw samenwerken om ervoor te zorgen dat uw auto op het juiste moment naar de juiste versnelling schakelt. Alles draait hier om precisie en timing, ondersteund door geavanceerde technologie." />
              <Text text="Centraal in de Mechatronic staat de Transmission Control Unit (TCU). Dit is de 'computer' die alle signalen verwerkt en de diverse solenoids en actuatoren aanstuurt. De werking van de TCU is cruciaal, aangezien het onder hoge druk functioneert, mogelijk gemaakt door een specifieke hydrauliekpomp." />
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
        title={"MECHATRONIC PROBLEMEN?"}
        text={
          "Als uw auto symptomen vertoont van Mechatronic-problemen, wacht dan niet langer. Ons deskundige team staat klaar om u te helpen. Neem direct contact op voor een diagnose en laat ons u begeleiden bij elke stap van het proces."
        }
        buttonText={"CONTACT OPNEMEN"}
        buttonLink={"/contact"}
      />
      <Container>
        <Title
          text="MECHATRONIC OPLOSSINGEN"
          align="center"
          size="lg"
          underline
        />
        <SideContainer
          style={{ marginTop: 20 }}
          alignTop
          left={
            <>
              <Text text="Binnen ons assortiment beschikken wij over een breed scala aan Mechatronics. Door deze voorraad kunnen we adequaat en snel inspelen op urgente situaties. Mocht u ooit geconfronteerd worden met een defecte Mechatronic, dan staat ons team klaar om actie te ondernemen. We zorgen ervoor dat u vaak al binnen dezelfde dag uw reis kunt voortzetten met een gloednieuw Mechatronic-systeem." />
              <Text text="Maar soms is volledige vervanging niet de enige oplossing. Het unieke proces van het 'klonen' van de Mechatronic stelt ons in staat om een exacte kopie te maken van de software in uw bestaande TCU. Dit garandeert dat zelfs met een nieuwe Mechatronic unit, de originele softwareconfiguratie en -prestaties behouden blijven, wat resulteert in een soepele en naadloze integratie met uw voertuig." />
            </>
          }
          right={
            <>
              <Text text="Voor situaties waarin reparatie de beste route lijkt, duiken onze experts diep in het hart van het Mechatronic-systeem. Na een grondige diagnose, identificeren we mogelijke problemen en zorgen we voor de nodige vervangingen of aanpassingen. Het is onze missie om uw Mechatronic weer te laten functioneren op zijn optimale capaciteit." />
              <Text text="Daarnaast begrijpen we dat budget een belangrijke overweging kan zijn. Daarom bieden we ook volledig gereviseerde systemen aan als alternatief voor een gloednieuwe Mechatronic. Deze systemen ondergaan strenge tests en controles. Elk defect of slijtagegevoelig onderdeel wordt vervangen. Het resultaat? Een Mechatronic die voelt en presteert alsof hij rechtstreeks uit de fabriek komt, maar dan voor een fractie van de prijs." />
            </>
          }
        />
      </Container>

      <Footer />
    </>
  );
}

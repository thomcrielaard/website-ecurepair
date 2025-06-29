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

import Tachometer from "@/assets/img/tachometer.jpg";
import TachometerBanner from "@/assets/img/tachometer-banner.jpg";
import ParallexBanner from "@/components/modules/ParallexBanner";

export default function MercedesContactsloten() {
  return (
    <>
      <Head>
        <title>ECU Repair &#8211; Tellerklokken</title>
        <meta
          name="description"
          content="ECU Repair: Specialist in reparatie van Mercedes tellerklokken, dashboard storingen & auto-elektronica. Problemen met uw kilometerteller? Wij lossen het op."
        />
      </Head>

      <Navbar />

      <Container>
        <SideContainer
          reverse
          left={
            <>
              <Title
                text="DEFECTE TELLERKLOK"
                className={styles.OverOnsTitleResponsive}
                containerClassName={styles.OverOnsTitleBarResponsive}
                size="lg"
                underline
                h1
              />
              <Text text="Wanneer u achter het stuur van uw auto zit, vertrouwt u op uw dashboard om u essentiële informatie over uw voertuig te geven. Een van de meest cruciale onderdelen is de tellerklok. Is uw snelheidsweergave plots gestopt? Of merkt u dat de teller niet de juiste snelheid of toeren weergeeft? Dit zijn vaak tekenen van een defecte tellerklok. Deze ongemakken kunnen uw rijervaring aanzienlijk verstoren en mogelijk leiden tot verdere complicaties indien niet tijdig aangepakt." />
              <Text text="Een defect in de dagteller kan met name verraderlijk zijn. Het kan bijvoorbeeld gebeuren dat de snelheidsmeter naar behoren functioneert, maar de dagteller dit niet doet. Dit duidt vaak op een mechanisch probleem binnen de tellerklok. Dergelijke problemen kunnen variëren van simpele slijtage tot complexere elektronische kwesties. Gelukkig beschikt ECU Repair over de tools en expertise om deze problemen te identificeren en effectief te verhelpen." />
              <Text text="Naast de standaard kilometerteller kunnen er ook problemen ontstaan met de toerenteller. Of het nu een simpele kwestie is zoals een defect tandwieltje of uitdagingen op het gebied van elektronica, het team van ECU Repair staat klaar om in te grijpen. Met onze uitgebreide kennis van auto-elektronica zijn wij optimaal uitgerust om uw teller weer in topconditie te krijgen, zodat u met vertrouwen de weg op kunt." />
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
                src={Tachometer}
                alt="Tellerklok"
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
        image={TachometerBanner}
        title={"DEFECTE TELLERKLOK?"}
        text={
          "Bij ECU Repair zijn we experts in tellerklok reparaties. Onze ervaren technici zorgen ervoor dat uw auto weer optimaal functioneert. Ervaart u problemen met uw tellerklok? Wacht niet en laat het ons oplossen. Neem nu contact op en maak vandaag nog een afspraak."
        }
        buttonText={"CONTACT OPNEMEN"}
        buttonLink={"/contact"}
      />
      <Container>
        <Title text="KIES VOOR ECU REPAIR" align="center" size="lg" underline />
        <SideContainer
          style={{ marginTop: 20 }}
          alignTop
          left={
            <>
              <Text text="Een defecte tellerklok kan flinke complicaties met zich meebrengen. Wanneer onderdelen niet meer accuraat functioneren, kan dit leiden tot onverwachte kosten. Dealers adviseren dikwijls tot vervanging, maar bij ECU Repair kijken we eerst naar een efficiëntere oplossing: reparatie. Deze aanpak bespaart vaak aanzienlijk in vergelijking met de hoge kosten van een volledige vervanging." />
              <Text text="Bij ECU Repair zijn we trots op onze expertise. Met een achtergrond van jarenlange ervaring in auto-elektronica, beschikken onze technici over de nodige kennis om uw tellerklok vakkundig te herstellen. We streven naar een snelle en effectieve service, zodat u zich weer veilig op de weg bevindt." />
            </>
          }
          right={
            <>
              <Text text="Onze diensten beperken zich niet tot enkel de tellerklok. Als specialisten in auto-elektronica, bieden we oplossingen voor een breed scala aan problemen. Of het nu gaat om navigatiesystemen, alarmsystemen of andere complexe elektronica issues, ECU Repair staat voor u klaar om uw auto in optimale staat te houden." />
              <Text text="Bij ons is de klant koning. We geloven in een persoonlijke aanpak, waarbij uw tevredenheid centraal staat. Snelle service, transparantie in communicatie en kwalitatieve reparaties kenmerken onze werkwijze. Door voor ECU Repair te kiezen, verzekert u zich van een service die zowel betrouwbaar als vakkundig is." />
            </>
          }
        />
      </Container>

      <Footer />
    </>
  );
}

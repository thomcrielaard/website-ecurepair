import * as React from "react";
import Image from "next/image";

import styles from "@/styles/modules/ParallexBanner.module.scss";

import Colors from "@/styles/Colors";

import Container from "@/components/containers/Container";

import Text from "@/components/text/Text";
import Title from "@/components/text/Title";

import Button from "@/components/modules/Button";

import Banner from "@/assets/img/parallex.jpg";

export default function ParallexBanner() {
  return (
    <>
      <div className={styles.ParallexBannerContainer}>
        <div className={styles.ParallexBannerOverlay} />
        <Image
          style={{ zIndex: -1, objectFit: "cover" }}
          src={Banner}
          alt={"Banner"}
          placeholder="blur"
          sizes="100vw"
          fill
        />

        <Container paddingVert={0} style={{ zIndex: 1, position: "relative" }}>
          <div className={styles.ParallexBannerWrapper}>
            <Title
              text="WAT WIJ DOEN"
              color={Colors.WHITE}
              size="xl"
              align="center"
            />

            <Text
              text="Bij ECU Repair staan we voor toonaangevende expertise in auto-onderdeel reparaties. Of het nu gaat om ECU's, tellerklokken, mechatronics of contactsloten, ons team van deskundige monteurs heeft de ervaring en kennis om u te helpen. Onze klantgerichte benadering garandeert tevredenheid bij elke service."
              color={Colors.WHITE}
              align="center"
              slim
            />

            <Button
              text="MEER OVER ONS"
              backgroundColor={Colors.WHITE}
              color={Colors.GRAY}
              hoverColor={Colors.RED}
              href="/overons"
            />
          </div>
        </Container>
      </div>
    </>
  );
}

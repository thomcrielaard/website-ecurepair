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
              text="Bij ABS Pomp Specialist bieden we professionele reparatie en revisie van ABS pompen. We identificeren en lossen ABS problemen op en vervangen indien nodig uw ABS pomp. Met ons vakkundig team en moderne diagnose apparatuur zorgen we voor een efficiënte service."
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

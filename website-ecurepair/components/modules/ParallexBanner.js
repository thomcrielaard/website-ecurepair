import * as React from "react";
import Image from "next/image";

import styles from "@/styles/modules/ParallexBanner.module.scss";

import Colors from "@/styles/Colors";

import Container from "@/components/containers/Container";

import Text from "@/components/text/Text";
import Title from "@/components/text/Title";

import Button from "@/components/modules/Button";

export default function ParallexBanner(props) {
  return (
    <>
      <div className={styles.ParallexBannerContainer}>
        <div className={styles.ParallexBannerOverlay} />
        <Image
          style={{ zIndex: -1, objectFit: "cover" }}
          src={props.image}
          alt={"Banner"}
          placeholder="blur"
          sizes="100vw"
          fill
        />

        <Container paddingVert={0} style={{ zIndex: 1, position: "relative" }}>
          <div className={styles.ParallexBannerWrapper}>
            <Title
              text={props.title}
              color={Colors.WHITE}
              size="xl"
              align="center"
            />

            <Text text={props.text} color={Colors.WHITE} align="center" slim />

            <Button
              text={props.buttonText}
              backgroundColor={Colors.WHITE}
              color={Colors.GRAY}
              hoverColor={Colors.RED}
              href={props.url}
            />
          </div>
        </Container>
      </div>
    </>
  );
}

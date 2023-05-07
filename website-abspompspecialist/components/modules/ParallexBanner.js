import * as React from "react";
import Image from "next/image";

import UseDimensions from "@/services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";
import Colors from "@/styles/Colors";

import Container from "@/components/containers/Container";

import Text from "@/components/text/Text";
import Title from "@/components/text/Title";

import Button from "@/components/modules/Button";

import Banner from "@/assets/img/parallex.jpg";

export default function ParallexBanner(props) {
  const size = UseDimensions();

  return (
    <>
      <div
        style={{
          position: "relative",
          clipPath:
            size.width < Breakpoints.md
              ? "polygon(0 0, 50% 30px, 100% 0, 100% calc(100% - 30px), 50% 100%, 0 calc(100% - 30px))"
              : "polygon(0 0, 50% 85px, 100% 0, 100% calc(100% - 85px), 50% 100%, 0 calc(100% - 85px))",
        }}
      >
        <div
          style={{
            position: "absolute",
            zIndex: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#000000A0",
          }}
        />
        <Image
          style={{ zIndex: -1, objectFit: "cover" }}
          src={Banner}
          alt={"Banner"}
          placeholder="blur"
          sizes="100vw"
          fill
          priority
        />

        <Container paddingVert={0} style={{ zIndex: 1, position: "relative" }}>
          <div
            style={{
              padding: `${
                size.width < Breakpoints.md ? "80" : "135"
              }px 0 85px 0`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Title
              text="WAT WIJ DOEN"
              color={Colors.WHITE}
              size="xl"
              align="center"
            />

            <Text
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget libero pretium, vestibulum ex sit amet, tincidunt metus. Donec eget auctor ipsum. Aliquam in erat id est lacinia pharetra id eget sem. Ut sit amet tellus at eros tempus accumsan. Nulla at nisi ac est maximus aliquam."
              color={Colors.WHITE}
              align="center"
              slim
            />

            <Button
              text="MEER OVER ONS"
              backgroundColor={Colors.WHITE}
              color={Colors.GRAY}
              hoverColor={Colors.RED}
              href="#search"
            />
          </div>
        </Container>
      </div>
    </>
  );
}

import * as React from "react";
import Image from "next/image";

import UseDimensions from "@/services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";
import Colors from "@/styles/Colors";

import Container from "@/components/containers/Container";
import Text from "@/components/text/Text";
import Button from "@/components/modules/Button";

import Header from "@/assets/img/header-home.jpg";

import Logo from "@/assets/svg/Logo";
import MagnifyingGlass from "@/assets/svg/MagnifyingGlass";

export default function BigBanner(props) {
  const size = UseDimensions();

  return (
    <>
      <div
        style={{
          position: "relative",
        }}
      >
        <Image
          style={{ zIndex: -1, objectFit: "cover" }}
          src={Header}
          alt={"Omslagfoto"}
          placeholder="blur"
          sizes="100vw"
          fill
          priority
        />

        <Container
          innerStyle={{
            height: "100vh",
            minHeight: 700,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Logo width={size.width < Breakpoints.xs ? "200px" : "300px"} />

          <Text
            text="Bent u op zoek naar een specialist in ABS pomp reparatie of revisie? ABS Pomp Specialist biedt u hoogwaardige, snelle en betrouwbare diensten. Ons team van ervaren technici zorgt ervoor dat u weer veilig de weg op kunt."
            color={Colors.WHITE}
            align="center"
            style={{ textShadow: "0px 0px 4px #000000" }}
            slim
          />

          <Button
            text={
              <div style={{ display: "flex", gap: 10 }}>
                MODEL ZOEKEN <MagnifyingGlass width={20} fill={Colors.WHITE} />
              </div>
            }
            borderColor={Colors.RED}
            backgroundColor={Colors.RED}
            color={Colors.WHITE}
            href="#search"
          />
        </Container>
      </div>
    </>
  );
}

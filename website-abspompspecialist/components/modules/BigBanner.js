import * as React from "react";
import Image from "next/image";

import UseDimensions from "@/services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";

import Container from "@/components/containers/Container";
import Text from "@/components/modules/text/Text";
import Button from "@/components/modules/Button";

import Header from "@/assets/img/header-home.jpg";
import Colors from "@/styles/Colors";
import Logo from "@/assets/svg/Logo";
import MagnifyingGlass from "@/assets/svg/MagnifyingGlass";

// import Text from "@/components/modules/text/Text";

// import Button from "@/components/modules/Button";

export default function BigBanner(props) {
  const size = UseDimensions();

  return (
    <>
      <Container
        innerStyle={{
          height: "100vh",
          minHeight: 700,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
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

        <Logo width={size.width < Breakpoints.xs ? "200px" : "300px"} />

        <div style={{ maxWidth: 750 }}>
          <Text
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ante tristique nunc pretium eleifend. Duis varius orci eget lacus hendrerit, rutrum pretium est laoreet. Sed tempor iaculis dolor."
            color={Colors.WHITE}
            align="center"
            style={{ textShadow: "0px 0px 4px #000000" }}
          />
        </div>

        <Button
          text={
            <div style={{ display: "flex", gap: 10 }}>
              MODEL ZOEKEN <MagnifyingGlass width={20} fill={Colors.WHITE} />
            </div>
          }
          borderColor={Colors.RED}
          hoverBorderColor={Colors.WHITE}
          backgroundColor={Colors.RED}
          color={Colors.WHITE}
        />
      </Container>
    </>
  );
}

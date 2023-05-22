import * as React from "react";
import Image from "next/image";

import UseDimensions from "@/services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";
import Colors from "@/styles/Colors";

import Container from "@/components/containers/Container";

import Text from "@/components/text/Text";
import Title from "@/components/text/Title";

import Button from "@/components/modules/Button";

import Tools from "@/assets/svg/Tools";
import Gears from "@/assets/svg/Gears";

export default function Cards(props) {
  const size = UseDimensions();

  return (
    <>
      <Container
        innerStyle={{
          display: "flex",
          justifyContent: "center",
          flexDirection: size.width < Breakpoints.md ? "column" : "row",
        }}
        padding={size.width < Breakpoints.md ? 0 : null}
        paddingVert={0}
        style={{
          marginBottom:
            size.width < Breakpoints.xs
              ? "calc(4rem + 60px)"
              : size.width < Breakpoints.md
              ? "calc(4rem + 35px)"
              : "calc(4rem + 75px)",
        }}
      >
        <div
          style={{
            position: "relative",
            width: size.width < Breakpoints.md ? "100%" : "50%",
            zIndex: 1,
          }}
        >
          <div
            style={{
              height:
                size.width < Breakpoints.xs
                  ? "calc(100% + 60px)"
                  : size.width < Breakpoints.md
                  ? "calc(100% + 35px)"
                  : "calc(100% + 75px)",
              width: "100%",
              backgroundColor: Colors.RED,
              WebkitClipPath:
                size.width < Breakpoints.md
                  ? "polygon(0 0, 100% 0, 100% calc(100% - 30px), 50% 100%, 0 calc(100% - 30px))"
                  : "polygon(0 0, calc(100% + 1px) 0, calc(100% + 1px) 100%, 0 calc(100% - 75px))",
              clipPath:
                size.width < Breakpoints.md
                  ? "polygon(0 0, 100% 0, 100% calc(100% - 30px), 50% 100%, 0 calc(100% - 30px))"
                  : "polygon(0 0, calc(100% + 1px) 0, calc(100% + 1px) 100%, 0 calc(100% - 75px))",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              padding:
                size.width < Breakpoints.lg
                  ? "50px 25px"
                  : size.width < Breakpoints.xl
                  ? "50px"
                  : "50px 100px",
              gap: 30,
            }}
          >
            <Tools fill={`${Colors.WHITE}50`} height={100} />
            <Title
              text="ABS POMP REPARATIE"
              color={Colors.WHITE}
              align="center"
              size="md"
            />
            <Text
              color={Colors.WHITE}
              align="center"
              style={{ margin: 0 }}
              text="Heeft uw ABS systeem problemen? Onze specialisten bieden snelle en efficiënte reparaties. Wij identificeren het probleem, repareren uw ABS pomp en zorgen ervoor dat u weer veilig de weg op kunt. Maak een afspraak voor uw ABS pomp reparatie. "
            />
          </div>
          <Button
            style={{
              position: "absolute",
              bottom: -62,
              left: "50%",
              transform: "translateX(-50%)",
              boxShadow: "0px 3px 6px rgba(0,0,0,.16)",
              WebkitBoxShadow: "0px 3px 6px rgba(0,0,0,.16)",
              width: 255,
            }}
            color={Colors.RED}
            hoverColor={Colors.GRAY}
            backgroundColor={Colors.WHITE}
            text="NU BELLEN"
            href="tel:+31262340042"
          />
        </div>
        <div
          style={{
            position: "relative",
            width: size.width < Breakpoints.md ? "100%" : "50%",
          }}
        >
          <div
            style={{
              height:
                size.width < Breakpoints.xs
                  ? "calc(100% + 60px)"
                  : size.width < Breakpoints.md
                  ? "calc(100% + 35px)"
                  : "calc(100% + 75px)",
              width: "100%",
              backgroundColor: Colors.GRAY,
              WebkitClipPath:
                size.width < Breakpoints.md
                  ? "polygon(0 0, 100% 0, 100% calc(100% - 30px), 50% 100%, 0 calc(100% - 30px))"
                  : "polygon(0 0, calc(100% + 1px) 0, calc(100% + 1px) calc(100% - 75px), 0 100%)",
              clipPath:
                size.width < Breakpoints.md
                  ? "polygon(0 0, 100% 0, 100% calc(100% - 30px), 50% 100%, 0 calc(100% - 30px))"
                  : "polygon(0 0, calc(100% + 1px) 0, calc(100% + 1px) calc(100% - 75px), 0 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              padding:
                size.width < Breakpoints.md
                  ? "100px 25px 50px 25px"
                  : size.width < Breakpoints.lg
                  ? "50px 25px"
                  : size.width < Breakpoints.xl
                  ? "50px"
                  : "50px 100px",
              gap: 30,
            }}
          >
            <Gears fill={`${Colors.WHITE}50`} height={100} />
            <Title
              text="ABS POMP REVISIE"
              color={Colors.WHITE}
              align="center"
              size="md"
            />
            <Text
              color={Colors.WHITE}
              align="center"
              style={{ margin: 0 }}
              text="ABS Pomp Specialist biedt uitgebreide diensten voor ABS pomp revisies. Onze gekwalificeerde monteurs hebben jarenlange ervaring met ABS pompen van diverse automerken. We voeren een grondige inspectie uit en reviseren uw ABS pomp vakkundig."
            />
          </div>
          <Button
            style={{
              position: "absolute",
              bottom: -62,
              left: "50%",
              transform: "translateX(-50%)",
              boxShadow: "0px 3px 6px rgba(0,0,0,.16)",
              WebkitBoxShadow: "0px 3px 6px rgba(0,0,0,.16)",
              width: 255,
            }}
            color={Colors.GRAY}
            hoverColor={Colors.RED}
            backgroundColor={Colors.WHITE}
            text="NU BELLEN"
            href="tel:+31262340042"
          />
        </div>
      </Container>
    </>
  );
}

import * as React from "react";
import Image from "next/image";

import UseDimensions from "@/services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";
import Colors from "@/styles/Colors";

import Container from "@/components/containers/Container";
import Text from "@/components/modules/text/Text";
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
        }}
        paddingVert={0}
      >
        <div
          style={{
            position: "relative",
            width: "50%",
          }}
        >
          <div
            style={{
              height: "calc(100% + 75px)",
              width: "100%",
              backgroundColor: Colors.RED,
              clipPath:
                "polygon(0 0, calc(100% + 1px) 0, calc(100% + 1px) 100%, 0 calc(100% - 75px))",
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
            <Text
              color={Colors.WHITE}
              align="center"
              text="Car Assist heeft een uitgebreid assortiment met: ABS ECU, ECU, instrumentenpaneel, gasklephuis, TCU en nog een tal van andere elektronische onderdelen. Deze producten zijn voorzien van een diversiteit aan elektronische componenten die defect kunnen raken. "
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
            text="AFSPRAAK MAKEN"
            href="/contact"
          />
        </div>
        <div
          style={{
            position: "relative",
            width: "50%",
          }}
        >
          <div
            style={{
              height: "calc(100% + 75px)",
              width: "100%",
              backgroundColor: Colors.GRAY,
              clipPath:
                "polygon(0 0, calc(100% + 1px) 0, calc(100% + 1px) calc(100% - 75px), 0 100%)",
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
            <Gears fill={`${Colors.WHITE}50`} height={100} />
            <Text
              color={Colors.WHITE}
              align="center"
              text="Car Assist BV dé specialist in levering en ondersteuning van diverse merken diagnose apparatuur voor auto’s en trucks en speciale voertuigen. Dit maakt het mogelijk om, afhankelijk van de diagnosebehoefte van de werkplaats, advies op maatwerk te geven."
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
            text="AFSPRAAK MAKEN"
            href="/contact"
          />
        </div>
      </Container>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

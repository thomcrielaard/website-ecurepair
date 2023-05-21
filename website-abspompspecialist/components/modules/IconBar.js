import * as React from "react";
import Link from "next/link";

import UseDimensions from "../../services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";

import Colors from "@/styles/Colors";
import Gears from "@/assets/svg/Gears";
import Shield from "@/assets/svg/Shield";
import Rocket from "@/assets/svg/Rocket";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";

export default function IconBar(props) {
  const size = UseDimensions();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: size.width < Breakpoints.sm ? "column" : "row",
        alignItems: size.width < Breakpoints.sm ? "center" : "flex-start",
        justifyContent: "space-between",
        padding: size.width < Breakpoints.xl ? 20 : "20px 50px",
        boxShadow: `0px 0px 10px 0px ${Colors.GRAY}30`,
        WebkitBoxShadow: `0px 0px 10px 0px ${Colors.GRAY}30`,
        gap: size.width < Breakpoints.sm ? 15 : 30,
      }}
    >
      <Icon
        icon={<Shield width={22} color={Colors.RED} />}
        title="Betrouwbaar"
        text="Wij staan voor kwaliteit"
      />
      {size.width < Breakpoints.sm && (
        <hr
          style={{
            border: 0,
            height: 1,
            width: "100%",
            backgroundColor: Colors.LIGHTWHITE,
          }}
        />
      )}
      <Icon
        icon={<Gears width={30} color={Colors.RED} />}
        title="Ervaren"
        text="Jarenlange ervaring in ABS systemen"
      />
      {size.width < Breakpoints.sm && (
        <hr
          style={{
            border: 0,
            height: 1,
            width: "100%",
            backgroundColor: Colors.LIGHTWHITE,
          }}
        />
      )}
      <Icon
        icon={<Rocket width={22} color={Colors.RED} />}
        title="Efficiënt"
        text="Snelle service, snelle resultaten"
      />
    </div>
  );
}

function Icon(props) {
  const size = UseDimensions();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: size.width < Breakpoints.sm ? "column" : "row",
        justifyContent: size.width < Breakpoints.sm ? "center" : "column",
        alignItems: "center",
        gap: 15,
      }}
    >
      <div
        style={{
          height: 50,
          width: 50,
          minWidth: 50,
          borderRadius: 25,
          border: `2px solid ${Colors.RED}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.icon}
      </div>
      <div>
        <Title
          size="xs"
          text={props.title}
          align={size.width < Breakpoints.sm ? "center" : "left"}
        />
        <Text
          text={props.text}
          align={size.width < Breakpoints.sm ? "center" : "left"}
          style={{ margin: 0 }}
          color={Colors.LIGHTGRAY}
          fontSize={16}
        />
      </div>
    </div>
  );
}

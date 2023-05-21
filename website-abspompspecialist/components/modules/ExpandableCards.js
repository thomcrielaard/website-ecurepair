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
import Chevron from "@/assets/svg/Chevron";

export default function ExpandableCards(props) {
  const size = UseDimensions();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 50,
      }}
    >
      {props.cards.map((card, key) => (
        <ExpandableCard
          key={key}
          number={key}
          title={card.title}
          text={card.text}
          img={card.img}
        />
      ))}
    </div>
  );
}

function ExpandableCard(props) {
  const size = UseDimensions();
  const [open, setOpen] = React.useState(false);
  const textRef = React.useRef();

  return (
    <div onClick={() => setOpen(!open)}>
      <div
        style={{ position: "relative", width: "100%", padding: "50px 35px" }}
        className="hover"
      >
        <Image
          style={{ objectFit: "cover", zIndex: -2 }}
          sizes={`(min-width: ${Breakpoints.sm}) 45vw, 100vw`}
          placeholder="blur"
          fill
          src={props.img}
          alt={props.title}
        />
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: `${Colors.BLACK}A0`,
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span
            style={{
              color: `${Colors.MEDIUMWHITE}A0`,
              fontFamily: "poppins",
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            00{props.number + 1}
          </span>
          <div
            style={{
              backgroundColor: `${Colors.MEDIUMWHITE}A0`,
              height: 30,
              width: 0.5,
              marginRight: 8,
              marginLeft: 2,
            }}
          />
          <Title
            text={props.title}
            size="xxs"
            style={{
              fontFamily: "poppins",
              fontWeight: 500,
            }}
            color={Colors.WHITE}
          />
          <Chevron
            width={14}
            color={Colors.WHITE}
            style={{
              rotate: open ? "180deg" : "0deg",
              transition: "all .3s ease-in-out",
              minWidth: 14,
            }}
          />
        </div>
      </div>

      <div
        style={{
          maxHeight: open ? textRef.current?.offsetHeight : 0,
          overflow: "hidden",
          transition: "max-height .3s ease-in-out",
          padding: "0 20px",
          boxShadow: `0px 0px 10px 0px ${Colors.GRAY}30`,
          WebkitBoxShadow: `0px 0px 10px 0px ${Colors.GRAY}30`,
        }}
      >
        <div>
          <Text text={props.text} forwardRef={textRef} align="left" />
        </div>
      </div>
    </div>
  );
}

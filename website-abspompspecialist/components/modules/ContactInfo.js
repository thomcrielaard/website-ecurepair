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
import Location from "@/assets/svg/Location";
import Mail from "@/assets/svg/Mail";
import Phone from "@/assets/svg/Phone";

export default function ContactInfo(props) {
  const size = UseDimensions();

  return (
    <div
      style={{
        width: size.width < Breakpoints.sm ? "100%" : "50%",
      }}
    >
      <Title
        text="GEGEVENS"
        underline
        size="lg"
        align={size.width < Breakpoints.sm ? "center" : "left"}
      />
      <div
        style={{
          display: "flex",
          paddingTop: 20,
          gap: 60,
          flexDirection: size.width < Breakpoints.lg ? "column" : "row",
          alignItems: size.width < Breakpoints.sm ? "center" : "flex-start",
        }}
      >
        <div style={{ maxWidth: 200 }}>
          <Title size="xs" text="OPENINGSTIJDEN" style={{ marginBottom: 10 }} />
          <InfoRow left="Ma" right="9:00 - 18:00" />
          <InfoRow left="Di" right="9:00 - 18:00" />
          <InfoRow left="Wo" right="9:00 - 18:00" />
          <InfoRow left="Do" right="9:00 - 18:00" />
          <InfoRow left="Vrij" right="9:00 - 18:00" />
          <InfoRow left="Zat" right="Gesloten" />
          <InfoRow left="Zon" right="Gesloten" />
        </div>
        <div>
          <Title
            size="xs"
            text="ABS POMP SPECIALIST"
            style={{ marginBottom: 10 }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <Location width={14} color={Colors.GRAY} />
              <div>
                <ContactLink
                  text="Handelstraat 20-A"
                  target="_blank"
                  href="https://www.google.com/maps/place/Car+Assist+B.v./@51.7704101,4.9493124,9z/data=!4m10!1m2!2m1!1scar+assist!3m6!1s0x47c7a71efb895555:0xc42500fe1eda4cfe!8m2!3d51.9121874!4d5.9198848!15sCgpjYXIgYXNzaXN04AEA!16s%2Fg%2F11j1hyjwnv"
                />
                <br />
                <ContactLink
                  text="6851EH Huissen"
                  target="_blank"
                  href="https://www.google.com/maps/place/Car+Assist+B.v./@51.7704101,4.9493124,9z/data=!4m10!1m2!2m1!1scar+assist!3m6!1s0x47c7a71efb895555:0xc42500fe1eda4cfe!8m2!3d51.9121874!4d5.9198848!15sCgpjYXIgYXNzaXN04AEA!16s%2Fg%2F11j1hyjwnv"
                />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <Mail width={34} color={Colors.GRAY} />
              <ContactLink
                text="info@car-assist.nl"
                href="mailto:info@car-assist.nl"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <Phone width={14} color={Colors.GRAY} />
              <ContactLink text="+31(0)26 2340042" href="tel:+31262340042" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow(props) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Span text={props.left + ":"} />
      <Span text={props.right} />
    </div>
  );
}

function Span(props) {
  return (
    <span
      style={{
        fontSize: 18,
        color: Colors.LIGHTGRAY,
        fontFamily: "lato",
        fontWeight: 600,
        whiteSpace: "pre-wrap",
        lineHeight: 1.5,
      }}
    >
      {props.text}
    </span>
  );
}

function ContactLink(props) {
  return (
    <Link
      target={props.target}
      style={{
        fontSize: 18,
        color: Colors.LIGHTGRAY,
        fontFamily: "lato",
        fontWeight: 600,
        whiteSpace: "pre-wrap",
        lineHeight: 1.5,
        textDecoration: "none",
      }}
      href={props.href}
    >
      {props.text}
    </Link>
  );
}

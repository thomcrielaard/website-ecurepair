import * as React from "react";
import { API_URL } from "@/pages/_app";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import UseDimensions from "@/services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";
import Colors from "@/styles/Colors";
import { BlurDataUrl } from "@/services/BlurDataUrl";

import Button from "@/components/modules/Button";

import Title from "../text/Title";
import TextLink from "../text/TextLink";
import Text from "../text/Text";
import Image from "next/image";

export default function ErrorDescription(props) {
  const size = UseDimensions();

  return (
    <div
      style={{
        display: "flex",
        justifyContent:
          size.width < Breakpoints.xl ? "space-between" : "space-evenly",
        gap: size.width < Breakpoints.md ? 50 : 30,
        flexDirection: size.width < Breakpoints.md ? "column" : "row",
        alignItems: size.width < Breakpoints.md ? "center" : "flex-start",
      }}
    >
      <div
        style={{
          width:
            size.width < Breakpoints.xs
              ? "100%"
              : size.width < Breakpoints.md
              ? "80%"
              : size.width < Breakpoints.xl
              ? "50%"
              : "40%",
          display: "flex",
          flexDirection: "column",
          gap: 50,
        }}
      >
        <div
          style={{ position: "relative", width: "100%", aspectRatio: "3/2" }}
        >
          <Image
            src={API_URL + props.error.afbeelding.data.attributes.url}
            alt={props.error.titel}
            style={{ objectFit: "cover" }}
            fill
            sizes={`(min-width: ${Breakpoints.md}) 33vw, (min-width: ${Breakpoints.xs}) 85vw, 95vw`}
            placeholder="blur"
            blurDataURL={BlurDataUrl}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: size.width < Breakpoints.xl ? "column" : "row",
            gap: 50,
            flexWrap: "nowrap",
          }}
        >
          {props.error.foutcodes.data.length > 0 && (
            <div>
              <Title
                text="MOGELIJKE FOUTCODES"
                size="xs"
                style={{ marginBottom: 10 }}
              />
              {props.error.foutcodes.data.map((foutcode, key) => (
                <span
                  style={{
                    lineHeight: "2em",
                    fontSize: "1.2em",
                    display: "block",
                  }}
                  key={key}
                >
                  {foutcode.attributes.foutcode}
                </span>
              ))}
            </div>
          )}
          {props.error.abs_modules.data.length > 0 && (
            <div>
              <Title text="ONDERDELEN" size="xs" style={{ marginBottom: 10 }} />

              {props.error.abs_modules.data.map((module, key) => (
                <TextLink
                  key={key}
                  href={`/reparaties/${module.attributes.onderdeelnummer}`}
                  text={module.attributes.onderdeelnummer}
                  fontSize="1.2em"
                  style={{
                    textDecoration: "underline",
                    lineHeight: "2em",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          width:
            size.width < Breakpoints.xs
              ? "100%"
              : size.width < Breakpoints.md
              ? "80%"
              : size.width < Breakpoints.xl
              ? "50%"
              : "40%",
        }}
      >
        <Title text={props.error.titel} size="lg" />
        <div className="content">
          <ReactMarkdown>{props.error.omschrijving}</ReactMarkdown>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 15,
            flexWrap: "wrap",
            gap: 15,
          }}
        >
          <Button
            text={"AFSPRAAK MAKEN"}
            href="/contact"
            color={Colors.WHITE}
            hoverColor={Colors.RED}
            borderColor={Colors.RED}
            backgroundColor={Colors.RED}
            hoverBackgroundColor={Colors.WHITE}
          />
        </div>
      </div>
    </div>
  );
}

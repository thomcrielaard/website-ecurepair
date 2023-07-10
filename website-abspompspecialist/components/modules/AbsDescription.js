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
import Link from "next/link";
import Chevron from "@/assets/svg/Chevron";

export default function AbsDescription(props) {
  const size = UseDimensions();

  return (
    <div
      style={{
        display: "flex",
        justifyContent:
          size.width < Breakpoints.xl ? "space-between" : "space-evenly",
        gap: size.width < Breakpoints.md ? 50 : 30,
        flexDirection: size.width < Breakpoints.md ? "column" : "row",
        alignItems: "center",
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
        }}
      >
        <div
          style={{ position: "relative", width: "100%", aspectRatio: "1/1" }}
        >
          <Image
            src={API_URL + props.abs.afbeelding.data.attributes.url}
            alt={props.abs.onderdeelnummer}
            style={{ objectFit: "cover", border: `1px solid ${Colors.GRAY}` }}
            fill
            sizes={`(min-width: ${Breakpoints.md}) 33vw, (min-width: ${Breakpoints.xs}) 85vw, 95vw`}
            placeholder="blur"
            blurDataURL={BlurDataUrl}
          />
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
        <Title text={props.abs.onderdeelnummer} size="lg" />
        {props.abs.autotypes.data.length > 0 &&
          props.abs.autotypes.data.map((type, key) => (
            <div key={key} style={{ display: "flex", gap: 10 }}>
              <Link
                style={{
                  fontFamily: "poppins",
                  fontWeight: 500,
                  fontSize: 20,
                  fontStyle: "italic",
                  color: Colors.LIGHTGRAY,
                  textDecoration: "underline",
                }}
                href={`/reparaties?merk=${type.attributes.model.data.attributes.merk.data.id}`}
              >
                {
                  type.attributes.model.data.attributes.merk.data.attributes
                    .naam
                }
              </Link>
              <Chevron
                width={10}
                color={Colors.LIGHTGRAY}
                style={{ rotate: "-90deg" }}
              />
              <Link
                style={{
                  fontFamily: "poppins",
                  fontWeight: 500,
                  fontSize: 20,
                  fontStyle: "italic",
                  color: Colors.LIGHTGRAY,
                  textDecoration: "underline",
                }}
                href={`/reparaties?merk=${type.attributes.model.data.attributes.merk.data.id}&model=${type.attributes.model.data.id}`}
              >
                {type.attributes.model.data.attributes.naam}
              </Link>
              <Chevron
                width={10}
                color={Colors.LIGHTGRAY}
                style={{ rotate: "-90deg" }}
              />
              <Link
                style={{
                  fontFamily: "poppins",
                  fontWeight: 500,
                  fontSize: 20,
                  fontStyle: "italic",
                  color: Colors.LIGHTGRAY,
                  textDecoration: "underline",
                }}
                href={`/reparaties?merk=${type.attributes.model.data.attributes.merk.data.id}&model=${type.attributes.model.data.id}&type=${type.id}`}
              >
                {type.attributes.naam}
              </Link>
            </div>
          ))}
        <span
          style={{
            fontSize: 32,
            color: Colors.RED,
            fontFamily: "lato",
            fontWeight: 500,
          }}
        >
          €{props.abs.prijs}
        </span>
        <div className="content">
          <ReactMarkdown>{props.abs.omschrijving}</ReactMarkdown>
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
          {props.abs.foutcodes.data.length > 0 && (
            <div>
              <Title
                text="MOGELIJKE FOUTCODES"
                size="xs"
                style={{ marginBottom: 10 }}
              />
              {props.abs.foutcodes.data.map((foutcode) => {
                if (foutcode.attributes.foutomschrijving.data != null)
                  return (
                    <TextLink
                      href={`/fouten/${foutcode.attributes.foutomschrijving.data.attributes.titel}`}
                      text={foutcode.attributes.foutcode}
                      fontSize="1.1em"
                      style={{
                        textDecoration: "underline",
                        lineHeight: "1.5em",
                      }}
                    />
                  );
                else
                  return (
                    <span
                      style={{
                        lineHeight: "1.5em",
                        fontSize: "1.1em",
                        display: "block",
                      }}
                    >
                      {foutcode.attributes.foutcode}
                    </span>
                  );
              })}
            </div>
          )}
          <div style={{ alignSelf: "flex-end" }}>
            <Button
              text={"REPARATIEFORMULIER"}
              href="/reparatieformulier"
              color={Colors.WHITE}
              hoverColor={Colors.RED}
              borderColor={Colors.RED}
              backgroundColor={Colors.RED}
              hoverBackgroundColor={Colors.WHITE}
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

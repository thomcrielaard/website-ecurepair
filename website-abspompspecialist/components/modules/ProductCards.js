import * as React from "react";
import Image from "next/image";

import UseDimensions from "@/services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";
import Colors from "@/styles/Colors";

import Button from "@/components/modules/Button";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";

export default function ProductCards(props) {
  const size = UseDimensions();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginBottom: 40,
      }}
    >
      {props.items.map((item, key) => (
        <div
          key={key}
          style={{
            marginTop: 40,
            width:
              size.width < Breakpoints.xs
                ? "100%"
                : size.width < Breakpoints.lg
                ? "48%"
                : "22%",
            alignSelf: "stretch",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
            WebkitBoxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: props.square ? "6/5  " : "5/3",
              position: "relative",
            }}
          >
            <Image
              sizes={`(min-width: ${Breakpoints.lg}) 25vw, (min-width: ${Breakpoints.xs}) 50vw, 100vw`}
              placeholder="blur"
              src={item.img}
              alt={item.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 20,
              gap: 15,
              flexGrow: 1,
            }}
          >
            <div>
              <Title
                text={item.title}
                size="xs"
                style={{ wordWrap: "break-word" }}
              />
              <Text
                text={item.description}
                style={{
                  margin: "12px 0 0 0",
                  fontSize: 15,
                  color: Colors.LIGHTGRAY,
                }}
                align="left"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Button
                text="MEER LEZEN"
                href={item.href}
                color={Colors.GRAY}
                hoverColor={Colors.RED}
                borderColor={Colors.LIGHTGRAY}
                hoverBorderColor={Colors.RED}
                small
              />
              {props.price && (
                <span
                  style={{
                    fontSize: 16,
                    color: Colors.RED,
                    fontFamily: "lato",
                    fontWeight: 600,
                  }}
                >
                  €{item.price}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
      {props.buttonText != undefined && (
        <div
          style={{
            width: "100%",
            marginTop: 40,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            style={{}}
            text={props.buttonText}
            href={props.buttonLink}
            color={Colors.GRAY}
            hoverColor={Colors.RED}
            borderColor={Colors.GRAY}
            hoverBorderColor={Colors.RED}
          />
        </div>
      )}
    </div>
  );
}

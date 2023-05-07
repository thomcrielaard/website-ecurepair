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
          }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: props.square ? "6/5  " : "1920/1080",
              position: "relative",
            }}
          >
            <Image
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
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
            }}
          >
            <Title text={item.title} size="xs" />
            <Text
              text={item.description}
              style={{ margin: 0, fontSize: 15, color: Colors.LIGHTGRAY }}
              align="left"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
              }}
            >
              {props.button && (
                <Button
                  text="MEER LEZEN"
                  href={item.href}
                  color={Colors.LIGHTGRAY}
                  hoverColor={Colors.GRAY}
                  borderColor={Colors.LIGHTGRAY}
                  hoverBorderColor={Colors.GRAY}
                  small
                />
              )}
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
    </div>
  );
}

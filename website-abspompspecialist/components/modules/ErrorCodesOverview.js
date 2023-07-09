import * as React from "react";

import UseDimensions from "@/services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";
import Colors from "@/styles/Colors";

import Button from "@/components/modules/Button";

import ProductCards from "@/components/modules/ProductCards";

import Fout1 from "@/assets/img/fout1.jpg";
import Fout2 from "@/assets/img/fout2.jpg";
import Fout3 from "@/assets/img/fout3.jpg";
import Fout4 from "@/assets/img/fout4.jpg";
import Title from "../text/Title";
import TextLink from "../text/TextLink";

export default function ErrorCodesOverview(props) {
  const size = UseDimensions();

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <div
        style={{
          columnCount: 2,
          columnGap: 150,
          width: "100%",
          maxWidth: 1500,
        }}
      >
        {props.brands.map((brand, key) => (
          <div
            key={key}
            style={{
              width: size.width < Breakpoints.md ? "100%" : "50%",
              breakInside: "avoid-column",
              marginBottom: 20,
            }}
          >
            <Title
              size="xs"
              text={brand.attributes.naam}
              style={{
                marginTop: 0,
                marginBottom: 10,
                overflowWrap: "break-word",
                wordWrap: "break-word",
              }}
            />
            <div>
              {brand.attributes.foutcodes.data.map((code) => {
                if (code.attributes.foutomschrijving.data != null)
                  return (
                    <TextLink
                      href={`/fouten/${code.attributes.foutomschrijving.data.attributes.titel}`}
                      text={code.attributes.foutcode}
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
                      {code.attributes.foutcode}
                    </span>
                  );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

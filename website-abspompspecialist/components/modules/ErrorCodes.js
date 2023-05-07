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

const items = [
  { title: "AUDI", active: false },
  { title: "BMW", active: true },
  { title: "OPEL", active: false },
  { title: "FORD", active: false },
  { title: "VOLVO", active: false },
];

export default function ErrorCodes(props) {
  const size = UseDimensions();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          gap: size.width < Breakpoints.md ? 30 : 50,
          flexWrap: "wrap",
        }}
      >
        {items.map((item, key) => (
          <Button
            key={key}
            color={item.active ? Colors.WHITE : Colors.GRAY}
            hoverColor={Colors.WHITE}
            borderColor={item.active ? Colors.RED : Colors.GRAY}
            hoverBorderColor={Colors.RED}
            backgroundColor={item.active ? Colors.RED : Colors.WHITE}
            hoverBackgroundColor={Colors.RED}
            text={item.title}
          />
        ))}
      </div>
      <ProductCards
        items={[
          {
            title: "Spanningsvoorziening pompunit",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ante tristique nunc pretium eleifend.",
            href: "#",
            img: Fout1,
          },
          {
            title: "Spanningsvoorziening pompunit",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ante tristique nunc pretium eleifend.",
            href: "#",
            img: Fout2,
          },
          {
            title: "Spanningsvoorziening pompunit",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ante tristique nunc pretium eleifend.",
            href: "#",
            img: Fout3,
          },
          {
            title: "Spanningsvoorziening pompunit",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ante tristique nunc pretium eleifend.",
            href: "#",
            img: Fout4,
          },
        ]}
        buttonText="ALLE FOUTCODES"
        buttonLink="#"
      />
    </>
  );
}

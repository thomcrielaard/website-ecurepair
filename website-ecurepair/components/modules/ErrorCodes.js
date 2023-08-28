import * as React from "react";

import styles from "@/styles/modules/ErrorCodes.module.scss";

import Colors from "@/styles/Colors";

import Button from "@/components/modules/Button";
import ProductCards from "@/components/modules/ProductCards";

export default function ErrorCodes(props) {
  const [active, setActive] = React.useState(0);

  return (
    <>
      <div className={styles.ErrorCodesWrapper}>
        {props.codes.map((brand, key) => (
          <Button
            key={key}
            color={key == active ? Colors.WHITE : Colors.GRAY}
            hoverColor={Colors.WHITE}
            borderColor={key == active ? Colors.RED : Colors.GRAY}
            hoverBorderColor={Colors.RED}
            backgroundColor={key == active ? Colors.RED : Colors.WHITE}
            hoverBackgroundColor={Colors.RED}
            text={brand.naam}
            onClick={() => setActive(key)}
            isButton
          />
        ))}
      </div>
      <ProductCards
        items={props.codes[active].foutomschrijvings}
        buttonText="ALLE FOUTCODES"
        buttonLink="/foutcodes"
        short
      />
    </>
  );
}

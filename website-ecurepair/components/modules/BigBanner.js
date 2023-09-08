import * as React from "react";
import Image from "next/image";

import styles from "@/styles/modules/BigBanner.module.scss";

import Colors from "@/styles/Colors";

import Container from "@/components/containers/Container";
import Text from "@/components/text/Text";
import Button from "@/components/modules/Button";

import Header from "@/assets/img/header-home.jpg";

import Logo from "@/assets/svg/Logo";
import MagnifyingGlass from "@/assets/svg/MagnifyingGlass";

export default function BigBanner(props) {
  const selectPartRef = React.useRef(null);

  const [inputValue, setInputValue] = React.useState(null);
  const [brandValue, setBrandValue] = React.useState(null);
  const [partValue, setPartValue] = React.useState(null);
  const [parts, setParts] = React.useState([]);

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const changeMerk = (merk) => {
    const selectedValue = merk;
    const brand = props.MP.find((item) => item.id === parseInt(selectedValue));
    if (brand) {
      setBrandValue(merk);
      setParts(brand.parts);
      setPartValue(null);
      selectPartRef.current.value = "DEFAULT";
    }
  };

  const changePart = (part) => {
    setPartValue(part);
  };

  return (
    <>
      <div className={styles.BigBanner}>
        <Image
          className={styles.BigBannerImage}
          src={Header}
          alt={"Omslagfoto"}
          placeholder="blur"
          sizes="100vw"
          fill
          priority
        />

        <Container innerClassName={styles.BigBannerContainer}>
          <Logo responsive />

          <Text
            text="Welkom bij ECU Repair, dé specialist in geavanceerde autoreparaties. Of het nu gaat om ECU's, tellerklokken, mechatronics of Mercedes contactslotreparaties, ons deskundige team staat klaar om u te helpen met oplossingen en service op maat. Ontdek wat wij voor u kunnen betekenen."
            color={Colors.WHITE}
            align="center"
            style={{ textShadow: "0px 0px 4px #000000" }}
            slim
          />
        </Container>

        <div className={styles.BigBannerSearchContainer}>
          <input
            type="text"
            placeholder="Onderdeelnummer"
            onChange={(e) => handleInputChange(e.target.value)}
          />

          <select
            defaultValue={"DEFAULT"}
            onChange={(e) => changeMerk(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              Selecteer merk
            </option>
            {props.MP.map((brand, key) => (
              <option key={key} value={brand.id}>
                {brand.naam}
              </option>
            ))}
          </select>

          <select
            defaultValue={"DEFAULT"}
            disabled={parts.length === 0}
            ref={selectPartRef}
            onChange={(e) => changePart(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              Selecteer onderdeel
            </option>
            {parts.map((part, key) => (
              <option key={key} value={part.id}>
                {part.naam}
              </option>
            ))}
          </select>

          <Button
            text={
              <div
                style={{ display: "flex", alignSelf: "flex-start", gap: 10 }}
              >
                ZOEKEN <MagnifyingGlass width={20} fill={Colors.WHITE} />
              </div>
            }
            borderColor={Colors.RED}
            backgroundColor={Colors.RED}
            color={Colors.WHITE}
            style={{ alignSelf: "center" }}
            href={`/onderdelen?${
              inputValue && inputValue != "" ? `onderdeel=${inputValue}&` : ""
            }merk=${brandValue ?? "DEFAULT"}&part=${partValue ?? "DEFAULT"}`}
          />
        </div>
      </div>
    </>
  );
}

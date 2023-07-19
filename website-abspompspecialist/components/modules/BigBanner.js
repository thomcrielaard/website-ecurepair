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
  const [types, setTypes] = React.useState([]);

  const selectTypeRef = React.useRef(null);

  const [inputValue, setInputValue] = React.useState(null);
  const [brandValue, setBrandValue] = React.useState(null);
  const [typeValue, setTypeValue] = React.useState(null);

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const changeMerk = (merk) => {
    const selectedValue = merk;
    const brand = props.MT.find((item) => item.id === parseInt(selectedValue));
    if (brand) {
      setBrandValue(merk);
      setTypes(brand.types);
      setTypeValue(null);
      selectTypeRef.current.value = "DEFAULT";
    }
  };

  const changeType = (type) => {
    setTypeValue(type);
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
            text="Bent u op zoek naar een specialist in ABS pomp reparatie of revisie? ABS Pomp Specialist biedt u hoogwaardige, snelle en betrouwbare diensten. Ons team van ervaren technici zorgt ervoor dat u weer veilig de weg op kunt."
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
            {props.MT.map((brand, key) => (
              <option key={key} value={brand.id}>
                {brand.naam}
              </option>
            ))}
          </select>

          <select
            defaultValue={"DEFAULT"}
            disabled={types.length === 0}
            ref={selectTypeRef}
          >
            <option
              value="DEFAULT"
              disabled
              onChange={(e) => changeType(e.target.value)}
            >
              Selecteer onderdeel
            </option>
            {types.map((type, key) => (
              <option key={key} value={type.id}>
                {type.naam}
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
            href={`/reparaties?onderdeel=${inputValue ?? "DEFAULT"}&merk=${
              brandValue ?? "DEFAULT"
            }&type=${typeValue ?? "DEFAULT"}`}
          />
        </div>
      </div>
    </>
  );
}

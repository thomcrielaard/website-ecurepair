import * as React from "react";

import styles from "@/styles/modules/Cards.module.scss";

import Colors from "@/styles/Colors";

import Container from "@/components/containers/Container";

import Text from "@/components/text/Text";
import Title from "@/components/text/Title";

import Button from "@/components/modules/Button";

import Tools from "@/assets/svg/Tools";
import Gears from "@/assets/svg/Gears";
import Chip from "@/assets/svg/Chip";
import Tachometer from "@/assets/svg/Tachometer";

export default function Cards(props) {
  return (
    <>
      <Container
        className={styles.CardsContainer}
        innerClassName={styles.CardsInnerContainer}
        paddingVert={0}
      >
        <div className={styles.CardWrapper}>
          <div className={`${styles.Card} ${styles.CardLeft}`}>
            <Chip fill={`${Colors.WHITE}50`} height={75} />
            <Title
              text="ECU DIAGNOSTIEK"
              color={Colors.WHITE}
              align="center"
              size="md"
            />
            <Text
              color={Colors.WHITE}
              align="center"
              text="De Electronic Control Unit (ECU) is het brein van uw auto. Onze expertise in ECU-diagnostiek en reparatie garandeert dat uw voertuig efficiënt blijft presteren. Plan een inspectie voor optimale voertuigprestaties."
            />
          </div>
          <Button
            className={styles.CardButton}
            color={Colors.RED}
            hoverColor={Colors.GRAY}
            backgroundColor={Colors.WHITE}
            text="NU BELLEN"
            href="tel:+31262340042"
          />
        </div>
        <div className={styles.CardWrapper}>
          <div className={`${styles.Card} ${styles.CardRight}`}>
            <Tachometer fill={`${Colors.WHITE}50`} height={75} />
            <Title
              text="TELLERKLOK REVISIE"
              color={Colors.WHITE}
              align="center"
              size="md"
            />
            <Text
              color={Colors.WHITE}
              align="center"
              text="Een goed functionerende tellerklok is essentieel voor veilig rijden. Ons team heeft diepgaande kennis in het herstellen van tellerklokken, waarborgend dat u altijd nauwkeurige informatie krijgt. Maak nu een afspraak."
            />
          </div>
          <Button
            className={styles.CardButton}
            color={Colors.GRAY}
            hoverColor={Colors.RED}
            backgroundColor={Colors.WHITE}
            text="NU BELLEN"
            href="tel:+31262340042"
          />
        </div>
      </Container>
    </>
  );
}

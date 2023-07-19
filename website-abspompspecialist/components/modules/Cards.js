import * as React from "react";

import styles from "@/styles/modules/Cards.module.scss";

import Colors from "@/styles/Colors";

import Container from "@/components/containers/Container";

import Text from "@/components/text/Text";
import Title from "@/components/text/Title";

import Button from "@/components/modules/Button";

import Tools from "@/assets/svg/Tools";
import Gears from "@/assets/svg/Gears";

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
            <Tools fill={`${Colors.WHITE}50`} height={100} />
            <Title
              text="ABS POMP REPARATIE"
              color={Colors.WHITE}
              align="center"
              size="md"
            />
            <Text
              color={Colors.WHITE}
              align="center"
              text="Heeft uw ABS systeem problemen? Onze specialisten bieden snelle en efficiënte reparaties. Wij identificeren het probleem, repareren uw ABS pomp en zorgen ervoor dat u weer veilig de weg op kunt. Maak een afspraak voor uw ABS pomp reparatie. "
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
            <Gears fill={`${Colors.WHITE}50`} height={100} />
            <Title
              text="ABS POMP REVISIE"
              color={Colors.WHITE}
              align="center"
              size="md"
            />
            <Text
              color={Colors.WHITE}
              align="center"
              text="ABS Pomp Specialist biedt uitgebreide diensten voor ABS pomp revisies. Onze gekwalificeerde monteurs hebben jarenlange ervaring met ABS pompen van diverse automerken. We voeren een grondige inspectie uit en reviseren uw ABS pomp vakkundig."
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

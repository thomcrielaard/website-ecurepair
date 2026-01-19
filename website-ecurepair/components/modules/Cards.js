import * as React from "react";

import styles from "@/styles/modules/Cards.module.scss";

import Colors from "@/styles/Colors";

import Container from "@/components/containers/Container";

import Text from "@/components/text/Text";
import Title from "@/components/text/Title";

import Button from "@/components/modules/Button";

import { FaMicrochip } from "react-icons/fa6";
import { GiGearStickPattern } from "react-icons/gi";

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
            <FaMicrochip color={`${Colors.WHITE}50`} size={75} />
            <Title
              text="ECU Reparatie"
              color={Colors.WHITE}
              align="center"
              size="md"
            />
            <Text color={Colors.WHITE} align="center">
              Een defecte ECU betekent niet automatisch einde verhaal. Vaak gaat
              het om één zwakke schakel: een driver, voeding of
              soldeerverbinding die z’n werk niet meer doet. Wij repareren
              gericht, op componentniveau, en testen daarna uitgebreid. Dat
              scheelt kosten, voorkomt onnodige inleerprocedures en — eerlijk is
              eerlijk — de klant waardeert het meer dan gewoon blind vervangen.
            </Text>
          </div>
          <Button
            className={styles.CardButton}
            color={Colors.RED}
            hoverColor={Colors.GRAY}
            backgroundColor={Colors.WHITE}
            text="ECU Reparatie"
            href="/ecu-reparatie"
          />
        </div>
        <div className={styles.CardWrapper}>
          <div className={`${styles.Card} ${styles.CardRight}`}>
            <GiGearStickPattern color={`${Colors.WHITE}50`} size={75} />
            <Title
              text="DSG Revisie"
              color={Colors.WHITE}
              align="center"
              size="md"
            />
            <Text color={Colors.WHITE} align="center">
              Problemen met de Direct Shift Gearbox, ofwel de DSG, beginnen vaak
              subtiel: schokken, vertraagde reacties, foutcodes die steeds
              terugkomen. Bij een DSG revisie kijken we verder dan alleen de
              voordehandliggende problemen. We nemen de DSG grondig onder
              handen, vervangen bekende slijtdelen en testen hem na reparatie.
              Een revisie verhelpt niet alleen actuele problemen, maar voorkomt
              ook toekomstige storingen.
            </Text>
          </div>
          <Button
            className={styles.CardButton}
            color={Colors.GRAY}
            hoverColor={Colors.RED}
            backgroundColor={Colors.WHITE}
            text="DSG Revisie"
            href="/dsg-revisie"
          />
        </div>
      </Container>
    </>
  );
}

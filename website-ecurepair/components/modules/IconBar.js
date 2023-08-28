import * as React from "react";

import styles from "@/styles/modules/IconBar.module.scss";

import Colors from "@/styles/Colors";
import Gears from "@/assets/svg/Gears";
import Shield from "@/assets/svg/Shield";
import Rocket from "@/assets/svg/Rocket";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";

export default function IconBar() {
  return (
    <div className={styles.IconBar}>
      <Icon
        icon={<Shield width={22} color={Colors.RED} />}
        title="Betrouwbaar"
        text="Wij staan voor kwaliteit"
      />
      <hr className={styles.IconBarSeparator} />
      <Icon
        icon={<Gears width={30} color={Colors.RED} />}
        title="Ervaren"
        text="Jarenlange ervaring in ABS systemen"
      />
      <hr className={styles.IconBarSeparator} />
      <Icon
        icon={<Rocket width={22} color={Colors.RED} />}
        title="Efficiënt"
        text="Snelle service, snelle resultaten"
      />
    </div>
  );
}

function Icon(props) {
  return (
    <div className={styles.IconContainer}>
      <div className={styles.Icon}>{props.icon}</div>
      <div>
        <Title size="xs" text={props.title} className={styles.IconTitle} />
        <Text
          text={props.text}
          className={styles.IconText}
          color={Colors.LIGHTGRAY}
          fontSize={16}
        />
      </div>
    </div>
  );
}

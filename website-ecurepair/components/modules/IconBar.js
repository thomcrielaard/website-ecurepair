import * as React from "react";

import styles from "@/styles/modules/IconBar.module.scss";

import Colors from "@/styles/Colors";
import Gears from "@/assets/svg/Gears";
import Shield from "@/assets/svg/Shield";
import Rocket from "@/assets/svg/Rocket";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";
import Star from "@/assets/svg/Star";
import MagnifyingGlass from "@/assets/svg/MagnifyingGlass";
import Lightbulb from "@/assets/svg/Lightbulb";

export default function IconBar() {
  return (
    <div className={styles.IconBar}>
      <Icon
        icon={<Lightbulb width={16} color={Colors.RED} />}
        title="Innovatief"
        text="Altijd voorop in technologie"
      />
      <hr className={styles.IconBarSeparator} />
      <Icon
        icon={<MagnifyingGlass width={20} color={Colors.RED} />}
        title="Precisie"
        text="Wij kijken naar elk detail"
      />
      <hr className={styles.IconBarSeparator} />
      <Icon
        icon={<Star width={22} color={Colors.RED} />}
        title="Kwaliteit"
        text="Service van topklasse"
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

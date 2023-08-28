import * as React from "react";
import Image from "next/image";

import styles from "@/styles/modules/ExpandableCards.module.scss";

import Breakpoints from "@/styles/Breakpoints";
import Colors from "@/styles/Colors";

import Text from "@/components/text/Text";
import Title from "@/components/text/Title";

import Chevron from "@/assets/svg/Chevron";

export default function ExpandableCards(props) {
  return (
    <div className={styles.ExpandableCardsContainer}>
      {props.cards.map((card, key) => (
        <ExpandableCard
          key={key}
          number={key}
          title={card.title}
          text={card.text}
          img={card.img}
        />
      ))}
    </div>
  );
}

function ExpandableCard(props) {
  const [open, setOpen] = React.useState(false);
  const textRef = React.useRef();

  return (
    <div onClick={() => setOpen(!open)} className="hover">
      <div className={styles.ExpandableCard}>
        <Image
          style={{ objectFit: "cover", zIndex: -2 }}
          sizes={`(min-width: ${Breakpoints.sm}) 45vw, 100vw`}
          placeholder="blur"
          fill
          src={props.img}
          alt={props.title}
        />
        <div className={styles.ExpandableCardOverlay} />
        <div className={styles.ExpandableCardWrapper}>
          <span
            className={`${styles.ExpandableCardTitle} ${styles.ExpandableCardSubtitle}`}
          >
            00{props.number + 1}
          </span>
          <div className={styles.ExpandableCardBar} />
          <Title
            text={props.title}
            size="xxs"
            color={Colors.WHITE}
            className={styles.ExpandableCardTitle}
          />
          <Chevron
            width={14}
            color={Colors.WHITE}
            style={{
              rotate: open ? "180deg" : "0deg",
              transition: "all .3s ease-in-out",
              minWidth: 14,
            }}
          />
        </div>
      </div>

      <div
        className={styles.ExpandableCardContentWrapper}
        style={{
          maxHeight: open ? textRef.current?.offsetHeight : 0,
        }}
      >
        <div>
          <Text text={props.text} forwardRef={textRef} align="left" />
        </div>
      </div>
    </div>
  );
}

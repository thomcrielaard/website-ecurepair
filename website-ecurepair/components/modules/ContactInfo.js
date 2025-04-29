import * as React from "react";
import Link from "next/link";

import styles from "@/styles/modules/ContactInfo.module.scss";

import Colors from "@/styles/Colors";

import Title from "@/components/text/Title";
import Location from "@/assets/svg/Location";
import Mail from "@/assets/svg/Mail";
import Phone from "@/assets/svg/Phone";

export default function ContactInfo(props) {
  return (
    <div className={styles.ContactInfoContainer}>
      <Title
        text="GEGEVENS"
        underline
        size="lg"
        align={"center"}
        className={styles.ContactInfoTitleResponsive}
        containerClassName={styles.ContactInfoTitleBar}
      />
      <div className={styles.ContactInfoWrapper}>
        <div style={{ maxWidth: 200 }}>
          <Title size="xs" text="OPENINGSTIJDEN" style={{ marginBottom: 10 }} />
          <InfoRow left="Ma" right="10:00 - 16:00" />
          <InfoRow left="Di" right="10:00 - 16:00" />
          <InfoRow left="Wo" right="10:00 - 16:00" />
          <InfoRow left="Do" right="10:00 - 16:00" />
          <InfoRow left="Vrij" right="10:00 - 16:00" />
          <InfoRow left="Zat" right="Gesloten" />
          <InfoRow left="Zon" right="Gesloten" />
        </div>
        <div>
          <Title size="xs" text="ECU REPAIR" style={{ marginBottom: 10 }} />
          <div className={styles.ContactInfoIconsWrapper}>
            <div className={styles.ContactInfoIconsRow}>
              <Location width={14} color={Colors.GRAY} />
              <div>
                <Link
                  className={styles.ContactInfoSpan}
                  target="_blank"
                  href="https://www.google.com/maps/place/Car+Assist+B.v./@51.7704101,4.9493124,9z/data=!4m10!1m2!2m1!1scar+assist!3m6!1s0x47c7a71efb895555:0xc42500fe1eda4cfe!8m2!3d51.9121874!4d5.9198848!15sCgpjYXIgYXNzaXN04AEA!16s%2Fg%2F11j1hyjwnv"
                >
                  Handelstraat 20-A
                </Link>
                <br />
                <Link
                  className={styles.ContactInfoSpan}
                  target="_blank"
                  href="https://www.google.com/maps/place/Car+Assist+B.v./@51.7704101,4.9493124,9z/data=!4m10!1m2!2m1!1scar+assist!3m6!1s0x47c7a71efb895555:0xc42500fe1eda4cfe!8m2!3d51.9121874!4d5.9198848!15sCgpjYXIgYXNzaXN04AEA!16s%2Fg%2F11j1hyjwnv"
                >
                  6851EH Huissen
                </Link>
              </div>
            </div>
            <div className={styles.ContactInfoIconsRow}>
              <Mail width={34} color={Colors.GRAY} />
              <Link
                className={styles.ContactInfoSpan}
                href="mailto:info@ecurepair.nl"
              >
                info@ecurepair.nl
              </Link>
            </div>
            <div className={styles.ContactInfoIconsRow}>
              <Phone width={14} color={Colors.GRAY} />
              <Link className={styles.ContactInfoSpan} href="tel:+31262340042">
                +31(0)26 2340042
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow(props) {
  return (
    <div className={styles.ContactInfoRow}>
      <span className={styles.ContactInfoSpan}>{`${props.left}:`}</span>
      <span className={styles.ContactInfoSpan}>{props.right}</span>
    </div>
  );
}

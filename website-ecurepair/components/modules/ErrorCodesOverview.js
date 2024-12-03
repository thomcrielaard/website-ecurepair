import * as React from "react";

import styles from "@/styles/modules/ErrorCodesOverview.module.scss";

import Title from "../text/Title";
import TextLink from "../text/TextLink";

export default function ErrorCodesOverview(props) {
  return (
    <div className={styles.ErrorCodesOverviewWrapper}>
      <div className={styles.ErrorCodesOverviewContainer}>
        {props.brands.map((brand, key) => (
          <div key={key} className={styles.ErrorCodesOverviewBrandContainer}>
            <Title
              size="xs"
              text={brand.naam}
              className={styles.ErrorCodesOverviewTitle}
            />
            <div>
              {brand.foutcodes.data.map((code, key) => {
                if (code.foutomschrijving.data != null)
                  return (
                    <TextLink
                      href={`/fouten/${code.foutomschrijving.data.titel}`}
                      text={code.foutcode}
                      className={styles.ErrorCodesOverviewCode}
                      key={key}
                    />
                  );
                else
                  return (
                    <span className={styles.ErrorCodesOverviewCode} key={key}>
                      {code.foutcode}
                    </span>
                  );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

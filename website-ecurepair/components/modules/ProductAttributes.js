import * as React from "react";

import styles from "@/styles/modules/ProductAttributes.module.scss";

import Title from "../text/Title";

import Text from "../text/Text";

export default function ProductAttributes({ errors, cars }) {
  return (
    <div className={styles.ProductAttributes}>
      {errors && (
        <div>
          <Title text="Foutcodes" align="left" size="lg" underline />
          <Text
            text="Hieronder vindt u de fouten en foutcodes die bij ons bekend zijn en die wij voor u kunnen verhelpen. Heeft u een vraag of een andere foutcode? Vul dan het reparatieformulier in en wij kijken hoe wij u alsnog van dienst kunnen zijn!"
            align="left"
          />
          {errors.map((error, key) => (
            <li className={styles.ListItem} key={key}>
              {error.code && (
                <>
                  <span className={styles.FaultCode}>{error.code}</span>
                  <span className={styles.Bold}>{" - "}</span>
                </>
              )}
              {error.omschrijving}
            </li>
          ))}
        </div>
      )}
      {cars && (
        <div>
          <Title text="Merken en modellen" align="left" size="lg" underline />
          <Text
            text="Hieronder vindt u de merken en modellen waarin dit onderdeel voorkomt. Mocht u dit onderdeel in een ander merk of model aantreffen, neem dan gerust contact met ons op! Wij zijn u graag van dienst. "
            align="left"
          />
          {cars.map((car, key) => (
            <li className={styles.ListItem} key={key}>
              {car.model}
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

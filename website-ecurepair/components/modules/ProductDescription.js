"use client";
import * as React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import styles from "@/styles/modules/ProductAttributes.module.scss";

import Colors from "@/styles/Colors";

import Title from "../text/Title";
import Text from "../text/Text";

export default function ProductDescription(props) {
  const [tab, setTab] = React.useState(0);

  return (
    <div className="w-full flex flex-col gap-4 mt-20">
      <div className="flex gap-4 xxs:gap-8 flex-col xxs:flex-row">
        <Title
          text="Omschrijving"
          size="sm"
          align="left"
          color={tab == 0 ? Colors.BLACK : Colors.MEDIUMWHITE}
          className="cursor-pointer"
          onClick={() => setTab(0)}
        />
        <Title
          text="Merken en Modellen"
          size="sm"
          align="left"
          color={tab == 1 ? Colors.BLACK : Colors.MEDIUMWHITE}
          className="cursor-pointer"
          onClick={() => setTab(1)}
        />
        <Title
          text="Foutcodes"
          size="sm"
          align="left"
          color={tab == 2 ? Colors.BLACK : Colors.MEDIUMWHITE}
          className="cursor-pointer"
          onClick={() => setTab(2)}
        />
      </div>
      <hr className="w-full border-t border-gray-300" />
      <div className="lg:px-8">
        <div className={`content ${tab == 0 ? "" : "hidden"}`}>
          <ReactMarkdown>{props.product.omschrijving}</ReactMarkdown>
        </div>
        <div className={`content ${tab == 1 ? "" : "hidden"}`}>
          <Text
            text="Hieronder vindt u de merken en modellen waarin dit onderdeel voorkomt. Mocht u dit onderdeel in een ander merk of model aantreffen, neem dan gerust contact met ons op! Wij zijn u graag van dienst. "
            align="left"
          />
          <ul>
            {props.product.autos?.map((car, key) => (
              <li key={key}>{car.model}</li>
            ))}
          </ul>
        </div>
        <div className={`content ${tab == 2 ? "" : "hidden"}`}>
          <Text
            text="Hieronder vindt u de fouten en foutcodes die bij ons bekend zijn en die wij voor u kunnen verhelpen. Heeft u een vraag of een andere foutcode? Vul dan het reparatieformulier in en wij kijken hoe wij u alsnog van dienst kunnen zijn!"
            align="left"
          />
          {props.product.fouten?.map((error, key) => (
            <li key={key}>
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
      </div>
    </div>
  );
}

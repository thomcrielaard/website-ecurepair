import * as React from "react";

import Title from "../text/Title";

import Text from "../text/Text";

export default function ProductAttributes({ errors, cars }) {
  return (
    <div className="mx-auto mt-12.5 flex w-full max-w-250 flex-col gap-12.5 xxs:w-4/5 lg:mt-18.75 lg:w-full lg:gap-18.75">
      {errors && (
        <div>
          <Title text="Foutcodes" align="left" size="lg" underline />
          <Text
            text="Hieronder vindt u de fouten en foutcodes die bij ons bekend zijn en die wij voor u kunnen verhelpen. Heeft u een vraag of een andere foutcode? Vul dan het reparatieformulier in en wij kijken hoe wij u alsnog van dienst kunnen zijn!"
            align="left"
          />
          {errors.map((error, key) => (
            <li className="mb-5 text-left text-lg text-gray font-[family-name:lato] font-semibold whitespace-pre-wrap leading-normal" key={key}>
              {error.code && (
                <>
                  <span className="text-red font-bold">{error.code}</span>
                  <span className="font-bold">{" - "}</span>
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
            <li className="mb-5 text-left text-lg text-gray font-[family-name:lato] font-semibold whitespace-pre-wrap leading-normal" key={key}>
              {car.model}
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

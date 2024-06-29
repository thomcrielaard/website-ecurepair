// {
//     "part_name": "Class C ELV electr. steering column (204) / GLK (X204)",
//     "image_url": "https://cdn1.ecu.de/im/1/6/c/category_thumbnails/class+c+elv+electr+steering+column+204+glk+x204-228453.ts1628713638.jpg",
//     "product_link": "https://ecu.eu/mercedes/ezs-%28ignition-lock%29-elv-immobiliser-5919/mercedes/ezs-%28ignition-lock%29-elv-immobiliser/class-c-elv-electr.-steering-column-%28204%29-glk-%28x204%29-5923",
//     "products": [
//       {
//         "product_url": "https://ecu.eu/mercedes/ezs-%28ignition-lock%29-elv-immobiliser/class-c-elv-electr.-steering-column-%28204%29-glk-%28x204%29/mercedes-a2045450632-2045450632-130457.html",
//         "part_numbers": [
//           {
//             "title": "MERCEDES - Part number",
//             "numbers": [
//               "A 204 545 06 32",
//               "A2045450632"
//             ]
//           },
//           {
//             "title": "MERCEDES - Part number",
//             "numbers": [
//               "204 545 06 32",
//               "2045450632"
//             ]
//           }
//         ],
//         "faults": [
//           {
//             "fault_description": "Electronic steering column lock (ELV) defective.No Terminal 15The electronic lock of the steering column does not unlock.The instrument cluster does not turn on and the engine can not be started.no ignition available"
//           },
//           {
//             "fault_code": "A254 07",
//             "fault_description": "The electric steering lock is malfunctioning. There is a mechanical fault."
//           },
//           {
//             "fault_code": "A254 08",
//             "fault_description": "The electric steering lock is malfunctioning. There is a signal error or the message is faulty."
//           },
//           {
//             "fault_code": "A254 09",
//             "fault_description": "The electric steering lock is malfunctioning. There is a component fault."
//           },
//           {
//             "fault_code": "A254 64",
//             "fault_description": "The electric steering lock does not work properly. A non-plausible signal is present."
//           },
//           {
//             "fault_description": "Other fault on request"
//           }
//         ],
//         "cars": [
//           "MERCEDES C180 KOMPRESSOR (C-Klasse, 204) Year of manufacture 2008",
//           "MERCEDES C180 KOMPRESSOR T-Modell (C-Klasse, 204) Year of manufacture 2009",
//           "MERCEDES C200 KOMPRESSOR (C-Klasse, 204) Year of manufacture 2007 - 2008",
//           "MERCEDES C220 CDI (C-Klasse, 204) Year of manufacture 2007 - 2008",
//           "MERCEDES C280 (C-Klasse, 204) Year of manufacture 2003 - 2007",
//           "MERCEDES C320 CDI 4MATIC T-Modell (C-Klasse, 204) Year of manufacture 2009",
//           "MERCEDES C320 CDI (C-Klasse, 204)",
//           "MERCEDES C350 (C-Klasse, 204) Year of manufacture 2007 - 2015",
//           "MERCEDES C350 CDI T-Modell (C-Klasse, 204) Year of manufacture 2011",
//           "MERCEDES E200 CGI (E-Klasse, 212) Year of manufacture 2010",
//           "MERCEDES SLK250 CDI (SLK-Klasse, 172) Year of manufacture 2012"
//         ]
//       },

const faults = [
  {
    fault_description: "Electronic steering column lock (ELV) defective.",
  },
  {
    fault_code: "A254 07",
    fault_description:
      "The electric steering lock is malfunctioning. There is a mechanical fault.",
  },
  {
    fault_code: "A254 08",
    fault_description:
      "The electric steering lock is malfunctioning. There is a signal error or the message is faulty.",
  },
  {
    fault_code: "A254 09",
    fault_description:
      "The electric steering lock is malfunctioning. There is a component fault.",
  },
  {
    fault_code: "A254 64",
    fault_description:
      "The electric steering lock does not work properly. A non-plausible signal is present.",
  },
  {
    fault_description: "Other fault on request",
  },
];

const cars = [
  "MERCEDES C180 KOMPRESSOR (C-Klasse, 204) Year of manufacture 2008",
  "MERCEDES C180 KOMPRESSOR T-Modell (C-Klasse, 204) Year of manufacture 2009",
  "MERCEDES C200 KOMPRESSOR (C-Klasse, 204) Year of manufacture 2007 - 2008",
  "MERCEDES C220 CDI (C-Klasse, 204) Year of manufacture 2007 - 2008",
  "MERCEDES C280 (C-Klasse, 204) Year of manufacture 2003 - 2007",
  "MERCEDES C320 CDI 4MATIC T-Modell (C-Klasse, 204) Year of manufacture 2009",
  "MERCEDES C320 CDI (C-Klasse, 204)",
  "MERCEDES C350 (C-Klasse, 204) Year of manufacture 2007 - 2015",
  "MERCEDES C350 CDI T-Modell (C-Klasse, 204) Year of manufacture 2011",
  "MERCEDES E200 CGI (E-Klasse, 212) Year of manufacture 2010",
  "MERCEDES SLK250 CDI (SLK-Klasse, 172) Year of manufacture 2012",
];

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

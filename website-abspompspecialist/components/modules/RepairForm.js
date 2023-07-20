import * as React from "react";
import Link from "next/link";
import { Comment } from "react-loader-spinner";

import styles from "@/styles/modules/RepairForm.module.scss";
import UseDimensions from "../../services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";

import Colors from "@/styles/Colors";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";
import Button from "./Button";

export default function RepairForm(props) {
  const size = UseDimensions();
  const [loading, setLoading] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (event) => {
    setShowSuccess(false);
    setLoading(true);

    event.preventDefault();

    const data = {
      brand: event.target.brand.value,
      model: event.target.model.value,
      type: event.target.type.value,
      number: event.target.number.value,
      license: event.target.license.value,
      errorcode: event.target.errorcode.value,
      description: event.target.description.value,
      name: event.target.name.value,
      contactperson: event.target.contactperson.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      btw: event.target.btw.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/repair";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
    setMessage(result.data);
    setLoading(false);
    setShowSuccess(true);
  };

  return (
    <div className={styles.RepairFormWrapper}>
      <div className={styles.RepairFormTitleWrapper}>
        <Title
          color={Colors.WHITE}
          text="REPARATIE FORMULIER"
          size="lg"
          underline={true}
          align="center"
        />
      </div>
      <form onSubmit={handleSubmit} style={{ marginTop: 30 }}>
        <div className={styles.RepairForm}>
          <div className={styles.RepairFormSubtitleWrapper}>
            <Title color={Colors.WHITE} size="md" text="Autogegevens" />
          </div>
          <Input name="brand" placeholder="Automerk" />
          <Input name="model" placeholder="Model" />
          <Input name="type" placeholder="Uitvoering" />
          <Input name="number" placeholder="Onderdeelnummer" />
          <Input name="license" placeholder="Kenteken" />
          <Input name="errorcode" placeholder="Fout / Foutcode *" required />
        </div>
        <textarea
          name="description"
          id="description"
          placeholder="Omschrijving klacht / Overige opmerkingen"
          className={`input ${styles.ContactFormInput} ${styles.ContactFormTextarea}`}
        />
        <div className={styles.RepairForm}>
          <div className={styles.RepairFormSubtitleWrapper}>
            <Title color={Colors.WHITE} size="md" text="Klantgegevens" />
          </div>
          <Input name="name" placeholder="Naam / Bedrijfsnaam *" required />
          <Input name="contactperson" placeholder="Contactpersoon" />
          <Input name="email" placeholder="E-mail *" required type="email" />
          <Input name="phone" placeholder="Telefoonnummer" />
          <Input name="btw" placeholder="BTW nummer" full />
          <div className={styles.RepairFormCheckboxWrapper}>
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              Ik ga akkoord met de{" "}
              <Link href="/algemene-voorwaarden.pdf" target="_blank">
                Algemene Voorwaarden
              </Link>
            </label>
          </div>
        </div>
        <div className={styles.RepairFormButtonWrapper}>
          {!(loading || showSuccess) && (
            <Button
              isButton
              type="submit"
              text="Versturen"
              borderColor={Colors.WHITE}
              hoverBorderColor={Colors.RED}
              color={Colors.GRAY}
              hoverColor={Colors.WHITE}
              backgroundColor={Colors.WHITE}
              hoverBackgroundColor={Colors.RED}
              disabled={loading}
            />
          )}
          {loading && (
            <div className={styles.RepairFormCommentWrapper}>
              <Comment
                height="50"
                width="50"
                backgroundColor={Colors.RED}
                ariaLabel="loading"
              />
            </div>
          )}
          {showSuccess && (
            <div style={{ height: 60 }}>
              <Text color={Colors.WHITE} text={message} align="left" />
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

function Input(props) {
  return (
    <input
      type={props.type ?? "text"}
      name={props.name}
      id={props.name}
      className={`${styles.ContactFormInput} 
      ${props.full && styles.ContactFormInputFullWidth} 
      input`}
      placeholder={props.placeholder}
      required={props.required}
    />
  );
}

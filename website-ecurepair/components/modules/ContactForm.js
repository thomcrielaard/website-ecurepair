import * as React from "react";
import { Comment } from "react-loader-spinner";

import styles from "@/styles/modules/ContactForm.module.scss";

import Colors from "@/styles/Colors";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";
import Button from "./Button";

export default function ContactForm(props) {
  const [loading, setLoading] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (event) => {
    setShowSuccess(false);
    setLoading(true);

    event.preventDefault();

    const data = {
      name: event.target.name.value,
      subject: event.target.subject.value,
      email: event.target.email.value,
      tel: event.target.tel.value,
      text: event.target.text.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/contact";

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
    <div className={styles.ContactFormWrapper}>
      <div className={styles.ContactFormBackground} />

      <div className={styles.ContactFormTitleWrapper}>
        <Title
          color={Colors.WHITE}
          text="FORMULIER"
          size="lg"
          underline={true}
          align="center"
        />
      </div>
      <form onSubmit={handleSubmit} style={{ marginTop: 30 }}>
        <div className={styles.ContactForm}>
          <Input name="name" placeholder="Naam *" required />
          <Input name="subject" placeholder="Onderwerp *" required />
          <Input name="email" placeholder="E-mail *" type="email" required />
          <Input name="tel" placeholder="Telefoonnummer" type="tel" />
        </div>
        <textarea
          name="text"
          id="text"
          className={`input ${styles.ContactFormInput} ${styles.ContactFormTextarea}`}
          placeholder="Waar kunnen we u mee helpen?"
          required
        />
        <div className={styles.ContactFormButtonWrapper}>
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
            <div className={styles.ContactFormCommentWrapper}>
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
      className={`input ${styles.ContactFormInput}`}
      placeholder={props.placeholder}
      required={props.required}
    />
  );
}

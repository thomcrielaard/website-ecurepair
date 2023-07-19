import * as React from "react";
import { Comment } from "react-loader-spinner";

import styles from "@/styles/modules/ContactForm.module.scss";

import UseDimensions from "../../services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";

import Colors from "@/styles/Colors";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";
import Button from "./Button";

export default function ContactForm(props) {
  const size = UseDimensions();
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

      <div
        style={{
          display: "flex",
          alignItems: size.width < Breakpoints.sm ? "center" : "flex-start",
          flexDirection: "column",
        }}
      >
        <Title
          color={Colors.WHITE}
          text="FORMULIER"
          size="lg"
          underline={true}
          align="center"
        />
      </div>
      <form onSubmit={handleSubmit} style={{ marginTop: 30 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Input name="name" placeholder="Naam *" required />
          <Input name="subject" placeholder="Onderwerp *" required />
          <Input name="email" placeholder="E-mail *" type="mail" required />
          <Input
            name="tel"
            placeholder="Telefoonnummer"
            required={false}
            type="tel"
          />
        </div>
        <textarea
          name="text"
          id="text"
          className="input"
          style={{
            padding: "15px 20px",
            fontSize: 16,
            width: "100%",
            maxWidth: "100%",
            marginBottom: size.width < Breakpoints.xs ? 15 : 30,
            borderRadius: 0,
            fontFamily: "lato",
            fontWeight: 600,
            border: 0,
            color: Colors.MEDIUMWHITE,
            backgroundColor: Colors.GRAY,
            borderBottom: `1px solid ${Colors.GRAY}`,
            transition: "border .3s ease-in-out",
            height: 300,
          }}
          placeholder="Waar kunnen we u mee helpen?"
          required
        />
        <div
          style={{
            display: "flex",
            justifyContent:
              size.width < Breakpoints.sm ? "center" : "flex-start",
          }}
        >
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
            <div
              style={{
                height: 60,
                width: 175,
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
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
  const size = UseDimensions();

  return (
    <input
      type={props.type ?? "text"}
      name={props.name}
      id={props.name}
      className="input"
      style={{
        padding: "15px 20px",
        fontSize: 16,
        width: size.width < Breakpoints.xl ? "100%" : "48%",
        marginBottom: size.width < Breakpoints.xs ? 15 : 30,
        borderRadius: 0,
        fontFamily: "lato",
        fontWeight: 600,
        border: 0,
        color: Colors.MEDIUMWHITE,
        backgroundColor: Colors.GRAY,
        borderBottom: `1px solid ${Colors.GRAY}`,
        transition: "all .3s ease-in-out",
      }}
      placeholder={props.placeholder}
      required={props.required}
    />
  );
}

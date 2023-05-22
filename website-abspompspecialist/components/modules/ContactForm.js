import * as React from "react";
import Link from "next/link";
import { Comment } from "react-loader-spinner";

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
    <div
      style={{
        width: size.width < Breakpoints.sm ? "100%" : "50%",
        position: "relative",
        paddingLeft: size.width < Breakpoints.sm ? 0 : "4rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: `${Colors.GRAY}F5`,
          width: `calc(100% + ${
            size.width < Breakpoints.md ? "4rem" : "8rem"
          })`,
          left: size.width < Breakpoints.sm ? "-2rem" : 0,
          top:
            size.width < Breakpoints.sm
              ? "-2rem"
              : `calc(-4rem - ${size.width < Breakpoints.md ? "30" : "65"}px)`,
          height:
            size.width < Breakpoints.sm
              ? "calc(100% + 2rem + 60"
              : `calc(100% + 8rem + ${
                  size.width < Breakpoints.md ? "60" : "130"
                }px)`,
          zIndex: -1,
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: size.width < Breakpoints.sm ? "center" : "flex-start",
          flexDirection: "column",
        }}
      >
        <Title
          color={Colors.WHITE}
          text="Formulier"
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
          <Input name="email" placeholder="E-mail *" required />
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
            height: 250,
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

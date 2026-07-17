"use client";
import * as React from "react";
import { Comment } from "react-loader-spinner";

import Colors from "@/styles/Colors";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";
import Button from "./Button";

export default function ContactForm() {
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
    <div className="relative w-full md:w-1/2 md:pl-16">
      <div className="absolute -left-8 -top-8 -z-10 h-[calc(100%_+_2rem_+_100px)] w-screen min-w-75 bg-gray/96 md:left-0 md:top-[calc(-4rem_-_30px)] md:h-[calc(100%_+_8rem_+_60px)] lg:top-[calc(-4rem_-_65px)] lg:h-[calc(100%_+_8rem_+_130px)] lg:w-[calc(50vw_+_1px)]" />

      <div className="flex flex-col items-center md:items-start">
        <Title
          text="FORMULIER"
          size="lg"
          underline
          align="center"
          className="text-white"
        />
      </div>
      <form onSubmit={handleSubmit} className="mt-7.5">
        <div className="flex flex-row flex-wrap justify-between">
          <Input name="name" placeholder="Naam *" required />
          <Input name="subject" placeholder="Onderwerp *" required />
          <Input name="email" placeholder="E-mail *" type="email" required />
          <Input name="tel" placeholder="Telefoonnummer" type="tel" />
        </div>
        <textarea
          name="text"
          id="text"
          className="input mb-3.75 xxs:mb-7.5 h-75 w-full max-w-full rounded-none border-0 border-b border-gray bg-gray px-5 py-3.75 text-base text-gray-400 font-[family-name:lato] font-semibold transition-[border] duration-300 ease-in-out"
          placeholder="Waar kunnen we u mee helpen?"
          required
        />
        <div className="mb-3.75 xxs:mb-7.5 flex items-center">
          <input type="checkbox" name="business" className="mr-2.5" required />
          <label
            htmlFor="business"
            className="text-base text-gray-200 font-[family-name:lato] font-semibold"
          >
            Ik begrijp dat ECU Repair niet werkzaam is voor particulieren.
          </label>
        </div>
        <div className="flex justify-center md:justify-start">
          {!(loading || showSuccess) && (
            <Button
              isButton
              type="submit"
              text="Versturen"
              className="text-gray bg-white hover:text-white hover:border-red hover:bg-red"
              disabled={loading}
            />
          )}
          {loading && (
            <div className="flex h-15 w-full justify-start lg:w-43.75">
              <Comment
                height="50"
                width="50"
                backgroundColor={Colors.RED}
                ariaLabel="loading"
              />
            </div>
          )}
          {showSuccess && (
            <div className="h-15">
              <Text className="text-white" text={message} align="left" />
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
      className="input mb-3.75 xxs:mb-7.5 w-full max-w-full rounded-none border-0 border-b border-gray bg-gray px-5 py-3.75 text-base text-gray-400 font-[family-name:lato] font-semibold transition-[border] duration-300 ease-in-out xl:w-[48%]"
      placeholder={props.placeholder}
      required={props.required}
    />
  );
}

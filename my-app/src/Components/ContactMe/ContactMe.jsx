import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FirstContainer,
  FormContainer,
  ContactForm,
  Input,
  TextArea,
  Label,
  Submit,
  Title,
  ContactFieldName,
  ContactFieldEmail,
  ContactFieldMessage,
  MailIcon,
} from "./styled";

export default function ContactMe() {
  return (
    <FirstContainer id="contact-me">
      <FormContainer>
        <Title>Contact Me!</Title>
        <FormEmail />
      </FormContainer>
    </FirstContainer>
  );
}

const FormEmail = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // if(e.target.user_name.length < )

    emailjs
      .sendForm(
        "contact_service_2lvhxk8",
        "contact_form_pj40me9",
        e.target,
        "OLaxxVMKjbagpDxqj"
      )
      .then(
        (result) => {
          console.log("success");
          console.log(result.text);
          alert("Email send succesfully");
        },
        (error) => {
          console.log("failure");
          console.log(error.text);
          alert("Email not send, something went wrong");
        }
      );
    e.target.reset();
  };

  return (
    <ContactForm onSubmit={sendEmail}>
      <ContactFieldName>
        {" "}
        <Label>Fullname:</Label>
        <Input
          type="text"
          required
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jon Snow"
        />
      </ContactFieldName>
      <ContactFieldEmail>
        {" "}
        <Label>Email:</Label>
        <Input
          type="email"
          required
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="lordsnow@gmail.com"
        />
      </ContactFieldEmail>
      <ContactFieldMessage>
        <Label>Message: </Label>
        <TextArea
          name="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Winter is coming..."
        ></TextArea>
      </ContactFieldMessage>
      <MailIcon />
      <Submit type="submit" value="Send" />
    </ContactForm>
  );
};

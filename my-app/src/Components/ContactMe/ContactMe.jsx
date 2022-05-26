import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

    if (name) {
      if (name.length < 2) {
        toast.warn("Error in Name Field", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
    } else {
      toast.warn("Name is a required Field", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (email) {
      const validate =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (validate.test(email) === false) {
        toast.warn("Error in Email Field", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
    } else {
      toast.warn("Email is a required Field", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (message) {
      if (message.length < 10) {
        toast.warn("Message has to be at least 10 characters", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
    } else {
      toast.warn("Message is a required Field", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    // console.log("Paso los test");
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
          toast.success("Email send succesfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setName("");
          setMessage("");
          setEmail("");
        },
        (error) => {
          console.log("failure");
          console.log(error.text);
          toast.error("Email not send, something went wrong", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setName("");
          setMessage("");
          setEmail("");
        }
      );
  };

  return (
    <ContactForm onSubmit={sendEmail}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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

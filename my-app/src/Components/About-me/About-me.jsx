import React from "react";
import {
  InfoContainer,
  FirstContainer,
  ImageContainer,
  Image,
  TextContainer,
  Title,
  Apendix,
  Footer,
  Links,
  GitHub,
  LinkedIn,
  GoButton,
  ResumeButton,
} from "./styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import foto from "../../assets/Foto-th.png";
import CV from "../../assets/CurriculumVitae.pdf";

export default function AboutMe() {
  const handleClick = () => {
    toast("Resume downloaded", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <FirstContainer id="intro">
      <InfoContainer>
        <ImageContainer>
          <Image src={foto} />
        </ImageContainer>
        <TextContainer>
          <Apendix>Hello There! I'm</Apendix>
          <Title>Thiago D'Alessandro</Title>
          <Footer>Full Stack Web Developer</Footer>
        </TextContainer>
        <Links>
          <GoButton target={"_blank"} href="https://github.com/Thdalessa">
            <GitHub />
          </GoButton>
          <ResumeButton
            onClick={handleClick}
            download={"ThiagoDalessandroCV"}
            href={CV}
          >
            Resume
          </ResumeButton>
          <GoButton
            target={"_blank"}
            href="https://www.linkedin.com/in/thiagodalessandro/"
          >
            <LinkedIn />
          </GoButton>
        </Links>
      </InfoContainer>
    </FirstContainer>
  );
}

import React from "react";
import {
  FirstContainer,
  Slide,
  ControlLeft,
  ControlRight,
  Title,
  ButtonContainer,
  Button,
  ProjectImage,
  ProjectIntro,
  ButtonTitle,
  ButtonSubContainer,
} from "./styled";
import { BsGithub } from "react-icons/bs";
import { BiRocket } from "react-icons/bi";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Gamepedia",
      text: `Development of a SPA ( Single Page Application ) using React for the Front End and Redux as a state managment. 
      The design of all the components was developed with CSS without any foreign libraries.
      The SPA consume data from an API ('RAWG') through the Back End developed in Node.js using Express.js, adding new functions to the original API.
      Some features of the Project are: Search cache, Ordering functions and filters, controlled form to create a videogame and add it to the DataBase, etc.`,
      code: "https://github.com/Thdalessa/GamePedia",
      deploy: "",
      img: "https://user-images.githubusercontent.com/89609966/156949395-70639f9c-e8b5-47cc-acfb-f05eb3fd264d.png",
    },
    {
      id: 2,
      name: "Room-Rental-App",
      text: `Development of a SPA for HENRY's Bootcamp Final Project. The app core function is to rent properties with tourist purpose and is destined to users who wish to travel and rent houses along their journey and also for users that wish to offer hosting services. The app is also desitned to people who only wants to inform themselves with prices of the tourism market and have interest in simply visit the web without the need of sign up.`,
      code: "https://github.com/JAFleitas/room-rental-app",
      deploy: "https://room-rental-app.vercel.app/",
      img: "https://user-images.githubusercontent.com/89609966/169878349-296fda15-f6bd-4d00-895d-e79a997a6abc.png",
    },
    {
      id: 3,
      name: "Pomodoro Clock",
      text: `Development of a Pomodoro Clock which consists in two timers: the first one is to set up the length of the session of study/work and the second one is to set up the length of the break during the sessions.`,
      code: "https://codepen.io/thdalessa/pen/ZErKVPJ",
      deploy: "https://codepen.io/thdalessa/full/ZErKVPJ",
      img: "https://user-images.githubusercontent.com/89609966/169878545-0117fd28-d2d3-43e2-920b-b606e3d94c09.png",
    },
    {
      id: 4,
      name: "Drum Machine",
      text: `Development of a Drum Machine that consists of 9 buttons, each one has a different sound and key associated. The buttons can be activated through clicks or by the unique key associated. The machine will tell you which button are you playing instantly.`,
      code: "https://codepen.io/thdalessa/pen/QWQdQNr",
      deploy: "https://codepen.io/thdalessa/full/QWQdQNr",
      img: "https://user-images.githubusercontent.com/89609966/169878694-1d06d03d-12b0-43dc-9876-41aebb47bdd5.png",
    },
    {
      id: 5,
      name: "JavaScript Calculator",
      text: `Developmente of an interactive calculator. Through clicks the user can do what any regular calculator can offer. `,
      code: "https://codepen.io/thdalessa/pen/bGLgzBa",
      deploy: "https://codepen.io/thdalessa/full/bGLgzBa",
      img: "https://user-images.githubusercontent.com/89609966/169878621-f8cedaab-e384-41f9-b507-d40d329a66da.png",
    },
    {
      id: 6,
      name: "React Markdown Previewer",
      text: `Second project for FreeCodeCamp's Front End Development Libraries Certification. 
      The idea for this project is to make a Markdown "translator". The user can write MarkDown text on an input and automatically it will be shown on a display according to this language.`,
      code: "https://codepen.io/thdalessa/pen/YzYmayJ",
      deploy: "https://codepen.io/thdalessa/full/YzYmayJ",
      img: "https://user-images.githubusercontent.com/89609966/169878764-50c1406a-7c06-4464-96c9-401f3865b86a.png",
    },
    {
      id: 7,
      name: "Random Quote Machine",
      text: `Small project developed for the FreeCodeCamp Front End Development Libraries Certification.
      The project consists of a display that shows a quote and the author who wrote it, and also of two bottons: one to tweet the quote shown and the other one to jump into the next quote.`,
      code: "https://codepen.io/thdalessa/pen/bGaPpQN",
      deploy: "https://codepen.io/thdalessa/full/bGaPpQN",
      img: "https://user-images.githubusercontent.com/89609966/169878781-b95f4b27-1fb9-4a6f-87cc-91063e57c787.png",
    },
  ];
  const [isDisplayed, setIsDisplayed] = React.useState(1);

  const handleLeft = () => {
    if (isDisplayed === 1) {
      setIsDisplayed(projects.length - 1);
    } else {
      setIsDisplayed(isDisplayed - 1);
    }
  };
  const handleRight = () => {
    if (isDisplayed === projects.length - 1) {
      setIsDisplayed(1);
    } else {
      setIsDisplayed(isDisplayed + 1);
    }
  };
  return (
    <FirstContainer id="projects">
      {projects.map((el) => {
        if (el.id === isDisplayed) {
          return (
            <Slide id={el.id} visible={"yes"}>
              <ControlLeft left onClick={handleLeft}>
                <AiOutlineArrowLeft />
              </ControlLeft>
              <ProjectImage src={el.img} />
              <Title>{el.name}</Title>
              <ButtonContainer>
                <ButtonSubContainer>
                  <ButtonTitle>Code</ButtonTitle>
                  <Button href={el.code}>
                    <BsGithub />
                  </Button>
                </ButtonSubContainer>
                {el.deploy ? (
                  <ButtonSubContainer>
                    <ButtonTitle>Deploy</ButtonTitle>
                    <Button href={el.deploy}>
                      <BiRocket />
                    </Button>
                  </ButtonSubContainer>
                ) : (
                  ""
                )}
              </ButtonContainer>
              <ProjectIntro>{el.text}</ProjectIntro>
              <ControlRight right onClick={handleRight}>
                <AiOutlineArrowRight />
              </ControlRight>
            </Slide>
          );
        } else {
          return (
            <Slide id={el.id} visible={"no"}>
              {el.id}
            </Slide>
          );
        }
      })}
    </FirstContainer>
  );
}

export const Slider = () => {
  return <Slide></Slide>;
};

import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { BiRocket } from "react-icons/bi";

export const FirstContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 60px;
  /* background-color: black; */
  overflow: hidden;
`;

export const ControlLeft = styled.div`
  height: 100%;
  width: 50px;
  background-color: #ffffff05;
  color: #f72585;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  z-index: 10;
  transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
  &:hover {
    color: #f61379;
    background-color: #ffffff18;
  }
`;

export const ControlRight = styled.div`
  height: 100%;
  width: 50px;
  background-color: #ffffff05;
  color: #f72585;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  z-index: 10;
  transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
  &:hover {
    color: #f61379;
    background-color: #ffffff18;
  }
`;

export const Slide = styled.div`
  min-height: 60vh;
  min-width: 60vw;
  border-radius: 35px;
  display: grid;
  grid-template-columns: 30vw 30vw;
  grid-template-rows: 30vh 30vh;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 9;
  position: relative;
  margin: 10px;
  visibility: ${(props) => (props.visible === "yes" ? "visible" : "none")};
  display: ${(props) => (props.visible === "yes" ? "grid" : "none")};
  background-color: #231942;
  background-image: url(${(props) => props.img});
  background-size: 60vw 70vh;
  background-repeat: no-repeat;
  padding: 20px;
`;

export const Title = styled.h2`
  grid-row: 1/2;
  grid-column: 2/3;
  width: 22vw;
  margin-left: 1vw;
  height: fit-content;
  color: #f72585;
  padding: 15px;
  font-size: 35px;
  text-shadow: 2px 2px 2px 0.3px;
  border-radius: 21px;
  background: #231942;
  box-shadow: 7px 7px 14px #18112e, -7px -7px 14px #2e2156;
  z-index: 6;
`;

export const ButtonContainer = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  height: 15vh;
  margin-top: 10vh;
  width: 25vw;
  margin-left: 2.5vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.a`
  width: fit-content;
  height: 50px;
  margin-top: -5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #f72585;
  padding: 15px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 40px;
  border-radius: 21px;
  background: #231942;
  box-shadow: 7px 7px 14px #18112e, -7px -7px 14px #2e2156;
  transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
  &:hover {
    color: #f61379;
    border-radius: 21px;
    background: #231942;
    box-shadow: inset 10px 10px 13px #1b1333, inset -10px -10px 13px #2b1f51;
  }
`;

export const ProjectImage = styled.img`
  grid-column: 1/2;
  grid-row: 1/2;
  width: 25vw;
  margin-left: 2.5vw;
  height: 30vh;
  border-radius: 15px;
`;

export const ProjectIntro = styled.p`
  grid-column: 2/3;
  grid-row: 1/3;
  width: 24vw;
  margin-left: 0vw;
  height: 28vh;
  margin-top: 24vh;
  color: #f72585;
  font-size: 14px;
  border-radius: 50px;
  background: #231942;
  box-shadow: 13px 13px 26px #1a1331, -13px -13px 26px #2c2053;
  padding: 20px;
`;

export const ButtonTitle = styled.h4`
  width: 80px;
  height: fit-content;
  margin-top: -10px;
  padding: 5px;
  color: #f72585;
  font-size: 20px;
  border-radius: 21px;
  background: #231942;
  box-shadow: 7px 7px 14px #18112e, -7px -7px 14px #2e2156;
`;

export const ButtonSubContainer = styled.div`
  width: 50%;
  height: 20vh;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

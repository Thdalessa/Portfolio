import styled from "styled-components";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const FirstContainer = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  top: 60px;
  /* background-color: black;
  border-bottom: 5px white solid; */
  @media screen and (max-width: 750px) {
    height: 100vh;
  }
`;

export const InfoContainer = styled.div`
  height: 450px;
  width: 700px;
  border-radius: 25px;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 1fr 1fr;
  border-radius: 50px;
  border-radius: 50px;
  border-radius: 50px;
  background: #231942;

  @media screen and (max-width: 730px) {
    width: 90%;
  }
  @media screen and (max-width: 550px) {
    width: 95%;
    height: 550px;
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

export const ImageContainer = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin: 20px;
  border: 3px solid white;
  background-color: white;
  @media screen and (max-width: 730px) {
    width: 150px;
    height: 150px;
  }
  @media screen and (max-width: 550px) {
    width: 150px;
    height: 150px;
    justify-self: center;
    /* margin-left: 35%; */
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  @media screen and (max-width: 730px) {
    width: 150px;
    height: 150px;
  }
  /* @media screen and (max-width: 550px) {
    width: 200px;
    height: 200px;
  } */
`;

export const TextContainer = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 85px;
  @media screen and (max-width: 730px) {
    margin-right: 35px;

    /* height: 150px; */
  }
  @media screen and (max-width: 550px) {
    grid-column: 1/2;
    grid-row: 2/3;
    margin-right: 0;
    justify-self: center;
  }
`;

export const Title = styled.h1`
  height: fit-content;
  color: white;
  font-size: 35px;
  margin: 0;
  padding-top: 5px;
  padding-bottom: 15px;
  font-weight: 900;
  @media screen and (max-width: 450px) {
    font-size: 32px;
  }
  @media screen and (max-width: 360px) {
    font-size: 28px;
  }
`;

export const Apendix = styled.h3`
  color: white;
  font-size: 15px;
  margin: 0;
  font-weight: 500;
  @media screen and (max-width: 450px) {
    font-size: 14px;
  }
`;

export const Footer = styled.h3`
  color: white;
  font-size: 25px;
  margin: -5px;
  font-weight: 500;
  @media screen and (max-width: 450px) {
    font-size: 23px;
  }
`;

export const Links = styled.div`
  grid-column: 1/3;
  grid-row: 2/3;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 550px) {
    grid-column: 1/2;
    grid-row: 3/4;
  }
`;

export const ResumeButton = styled.a`
  height: 100px;
  width: 200px;
  text-decoration: none;
  border-radius: 13px;
  background: #231942;
  box-shadow: 6px 6px 12px #1c1435, -6px -6px 12px #2a1e4f;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: #f72585;
  &:hover {
    border-radius: 13px;
    background: linear-gradient(145deg, #20173b, #251b47);
    box-shadow: 6px 6px 12px #1c1435, -6px -6px 12px #2a1e4f;
    color: #ec096f;
  }
  @media screen and (max-width: 480px) {
    height: 80px;
    width: 160px;
  }
  @media screen and (max-width: 400px) {
    height: 60px;
    width: 130px;
    font-size: 30px;
  }
`;

export const GoButton = styled.a`
  height: 100px;
  width: 100px;
  text-decoration: none;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GitHub = styled(BsGithub)`
  padding: 20px;
  border-radius: 13px;
  background: #231942;
  box-shadow: 6px 6px 12px #1c1435, -6px -6px 12px #2a1e4f;
  color: #f72585;
  font-size: 55px;
  &:hover {
    border-radius: 13px;
    background: linear-gradient(145deg, #20173b, #251b47);
    box-shadow: 6px 6px 12px #1c1435, -6px -6px 12px #2a1e4f;
    color: #ec096f;
  }
  @media screen and (max-width: 480px) {
    font-size: 35px;
  }
`;

export const LinkedIn = styled(BsLinkedin)`
  padding: 20px;
  border-radius: 13px;
  background: #231942;
  box-shadow: 6px 6px 12px #1c1435, -6px -6px 12px #2a1e4f;
  color: #f72585;
  font-size: 55px;
  &:hover {
    border-radius: 13px;
    background: linear-gradient(145deg, #20173b, #251b47);
    box-shadow: 6px 6px 12px #1c1435, -6px -6px 12px #2a1e4f;
    color: #ec096f;
  }
  @media screen and (max-width: 480px) {
    font-size: 35px;
  }
`;

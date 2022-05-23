import styled from "styled-components";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const FirstContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  top: 60px;
`;

export const InfoContainer = styled.div`
  height: 450px;
  width: 700px;
  border-radius: 30px;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 1fr 1fr;
  border-radius: 50px;
  border-radius: 50px;
  border-radius: 50px;
  background: #231942;
  box-shadow: 5px 5px 10px #1c1435, -5px -5px 10px #2a1e4f;
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
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
`;

export const TextContainer = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 85px;
`;

export const Title = styled.h1`
  height: fit-content;
  color: white;
  font-size: 35px;
  margin: 0;
  padding-top: 5px;
  padding-bottom: 15px;
  font-weight: 900;
`;

export const Apendix = styled.h3`
  color: white;
  font-size: 15px;
  margin: 0;
  font-weight: 500;
`;

export const Footer = styled.h3`
  color: white;
  font-size: 25px;
  margin: -5px;
  font-weight: 500;
`;

export const Links = styled.div`
  grid-column: 1/3;
  grid-row: 2/3;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
`;

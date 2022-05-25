import styled from "styled-components";
import { FiMail } from "react-icons/fi";

export const FirstContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  top: 60px;
  /* background-color: black;
  border-bottom: 5px white solid; */
  @media screen and (max-width: 750px) {
    height: 120vh;
  }
`;

export const Title = styled.h2`
  width: fit-content;
  height: 8vh;
  margin-top: 5vh;
  margin-bottom: 2vh;
  color: white;
  padding: 15px;
  font-size: 38px;
  text-shadow: 2px 2px 2px 0.3px;
  border-radius: 21px;
  background: #231942;
  box-shadow: 7px 7px 14px #18112e, -7px -7px 14px #2e2156;
  z-index: 6;
`;

export const FormContainer = styled.div`
  width: 60vw;
  height: 70vh;
  border-radius: 25px;
  padding-bottom: 20px;
  background: #231942;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1270px) {
    height: fit-content;
  }
  @media screen and (max-width: 670px) {
    width: 70vw;
  }
  @media screen and (max-width: 470px) {
    width: 80vw;
  }
`;

export const ContactForm = styled.form`
  margin-top: 30px;
  width: 50vw;
  height: 50vh;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 15vh 19vh 11vh;
  /* padding: 20px; */
  /* background-color: #ff000023; */
  @media screen and (max-width: 1500px) {
    width: 55vw;
  }
  @media screen and (max-width: 1270px) {
    height: fit-content;
    grid-template-columns: 65% 35%;
    grid-template-rows: 12vh 12vh 20vh 10vh;
  }
  @media screen and (max-width: 670px) {
    width: 65vw;
  }
  @media screen and (max-width: 470px) {
    width: 70vw;
  }
`;

export const ContactFieldName = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  width: fit-content;
  height: fit-content;
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  /* background-color: #ff000046; */
  @media screen and (max-width: 1270px) {
    margin: 0;
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 670px) {
    grid-column: 1/3;
  }
`;

export const ContactFieldEmail = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  width: fit-content;
  height: fit-content;
  margin-top: 20px;
  margin-left: 40px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1270px) {
    margin: 0;
    grid-column: 1/2;
    grid-row: 2/3;
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 670px) {
    grid-column: 1/3;
  }
  /* background-color: #ff000046; */
`;

export const ContactFieldMessage = styled.div`
  grid-column: 1/3;
  grid-row: 2/3;
  width: fit-content;
  height: fit-content;
  margin-top: -30px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* background-color: #ff000046; */
  @media screen and (max-width: 1270px) {
    grid-column: 1/3;
    grid-row: 3/4;
    margin: 0;
    width: 100%;
    text-align: left;
  }
`;

export const Label = styled.label`
  color: white;
  font-size: 22px;
  margin: 8px;
`;

export const Input = styled.input`
  width: 15vw;
  height: fit-content;
  padding: 5px;
  border: 1px solid transparent;
  border-bottom: 2px solid white;
  border-radius: 5px;
  background: #231942;
  box-shadow: inset 14px 14px 23px #17112c, inset -14px -14px 23px #2f2258;
  color: white;
  font-size: 20px;
  &:focus {
    border-radius: 5px;
    background: #2f2158;
    box-shadow: inset 14px 14px 23px #1f163a, inset -14px -14px 23px #3f2c76;
    border: 1px solid transparent;
    border-bottom: 2px solid #d90866;
    outline: none;
  }
  @media screen and (max-width: 1270px) {
    width: 90%;
  }
  @media screen and (max-width: 670px) {
    width: 95%;
  }
`;

export const TextArea = styled.textarea`
  border-radius: 5px;
  background: #231942;
  box-shadow: inset 14px 14px 23px #17112c, inset -14px -14px 23px #2f2258;
  border: 1px solid transparent;
  border-bottom: 2px solid white;
  padding: 10px;
  color: white;
  font-size: 20px;
  max-width: 46vw;
  min-width: 46vw;
  max-height: 16vh;
  min-height: 10vh;
  &:focus {
    border-radius: 5px;
    background: #2f2158;
    box-shadow: inset 14px 14px 23px #1f163a, inset -14px -14px 23px #3f2c76;
    border: 1px solid transparent;
    border-bottom: 2px solid #d90866;
    outline: none;
  }
  @media screen and (max-width: 1270px) {
    max-width: 87%;
    max-height: 10vh;
    width: 87%;
  }
  @media screen and (max-width: 670px) {
    max-width: 92%;
    width: 92%;
  }
`;

export const Submit = styled.input`
  width: 15vw;
  margin-left: 17vw;
  grid-column: 1/3;
  grid-row: 3/4;
  margin-top: 15px;
  align-self: center;
  font-size: 25px;
  padding: 8px;
  color: white;
  border: 0px solid transparent;
  border-radius: 8px;
  background: linear-gradient(145deg, #ff288e, #de2178);
  &:hover {
    border-radius: 8px;
    background: #f72585;
    box-shadow: inset 7px 7px 10px #b91c64, inset -7px -7px 10px #ff2ea6;
    outline: none;
  }
  @media screen and (max-width: 1270px) {
    grid-column: 1/3;
    grid-row: 4/5;
  }
  @media screen and (max-width: 670px) {
    width: 20vw;
    margin-left: 20vw;
  }
  @media screen and (max-width: 470px) {
    width: 30vw;
    margin-left: 20vw;
  }
`;

export const MailIcon = styled(FiMail)`
  @media screen and (min-width: 1270px) {
    display: none;
  }
  @media screen and (max-width: 670px) {
    display: none;
  }
  width: 50px;
  height: 50px;
  font-size: 20px;
  grid-column: 2/3;
  grid-row: 1/3;
  border-radius: 13px;
  padding: 10px;
  background: #231942;
  box-shadow: 9px 9px 14px #1b1332, -9px -9px 14px #2b1f52;
  color: white;
  justify-self: center;
  align-self: center;
`;

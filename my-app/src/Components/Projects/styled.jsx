import styled from "styled-components";

export const FirstContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 60px;
  /* background-color: black;
  border-bottom: 5px white solid; */
  overflow: hidden;
  @media screen and (max-width: 750px) {
    height: 120vh;
  }
`;

export const Title = styled.h2`
  width: fit-content;
  height: 7vh;
  color: white;
  padding: 15px;
  font-size: 35px;
  text-shadow: 2px 2px 2px 0.3px;
  border-radius: 18px;
  background: linear-gradient(145deg, #20173b, #251b47);
  /* box-shadow: 6px 6px 12px #1e1639, -6px -6px 12px #281c4b; */
`;

export const ControlLeft = styled.div`
  height: 100%;
  width: 50px;
  background-color: #ffffff05;
  color: white;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  z-index: 10;
  transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
  &:hover {
    color: white;
    background-color: #ffffff18;
  }
  @media screen and (max-width: 750px) {
    width: 30px;
  }
`;

export const ControlRight = styled.div`
  height: 100%;
  width: 50px;
  background-color: #ffffff05;
  color: white;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  z-index: 10;
  transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
  &:hover {
    color: white;
    background-color: #ffffff18;
  }
  @media screen and (max-width: 750px) {
    width: 30px;
  }
`;

export const Slide = styled.div`
  min-height: 60vh;
  height: fit-content;
  min-width: 60vw;
  border-radius: 25px;
  display: grid;
  grid-template-columns: 50% 50%;
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

  @media screen and (max-width: 1200px) {
    width: 65vw;
  }
  @media screen and (max-width: 900px) {
    width: 70vw;
  }
  @media screen and (max-width: 750px) {
    width: 70vw;
    height: fit-content;
    grid-template-columns: 100%;
    grid-template-rows: 30% 50% 20%;
    text-align: center;
  }
`;

export const ProjectTitle = styled.h2`
  grid-row: 1/2;
  grid-column: 2/3;
  width: 22vw;
  margin-left: 1vw;
  height: fit-content;
  color: white;
  padding: 15px;
  font-size: 35px;
  text-shadow: 2px 2px 2px 0.3px;
  border-radius: 21px;
  background: #231942;
  box-shadow: 7px 7px 14px #18112e, -7px -7px 14px #2e2156;
  z-index: 6;
  @media screen and (max-width: 1050px) {
    margin-left: 0vw;
    width: 24vw;
    font-size: 28px;
  }
  @media screen and (max-width: 750px) {
    width: 50vw;
    justify-self: center;
    /* margin-left: 7.5vw; */
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: center;
    font-size: 28px;
  }
`;

export const ButtonContainer = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  height: 15vh;
  margin-top: 10vh;
  width: 25vw;
  margin-left: 13%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 750px) {
    width: 70vw;
    grid-column: 1/2;
    grid-row: 3/4;
    margin: 0;
    margin-top: 20px;
  }
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
  @media screen and (max-width: 750px) {
    width: 30px;
    height: 30px;
    font-size: 25px;
    margin: 20px;
  }
`;

export const ProjectImage = styled.img`
  grid-column: 1/2;
  grid-row: 1/2;
  width: 25vw;
  margin-left: 2.5vw;
  height: 30vh;
  border-radius: 15px;
  @media screen and (max-width: 1250px) {
    width: 20vw;
    height: 25vh;
    margin-left: 5.5vw;
  }
  @media screen and (max-width: 1000px) {
    width: 25vw;
    height: 25vh;
  }
  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const ProjectIntro = styled.p`
  grid-column: 2/3;
  grid-row: 1/3;
  width: 24vw;
  margin-left: 0vw;
  height: 28vh;
  margin-top: 24vh;
  color: white;
  font-size: 14px;
  border-radius: 10px;
  background: #231942;
  box-shadow: 13px 13px 26px #1a1331, -13px -13px 26px #2c2053;
  padding: 20px;
  overflow: auto;
  overflow-x: hidden;
  @media screen and (max-width: 750px) {
    width: 50vw;
    justify-self: center;
    /* margin-left: 7vw; */
    margin-top: 1vh;
    margin-bottom: 2vh;
    grid-column: 1/2;
    grid-row: 2/3;
    font-size: 12px;
    height: 15vh;
    position: relative;
  }
`;

export const ButtonTitle = styled.h4`
  width: 80px;
  height: fit-content;
  margin-top: -10px;
  padding: 5px;
  color: white;
  font-size: 20px;
  border-radius: 21px;
  background: #231942;
  box-shadow: 7px 7px 14px #18112e, -7px -7px 14px #2e2156;
  @media screen and (max-width: 750px) {
    margin: 0;
  }
`;

export const ButtonSubContainer = styled.div`
  width: 50%;
  height: 20vh;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  @media screen and (max-width: 750px) {
    position: relative;
    margin: 0;
    margin-top: -10vh;
    height: 20vh;
  }
`;

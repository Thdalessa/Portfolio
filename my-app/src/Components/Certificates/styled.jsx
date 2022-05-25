import styled from "styled-components";

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
    height: 70vh;
  }
`;

export const InfoContainer = styled.div`
  height: fit-content;
  padding: 20px;
  min-height: 50vh;
  width: 60vw;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50px;
  background: #231942;
  /* box-shadow: 5px 5px 10px #1c1435, -5px -5px 10px #2a1e4f; */
  @media screen and (max-width: 450px) {
    width: 70vw;
  }
`;

export const Title = styled.h2`
  grid-row: 1/2;
  grid-column: 1/3;
  width: fit-content;
  height: fit-content;
  color: white;
  padding: 15px;
  font-size: 38px;
  text-shadow: 2px 2px 2px 0.3px;
  border-radius: 21px;
  background: #231942;
  box-shadow: 7px 7px 14px #18112e, -7px -7px 14px #2e2156;
  z-index: 6;
  @media screen and (max-width: 450px) {
    font-size: 35px;
  }
`;

export const CertificatesContainer = styled.div`
  grid-column: 1/3;
  grid-row: 2/3;
  height: 20vh;
  width: 100%;
  margin: 0;
  /* margin-left: 5%; */
  height: 100%;
  /* padding-top: 50px;
    padding-bottom: 50px; */
  /* background-color: red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const CertificateCard = styled.a`
  text-decoration: none;
  width: fit-content;
  height: 5vh;
  color: #f72585;
  font-size: 18px;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  background: linear-gradient(145deg, #251b47, #20173b);
  box-shadow: 8px 8px 22px #1a1332, -8px -8px 22px #2c1f53;
  margin: 20px;
  transition: color 0.3s ease-in, background 0.1s ease-in,
    box-shadow 0.5s ease-in;
  &:hover {
    color: #231942;
    border-radius: 13px;
    background: #f72585;
    box-shadow: inset 7px 7px 12px #831446, inset -7px -7px 12px #ff36c4;
  }
  @media screen and (max-width: 450px) {
    padding: 15px;
    font-size: 16px;
  }
`;

export const CertificateTitle = styled.h3`
  color: #f72585;
  font-size: 15px;
  border-radius: 15px;
  width: fit-content;
  height: fit-content;
  padding: 5px;
`;

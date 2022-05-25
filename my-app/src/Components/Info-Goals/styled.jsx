import styled from "styled-components";

export const Title = styled.h2`
  color: white;
  padding: 15px;
  font-size: 35px;
  text-shadow: 2px 2px 2px 0.3px;
  border-radius: 18px;
  background: linear-gradient(145deg, #1b1433, #20183d);
  box-shadow: 8px 8px 16px #1a1332, -8px -8px 16px #221940;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  top: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: black;
  border-bottom: 5px white solid; */
  @media screen and (max-width: 1150px) {
    height: 130vh;
    flex-direction: column;
  }
`;

export const SubContainer = styled.div`
  height: fit-content;
  width: 550px;
  border-radius: 25px;
  background: #1e1639;
  /* box-shadow: 5px 5px 4px #1d1537, -5px -5px 4px #1f173b; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  @media screen and (max-width: 1150px) {
    margin: 20px;
  }
  @media screen and (max-width: 600px) {
    width: 350px;
  }
`;

export const IntroTextContainer = styled.div`
  width: 95%;
  height: fit-content;
  border-radius: 15px;
  background: #1e1639;
  /* box-shadow: inset 8px 8px 16px #1a1332, inset -8px -8px 16px #221940; */
`;

export const IntroText = styled.p`
  font-size: 18px;
  color: white;
  text-align: left;
  padding: 15px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const LinesOfCode = styled.p`
  width: 80%;
  font-size: 16px;
  color: white;
  text-align: left;
  padding: 2px;
  padding-bottom: 10px;

  margin: 10px;
  margin-left: 25px;
  margin-right: 25px;
  border-bottom: 1px solid #2f2158;
  @media screen and (max-width: 600px) {
    font-size: 13px;
  }
`;

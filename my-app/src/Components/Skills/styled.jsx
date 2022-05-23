import styled from "styled-components";

export const FirstContainer = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  top: 60px;
`;

export const InfoContainer = styled.div`
  height: 550px;
  width: 700px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50px;
  border-radius: 50px;
  border-radius: 50px;
  background: #231942;
  box-shadow: 5px 5px 10px #1c1435, -5px -5px 10px #2a1e4f;
`;

export const Title = styled.h2`
  width: 30%;
  height: 10%;
  color: #f72585;
  padding: 15px;
  font-size: 35px;
  text-shadow: 2px 2px 2px 0.3px;
  border-radius: 18px;
  background: linear-gradient(145deg, #20173b, #251b47);
  box-shadow: 6px 6px 12px #1e1639, -6px -6px 12px #281c4b;
`;

export const SkillsContainer = styled.div`
  height: 70%;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* background-color: Red; */
`;

export const IconContainer = styled.div`
  color: #f72585;
  font-size: 50px;
  width: 100px;
  height: 100px;
  margin: 20px;
  border-radius: 18px;
  background: #231942;
  box-shadow: 8px 8px 16px #1e1639, -8px -8px 16px #281c4b;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transition: background 0.2s ease-in-out, color 0.5s ease-in-out;

  &:hover {
    color: #231942;
    border-radius: 18px;
    background: #f72585;
    box-shadow: inset 5px 5px 7px #de2178, inset -5px -5px 7px #ff2992;
  }
`;

export const IconName = styled.span`
  font-size: 15px;
`;

import React from "react";
import {
  SubContainer,
  MainContainer,
  Title,
  IntroTextContainer,
  IntroText,
  LinesOfCode,
} from "./styled";

export default function InfoGoals() {
  return (
    <MainContainer id="about-me">
      <SubContainer>
        <Title>About Me</Title>
        <IntroTextContainer>
          <IntroText>
            {" "}
            <b>Hi, I'm Thiago!</b>
            <br /> I was born in Buenos Aires, Argentina.
            <br /> I'm a Full Stack Web Developer specialized in Front End who
            loves and wants to learn more about design and tech innovations.
            <br /> My passions apart from web developing are japanese culture,
            travelling and all that has to do with the geek culture.
          </IntroText>
        </IntroTextContainer>
      </SubContainer>
      <SubContainer>
        <LinesOfCode>1 export const thiagoDalessandro = {"{"}</LinesOfCode>
        <LinesOfCode>2 age: 20</LinesOfCode>
        <LinesOfCode>
          3 languages:{"["}'Spanish', 'English', 'Italian', Portuguese',
          'Japanese'{"]"},
        </LinesOfCode>
        <LinesOfCode>4 location: 'Buenos Aires, Argentina'</LinesOfCode>
        <LinesOfCode>
          5 availability: {"["}'Immediate', 'Full-Time' {"]"},
        </LinesOfCode>
        <LinesOfCode>6 can-be-relocated: true</LinesOfCode>
        <LinesOfCode>7 {"}"}</LinesOfCode>
      </SubContainer>
    </MainContainer>
  );
}

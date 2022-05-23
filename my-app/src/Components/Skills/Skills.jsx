import React from "react";
import {
  FirstContainer,
  InfoContainer,
  Title,
  IconContainer,
  SkillsContainer,
  IconName,
} from "./styled";
import {
  SiJavascript,
  SiCss3,
  SiTypescript,
  SiRedux,
  SiPostgresql,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";

export default function Skills() {
  return (
    <FirstContainer id="skills">
      <InfoContainer>
        <Title>Skills</Title>
        <SkillsContainer>
          <IconContainer>
            <IconName>JavaScript</IconName>
            <SiJavascript />
          </IconContainer>
          <IconContainer>
            <IconName>React</IconName>
            <FaReact />
          </IconContainer>
          <IconContainer>
            <IconName>Node</IconName>
            <FaNodeJs />
          </IconContainer>
          <IconContainer>
            <IconName>TypeScript</IconName>
            <SiTypescript />
          </IconContainer>
          <IconContainer>
            <IconName>HTML5</IconName>
            <AiFillHtml5 />
          </IconContainer>
          <IconContainer>
            <IconName>CSS3</IconName>
            <SiCss3 />
          </IconContainer>
          <IconContainer>
            <IconName>Redux</IconName>
            <SiRedux />
          </IconContainer>
          <IconContainer>
            <IconName>PostgreSQL</IconName>
            <SiPostgresql />
          </IconContainer>
        </SkillsContainer>
      </InfoContainer>
    </FirstContainer>
  );
}

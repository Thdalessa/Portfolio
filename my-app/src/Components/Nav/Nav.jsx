import React from "react";
import { NavMenu, NavItem, Navigator, HomeButton, Logo } from "./styled";
import logo from "../../assets/ThiagoPNG.png";

export default function Nav() {
  return (
    <NavMenu>
      <HomeButton href="#intro">
        {"<"} Thiago D'Alessandro {"/>"}
      </HomeButton>
      <Navigator>
        <NavItem href="#about-me">About Me</NavItem>
        <NavItem href="#skills">Skills</NavItem>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem>Certificates</NavItem>
        <NavItem>Contact Me</NavItem>
      </Navigator>
    </NavMenu>
  );
}

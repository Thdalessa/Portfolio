import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";

export const NavMenu = styled.nav`
  width: 100%;
  height: 50px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 10;
`;

export const HomeButton = styled.a`
  text-decoration: none;
  width: 300px;
  height: 50px;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: inset 0 0 0 0 #f72585;
  transition: border 0.3s ease-in-out, box-shadow 0.25s ease-in-out;

  &:hover {
    box-shadow: inset 300px 0 0 0 #f72585;
    cursor: pointer;
  }
`;

export const Navigator = styled.div`
  width: 40%;
  height: 50px;
  color: white;
  /* background-color: green; */
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavItem = styled.a`
  text-decoration: none;
  color: white;
  margin: 5px;
  padding: 5px;
  box-shadow: inset 0 0 0 0 #f72585;
  transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: inset 100px 0 0 0 #f72585;
    cursor: pointer;
  }
`;

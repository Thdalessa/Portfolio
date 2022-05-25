import styled from "styled-components";

export const NavMenu = styled.nav`
  width: 100%;
  height: 50px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 10;
  @media screen and (max-width: 760px) {
    height: 100px;
    flex-direction: column;
  }
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
  @media screen and (max-width: 460px) {
    margin-top: 20px;
    height: 60px;
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

  @media screen and (max-width: 1120px) {
    width: 50%;
  }
  @media screen and (max-width: 900px) {
    width: 60%;
  }
  @media screen and (max-width: 760px) {
    width: 100%;
  }
  @media screen and (max-width: 460px) {
    display: none;
    visibility: none;
  }
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

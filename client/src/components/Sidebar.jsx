import React from "react";
import styled from "styled-components";
import { HomeRounded, CloseRounded } from "@mui/icons-material";
import LOGOImage from "../Images/Logo.png";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
  flex: 0.5;
  flex-direction: column;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};

    @media (max-width: 1100px){
      position:fixed;
      z-index: 1000;
      width: 100%;
      max-width: 250px;
      left: ${({ setMenuOpen }) => (setMenuOpen ? "0" : "")}
      transition: 0.3s ease-in-out;
    }
`;

const Flex = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  width: 86%;
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 6px;
  font-weight: bold;
  font-size: 20px;
  margin: 16px 0px;
`;
const Image = styled.img`
  height: 40px;
`;

const Close = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: block;
  }
`;
const Elements = styled.div`
  padding: 4px 16px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_secondary};
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.text_secondary + 50};
  }
`;
const NavText = styled.div`
  padding: 12px 0px;
  text-decoration: none;
`;

const Sidebar = () => {
  return (
    <MenuContainer>
      <Flex>
        <Logo>
          <Image src={LOGOImage} />
          PodStream
        </Logo>
        <Close>
          <CloseRounded />
        </Close>
      </Flex>
      <Link to="/">
        <Elements>
          <HomeRounded />
          <NavText>Dashboard</NavText>
        </Elements>
      </Link>
    </MenuContainer>
  );
};

export default Sidebar;

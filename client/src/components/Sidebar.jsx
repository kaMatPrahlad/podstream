import React from "react";
import styled from "styled-components";
import { HomeRounded, CloseRounded } from "@mui/icons-material";

const MenuContainer = styled.div`
  //   flex: 0.5;
  //   flex-direction: column;
  //   height: 100vh;
  //   display: flex;
  //   background-color: ${({ theme }) => theme.bg};
  //   color: ${({ theme }) => theme.text_primary};

  flex: 0.5;
  flex-direction: column;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};

  //   @media (max-width: 1100px){
  //     position:fixed;
  //     z-index: 1000;
  //     width: 100%;
  //     max-width: 250px;
  //     left: ${({ setMenuOpen }) => (setMenuOpen ? "0" : "")}
  //     transition: 0.3s ease-in-out;
  //   }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: bold;
  font-size: 20px;
  margin: 16px 0px;
`;

const Close = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: block;
  }
`;
const Elements = styled.div``;
const NavText = styled.div`
  padding: 12px 0px;
`;

const Sidebar = () => {
  return (
    <MenuContainer>
      <Flex></Flex>
      <Logo>PodStream</Logo>
      <Close>
        <CloseRounded />
      </Close>
      <Elements>
        <HomeRounded />
        <NavText>Dashboard</NavText>
      </Elements>
    </MenuContainer>
  );
};

export default Sidebar;

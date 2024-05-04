import React from "react";
import styled from "styled-components";
import { Menu, PersonRounded } from "@mui/icons-material";
// import { IconButton } from "@mui/material";

const NavBardiv = styled.div`
  display: flex;
  justify-content: space-between;
  //   width: 100%;
  padding: 16px 40px;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  gap: 30px;
  background: ${({ theme }) => theme.bgLight};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.7px);
  -webkit-backdrop-filter: blur(5.7px);
  @media (max-width: 768px) {
    padding: 16px;
  }
`;
const ButtonDiv = styled.div`
  font-size: 14px;
  cursor: pointer;
  display: flex;
  max-width: 70px;
  align-items: center;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 12px;
  padding: 8px 10px;
  gap: 8px;
`;
const IcoButton = styled.div`
  color: ${({ theme }) => theme.text_secondary} !important;
`;
const NavBar = ({ setMenuOpen, menuOpen }) => {
  return (
    <NavBardiv>
      <IcoButton onClick={() => setMenuOpen(!menuOpen)}>
        <Menu />
      </IcoButton>
      <ButtonDiv>
        <PersonRounded />
        Login
      </ButtonDiv>
    </NavBardiv>
  );
};

export default NavBar;
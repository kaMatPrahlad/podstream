import React from "react";
import styled from "styled-components";
import {
  HomeRounded,
  CloseRounded,
  SearchRounded,
  FavoriteRounded,
  LightModeRounded,
  LogoutRounded,
  DarkModeRounded,
  CloudUpload,
} from "@mui/icons-material";
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
      left: ${({ MenuOpen }) => (MenuOpen ? "0" : "-100%")}
      transition: 0.3s ease-in-out;
    }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  padding: 0px 16px;
  // width: 100%;
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
  text-decoration: none !important;
  color: ${({ theme }) => theme.text_secondary};
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.text_secondary + 50};
  }
`;
const NavText = styled.div`
  padding: 12px 0px;
  text-decoration: none !important;
`;
const HR = styled.div`
width: 100%;
height: 1px;
background-color: ${({ theme }) => theme.text_secondary + 50};
margin:"10px 0px;
`;
const Image = styled.img`
  height: 40px;
`;

const Sidebar = ({ MenuOpen, setMenuOpen, setDarkMode, darkMode }) => {
  const menuItems = [
    {
      link: "/",
      name: "Dashboard",
      icon: <HomeRounded />,
    },
    {
      link: "/search",
      name: "Search",
      icon: <SearchRounded />,
    },
    {
      link: "/favourites",
      name: "Favourites",
      icon: <FavoriteRounded />,
    },
  ];
  const button = [
    {
      fun: () => console.log("Upload"),
      name: "Upload",
      // icon: <UploadRounded />,
      icon: <CloudUpload />,
    },
    {
      fun: () => setDarkMode(!darkMode),
      name: darkMode ? "Light Mode" : "Dark Mode",
      icon: darkMode ? <LightModeRounded /> : <DarkModeRounded />,
    },
    {
      fun: () => console.log("Upload"),

      name: "Log Out",
      icon: <LogoutRounded />,
    },
  ];
  return (
    <MenuContainer MenuOpen={MenuOpen}>
      <Flex>
        <Logo>
          <Image src={LOGOImage} />
          PODSTREAM
        </Logo>
        <Close onClick={() => setMenuOpen(false)}>
          <CloseRounded />
        </Close>
      </Flex>
      {menuItems.map((item) => (
        <Link key={item.id} to={item.link} style={{ textDecoration: "none" }}>
          <Elements>
            {item.icon}
            <NavText>{item.name}</NavText>
          </Elements>
        </Link>
      ))}

      <HR />
      {button.map((item) => (
        <Elements onClick={item.fun}>
          {item.icon}
          <NavText>{item.name}</NavText>
        </Elements>
      ))}
    </MenuContainer>
  );
};

export default Sidebar;

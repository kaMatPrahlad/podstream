import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Favourites from "./pages/Favourites";
import Profile from "./pages/Profile";
import PodcastDetails from "./pages/PodcastDetails";
import DisplayingPodcast from "./pages/DisplayingPodcast";

const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bgLight};
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

function App() {
  // hooks
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
          {menuOpen && (
            <Sidebar
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              setDarkMode={setDarkMode}
              darkMode={darkMode}
            />
          )}
          <Frame>
            <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/search" exact element={<Search />}></Route>
              <Route path="/favourites" exact element={<Favourites/>}></Route>
              <Route path="/profile" exact element={<Profile />}></Route>
              <Route
                path="/showpodcast/:type"
                exact
                element={<PodcastDetails />}
              ></Route>
              <Route
                path="/showpodcast"
                exact
                element={<DisplayingPodcast />}
              ></Route>
            </Routes>
          </Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

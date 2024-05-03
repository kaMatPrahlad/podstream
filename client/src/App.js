import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";

const Container = styled.div`
  background: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100vh;
`;

function App() {
  // hooks
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container className="App">Podstream hbxbbxb</Container>
    </ThemeProvider>
  );
}

export default App;

import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";

// Main Navigator
import MainStack from "./components/navigation";

const theme = {
  primary: "#0A0E28",
  secondary: "#2493A2",
  accent: "#DCB13C",
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainStack />
    </ThemeProvider>
  );
}

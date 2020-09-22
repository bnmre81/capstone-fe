import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import io from "socket.io-client";
// Main Navigator
import MainStack from "./components/navigation";

const theme = {
  primary: "#0A0E28",
  secondary: "#2493A2",
  accent: "#DCB13C",
};

export default function App() {
  useEffect(() => {
    const socket = io("http://188.236.133.201:8000/");
  });

  return (
    <ThemeProvider theme={theme}>
      <MainStack />
    </ThemeProvider>
  );
}

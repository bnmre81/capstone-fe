
import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";

// Main Navigator
import MainStack from "./components/navigation";

// Socket Io BE connection
import io from "socket.io-client";

const theme = {
  primary: "#0A0E28",
  secondary: "#2493A2",
  accent: "#DCB13C",
};

export default function App() {
  useEffect(() => {
    const socket = io("http://10.0.2.2:8000/");
  });
  return (
    <ThemeProvider theme={theme}>
      <MainStack />
    </ThemeProvider>
  );

}

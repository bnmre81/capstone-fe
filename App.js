import { Root } from "native-base";
import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import * as Font from "expo-font";

// Main Navigator
import MainStack from "./components/navigation";

const theme = {
  primary: "#0A0E28",
  secondary: "#2493A2",
  accent: "#DCB13C",
};

export default function App() {
  useEffect(() => {
    (async () =>
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      }))();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <MainStack />
      </Root>
    </ThemeProvider>
  );
}

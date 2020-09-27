import React from "react";
import { Container, Text, View } from "native-base";
import { TextStyled, WaitingMsg } from "./styles";
import socketStore from "../../stores/SocketStore";

const Waiting = ({ navigation }) => {
  if (socketStore.start === true) navigation.replace("MovieList");
  return (
    <Container style={{ backgroundColor: "#D999B9" }}>
      <WaitingMsg>
        <TextStyled>Waiting for host to start session ...</TextStyled>
      </WaitingMsg>
    </Container>
  );
};
export default Waiting;

import React from "react";
import { Container, Text, View } from "native-base";
import { TextStyled, WaitingMsg } from "./styles";

const Waiting = () => {
  return (
    <Container style={{ backgroundColor: "#D999B9" }}>
      <WaitingMsg>
        <TextStyled>Waiting for host to start session ...</TextStyled>
      </WaitingMsg>
    </Container>
  );
};
export default Waiting;

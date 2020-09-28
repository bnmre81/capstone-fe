import React from "react";
import { Container, Text, View } from "native-base";
import { TextStyled, WaitingMsg } from "./styles";
import socketStore from "../../stores/SocketStore";
import { observer } from "mobx-react";

const WaitingResult = ({ navigation }) => {
  if (socketStore.users === socketStore.done) {
    socketStore.highestVote();
    navigation.replace("Result");
  }
  return (
    <Container style={{ backgroundColor: "#D999B9" }}>
      <WaitingMsg>
        <TextStyled>Waiting for Result</TextStyled>
      </WaitingMsg>
    </Container>
  );
};
export default observer(WaitingResult);

import React from "react";
import { Container, Text, View, Toast, Button } from "native-base";
import { TextStyled, WaitingMsg } from "./styles";
import socketStore from "../../stores/SocketStore";
import { observer } from "mobx-react";

const Waiting = ({ navigation }) => {
  if (socketStore.start) navigation.replace("MovieList");
  return (
    <Container style={{ backgroundColor: "#D999B9" }}>
      <WaitingMsg>
        <TextStyled>Waiting for host to start session ...</TextStyled>
        <Button
          onPress={() =>
            Toast.show({
              text: "Wrong password!",
              buttonText: "Okay",
              duration: 3000,
            })
          }
        >
          <Text>Toast</Text>
        </Button>
      </WaitingMsg>
    </Container>
  );
};
export default observer(Waiting);

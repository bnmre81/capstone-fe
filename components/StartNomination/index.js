import React from "react";
import { Text, View } from "native-base";
import { StartNominationButton, StartNominationContainer } from "./styles";
const StartNomination = () => {
  return (
    <StartNominationContainer>
      <StartNominationButton>
        <Text>Start Nomination here!</Text>
      </StartNominationButton>
    </StartNominationContainer>
  );
};
export default StartNomination;

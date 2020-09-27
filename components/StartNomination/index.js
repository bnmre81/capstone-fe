import React from "react";
import { Text, View } from "native-base";
import { StartNominationButton, StartNominationContainer } from "./styles";
import socketStore from "../../stores/SocketStore";
import { TouchableOpacity } from "react-native-gesture-handler";
const StartNomination = ({ navigation }) => {
  handleStart = () => {
    socketStore.startNomination();
    navigation.replace("MovieList");
  };
  return (
    <StartNominationContainer>
      <TouchableOpacity onPress={handleStart}>
        <StartNominationButton>
          <Text>Start Nomination here!</Text>
        </StartNominationButton>
      </TouchableOpacity>
    </StartNominationContainer>
  );
};
export default StartNomination;

import React from "react";
import { Text, View } from "native-base";
import { StartNominationButton, StartNominationContainer } from "./styles";
import socketStore from "../../stores/SocketStore";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ImageBackground } from "react-native";
const StartNomination = ({ navigation }) => {
  handleStart = () => {
    socketStore.startNomination();
    navigation.replace("MovieList");
  };
  return (
    <StartNominationContainer>
      <ImageBackground
        source={{
          uri:
            "https://i.pinimg.com/originals/b5/eb/7e/b5eb7ed0245cdcf6e68cf8f283e6190d.jpg",
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <TouchableOpacity onPress={handleStart}>
          <StartNominationButton>
            <Text>Start Nomination here!</Text>
          </StartNominationButton>
        </TouchableOpacity>
      </ImageBackground>
    </StartNominationContainer>
  );
};
export default StartNomination;

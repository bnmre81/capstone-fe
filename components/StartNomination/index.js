import React from "react";
import { observer } from "mobx-react";

// Styles
import { Text, View } from "native-base";
import { StartNominationButton, StartNominationContainer } from "./styles";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// Stores
import socketStore from "../../stores/SocketStore";

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
        <Text>
          {socketStore.users} Users in Room:{socketStore.room}
        </Text>
      </ImageBackground>
    </StartNominationContainer>
  );
};
export default observer(StartNomination);

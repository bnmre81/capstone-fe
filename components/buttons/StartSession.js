import React from "react";
import { View, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import { StartSessionBtn } from "./styles";

const StartSession = () => {
  const handleVote = () => {
    alert("Session started!");
  };
  return (
    <View>
      <StartSessionBtn onPress={handleVote}>
        <Text>Start Session</Text>
      </StartSessionBtn>
    </View>
  );
};
export default StartSession;

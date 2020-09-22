import React from "react";

import { View, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import { StartSessionBtn } from "./styles";

// REVIEW: cleanup your imports
// REVIEW: THE NAME OF THE FILE IS DISGUSTING

const StartSession = () => {
  const handleVote = () => {
    alert("Session started!");
  };
  return (
    <View>
      <StartSessionBtn>
        <Text>Start Session</Text>
      </StartSessionBtn>
    </View>
  );
};
export default StartSession;

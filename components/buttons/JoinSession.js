import React from "react";
import { View, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import { JoinSessionBtn } from "./styles";

const JoinSession = () => {
  const handleJoin = () => {
    alert("you have joined a session!");
  };
  return (
    <JoinSessionBtn>
      <TouchableOpacity onPress={handleJoin}>
        <Text>Join Session</Text>
      </TouchableOpacity>
    </JoinSessionBtn>
  );
};
export default JoinSession;

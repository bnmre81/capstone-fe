import React from "react";
// Styles
import { View, Text } from "native-base";
import { TouchableOpacity } from "react-native";

const Nominate = () => {
  const handleVote = () => {
    alert("you nominated a movie!");
  };
  return (
    <View>
      <TouchableOpacity onPress={handleVote}>
        <Text>Nominate</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Nominate;
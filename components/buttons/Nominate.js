import React from "react";
// Styles
import { View, Text } from "native-base";
import { TouchableOpacity } from "react-native";

// REVIEW: if youre not using item, remove it
const Nominate = ({ item }) => {
  return (
    <View>
      <TouchableOpacity>
        <Text>Nominate</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Nominate;

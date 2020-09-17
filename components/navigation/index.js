import React from "react";
// Components
import MovieList from "../MovieList";
import NominatedList from "../MovieList";
// Navigators
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Result from "../Result/index";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Result">
        <Stack.Screen name="MovieList" component={MovieList} />
        <Stack.Screen name="NominatedList" component={NominatedList} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;

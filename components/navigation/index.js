import React from "react";

// Components
import MovieList from "../MovieList";
import NominatedList from "../NominatedList";
import Result from "../Result/index";

// Navigators
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MovieList">
        <Stack.Screen name="MovieList" component={MovieList} />
        <Stack.Screen name="NominatedList" component={NominatedList} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;

import React from "react";

// Navigators
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import MovieList from "../MovieList";

// destructure this...
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      {/* ...so that you don't have to write "Stack." here */}
      <Stack.Navigator initialRouteName="MovieList">
        <Stack.Screen name="MovieList" component={MovieList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;

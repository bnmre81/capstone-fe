import React from "react";
// Components
import MovieList from "../MovieList";
import NominatedList from "../NominatedList";
import Result from "../Result/index";
import Home from "../Home";
// Stores
import socketStore from "../../stores/SocketStore";
// Navigators
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { observer } from "mobx-react";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MovieList"
          component={MovieList}
          options={{ title: `${socketStore.room}` }}
        />
        <Stack.Screen name="NominatedList" component={NominatedList} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default observer(MainStack);

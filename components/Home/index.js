import React from "react";
import { View, Text } from "native-base";
import StartSession from "../buttons/StartSession";
import JoinSession from "../buttons/JoinSession";
import { HomeContainer } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <Text>Welcome home1</Text>
      <StartSession />
      <JoinSession />
    </HomeContainer>
  );
};
export default Home;

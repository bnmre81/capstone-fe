import React from "react";
import { View, Text } from "native-base";
import JoinSession from "../buttons/JoinSession";
import { HomeContainer } from "./styles";
import StartSession from "../Modals/StartSession";
// REVIEW: cleanup your imports

const Home = () => {
  return (
    <HomeContainer>
      <Text>Welcome home!</Text>
      <StartSession />
      <JoinSession />
    </HomeContainer>
  );
};
export default Home;

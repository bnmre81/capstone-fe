import React from "react";

// Styles
import { Text } from "native-base";
import { HomeContainer } from "./styles";

// Components
import JoinSession from "../buttons/JoinSession";
import StartSession from "../Modals/StartSession";

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

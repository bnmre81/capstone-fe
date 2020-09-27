import React from "react";

// Styles
import { Text, View } from "native-base";
import { HomeContainer } from "./styles";

// Components
import JoinSession from "../buttons/JoinSession";
import StartSession from "../Modals/StartSession";
import { ImageBackground } from "react-native";

const Home = () => {
  return (
    <HomeContainer>
      <ImageBackground
        source={{
          uri:
            "https://cdn.shopify.com/s/files/1/2930/2308/products/dark-background-with-marble-texture-backdrop-for-photography_800x.jpg?v=1551510514",
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ marginTop: 350 }}>
          <StartSession />
          <JoinSession />
        </View>
      </ImageBackground>
    </HomeContainer>
  );
};
export default Home;

import React from "react";

// Styles
import { Spinner, Text } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import {
  ResultContainer,
  ResultBackground,
  MenuBar,
  MainStyle,
  TextContainer,
  TextBackground,
  TitleText,
  DetailText,
  Back,
} from "./styles";

// Stores
import socketStore from "../../stores/SocketStore";
import { observer } from "mobx-react";

const Result = ({ navigation }) => {
  const result = socketStore.result;
  if (!result) return <Spinner />;

  return (
    <ResultContainer>
      <ScrollView>
        <StatusBar barStyle="light-Content" />
        <ResultBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
          }}
        >
          <SafeAreaView>
            <MenuBar>
              <Back>
                <AntDesign name="arrowleft" size={24} color="#FFF" />
              </Back>
              <Text>Result here!</Text>
            </MenuBar>
            <MainStyle>
              <TextContainer>
                <TextBackground>
                  <TitleText>{result.title}</TitleText>
                  <DetailText>
                    This movie is about a guy who is trying the impossible, but
                    he doesn't know that they know, and at the end you'll see
                    that he knows that they know, and they know that he knows
                    that they know!
                  </DetailText>
                </TextBackground>
              </TextContainer>
            </MainStyle>
          </SafeAreaView>
        </ResultBackground>
      </ScrollView>
    </ResultContainer>
  );
};
export default observer(Result);

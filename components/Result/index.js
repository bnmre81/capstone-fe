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
import movieStore from "../../stores/MovieStore";

const Result = ({ navigation }) => {
  const result = socketStore.result;
  if (!result) return <Spinner />;
  console.log(socketStore.nominatedMovies[0].description);
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
            </MenuBar>
            <MainStyle>
              <TextContainer>
                <TextBackground>
                  <TitleText>{result.title}</TitleText>
                  <DetailText>{result.overview}</DetailText>
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

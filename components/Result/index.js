import React from "react";
import { Text, View, TouchableOpacity } from "native-base";
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

const Result = ({ route, navigation }) => {
  return (
    <ResultContainer>
      <ScrollView>
        <StatusBar barStyle="light-Content" />
        <ResultBackground
          source={{
            uri:
              "https://i.pinimg.com/originals/91/8a/91/918a91cac2905bc0ff1e0442325044bf.jpg",
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
                  <TitleText>Summary</TitleText>
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
export default Result;

import React, { useState } from "react";

// Styles
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButton,
  AuthButtonText,
  JoinSessionBtn,
} from "./styles";
import { Text } from "native-base";
import { View, Modal } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const JoinSession = () => {
  //Modal State
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const navigation = useNavigation();

  //User State
  const [user, setUser] = useState("Username");
  //Room State
  const [room, setRoom] = useState("Room Name");

  //Render
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isOpen}>
        <AuthContainer>
          <AuthTitle>Join</AuthTitle>
          <AuthTextInput
            onChangeText={(username) => setUser(username)}
            placeholder="User"
            autoCapitalize="none"
            placeholderTextColor="#A6AEC1"
          />
          <AuthTextInput
            onChangeText={(roomName) => setRoom(roomName)}
            placeholder="Room Name"
            placeholderTextColor="#A6AEC1"
          />

          <AuthButton onPress={() => navigation.replace("MovieList")}>
            <AuthButtonText>Join Session</AuthButtonText>
          </AuthButton>
          <TouchableOpacity onPress={() => closeModal()}>
            <Text style={{ marginTop: 20, color: "#bbe1fa" }}>Cancel</Text>
          </TouchableOpacity>
        </AuthContainer>
      </Modal>
      <JoinSessionBtn onPress={() => openModal()}>
        <Text>Join Session</Text>
      </JoinSessionBtn>
    </View>
  );
};
export default JoinSession;

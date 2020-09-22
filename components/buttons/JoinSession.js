import React, { useState } from "react";
import socketStore from "../../stores/SocketStore";
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
// REVIEW: merge those two imports
import { View, Modal } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const JoinSession = () => {
  //Modal State
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => {
    socketStore.connect();
    setIsOpen(true);
  };

  //User State
  const [user, setUser] = useState("User");
  //Room State
  const [room, setRoom] = useState("Room Name");

  const navigation = useNavigation();

  const handleSubmit = () => {
    socketStore.hostRoom({ room, user });
    closeModal();
    navigation.replace("MovieList");
  };

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
            autoCapitalize="none"
            placeholderTextColor="#A6AEC1"
          />
          {/* REVIEW: You don't need an arrow function if you're not passing an argument */}
          <AuthButton onPress={() => handleSubmit()}>
            <AuthButtonText>Join Session</AuthButtonText>
          </AuthButton>
          {/* REVIEW: You don't need an arrow function if you're not passing an argument */}
          <TouchableOpacity onPress={() => closeModal()}>
            <Text style={{ marginTop: 20, color: "#bbe1fa" }}>Cancel</Text>
          </TouchableOpacity>
        </AuthContainer>
      </Modal>
      {/* REVIEW: You don't need an arrow function if you're not passing an argument */}
      <JoinSessionBtn onPress={() => openModal()}>
        <Text>Join Session</Text>
      </JoinSessionBtn>
    </View>
  );
};
export default JoinSession;

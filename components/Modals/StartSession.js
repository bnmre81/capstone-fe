import React, { useState } from "react";

// Styles
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButton,
  AuthButtonText,
  AuthOther,
  StartSessionBtn,
} from "./styles";
import { Text } from "native-base";
import { View, Modal } from "react-native";
import { TouchableOpacity } from "react-native";

// Stores
import socketStore from "../../stores/SocketStore";

const StartSession = () => {
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

  const handleSubmit = () => {
    socketStore.hostRoom({ room, user });
    closeModal();
  };
  //Render
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isOpen}>
        <AuthContainer>
          <AuthTitle>Host</AuthTitle>
          <AuthTextInput
            onChangeText={(user) => setUser(user)}
            placeholder="Username"
            autoCapitalize="none"
            placeholderTextColor="#A6AEC1"
          />
          <AuthTextInput
            onChangeText={(roomName) => setRoom(roomName)}
            placeholder="Room Name"
            placeholderTextColor="#A6AEC1"
          />

          <AuthButton onPress={() => handleSubmit()}>
            <AuthButtonText>Start Session</AuthButtonText>
          </AuthButton>
          <TouchableOpacity onPress={() => closeModal()}>
            <Text style={{ marginTop: 20, color: "#bbe1fa" }}>Cancel</Text>
          </TouchableOpacity>
        </AuthContainer>
      </Modal>
      <StartSessionBtn onPress={() => openModal()}>
        <Text>Start Session</Text>
      </StartSessionBtn>
    </View>
  );
};

export default StartSession;
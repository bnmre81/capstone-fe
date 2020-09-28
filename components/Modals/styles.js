import styled from "styled-components/native";

export const AuthContainer = styled.View`
  height: 100%;
  align-self: stretch;
  justify-content: center;
  align-items: center;

  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: red;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: #decdc3;
  border-bottom-color: ${(props) => props.theme.accent};
  border-bottom-width: 1px;
`;
export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.accent};
  margin-top: 30px;
  border-radius: 15px;
`;

export const AuthButtonText = styled.Text`
  color: #222831;
  font-weight: bold;
  font-size: 18px;
`;
export const AuthOther = styled.Text`
  color: #bbe1fa;
  margin-top: 15px;
`;

export const StartSessionBtn = styled.TouchableOpacity`
  background-color: white;
  height: 70;
  margin-horizontal: 20;
  border-radius: 35;
  align-items: center;
  justify-content: center;
  margin-bottom: 30;
`;

export const JoinSessionBtn = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.accent};
  height: 70;
  margin-horizontal: 20;
  border-radius: 35;
  align-items: center;
  justify-content: center;
`;

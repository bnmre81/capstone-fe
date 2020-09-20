import styled from "styled-components/native";

export const JoinSessionBtn = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.secondary};
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border-color: ${(props) => props.theme.accent};
  position: absolute;
  top: 300px;
  left: 25%;
`;

export const StartSessionBtn = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.secondary};
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border-color: ${(props) => props.theme.accent};
  position: absolute;
  top: 425px;
  left: 25%;
`;

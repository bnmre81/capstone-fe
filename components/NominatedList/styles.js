import styled from "styled-components/native";

export const CarouselContainerView = styled.View`
  width: 100%;
  height: 350;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
`;
export const CaruselImage = styled.Image`
  width: 200;
  height: 320;
  border-radius: 10;
  align-self: center;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const CaruselText = styled.Text`
  color: ${(props) => props.theme.accent};

  text-align: center;
  font-weight: bold;
`;

export const IconContainer = styled.View`
  margin: 10px 0;
  width: 200;
  height: 30;
  flex-direction: row;
`;

export const StartNominationButton = styled.TouchableOpacity`
  background-color: #7d8ca3;
  height: 70;
  margin-horizontal: 20;
  border-radius: 35;
  align-items: center;
  justify-content: center;
  margin-top: 350;
`;

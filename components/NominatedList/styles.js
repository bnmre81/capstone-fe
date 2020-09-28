import styled from "styled-components/native";

export const CarouselContainerView = styled.View`
  width: 100%;

  justify-content: center;
  align-items: center;

  background-color: black;
`;
export const CaruselImage = styled.Image`
  width: 270;
  height: 520;
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
  width: 270;
  height: 30;
  flex-direction: row;
`;
// background-color: ${(props) => props.theme.primary};

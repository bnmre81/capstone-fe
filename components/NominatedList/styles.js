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
  padding: 14px;
  text-align: center;
  font-weight: bold;
`;

import React from "react";
import { View, Text, Image, Card } from "native-base";
import { FlatList, ScrollView } from "react-native";
// Data
import movies from "../../data";
// styles
import { BoxItemImage, BoxItemText } from "./itemStyles";
const MovieList = () => {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={movies}
      renderItem={({ item }) => {
        return (
          <>
            <Card>
              <Text>FILM</Text>
              <BoxItemImage source={{ uri: item.image }} />
              <BoxItemText>{item.title}</BoxItemText>
            </Card>
          </>
        );
      }}
    />

    // </BoxListContainer>
  );
};
export default MovieList;

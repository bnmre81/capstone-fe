import React from "react";

// Styles
import { Text, Card, Thumbnail } from "native-base";
import { BoxListContainer } from "./styles";
import { FlatList } from "react-native";
import { BoxItemText } from "../MovieList/itemStyles";

const NominatedList = ({ route }) => {
  const { nominatedMovies } = route.params;

  return (
    <BoxListContainer>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={nominatedMovies}
        renderItem={({ item }) => {
          return (
            <Card>
              <Text>Nominated</Text>
              <Thumbnail
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
              />
              <BoxItemText>{item.title}</BoxItemText>
            </Card>
          );
        }}
      />
    </BoxListContainer>
  );
};

export default NominatedList;

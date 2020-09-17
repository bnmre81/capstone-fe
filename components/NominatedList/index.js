import React from "react";
import { View, Text } from "native-base";
import { BoxListContainer } from "./styles";
import { FlatList } from "react-native";

const NominatedList = () => {
  return (
    <BoxListContainer>
      <Text>naminated list</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={movies}
        renderItem={({ item }) => {
          return (
            <Card>
              <TouchableOpacity>
                <Text>FILM</Text>
              </TouchableOpacity>
              <Thumbnail
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
              />
              <BoxItemText>{item.title}</BoxItemText>
              <TouchableOpacity
                onPress={() => handleNaminate(item)}
              ></TouchableOpacity>
            </Card>
          );
        }}
      />
    </BoxListContainer>
  );
};

export default NominatedList;

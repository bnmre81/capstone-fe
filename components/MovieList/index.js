import React from "react";
import { observer } from "mobx-react";
// styles
import { BoxListContainer, BoxItemText } from "./itemStyles";
import { Text, Card, Spinner, Thumbnail } from "native-base";
import { FlatList, ScrollView } from "react-native";
// Stores
import movieStore from "../../stores/MovieStore";
// Components
import Nominate from "../buttons/Nominate";
import { TouchableOpacity } from "react-native-gesture-handler";

const MovieList = ({ Navigation }) => {
  if (!movieStore.movies) return <Spinner />;

  const { movies } = movieStore;

  const naminatedMovies = [];

  const handleNaminate = (item) => {
    naminatedMovies.push(item.title);
    console.log(naminatedMovies);
  };
  return (
    <BoxListContainer>
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
              <TouchableOpacity onPress={() => handleNaminate(item)}>
                <Nominate item={item} />
              </TouchableOpacity>
            </Card>
          );
        }}
      />
    </BoxListContainer>
  );
};
export default observer(MovieList);

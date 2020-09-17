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

const MovieList = () => {
  if (!movieStore.movies) return <Spinner />;

  const { movies } = movieStore;

  /* remove commented code */
  // const randomMovies = [];
  // if (movies)
  //   for (let i = 0; i < 5; i++) {
  //     randomMovies.push(movies[Math.random() * (movies.length - 0)]);
  //   }
  return (
    <BoxListContainer>
      <FlatList
        keyExtractor={(item) => item.id}
        data={movies}
        renderItem={({ item }) => {
          // no need for Fragments
          return (
            <Card>
              <Text>FILM</Text>
              <Thumbnail
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
              />
              <BoxItemText>{item.title}</BoxItemText>
              <Nominate />
            </Card>
          );
        }}
      />
    </BoxListContainer>
  );
};
export default observer(MovieList);

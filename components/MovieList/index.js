import React from "react";
import { View, Text, Image, Card, Spinner, Thumbnail } from "native-base";
import { FlatList, ScrollView } from "react-native";

// Stores
import movieStore from "../../stores/MovieStore";

// styles
import { BoxListContainer } from "./listStyles";
import { BoxItemContainer, BoxItemImage, BoxItemText } from "./itemStyles";
import { observer } from "mobx-react";

const MovieList = () => {
  if (!movieStore.movies) return <Spinner />;
  const movies = movieStore.movies;

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
          return (
            <>
              <Card>
                <Text>FILM</Text>
                <Thumbnail
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                  }}
                />
                <BoxItemText>{item.title}</BoxItemText>
              </Card>
            </>
          );
        }}
      />
    </BoxListContainer>
  );
};
export default observer(MovieList);

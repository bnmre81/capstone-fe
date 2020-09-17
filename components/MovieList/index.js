import React from "react";
import { View, Text, Image, Card, Spinner, Thumbnail } from "native-base";
import { FlatList, ScrollView } from "react-native";

// Stores
import movieStore from "../../stores/MovieStore";

// styles
// maybe combine the two styles files into one?
import { BoxListContainer } from "./listStyles";
import { BoxItemContainer, BoxItemImage, BoxItemText } from "./itemStyles";
import { observer } from "mobx-react";
import UpButton from "../buttons/UpButton";
import DownButton from "../buttons/DownButton";
import Nominate from "../buttons/Nominate";

// so many unused imports

const MovieList = () => {
  if (!movieStore.movies) return <Spinner />;
  // destructure this
  const movies = movieStore.movies;

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
            <>
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
            </>
          );
        }}
      />
    </BoxListContainer>
  );
};
export default observer(MovieList);

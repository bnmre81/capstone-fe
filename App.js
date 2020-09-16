import { observer } from "mobx-react";
import { Card, Spinner, Text } from "native-base";
import React, { useState } from "react";
import { FlatList, TextInput, View, Image } from "react-native";
import movieStore from "./stores/MovieStore";

export default function App() {
  const [query, setQuery] = useState("whiplash");

  if (!movieStore.movies) return <Spinner />;
  const movies = movieStore.movies;

  let randomMovies = [
    movies[Math.random() * (movies.length - 0)],
    movies[Math.random() * (movies.length - 0)],
    movies[Math.random() * (movies.length - 0)],
    movies[Math.random() * (movies.length - 0)],
  ];

  // for (let i = 0; i < 5; i++) {
  //   randomMovies.push(movies[Math.random() * (movies.length - 0)]);
  // }

  return (
    <View>
      <TextInput
        style={{ margin: 20 }}
        placeholder="search for a movie"
        onChangeText={(text) => setQuery(text)}
        onSubmitEditing={() => performSearch()}
      />
      {randomMovies === [] ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          <FlatList
            keyExtractor={(item) => item.id}
            data={randomMovies}
            renderItem={({ item }) => {
              return (
                <View>
                  <Card>
                    <Text>{item.title}</Text>
                  </Card>
                </View>
              );
            }}
          />
        </>
      )}
    </View>
  );
}

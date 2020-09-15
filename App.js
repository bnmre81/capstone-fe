import { Card, Input, Text } from "native-base";
import React, { useState } from "react";
import { FlatList, TextInput, View, Image } from "react-native";
import { SearchBar } from "react-native-elements";

export default function App() {
  const [query, setQuery] = useState("whiplash");

  const [movies, setMovies] = useState([]);

  const performSearch = async () => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=a6358e507fbfbbc6c17a38f10a736e3f&language=en-US&query=${query}&page=1&include_adult=false`
    )
      .then((data) => data.json())
      .then((data) => {
        setMovies(...data.results);
      });
  };

  console.log(query);
  console.log(movies);
  return (
    <View>
      <TextInput
        style={{ margin: 20 }}
        placeholder="search for a movie"
        onChangeText={(text) => setQuery(text)}
        onSubmitEditing={performSearch}
      />
      {/* <FlatList
        keyExtractor={(item) => item.id}
        data={movies}
        extraData={query}
        renderItem={({ movie }) => {
          return (
            <Card>
              <Text>
                {console.log("im here")}
                title : {movie.title} , popularity: {movie.popularity} ,
                voteCount:{movie.vote_count}
              </Text>
            </Card>
          );
        }}
      /> */}
      <Image
        source={{
          uri:
            "https://image.tmdb.org/t/p/w500/qq8xf2SQqHifUUyc0k6Hj1065f1.jpg",
        }}
        style={{ height: 200, width: 100, flex: 1 }}
      />
      <Text>
        {console.log("im here")}
        title : {movies.title} , popularity: {movies.popularity} , voteCount:
        {movies.vote_count}
      </Text>
    </View>
  );
}

import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { Text, Card, Thumbnail, View } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
// Styles
import { BoxItemText } from "./itemStyles";
// Components
import Nominate from "../buttons/Nominate";
import { Image } from "react-native";
import { FlatList } from "react-native";
import SelectedMovie from "./SelectedMovie";

//Stores
import movieStore from "../../stores/MovieStore";
//
const MovieItem = ({ movies }) => {
  // const randomMoviesList = [];
  // let result = [];

  // for (let i = 0; i < 5; i++) {
  //   result.push(Math.floor(Math.random() * movies.length));
  // }

  // result.forEach((element) => {
  //   randomMoviesList.push(movieStore.movies[element]);
  // });

  const [selected, setSelected] = useState(movieStore.randomMoviesList[0]);
  const handleSelect = (item) => {
    // console.log(selected.poster_path);
    setSelected(item);
  };

  return (
    <>
      <Text
        style={{
          color: "#aaa",
          marginHorizontal: 16,
          marginTop: 25,
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        Movies
      </Text>
      <View style={{ marginLeft: 15, marginRight: 15 }}>
        <FlatList
          horizontal
          keyExtractor={(item) => item.id.toString()}
          data={movieStore.randomMoviesList}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableOpacity onPress={() => handleSelect(item)}>
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                    }}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 12,
                      marginLeft: 0,
                      marginRight: 15,
                      marginTop: 10,
                      marginBottom: 10,
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>

      <SelectedMovie selected={selected} />
    </>
  );
};
export default observer(MovieItem);

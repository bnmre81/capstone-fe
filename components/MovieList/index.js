import React from "react";
import { observer } from "mobx-react";

// styles
import { BoxListContainer, BoxItemText } from "./itemStyles";
import { Text, Card, Spinner, Thumbnail, View } from "native-base";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// Stores
import movieStore from "../../stores/MovieStore";

// Components
import MovieItem from "./MovieItem";
import Nominate from "../buttons/Nominate";
import socketStore from "../../stores/SocketStore";

const MovieList = ({ navigation }) => {
  if (!movieStore.movies) return <Spinner />;

  const { movies } = movieStore;

  const handleNominate = (item) => {
    socketStore.nominate(item);
    navigation.navigate("NominatedList");
  };
  return (
    <BoxListContainer style={{ backgroundColor: "#222" }}>
      <MovieItem handleNominate={handleNominate} movies={movies} />
    </BoxListContainer>
  );
};
export default observer(MovieList);

{
  /* <FlatList
  horizontal
  keyExtractor={(item) => item.id.toString()}
  data={movies}
  renderItem={({ item }) => {
    return <MovieItem item={item} handleNominate={handleNominate} />;
  }}
/> */
}

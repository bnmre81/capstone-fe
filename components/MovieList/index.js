import React from "react";
import { observer } from "mobx-react";

// styles
import { BoxListContainer, BoxItemText } from "./itemStyles";
import { Text, Card, Spinner, Thumbnail } from "native-base";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// Stores
import movieStore from "../../stores/MovieStore";

// Components
import Nominate from "../buttons/Nominate";
import socketStore from "../../stores/SocketStore";

const MovieList = ({ navigation }) => {
  if (!movieStore.movies) return <Spinner />;

  const { movies } = movieStore;

  const handleNominate = (item) => {
    socketStore.nominate(item);
    navigation.replace("NominatedList");
  };
  return (
    <BoxListContainer>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={movies}
        renderItem={({ item }) => {
          // REVIEW: this should be in its own component
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
              <TouchableOpacity onPress={() => handleNominate(item)}>
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

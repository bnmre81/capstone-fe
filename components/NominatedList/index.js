import React from "react";
import { observer } from "mobx-react";
import Icon from "react-native-vector-icons/Feather";
// Styles
import {
  Text,
  Card,
  Thumbnail,
  Body,
  CardItem,
  ListItem,
  Left,
  View,
} from "native-base";
import { BoxListContainer } from "./styles";
import { FlatList } from "react-native";
import { BoxItemText } from "../MovieList/itemStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

// Stores
import socketStore from "../../stores/SocketStore";

const NominatedList = ({ navigation }) => {
  const handleUp = (movie) => {
    socketStore.vote(movie.id);
  };
  const handleDown = () => {
    return alert("Down vote");
  };

  const showResult = () => {
    socketStore.highestVote();
    navigation.navigate("Result");
  };
  return (
    <BoxListContainer>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={socketStore.nominatedMovies}
        renderItem={({ item }) => {
          return (
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                  }}
                />
              </Left>
              <Body>
                <BoxItemText>{item.title}</BoxItemText>
              </Body>
              <TouchableOpacity onPress={() => handleUp(item)}>
                <Icon name="thumbs-down" size={30} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDown}>
                <Icon name="thumbs-up" size={30} sytle={{ margin: 150 }} />
              </TouchableOpacity>
            </ListItem>
          );
        }}
      />
      <TouchableOpacity onPress={showResult}>
        <Icon name="airplay" size={30} sytle={{ margin: 150 }} />
      </TouchableOpacity>
    </BoxListContainer>
  );
};

export default observer(NominatedList);

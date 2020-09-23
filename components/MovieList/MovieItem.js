import React from "react";
import { observer } from "mobx-react";
import { Text, Card, Thumbnail } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
// Styles
import { BoxItemText } from "./itemStyles";
// Components
import Nominate from "../buttons/Nominate";

const MovieItem = ({ item, handleNominate }) => {
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
};
export default observer(MovieItem);

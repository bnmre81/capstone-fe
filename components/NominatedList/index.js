import React, { useState } from "react";
import movieStore from "../../stores/MovieStore";
import { observer } from "mobx-react";
// Styles
import {
  CarouselContainerView,
  CaruselText,
  CaruselImage,
  IconContainer,
} from "./styles";
import { Text, View } from "react-native";
import Carousel from "react-native-anchor-carousel";
import Icon from "react-native-vector-icons/Feather";
// Stores
import socketStore from "../../stores/SocketStore";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "native-base";

const NominatedList = ({ navigation }) => {
  const handleUp = (movie) => {
    socketStore.upVote(movie.id);
  };

  const handleDown = (movie) => {
    socketStore.downVote(movie.id);
  };

  const showResult = () => {
    socketStore.DoneVoting();
    navigation.navigate("WaitingResult");
  };

  return (
    <CarouselContainerView style={{ height: 600 }}>
      <Text>hello</Text>
      <Carousel
        sytle={{
          flex: 1,
          owverflow: "visible",
        }}
        data={socketStore.renderedNominated}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity onPress={() => handleUp(item)}>
                <CaruselImage
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                  }}
                />
                <CaruselText>{item.title}</CaruselText>
                <IconContainer>
                  <TouchableOpacity
                    style={{ marginHorizontal: 35 }}
                    onPress={() => handleDown(item)}
                  >
                    <Icon name="thumbs-down" size={30} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ marginHorizontal: 35 }}
                    onPress={() => handleUp(item)}
                  >
                    <Icon name="thumbs-up" size={30} color="white" />
                  </TouchableOpacity>
                </IconContainer>
              </TouchableOpacity>
            </View>
          );
        }}
        itemWidth={200}
        seperationWidth={0}
        inActiveOpacity={0.4}
      />
      <Button dark onPress={showResult}>
        <Text>Resultttttttt</Text>
      </Button>
    </CarouselContainerView>
  );
};

export default observer(NominatedList);

// data: socketStore.renderedNominated

// <BoxListContainer>
//   <FlatList
//     keyExtractor={(item) => item.id.toString()}
//     data={movieStore.movies}
//     renderItem={({ item }) => {
//       return (
//         <ListItem avatar>
//           <Left>
//             <Thumbnail
//               source={{
//                 uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
//               }}
//             />
//           </Left>
//           <Body>
//             <BoxItemText>{item.title}</BoxItemText>
//           </Body>
//           <TouchableOpacity onPress={() => handleUp(item)}>
//             <Icon name="thumbs-down" size={30} />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={handleDown}>
//             <Icon name="thumbs-up" size={30} sytle={{ margin: 150 }} />
//           </TouchableOpacity>
//         </ListItem>
//       );
//     }}
//   />
//   <TouchableOpacity onPress={showResult}>
//     <Icon name="airplay" size={30} sytle={{ margin: 150 }} />
//   </TouchableOpacity>
// </BoxListContainer>

import React from "react";
import movieStore from "../../stores/MovieStore";
import { observer } from "mobx-react";

// Styles
import {
  CarouselContainerView,
  CaruselText,
  CaruselImage,
  IconContainer,
  ResultBtn,
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
    <View style={{ backgroundColor: "#000" }}>
      <CarouselContainerView
        style={{ height: "100%", marginTop: 30, marginHorizontal: 20 }}
      >
        {socketStore.renderedNominated.length === 0 ? (
          <View style={{ height: "0%" }}>
            <ResultBtn onPress={showResult}>
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 20 }}
              >
                Show Result
              </Text>
            </ResultBtn>
          </View>
        ) : (
          <Carousel
            data={socketStore.renderedNominated}
            renderItem={({ item }) => {
              if (!item.poster_path) {
                return (
                  <View
                    style={{ width: 150, height: 200, backgroundColor: "red" }}
                  ></View>
                );
              }
              return (
                <View style={{ marginHorizontal: 0 }}>
                  <CaruselImage
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                    }}
                    style={{ borderColor: "#fff", borderWidth: 2 }}
                  />
                  <CaruselText>{item.title}</CaruselText>
                  <IconContainer>
                    <TouchableOpacity
                      style={{ marginHorizontal: 50, marginTop: 5 }}
                      onPress={() => handleDown(item)}
                    >
                      <Icon name="thumbs-down" size={30} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ marginHorizontal: 50 }}
                      onPress={() => handleUp(item)}
                    >
                      <Icon name="thumbs-up" size={30} color="#fff" />
                    </TouchableOpacity>
                  </IconContainer>
                </View>
              );
            }}
            itemWidth={270}
            seperationWidth={0}
            inActiveOpacity={0.3}
          />
        )}
      </CarouselContainerView>
    </View>
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

import React from "react";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { View, Text } from "react-native";
import { Image } from "react-native";
import socketStore from "../../stores/SocketStore";
import { useNavigation } from "@react-navigation/native";
const SelectedMovie = ({ selected }) => {
  console.log(selected.poster_path);

  const navigation = useNavigation();

  const handleNominate = (item) => {
    socketStore.nominate(item);
    navigation.navigate("NominatedList");
  };
  return (
    <View>
      <View>
        <TouchableOpacity
          onPress={() => handleNominate(selected)}
          style={{ backgroundColor: "#fff" }}
        >
          <Text
            style={{
              position: "absolute",
              color: "red",
              marginHorizontal: 10,
              marginTop: 10,
              left: 200,
              bottom: 0,
            }}
          >
            NOMINATE
          </Text>
        </TouchableOpacity>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${selected.poster_path}`,
          }}
          style={{
            position: "absolute",
            width: 300,
            height: 450,
            borderRadius: 11,
            shadowOffset: { width: 10, height: 10 },
            shadowColor: "white",
            shadowOpacity: 1.0,
            top: 150,
            right: 40,
          }}
        />

        <ScrollView
          style={{
            backgroundColor: "#000",
            opacity: 0.88,
            position: "absolute",
            width: 300,
            height: 130,
            borderRadius: 9,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            top: 470,
            right: 40,
          }}
        >
          <Text
            style={{
              color: "#fff",
              marginHorizontal: 10,
              marginTop: 10,
            }}
          >
            {selected.title}
          </Text>
          <TouchableOpacity
            onPress={() => handleNominate(selected)}
            style={{
              backgroundColor: "#04f",
              borderRadius: 5,
              width: 85,
              marginHorizontal: 10,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: "#fff",
                marginHorizontal: 10,
                marginTop: -1,
                fontWeight: "bold",
              }}
            >
              Nominate
            </Text>
          </TouchableOpacity>

          <Text style={{ color: "#fff", marginHorizontal: 10, marginTop: 7 }}>
            {selected.overview}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default SelectedMovie;

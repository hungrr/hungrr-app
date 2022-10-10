import Icon from "react-native-vector-icons/AntDesign";
import { StyleSheet, View } from "react-native";

import React from "react";
import Card, { Profile } from "./Card";

const cards: Profile[] = [
  {
    image: {
      uri: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg",
    },
    name: "McDonalds",
    description:
      "McDonald's Corporation is an American-based multinational fast food chain, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States.",
  },
];
// contain logic of getting next card handle swipe etc...
export default function CardContainer() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={styles.container}>
        <Card profile={cards[0]} />
      </View>
      <View style={styles.bottom}>
        <Icon name="close" size={30} color="red" />
        <Icon name="hearto" size={30} color="green" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    margin: 10,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  bottom: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
  },
});

import Icon from "react-native-vector-icons/AntDesign";
import { StyleSheet, View } from "react-native";

import React from "react";
import Card, { Profile } from "./Card";

const cards: Profile[] = [
  {
    image: {
      uri: "https://thumbs.dreamstime.com/b/outside-mcdonalds-store-38411658.jpg",
    },
    name: "McDonald's",
  },
];
// contain logic of getting next card handle swipe etc...
export default function CardContainer() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={styles.container}>
        <Card profile={cards[0]}/>
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

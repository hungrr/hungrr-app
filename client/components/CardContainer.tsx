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

const styles2 = StyleSheet.create({
  wrapper: {
      position: 'absolute',
      borderRadius: 10,
      left: 34,
      right: 32,
      top: 95,
      height: 450,
      width: 'auto',

  },
  card: {
      position: 'absolute',
      borderRadius: 10,
      left: 0,
      right: 0,
      height: 450,
      width: 'auto',
      overflow: 'hidden',
  },
  shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.7,
      shadowRadius: 8,
  },

})
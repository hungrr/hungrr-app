import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CardContainer from "../components/CardContainer";

export default function Home() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <CardContainer />
    </View>
  );
}

export const cards = [
  {
    title: "Lorem ipsum",
    photo: "https://picsum.photos/id/1/500",
  },
  {
    title: "Dolor sit amet",
    photo: "https://picsum.photos/id/2/500",
  },
  {
    title: "Consectetur adipiscing elit",
    photo: "https://picsum.photos/id/3/500",
  },
  {
    title: "Phasellus ultricies",
    photo: "https://picsum.photos/id/4/500",
  },
  {
    title: "Sed sit amet",
    photo: "https://picsum.photos/id/5/500",
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {},
  info: {},
  button: {},
});

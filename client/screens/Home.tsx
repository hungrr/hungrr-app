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


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {},
  info: {},
  button: {},
});

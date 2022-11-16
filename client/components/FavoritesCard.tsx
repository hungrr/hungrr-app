import React from "react";
import { StyleSheet, Image, Text } from "react-native";
import {
  VStack,
  Box,
  Center,
  NativeBaseProvider,
  ScrollView,
} from "native-base";

export default function FavoritesCard() {
  return (
    <Box style={styles.container}>
      <Box style={styles.picture}>
        <Image
          source={{
            uri: "https://thumbs.dreamstime.com/b/outside-mcdonalds-store-38411658.jpg",
          }}
          style={{ flex: 1, borderRadius: 10 }}
        />
      </Box>
      <Box style={styles.info}> 
        <Text style={styles.Description}>McDonald's</Text>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
  },
  picture: {
    flex: 1.5,
    backgroundColor: "transparent",
  },
  info: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  Description: {
    flex: 1,
    fontSize: 30,
    fontWeight: "bold",
    alignItems: "center",
  },
});

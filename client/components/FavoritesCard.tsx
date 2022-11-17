import React from "react";
import { StyleSheet, Image, Text } from "react-native";
import {
  VStack,
  Box,
  Center,
  NativeBaseProvider,
  ScrollView,
} from "native-base";
import { FavoritesCardProp } from "../Types and Interfaces/types";


export default function FavoritesCard(props:FavoritesCardProp){
  return (
    <Box style={styles.container}>
      <Box style={styles.picture}>
        <Image
          source={props.favorites.image}
          style={{ flex: 1, borderRadius: 10 }}
        />
      </Box>
      <Box style={styles.info}> 
        <Text style={styles.Description}>{props.favorites.name}</Text>
        <Text>{props.favorites.rating}</Text>
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
    flexDirection: 'row',
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  Description: {
    flex: 1,
    fontSize: 30,
    fontWeight: "bold",
    alignItems: "center",
  },
  rating: {
    
  }
});



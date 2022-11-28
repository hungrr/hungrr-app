import React from "react";
import { StyleSheet, Image, Text, ImageBackground } from "react-native";
import {
  VStack,
  Box,
  Center,
  NativeBaseProvider,
  ScrollView,
} from "native-base";
import { Profile } from "../Types and Interfaces/types";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function FavoritesCard(props:Profile){
  return (
    <Box style={styles.container}>
      <Box style={styles.picture}>
        <ImageBackground source={{uri: props.photoLink}} style={{ flex: 1 }}>
          <Text style={styles.rating}>{props.rating}</Text>
          <Ionicons style={styles.star} name={'star'} color={'gold'} size={13}/>
        </ImageBackground>
      </Box>
      <Box style={styles.info}> 
        <Text style={styles.Description}>{props.name}</Text>
        <Ionicons onPress={() => {
          // add remove logic here
        }} 
        name="close-outline" color={"red"} size={40}/>
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
    overflow: 'hidden',
    borderRadius: 10,
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
    top: 5,
    left: 6,
  },
  rating: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    top: 90,
    left: 300,
  },
  star: {
    top: 73,
    left: 330
  },
});



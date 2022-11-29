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
import { LinearGradient } from "expo-linear-gradient";

export default function FavoritesCard(props:Profile){
  return (
    <Box style={styles.container}>
      <Box style={styles.picture}>
        <ImageBackground source={{uri: props.photoLink}} style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'row' }}>
          <LinearGradient
          colors={['#00000000', '#000000']} 
          style={{height : '100%', width : '100%'}}>
            <Text style={styles.rating}>{props.rating}</Text>
            <Ionicons style={styles.star} name={'star'} color={'gold'} size={13}/>
          </LinearGradient>
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
    position: 'absolute',
    bottom: 10,
    right: 25
  },
  star: {
    position: 'absolute',
    bottom: 13,
    right: 10

  },
});



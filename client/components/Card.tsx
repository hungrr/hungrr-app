import React, { useState } from "react";
import {
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  Animated,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CardProps } from "../Types and Interfaces/types";
import Ionicons from 'react-native-vector-icons/Ionicons';




export default function Card(props: CardProps) {
  return (
    <ImageBackground
      resizeMode="cover"
      style={{
        flex: 1,
        margin: 5,
        borderRadius: 10,
        height: "auto",
        backgroundColor: "azure",
        overflow: "hidden",
      }}
      
      source={props.profile.image}
    >
      {/* Added a Linear Gradient*/}
      <LinearGradient
        colors={['#00000000', '#000000']} 
        style={{height : '100%', width : '100%'}}>
          {/* Moved text overlay inside gradient so you can see it */}
          <View style={styles.overlay}>
            <Text style={styles.name}>{props.profile.name}</Text>
            <Text style={styles.ratingValue}>{props.profile.rating}</Text>
            <Ionicons style={styles.ratingIcon} name={'star'} color={'gold'} size={15}/>
          </View>
      </LinearGradient>
      <Animated.View
        style={{
          ...styles.like,
          opacity: props.likeOpacity ?? 0,
        }}
      >
        <Text>Like</Text>
      </Animated.View>
      <Animated.View
        style={{
          ...styles.like,
          ...styles.dislike,
          opacity: props.dislikeOpacity ?? 0,
        }}
      >
        <Text>Nope</Text>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  like: {
    position: "absolute",
    top: 0,
    margin: 20,
    padding: 10,
    borderRadius: 5,
    left: 0,
    backgroundColor: "green",
  },
  dislike: {
    right: 0,
    left: undefined,
    backgroundColor: "red",
  },
  overlay: {
    flex: 1,
    flexDirection: 'row'
  },
  name: {
    color: "white",
    fontFamily: "lucida grande",
    fontWeight: "bold",
    fontSize: 24,
    position: "absolute",
    bottom: 60,
    left: 18,
  },
  ratingValue: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    position: "absolute",
    bottom: 60,
    right: 35
  },
  ratingIcon: {
    position: "absolute",
    bottom: 63, 
    right: 15
    
  }
});
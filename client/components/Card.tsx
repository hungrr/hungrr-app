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
import { Profile } from "../Types and Interfaces/types";
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Card(props:Profile) {

  const prices = () => {
    const $ = props.price_level
    let s = '';
    let count = 1
    while (count <= $)
    {
      s += '$'
      count += 1
    }
    return s
  }

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
      
      source={{uri: props.photoLink}}
    >
      {/* Added a Linear Gradient*/}
      <LinearGradient
        colors={['#00000000', '#000000']} 
        style={{height : '100%', width : '100%'}}>
          {/* Moved text overlay inside gradient so you can see it */}
          <View style={styles.overlay}>
            <View style={{flex: 0.8, justifyContent: 'center', height: '25%'}}>
              <Text style={styles.name}>{props.name}</Text>
            </View>
            <Text style={styles.ratingValue}>{props.rating}</Text>
            <Ionicons style={styles.ratingIcon} name={'star'} color={'gold'} size={15}/>
            <Text style={styles.price}>{prices()}</Text>
          </View>
      </LinearGradient>
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
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    position: 'absolute',
    bottom: 40,
    marginLeft: 10
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
  },
  price:{
    color: 'white',
    position: "absolute",
    bottom: 30,
    right: 15,
    fontSize: 16,
    fontWeight: 'bold'
  }
});

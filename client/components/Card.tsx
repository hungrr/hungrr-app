import React from "react";
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


export type Profile = {
  image: ImageSourcePropType;
  name: string;
  description?: string;
  address?: string;
  additionalDetails?: string[];
};

export type CardProps = {
  profile: Profile;
  likeOpacity?: number;
  dislikeOpacity?: number;
};

export default function Card(props: CardProps) {
  return (
    <ImageBackground
      resizeMode="cover"
      style={{
        flex: 1,
        margin: 10,
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
            <Text style={styles.text}>{props.profile.name}</Text>
            <Text style={styles.description}>{props.profile.description}</Text>
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
    justifyContent: "flex-end",
    padding: 16
  },
  text: {
    color: "white",
    fontFamily: "lucida grande",
    fontWeight: "bold",
    fontSize: 24,
  },
  description: {
    color: "darkslategray",
    opacity: 0.8,
  },
});

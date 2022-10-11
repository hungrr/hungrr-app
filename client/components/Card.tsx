import {
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  Animated,
  ImageBackground,
} from "react-native";

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
      resizeMode="contain"
      style={{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "azure",
        shadowOpacity: 0.6,
        shadowRadius: 10,
        shadowColor: "lightslategray",
        borderRadius: 20,
      }}
      source={props.profile.image}
    >
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
      <View style={styles.overlay}>
        <Text style={styles.text}>{props.profile.name}</Text>
        <Text style={styles.description}>{props.profile.description}</Text>
      </View>
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
    padding: 16,
  },
  text: {
    color: "black",
    fontFamily: "lucida grande",
    fontWeight: "bold",
    fontSize: 24,
  },
  description: {
    color: "darkslategray",
    opacity: 0.8,
  },
});


import {
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  Animated,
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
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "azure",
        shadowOpacity: 0.6,
        shadowRadius: 10,
        shadowColor: "lightslategray",
        borderRadius: 20,
      }}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={props.profile.image} />
      </View>
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
        <View style={styles.footer}>
          <Text style={styles.text}>{props.profile.name}</Text>
          <Text style={styles.description}>{props.profile.description}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "75%",
    aspectRatio: 1,
  },
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
  footer: {
    flexDirection: "column",
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

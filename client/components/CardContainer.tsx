import Icon from "react-native-vector-icons/AntDesign";
import { StyleSheet, View, Image } from "react-native";
import React from "react";
import Card from "./Card";
import sampleCards from "../sample data/sampleCards";
import CardsSwipe from "react-native-cards-swipe";


// contain logic of getting next card handle swipe etc...
export default function CardContainer() {
  return ( 
    <View style={StyleSheet.absoluteFill}>
      {/* <View style={styles.container}>
        <Card profile={sampleCards[0]}/>
      </View> */}
      {/* Testing out cardswipe it's working*/}
      <CardsSwipe
        cards={sampleCards}
        cardContainerStyle={styles.container}
        renderCard={(card) => (
          <View style={styles.card}>
            <Card profile={card}/>
          </View>
        )}
      />
      <View style={styles.bottom}>
        <Icon name="close" size={30} color="red" />
        <Icon name="hearto" size={30} color="green" />
      </View>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    width: '92%',
    height: '100%',
    flex: 10,
    top: 20
  },
  bottom: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 0.2,
  },
  card: {
    width: 360,
    height: 400,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.07,
    shadowRadius: 3.3,
    flex: 1
    
  },
  cardImg: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

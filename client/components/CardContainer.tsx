import Icon from "react-native-vector-icons/AntDesign";
import { StyleSheet, View, Image, Text } from "react-native";
import React, {useRef} from "react";
import Card from "./Card";
import sampleCards from "../sample data/sampleCards";
import CardsSwipe, { SWIPE_DIRECTION } from "react-native-cards-swipe";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

// contain logic of getting next card handle swipe etc...
export default function CardContainer() {
  const swiper = useRef<CardsSwipeRefObject>(null);
  const [ places, setPlaces ] = useState([  ]);

  useEffect(async () => {

    const location = await AsyncStorage.getItem("location") || "";
    const phoneNumber = await AsyncStorage.getItem("phoneNumber");

    const data = await axios.get("http://localhost:3000/api/places/getPlaces").then((res) => {
      setPlaces(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [  ]);

  return ( 
    <View style={StyleSheet.absoluteFill}>
      {/* Testing out cardswipe it's working*/}
      <CardsSwipe
        ref={swiper}
        cards={sampleCards}
        cardContainerStyle={styles.container}
        renderCard={(card:any) => (
          <View style={styles.card}>
            <Card profile={card}/>
          </View>
        )}
        renderYep={() => (
          <View style={styles.like}>
            <Text style={styles.likeLabel}>YES</Text>
          </View>
        )}
        renderNope={() => (
          <View style={styles.nope}>
            <Text style={styles.nopeLabel}>NOPE</Text>
          </View>
        )}
        
      />
      <View style={styles.bottom}>
        <Icon onPress={() => {
          if (swiper.current) swiper.current.swipeLeft();
        }} 
        name="close" 
        size={30} 
        color="red" />

        <Icon onPress={() => {
          if (swiper.current) swiper.current.swipeRight();
        }} 
        name="hearto" 
        size={30} 
        color="green" />
        
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
  like: {
    borderWidth: 5,
    borderRadius: 6,
    padding: 8,
    marginLeft: 30,
    marginTop: 20,
    borderColor: '#2CE71E',
    transform: [{ rotateZ: '-22deg' }],
  },
  likeLabel: {
    fontSize: 32,
    color: '#2CE71E',
    fontWeight: 'bold',
  },
  nope: {
    borderWidth: 5,
    borderRadius: 6,
    padding: 8,
    marginRight: 30,
    marginTop: 25,
    borderColor: 'red',
    transform: [{ rotateZ: '22deg' }],
  },
  nopeLabel: {
    fontSize: 32,
    color: 'red',
    fontWeight: 'bold',
  },
});

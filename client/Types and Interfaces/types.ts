/*

This file stores prop / component types across the application. Previously stored in component files, this makes a "global" store of types

*/
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
    photoLink: string;
    vicinity: string;
    business_status: string;
    name: string;
    place_id: string;
    price_level: number;
    rating: number;
    user_ratings_total: number;
};





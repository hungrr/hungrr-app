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
    image: ImageSourcePropType;
    name: string;
    rating: number;
    price: number;
};

export type CardProps = {
    profile: Profile;
    likeOpacity?: number;
    dislikeOpacity?: number;
};

export type FavoriteRestaurant = {
    image: ImageSourcePropType;
    name: string;
    rating: number;
};

export type FavoritesCardProp ={
    favorites: FavoriteRestaurant;
}

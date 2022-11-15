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
    description?: string;
    address?: string;
    additionalDetails?: string[];
};

export type CardProps = {
    profile: Profile;
    likeOpacity?: number;
    dislikeOpacity?: number;
};
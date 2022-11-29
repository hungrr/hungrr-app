import React, { useEffect, useState } from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import { VStack, Box, Center, NativeBaseProvider, ScrollView } from 'native-base';
import FavoritesCard from '../components/FavoritesCard';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Profile } from '../Types and Interfaces/types';

export default function Favorites({ setFavorites, favorites }:any) {

    const hash = (n=10) => {
        let s = "";
        while (s.length < n)
            s += `${Math.floor(Math.random()*10)}`
        return s;
    }

    const deleteFavorite = async (card:Profile) => {
        const phoneNumber = await AsyncStorage.getItem("phoneNumber");

        const data = await axios.post("http://localhost:3000/api/user/removeFavorite", {
            phoneNumber, deleteFavorite: card
        }).then((r) => {
            console.log(`Deleted card of restaurant ${card.name}`);
            setFavorites(favorites.filter((r:Profile) => r.place_id === card.place_id));
        })
    }

    return (
        <NativeBaseProvider>
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', padding: 25 }}>
                {
                    (
                        favorites.length === 0 ?
                            <Text>
                                No favorites... start swiping!
                            </Text>
                        :
                        favorites.map((card:Profile) => <FavoritesCard key={hash()} props={card} deleteFavorite={deleteFavorite} />)
                    )
                }
            </ScrollView>
        </NativeBaseProvider>
    )
}


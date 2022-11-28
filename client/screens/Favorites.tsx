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
                        favorites.map((card:Profile) => <FavoritesCard key={hash()} {...card} />)
                    )
                }
            </ScrollView>
        </NativeBaseProvider>
    )
}


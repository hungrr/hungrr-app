import React from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import { VStack, Box, Center, NativeBaseProvider, ScrollView } from 'native-base';
import { sampleFavorites } from '../sample data/sampleCards';
import FavoritesCard from '../components/FavoritesCard';

export default function Favorites() {
    return (
        <NativeBaseProvider>
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', padding: 25 }}>
                <FavoritesCard favorites={sampleFavorites[0]} />
            </ScrollView>
        </NativeBaseProvider>
    )
}


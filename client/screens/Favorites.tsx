import React, { useEffect, useState } from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import { VStack, Box, Center, NativeBaseProvider, ScrollView } from 'native-base';
import FavoritesCard from '../components/FavoritesCard';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Profile } from '../Types and Interfaces/types';

export default function Favorites({ setFavorites, favorites }:any) {

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
                        favorites.map((card:Profile) => <FavoritesCard {...card} />)
                    )
                }
            </ScrollView>
        </NativeBaseProvider>
    )
}


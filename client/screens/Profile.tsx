import { View, Text, Button, Pressable, Alert, StyleSheet, Image } from 'react-native';
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Press } from 'hammerjs';

export default function Profile({ name, phoneNumber }:{ name:string, phoneNumber:string }) {
    
    const logOut = async () => {

    };

    const createPopupDeleteProfile = () => Alert.alert(
        "Delete profile",
        "Are you sure you want to?",
        [
            {
                text: "Just do it",
                onPress: () => {

                }
            },
            {
                text: "Don't do it",
                style: "cancel",
                onPress: () => {
                    logOut();
                    console.log("logging out...");
                }
            }
        ]
    );
    
    return (
        <View style={styles.container}>
            {/* <Ionicons style={styles.icon} name="person-circle-sharp" /> */}
            <View style={styles.topButtons}>
                <Pressable style={styles.delete}>
                    <Button color='black' title="Delete profile" onPress={() => {
                        createPopupDeleteProfile();
                    }} />
                </Pressable>
                <Pressable style={styles.logout}>
                    <Button color="black" title="Logout"/>
                </Pressable>
            </View>
            <View style={styles.infoContainer}>
                <Image style={styles.icon} source={require('../assets/images/profileIcon.png')}/>
                <Text style={styles.name}>Khoi Vu</Text>
                <Text style={styles.phone}>phone</Text>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 30,
        bottom: 200
    },
    phone:{
        fontSize: 18,
        bottom: 200
    },
    icon: {
        // transform: [{scale: 0.04}],
        // bottom: 150,
        flex: 0.5,
        resizeMode: 'contain',
        transform: [{scale: 0.2}],
        bottom: 100
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    delete:{
        width: '40%',
        height: 'auto',
        backgroundColor: '#FFCDAA',
        margin: 10,
        borderRadius: 10,
        transform: [{scale: 0.7}],
        right: 99,
    },
    logout:{
        backgroundColor: '#FFCDAA',
        borderRadius: 10,
        transform: [{scale: 0.7}],
        left: 65
    },
    topButtons: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
    
})
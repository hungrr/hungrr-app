import { View, Text, Button, Pressable, Alert, StyleSheet, Image, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Profile({ loginState, setLoginState }:any) {
    
    const [ n, setN ] = useState<string>("");
    const [ pn, setPN ] = useState<string>("");

    useEffect(() => {
        (async () => {
            const name = await AsyncStorage.getItem("name") || "";
            const phoneNumber = await AsyncStorage.getItem("phoneNumber") || "";

            setN(name);
            setPN(phoneNumber);
        })();
    }, [])

    const setInitial = () => n.length === 0 ? "" : n[0].toUpperCase(); 
    const formatPhoneNumber = () => `(${pn.slice(0,3)})-${pn.slice(3,6)}-${pn.slice(6,10)}`

    const logOut = async () => {
        try {
            await AsyncStorage.removeItem("loggedIn");
            await AsyncStorage.removeItem("phoneNumber");
            await AsyncStorage.removeItem("name");
            setLoginState({ ...loginState, loginView: -1 });
            window.location.replace(window.location.pathname);
        } catch(err) {
            console.log(`Error logging out: ${err}`);
        }
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
                    location.reload();
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
                    <Button color="black" title="Logout" onPress={() => {
                        logOut();
                    }}/>
                </Pressable>
            </View>
            <View style={styles.infoContainer}>
                {/* <Image style={styles.icon} source={require('../assets/images/profileIcon.png')}/> */}
                <View style={styles.initials}>
                    <Text style={styles.initialsText}>{setInitial()}</Text>
                </View>
                <Text style={styles.name}>{ n }</Text>
                <Text style={styles.phone}>{ formatPhoneNumber() }</Text>
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
        bottom: 250,
        margin: 5,
        position: 'absolute'
    },
    phone:{
        fontSize: 20,
        bottom: 220,
        margin: 5,
        position: 'absolute'
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
        width: '100%',

    },
    delete:{
        width: '40%',
        height: 'auto',
        backgroundColor: '#FFCDAA',
        borderRadius: 10,
        transform: [{scale: 0.7}],
    },
    logout:{
        backgroundColor: '#FFCDAA',
        borderRadius: 10,
        transform: [{scale: 0.7}],
        width: '40%'

    },
    topButtons: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        flex: 1
    },
    initials: {
        backgroundColor: '#FFCDAA',
        width: 150,
        height: 150,
        borderRadius: 150/2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 300
    },
    initialsText: {
        fontSize: 50,
        fontWeight: 'bold'
    },
    editProfile: {
        backgroundColor: '#FFCDAA',
        borderRadius: 10,
        bottom: 140
    },
    textbox: {
        borderWidth: 1,
        width: '50%',
        height: 40,
        borderRadius: 10,
        bottom: 90

    }
    
})
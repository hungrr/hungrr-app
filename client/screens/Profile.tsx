import { View, Text, Button, Pressable, Alert, StyleSheet, Image, TextInput } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Profile({ loginState, setLoginState }:any) {
    
    const nameInitials = () => {
        let name:string = 'Khoi Vu'
        let initial:string = name[0]
        return initial
    }

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
                    <Text style={styles.initialsText}>{nameInitials()}</Text>
                </View>
                <Text style={styles.name}>Khoi Vu</Text>
                <Text style={styles.phone}>phone</Text>
                <Pressable style={styles.editProfile}>
                    <Button color="black" title="Edit Profile"/>
                </Pressable>
                <TextInput style={styles.textbox} value='  Edit Name' returnKeyType='done'/>
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
        bottom: 150,

    },
    phone:{
        fontSize: 18,
        bottom: 150,

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
    },
    initials: {
        backgroundColor: '#FFCDAA',
        width: 110,
        height: 110,
        borderRadius: 110/2,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 165,
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
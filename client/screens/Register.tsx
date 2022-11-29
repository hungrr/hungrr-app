import React, { useState, useEffect }  from "react";
import { View, Text, TextInput, Pressable, Button, StyleSheet, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

export default ({ setLoginState, loginState }:any) => {

    const registerUser = async () => {

        const data = await axios.post("http://localhost:3000/api/user/newUser", {
            phoneNumber: loginState.phoneNumber,
            name: loginState.name
        }).then((response:any) => {
            console.log(response.data);
            setLoginState({ ...loginState, loginView: 0 });
        });

        await AsyncStorage.setItem("loggedIn", "true");
        await AsyncStorage.setItem("name", loginState.name);
        await AsyncStorage.setItem("phoneNumber", loginState.phoneNumber);
        
    };

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Pressable style={styles.login}>
                    <Button color='black' title="Login" onPress={() => {
                        setLoginState({ ...loginState, loginView: -1 })
                    }} />
                </Pressable>
            </View>


            <View style={styles.inputContainer}>
                <Text style={styles.registerText}>Register</Text>
                <TextInput style={styles.nameInput} placeholder="     Enter Name" onChangeText={(text:string) => setLoginState({ ...loginState, name: text })} value={loginState.name} />
                <TextInput style={styles.numberInput} placeholder="     Enter Phone Number" onChangeText={(text:string) => setLoginState({ ...loginState, phoneNumber: text })} value={loginState.phoneNumber} />
                <Pressable style={styles.submit}>
                    <Button color='black' title="Submit" onPress={() => {
                        registerUser();
                    }} />
                </Pressable>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EE8980',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    submit: {
        width: '20%'
    },
    login: {
        width: '20%',
        margin: 10,
    },
    loginContainer: {
        flex: 0.1,
        width: '100%',  
        
    },
    registerText: {
        fontSize: 30,
        fontWeight: 'bold',

    },
    inputContainer: {
        flex: 0.8,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameInput: {
        backgroundColor: 'white',
        width: '50%',
        margin: 10,
        borderRadius: 10,
        padding: 10
    },
    numberInput: {
        backgroundColor: 'white',
        width: '50%',
        margin: 10,
        borderRadius: 10,
        padding: 10
    }
    
})
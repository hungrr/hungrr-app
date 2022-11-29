import React, { useState, useEffect }  from "react";
import { View, Text, TextInput, Pressable, Button } from "react-native";
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
        <View>
            <Pressable>
                <Button title="Login" onPress={() => {
                    setLoginState({ ...loginState, loginView: -1 })
                }} />
            </Pressable>
            <Text>Register</Text>
            <View>
                <TextInput placeholder="Enter Name" onChangeText={(text:string) => setLoginState({ ...loginState, name: text })} value={loginState.name} />
                <TextInput placeholder="Enter Phone Number" onChangeText={(text:string) => setLoginState({ ...loginState, phoneNumber: text })} value={loginState.phoneNumber} />
                <Pressable>
                    <Button title="Submit" onPress={() => {
                        registerUser();
                    }} />
                </Pressable>
            </View>
        </View>
    );

};

const styles = {

};
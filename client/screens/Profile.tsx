import { View, Text, Button, Pressable, Alert } from 'react-native';
import React from 'react'

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
        <View>
            <Text>{name}</Text>
            <Text>{phoneNumber}</Text>
            <Pressable>
                <Button onPress={() => {

                }}>
                    Delete Profile
                </Button>
            </Pressable>
        </View>
    )
}

const styles = {

};
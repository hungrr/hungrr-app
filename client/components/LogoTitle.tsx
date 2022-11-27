import React from "react";
import { Image, View, StyleSheet } from "react-native";

const LogoTitle = () => {
    return(
        <Image  
            source={require('../assets/images/logo.png')}
            style={styles.logo}
        />

    );
};

const styles = StyleSheet.create({
    logo: {
        resizeMode: 'contain',
        transform: [{ scale: 0.65 }] 
        
    }
})


export default LogoTitle;
import React from "react";
import { Image, StyleSheet } from "react-native";

const LogoTitle = () => {
    return(
        <Image 
            style={styles.logo} 
            source={require('../assets/images/logo.png')}
        />
    );
};

const styles = StyleSheet.create({
    logo: {
        resizeMode: 'contain',
        transform: [{scale: 0.65}]  
    }
});

export default LogoTitle;
import React, { useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Login from './screens/Login';
import Navigation from "./navigation/MainContainer";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {

  const [ loginState, setLoginState ] = useState({
    attemptedLogin: false,
    loggedIn: false,
    loginView: -1,
    phoneNumber: "",
    name: ""
  });

  useEffect(async () => {
    try {

      const isLoggedIn = await AsyncStorage.getItem("loggedIn");
      if (isLoggedIn !== null) {
        setLoginState({ ...loginState, loginView: 1 });
      } else {
        setLoginState({ ...loginState, loginView: -1 });
      }
    } catch(err) {
      console.log("There has been an error checking logged in status");
    }
  }, [  ]);

  return (
    <SafeAreaProvider>
      {
        loginState.loginView !== 1 ?
        <Login { ...{loginState, setLoginState} } />
        :
        <Navigation />
      }
    </SafeAreaProvider>
  );
}



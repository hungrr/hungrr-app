import React, { useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Login from './screens/Login';
import Navigation from "./navigation/MainContainer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Register from './screens/Register';


export default function App() {

  const [ loginState, setLoginState ] = useState({
    attemptedLogin: false,
    loggedIn: false,
    loginView: -1,
    registerView: false,
    phoneNumber: "",
    name: ""
  });

  useEffect(() => {

    (async () => {
    try {

      const isLoggedIn = await AsyncStorage.getItem("loggedIn");

      if (isLoggedIn !== null) {

        const phoneNumber = (await AsyncStorage.getItem("phoneNumber")) || "UNDEFINED";
        const name = (await AsyncStorage.getItem("name")) || "UNDEFINED";

        setLoginState({ ...loginState, loginView: 1, phoneNumber, name });

      } else {
        setLoginState({ ...loginState, loginView: -1 });
      }
    } catch(err) {
      console.log("There has been an error checking logged in status");
    }
    })();
  }, [ loginState.loggedIn ]);

  return (
    <SafeAreaProvider>
      {
        loginState.loginView !== 1 ?
          (
            loginState.loginView !== -2 ?
            <Login { ...{loginState, setLoginState} } />
            :
            <Register { ...{loginState, setLoginState} } />
          )
        :
        <Navigation { ...{loginState, setLoginState} } />
      }
    </SafeAreaProvider>
  );
}



import React, { useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Login from './screens/Login';
import Navigation from "./navigation/MainContainer";



export default function App() {

  const [ loginState, setLoginState ] = useState({
    attemptedLogin: false,
    loggedIn: false,
    loginView: -1
  });

  useEffect(() => {

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



import React, { useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Login from './screens/Login';
import Navigation from "./navigation/MainContainer";



export default function App() {

  const [ loginState, setLoginState ] = useState({
    attemptedLogin: false,
    loggedIn: false
  });

  useEffect(() => {

  }, [  ]);

  return (
    <SafeAreaProvider>
      {/* <Navigation />
      <StatusBar /> */}
      <Login/>
    </SafeAreaProvider>
  );
}



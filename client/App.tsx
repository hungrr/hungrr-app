import React from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Login from './screens/Login';
import Navigation from "./navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <Navigation />
      <StatusBar /> */}
      <Login/>
    </SafeAreaProvider>
  );
}



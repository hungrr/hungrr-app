import Icon from "react-native-vector-icons/AntDesign";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Hungrr",
            headerRight: (props) => (
              <Icon
                name="setting"
                size={24}
                style={{ marginRight: 20 }}
                color="rgb(70,70,70)"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

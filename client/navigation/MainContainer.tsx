import * as React from 'react';
import { Image, StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

// import screens 
import HomeScreen from '../screens/Home'
import FavoritesScreen from '../screens/Favorites'
import SettingsScreen from '../screens/Settings'
import ProfileScreen from '../screens/Profile'
import LogoTitle from '../components/LogoTitle';

// Screen Names
const homeName = 'Home';
const favoritesName = 'Favorites';
const profileName = 'Profile';
const Tab = createBottomTabNavigator();

const MainContainer = () =>
{
    return (
        <>
            <NavigationContainer >
                <Tab.Navigator
                    initialRouteName={homeName}
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, size }) => {
                            let iconName = 'home';
                            let rn = route.name;
                            let iconColor = 'white';
                            if (rn === homeName) {
                                iconName = focused ? 'home' : 'home-outline';
                                iconColor = focused ? '#F8D49B' : 'white'; 
                            }
                            else if (rn === favoritesName) {
                                iconName = focused ? 'list' : 'list-outline';
                                iconColor = focused ? '#F8D49B' : 'white';
                            }
                            else if (rn === profileName)
                            {
                                iconName = focused ? 'person-circle' : 'person-circle-outline';
                                iconColor = focused ? '#F8D49B' : 'white';
                            }
                            return <Ionicons name={iconName} size={size} color={iconColor} />;
                        },
                        headerStyle:{
                            backgroundColor: '#EE8980',
                            borderRadius: 10,
                            height: 110
                        },
                        tabBarStyle: {
                            backgroundColor: '#EE8980',
                            borderRadius: 10,
                            height: 90,
                        },
                        headerTitleStyle: {
                            color: 'white'
                        },
                    })}>
                    <Tab.Screen name={homeName} component={HomeScreen} options={{headerTitle: (props: any) => <LogoTitle {...props}/>, tabBarActiveTintColor: '#F8D49B', tabBarInactiveTintColor: 'white'}} />
                    <Tab.Screen name={favoritesName} component={FavoritesScreen} options={{tabBarActiveTintColor: '#F8D49B', tabBarInactiveTintColor: 'white'}}/>
                    <Tab.Screen name={profileName} component={ProfileScreen} options={{tabBarActiveTintColor: '#F8D49B', tabBarInactiveTintColor: 'white'}}/>
                </Tab.Navigator>
                
            </NavigationContainer>
        </>
    )
}

const styles = StyleSheet.create({
    logo: {
        resizeMode: 'contain',
        height: '210%'
    },
})


export default MainContainer;

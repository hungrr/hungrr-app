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
const settingsName = 'Settings';
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
                                iconColor = focused ? '#74C7B8' : 'white'; 
                            }
                            else if (rn === favoritesName) {
                                iconName = focused ? 'list' : 'list-outline';
                                iconColor = focused ? '#74C7B8' : 'white';
                            }
                            else if (rn === settingsName) {
                                iconName = focused ? 'settings' : 'settings-outline';
                                iconColor = focused ? '#74C7B8' : 'white';
                            }
                            else if (rn === profileName)
                            {
                                iconName = focused ? 'person-circle' : 'person-circle-outline';
                                iconColor = focused ? '#74C7B8' : 'white';
                            }
                            return <Ionicons name={iconName} size={size} color={iconColor} />;
                        },
                        headerStyle:{
                            backgroundColor: '#EE9595',
                            borderRadius: 10,
                            height: 110
                        },
                        tabBarStyle: {
                            backgroundColor: '#EE9595',
                            borderRadius: 10,
                            height: 90,
                        },
                        headerTitleStyle: {
                            color: 'white'
                        },
                    })}>
                    <Tab.Screen name={homeName} component={HomeScreen} options={{headerTitle: (props: any) => <LogoTitle {...props} style={styles.logo}/>, tabBarActiveTintColor: '#74C7B8', tabBarInactiveTintColor: 'white'}} />
                    <Tab.Screen name={favoritesName} component={FavoritesScreen} options={{tabBarActiveTintColor: '#74C7B8', tabBarInactiveTintColor: 'white'}}/>
                    <Tab.Screen name={settingsName} component={SettingsScreen} options={{tabBarActiveTintColor: '#74C7B8', tabBarInactiveTintColor: 'white'}}/>
                    <Tab.Screen name={profileName} component={ProfileScreen} options={{tabBarActiveTintColor: '#74C7B8', tabBarInactiveTintColor: 'white'}}/>
                </Tab.Navigator>
                
            </NavigationContainer>
        </>
    )
}

const styles = StyleSheet.create({
    logo: {
        resizeMode: 'contain',
        transform: [{scale: 0.65}]
    }
})


export default MainContainer;

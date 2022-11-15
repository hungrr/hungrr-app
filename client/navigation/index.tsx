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

// Screen Names
const homeName = 'Home';
const favoritesName = 'Favorites';
const settingsName = 'Settings';
const profileName = 'Profile';
const Tab = createBottomTabNavigator();



const LogoTitle = () =>
{
    return(
        <Image 
            style={styles.logo} 
            source={require('../assets/images/logo.png')}
        />
    );
}

const MainContainer = () =>
{
    return (
        <>
            <NavigationContainer >
                <Tab.Navigator
                    initialRouteName={homeName}
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName = 'home';
                            let rn = route.name;
                            if (rn === homeName) {
                                iconName = focused ? 'home' : 'home-outline';
                            }
                            else if (rn === favoritesName) {
                                iconName = focused ? 'list' : 'list-outline';
                            }
                            else if (rn === settingsName) {
                                iconName = focused ? 'settings' : 'settings-outline';
                            }
                            else if (rn === profileName)
                            {
                                iconName = focused ? 'person-circle' : 'person-circle-outline';
                            }
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        headerStyle:{
                            backgroundColor: '#F2DEBA',
                            borderRadius: 10,
                            height: 110
                        },
                        tabBarStyle: {
                            backgroundColor: '#F2DEBA',
                            borderRadius: 10,
                            height: 90
                        },
                        headerTitleStyle: {
                            color: 'white'
                        },

                    })}>
                    <Tab.Screen name={homeName} component={HomeScreen} options={{headerTitle: (props: any) => <LogoTitle {...props}/>}} />
                    <Tab.Screen name={favoritesName} component={FavoritesScreen} />
                    <Tab.Screen name={settingsName} component={SettingsScreen} />
                    <Tab.Screen name={profileName} component={ProfileScreen} />
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

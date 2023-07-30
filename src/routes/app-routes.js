import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { colors } from '../assects/colors';
import fonts from '../assects/fonts';
import routes from './routes';
import CustomTabBar from './tab-bar';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/Home';
import VideosScreen from '../screens/Videos';
import SearchScreen from '../screens/Search';
import NewsDetails from '../screens/Home/newsDetails';
import { Easing } from 'react-native-reanimated';
import SettingsScreen from '../screens/Settings';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const tabBarOptions = (icon, activeIcon, navigation) => {
    const isFocused = navigation?.isFocused();
    return ({
        unmountOnBlur: true,
        tabBarIcon:  !isFocused ? activeIcon : icon,
       
    
    })
}

const openTiming = {
    animation: 'timing',
    config: {
      duration: 10,
      easing: Easing.linear,
    }
}
const closeTiming = {
    animation: 'timing',
    config: {
      duration: 100,
      easing: Easing.linear,
    }
}



 function HomeStack(){
    return(
        <Stack.Navigator  screenOptions={{ headerShown: false,transitionSpec:{ open: openTiming,close:closeTiming}}} >
            <Stack.Screen name={routes?.home} component={HomeScreen}  />
            <Stack.Screen name={routes?.newsDetails} component={NewsDetails}  />
            <Stack.Screen name={routes?.settings} component={SettingsScreen}  />

        </Stack.Navigator>
    )
 }
 function VideoStack(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false,}} >
            <Stack.Screen name={routes?.search} component={VideosScreen} />
        </Stack.Navigator>
    )
 }

 function SearchStack(){
    return(
        <Stack.Navigator  screenOptions={{ headerShown: false,}} >
            <Stack.Screen name={routes?.search} component={SearchScreen} />
            <Stack.Screen name={routes?.newsDetails} component={NewsDetails}  />

        </Stack.Navigator>
    )
 }


const AppNavigation = () => {
    return (
        <Tab.Navigator   
        initialRouteName={routes.profile}  
        screenOptions={{ headerShown: false,}}  

        tabBar={props => <CustomTabBar  visibleText={true}  {...props} />}
        
        >
            <Tab.Screen 
            name={routes?.homeStack} 
            component={HomeStack} 
            options={({ navigation }) => tabBarOptions('home' , 'home-outline', navigation)} 

             />
            <Tab.Screen 
            name={routes?.videosStack}
            component={VideoStack} 
            
            options={({ navigation }) => tabBarOptions('play-circle' , 'play-circle-outline' , navigation)} 

            />
            <Tab.Screen 
            name={routes?.searchStack}
            component={SearchStack} 
            options={({ navigation }) => tabBarOptions('magnify' , 'magnify', navigation)} 

            />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    activeTabTitle: { color: colors.white, fontFamily: fonts.PoppinsRegular, fontSize: 11, marginBottom: -5 }
})

export default AppNavigation;
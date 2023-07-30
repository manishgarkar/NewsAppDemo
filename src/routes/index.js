import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, Vibration, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../assects/colors';
import AppNavigation from './app-routes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const Routes = () => {
    const { user } = useSelector(state => state.userDetails );
    const dispatch = useDispatch();
    const insets = useSafeAreaInsets();

    function StatusBarTransculet(){
        return(
            <View style={{ height: insets.top, backgroundColor: colors.primaryColor }} >
            <StatusBar showHideTransition='fade' backgroundColor={colors.primaryColor} barStyle="light-content" />
        </View>
        )
    }
    return (
        <View style={{flex:1}} >
            <StatusBarTransculet/>
            <NavigationContainer  >
                <AppNavigation /> 
            </NavigationContainer>
        </View>
    )
}
export default Routes;      
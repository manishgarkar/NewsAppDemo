import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Vibration ,Alert,Text, TouchableHighlight, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../assects/colors';
import { iosOpacity, routesToExcluedNavBar, width } from '../assects/strings';

import fonts from '../assects/fonts';
import routes from './routes';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomTabBar = ({ state, descriptors, navigation, isGuest,visibleText }) => {
    const dispatch = useDispatch();
   
    let activeStackState = state.routes[state.index].state;
    let routeName = state.routes[state.index].name;

  const tabBarVisible = activeStackState?.routes[activeStackState.index]?.name == undefined ? routesToExcluedNavBar.includes(state.routes[state.index].name) : routesToExcluedNavBar.includes(activeStackState?.routes[activeStackState.index]?.name);

console.log("state.routes[state.index].name",state.routes[state.index].name)

    const Logout = async() => {
        
    }

   
// 



    return !tabBarVisible ? (
        <View style={[state.routes[state.index].name==routes?.videosStack? styles?.forTransparentTab:styles?.normalTab,iosOpacity]}  >
            {state.routes.map((route, index) => {

                const { options } = descriptors[route.key];
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({ type: 'tabPress', target: route.key, });
                   
                        if (!isFocused && !event.defaultPrevented) navigation.navigate(route.name);
                };


                return (
                    <Pressable
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        key={index}
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        style={{alignItems:"center",width:width/3}}
                    >
                        <>
                        <View style={{ width:  width / 14, height: width / 14, alignItems: "center" }}  >
                            <Icon name={options?.tabBarIcon} color={isFocused || routeName==routes?.videos?colors.white:colors.c777} size={width/16} />
                            {/* {options.tabBarIcon({ options})} */}

                        </View>
                        {visibleText ?<Text style={{color:isFocused || routeName==routes?.videos?colors.white:colors.c777,fontFamily:fonts.PoppinsBold, fontSize: 10 }} >{route?.name}</Text>: null}
                        </>
                    </Pressable>
                );
            })}
        </View>
    ) : null

    
}

const styles = StyleSheet.create({
    container: { position: 'absolute', bottom: 20, backgroundColor: "red", flexDirection: 'row', width: width, height: 45, borderRadius: 50, justifyContent: "center", alignItems: "center", alignSelf: 'center' },
    forTransparentTab:{width: width, height: width / 7,borderTopColor:colors?.primaryColor,flexDirection: "row",alignItems: "center", justifyContent: "space-around",backgroundColor:"transparent", position: 'absolute', borderTopWidth: 1, bottom:0,elevation: 0},
    normalTab:{ width: width, height: width / 7, flexDirection: "row", alignItems: "center", justifyContent: "space-around", backgroundColor:colors.primaryColor}
})

export default CustomTabBar
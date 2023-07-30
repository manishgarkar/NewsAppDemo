import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Modal, ActivityIndicator, Pressable, ImageBackground } from 'react-native';
import { colors } from '../assects/colors';
import { width } from '../assects/strings';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import fonts from '../assects/fonts';
import LinearGradient from 'react-native-linear-gradient';
import { showMessage } from 'react-native-flash-message';
import { toneopimages } from '../assects/Images/Toneop';
import { useNavigation } from '@react-navigation/native';


export function CustomeHeader({onPressSettings,onPressBell}){
    return(
    <View style={{width:width,height:width/7,flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:10}} >
        <Image style={{width:width/8,height:width/8,resizeMode:"contain"}} source={toneopimages?.splash} />
        <View style={{flexDirection:"row",alignItems:"center"}}  >
            <Icon onPress={onPressBell} name="bell-outline" size={width/16} color={colors?.white} style={{marginHorizontal:20}} />
            <Icon onPress={onPressSettings} name="cog" size={width/16} color={colors?.white} />
        </View>
    </View>
    )
}

export function CustomeHeaderTitle({title}){
    const navigation = useNavigation();
    return(
    <View style={{width:width,height:width/8,flexDirection:"row",alignItems:"center",justifyContent:"flex-start",paddingHorizontal:10}} >
         <Pressable onPress={()=>navigation?.goBack()} >
            <Icon name="arrow-left" color={colors?.white} size={width/15} />
        </Pressable>
        <Text style={{color:colors.white,marginLeft:width/20,fontFamily:fonts?.PoppinsMedium}} >{title}</Text>
    </View>
    )
}



export function getTextColor(index){
    return index % 4 === 0 ? "#e4584c" : index % 4 === 1 ? "#ffb800" : index % 4 === 2 ? "#5182E0" : "#20C5B1"

}



export function ItemSeparatorComponent({borderHeight}){
    return(
        <View style={{width:width,height:borderHeight?borderHeight:1.5,backgroundColor:"#353638"}} />
    )
}



export const LoaderComponet = ({ visible }) => {
    return (
        <Modal style={{ flex: 1 }} visible={visible} transparent >
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#00000096" }} >
                <ActivityIndicator size={"large"} color={colors.primaryColor} />
            </View>
        </Modal>
    )
}



export function ShowErrorMessage(data) {
    console.log("DKSJDKLSD", data)
    showMessage({
        type: 'danger',
        icon: 'danger',
        message: data,
        duration: 1500

    })
}


export function ShowInfoMessage(data) {
    console.log("DKSJDKLSD", data)
    showMessage({
        type: 'info',
        icon: 'info',
        message: data,
        duration: 1500

    })
}


export function ShowSuccessMessage(data) {
    showMessage({
        type: 'success',
        icon: 'success',
        message: data
    })
}

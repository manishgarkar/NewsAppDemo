import React from "react";
import { FlatList, Image, Pressable, StatusBar, Text, View } from "react-native";
import { colors } from "../assects/colors";
import { width } from "../assects/strings";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import fonts from "../assects/fonts";
import { getTextColor } from ".";



function NewsListCardComponent({title,desc,image,source,onPressCard,onPressSave,onPressShare,index}){
  
    

    return(
        <View style={{width:width,alignItems:"center",paddingVertical:10}} >
            <Pressable onPress={onPressCard} style={{width:width/1.1,flexDirection:"row",alignItems:"flex-start",justifyContent:"space-between"}} >
                <View style={{width:width/1.8}} >
                    <Text  style={{color:getTextColor(index),fontFamily:fonts.PoppinsSemiBold}} >{title}:</Text>
                    <Text numberOfLines={3} style={{color:colors.white,fontFamily:fonts.PoppinsSemiBold}} >{desc}</Text>
                </View>
                <Image style={{width:width/3.8,height:width/5,borderRadius:5}} source={{uri:image}} />
            </Pressable>

            <View style={{width:width,flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:10}} >
                <Text style={{color:"#828385",fontFamily:fonts.PoppinsSemiBold,fontSize:12,paddingLeft:20}} >{source?.name}</Text>
                <View style={{width:width/2.5,flexDirection:"row",alignItems:"center",justifyContent:"space-around"}} >
                    <Pressable onPress={onPressSave} style={{flexDirection:"row",alignItems:"center"}} >
                        <Icon name="bookmark-outline" color={"#828385"}  size={width/18} />  
                        <Text style={{color:"#828385",fontFamily:fonts.PoppinsSemiBold,fontSize:12,marginHorizontal:5}} >सेव</Text>
                    </Pressable>

                    <Pressable  onPress={onPressShare} style={{flexDirection:"row",alignItems:"center"}} >
                    <Icon name="share-variant-outline" color={"#828385"} size={width/18} />  
                    <Text style={{color:"#828385",fontFamily:fonts.PoppinsSemiBold,fontSize:12,marginHorizontal:5}} >शेयर</Text>
                    </Pressable>
                </View>
            </View>
        </View>
        
    )
}

export default NewsListCardComponent;
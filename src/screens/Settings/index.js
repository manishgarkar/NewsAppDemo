import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../../assects/colors";
import { settingsArray, width } from "../../assects/strings";
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import NewsListCardComponent from "../../component/NewsListCardComponent";
import { FlatList } from "react-native-gesture-handler";
import fonts from "../../assects/fonts";
import { CustomeHeader, CustomeHeaderTitle } from "../../component";


function SettingsScreen(){

  
  

    function RenderList({item,index}){
        return(
           <View style={{width:width,height:width/8,flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:20}} >
            <Text style={{fontFamily:fonts?.PoppinsMedium,color:colors.white}} >{item?.name}</Text>
            <Icon name={item?.icon} color={"#e5e6eb"} size={width/17} />
           </View>
        )
    }

    function ItemSeparatorComponent(){
        return(
            <View style={{width:width,height:0.7,backgroundColor:"#353638"}} />
        )
    }

    function ListFooterComponent(){
        return(
            <View style={styles?.bottomViewContainer} >
                <Text style={styles?.bottomText} >Terms and Conditions</Text>
                <Text style={styles?.bottomText} >News Publisher Details</Text>
                <Text style={styles?.bottomText} >App Version v1.0</Text>
            </View>
        )
    }

    function ListHeaderComponent(){
        return(
            <View style={{width:width,flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderBottomColor:"#353638",borderBottomWidth:0.8,paddingBottom:20,paddingHorizontal:20}} >
                <View style={{flexDirection:"row",alignItems:"center"}} >
                    <View style={{width:width/7,height:width/7,alignItems:"center",justifyContent:"center",backgroundColor:colors?.white,borderRadius:100}} >
                        <Icon name="camera-outline" size={width/16} />
                    </View>
                    <View style={{marginLeft:10}} >
                        <Text style={{fontFamily:fonts?.PoppinsMedium,color:colors?.white}} >आपका स्वागत है </Text>
                        <Text style={{fontFamily:fonts?.PoppinsMedium,color:colors?.white}} >+911112223332 </Text>
                    </View>
                </View>
                <Icon name="circle-edit-outline" color={"#e5e6eb"} size={width/16} />
            </View>
        )
    }
    return(
        <View style={styles?.container} >
            <CustomeHeaderTitle title={"Settings"} />

            

            <FlatList 
                style={{paddingTop:10}}
                data={settingsArray} 
                renderItem={RenderList} 
                ItemSeparatorComponent={ItemSeparatorComponent}
                ListHeaderComponent={ListHeaderComponent}
                ListFooterComponent={ListFooterComponent}
            />

        </View>
    )
}

export default SettingsScreen;

const styles = StyleSheet.create({
    container:{flex:1,backgroundColor:colors?.secondryColor},
    bottomViewContainer:{paddingHorizontal:20,paddingVertical:15,borderTopColor:"#353638",borderTopWidth:0.5},
    bottomText:{fontFamily:fonts?.PoppinsLight,color:colors?.placeHolderTextColor,marginTop:width/20}
})

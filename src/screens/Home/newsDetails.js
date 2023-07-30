import React from "react";
import { FlatList, Image, Pressable, ScrollView, StatusBar, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CustomTopTab from "../../component/CustomTopTab";
import { colors } from "../../assects/colors";
import { width } from "../../assects/strings";
import { toneopimages } from "../../assects/Images/Toneop";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import fonts from "../../assects/fonts";
import { useNavigation } from "@react-navigation/native";
import { getTextColor } from "../../component";
import moment from "moment";
import NewsListCardComponent from "../../component/NewsListCardComponent";
import routes from "../../routes/routes";

const Tab = createMaterialTopTabNavigator();


function NewsDetails({route}){
    const navigation = useNavigation();
    const {details,index,articles} = route?.params;

  

    function CustomeHeader(){
        return(
        <View style={{width:width,height:width/7,flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:20,backgroundColor:colors.primaryColor}} >
            <Pressable onPress={()=>navigation?.goBack()} >
            <Icon name="arrow-left" color={colors?.white} size={width/15} />
            </Pressable>
            <View  style={{width:width/3,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}}>
                <Icon name="bookmark-outline" color={colors?.white} size={width/16} />
                <Icon name="share-variant-outline" color={colors?.green} size={width/16} />
            </View>
         </View>
        )
    }



    function ItemSeparatorComponent(){
        return(
            <View style={{width:width,height:1.5,backgroundColor:"#353638"}} />
        )
    }

    function RenderNewsList({item,index}){
        return(
            <NewsListCardComponent
            title={item?.title}
            desc={item?.description}
            image={item?.image}
            source={item?.source}
            index={index}
            onPressCard={()=>{navigation?.pop(),navigation?.navigate(routes?.newsDetails,{details:item,index})}}
            />
        )
    }



    function RenderCurrentNewsDetails(){
        return(
            <View style={{paddingHorizontal:20}} >
                <View style={{paddingVertical:10}} >
                    <Text  style={{color:getTextColor(index),fontFamily:fonts.PoppinsSemiBold,fontSize:15}} >{details?.title}:</Text>
                    <Text style={{color:colors.white,fontFamily:fonts.PoppinsSemiBold,fontSize:15}} >{details?.description}</Text>
            
                    <View style={{width:width/1.8,marginTop:5,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}} >
                        <Text style={{color:colors.textColor,fontFamily:fonts.PoppinsSemiBold,fontSize:12}} >{details?.source?.name}</Text>
                        <Text style={{color:colors.textColor,fontFamily:fonts.PoppinsSemiBold,fontSize:12}} >{moment(details?.publishedAt).local(['in','hi'])?.fromNow()}</Text>
                    </View>
                </View>


                <View>
                    <Image style={{width:width/1.10,height:width/1.5,alignSelf:"center",borderTopLeftRadius:5,borderTopRightRadius:5,marginTop:5}} source={{uri:details?.image}} />
                    <Pressable style={{width:width/1.09,height:width/10,flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:colors?.black,alignSelf:"center",borderBottomLeftRadius:5,borderBottomRightRadius:5,borderWidth:1,borderColor:colors.primaryColor}} >
                        <Icon name="share-variant-outline" color={"#828385"} size={width/18} />  
                        <Text style={{color:"#828385",fontFamily:fonts.PoppinsSemiBold,fontSize:12,marginHorizontal:5}} >शेयर</Text>
                    </Pressable>
                </View>

                <View  >
                <Text style={{color:colors.white,fontFamily:fonts.PoppinsSemiBold,fontSize:15}} >{details?.content}</Text>
                </View>



                <View style={{marginTop:width/10}} >
                <Text style={{color:colors.textColor,fontFamily:fonts.PoppinsSemiBold,fontSize:15}} >खबरे और भी है...</Text>
                </View>


            </View>
        )
    }

    return(
        <View style={{flex:1,backgroundColor:colors?.secondryColor}} >
            <CustomeHeader/>
          
            <FlatList 
                data={articles} 
                renderItem={RenderNewsList} 
                ListHeaderComponent={RenderCurrentNewsDetails}
                ItemSeparatorComponent={ItemSeparatorComponent}
                showsVerticalScrollIndicator={false}
            />


        </View>
    )
}

export default NewsDetails;
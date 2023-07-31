import React, { useEffect, useState } from "react";
import { FlatList, Image, StatusBar, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CustomTopTab from "../../component/CustomTopTab";
import { colors } from "../../assects/colors";
import { width } from "../../assects/strings";
import { toneopimages } from "../../assects/Images/Toneop";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import fonts from "../../assects/fonts";
import NewsListCardComponent from "../../component/NewsListCardComponent";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import routes from "../../routes/routes";
import { getTopHeadlines } from "../../api";
import { ItemSeparatorComponent, LoaderComponet } from "../../component";
import { fetchBreakingNews, fetchTechnologyNews } from "../../api/apiCalls";

const Tab = createMaterialTopTabNavigator();

function TechnologyNews(){
    const navigation = useNavigation();
    const [articles,setArticles] = useState([]);
    const [loading,setLoading] = useState(false);
    const isFocused = useIsFocused();



    useEffect(()=>{
         //  need to implement due to api failed with too many request
        setTimeout(()=>{
        fetchTechnologyNews({setLoading,setArticles})
        },1500)
   },[])

  


       
   function onRefresh() {
    fetchTechnologyNews({setLoading,setArticles})
    }
   

    function RenderNewsList({item,index}){
        return(
            <NewsListCardComponent
                title={item?.title}
                desc={item?.description}
                image={item?.image}
                source={item?.source}
                index={index}
                onPressCard={()=>navigation?.navigate(routes?.newsDetails,{details:item,index})}
            />
        )
    }
    function ListEmptyComponent(){
        return(
            <View style={{width:width,height:width,alignItems:"center",justifyContent:"center"}} >
                <Text style={{fontFamily:fonts?.PoppinsMedium,color:colors?.white}} >No data found</Text>
                <Text style={{fontFamily:fonts?.PoppinsMedium,color:colors?.white}}  >Pull to refresh and reload</Text>
            </View>
        )
    }
    

    return(
        <View style={{flex:1,backgroundColor:colors?.secondryColor}} >
            <FlatList 
                style={{paddingTop:10}}
                data={articles} 
                renderItem={RenderNewsList} 
                ItemSeparatorComponent={ItemSeparatorComponent}
                ListEmptyComponent={ListEmptyComponent}
                onRefresh={() => onRefresh()}
                refreshing={loading}
            />
            <LoaderComponet visible={loading} />
        </View>
    )
}

export default TechnologyNews;
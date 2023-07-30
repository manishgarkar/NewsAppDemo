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
import { useNavigation } from "@react-navigation/native";
import routes from "../../routes/routes";
import { getTopHeadlines } from "../../api";
import { ItemSeparatorComponent, LoaderComponet } from "../../component";
import { fetchInternationalNews } from "../../api/apiCalls";

const Tab = createMaterialTopTabNavigator();

function InternationalNews(){
    const navigation = useNavigation();
    const [articles,setArticles] = useState([]);
    const [loading,setLoading] = useState(false);


    useEffect(()=>{
        // fetchInternationalNews({setLoading,setArticles})
   },[])

   

   

   

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

    return(
        <View style={{flex:1,backgroundColor:colors?.secondryColor}} >
            <FlatList 
                style={{paddingTop:10}}
                data={articles} 
                renderItem={RenderNewsList} 
                ItemSeparatorComponent={ItemSeparatorComponent}
            />
            <LoaderComponet visible={loading} />

        </View>
    )
}

export default InternationalNews;
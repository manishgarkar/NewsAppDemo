import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../../assects/colors";
import { countries, width } from "../../assects/strings";
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import NewsListCardComponent from "../../component/NewsListCardComponent";
import { FlatList } from "react-native-gesture-handler";
import fonts from "../../assects/fonts";
import { ItemSeparatorComponent, LoaderComponet } from "../../component";
import { fetchBreakingNews, fetchSearchArticles } from "../../api/apiCalls";
import { useNavigation } from "@react-navigation/native";
import routes from "../../routes/routes";


function SearchScreen(){
    const navigation = useNavigation()
    const [text,setText] = useState("")
    const [articles,setArticles] = useState([]);
    const [loading,setLoading] = useState(false);


    useEffect(()=>{
         fetchBreakingNews({setLoading,setArticles})
    },[])


    function onSubmitEditing(){
       fetchSearchArticles({setLoading,setArticles,query:text})
    }

    function SearchContainer(){
        return(
            <View style={styles?.searchContainer} >
                <View style={styles?.searchBox} >
                    <Icon name="magnify" size={width/15} color={"#939496"} style={{marginLeft:10}}  />
                    <TextInput  onChangeText={setText} onSubmitEditing={onSubmitEditing} style={styles?.searchTextinput}   placeholder="विषय , शहर या राज्य खोजें" placeholderTextColor={"#939496"} />
                </View>
           </View>
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
                onPressCard={()=>navigation?.navigate(routes?.newsDetails,{details:item,index,articles})}
            />
        )
    }

    return(
        <View style={{flex:1,backgroundColor:colors?.secondryColor}} >
            {SearchContainer()}
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

export default SearchScreen;

const styles = StyleSheet.create({
    listContainer:{width:width,height:width/8,alignItems:"flex-start",justifyContent:"center",paddingHorizontal:20},
    text:{fontFamily:fonts?.PoppinsMedium,color:colors.white},
    searchContainer:{width:width,height:width/7,alignItems:"center",justifyContent:"center",backgroundColor:colors?.primaryColor},
    searchBox:{width:width/1.10,height:width/9,flexDirection:"row",alignItems:"center",backgroundColor:"#353638",borderRadius:5},
    searchTextinput:{flex:1,color:colors.white,paddingLeft:5}


})